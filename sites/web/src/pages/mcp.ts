import type { APIRoute } from "astro";
import { publishedCollection } from "../lib/collections";
import { handleCatalogMcp } from "../lib/mcp";
export const prerender = false;
export const ALL: APIRoute = ({ request }) =>
  handleCatalogMcp(request, async () => {
    const [products, features, harnesses, specifications] = await Promise.all([
      publishedCollection("products"),
      publishedCollection("features"),
      publishedCollection("harnesses"),
      publishedCollection("specifications"),
    ]);
    const entries = {
      product: products,
      feature: features,
      harness: harnesses,
      specification: specifications,
    };
    return {
      catalog: {
        products: products.map((e) => e.data),
        features: features.map((e) => e.data),
        harnesses: harnesses.map((e) => e.data),
        specifications: specifications.map((e) => e.data),
      },
      body: (kind, slug) =>
        entries[kind].find((e) => e.data.slug === slug)?.body ?? "",
    };
  });
