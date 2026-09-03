import type { APIRoute } from "astro";
import {
  reportJsonPath,
  reportMarkdownPath,
  reportPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../../../lib/collections";
import { jsonResponse } from "../../../lib/security";

export const GET: APIRoute = async () => {
  const reports = await publishedCollection("reports");
  return jsonResponse({
    items: reports.map((report) => ({
      ...report.data,
      html: reportPath(report.data.slug),
      markdown: reportMarkdownPath(report.data.slug),
      json: reportJsonPath(report.data.slug),
    })),
  });
};
