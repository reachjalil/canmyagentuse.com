import type { APIRoute } from "astro";
import { catalogOpenApi } from "@canmyagentuse/catalog";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = () => jsonResponse(catalogOpenApi());
