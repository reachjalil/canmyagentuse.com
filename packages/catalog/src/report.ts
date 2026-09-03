import {
  countResearchStatuses,
  researchFeatureSlug,
  splitResearchSourceKeys,
} from "./research.ts";
import type {
  ResearchCompatibilityCell,
  ResearchSeed,
  ResearchStatusCounts,
  ResearchSurface,
} from "./research.ts";

export const STATE_OF_HARNESSES_REPORT_SLUG =
  "state-of-agent-harnesses-2026" as const;

export const REPORT_SURFACE_GROUPS = [
  {
    key: "terminal",
    label: "Terminal & headless",
    description: "CLI, local-agent, and headless-agent surfaces.",
  },
  {
    key: "editor",
    label: "Editors & IDEs",
    description:
      "Editor agents, IDE extensions and hosts, plan/chat modes, and code review surfaces.",
  },
  {
    key: "app",
    label: "Web, desktop & mobile",
    description:
      "End-user web, desktop, mobile, messaging, and combined app hosts.",
  },
  {
    key: "cloud",
    label: "Cloud & autonomous",
    description:
      "Cloud agents plus multi-surface, web, desktop, and mobile agent runtimes.",
  },
  {
    key: "protocol",
    label: "Protocol components",
    description: "ACP agents, clients, adapters, wrappers, and MCP servers.",
  },
  {
    key: "other",
    label: "Other exact surfaces",
    description: "Surface types not covered by the five editorial groupings.",
  },
] as const;

export type ReportSurfaceGroupKey =
  (typeof REPORT_SURFACE_GROUPS)[number]["key"];

export interface ReportStatusSummary extends ResearchStatusCounts {
  positive: number;
  positiveShareOfReviewed: number;
}

export interface ReportSurfaceGroup {
  key: ReportSurfaceGroupKey;
  label: string;
  description: string;
  surfaceTypes: string[];
  surfaces: number;
  statuses: ReportStatusSummary;
}

export interface ReportFeatureGroup {
  key: string;
  label: string;
  features: number;
  statuses: ReportStatusSummary;
}

export interface ReportHeatmapCell {
  surfaceGroup: ReportSurfaceGroupKey;
  featureGroup: string;
  statuses: ReportStatusSummary;
}

export interface ReportCapabilityRow {
  id: string;
  slug: string;
  title: string;
  group: string;
  role: string;
  testability: string;
  statuses: ReportStatusSummary;
}

export interface ReportVendorRow {
  id: string;
  name: string;
  category: string;
  coverageTier: string;
  inclusionBasis: string;
  surfaces: number;
  statuses: ReportStatusSummary;
}

export interface ReportCountRow {
  key: string;
  label: string;
  count: number;
  share: number;
}

export interface StateOfHarnessesReport {
  schemaVersion: 1;
  slug: typeof STATE_OF_HARNESSES_REPORT_SLUG;
  title: "State of Agent Harnesses 2026";
  generatedFrom: "evidence-atlas-v1";
  researchCutoff: string;
  generatedAt: string;
  totals: {
    vendors: number;
    products: number;
    surfaces: number;
    surfaceTypes: number;
    features: number;
    featureGroups: number;
    compatibilityCells: number;
    assertions: number;
    sources: number;
    registryEntries: number;
    explicitNonSupport: number;
    evidenceGaps: number;
    proposedTests: number;
    qualifiedReviewedCells: number;
    qualifiedReviewedShare: number;
    citedSourceReferences: number;
  };
  statuses: ReportStatusSummary;
  surfaceGroups: ReportSurfaceGroup[];
  featureGroups: ReportFeatureGroup[];
  heatmap: ReportHeatmapCell[];
  capabilities: ReportCapabilityRow[];
  vendors: ReportVendorRow[];
  evidence: {
    sourceTypes: ReportCountRow[];
    confidence: ReportCountRow[];
    methods: ReportCountRow[];
  };
  limitations: string[];
}

function reportStatusSummary(
  cells: readonly ResearchCompatibilityCell[]
): ReportStatusSummary {
  const counts = countResearchStatuses(cells);
  const positive = counts.supported + counts.partial;
  return {
    ...counts,
    positive,
    positiveShareOfReviewed:
      counts.sourced === 0 ? 0 : positive / counts.sourced,
  };
}

function surfaceGroupFor(surface: ResearchSurface): ReportSurfaceGroupKey {
  const type = surface.surface_type.toLowerCase();
  if (type === "cli" || type === "local-agent" || type === "headless-agent") {
    return "terminal";
  }
  if (
    type.includes("ide") ||
    type.includes("editor") ||
    type.includes("code-review")
  ) {
    return "editor";
  }
  if (
    [
      "web",
      "desktop",
      "mobile",
      "messaging-agent",
      "web-desktop-host",
    ].includes(type)
  ) {
    return "app";
  }
  if (
    type.includes("cloud") ||
    [
      "multi-surface-agent",
      "web-agent",
      "desktop-agent",
      "mobile-agent",
    ].includes(type)
  ) {
    return "cloud";
  }
  if (type.startsWith("acp-") || type.startsWith("mcp-")) {
    return "protocol";
  }
  return "other";
}

function countRows(
  values: readonly string[],
  labels: Readonly<Record<string, string>> = {}
): ReportCountRow[] {
  const counts = new Map<string, number>();
  for (const value of values) {
    if (!value) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  const total = [...counts.values()].reduce((sum, value) => sum + value, 0);
  return [...counts]
    .map(([key, count]) => ({
      key,
      label: labels[key] ?? key,
      count,
      share: total === 0 ? 0 : count / total,
    }))
    .toSorted(
      (left, right) =>
        right.count - left.count || left.label.localeCompare(right.label)
    );
}

function evidenceMethodTokens(value: string): string[] {
  return value
    .split(/[;+]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function buildStateOfHarnessesReport(
  seed: ResearchSeed
): StateOfHarnessesReport {
  const status = reportStatusSummary(seed.compatibility_cells);
  const surfacesById = new Map(
    seed.surfaces.map((surface) => [surface.surface_id, surface] as const)
  );
  const cellsBySurfaceGroup = new Map<
    ReportSurfaceGroupKey,
    ResearchCompatibilityCell[]
  >();
  const surfacesByGroup = new Map<ReportSurfaceGroupKey, ResearchSurface[]>();

  for (const surface of seed.surfaces) {
    const group = surfaceGroupFor(surface);
    const surfaces = surfacesByGroup.get(group) ?? [];
    surfaces.push(surface);
    surfacesByGroup.set(group, surfaces);
  }
  for (const cell of seed.compatibility_cells) {
    const surface = surfacesById.get(cell.surface_id);
    if (!surface) continue;
    const group = surfaceGroupFor(surface);
    const cells = cellsBySurfaceGroup.get(group) ?? [];
    cells.push(cell);
    cellsBySurfaceGroup.set(group, cells);
  }

  const surfaceGroups = REPORT_SURFACE_GROUPS.map((definition) => {
    const surfaces = surfacesByGroup.get(definition.key) ?? [];
    return {
      ...definition,
      surfaceTypes: [
        ...new Set(surfaces.map((surface) => surface.surface_type)),
      ].toSorted(),
      surfaces: surfaces.length,
      statuses: reportStatusSummary(
        cellsBySurfaceGroup.get(definition.key) ?? []
      ),
    };
  }).filter((group) => group.surfaces > 0);

  const featureGroups = [
    ...new Set(seed.features.map((feature) => feature.feature_group)),
  ];
  const featureGroupRows = featureGroups
    .map((group) => ({
      key: group.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      label: group,
      features: seed.features.filter(
        (feature) => feature.feature_group === group
      ).length,
      statuses: reportStatusSummary(
        seed.compatibility_cells.filter((cell) => cell.feature_group === group)
      ),
    }))
    .toSorted(
      (left, right) =>
        right.statuses.coverage - left.statuses.coverage ||
        left.label.localeCompare(right.label)
    );

  const heatmap = surfaceGroups.flatMap((surfaceGroup) =>
    featureGroupRows.map((featureGroup) => ({
      surfaceGroup: surfaceGroup.key,
      featureGroup: featureGroup.key,
      statuses: reportStatusSummary(
        (cellsBySurfaceGroup.get(surfaceGroup.key) ?? []).filter(
          (cell) => cell.feature_group === featureGroup.label
        )
      ),
    }))
  );

  const capabilities = seed.features
    .map((feature) => ({
      id: feature.feature_id,
      slug: researchFeatureSlug(feature.feature_id),
      title: feature.feature_name,
      group: feature.feature_group,
      role: feature.role,
      testability: feature.testability,
      statuses: reportStatusSummary(
        seed.compatibility_cells.filter(
          (cell) => cell.feature_id === feature.feature_id
        )
      ),
    }))
    .toSorted(
      (left, right) =>
        right.statuses.positive - left.statuses.positive ||
        right.statuses.sourced - left.statuses.sourced ||
        left.title.localeCompare(right.title)
    );

  const vendorById = new Map(
    seed.vendors.map((vendor) => [vendor.vendor_id, vendor] as const)
  );
  const vendors = seed.summary_by_vendor
    .map((summary) => {
      const vendor = vendorById.get(summary.vendor_id);
      const cells = seed.compatibility_cells.filter(
        (cell) => cell.vendor_id === summary.vendor_id
      );
      return {
        id: summary.vendor_id,
        name: summary.vendor_name,
        category: vendor?.category ?? "",
        coverageTier: summary.coverage_tier,
        inclusionBasis: summary.inclusion_basis,
        surfaces: summary.surface_count,
        statuses: reportStatusSummary(cells),
      };
    })
    .toSorted(
      (left, right) =>
        right.statuses.coverage - left.statuses.coverage ||
        left.name.localeCompare(right.name)
    );

  const reviewedCells = seed.compatibility_cells.filter(
    (cell) => cell.primary_status !== "unknown"
  );
  const qualifiedReviewedCells = reviewedCells.filter((cell) =>
    cell.qualifiers.trim()
  ).length;
  const citedSourceReferences = seed.compatibility_cells.reduce(
    (total, cell) => total + splitResearchSourceKeys(cell.source_keys).length,
    0
  );

  return {
    schemaVersion: 1,
    slug: STATE_OF_HARNESSES_REPORT_SLUG,
    title: "State of Agent Harnesses 2026",
    generatedFrom: "evidence-atlas-v1",
    researchCutoff: seed.research_cutoff,
    generatedAt: seed.generated_at_utc,
    totals: {
      vendors: seed.vendors.length,
      products: seed.products.length,
      surfaces: seed.surfaces.length,
      surfaceTypes: new Set(
        seed.surfaces.map((surface) => surface.surface_type)
      ).size,
      features: seed.features.length,
      featureGroups: featureGroups.length,
      compatibilityCells: seed.compatibility_cells.length,
      assertions: seed.assertions.length,
      sources: seed.sources.length,
      registryEntries: seed.registry_inventory.length,
      explicitNonSupport: seed.explicit_non_support.length,
      evidenceGaps: seed.evidence_gaps.length,
      proposedTests: seed.test_backlog.length,
      qualifiedReviewedCells,
      qualifiedReviewedShare:
        reviewedCells.length === 0
          ? 0
          : qualifiedReviewedCells / reviewedCells.length,
      citedSourceReferences,
    },
    statuses: status,
    surfaceGroups,
    featureGroups: featureGroupRows,
    heatmap,
    capabilities,
    vendors,
    evidence: {
      sourceTypes: countRows(
        seed.sources.map((source) => source.source_type),
        {
          "vendor-doc": "Vendor documentation",
          "standard/spec": "Standards & specifications",
          github: "GitHub repositories",
          "vendor-release": "Vendor release notes",
          "vendor-blog": "Vendor engineering posts",
          registry: "Public registries",
        }
      ),
      confidence: countRows(
        reviewedCells.map((cell) => cell.confidence),
        { high: "High", medium: "Medium", mixed: "Mixed" }
      ),
      methods: countRows(
        reviewedCells.flatMap((cell) =>
          evidenceMethodTokens(cell.evidence_methods)
        ),
        {
          documented: "Documented",
          "registry-listed": "Registry-listed",
          reported: "Reported",
        }
      ),
    },
    limitations: [...seed.limitations],
  };
}
