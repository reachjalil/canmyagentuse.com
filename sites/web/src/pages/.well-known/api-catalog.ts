import type { APIRoute } from "astro";
import {
  API_CATALOG_PROFILE,
  MACHINE_PATHS,
  SITE,
  absoluteUrl,
  catalogApiLinkset,
} from "@canmyagentuse/catalog";

export const prerender = false;

const handler: APIRoute = ({ request }) =>
  new Response(
    request.method === "HEAD"
      ? null
      : JSON.stringify(catalogApiLinkset(), null, 2),
    {
      headers: {
        "cache-control": "public, max-age=300",
        "content-type": `application/linkset+json; profile="${API_CATALOG_PROFILE}"`,
        link: `<${absoluteUrl(MACHINE_PATHS.apiCatalog, SITE.url)}>; rel="api-catalog"; type="application/linkset+json"`,
      },
    }
  );

export const GET = handler;
export const HEAD = handler;
