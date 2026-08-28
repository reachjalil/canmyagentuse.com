import type { APIRoute } from "astro";
import type { ResearchSurface } from "@canmyagentuse/catalog";
import {
  researchAtlas,
  researchCellPayload,
  researchSurfaceContext,
  researchSurfaceMarkdownPath,
  researchSurfacePath,
  researchVendorPath,
} from "../../../../../lib/research";
import { jsonResponse } from "../../../../../lib/security";

export function getStaticPaths() {
  return researchAtlas.seed.surfaces.map((surface) => ({
    params: { slug: surface.surface_id },
    props: { surface },
  }));
}

export const GET: APIRoute<{ surface: ResearchSurface }> = async ({
  props,
}) => {
  const context = researchSurfaceContext(props.surface);
  return jsonResponse({
    research_cutoff: researchAtlas.seed.research_cutoff,
    evidence_notice:
      "Documentation and registry evidence are not runtime certification. Unknown is not unsupported.",
    surface: context.surface,
    product: context.product,
    vendor: context.vendor,
    counts: context.statuses,
    html: researchSurfacePath(context.surface.surface_id),
    markdown: researchSurfaceMarkdownPath(context.surface.surface_id),
    vendor_path: researchVendorPath(context.vendor.vendor_id),
    cells: context.cells.map(researchCellPayload),
  });
};
