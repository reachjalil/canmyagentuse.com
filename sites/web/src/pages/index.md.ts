import { productMarkdownPath } from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";
import { SITE, toEntryMarkdown } from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { researchAtlas } from "../lib/research";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const products = await publishedCollection("products");
  const [features, harnesses, specifications] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("specifications"),
  ]);
  return markdownResponse(
    toEntryMarkdown({
      title: SITE.name,
      htmlPath: "/",
      markdownPath: "/index.md",
      llmSummary: SITE.description,
      contentKind: "page",
      locale: SITE.defaultLocale,
      description: SITE.description,
      body: [
        SITE.foundationNotice,
        "",
        SITE.independentNotice,
        "",
        "## Products your agent can use",
        "",
        "- [Browse products](/products.md) — signup, account access, paid services, and supported tasks",
        ...products.map(
          ({ data }) =>
            `- [${data.title}](${productMarkdownPath(data.slug)}): ${data.summary}`
        ),
        "",
        "## Agent compatibility catalog",
        "",
        `- [Capabilities](/features.md) — ${features.length} published capability records`,
        `- [Harnesses](/harnesses.md) — ${harnesses.length} exact chat, desktop, and CLI surfaces`,
        `- [Specifications](/specs.md) — ${specifications.length} revision-aware references`,
        "- [Comparison](/compare.md) — compare exact harness surfaces",
        "- [Evidence ledger](/evidence.md) — inspect sources and citing assertions",
        `- [Evidence Atlas](/atlas.md) — ${researchAtlas.report.vendors} vendors, ${researchAtlas.report.surfaces} exact surfaces, ${researchAtlas.report.features} atomic features, and ${researchAtlas.report.compatibilityCells} cells from the ${researchAtlas.seed.research_cutoff} deep research snapshot`,
        "- [Markdown sitemap](/sitemap.md) — discover all public document groups",
        "- [API catalog](/.well-known/api-catalog) — discover the JSON API contract",
      ].join("\n"),
    })
  );
};
