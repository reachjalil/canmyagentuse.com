import type { APIRoute } from "astro";
import {
  SITE,
  featureMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const features = await publishedCollection("features");
  return markdownResponse(
    toEntryMarkdown({
      title: "Capabilities",
      htmlPath: "/features",
      jsonPath: "/api/v1/features.json",
      markdownPath: "/features.md",
      llmSummary:
        "Vendor-neutral capabilities with exact harness assertions and public evidence.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: features
        .map(
          (entry) =>
            `- [${entry.data.title}](${featureMarkdownPath(entry.data.slug)}) — ${entry.data.llmSummary}`
        )
        .join("\n"),
    })
  );
};
