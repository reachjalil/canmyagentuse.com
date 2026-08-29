import type { APIRoute } from "astro";
import {
  HARNESS_SURFACE_LABELS,
  buildCoverageReport,
  featureMarkdownPath,
  formatPercent,
  harnessMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { generatedPageMarkdown, latestUpdatedAt } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  const report = buildCoverageReport(
    features.map((entry) => entry.data),
    harnesses.map((entry) => entry.data)
  );
  const lines = [
    `${report.totals.assessed} of ${report.totals.total} current-track cells have a public status assessment (${formatPercent(report.totals.assessedShare)}).`,
    `${report.totals.compatible} assessed applicable cells are supported or partial (${formatPercent(report.totals.compatibleShareOfAssessed)} among assessed).`,
    `${report.totals.directEvidence} cells have direct reviewed evidence (${formatPercent(report.totals.directEvidenceShare)}).`,
    "",
    "Coverage measures catalog research completeness. It is never a product score. Unknown means insufficient evidence, not unsupported.",
    "",
    "## By surface",
    "",
    "| Surface | Harnesses | Assessed | Compatible / assessed | Direct evidence | Unknown |",
    "| --- | ---: | ---: | ---: | ---: | ---: |",
    ...report.surfaces.map(
      (surface) =>
        `| ${HARNESS_SURFACE_LABELS[surface.surface]} | ${surface.harnesses} | ${surface.assessed}/${surface.total} (${formatPercent(surface.assessedShare)}) | ${surface.compatible}/${surface.assessed - surface.notApplicable} (${formatPercent(surface.compatibleShareOfAssessed)}) | ${surface.directEvidence}/${surface.total} (${formatPercent(surface.directEvidenceShare)}) | ${surface.unknown} |`
    ),
    "",
    "## By capability",
    "",
    "| Capability | Assessed | Compatible / assessed | Direct evidence | Unknown |",
    "| --- | ---: | ---: | ---: | ---: |",
    ...report.features.map(
      (feature) =>
        `| [${feature.title}](${featureMarkdownPath(feature.slug)}) | ${feature.assessed}/${feature.total} (${formatPercent(feature.assessedShare)}) | ${feature.compatible}/${feature.assessed - feature.notApplicable} (${formatPercent(feature.compatibleShareOfAssessed)}) | ${feature.directEvidence}/${feature.total} (${formatPercent(feature.directEvidenceShare)}) | ${feature.unknown} |`
    ),
    "",
    "## By harness",
    "",
    "| Harness | Surface | Assessed | Compatible / assessed | Direct evidence | Unknown |",
    "| --- | --- | ---: | ---: | ---: | ---: |",
    ...report.harnesses.map(
      (harness) =>
        `| [${harness.title}](${harnessMarkdownPath(harness.slug)}) | ${HARNESS_SURFACE_LABELS[harness.surface]} | ${harness.assessed}/${harness.total} (${formatPercent(harness.assessedShare)}) | ${harness.compatible}/${harness.assessed - harness.notApplicable} (${formatPercent(harness.compatibleShareOfAssessed)}) | ${harness.directEvidence}/${harness.total} (${formatPercent(harness.directEvidenceShare)}) | ${harness.unknown} |`
    ),
  ];
  return markdownResponse(
    generatedPageMarkdown({
      title: "Catalog coverage",
      path: "/coverage",
      jsonPath: "/api/v1/coverage.json",
      description:
        "Transparent current-track research completeness by capability and exact harness surface.",
      body: lines.join("\n"),
      updatedAt: latestUpdatedAt([
        ...features.map((entry) => entry.data),
        ...harnesses.map((entry) => entry.data),
      ]),
    })
  );
};
