import type { APIRoute } from "astro";
import {
  SITE,
  harnessMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const harnesses = await publishedCollection("harnesses");
  return markdownResponse(
    toEntryMarkdown({
      title: "Harnesses",
      htmlPath: "/harnesses",
      jsonPath: "/api/v1/harnesses.json",
      markdownPath: "/harnesses.md",
      llmSummary:
        "Exact web, desktop, and CLI product surfaces; claims do not generalize across a provider family.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: harnesses
        .map(
          (entry) =>
            `- [${entry.data.title} (${entry.data.surface})](${harnessMarkdownPath(entry.data.slug)}) — ${entry.data.llmSummary}`
        )
        .join("\n"),
    })
  );
};
