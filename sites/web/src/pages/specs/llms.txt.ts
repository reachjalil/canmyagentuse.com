import type { APIRoute } from "astro";
import { SITE, specificationMarkdownPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../lib/collections";
import { textResponse } from "../../lib/security";

export const GET: APIRoute = async () => {
  const specifications = await publishedCollection("specifications");
  return textResponse(
    `${[
      `# ${SITE.name} specifications`,
      "",
      "> Revision-aware protocol, convention, and package-format references.",
      "",
      ...specifications.map(
        (entry) =>
          `- [${entry.data.title}](${specificationMarkdownPath(entry.data.slug)}): ${entry.data.llmSummary}`
      ),
      "",
    ].join("\n")}`
  );
};
