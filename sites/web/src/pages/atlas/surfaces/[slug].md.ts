import type { APIRoute } from "astro";
import type { ResearchSurface } from "@canmyagentuse/catalog";
import { researchAtlas, researchSurfaceMarkdown } from "../../../lib/research";
import { markdownResponse } from "../../../lib/security";

export function getStaticPaths() {
  return researchAtlas.seed.surfaces.map((surface) => ({
    params: { slug: surface.surface_id },
    props: { surface },
  }));
}

export const GET: APIRoute<{ surface: ResearchSurface }> = async ({ props }) =>
  markdownResponse(researchSurfaceMarkdown(props.surface));
