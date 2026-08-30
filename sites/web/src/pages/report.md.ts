import type { APIRoute } from "astro";
import { generatedPageMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = () =>
  markdownResponse(
    generatedPageMarkdown({
      title: "Suggest a catalog correction",
      path: "/report",
      description:
        "Submit a structured correction for editorial review and receive a trackable receipt.",
      body: `Can My Agent Use accepts structured corrections for an exact compatibility cell, product, capability, evidence record, methodology rule, or missing catalog entry.

Use the interactive [correction form](/report) to submit a proposal. Include:

- the capability, product, exact surface, and current or preview track when applicable;
- the proposed Supported, Partial, Unsupported, Unknown, or Not applicable status;
- a bounded explanation and public HTTPS sources;
- reproduction steps and affected version, plan, platform, and surface when material;
- any provider affiliation and optional private contact permission; and
- whether the explanation must remain internal or may be quoted in public editorial history.

A valid submission receives a CMAU receipt. It enters a moderated queue with received, triaged, needs-more-information, accepted, partially-accepted, declined, duplicate, and superseded states. It never updates the catalog automatically. Public receipt history never exposes contact details, network identifiers, private moderation metadata, or the submitter's explanation unless the submitter explicitly permits publication. Do not include account secrets, customer data, tokens, private screenshots, or private beta material.
`,
    })
  );
