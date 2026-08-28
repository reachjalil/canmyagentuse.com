import type { APIRoute } from "astro";
import { SITE, newsMarkdownPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../lib/collections";
import { textResponse } from "../../lib/security";

export const GET: APIRoute = async () => {
  const news = await publishedCollection("news");
  return textResponse(
    `${[
      `# ${SITE.name} news`,
      "",
      "> Dated catalog, evidence, and methodology notes.",
      "",
      ...news.map(
        (entry) =>
          `- [${entry.data.title}](${newsMarkdownPath(entry.data.slug)}): ${entry.data.llmSummary}`
      ),
      "",
    ].join("\n")}`
  );
};
