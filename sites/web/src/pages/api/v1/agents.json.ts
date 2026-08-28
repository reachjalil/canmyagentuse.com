import type { APIRoute } from "astro";
import { MACHINE_PATHS } from "@canmyagentuse/catalog";

export const GET: APIRoute = () =>
  new Response(null, {
    status: 301,
    headers: { location: MACHINE_PATHS.harnessesJson },
  });
