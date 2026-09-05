import type { APIRoute } from "astro";
import {
  SITE,
  REVIEW_VERDICTS,
  newsMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const news = await publishedCollection("news");
  return markdownResponse(
    toEntryMarkdown({
      title: "Field Notes",
      htmlPath: "/news",
      markdownPath: "/news.md",
      llmSummary:
        "Living explorations of everyday agent tasks, with verdicts, dated evidence and edition history.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: news
        .map(
          (entry) =>
            `- [${entry.data.title}](${newsMarkdownPath(entry.data.slug)}) — ${entry.data.updated.toISOString().slice(0, 10)} — ${entry.data.llmSummary}${entry.data.review ? ` — ${REVIEW_VERDICTS[entry.data.review.verdict]} · Version ${entry.data.review.version}` : ""}`
        )
        .join("\n"),
    })
  );
};
