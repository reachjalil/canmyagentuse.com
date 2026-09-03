import type { APIRoute } from "astro";
import {
  SITE,
  reportMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const reports = await publishedCollection("reports");
  return markdownResponse(
    toEntryMarkdown({
      title: "Can My Agent Use Reports",
      htmlPath: "/reports",
      markdownPath: "/reports.md",
      llmSummary:
        "Data-driven reporting on agent harnesses, capability evidence, interoperability, and visible research gaps.",
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: reports
        .map(
          (report) =>
            `- [${report.data.title}](${reportMarkdownPath(report.data.slug)}) — snapshot ${report.data.snapshotDate} — ${report.data.llmSummary}`
        )
        .join("\n"),
    })
  );
};
