import type { APIRoute } from "astro";
import {
  HARNESS_SURFACES,
  SUPPORT_STATUS_LABELS,
  currentStatus,
  expandFeatureSupport,
  featureMarkdownPath,
  harnessMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { generatedPageMarkdown, latestUpdatedAt } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

const COVERAGE_FILTERS = new Set(["all", "sourced", "unknown"]);

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const requestedSurface = url.searchParams.get("surface") ?? "all";
  const surface =
    requestedSurface === "all" ||
    HARNESS_SURFACES.includes(
      requestedSurface as (typeof HARNESS_SURFACES)[number]
    )
      ? requestedSurface
      : "all";
  const requestedCoverage = url.searchParams.get("coverage") ?? "all";
  const coverage = COVERAGE_FILTERS.has(requestedCoverage)
    ? requestedCoverage
    : "all";
  const warnings = [
    requestedSurface !== surface
      ? `Unknown surface \`${requestedSurface}\`; using \`all\`.`
      : undefined,
    requestedCoverage !== coverage
      ? `Unknown coverage filter \`${requestedCoverage}\`; using \`all\`.`
      : undefined,
  ].filter((warning): warning is string => Boolean(warning));
  const harnessData = harnesses.map((entry) => entry.data);
  const visibleHarnesses = harnessData.filter(
    (harness) => surface === "all" || harness.surface === surface
  );
  const rows = features
    .filter((entry) => {
      if (!query) return true;
      return `${entry.data.title} ${entry.data.aliases.join(" ")}`
        .toLowerCase()
        .includes(query);
    })
    .map((entry) => ({
      feature: entry.data,
      cells: expandFeatureSupport(entry.data, harnessData)
        .filter((column) =>
          visibleHarnesses.some(
            (harness) => harness.slug === column.harness.slug
          )
        )
        .map((column) => ({
          harness: column.harness,
          status: currentStatus(column.versions),
        })),
    }))
    .filter((row) => {
      if (coverage === "sourced") {
        return row.cells.some((cell) => cell.status !== "unknown");
      }
      if (coverage === "unknown") {
        return row.cells.every((cell) => cell.status === "unknown");
      }
      return true;
    });
  const header = [
    "Capability",
    ...visibleHarnesses.map(
      (harness) => `[${harness.title}](${harnessMarkdownPath(harness.slug)})`
    ),
  ];
  const body = [
    "Current track only. Each status applies to an exact harness surface. Open a capability record for constraints and evidence.",
    "",
    "Unknown means insufficient published evidence; it does not mean unsupported.",
    ...(warnings.length ? ["", "## Request notes", "", ...warnings] : []),
    "",
    `## Matrix (${rows.length} capabilities × ${visibleHarnesses.length} surfaces)`,
    "",
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => {
      const cells = visibleHarnesses.map((harness) => {
        const status =
          row.cells.find((cell) => cell.harness.slug === harness.slug)
            ?.status ?? "unknown";
        return SUPPORT_STATUS_LABELS[status];
      });
      return `| [${row.feature.title}](${featureMarkdownPath(row.feature.slug)}) | ${cells.join(" | ")} |`;
    }),
  ];
  return markdownResponse(
    generatedPageMarkdown({
      title: "Compatibility matrix",
      path: "/matrix",
      jsonPath: "/api/v1/matrix.json",
      description:
        "Current-track feature-by-surface compatibility matrix with explicit unknowns.",
      body: body.join("\n"),
      updatedAt: latestUpdatedAt([
        ...features.map((entry) => entry.data),
        ...harnesses.map((entry) => entry.data),
      ]),
    })
  );
};
