import {
  PRESS_BOILERPLATES,
  PRESS_KIT,
  SITE,
  absoluteUrl,
} from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";
import { publishedCollection } from "../lib/collections";
import { researchAtlas } from "../lib/research";

const handler: APIRoute = async ({ request }) => {
  const [products, features, harnesses, news] = await Promise.all([
    publishedCollection("products"),
    publishedCollection("features"),
    publishedCollection("harnesses"),
    publishedCollection("news"),
  ]);
  const report = researchAtlas.report;
  const milestoneDate = (entry: (typeof news)[number]) =>
    entry.data.published ?? entry.data.updated;
  const milestones = [...news]
    .toSorted(
      (left, right) =>
        milestoneDate(left).getTime() - milestoneDate(right).getTime()
    )
    .map(
      (item) =>
        `- ${milestoneDate(item).toISOString().slice(0, 10)} — [${item.data.title}](/news/${item.data.slug}.md): ${item.data.summary}`
    )
    .join("\n");

  const boilerplates = PRESS_BOILERPLATES.map(
    (boilerplate) => `### ${boilerplate.label} (${boilerplate.words} words)

${boilerplate.text}`
  ).join("\n\n");

  const factRows = PRESS_KIT.factSheet
    .map((fact) => `| ${fact.label} | ${fact.value} |`)
    .join("\n");

  const colorRows = [...PRESS_KIT.colors, ...PRESS_KIT.statusColors]
    .map((color) => `| ${color.name} | \`${color.hex}\` | ${color.role} |`)
    .join("\n");

  const assetRows = PRESS_KIT.assets
    .map(
      (asset) =>
        `| [${asset.label}](${absoluteUrl(asset.path)}) | ${asset.format} | ${asset.dimensions} | ${asset.note} |`
    )
    .join("\n");

  const list = (items: readonly string[]) =>
    items.map((item) => `- ${item}`).join("\n");

  const body = `---
title: "Press kit"
canonical: "${SITE.url}/press"
contentKind: "page"
locale: "en"
description: "Boilerplate, fact sheet, naming rules, brand assets, and catalog figures for writing about the independent compatibility catalog."
llmSummary: "Press kit for Can My Agent Use: approved boilerplate, fact sheet, naming rules, brand assets, palette, milestones, and contact routes."
updatedAt: "2026-09-04T00:00:00.000Z"
verifiedAt: "2026-09-04"
tags: ["press", "brand", "media"]
---

# Press kit

Everything needed to write about ${SITE.name} accurately: boilerplate, the
fact sheet, naming rules, brand assets, and current catalog figures. Quote it,
screenshot it, link it — no permission request needed for editorial coverage.

Pointing an agent here instead? Use the [canonical prompts](/prompt.md).

Commercial inquiries: see [sponsorship formats and editorial rules](/sponsors.md).

## Catalog figures

- Product & service guides: ${products.length}
- Catalog capabilities: ${features.length}
- Exact agent harnesses: ${harnesses.length}
- Evidence Atlas exact surfaces: ${report.surfaces}
- Evidence Atlas compatibility cells: ${report.compatibilityCells}
- Public source records: ${report.sources}

Figures are generated from the catalog at build time. Catalog coverage is
research progress, never usage share.

## Boilerplate

${boilerplates}

## Fact sheet

| Fact | Value |
| --- | --- |
${factRows}

## Name and usage

Use:

${list(PRESS_KIT.naming.use)}

Avoid:

${list(PRESS_KIT.naming.avoid)}

## Brand assets

The mark is the **evidence aperture**: four ledger corners framing one copper
compatibility cell.

| Asset | Format | Size | Note |
| --- | --- | --- | --- |
${assetRows}

Allowed:

${list(PRESS_KIT.assetRules.allowed)}

Not allowed:

${list(PRESS_KIT.assetRules.notAllowed)}

## Color and type

${PRESS_KIT.colorRule}

| Color | Hex | Role |
| --- | --- | --- |
${colorRows}

Typefaces: ${PRESS_KIT.typefaces.map((typeface) => `${typeface.name} (${typeface.weights}) — ${typeface.role}`).join("; ")}. ${PRESS_KIT.typefaceNote}

## Milestones

${milestones}

## Contact

${PRESS_KIT.contactNote}

- [Open data on GitHub](${PRESS_KIT.repositoryUrl})
- [Open data on Hugging Face](${PRESS_KIT.datasetUrl})
- [Catalog correction route](/report.md)

${SITE.independentNotice} Provider marks used inside the catalog are documented
on the [brand references](/provider-marks.md) page.
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};

export const GET = handler;
export const HEAD = handler;
