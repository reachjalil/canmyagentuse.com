import type { APIRoute } from "astro";
import { researchSourcesMarkdown } from "../../lib/research";
import { markdownResponse } from "../../lib/security";

export const GET: APIRoute = async () =>
  markdownResponse(researchSourcesMarkdown());
