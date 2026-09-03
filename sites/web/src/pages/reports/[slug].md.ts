import type { APIRoute } from "astro";
import { entryBySlug, publishedCollection } from "../../lib/collections";
import { reportEntryMarkdown } from "../../lib/markdown";
import { reportSnapshot } from "../../lib/reports";
import { markdownResponse } from "../../lib/security";

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
    return markdownResponse("# Unknown report\n", 404);
  }
  return markdownResponse(
    reportEntryMarkdown({
      report: report.data,
      body: report.body ?? "",
      snapshot,
    })
  );
};
