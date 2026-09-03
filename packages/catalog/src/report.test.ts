import { describe, expect, it } from "vitest";
import { buildStateOfHarnessesReport } from "./report.ts";
import type { ResearchSeed } from "./research.ts";

const seed: ResearchSeed = {
  generated_at_utc: "2026-08-29T00:00:00Z",
  research_cutoff: "2026-08-28",
  scope: {
    acp_registry_complete: true,
    acp_registry_entries: 1,
    agent_plugins_client_list_complete: true,
    agent_plugins_clients: 1,
    adjacent_harnesses: "One representative product.",
    claim: "Deterministic report fixture.",
  },
  status_vocabulary: ["supported", "partial", "unsupported", "unknown"],
  vendors: [
    {
      vendor_id: "example",
      vendor_name: "Example",
      website: "https://example.com",
      coverage_tier: "A",
      inclusion_basis: "Fixture",
      category: "coding agent",
      notes: "",
    },
  ],
  products: [
    {
      product_id: "example-product",
      vendor_id: "example",
      product_name: "Example Product",
      category: "coding agent",
      lifecycle: "ga",
      source_key: "S-001",
      notes: "",
    },
  ],
  surfaces: [
    {
      surface_id: "example-cli",
      product_id: "example-product",
      surface_name: "Example CLI",
      surface_type: "cli",
      version_or_observation: "1.0.0",
      availability: "ga",
      coverage_tier: "A",
      source_key: "S-001",
      registry_role: "",
      registry_version: "",
      notes: "",
    },
    {
      surface_id: "example-ide",
      product_id: "example-product",
      surface_name: "Example IDE",
      surface_type: "ide-extension",
      version_or_observation: "1.0.0",
      availability: "ga",
      coverage_tier: "A",
      source_key: "S-001",
      registry_role: "",
      registry_version: "",
      notes: "",
    },
  ],
  features: [
    {
      feature_id: "mcp.tools",
      feature_group: "MCP",
      feature_name: "MCP tools",
      description: "Call MCP tools.",
      role: "client",
      parent_feature_id: "",
      testability: "deterministic",
    },
  ],
  assertions: [],
  compatibility_cells: [
    {
      vendor_id: "example",
      vendor_name: "Example",
      product_id: "example-product",
      product_name: "Example Product",
      surface_id: "example-cli",
      surface_name: "Example CLI",
      surface_type: "cli",
      version_or_observation: "1.0.0",
      surface_availability: "ga",
      coverage_tier: "A",
      feature_id: "mcp.tools",
      feature_group: "MCP",
      feature_name: "MCP tools",
      primary_status: "supported",
      status_detail: "supported",
      assertion_count: 1,
      evidence_methods: "documented;registry-listed",
      confidence: "high",
      environment_scopes: "default",
      qualifiers: "Feature flag required.",
      source_keys: "S-001",
      notes: "",
      last_verified_at: "2026-08-28",
    },
    {
      vendor_id: "example",
      vendor_name: "Example",
      product_id: "example-product",
      product_name: "Example Product",
      surface_id: "example-ide",
      surface_name: "Example IDE",
      surface_type: "ide-extension",
      version_or_observation: "1.0.0",
      surface_availability: "ga",
      coverage_tier: "A",
      feature_id: "mcp.tools",
      feature_group: "MCP",
      feature_name: "MCP tools",
      primary_status: "unknown",
      status_detail: "unknown",
      assertion_count: 0,
      evidence_methods: "",
      confidence: "",
      environment_scopes: "",
      qualifiers: "",
      source_keys: "",
      notes: "",
      last_verified_at: "",
    },
  ],
  compatibility_matrix_summary: [],
  registry_inventory: [],
  explicit_non_support: [],
  evidence_gaps: [],
  sources: [
    {
      source_key: "S-001",
      title: "Example documentation",
      url: "https://example.com/docs",
      archive_url: "",
      publisher: "Example",
      published_at: "",
      retrieved_at_utc: "2026-08-28T00:00:00Z",
      source_type: "vendor-doc",
      role: "support",
      confidence: "high",
      notes: "",
    },
  ],
  summary_by_vendor: [
    {
      vendor_id: "example",
      vendor_name: "Example",
      coverage_tier: "A",
      inclusion_basis: "Fixture",
      surface_count: 2,
      supported_cells: 1,
      partial_cells: 0,
      unsupported_cells: 0,
      unknown_cells: 1,
      non_unknown_cells: 1,
      evidence_coverage_percent: 50,
      notes: "",
    },
  ],
  test_backlog: [],
  limitations: ["Fixture limitation."],
};

describe("buildStateOfHarnessesReport", () => {
  it("keeps unknown separate and derives the report dimensions", () => {
    const report = buildStateOfHarnessesReport(seed);

    expect(report.totals).toMatchObject({
      vendors: 1,
      products: 1,
      surfaces: 2,
      surfaceTypes: 2,
      features: 1,
      compatibilityCells: 2,
      qualifiedReviewedCells: 1,
    });
    expect(report.statuses).toMatchObject({
      supported: 1,
      unknown: 1,
      sourced: 1,
      coverage: 0.5,
      positiveShareOfReviewed: 1,
    });
    expect(report.surfaceGroups.map((group) => group.key)).toEqual([
      "terminal",
      "editor",
    ]);
  });

  it("splits compound evidence methods without double-counting cells", () => {
    const report = buildStateOfHarnessesReport(seed);

    expect(report.evidence.methods).toEqual([
      {
        key: "documented",
        label: "Documented",
        count: 1,
        share: 0.5,
      },
      {
        key: "registry-listed",
        label: "Registry-listed",
        count: 1,
        share: 0.5,
      },
    ]);
    expect(report.statuses.sourced).toBe(1);
  });

  it("builds a complete surface-group by feature-group heatmap", () => {
    const report = buildStateOfHarnessesReport(seed);

    expect(report.heatmap).toHaveLength(2);
    expect(report.heatmap).toContainEqual(
      expect.objectContaining({
        surfaceGroup: "terminal",
        featureGroup: "mcp",
        statuses: expect.objectContaining({ supported: 1, coverage: 1 }),
      })
    );
  });
});
