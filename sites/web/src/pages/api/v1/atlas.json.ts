import type { APIRoute } from "astro";
import { researchFeatureSlug } from "@canmyagentuse/catalog";
import {
  researchAtlas,
  researchFeatureJsonPath,
  researchFeatureMarkdownPath,
  researchFeaturePath,
  researchSurfaceJsonPath,
  researchSurfaceMarkdownPath,
  researchSurfacePath,
  researchVendorJsonPath,
  researchVendorMarkdownPath,
  researchVendorPath,
} from "../../../lib/research";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const { report, seed } = researchAtlas;
  return jsonResponse({
    generated_at_utc: seed.generated_at_utc,
    research_cutoff: seed.research_cutoff,
    scope: seed.scope,
    evidence_notice:
      "Documentation and registry evidence are not runtime certification. Unknown is not unsupported.",
    counts: report,
    status_vocabulary: seed.status_vocabulary,
    limitations: seed.limitations,
    routes: {
      html: "/atlas",
      markdown: "/atlas.md",
      sources: "/atlas/sources",
    },
    vendors: seed.vendors.map((vendor) => ({
      ...vendor,
      summary: researchAtlas.summariesByVendor.get(vendor.vendor_id),
      html: researchVendorPath(vendor.vendor_id),
      markdown: researchVendorMarkdownPath(vendor.vendor_id),
      json: researchVendorJsonPath(vendor.vendor_id),
    })),
    products: seed.products,
    surfaces: seed.surfaces.map((surface) => ({
      ...surface,
      html: researchSurfacePath(surface.surface_id),
      markdown: researchSurfaceMarkdownPath(surface.surface_id),
      json: researchSurfaceJsonPath(surface.surface_id),
    })),
    features: seed.features.map((feature) => ({
      ...feature,
      slug: researchFeatureSlug(feature.feature_id),
      html: researchFeaturePath(feature.feature_id),
      markdown: researchFeatureMarkdownPath(feature.feature_id),
      json: researchFeatureJsonPath(feature.feature_id),
    })),
    sources: seed.sources,
    registry_inventory: seed.registry_inventory,
    proposed_tests: seed.test_backlog,
  });
};
