import type { APIRoute } from "astro";
import { jsonResponse } from "../../lib/security";

export const prerender = false;

export const GET: APIRoute = () =>
  jsonResponse({
    ok: true,
    service: "canmyagentuse",
  });
