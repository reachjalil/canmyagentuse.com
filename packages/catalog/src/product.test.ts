import { describe, expect, it } from "vitest";
import {
  productSchema,
  productMarkdown,
  productRecord,
  filterProducts,
  PRODUCT_ACTIONS,
  PRODUCT_INTERFACES,
} from "./product.ts";
import { markdownPathForPagePath, jsonPathForPagePath } from "./paths.ts";
import { searchCatalog } from "./search.ts";

function first<T>(items: T[]): T {
  const item = items[0];
  if (item === undefined) throw new Error("Test fixture must not be empty");
  return item;
}

const fixture = () => ({
  title: "Test Notes",
  slug: "test-notes",
  locale: "en",
  description: "Notes with scoped access",
  seoTitle: "Test notes setup",
  socialTitle: "Test Notes",
  socialDescription: "Notes with scoped access",
  llmSummary: "Notes with scoped access",
  audience: "People choosing notes",
  updated: "2026-09-04",
  published: "2026-09-04",
  tags: ["notes"],
  category: "Notes",
  categorySlug: "note-taking",
  vendor: "Test",
  summary: "Notes with scoped access",
  homepage: "https://example.com",
  scope: "Test integration",
  bestFor: "Local note workflows",
  actions: PRODUCT_ACTIONS.map((id) => ({
    id,
    status: "unknown",
    summary: "Not assessed",
    detail: "Account flow not assessed",
    sourceIds: [],
  })),
  integrations: PRODUCT_INTERFACES.map((kind) => ({
    kind,
    status: kind === "mcp" ? "community" : "unknown",
    detail: `${kind} scope`,
    sourceIds: kind === "mcp" ? ["docs"] : [],
  })),
  routes: [
    {
      name: "MCP",
      description: "Scoped route",
      feature: "mcp-tools",
      sourceIds: ["docs"],
    },
  ],
  setup: [
    { title: "Select access", actor: "You", detail: "Choose the workspace" },
  ],
  sources: [
    {
      id: "docs",
      title: "Docs",
      href: "https://example.com/docs",
      publisher: "Test",
      reviewedAt: "2026-09-04",
    },
  ],
});

describe("product evidence integrity", () => {
  it("rejects duplicate actions and unresolved evidence references", () => {
    const data = fixture();
    data.actions[1] = first(data.actions);
    expect(productSchema.safeParse(data).success).toBe(false);
    const missing = fixture();
    first(missing.routes).sourceIds = ["absent"];
    expect(productSchema.safeParse(missing).success).toBe(false);
  });
  it("requires sources for positive actions and interface claims", () => {
    const data = fixture();
    first(data.actions).status = "agent-ready";
    expect(productSchema.safeParse(data).success).toBe(false);
    const integration = fixture();
    first(integration.integrations).sourceIds = [];
    expect(productSchema.safeParse(integration).success).toBe(false);
  });
  it("rejects repeated interface types instead of silently omitting MCP Apps", () => {
    const data = fixture();
    data.integrations[1] = first(data.integrations);
    expect(productSchema.safeParse(data).success).toBe(false);
  });
  it("keeps uncertainty, human setup, sources, and body in machine copies", () => {
    const product = productSchema.parse(fixture());
    const md = productMarkdown(product, "An important limitation.");
    expect(md).toContain("An important limitation.");
    expect(md).toContain("Community");
    expect(md).toContain("MCP Apps: Not verified");
    expect(md).toContain("https://example.com/docs");
    expect(md).toContain("2026-09-04");
    expect(md).toContain("Choose the workspace");
    expect(productRecord(product).integrations).toEqual(product.integrations);
    expect(markdownPathForPagePath("/products/test-notes")).toBe(
      "/products/test-notes.md"
    );
    expect(jsonPathForPagePath("/products/test-notes")).toBe(
      "/api/v1/products/test-notes.json"
    );
  });
});
describe("product discovery", () => {
  it("requires every selected interface and never counts unknown as support", () => {
    const products = [productSchema.parse(fixture())];
    expect(filterProducts(products, { interfaces: ["mcp"] })).toHaveLength(1);
    expect(
      filterProducts(products, { interfaces: ["mcp", "mcp-apps"] })
    ).toHaveLength(0);
    expect(
      filterProducts(products, { interfaces: ["mcp"], officialOnly: true })
    ).toHaveLength(0);
    expect(filterProducts(products, { category: "email" })).toHaveLength(0);
  });
  it("finds products in unified search without removing the existing collections", () => {
    const product = productSchema.parse(fixture());
    const result = searchCatalog("test notes", {
      products: [product],
      features: [],
      harnesses: [],
    });
    expect(result.products).toEqual([product]);
    expect(result.hits[0]?.path).toBe("/products/test-notes");
  });
});
