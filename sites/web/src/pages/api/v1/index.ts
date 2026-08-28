import type { APIRoute } from "astro";
import {
  MACHINE_PATHS,
  SITE,
  absoluteUrl,
  catalogApiIndex,
} from "@canmyagentuse/catalog";

export const prerender = false;

const handler: APIRoute = ({ request }) =>
  new Response(
    request.method === "HEAD"
      ? null
      : JSON.stringify(catalogApiIndex(), null, 2),
    {
      headers: {
        "cache-control": "public, max-age=300",
        "content-type": "application/json; charset=utf-8",
        link: [
          `<${absoluteUrl(MACHINE_PATHS.apiCatalog, SITE.url)}>; rel="api-catalog"; type="application/linkset+json"`,
          `<${absoluteUrl(MACHINE_PATHS.openapi, SITE.url)}>; rel="service-desc"; type="application/vnd.oai.openapi+json"`,
          `<${absoluteUrl("/methodology", SITE.url)}>; rel="service-doc"; type="text/html"`,
        ].join(", "),
      },
    }
  );

export const GET = handler;
export const HEAD = handler;
