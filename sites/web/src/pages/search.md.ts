import type { APIRoute } from "astro";
import {
  featureMarkdownPath,
  harnessMarkdownPath,
  searchCatalog,
  specificationMarkdownPath,
  SUPPORT_STAGES,
  SUPPORT_STATUSES,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { generatedPageMarkdown, latestUpdatedAt } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const [products, features, harnesses, specifications] = await Promise.all([
    publishedCollection("products"),
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("specifications"),
  ]);
  const query = (url.searchParams.get("q") ?? "").trim();
  const requestedScope = url.searchParams.get("scope") ?? "all";
  const scope =
    ["all", "product", "feature", "harness", "specification"].find(
      (value) => value === requestedScope
    ) ?? "all";
  const family = (url.searchParams.get("family") ?? "").trim();
  const harness = (url.searchParams.get("harness") ?? "").trim();
  const requestedSupport = (url.searchParams.get("support") ?? "").trim();
  const support = SUPPORT_STATUSES.find(
    (candidate) => candidate === requestedSupport
  );
  const requestedStage = (url.searchParams.get("stage") ?? "").trim();
  const stage = SUPPORT_STAGES.find(
    (candidate) => candidate === requestedStage
  );
  const results = searchCatalog(
    query,
    {
      products: products.map((entry) => entry.data),
      features: features.map((entry) => entry.data),
      harnesses: harnesses.map((entry) => entry.data),
      specifications: specifications.map((entry) => entry.data),
    },
    {
      family: family || undefined,
      harness: harness || undefined,
      support,
      stage,
    }
  );
  const hits =
    scope === "all"
      ? results.hits
      : results.hits.filter((hit) => hit.kind === scope);
  const pathFor = (
    kind: (typeof results.hits)[number]["kind"],
    slug: string
  ) => {
    if (kind === "product") return `/products/${slug}.md`;
    if (kind === "feature") return featureMarkdownPath(slug);
    if (kind === "harness") return harnessMarkdownPath(slug);
    return specificationMarkdownPath(slug);
  };
  const activeSearch = Boolean(
    query || family || harness || support || stage || scope !== "all"
  );
  const lines = activeSearch
    ? [
        `Query: \`${query}\``,
        `Filters: scope=${scope}; family=${family || "any"}; harness=${harness || "any"}; support=${support ?? "any"}; stage=${stage ?? "any"}`,
        "",
        `## Results (${hits.length})`,
        "",
        ...(hits.length
          ? hits.map(
              (hit) =>
                `- [${hit.title}](${pathFor(hit.kind, hit.slug)}): ${hit.kind}; ${hit.meta}; ${hit.summary}`
            )
          : [
              "No catalog record matched. Try a capability, harness family, provider, protocol, or specification name.",
            ]),
      ]
    : [
        "Add a `q` query parameter, for example `/search?q=mcp`, to search product, capability, harness, and specification records.",
      ];
  return markdownResponse(
    generatedPageMarkdown({
      title: "Search the catalog",
      path: "/search",
      description:
        "Search published product, capability, exact harness, and specification records.",
      body: lines.join("\n"),
      updatedAt: latestUpdatedAt([
        ...products.map((entry) => entry.data),
        ...features.map((entry) => entry.data),
        ...harnesses.map((entry) => entry.data),
        ...specifications.map((entry) => entry.data),
      ]),
    })
  );
};
