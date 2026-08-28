import type { APIRoute } from "astro";
import { CATALOG_SKILL_DOCUMENT } from "@canmyagentuse/catalog";
import { markdownResponse } from "../../../lib/security";

const handler: APIRoute = ({ request }) =>
  request.method === "HEAD"
    ? new Response(null, {
        headers: {
          "cache-control": "public, max-age=300",
          "content-type": "text/markdown; charset=utf-8",
        },
      })
    : markdownResponse(CATALOG_SKILL_DOCUMENT);

export const GET = handler;
export const HEAD = handler;
