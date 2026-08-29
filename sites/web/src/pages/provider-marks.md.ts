import {
  PROVIDER_MARKS,
  SITE,
  providerMarkSource,
} from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";

const handler: APIRoute = ({ request }) => {
  const rows = [...PROVIDER_MARKS]
    .toSorted((left, right) => left.label.localeCompare(right.label))
    .map((mark) => {
      const source = providerMarkSource(mark.source);
      const guide = mark.brandGuidelinesUrl
        ? `[Brand guide](${mark.brandGuidelinesUrl})`
        : "—";
      return `| ${mark.label} | [${source.label}](${source.repositoryUrl}) | ${guide} | ${mark.reviewedAt} |`;
    })
    .join("\n");
  const body = `---
title: "Brand references"
canonical: "${SITE.url}/provider-marks"
contentKind: "page"
locale: "en"
description: "Brand marks used to identify providers and products throughout the Can My Agent Use catalog."
llmSummary: "Index of provider and product marks used for clear, consistent catalog references."
updatedAt: "2026-08-28T00:00:00.000Z"
verifiedAt: "2026-08-28"
tags: ["identity", "providers", "products"]
---

# Brand references

Compact marks make product columns easier to scan across search, comparisons,
matrices, and research profiles. Names remain visible beside every mark, and
unmapped brands use a text fallback.

| Brand | Source collection | Brand guide | Reviewed |
| --- | --- | --- | --- |
${rows}

Can My Agent Use is an independent publication. Brand names and marks belong
to their respective owners and are used to identify products covered by the
catalog. [Report an outdated mark or incorrect mapping](/report.md).
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};

export const GET = handler;
export const HEAD = handler;
