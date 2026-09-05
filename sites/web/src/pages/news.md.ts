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
  const guides = news.filter(
    (entry) => entry.data.review || entry.data.tags.includes("app-usage")
  );
  const archive = news.filter((entry) => !guides.includes(entry));
  return markdownResponse(
    toEntryMarkdown({
      title: "App usage",
      htmlPath: "/news",
      markdownPath: "/news.md",
      llmSummary:
        "Practical guides to choosing apps, connecting agents, and doing useful work, with setup requirements and dated evidence.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body:
        "## App usage guides\n\n" +
        guides
          .map(
            (entry) =>
              `- [${entry.data.title}](${newsMarkdownPath(entry.data.slug)}) — ${entry.data.updated.toISOString().slice(0, 10)} — ${entry.data.llmSummary}${entry.data.review ? ` — ${REVIEW_VERDICTS[entry.data.review.verdict]} · Version ${entry.data.review.version}` : ""}`
          )
          .join("\n") +
        "\n\n## Catalog development archive\n\nHistorical announcements; figures reflect publication dates. See /coverage for current data.\n\n" +
        archive
          .map(
            (entry) =>
              `- [${entry.data.title}](${newsMarkdownPath(entry.data.slug)}) — ${entry.data.published?.toISOString().slice(0, 10)}`
          )
          .join("\n"),
    })
  );
};
