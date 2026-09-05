import { expandFeatureSupport } from "./matrix.ts";
import { absoluteUrl } from "./paths.ts";
import type { ProductData } from "./product.ts";
import type { FeatureData, HarnessData, SpecificationData } from "./schema.ts";
import { type SearchKind, searchCatalog } from "./search.ts";

export interface McpCatalog {
  products: ProductData[];
  features: FeatureData[];
  harnesses: HarnessData[];
  specifications: SpecificationData[];
}

export const CATALOG_EVIDENCE_POLICY =
  "Results reflect the published catalog, not a live test of your account. Unknown means insufficient evidence, not unsupported. Preserve exact surface, track, qualifications, evidence class, and observation/review dates. Cite catalog and primary source URLs.";

export function searchMcpCatalog(
  catalog: McpCatalog,
  query: string,
  kind?: SearchKind,
  limit = 10,
  offset = 0
) {
  const hits = searchCatalog(query, catalog).hits.filter(
    (hit) => !kind || hit.kind === kind
  );
  return {
    evidencePolicy: CATALOG_EVIDENCE_POLICY,
    total: hits.length,
    nextOffset: offset + limit < hits.length ? offset + limit : null,
    results: hits.slice(offset, offset + limit).map((hit) => ({
      ...hit,
      url: absoluteUrl(hit.path),
      markdown: absoluteUrl(`${hit.path}.md`),
    })),
  };
}

export function checkCatalogCompatibility(
  catalog: McpCatalog,
  featureSlug: string,
  harnessSlug: string,
  track = "current"
) {
  const feature = catalog.features.find((item) => item.slug === featureSlug);
  const harness = catalog.harnesses.find((item) => item.slug === harnessSlug);
  if (!feature || !harness)
    throw new Error(
      "Unknown feature or harness slug. Use search_catalog to find exact identifiers."
    );
  if (feature.capabilityKind === "family")
    throw new Error(
      "This is a capability family, not a support assertion. Fetch its record and check an atomic child feature."
    );
  if (!harness.tracks.includes(track))
    throw new Error(
      `Unknown track. Available tracks: ${harness.tracks.join(", ")}`
    );
  const version = expandFeatureSupport(feature, [
    harness,
    ...catalog.harnesses.filter((item) => item.slug !== harnessSlug),
  ])[0]?.versions.find((item) => item.track === track);
  return {
    evidencePolicy: CATALOG_EVIDENCE_POLICY,
    feature: {
      slug: feature.slug,
      title: feature.title,
      url: absoluteUrl(`/features/${feature.slug}`),
      updated: feature.updated,
    },
    harness: {
      slug: harness.slug,
      title: harness.title,
      surface: harness.surface,
      url: absoluteUrl(`/harnesses/${harness.slug}`),
      updated: harness.updated,
    },
    assessment: version,
    notes: feature.notes,
    resources: feature.resources,
  };
}
