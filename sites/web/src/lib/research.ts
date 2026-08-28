import {
  RESEARCH_STATUS_LABELS,
  buildResearchAtlas,
  countResearchStatuses,
  researchCellKey,
  researchFeatureSlug,
  splitResearchSourceKeys,
  type ResearchCompatibilityCell,
  type ResearchFeature,
  type ResearchSeed,
  type ResearchSource,
  type ResearchSurface,
  type ResearchVendor,
} from "@canmyagentuse/catalog";
import researchSeedSource from "../../../../md/deep-dive-research-canmyagentuse-compatibility-seed-2026-08-28/data/compatibility-seed.json?raw";

export const researchSeed = JSON.parse(researchSeedSource) as ResearchSeed;
export const researchAtlas = buildResearchAtlas(researchSeed);

export function researchSurfacePath(surfaceId: string): string {
  return `/atlas/surfaces/${surfaceId}`;
}

export function researchSurfaceMarkdownPath(surfaceId: string): string {
  return `${researchSurfacePath(surfaceId)}.md`;
}

export function researchSurfaceJsonPath(surfaceId: string): string {
  return `/api/v1/atlas/surfaces/${surfaceId}.json`;
}

export function researchFeaturePath(featureId: string): string {
  return `/atlas/features/${researchFeatureSlug(featureId)}`;
}

export function researchFeatureMarkdownPath(featureId: string): string {
  return `${researchFeaturePath(featureId)}.md`;
}

export function researchFeatureJsonPath(featureId: string): string {
  return `/api/v1/atlas/features/${researchFeatureSlug(featureId)}.json`;
}

export function researchVendorPath(vendorId: string): string {
  return `/atlas/vendors/${vendorId}`;
}

export function researchVendorMarkdownPath(vendorId: string): string {
  return `${researchVendorPath(vendorId)}.md`;
}

export function researchVendorJsonPath(vendorId: string): string {
  return `/api/v1/atlas/vendors/${vendorId}.json`;
}

export function researchSourcesForCell(
  cell: ResearchCompatibilityCell
): ResearchSource[] {
  return splitResearchSourceKeys(cell.source_keys).flatMap((sourceKey) => {
    const source = researchAtlas.sourcesById.get(sourceKey);
    return source ? [source] : [];
  });
}

export function researchCellPayload(cell: ResearchCompatibilityCell) {
  return {
    ...cell,
    status_label: RESEARCH_STATUS_LABELS[cell.primary_status],
    feature_path: researchFeaturePath(cell.feature_id),
    surface_path: researchSurfacePath(cell.surface_id),
    assertions:
      researchAtlas.assertionsByCell.get(
        researchCellKey(cell.surface_id, cell.feature_id)
      ) ?? [],
    sources: researchSourcesForCell(cell),
  };
}

export function researchSurfaceContext(surface: ResearchSurface) {
  const product = researchAtlas.productsById.get(surface.product_id);
  const vendor = product
    ? researchAtlas.vendorsById.get(product.vendor_id)
    : undefined;
  if (!product || !vendor) {
    throw new Error(
      `Research surface ${surface.surface_id} has invalid context.`
    );
  }
  const cells = [
    ...(researchAtlas.cellsBySurface.get(surface.surface_id) ?? []),
  ].toSorted(
    (left, right) =>
      left.feature_group.localeCompare(right.feature_group) ||
      left.feature_name.localeCompare(right.feature_name)
  );
  return {
    surface,
    product,
    vendor,
    cells,
    statuses: countResearchStatuses(cells),
  };
}

export function researchFeatureContext(feature: ResearchFeature) {
  const cells = [
    ...(researchAtlas.cellsByFeature.get(feature.feature_id) ?? []),
  ].toSorted(
    (left, right) =>
      left.vendor_name.localeCompare(right.vendor_name) ||
      left.surface_name.localeCompare(right.surface_name)
  );
  return {
    feature,
    cells,
    statuses: countResearchStatuses(cells),
  };
}

export function researchVendorContext(vendor: ResearchVendor) {
  const products = researchSeed.products.filter(
    (product) => product.vendor_id === vendor.vendor_id
  );
  const productIds = new Set(products.map((product) => product.product_id));
  const surfaces = researchSeed.surfaces
    .filter((surface) => productIds.has(surface.product_id))
    .toSorted((left, right) =>
      left.surface_name.localeCompare(right.surface_name)
    );
  const surfaceIds = new Set(surfaces.map((surface) => surface.surface_id));
  const cells = researchSeed.compatibility_cells.filter((cell) =>
    surfaceIds.has(cell.surface_id)
  );
  return {
    vendor,
    products,
    surfaces,
    statuses: countResearchStatuses(cells),
    summary: researchAtlas.summariesByVendor.get(vendor.vendor_id),
  };
}

function markdownCell(value: string | number | undefined): string {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ")
    .trim();
}

function markdownSources(cell: ResearchCompatibilityCell): string {
  const sources = researchSourcesForCell(cell);
  return sources.length === 0
    ? "—"
    : sources
        .map((source) => `[${source.source_key}](${source.url})`)
        .join(", ");
}

function markdownHeader(
  title: string,
  summary: string,
  canonicalPath: string,
  contentKind: "page" | "feature" | "harness"
): string {
  return `---
title: ${JSON.stringify(title)}
canonical: ${JSON.stringify(new URL(canonicalPath, "https://canmyagentuse.com").toString())}
contentKind: ${JSON.stringify(contentKind)}
locale: "en"
description: ${JSON.stringify(summary)}
llmSummary: ${JSON.stringify(summary)}
publishedAt: null
updatedAt: ${JSON.stringify(`${researchSeed.research_cutoff}T00:00:00.000Z`)}
verifiedAt: ${JSON.stringify(researchSeed.research_cutoff)}
tags: ["evidence-atlas", "research"]
---

# ${title}

${summary}

Research cutoff: ${researchSeed.research_cutoff}. Documentation and registry evidence are not runtime certification. Unknown means the package did not establish a defensible claim; it does not mean unsupported.
`;
}

export function researchAtlasMarkdown(): string {
  const report = researchAtlas.report;
  const status = report.statuses;
  const vendors = researchSeed.summary_by_vendor
    .toSorted((left, right) =>
      left.vendor_name.localeCompare(right.vendor_name)
    )
    .map(
      (vendor) =>
        `| [${markdownCell(vendor.vendor_name)}](${researchVendorPath(vendor.vendor_id)}) | ${vendor.coverage_tier} | ${vendor.surface_count} | ${vendor.supported_cells} | ${vendor.partial_cells} | ${vendor.unsupported_cells} | ${vendor.unknown_cells} |`
    )
    .join("\n");
  return `${markdownHeader(
    "Evidence Atlas",
    "The complete 2026-08-28 documentation-backed compatibility seed, kept separate from the curated web/desktop/CLI matrix so every claim retains its exact surface.",
    "/atlas",
    "page"
  )}\n## Snapshot\n\n- Vendors: ${report.vendors}\n- Products: ${report.products}\n- Exact surfaces: ${report.surfaces}\n- Atomic features: ${report.features}\n- Compatibility cells: ${report.compatibilityCells}\n- Supported: ${status.supported}\n- Partial: ${status.partial}\n- Explicit unsupported: ${status.unsupported}\n- Unknown: ${status.unknown}\n- Source records: ${report.sources}\n- Long-form assertions: ${report.assertions}\n\n## Vendor coverage\n\n| Vendor | Tier | Surfaces | Supported | Partial | Unsupported | Unknown |\n| --- | --- | ---: | ---: | ---: | ---: | ---: |\n${vendors}\n\n## Machine-readable entry points\n\n- [Atlas JSON](/api/v1/atlas.json)\n- [Source ledger](/atlas/sources)\n- [Curated matrix](/matrix)\n`;
}

export function researchSourcesMarkdown(): string {
  const rows = researchSeed.sources
    .toSorted(
      (left, right) =>
        left.publisher.localeCompare(right.publisher) ||
        left.title.localeCompare(right.title)
    )
    .map(
      (source) =>
        `| [${source.source_key}](${source.url}) | ${markdownCell(source.title)} | ${markdownCell(source.publisher)} | ${markdownCell(source.source_type)} | ${markdownCell(source.retrieved_at_utc.slice(0, 10))} | ${source.archive_url.startsWith("http") ? `[archive](${source.archive_url})` : "unavailable"} |`
    )
    .join("\n");
  return `${markdownHeader(
    "Evidence Atlas source ledger",
    `${researchSeed.sources.length} public source records used by the compatibility seed. A source record establishes provenance; it is not a product-wide compatibility claim.`,
    "/atlas/sources",
    "page"
  )}\nAutomated archive submission was unavailable during this research pass. Live documentation remains mutable.\n\n| ID | Source | Publisher | Type | Retrieved | Archive |\n| --- | --- | --- | --- | --- | --- |\n${rows}\n\n[HTML](/atlas/sources) · [Atlas JSON](/api/v1/atlas.json)\n`;
}

export function researchSurfaceMarkdown(surface: ResearchSurface): string {
  const context = researchSurfaceContext(surface);
  const rows = context.cells
    .map(
      (cell) =>
        `| [${markdownCell(cell.feature_name)}](${researchFeaturePath(cell.feature_id)}) | ${RESEARCH_STATUS_LABELS[cell.primary_status]} | ${markdownCell(cell.evidence_methods || "—")} | ${markdownCell(cell.qualifiers || cell.notes || "—")} | ${markdownSources(cell)} |`
    )
    .join("\n");
  return `${markdownHeader(
    context.surface.surface_name,
    `${context.vendor.vendor_name} / ${context.product.product_name}. Exact research surface: ${context.surface.surface_id}.`,
    researchSurfacePath(surface.surface_id),
    "harness"
  )}\n- Surface type: ${context.surface.surface_type}\n- Version or observation: ${context.surface.version_or_observation}\n- Availability: ${context.surface.availability}\n- Coverage tier: ${context.surface.coverage_tier}\n- Supported: ${context.statuses.supported}\n- Partial: ${context.statuses.partial}\n- Explicit unsupported: ${context.statuses.unsupported}\n- Unknown: ${context.statuses.unknown}\n\n| Feature | Status | Evidence method | Conditions / notes | Sources |\n| --- | --- | --- | --- | --- |\n${rows}\n\n[HTML](${researchSurfacePath(surface.surface_id)}) · [JSON](${researchSurfaceJsonPath(surface.surface_id)}) · [Vendor](${researchVendorPath(context.vendor.vendor_id)})\n`;
}

export function researchFeatureMarkdown(feature: ResearchFeature): string {
  const context = researchFeatureContext(feature);
  const rows = context.cells
    .map(
      (cell) =>
        `| [${markdownCell(cell.surface_name)}](${researchSurfacePath(cell.surface_id)}) | ${markdownCell(cell.vendor_name)} | ${markdownCell(cell.surface_type)} | ${RESEARCH_STATUS_LABELS[cell.primary_status]} | ${markdownCell(cell.qualifiers || cell.notes || "—")} | ${markdownSources(cell)} |`
    )
    .join("\n");
  return `${markdownHeader(feature.feature_name, feature.description, researchFeaturePath(feature.feature_id), "feature")}\n- Feature ID: ${feature.feature_id}\n- Group: ${feature.feature_group}\n- Role: ${feature.role}\n- Testability: ${feature.testability}\n- Supported: ${context.statuses.supported}\n- Partial: ${context.statuses.partial}\n- Explicit unsupported: ${context.statuses.unsupported}\n- Unknown: ${context.statuses.unknown}\n\n| Exact surface | Vendor | Type | Status | Conditions / notes | Sources |\n| --- | --- | --- | --- | --- | --- |\n${rows}\n\n[HTML](${researchFeaturePath(feature.feature_id)}) · [JSON](${researchFeatureJsonPath(feature.feature_id)})\n`;
}

export function researchVendorMarkdown(vendor: ResearchVendor): string {
  const context = researchVendorContext(vendor);
  const rows = context.surfaces
    .map((surface) => {
      const statuses = countResearchStatuses(
        researchAtlas.cellsBySurface.get(surface.surface_id) ?? []
      );
      return `| [${markdownCell(surface.surface_name)}](${researchSurfacePath(surface.surface_id)}) | ${markdownCell(surface.surface_type)} | ${markdownCell(surface.version_or_observation)} | ${statuses.supported} | ${statuses.partial} | ${statuses.unsupported} | ${statuses.unknown} |`;
    })
    .join("\n");
  return `${markdownHeader(
    vendor.vendor_name,
    `${vendor.inclusion_basis}. Provider name is a plain-text reference; Can My Agent Use is independent and not affiliated with the provider.`,
    researchVendorPath(vendor.vendor_id),
    "page"
  )}\n- Coverage tier: ${vendor.coverage_tier}\n- Products: ${context.products.length}\n- Exact surfaces: ${context.surfaces.length}\n- Supported cells: ${context.statuses.supported}\n- Partial cells: ${context.statuses.partial}\n- Explicit unsupported cells: ${context.statuses.unsupported}\n- Unknown cells: ${context.statuses.unknown}\n\n| Exact surface | Type | Version / observation | Supported | Partial | Unsupported | Unknown |\n| --- | --- | --- | ---: | ---: | ---: | ---: |\n${rows}\n\n[HTML](${researchVendorPath(vendor.vendor_id)}) · [JSON](${researchVendorJsonPath(vendor.vendor_id)})\n`;
}
