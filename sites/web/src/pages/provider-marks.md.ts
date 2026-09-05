import {
  PROVIDER_MARKS,
  SITE,
  providerMarkSource,
  providerMarkSourceUrl,
} from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";

const handler: APIRoute = ({ request }) => {
  const reviewed = PROVIDER_MARKS.map((mark) => mark.reviewedAt)
    .toSorted()
    .at(-1);
  const rows = [...PROVIDER_MARKS]
    .toSorted((left, right) => left.label.localeCompare(right.label))
    .map((mark) => {
      const source = providerMarkSource(mark.source);
      const guide = mark.brandGuidelinesUrl
        ? `[Brand guide](${mark.brandGuidelinesUrl})`
        : "—";
      const pin = mark.sha256
        ? `SHA-256: ${mark.sha256}`
        : `${source.packageName}@${source.packageVersion}; ${source.revision}`;
      return `| ${mark.label} | [${source.label}](${source.repositoryUrl}) · [Exact asset](${providerMarkSourceUrl(mark)}) | [${source.license}](${source.licenseUrl}) | ${guide} | ${mark.reviewedAt} | ${pin} |`;
    })
    .join("\n");
  const body = `---
title: "Brand references"
canonical: "${SITE.url}/provider-marks"
contentKind: "page"
locale: "en"
description: "Brand marks used to identify providers and products throughout the Can My Agent Use catalog."
llmSummary: "Index of provider and product marks used for clear, consistent catalog references."
updatedAt: "${reviewed}T00:00:00.000Z"
verifiedAt: "${reviewed}"
tags: ["identity", "providers", "products"]
---

# Brand references

Compact marks make product columns easier to scan across search, comparisons,
matrices, and research profiles. Names remain visible beside every mark, and
unmapped brands use a text fallback.

| Brand | Source | Source license or terms | Brand guide | Reviewed | Pin |
| --- | --- | --- | --- | --- | --- |
${rows}

${PROVIDER_MARKS.filter((mark) => mark.attribution)
  .map((mark) => mark.attribution)
  .join("\n\n")}

Can My Agent Use is an independent publication. Brand names and marks belong
to their respective owners and are used to identify products covered by the
catalog. Marks are secondary editorial references, not provider endorsements.
OpenWork is the separately labeled founding sponsor. Source licenses do not grant
trademark rights; a review date is not provider permission or a legal conclusion.
Provider downloads are preserved locally and SHA-256 checked during every build.
The [review ledger](https://github.com/reachjalil/canmyagentuse.com/blob/main/ops/PROVIDER-MARK-REVIEW-2026-09-04.md)
records product mappings and policy restrictions.

[Report an outdated mark or incorrect mapping](/report.md).
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};

export const GET = handler;
export const HEAD = handler;
