import { canonicalPromptDocument } from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";
import { textResponse } from "../lib/security";

const handler: APIRoute = ({ request }) =>
  request.method === "HEAD"
    ? new Response(null, {
        headers: {
          "cache-control": "public, max-age=300",
          "content-type": "text/plain; charset=utf-8",
        },
      })
    : textResponse(canonicalPromptDocument());

export const GET = handler;
export const HEAD = handler;
