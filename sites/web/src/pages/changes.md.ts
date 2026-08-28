import type { APIRoute } from "astro";
import { ECOSYSTEM_CHANGES } from "@canmyagentuse/catalog";
import { generatedPageMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = () =>
  markdownResponse(
    generatedPageMarkdown({
      title: "Ecosystem changes",
      path: "/changes",
      jsonPath: "/api/v1/changes.json",
      description:
        "Dated standards, governance, registry, and product events that shape catalog context.",
      body: [
        "Change events explain context; they do not change a support assertion without scoped evidence.",
        "",
        ...[...ECOSYSTEM_CHANGES]
          .toReversed()
          .map(
            (item) =>
              `- ${item.date}: [${item.event}](${item.href}); ${item.family}; ${item.type}`
          ),
      ].join("\n"),
      updatedAt: [...ECOSYSTEM_CHANGES]
        .map((item) => item.date)
        .toSorted()
        .at(-1),
    })
  );
