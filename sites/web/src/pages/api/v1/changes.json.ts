import type { APIRoute } from "astro";
import { ECOSYSTEM_CHANGES } from "@canmyagentuse/catalog";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () =>
  jsonResponse({ items: ECOSYSTEM_CHANGES });
