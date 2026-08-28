import type { APIRoute } from "astro";
import {
  countResearchStatuses,
  type ResearchVendor,
} from "@canmyagentuse/catalog";
import {
  researchAtlas,
  researchSurfaceJsonPath,
  researchSurfacePath,
  researchVendorContext,
  researchVendorMarkdownPath,
  researchVendorPath,
} from "../../../../../lib/research";
import { jsonResponse } from "../../../../../lib/security";

export function getStaticPaths() {
  return researchAtlas.seed.vendors.map((vendor) => ({
    params: { slug: vendor.vendor_id },
    props: { vendor },
  }));
}

export const GET: APIRoute<{ vendor: ResearchVendor }> = async ({ props }) => {
  const context = researchVendorContext(props.vendor);
  return jsonResponse({
    research_cutoff: researchAtlas.seed.research_cutoff,
    evidence_notice:
      "Provider names identify research targets and do not imply affiliation. Coverage is not a quality score.",
    vendor: context.vendor,
    products: context.products,
    counts: context.statuses,
    summary: context.summary,
    html: researchVendorPath(context.vendor.vendor_id),
    markdown: researchVendorMarkdownPath(context.vendor.vendor_id),
    surfaces: context.surfaces.map((surface) => ({
      ...surface,
      counts: countResearchStatuses(
        researchAtlas.cellsBySurface.get(surface.surface_id) ?? []
      ),
      html: researchSurfacePath(surface.surface_id),
      json: researchSurfaceJsonPath(surface.surface_id),
    })),
  });
};
