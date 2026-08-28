import { describe, expect, it } from "vitest";
import { buildCoverageReport } from "./coverage.ts";
import { API_CATALOG_PROFILE, catalogApiLinkset } from "./api-catalog.ts";
import { toLlmsTxt } from "./llms.ts";
import { buildEvidenceLedger } from "./evidence.ts";
import {
  buildMatrix,
  currentSupportSnapshot,
  expandFeatureSupport,
  sourcedShare,
} from "./matrix.ts";
import { isPublished, resolveMetadata } from "./metadata.ts";
import { catalogOpenApi } from "./openapi.ts";
import {
  absoluteUrl,
  featureMarkdownPath,
  harnessPath,
  jsonPathForPagePath,
  markdownPathForPagePath,
  normalizeSitePath,
  pagePathForMarkdownPath,
} from "./paths.ts";
import { featureSchema, harnessSchema, specificationSchema } from "./schema.ts";
import { validateCatalogRelations } from "./relations.ts";
import { searchCatalog } from "./search.ts";
import { SITE } from "./site.ts";

const updated = new Date("2026-08-28T00:00:00.000Z");

const feature = featureSchema.parse({
  title: "MCP tools",
  description: "Capability row for tool calling over MCP.",
  slug: "mcp-tools",
  locale: "en",
  seoTitle: "MCP tools",
  socialTitle: "MCP tools",
  socialDescription: "MCP tools compatibility evidence by harness.",
  llmSummary: "MCP tools row. Support is unknown until sourced.",
  audience: "Engineers comparing agent harnesses.",
  category: "interfaces",
  summary: "Call tools through the Model Context Protocol.",
  updated,
  support: [{ harness: "chatgpt-web", status: "unknown" }],
});

const harness = harnessSchema.parse({
  title: "ChatGPT",
  description: "ChatGPT in the browser.",
  slug: "chatgpt-web",
  locale: "en",
  seoTitle: "ChatGPT web",
  socialTitle: "ChatGPT web",
  socialDescription: "Harness column used by the catalog matrix.",
  llmSummary: "ChatGPT web column. Support is unknown until sourced.",
  audience: "Engineers comparing agent harnesses.",
  family: "ChatGPT",
  vendor: "OpenAI",
  surface: "web",
  summary: "Browser chat harness.",
  tracks: ["current", "preview"],
  order: 10,
  updated,
});

const specification = specificationSchema.parse({
  title: "Model Context Protocol",
  description: "Revision-aware protocol reference.",
  slug: "mcp",
  locale: "en",
  seoTitle: "Model Context Protocol",
  socialTitle: "Model Context Protocol",
  socialDescription: "Protocol reference.",
  llmSummary: "MCP protocol reference.",
  audience: "Engineers comparing interoperability.",
  authority: "MCP project",
  revision: "2025-11-25",
  maturity: "published",
  structure: "JSON-RPC and normative prose",
  sourceId: "S-019",
  canonicalUrl: "https://example.com/specification",
  summary: "Connect agent hosts to tools and context.",
  roles: ["host", "client", "server"],
  aliases: ["MCP"],
  updated,
});

const sourcedFeature = featureSchema.parse({
  ...feature,
  notes: [
    {
      id: 7,
      text: "Evidence checked 2026-08-28: the public host documentation lists MCP tool support.",
    },
  ],
  resources: [
    {
      id: "host-mcp-docs",
      title: "Host MCP documentation",
      href: "https://example.com/docs/mcp",
      kind: "docs",
      publisher: "Example Host",
      evidenceType: "documented",
      reviewedAt: "2026-08-28",
    },
  ],
  support: [
    {
      harness: "chatgpt-web",
      versions: [
        {
          track: "current",
          status: "yes",
          noteIds: [7],
          target: {
            kind: "hosted-observation",
            revision: "2026-08-28 hosted observation",
            observedAt: "2026-08-28",
          },
          environmentProfile: "hosted-default",
          qualifiers: [
            { type: "policy", value: "developer mode must be enabled" },
          ],
          evidence: [
            {
              resourceId: "host-mcp-docs",
              type: "documented",
              observedAt: "2026-08-28",
            },
          ],
        },
      ],
    },
  ],
});

describe("paths", () => {
  it("strips trailing slashes except at root", () => {
    expect(normalizeSitePath("/features/example/")).toBe("/features/example");
    expect(normalizeSitePath("/")).toBe("/");
  });

  it("builds harness and markdown URLs", () => {
    expect(absoluteUrl(featureMarkdownPath("mcp-tools"))).toBe(
      "https://canmyagentuse.com/features/mcp-tools.md"
    );
    expect(harnessPath("chatgpt-web")).toBe("/harnesses/chatgpt-web");
  });

  it("maps canonical, Markdown, and JSON representations", () => {
    expect(markdownPathForPagePath("/features/mcp-tools")).toBe(
      "/features/mcp-tools.md"
    );
    expect(pagePathForMarkdownPath("/atlas/sources.md")).toBe("/atlas/sources");
    expect(jsonPathForPagePath("/atlas/vendors/openai")).toBe(
      "/api/v1/atlas/vendors/openai.json"
    );
    expect(markdownPathForPagePath("/report")).toBe("/report.md");
    expect(markdownPathForPagePath("/provider-marks")).toBe(
      "/provider-marks.md"
    );
  });
});

describe("RFC 9727 API catalog", () => {
  it("publishes a profiled linkset with API endpoints and service metadata", () => {
    const catalog = catalogApiLinkset();
    expect(API_CATALOG_PROFILE).toBe("https://www.rfc-editor.org/info/rfc9727");
    expect(catalog.linkset[0]).toMatchObject({
      anchor: "https://canmyagentuse.com/api/v1",
      "service-desc": [
        {
          href: "https://canmyagentuse.com/api/v1/openapi.json",
          type: "application/vnd.oai.openapi+json",
        },
      ],
    });
    expect(catalog.linkset[0]?.item).toContainEqual({
      href: "https://canmyagentuse.com/api/v1/features.json",
      type: "application/json",
    });
  });
});

describe("matrix", () => {
  it("fills unknown tracks for every harness", () => {
    const columns = expandFeatureSupport(feature, [harness]);
    expect(columns[0]?.versions.map((cell) => cell.track)).toEqual([
      "current",
      "preview",
    ]);
    expect(
      columns[0]?.versions.every((cell) => cell.status === "unknown")
    ).toBe(true);
    expect(sourcedShare(columns)).toBe(0);
  });

  it("rejects support rows that point at missing harnesses", () => {
    expect(() => buildMatrix([feature], [])).toThrow(/unknown harness/);
  });

  it("expands a sourced current cell and leaves preview unknown", () => {
    const [column] = expandFeatureSupport(sourcedFeature, [harness]);
    expect(column?.versions).toEqual([
      {
        track: "current",
        status: "yes",
        noteIds: [7],
        target: {
          kind: "hosted-observation",
          revision: "2026-08-28 hosted observation",
          observedAt: "2026-08-28",
        },
        environmentProfile: "hosted-default",
        qualifiers: [
          { type: "policy", value: "developer mode must be enabled" },
        ],
        evidence: [
          {
            resourceId: "host-mcp-docs",
            type: "documented",
            observedAt: "2026-08-28",
          },
        ],
      },
      { track: "preview", status: "unknown", noteIds: [] },
    ]);
    expect(sourcedShare(column ? [column] : [])).toBe(0.5);
    expect(currentSupportSnapshot(column ? [column] : [])).toEqual({
      total: 1,
      sourced: 1,
      counts: { yes: 1, partial: 0, no: 0, unknown: 0, na: 0 },
    });
  });
});

describe("feature evidence schema", () => {
  it("rejects a sourced status without a note reference", () => {
    const result = featureSchema.safeParse({
      ...feature,
      resources: [
        {
          id: "public-docs",
          title: "Public docs",
          href: "https://example.com/docs",
          kind: "docs",
        },
      ],
      support: [{ harness: "chatgpt-web", status: "yes" }],
    });
    expect(result.success).toBe(false);
    if (result.success)
      throw new Error("Expected evidence validation to fail.");
    expect(result.error.issues[0]?.message).toMatch(/versions\[\]/);
  });

  it("rejects note ids that are not declared on the feature", () => {
    const result = featureSchema.safeParse({
      ...feature,
      resources: [
        {
          id: "public-docs",
          title: "Public docs",
          href: "https://example.com/docs",
          kind: "docs",
        },
      ],
      support: [
        {
          harness: "chatgpt-web",
          versions: [
            {
              track: "current",
              status: "partial",
              noteIds: [99],
              target: {
                kind: "hosted-observation",
                revision: "2026-08-28 observation",
                observedAt: "2026-08-28",
              },
              environmentProfile: "hosted-default",
              evidence: [
                {
                  resourceId: "public-docs",
                  type: "documented",
                  observedAt: "2026-08-28",
                },
              ],
            },
          ],
        },
      ],
    });
    expect(result.success).toBe(false);
    if (result.success) throw new Error("Expected note validation to fail.");
    expect(result.error.issues.map((issue) => issue.message)).toEqual(
      expect.arrayContaining([expect.stringMatching(/does not exist/)])
    );
  });

  it("requires target, environment, and typed evidence on sourced cells", () => {
    const result = featureSchema.safeParse({
      ...feature,
      notes: [{ id: 1, text: "Evidence checked 2026-08-28." }],
      resources: [
        {
          id: "docs",
          title: "Public docs",
          href: "https://example.com/docs",
          kind: "docs",
        },
      ],
      support: [
        {
          harness: "chatgpt-web",
          versions: [{ track: "current", status: "partial", noteIds: [1] }],
        },
      ],
    });
    expect(result.success).toBe(false);
    if (result.success) throw new Error("Expected target validation to fail.");
    expect(result.error.issues.map((issue) => issue.message)).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/explicit target/),
        expect.stringMatching(/environment profile/),
        expect.stringMatching(/typed evidence reference/),
      ])
    );
  });

  it("rejects evidence references that do not resolve to a resource id", () => {
    const result = featureSchema.safeParse({
      ...feature,
      notes: [{ id: 1, text: "Evidence checked 2026-08-28." }],
      resources: [
        {
          id: "declared-docs",
          title: "Public docs",
          href: "https://example.com/docs",
          kind: "docs",
        },
      ],
      support: [
        {
          harness: "chatgpt-web",
          versions: [
            {
              track: "current",
              status: "yes",
              noteIds: [1],
              target: {
                kind: "hosted-observation",
                revision: "2026-08-28 observation",
                observedAt: "2026-08-28",
              },
              environmentProfile: "hosted-default",
              evidence: [
                {
                  resourceId: "missing-docs",
                  type: "documented",
                  observedAt: "2026-08-28",
                },
              ],
            },
          ],
        },
      ],
    });
    expect(result.success).toBe(false);
    if (result.success)
      throw new Error("Expected evidence validation to fail.");
    expect(result.error.issues[0]?.message).toMatch(/does not exist/);
  });

  it("rejects duplicate harness rows and duplicate version tracks", () => {
    const duplicateRows = featureSchema.safeParse({
      ...feature,
      support: [
        { harness: "chatgpt-web", status: "unknown" },
        { harness: "chatgpt-web", status: "unknown" },
      ],
    });
    expect(duplicateRows.success).toBe(false);
    if (duplicateRows.success)
      throw new Error("Expected duplicate row failure.");
    expect(duplicateRows.error.issues[0]?.message).toMatch(
      /Duplicate support row/
    );

    const duplicateTracks = featureSchema.safeParse({
      ...feature,
      support: [
        {
          harness: "chatgpt-web",
          versions: [
            { track: "current", status: "unknown" },
            { track: "current", status: "unknown" },
          ],
        },
      ],
    });
    expect(duplicateTracks.success).toBe(false);
    if (duplicateTracks.success)
      throw new Error("Expected duplicate track failure.");
    expect(duplicateTracks.error.issues[0]?.message).toMatch(
      /Duplicate version track/
    );
  });

  it("rejects unknown environment profiles and undated hosted targets", () => {
    const invalidEnvironment = featureSchema.safeParse({
      ...sourcedFeature,
      support: [
        {
          ...sourcedFeature.support[0],
          versions: [
            {
              ...sourcedFeature.support[0]?.versions?.[0],
              environmentProfile: "planet-scale-default",
            },
          ],
        },
      ],
    });
    expect(invalidEnvironment.success).toBe(false);

    const undatedTarget = featureSchema.safeParse({
      ...sourcedFeature,
      support: [
        {
          ...sourcedFeature.support[0],
          versions: [
            {
              ...sourcedFeature.support[0]?.versions?.[0],
              target: {
                kind: "hosted-observation",
                revision: "hosted observation",
              },
            },
          ],
        },
      ],
    });
    expect(undatedTarget.success).toBe(false);
    if (undatedTarget.success) throw new Error("Expected target date failure.");
    expect(undatedTarget.error.issues[0]?.message).toMatch(/observation date/);
  });

  it("keeps citation types aligned with referenced resource metadata", () => {
    const result = featureSchema.safeParse({
      ...sourcedFeature,
      resources: sourcedFeature.resources.map((resource) => ({
        ...resource,
        evidenceType: "listed",
      })),
    });
    expect(result.success).toBe(false);
    if (result.success) throw new Error("Expected evidence type failure.");
    expect(result.error.issues.map((issue) => issue.message)).toEqual(
      expect.arrayContaining([expect.stringMatching(/does not match resource/)])
    );
  });
});

describe("evidence ledger", () => {
  it("links a reviewed resource back to the exact sourced statement", () => {
    expect(buildEvidenceLedger([sourcedFeature])).toEqual([
      expect.objectContaining({
        id: "host-mcp-docs",
        feature: { slug: "mcp-tools", title: "MCP tools" },
        evidenceType: "documented",
        reviewedAt: "2026-08-28",
        statements: [
          {
            harness: "chatgpt-web",
            track: "current",
            status: "yes",
            observedAt: "2026-08-28",
          },
        ],
      }),
    ]);
  });
});

describe("search", () => {
  it("matches harness family names", () => {
    const result = searchCatalog("claude", {
      features: [feature],
      harnesses: [harness],
    });
    expect(result.harnesses).toHaveLength(0);
    expect(
      searchCatalog("chatgpt", { features: [feature], harnesses: [harness] })
        .harnesses
    ).toHaveLength(1);
  });

  it("searches specifications and ranks an exact title first", () => {
    const result = searchCatalog("Model Context Protocol", {
      features: [feature],
      harnesses: [harness],
      specifications: [specification],
    });
    expect(result.specifications).toHaveLength(1);
    expect(result.hits[0]).toMatchObject({
      kind: "specification",
      slug: "mcp",
      score: 100,
    });
  });
});

describe("coverage", () => {
  it("reports current-track evidence completeness without scoring products", () => {
    const report = buildCoverageReport([sourcedFeature], [harness]);
    expect(report.generatedFrom).toBe("published-current-track");
    expect(report.totals).toMatchObject({
      total: 1,
      sourced: 1,
      unknown: 0,
      share: 1,
      features: 1,
      harnesses: 1,
    });
    expect(
      report.surfaces.find((item) => item.surface === "web")
    ).toMatchObject({
      total: 1,
      sourced: 1,
    });
  });
});

describe("catalog relationships", () => {
  it("accepts resolved feature, harness, and specification references", () => {
    expect(() =>
      validateCatalogRelations({
        features: [
          {
            ...feature,
            specification: {
              id: "mcp",
              revision: "2025-11-25",
              maturity: "published",
              role: "client",
              authority: "MCP project",
              canonicalUrl: "https://example.com/specification",
            },
          },
        ],
        harnesses: [harness],
        specifications: [specification],
      })
    ).not.toThrow();
  });

  it("rejects unresolved related feature references", () => {
    expect(() =>
      validateCatalogRelations({
        features: [{ ...feature, related: ["missing-feature"] }],
        harnesses: [harness],
        specifications: [specification],
      })
    ).toThrow(/unknown related feature/);
  });
});

describe("OpenAPI", () => {
  it("documents coverage and reusable response schemas", () => {
    const document = catalogOpenApi();
    expect(document.paths["/api/v1/coverage.json"].get.operationId).toBe(
      "getCoverage"
    );
    expect(document.components.schemas.VersionCell).toBeDefined();
    expect(document.openapi).toBe("3.1.0");
  });
});

describe("metadata", () => {
  it("hides drafts from the public catalog", () => {
    expect(isPublished({ status: "draft" })).toBe(false);
    expect(isPublished({ status: "published" })).toBe(true);
  });

  it("resolves canonical paths from content kind", () => {
    const metadata = resolveMetadata({
      ...feature,
      contentKind: "feature",
    });
    expect(metadata.canonicalPath).toBe("/features/mcp-tools");
  });
});

describe("llms.txt", () => {
  it("points agents at segmented Markdown indexes", () => {
    const document = toLlmsTxt({
      features: [feature],
      harnesses: [harness],
      pages: [],
    });
    expect(document).toContain(SITE.name);
    expect(document).toContain("/features/llms.txt");
    expect(document).toContain("/harnesses/llms.txt");
    expect(document).toContain("1 vendor-neutral capability records");
  });
});
