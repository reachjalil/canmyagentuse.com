import { handle } from "@astrojs/cloudflare/handler";
import {
  markdownPathForPagePath,
  pagePathForMarkdownPath,
} from "@canmyagentuse/catalog";
import {
  applySecurityHeaders,
  publicMachineOptionsResponse,
  redirectCanonicalHost,
} from "./lib/security";
import { handleRepresentations } from "./lib/representations";

export interface CatalogWorkerEnv {
  ASSETS: Fetcher;
  PUBLIC_SITE_URL?: string;
  CF_VERSION_METADATA?: {
    id: string;
    tag: string;
    timestamp: string;
  };
}

declare global {
  interface Env extends CatalogWorkerEnv {}
}

export default {
  async fetch(request, env, ctx) {
    const redirect = redirectCanonicalHost(request);
    if (redirect) return redirect;
    const options = publicMachineOptionsResponse(request);
    if (options) return applySecurityHeaders(request, options);
    const response = await handleRepresentations(request, (upstreamRequest) => {
      const pathname = new URL(upstreamRequest.url).pathname;
      const isDocumentAsset = Boolean(
        markdownPathForPagePath(pathname) || pagePathForMarkdownPath(pathname)
      );
      const isRuntimeMarkdown = new Set([
        "/compare.md",
        "/matrix.md",
        "/search.md",
      ]).has(pathname);
      if (isDocumentAsset && !isRuntimeMarkdown) {
        return env.ASSETS.fetch(upstreamRequest);
      }
      return handle(upstreamRequest, env, ctx);
    });
    return applySecurityHeaders(request, response);
  },
} satisfies ExportedHandler<CatalogWorkerEnv>;
