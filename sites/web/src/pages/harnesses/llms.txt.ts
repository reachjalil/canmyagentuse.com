import type { APIRoute } from "astro";
import {
  HARNESS_SURFACE_LABELS,
  SITE,
  groupHarnesses,
  harnessMarkdownPath,
} from "@canmyagentuse/catalog";
import { publishedCollection } from "../../lib/collections";
import { harnessSupportSummary } from "../../lib/harnesses";
import { textResponse } from "../../lib/security";

export const GET: APIRoute = async () => {
  const [harnesses, features] = await Promise.all([
    publishedCollection("harnesses"),
    publishedCollection("features"),
  ]);
  const harnessData = harnesses.map((entry) => entry.data);
  const featureData = features.map((entry) => entry.data);
  return textResponse(
    `${[
      `# ${SITE.name} harnesses`,
      "",
      `> ${harnessData.length} exact web, desktop, and CLI product surfaces. Unknown means unreviewed, not unsupported.`,
      "",
      ...groupHarnesses(harnessData).flatMap((group) => [
        `## ${HARNESS_SURFACE_LABELS[group.surface]}`,
        "",
        ...group.items.map((harness) => {
          const support = harnessSupportSummary(
            harness.slug,
            featureData,
            harnessData
          );
          return `- [${harness.title}](${harnessMarkdownPath(harness.slug)}): ${harness.summary} ${support.reviewed}/${support.total} current cells reviewed; ${support.counts.yes} supported, ${support.counts.partial} partial, ${support.counts.no} unsupported, ${support.counts.unknown} unknown.`;
        }),
        "",
      ]),
      "",
    ].join("\n")}`
  );
};
