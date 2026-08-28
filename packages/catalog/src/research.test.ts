import { describe, expect, it } from "vitest";
import {
  buildResearchAtlas,
  researchFeatureSlug,
  splitResearchSourceKeys,
  type ResearchSeed,
} from "./research.ts";
import {
  jsonPathForPagePath,
  markdownPathForPagePath,
  pagePathForMarkdownPath,
} from "./paths.ts";

function fixture(): ResearchSeed {
  return {
    generated_at_utc: "2026-08-28T19:48:01Z",
    research_cutoff: "2026-08-28",
    scope: {
      acp_registry_complete: true,
      acp_registry_entries: 1,
      agent_plugins_client_list_complete: true,
      agent_plugins_clients: 0,
      adjacent_harnesses: "fixture",
      claim: "Fixture scope",
    },
    status_vocabulary: ["supported", "partial", "unsupported", "unknown"],
    vendors: [
      {
        vendor_id: "example",
        vendor_name: "Example",
        website: "https://example.com",
        coverage_tier: "A",
        inclusion_basis: "fixture",
        category: "agent-harness",
        notes: "",
      },
    ],
    products: [
      {
        product_id: "example-agent",
        vendor_id: "example",
        product_name: "Example Agent",
        category: "coding-agent",
        lifecycle: "active",
        source_key: "S-001",
        notes: "",
      },
    ],
    surfaces: [
      {
        surface_id: "example-cli",
        product_id: "example-agent",
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
    ],
    features: [
      {
        feature_id: "mcp.tools",
        feature_group: "MCP",
        feature_name: "MCP tools",
        description: "Discovers and calls tools.",
        role: "client",
        parent_feature_id: "",
        testability: "deterministic",
      },
      {
        feature_id: "mcp.resources",
        feature_group: "MCP",
        feature_name: "MCP resources",
        description: "Lists and reads resources.",
        role: "client",
        parent_feature_id: "",
        testability: "deterministic",
      },
    ],
    assertions: [
      {
        assertion_id: "ASRT-1",
        surface_id: "example-cli",
        feature_id: "mcp.tools",
        status: "supported",
        evidence_method: "documented",
        implementation_mode: "native",
        availability: "ga",
        confidence: "high",
        environment_scope: "default",
        qualifiers: "",
        source_keys: "S-001",
        last_verified_at: "2026-08-28",
        notes: "",
      },
    ],
    compatibility_cells: [
      {
        vendor_id: "example",
        vendor_name: "Example",
        product_id: "example-agent",
        product_name: "Example Agent",
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
        evidence_methods: "documented",
        confidence: "high",
        environment_scopes: "default",
        qualifiers: "",
        source_keys: "S-001",
        notes: "",
        last_verified_at: "2026-08-28",
      },
      {
        vendor_id: "example",
        vendor_name: "Example",
        product_id: "example-agent",
        product_name: "Example Agent",
        surface_id: "example-cli",
        surface_name: "Example CLI",
        surface_type: "cli",
        version_or_observation: "1.0.0",
        surface_availability: "ga",
        coverage_tier: "A",
        feature_id: "mcp.resources",
        feature_group: "MCP",
        feature_name: "MCP resources",
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
        published_at: "2026-08-28",
        retrieved_at_utc: "2026-08-28T19:48:01Z",
        source_type: "vendor-doc",
        role: "canonical",
        confidence: "high",
        notes: "",
      },
    ],
    summary_by_vendor: [
      {
        vendor_id: "example",
        vendor_name: "Example",
        coverage_tier: "A",
        inclusion_basis: "fixture",
        surface_count: 1,
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
    limitations: ["No runtime tests."],
  };
}

describe("research atlas", () => {
  it("maps Atlas HTML, Markdown, and JSON representations", () => {
    expect(markdownPathForPagePath("/atlas")).toBe("/atlas.md");
    expect(markdownPathForPagePath("/atlas/surfaces/example-cli")).toBe(
      "/atlas/surfaces/example-cli.md"
    );
    expect(pagePathForMarkdownPath("/atlas/features/mcp-tools.md")).toBe(
      "/atlas/features/mcp-tools"
    );
    expect(jsonPathForPagePath("/atlas/vendors/example")).toBe(
      "/api/v1/atlas/vendors/example.json"
    );
  });

  it("builds exact-surface and exact-feature indexes", () => {
    const atlas = buildResearchAtlas(fixture());

    expect(atlas.report.statuses).toMatchObject({
      supported: 1,
      unknown: 1,
      total: 2,
      sourced: 1,
      coverage: 0.5,
    });
    expect(atlas.cellsBySurface.get("example-cli")).toHaveLength(2);
    expect(atlas.cellsByFeature.get("mcp.tools")?.[0]?.surface_id).toBe(
      "example-cli"
    );
    expect(atlas.featuresBySlug.get("mcp-tools")?.feature_id).toBe("mcp.tools");
  });

  it("normalizes feature routes and source-key lists deterministically", () => {
    expect(researchFeatureSlug("agent-plugins.failure-isolation")).toBe(
      "agent-plugins-failure-isolation"
    );
    expect(splitResearchSourceKeys("S-001;S-020; S-021")).toEqual([
      "S-001",
      "S-020",
      "S-021",
    ]);
  });

  it("rejects a non-unknown cell whose source cannot be resolved", () => {
    const seed = fixture();
    const cell = seed.compatibility_cells[0];
    if (!cell) throw new Error("Fixture cell is missing.");
    cell.source_keys = "S-404";

    expect(() => buildResearchAtlas(seed)).toThrow(
      "references missing identifier S-404"
    );
  });

  it("rejects a grid that is not the full surface-feature Cartesian product", () => {
    const seed = fixture();
    seed.compatibility_cells.pop();

    expect(() => buildResearchAtlas(seed)).toThrow(
      "Research grid contains 1 cells; expected 2."
    );
  });
});
