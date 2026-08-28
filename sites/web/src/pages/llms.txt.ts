import type { APIRoute } from "astro";
import { SITE, toLlmsTxt } from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { researchAtlas } from "../lib/research";
import { textResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const [features, harnesses, specifications, pages, news] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("specifications"),
    publishedCollection("pages"),
    publishedCollection("news"),
  ]);

  const catalog = toLlmsTxt({
    features: features.map((entry) => entry.data),
    harnesses: harnesses.map((entry) => entry.data),
    specifications: specifications.map((entry) => entry.data),
    pages: pages.map((entry) => entry.data),
    news: news.map((entry) => entry.data),
    siteUrl: SITE.url,
  });
  return textResponse(
    `${catalog}\n## Evidence Atlas\n\n- [Full exact-surface research snapshot](${SITE.url}/atlas.md): ${researchAtlas.report.vendors} vendors, ${researchAtlas.report.surfaces} surfaces, ${researchAtlas.report.features} atomic features, and ${researchAtlas.report.compatibilityCells} cells as of ${researchAtlas.seed.research_cutoff}.\n- [Atlas source ledger](${SITE.url}/atlas/sources.md): ${researchAtlas.report.sources} public source records. Documentation and registry evidence are not runtime certification.\n`
  );
};
