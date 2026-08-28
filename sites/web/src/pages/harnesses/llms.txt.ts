import type { APIRoute } from "astro";
import { SITE, harnessMarkdownPath } from "@canmyagentuse/catalog";
import { publishedCollection } from "../../lib/collections";
import { textResponse } from "../../lib/security";

export const GET: APIRoute = async () => {
  const harnesses = await publishedCollection("harnesses");
  return textResponse(
    `${[
      `# ${SITE.name} harnesses`,
      "",
      "> Exact web, desktop, and CLI product surfaces.",
      "",
      ...harnesses.map(
        (entry) =>
          `- [${entry.data.title} (${entry.data.surface})](${harnessMarkdownPath(entry.data.slug)}): ${entry.data.llmSummary}`
      ),
      "",
    ].join("\n")}`
  );
};
