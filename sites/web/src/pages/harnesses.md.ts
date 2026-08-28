import type { APIRoute } from "astro";
import {
  HARNESS_SURFACE_LABELS,
  SITE,
  formatPercent,
  groupHarnesses,
  harnessJsonPath,
  harnessMarkdownPath,
  toEntryMarkdown,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../lib/collections";
import { harnessSupportSummary } from "../lib/harnesses";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = async () => {
  const [harnesses, features] = await Promise.all([
    publishedCollection("harnesses"),
    publishedCollection("features"),
  ]);
  const harnessData = harnesses.map((entry) => entry.data);
  const featureData = features.map((entry) => entry.data);
  const groups = groupHarnesses(harnessData);
  return markdownResponse(
    toEntryMarkdown({
      title: "Agent harnesses we track",
      htmlPath: "/harnesses",
      jsonPath: "/api/v1/harnesses.json",
      markdownPath: "/harnesses.md",
      llmSummary: `${harnessData.length} exact web, desktop, and CLI product surfaces with scoped support summaries and machine-readable profile links; claims do not generalize across a provider family.`,
      contentKind: "page",
      locale: SITE.defaultLocale,
      body: [
        `This directory tracks ${harnessData.length} exact product surfaces across ${featureData.filter((feature) => feature.capabilityKind === "atomic").length} atomic capabilities. Web, desktop, editor, and CLI surfaces remain separate even when they share a provider or family name.`,
        "",
        "Unknown means no sufficiently scoped public evidence has been published for the exact current cell. It does not mean unsupported. Product names identify catalog records only and do not imply affiliation or endorsement.",
        "",
        ...groups.flatMap((group) => [
          `## ${HARNESS_SURFACE_LABELS[group.surface]} (${group.items.length})`,
          "",
          ...group.items.map((harness) => {
            const support = harnessSupportSummary(
              harness.slug,
              featureData,
              harnessData
            );
            const official = harness.homepage
              ? `[Official reference](${harness.homepage})`
              : "Official reference not recorded";
            return `- [${harness.title}](${harnessMarkdownPath(harness.slug)}) — ${harness.summary} Provider: ${harness.vendor}; execution: ${harness.execution}; target: ${harness.targetKind}; current review: ${support.reviewed}/${support.total} (${formatPercent(support.coverage)}); supported ${support.counts.yes}, partial ${support.counts.partial}, unsupported ${support.counts.no}, unknown ${support.counts.unknown}; ${support.sourceCount} public sources; ${official}; [JSON](${harnessJsonPath(harness.slug)}).`;
          }),
          "",
        ]),
        "## Related catalog views",
        "",
        "- [Compare two harnesses](/compare.md)",
        "- [Full compatibility matrix](/matrix.md)",
        "- [Research coverage](/coverage.md)",
        "- [Methodology](/methodology.md)",
      ].join("\n"),
    })
  );
};
