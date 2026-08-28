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
  const [features, harnesses, specifications] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("specifications"),
  ]);
  const query = (url.searchParams.get("q") ?? "").trim();
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
  const pathFor = (
    kind: (typeof results.hits)[number]["kind"],
    slug: string
  ) => {
    if (kind === "feature") return featureMarkdownPath(slug);
    if (kind === "harness") return harnessMarkdownPath(slug);
    return specificationMarkdownPath(slug);
  };
  const activeSearch = Boolean(query || family || harness || support || stage);
  const lines = activeSearch
    ? [
        `Query: \`${query}\``,
        `Filters: family=${family || "any"}; harness=${harness || "any"}; support=${support ?? "any"}; stage=${stage ?? "any"}`,
        "",
        `## Results (${results.hits.length})`,
        "",
        ...(results.hits.length
          ? results.hits.map(
              (hit) =>
                `- [${hit.title}](${pathFor(hit.kind, hit.slug)}): ${hit.kind}; ${hit.meta}; ${hit.summary}`
            )
          : [
              "No catalog record matched. Try a capability, harness family, provider, protocol, or specification name.",
            ]),
      ]
    : [
        "Add a `q` query parameter, for example `/search?q=mcp`, to search capability, harness, and specification records.",
      ];
  return markdownResponse(
    generatedPageMarkdown({
      title: "Search the catalog",
      path: "/search",
      description:
        "Search published capability, exact harness, and specification records.",
      body: lines.join("\n"),
      updatedAt: latestUpdatedAt([
        ...features.map((entry) => entry.data),
        ...harnesses.map((entry) => entry.data),
        ...specifications.map((entry) => entry.data),
      ]),
    })
  );
};
