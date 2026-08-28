import type { APIRoute } from "astro";
import { CONFORMANCE_TESTS } from "@canmyagentuse/catalog";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () =>
  jsonResponse({
    executionNotice:
      "Test definitions are proposed and have not been run against catalog harnesses.",
    items: CONFORMANCE_TESTS,
  });
