import type { APIRoute } from "astro";
import {
  buildEvidenceLedger,
  featureMarkdownPath,
  harnessMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { generatedPageMarkdown, latestUpdatedAt } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const features = await publishedCollection("features");
  const records = buildEvidenceLedger(features.map((entry) => entry.data));
  const lines = [
    "Documentation and listing records are evidence, not runtime certification.",
    "",
    `## Reviewed sources (${records.length})`,
    "",
  ];
  for (const record of records) {
    lines.push(
      `### [${record.title}](${record.href})`,
      "",
      `- Evidence ID: \`${record.id}\``,
      `- Publisher: ${record.publisher ?? "Not recorded"}`,
      `- Class: ${record.evidenceType ?? record.kind}`,
      `- Reviewed: ${record.reviewedAt ?? "Not recorded"}`,
      `- Capability: [${record.feature.title}](${featureMarkdownPath(record.feature.slug)})`,
      ...(record.locator ? [`- Locator: ${record.locator}`] : []),
      "",
      "Citing assertions:",
      "",
      ...(record.statements.length
        ? record.statements.map(
            (statement) =>
              `- [${statement.harness}](${harnessMarkdownPath(statement.harness)}): ${statement.track}; ${statement.status}; observed ${statement.observedAt}`
          )
        : ["- No published support assertion currently cites this source."]),
      ""
    );
  }
  return markdownResponse(
    generatedPageMarkdown({
      title: "Evidence ledger",
      path: "/evidence",
      jsonPath: "/api/v1/evidence.json",
      description:
        "Reviewed sources, evidence classes, dates, and the exact compatibility assertions that cite them.",
      body: lines.join("\n"),
      updatedAt: latestUpdatedAt(features.map((entry) => entry.data)),
    })
  );
};
