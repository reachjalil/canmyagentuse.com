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
import { brandReferencePayload } from "../../../../../lib/brand";

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
      "Coverage measures research completeness, not product quality.",
    vendor: context.vendor,
    brand: brandReferencePayload({ provider: context.vendor.vendor_name }),
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
