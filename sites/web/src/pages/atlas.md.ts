import type { APIRoute } from "astro";
import { researchAtlasMarkdown } from "../lib/research";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () =>
  markdownResponse(researchAtlasMarkdown());
