import type { APIRoute } from "astro";
import {
  SUPPORT_STATUS_LABELS,
  currentStatus,
  expandFeatureSupport,
  featureMarkdownPath,
  harnessMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { generatedPageMarkdown, latestUpdatedAt } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

const VIEWS = new Set(["all", "different", "supported", "evidence-gaps"]);

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const [features, harnesses] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
  ]);
  const requestedLeft = url.searchParams.get("a");
  const requestedRight = url.searchParams.get("b");
  const left =
    harnesses.find((entry) => entry.data.slug === requestedLeft) ??
    harnesses.find((entry) => entry.data.slug === "cursor") ??
    harnesses[0];
  const right =
    harnesses.find((entry) => entry.data.slug === requestedRight) ??
    harnesses.find((entry) => entry.data.slug === "claude-cli") ??
    harnesses[1] ??
    harnesses[0];
  if (!left || !right) {
    return markdownResponse("# Comparison unavailable\n", 503);
  }
  const requestedView = url.searchParams.get("view") ?? "all";
  const view = VIEWS.has(requestedView) ? requestedView : "all";
  const requestedCategory = url.searchParams.get("category") ?? "";
  const categories = new Set(features.map((entry) => entry.data.category));
  const category = categories.has(requestedCategory) ? requestedCategory : "";
  const query = (url.searchParams.get("q") ?? "").trim().toLocaleLowerCase();
  const warnings = [
    requestedLeft && left.data.slug !== requestedLeft
      ? `Unknown left harness \`${requestedLeft}\`; using \`${left.data.slug}\`.`
      : undefined,
    requestedRight && right.data.slug !== requestedRight
      ? `Unknown right harness \`${requestedRight}\`; using \`${right.data.slug}\`.`
      : undefined,
    requestedView !== view
      ? `Unknown view \`${requestedView}\`; using \`all\`.`
      : undefined,
    requestedCategory && !category
      ? `Unknown category \`${requestedCategory}\`; using all groups.`
      : undefined,
  ].filter((warning): warning is string => Boolean(warning));
  const harnessData = harnesses.map((entry) => entry.data);
  const rows = features
    .map((feature) => {
      const columns = expandFeatureSupport(feature.data, harnessData);
      const leftVersion = columns
        .find((column) => column.harness.slug === left.data.slug)
        ?.versions.find((version) => version.track === "current");
      const rightVersion = columns
        .find((column) => column.harness.slug === right.data.slug)
        ?.versions.find((version) => version.track === "current");
      return {
        feature: feature.data,
        left: currentStatus(
          columns.find((column) => column.harness.slug === left.data.slug)
            ?.versions ?? []
        ),
        right: currentStatus(
          columns.find((column) => column.harness.slug === right.data.slug)
            ?.versions ?? []
        ),
        leftVersion,
        rightVersion,
      };
    })
    .filter((row) => {
      if (category && row.feature.category !== category) return false;
      if (
        query &&
        !`${row.feature.title} ${row.feature.summary} ${row.feature.category}`
          .toLocaleLowerCase()
          .includes(query)
      )
        return false;
      if (view === "different") return row.left !== row.right;
      if (view === "supported")
        return row.left === "yes" || row.right === "yes";
      if (view === "evidence-gaps")
        return row.left === "unknown" || row.right === "unknown";
      return true;
    });
  const formatCell = (
    status: (typeof rows)[number]["left"],
    version: (typeof rows)[number]["leftVersion"]
  ) => {
    const details = [
      version?.target
        ? `${version.target.kind}: ${version.target.revision}`
        : undefined,
      version?.environmentProfile,
      ...(version?.qualifiers ?? []).map(
        (item) => `${item.type}: ${item.value}`
      ),
      version?.evidence?.length
        ? `${version.evidence.length} source${version.evidence.length === 1 ? "" : "s"}`
        : "no attached public evidence",
    ].filter((item): item is string => Boolean(item));
    return `${SUPPORT_STATUS_LABELS[status]}<br><small>${details.join(" · ")}</small>`;
  };
  const body = [
    `Comparing [${left.data.title}](${harnessMarkdownPath(left.data.slug)}) with [${right.data.title}](${harnessMarkdownPath(right.data.slug)}). Current track only; view: \`${view}\`${category ? `; group: \`${category}\`` : ""}${query ? `; query: \`${query}\`` : ""}.`,
    "",
    "Unknown means insufficient published evidence; it does not mean unsupported.",
    ...(warnings.length ? ["", "## Request notes", "", ...warnings] : []),
    "",
    `## Results (${rows.length})`,
    "",
    `| Capability | ${left.data.title} | ${right.data.title} |`,
    "| --- | --- | --- |",
    ...rows.map(
      (row) =>
        `| [${row.feature.title}](${featureMarkdownPath(row.feature.slug)})<br><small>${row.feature.summary}</small> | ${formatCell(row.left, row.leftVersion)} | ${formatCell(row.right, row.rightVersion)} |`
    ),
    "",
    "Use the linked capability records for targets, constraints, dates, and evidence.",
  ];
  return markdownResponse(
    generatedPageMarkdown({
      title: "Compare harnesses",
      path: "/compare",
      description:
        "Compare two exact harness surfaces without generalizing across product families.",
      body: body.join("\n"),
      updatedAt: latestUpdatedAt([
        ...features.map((entry) => entry.data),
        ...harnesses.map((entry) => entry.data),
      ]),
    })
  );
};
