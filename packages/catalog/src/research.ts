export const RESEARCH_STATUSES = [
  "supported",
  "partial",
  "unsupported",
  "unknown",
] as const;

export type ResearchStatus = (typeof RESEARCH_STATUSES)[number];

export const RESEARCH_STATUS_LABELS = {
  supported: "Supported",
  partial: "Partial",
  unsupported: "Unsupported",
  unknown: "Unknown",
} as const satisfies Record<ResearchStatus, string>;

export const RESEARCH_STATUS_MARKS = {
  supported: "Y",
  partial: "P",
  unsupported: "N",
  unknown: "?",
} as const satisfies Record<ResearchStatus, string>;

export interface ResearchScope {
  acp_registry_complete: boolean;
  acp_registry_entries: number;
  agent_plugins_client_list_complete: boolean;
  agent_plugins_clients: number;
  adjacent_harnesses: string;
  claim: string;
}

export interface ResearchVendor {
  vendor_id: string;
  vendor_name: string;
  website: string;
  coverage_tier: string;
  inclusion_basis: string;
  category: string;
  notes: string;
}

export interface ResearchProduct {
  product_id: string;
  vendor_id: string;
  product_name: string;
  category: string;
  lifecycle: string;
  source_key: string;
  notes: string;
}

export interface ResearchSurface {
  surface_id: string;
  product_id: string;
  surface_name: string;
  surface_type: string;
  version_or_observation: string;
  availability: string;
  coverage_tier: string;
  source_key: string;
  registry_role: string;
  registry_version: string;
  notes: string;
}

export interface ResearchFeature {
  feature_id: string;
  feature_group: string;
  feature_name: string;
  description: string;
  role: string;
  parent_feature_id: string;
  testability: string;
}

export interface ResearchAssertion {
  assertion_id: string;
  surface_id: string;
  feature_id: string;
  status: ResearchStatus;
  evidence_method: string;
  implementation_mode: string;
  availability: string;
  confidence: string;
  environment_scope: string;
  qualifiers: string;
  source_keys: string;
  last_verified_at: string;
  notes: string;
}

export interface ResearchCompatibilityCell {
  vendor_id: string;
  vendor_name: string;
  product_id: string;
  product_name: string;
  surface_id: string;
  surface_name: string;
  surface_type: string;
  version_or_observation: string;
  surface_availability: string;
  coverage_tier: string;
  feature_id: string;
  feature_group: string;
  feature_name: string;
  primary_status: ResearchStatus;
  status_detail: string;
  assertion_count: number;
  evidence_methods: string;
  confidence: string;
  environment_scopes: string;
  qualifiers: string;
  source_keys: string;
  notes: string;
  last_verified_at: string;
}

export interface ResearchSource {
  source_key: string;
  title: string;
  url: string;
  archive_url: string;
  publisher: string;
  published_at: string;
  retrieved_at_utc: string;
  source_type: string;
  role: string;
  confidence: string;
  notes: string;
}

export interface ResearchVendorSummary {
  vendor_id: string;
  vendor_name: string;
  coverage_tier: string;
  inclusion_basis: string;
  surface_count: number;
  supported_cells: number;
  partial_cells: number;
  unsupported_cells: number;
  unknown_cells: number;
  non_unknown_cells: number;
  evidence_coverage_percent: number;
  notes: string;
}

export interface ResearchRegistryEntry {
  registry: string;
  entry_name: string;
  version_or_components: string;
  mapped_surface_id: string;
  claim_scope: string;
  source_key: string;
  confidence: string;
  notes: string;
}

export interface ResearchExplicitNonSupport {
  vendor_name: string;
  product_name: string;
  surface_id: string;
  surface_name: string;
  feature_id: string;
  feature_name: string;
  environment_scope: string;
  source_keys: string;
  qualifiers: string;
  notes: string;
}

export interface ResearchEvidenceGap {
  vendor_name: string;
  surface_id: string;
  surface_name: string;
  feature_id: string;
  feature_name: string;
  priority: string;
  recommended_resolution: string;
  notes: string;
}

export interface ResearchTest {
  test_id: string;
  priority: string;
  feature_id: string;
  target_scope: string;
  test_type: string;
  fixture: string;
  expected: string;
  risk: string;
  source_keys: string;
}

export interface ResearchSeed {
  generated_at_utc: string;
  research_cutoff: string;
  scope: ResearchScope;
  status_vocabulary: string[];
  vendors: ResearchVendor[];
  products: ResearchProduct[];
  surfaces: ResearchSurface[];
  features: ResearchFeature[];
  assertions: ResearchAssertion[];
  compatibility_cells: ResearchCompatibilityCell[];
  compatibility_matrix_summary: Array<Record<string, string>>;
  registry_inventory: ResearchRegistryEntry[];
  explicit_non_support: ResearchExplicitNonSupport[];
  evidence_gaps: ResearchEvidenceGap[];
  sources: ResearchSource[];
  summary_by_vendor: ResearchVendorSummary[];
  test_backlog: ResearchTest[];
  limitations: string[];
}

export interface ResearchStatusCounts {
  supported: number;
  partial: number;
  unsupported: number;
  unknown: number;
  total: number;
  sourced: number;
  coverage: number;
}

export interface ResearchSeedReport {
  vendors: number;
  products: number;
  surfaces: number;
  features: number;
  assertions: number;
  sources: number;
  compatibilityCells: number;
  registryEntries: number;
  evidenceGaps: number;
  proposedTests: number;
  statuses: ResearchStatusCounts;
}

export interface ResearchAtlas {
  seed: ResearchSeed;
  report: ResearchSeedReport;
  vendorsById: ReadonlyMap<string, ResearchVendor>;
  productsById: ReadonlyMap<string, ResearchProduct>;
  surfacesById: ReadonlyMap<string, ResearchSurface>;
  featuresById: ReadonlyMap<string, ResearchFeature>;
  featuresBySlug: ReadonlyMap<string, ResearchFeature>;
  sourcesById: ReadonlyMap<string, ResearchSource>;
  cellsBySurface: ReadonlyMap<string, ResearchCompatibilityCell[]>;
  cellsByFeature: ReadonlyMap<string, ResearchCompatibilityCell[]>;
  assertionsByCell: ReadonlyMap<string, ResearchAssertion[]>;
  summariesByVendor: ReadonlyMap<string, ResearchVendorSummary>;
}

function uniqueMap<T>(
  values: readonly T[],
  key: (value: T) => string,
  label: string
): Map<string, T> {
  const result = new Map<string, T>();
  for (const value of values) {
    const id = key(value);
    if (!id) throw new Error(`Research ${label} contains an empty identifier.`);
    if (result.has(id)) {
      throw new Error(`Research ${label} contains duplicate identifier ${id}.`);
    }
    result.set(id, value);
  }
  return result;
}

function groupBy<T>(values: readonly T[], key: (value: T) => string) {
  const result = new Map<string, T[]>();
  for (const value of values) {
    const id = key(value);
    const group = result.get(id) ?? [];
    group.push(value);
    result.set(id, group);
  }
  return result;
}

export function researchFeatureSlug(featureId: string): string {
  return featureId
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function researchCellKey(surfaceId: string, featureId: string): string {
  return `${surfaceId}\u0000${featureId}`;
}

export function splitResearchSourceKeys(sourceKeys: string): string[] {
  return sourceKeys
    .split(";")
    .map((value) => value.trim())
    .filter(Boolean);
}

export function countResearchStatuses(
  cells: readonly ResearchCompatibilityCell[]
): ResearchStatusCounts {
  const counts = Object.fromEntries(
    RESEARCH_STATUSES.map((status) => [
      status,
      cells.filter((cell) => cell.primary_status === status).length,
    ])
  ) as Record<ResearchStatus, number>;
  const total = cells.length;
  const sourced = total - counts.unknown;
  return {
    ...counts,
    total,
    sourced,
    coverage: total === 0 ? 0 : sourced / total,
  };
}

function assertReference(
  collection: ReadonlyMap<string, unknown>,
  value: string,
  description: string
) {
  if (!collection.has(value)) {
    throw new Error(`${description} references missing identifier ${value}.`);
  }
}

export function validateResearchSeed(seed: ResearchSeed): ResearchSeedReport {
  const statusVocabulary = new Set(seed.status_vocabulary);
  for (const status of RESEARCH_STATUSES) {
    if (!statusVocabulary.has(status)) {
      throw new Error(`Research status vocabulary is missing ${status}.`);
    }
  }

  const vendorsById = uniqueMap(
    seed.vendors,
    (row) => row.vendor_id,
    "vendors"
  );
  const productsById = uniqueMap(
    seed.products,
    (row) => row.product_id,
    "products"
  );
  const surfacesById = uniqueMap(
    seed.surfaces,
    (row) => row.surface_id,
    "surfaces"
  );
  const featuresById = uniqueMap(
    seed.features,
    (row) => row.feature_id,
    "features"
  );
  const sourcesById = uniqueMap(
    seed.sources,
    (row) => row.source_key,
    "sources"
  );
  uniqueMap(seed.assertions, (row) => row.assertion_id, "assertions");

  const featureSlugs = uniqueMap(
    seed.features,
    (row) => researchFeatureSlug(row.feature_id),
    "feature slugs"
  );
  if (featureSlugs.size !== featuresById.size) {
    throw new Error("Research feature slugs are not one-to-one.");
  }

  for (const product of seed.products) {
    assertReference(
      vendorsById,
      product.vendor_id,
      `Product ${product.product_id}`
    );
  }
  for (const surface of seed.surfaces) {
    assertReference(
      productsById,
      surface.product_id,
      `Surface ${surface.surface_id}`
    );
  }

  const cellKeys = new Set<string>();
  for (const cell of seed.compatibility_cells) {
    assertReference(
      surfacesById,
      cell.surface_id,
      `Compatibility cell for ${cell.feature_id}`
    );
    assertReference(
      featuresById,
      cell.feature_id,
      `Compatibility cell for ${cell.surface_id}`
    );
    if (!RESEARCH_STATUSES.includes(cell.primary_status)) {
      throw new Error(
        `Compatibility cell ${cell.surface_id}/${cell.feature_id} has invalid status ${cell.primary_status}.`
      );
    }
    const key = researchCellKey(cell.surface_id, cell.feature_id);
    if (cellKeys.has(key)) {
      throw new Error(
        `Duplicate compatibility cell ${cell.surface_id}/${cell.feature_id}.`
      );
    }
    cellKeys.add(key);
    for (const sourceKey of splitResearchSourceKeys(cell.source_keys)) {
      assertReference(
        sourcesById,
        sourceKey,
        `Compatibility cell ${cell.surface_id}/${cell.feature_id}`
      );
    }
    if (cell.primary_status !== "unknown" && !cell.source_keys.trim()) {
      throw new Error(
        `Non-unknown compatibility cell ${cell.surface_id}/${cell.feature_id} has no source.`
      );
    }
  }

  const expectedCellCount = seed.surfaces.length * seed.features.length;
  if (seed.compatibility_cells.length !== expectedCellCount) {
    throw new Error(
      `Research grid contains ${seed.compatibility_cells.length} cells; expected ${expectedCellCount}.`
    );
  }

  for (const assertion of seed.assertions) {
    assertReference(
      surfacesById,
      assertion.surface_id,
      `Assertion ${assertion.assertion_id}`
    );
    assertReference(
      featuresById,
      assertion.feature_id,
      `Assertion ${assertion.assertion_id}`
    );
    if (!RESEARCH_STATUSES.includes(assertion.status)) {
      throw new Error(
        `Assertion ${assertion.assertion_id} has invalid status ${assertion.status}.`
      );
    }
    for (const sourceKey of splitResearchSourceKeys(assertion.source_keys)) {
      assertReference(
        sourcesById,
        sourceKey,
        `Assertion ${assertion.assertion_id}`
      );
    }
  }

  for (const row of seed.explicit_non_support) {
    const key = researchCellKey(row.surface_id, row.feature_id);
    if (!cellKeys.has(key)) {
      throw new Error(
        `Explicit non-support row ${row.surface_id}/${row.feature_id} has no grid cell.`
      );
    }
    const cell = seed.compatibility_cells.find(
      (candidate) =>
        candidate.surface_id === row.surface_id &&
        candidate.feature_id === row.feature_id
    );
    if (cell?.primary_status !== "unsupported") {
      throw new Error(
        `Explicit non-support row ${row.surface_id}/${row.feature_id} is not unsupported in the grid.`
      );
    }
  }

  return {
    vendors: seed.vendors.length,
    products: seed.products.length,
    surfaces: seed.surfaces.length,
    features: seed.features.length,
    assertions: seed.assertions.length,
    sources: seed.sources.length,
    compatibilityCells: seed.compatibility_cells.length,
    registryEntries: seed.registry_inventory.length,
    evidenceGaps: seed.evidence_gaps.length,
    proposedTests: seed.test_backlog.length,
    statuses: countResearchStatuses(seed.compatibility_cells),
  };
}

export function buildResearchAtlas(seed: ResearchSeed): ResearchAtlas {
  const report = validateResearchSeed(seed);
  const featuresBySlug = uniqueMap(
    seed.features,
    (row) => researchFeatureSlug(row.feature_id),
    "feature slugs"
  );
  return {
    seed,
    report,
    vendorsById: uniqueMap(seed.vendors, (row) => row.vendor_id, "vendors"),
    productsById: uniqueMap(seed.products, (row) => row.product_id, "products"),
    surfacesById: uniqueMap(seed.surfaces, (row) => row.surface_id, "surfaces"),
    featuresById: uniqueMap(seed.features, (row) => row.feature_id, "features"),
    featuresBySlug,
    sourcesById: uniqueMap(seed.sources, (row) => row.source_key, "sources"),
    cellsBySurface: groupBy(seed.compatibility_cells, (row) => row.surface_id),
    cellsByFeature: groupBy(seed.compatibility_cells, (row) => row.feature_id),
    assertionsByCell: groupBy(seed.assertions, (row) =>
      researchCellKey(row.surface_id, row.feature_id)
    ),
    summariesByVendor: uniqueMap(
      seed.summary_by_vendor,
      (row) => row.vendor_id,
      "vendor summaries"
    ),
  };
}
