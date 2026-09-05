import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  checkCatalogCompatibility,
  featureSchema,
  harnessSchema,
  productSchema,
  searchMcpCatalog,
} from "@canmyagentuse/catalog";
import { describe, expect, it } from "vitest";
import { parse } from "yaml";
import { handleCatalogMcp, type McpCatalogSource } from "./mcp";

function entry(path: string) {
  const raw = readFileSync(
    new URL(`../../../../content/${path}`, import.meta.url),
    "utf8"
  );
  return parse(raw.split("---")[1] ?? "");
}
const feature = featureSchema.parse(entry("features/en/mcp-apps.md"));
const harnesses = feature.support.map((row) =>
  harnessSchema.parse(entry(`harnesses/en/${row.harness}.md`))
);
const firstHarness = harnesses[0];
assert.ok(firstHarness);
const source: McpCatalogSource = {
  catalog: {
    products: [productSchema.parse(entry("products/en/notion.md"))],
    features: [feature],
    harnesses,
    specifications: [],
  },
  body: () => "A published record body.",
};
async function rpc(method: string, params = {}, id: number | undefined = 1) {
  const response = await handleCatalogMcp(
    new Request("https://canmyagentuse.com/mcp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json, text/event-stream",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        ...(id === undefined ? {} : { id }),
        method,
        params,
      }),
    }),
    async () => source
  );
  return {
    json: async () =>
      (await response.json()) as {
        result: {
          serverInfo: { name: string };
          tools: { name: string; annotations: Record<string, boolean> }[];
          isError?: boolean;
          structuredContent: {
            results: { slug: string }[];
            record: Record<string, unknown>;
            assessment: { status: string };
          };
        };
        error?: unknown;
      },
  };
}
describe("public catalog MCP", () => {
  it("initializes and discovers only annotated read-only tools", async () => {
    const initialized = await (
      await rpc("initialize", {
        protocolVersion: "2025-11-25",
        capabilities: {},
        clientInfo: { name: "test", version: "1" },
      })
    ).json();
    expect(initialized.result.serverInfo.name).toBe("can-my-agent-use");
    const listed = await (await rpc("tools/list")).json();
    expect(
      listed.result.tools.map((tool: { name: string }) => tool.name)
    ).toEqual(["search_catalog", "get_record", "check_compatibility"]);
    for (const tool of listed.result.tools)
      expect(tool.annotations).toMatchObject({
        readOnlyHint: true,
        destructiveHint: false,
      });
  });
  it("searches real records and pages without crossing kind boundaries", async () => {
    const response = await (
      await rpc("tools/call", {
        name: "search_catalog",
        arguments: { query: "Notion", kind: "product" },
      })
    ).json();
    expect(response.result.structuredContent.results[0].slug).toBe("notion");
    const first = searchMcpCatalog(source.catalog, "", "harness", 1, 0);
    const second = searchMcpCatalog(source.catalog, "", "harness", 1, 1);
    expect(first.nextOffset).toBe(1);
    expect(first.results[0]?.slug).not.toBe(second.results[0]?.slug);
    expect(first.results.every((hit) => hit.kind === "harness")).toBe(true);
  });
  it("returns complete records and canonical citations", async () => {
    const response = await (
      await rpc("tools/call", {
        name: "get_record",
        arguments: { kind: "product", slug: "notion" },
      })
    ).json();
    expect(response.result.structuredContent).toMatchObject({
      body: "A published record body.",
      url: "https://canmyagentuse.com/products/notion",
    });
    expect(response.result.structuredContent.record).toHaveProperty("actions");
  });
  it("preserves the authored assessment and referenced sources", async () => {
    const row = feature.support.find((item) =>
      item.versions?.some((version) => version.track === "current")
    );
    assert.ok(row);
    const checked = checkCatalogCompatibility(
      source.catalog,
      feature.slug,
      row.harness
    );
    const authored = row.versions?.find(
      (version) => version.track === "current"
    );
    assert.ok(authored);
    expect(checked.assessment?.status).toBe(authored.status);
    expect(checked.assessment?.evidence).toEqual(authored.evidence);
    expect(checked.resources).toEqual(feature.resources);
    const response = await (
      await rpc("tools/call", {
        name: "check_compatibility",
        arguments: { feature: feature.slug, harness: row.harness },
      })
    ).json();
    expect(response.result.structuredContent.assessment.status).toBe(
      authored.status
    );
  });
  it("keeps missing evidence unknown and rejects unknown tracks and slugs", async () => {
    const empty = {
      ...source.catalog,
      features: [{ ...feature, support: [] }],
    };
    expect(
      checkCatalogCompatibility(empty, feature.slug, firstHarness.slug)
        .assessment?.status
    ).toBe("unknown");
    expect(() =>
      checkCatalogCompatibility(
        empty,
        feature.slug,
        firstHarness.slug,
        "invented"
      )
    ).toThrow("Unknown track");
    const missing = await (
      await rpc("tools/call", {
        name: "check_compatibility",
        arguments: { feature: "made-up", harness: firstHarness.slug },
      })
    ).json();
    expect(missing.result.isError).toBe(true);
  });
  it("rejects invalid arguments, missing records, and broad family claims", async () => {
    const invalid = await (
      await rpc("tools/call", {
        name: "search_catalog",
        arguments: { query: "x", limit: 1000 },
      })
    ).json();
    expect(invalid.result?.isError || invalid.error).toBeTruthy();
    const missing = await (
      await rpc("tools/call", {
        name: "get_record",
        arguments: { kind: "product", slug: "made-up" },
      })
    ).json();
    expect(missing.result.isError).toBe(true);
    const family = {
      ...source.catalog,
      features: [{ ...feature, capabilityKind: "family" as const }],
    };
    expect(() =>
      checkCatalogCompatibility(family, feature.slug, firstHarness.slug)
    ).toThrow("capability family");
  });
  it("handles malformed JSON, method rejection, CORS, and bounded requests", async () => {
    const load = async () => source;
    expect(
      (
        await handleCatalogMcp(
          new Request("https://canmyagentuse.com/mcp"),
          load
        )
      ).status
    ).toBe(405);
    const options = await handleCatalogMcp(
      new Request("https://canmyagentuse.com/mcp", { method: "OPTIONS" }),
      load
    );
    expect(options.status).toBe(204);
    const denied = await handleCatalogMcp(
      new Request("https://canmyagentuse.com/mcp", {
        method: "POST",
        headers: { origin: "https://untrusted.example" },
      }),
      load
    );
    expect(denied.status).toBe(403);
    expect(options.headers.get("access-control-allow-methods")).toContain(
      "POST"
    );
    const bad = await handleCatalogMcp(
      new Request("https://canmyagentuse.com/mcp", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json, text/event-stream",
        },
        body: "{",
      }),
      load
    );
    expect(bad.status).toBe(400);
    const huge = await handleCatalogMcp(
      new Request("https://canmyagentuse.com/mcp", {
        method: "POST",
        body: "x".repeat(65537),
      }),
      load
    );
    expect(huge.status).toBe(413);
  });
});
