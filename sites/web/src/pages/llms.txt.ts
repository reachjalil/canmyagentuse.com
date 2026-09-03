import type { APIRoute } from "astro";
import { SITE, toLlmsTxt } from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { researchAtlas } from "../lib/research";
import { textResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const [features, harnesses, specifications, pages, news, reports] =
    await Promise.all([
      publishedCollection("features"),
      publishedCollection("harnesses"),
      publishedCollection("specifications"),
      publishedCollection("pages"),
      publishedCollection("news"),
      publishedCollection("reports"),
    ]);

  const catalog = toLlmsTxt({
    features: features.map((entry) => entry.data),
    harnesses: harnesses.map((entry) => entry.data),
    specifications: specifications.map((entry) => entry.data),
    pages: pages.map((entry) => entry.data),
    news: news.map((entry) => entry.data),
    reports: reports.map((entry) => entry.data),
    siteUrl: SITE.url,
  });
  return textResponse(
    `${catalog}\n## Evidence Atlas\n\n- [Full exact-surface research snapshot](${SITE.url}/atlas.md): ${researchAtlas.report.vendors} vendors, ${researchAtlas.report.surfaces} surfaces, ${researchAtlas.report.features} atomic features, and ${researchAtlas.report.compatibilityCells} cells as of ${researchAtlas.seed.research_cutoff}.\n- [Atlas source ledger](${SITE.url}/atlas/sources.md): ${researchAtlas.report.sources} public source records with explicit evidence classes and review dates.\n\n## Adopt the catalog\n\n- [Canonical agent prompt](${SITE.url}/prompt.md): copy-ready prompts with the retrieval order, status semantics, and citation rules. Plain text: ${SITE.url}/prompt.txt\n- [Press kit](${SITE.url}/press.md): boilerplate, fact sheet, naming rules, and brand assets for coverage.\n- [Open data mirrors](https://github.com/reachjalil/canmyagentuse-data): CC BY 4.0 exports of the compatibility data on GitHub and [Hugging Face](https://huggingface.co/datasets/reachjalil/canmyagentuse).\n\n## Brand references\n\n- [Brand reference index](${SITE.url}/provider-marks.md): provider and product marks, source collections, and review dates.\n`
  );
};
