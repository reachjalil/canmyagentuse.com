import type { APIRoute } from "astro";
import { SITE, featureMarkdownPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../lib/collections";
import { textResponse } from "../../lib/security";

export const GET: APIRoute = async () => {
  const features = await publishedCollection("features");
  return textResponse(
    `${[
      `# ${SITE.name} capabilities`,
      "",
      "> Vendor-neutral capability records with exact harness assertions.",
      "",
      ...features.map(
        (entry) =>
          `- [${entry.data.title}](${featureMarkdownPath(entry.data.slug)}): ${entry.data.llmSummary}`
      ),
      "",
    ].join("\n")}`
  );
};
