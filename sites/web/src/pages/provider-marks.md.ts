import { PROVIDER_MARKS, SITE } from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";

const handler: APIRoute = ({ request }) => {
  const rows = [...PROVIDER_MARKS]
    .toSorted((left, right) => left.label.localeCompare(right.label))
    .map(
      (mark) =>
        `| ${mark.label} | [${mark.sourcePackage}@${mark.sourceVersion}](${mark.sourceUrl}) | [${mark.license}](${mark.licenseUrl}) | ${mark.brandGuidelinesUrl ? `[Brand guidance](${mark.brandGuidelinesUrl})` : "Not located in the manifest"} | ${mark.reviewedAt} |`
    )
    .join("\n");
  const body = `---
title: "Provider mark provenance"
canonical: "${SITE.url}/provider-marks"
contentKind: "page"
locale: "en"
description: "Source, license, review date, and usage boundary for every third-party reference mark displayed by Can My Agent Use."
llmSummary: "Auditable manifest for secondary provider and product marks used only to identify catalog records. Source licenses and trademark rights remain separate."
updatedAt: "2026-08-28T00:00:00.000Z"
verifiedAt: "2026-08-28"
tags: ["identity", "provenance", "provider-marks"]
---

# Provider mark provenance

These local marks identify exact named catalog records. They are not badges,
partner marks, endorsements, certifications, or compatibility evidence.

The manifest records each asset's pinned source, source license, and review date.
An open-source asset license does not grant trademark rights, and this record is
not a blanket legal conclusion about fair use. Unknown or unreviewed brands use
the original Can My Agent Use monogram fallback.

| Reference | Pinned source | Asset license | Brand guidance | Reviewed |
| --- | --- | --- | --- | --- |
${rows}

Can My Agent Use is independent and is not affiliated with, endorsed by, or
sponsored by the providers and products referenced in the catalog.
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};

export const GET = handler;
export const HEAD = handler;
