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
    `${report.totals.sourced} of ${report.totals.total} current-track cells have published evidence (${formatPercent(report.totals.share)}).`,
    "",
    "Coverage measures catalog research completeness. It is never a product score. Unknown means insufficient evidence, not unsupported.",
    "",
    "## By surface",
    "",
    "| Surface | Harnesses | Sourced | Unknown | Share |",
    "| --- | ---: | ---: | ---: | ---: |",
    ...report.surfaces.map(
      (surface) =>
        `| ${HARNESS_SURFACE_LABELS[surface.surface]} | ${surface.harnesses} | ${surface.sourced} | ${surface.unknown} | ${formatPercent(surface.share)} |`
    ),
    "",
    "## By capability",
    "",
    "| Capability | Sourced | Unknown | Share |",
    "| --- | ---: | ---: | ---: |",
    ...report.features.map(
      (feature) =>
        `| [${feature.title}](${featureMarkdownPath(feature.slug)}) | ${feature.sourced}/${feature.total} | ${feature.unknown} | ${formatPercent(feature.share)} |`
    ),
    "",
    "## By harness",
    "",
    "| Harness | Surface | Sourced | Unknown | Share |",
    "| --- | --- | ---: | ---: | ---: |",
    ...report.harnesses.map(
      (harness) =>
        `| [${harness.title}](${harnessMarkdownPath(harness.slug)}) | ${HARNESS_SURFACE_LABELS[harness.surface]} | ${harness.sourced}/${harness.total} | ${harness.unknown} | ${formatPercent(harness.share)} |`
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
