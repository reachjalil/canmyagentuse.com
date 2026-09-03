import type { APIRoute } from "astro";
import {
  MACHINE_PATHS,
  SITE,
  categoryMarkdownPath,
  featureMarkdownPath,
  harnessMarkdownPath,
  newsMarkdownPath,
  pageMarkdownPath,
  reportMarkdownPath,
  specificationMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import {
  researchAtlas,
  researchFeatureMarkdownPath,
  researchSurfaceMarkdownPath,
  researchVendorMarkdownPath,
} from "../lib/research";
import { markdownResponse } from "../lib/security";

function items(
  entries: readonly { title: string; path: string; summary: string }[]
): string[] {
  return entries.map(
    (entry) => `- [${entry.title}](${entry.path}) — ${entry.summary}`
  );
}

export const GET: APIRoute = async () => {
  const [
    features,
    harnesses,
    specifications,
    categories,
    pages,
    news,
    reports,
  ] = await Promise.all([
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("specifications"),
    publishedCollection("categories"),
    publishedCollection("pages"),
    publishedCollection("news"),
    publishedCollection("reports"),
  ]);
  const sections = [
    `# ${SITE.name} sitemap`,
    "",
    SITE.description,
    "",
    "## Start here",
    "",
    "- [Home](/index.md) — catalog orientation and scope",
    "- [Compare harnesses](/compare.md) — query-addressable two-column comparison",
    "- [Compatibility matrix](/matrix.md) — current-track capability-by-surface matrix",
    "- [Evidence ledger](/evidence.md) — reviewed sources and citing assertions",
    "- [Evidence Atlas](/atlas.md) — full 2026-08-28 exact-surface research seed",
    "- [Coverage](/coverage.md) — research completeness, never a product score",
    "- [Reports](/reports.md) — data-driven analysis built from named research snapshots",
    "- [Methodology](/methodology.md) — evidence and assertion rules",
    "- [Report an issue](/report.md) — prepare one exact catalog correction",
    "- [Brand references](/provider-marks.md) — provider and product marks used throughout the catalog",
    "- [Prompt this catalog](/prompt.md) — canonical prompts that route agents to the evidence",
    "- [Press kit](/press.md) — boilerplate, fact sheet, naming rules, and brand assets",
    "- [Evidence Atlas](/atlas.md) — broad dated research across exact product surfaces",
    "- [Atlas source ledger](/atlas/sources.md) — source-level provenance for the research snapshot",
    "",
    "## Capabilities",
    "",
    ...items(
      features.map((entry) => ({
        title: entry.data.title,
        path: featureMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "",
    "## Evidence Atlas exact surfaces",
    "",
    ...items(
      researchAtlas.seed.surfaces.map((surface) => ({
        title: surface.surface_name,
        path: researchSurfaceMarkdownPath(surface.surface_id),
        summary: `${surface.surface_type}; ${surface.version_or_observation}; tier ${surface.coverage_tier}.`,
      }))
    ),
    "",
    "## Evidence Atlas atomic features",
    "",
    ...items(
      researchAtlas.seed.features.map((feature) => ({
        title: feature.feature_name,
        path: researchFeatureMarkdownPath(feature.feature_id),
        summary: feature.description,
      }))
    ),
    "",
    "## Evidence Atlas vendors",
    "",
    ...items(
      researchAtlas.seed.vendors.map((vendor) => ({
        title: vendor.vendor_name,
        path: researchVendorMarkdownPath(vendor.vendor_id),
        summary: vendor.inclusion_basis,
      }))
    ),
    "",
    "## Harnesses",
    "",
    ...items(
      harnesses.map((entry) => ({
        title: `${entry.data.title} (${entry.data.surface})`,
        path: harnessMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "",
    "## Specifications",
    "",
    ...items(
      specifications.map((entry) => ({
        title: entry.data.title,
        path: specificationMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "",
    "## Categories",
    "",
    ...items(
      categories.map((entry) => ({
        title: entry.data.title,
        path: categoryMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "",
    "## Editorial pages",
    "",
    ...items(
      pages.map((entry) => ({
        title: entry.data.title,
        path: pageMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "- [Contribute evidence](/contribute.md) — submit the smallest truthful compatibility statement",
    "- [Conformance test registry](/tests.md) — proposed test definitions, not executed certifications",
    "- [Ecosystem changes](/changes.md) — dated standards and product events",
    "- [Contradictions](/contradictions.md) — unresolved source conflicts and scope mismatches",
    "- [Brand references](/provider-marks.md) — mark index, source collections, and review dates",
    "",
    "## News",
    "",
    ...items(
      news.map((entry) => ({
        title: entry.data.title,
        path: newsMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "",
    "## Reports",
    "",
    ...items(
      reports.map((entry) => ({
        title: entry.data.title,
        path: reportMarkdownPath(entry.data.slug),
        summary: entry.data.llmSummary,
      }))
    ),
    "",
    "## Machine interfaces",
    "",
    `- [Agent index](${MACHINE_PATHS.llms})`,
    `- [Full corpus](${MACHINE_PATHS.llmsFull})`,
    `- [API catalog](${MACHINE_PATHS.apiCatalog})`,
    `- [OpenAPI](${MACHINE_PATHS.openapi})`,
    `- [Read-only catalog skill](${MACHINE_PATHS.catalogSkill})`,
  ];
  return markdownResponse(`${sections.join("\n")}\n`);
};
