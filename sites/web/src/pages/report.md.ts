import type { APIRoute } from "astro";
import { generatedPageMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = () =>
  markdownResponse(
    generatedPageMarkdown({
      title: "Report a catalog issue",
      path: "/report",
      description:
        "Prepare a structured correction for one capability and one exact product surface.",
      body: `Can My Agent Use accepts structured corrections for one capability and one exact product at a time.

Use the interactive [report builder](/report) to prepare a report. Include:

- the capability and exact product;
- the current or preview catalog record;
- the date observed;
- the observed behavior;
- the smallest proposed correction;
- a public evidence URL when one exists.

A community report starts a review. It does not change a support state without reviewed evidence. Do not include private account details, customer data, tokens, or private beta material.
`,
    })
  );
