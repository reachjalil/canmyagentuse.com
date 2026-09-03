import type { APIRoute } from "astro";
import {
  reportJsonPath,
  reportMarkdownPath,
  reportPath,
} from "@canmyagentuse/catalog";
import { entryBySlug, publishedCollection } from "../../../../lib/collections";
import { reportSnapshot } from "../../../../lib/reports";
import { jsonResponse } from "../../../../lib/security";

export async function getStaticPaths() {
  const reports = await publishedCollection("reports");
  return reports.map((report) => ({ params: { slug: report.data.slug } }));
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug ?? "";
  const reports = await publishedCollection("reports");
  const report = entryBySlug(reports, slug);
  const snapshot = reportSnapshot(slug);
  if (!report || !snapshot) {
    return jsonResponse({ error: "Unknown report" }, 404);
  }
  return jsonResponse({
    metadata: report.data,
    html: reportPath(slug),
    markdown: reportMarkdownPath(slug),
    json: reportJsonPath(slug),
    source: {
      atlas: "/atlas",
      sourceLedger: "/atlas/sources",
      methodology: "/methodology",
    },
    data: snapshot,
  });
};
