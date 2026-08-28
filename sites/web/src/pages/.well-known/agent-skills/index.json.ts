import type { APIRoute } from "astro";
import {
  CATALOG_SKILL_DOCUMENT,
  catalogSkillIndex,
} from "@canmyagentuse/catalog";
import { sha256Digest } from "../../../lib/digest";

export const prerender = false;

const handler: APIRoute = async ({ request }) => {
  const digest = await sha256Digest(CATALOG_SKILL_DOCUMENT);
  return new Response(
    request.method === "HEAD"
      ? null
      : JSON.stringify(catalogSkillIndex(digest), null, 2),
    {
      headers: {
        "cache-control": "public, max-age=300",
        "content-type": "application/json; charset=utf-8",
      },
    }
  );
};

export const GET = handler;
export const HEAD = handler;
