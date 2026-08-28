import type { APIRoute } from "astro";
import {
  SITE,
  newsMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const news = await publishedCollection("news");
  return markdownResponse(
    toEntryMarkdown({
      title: "Catalog news",
      htmlPath: "/news",
      markdownPath: "/news.md",
      llmSummary:
        "Dated notes about catalog methods, evidence, coverage, and releases.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: news
        .map(
          (entry) =>
            `- [${entry.data.title}](${newsMarkdownPath(entry.data.slug)}) — ${entry.data.updated.toISOString().slice(0, 10)} — ${entry.data.llmSummary}`
        )
        .join("\n"),
    })
  );
};
