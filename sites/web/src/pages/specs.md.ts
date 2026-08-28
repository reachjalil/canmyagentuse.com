import type { APIRoute } from "astro";
import {
  SITE,
  specificationMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const specifications = await publishedCollection("specifications");
  return markdownResponse(
    toEntryMarkdown({
      title: "Specifications",
      htmlPath: "/specs",
      jsonPath: "/api/v1/specs.json",
      markdownPath: "/specs.md",
      llmSummary:
        "Revision-aware protocol, convention, and package-format references.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: specifications
        .map(
          (entry) =>
            `- [${entry.data.title}](${specificationMarkdownPath(entry.data.slug)}) — ${entry.data.authority}; revision ${entry.data.revision}; ${entry.data.maturity}`
        )
        .join("\n"),
    })
  );
};
