import type { APIRoute } from "astro";
import {
  CONTRADICTIONS,
  OPEN_GOVERNANCE_QUESTIONS,
} from "@canmyagentuse/catalog";
import { generatedPageMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = () => {
  const lines = [
    "Credible sources can disagree because they target different roles, revisions, formats, or product surfaces. Conflicts remain visible until resolved.",
    "",
    "## Contradiction ledger",
    "",
  ];
  for (const item of CONTRADICTIONS) {
    lines.push(
      `### ${item.topic}`,
      "",
      `- ID: \`${item.id}\``,
      `- Status: ${item.status}`,
      `- [${item.sourceA.id}](${item.sourceA.href}): ${item.sourceA.claim}`,
      `- [${item.sourceB.id}](${item.sourceB.href}): ${item.sourceB.claim}`,
      `- Handling: ${item.handling}`,
      ""
    );
  }
  lines.push("## Open governance questions", "");
  for (const item of OPEN_GOVERNANCE_QUESTIONS) {
    lines.push(
      `- \`${item.id}\` **${item.title}** — ${item.question} Owner: ${item.owner}; priority: ${item.priority}.`
    );
  }
  return markdownResponse(
    generatedPageMarkdown({
      title: "Contradictions and open questions",
      path: "/contradictions",
      jsonPath: "/api/v1/contradictions.json",
      description:
        "Visible evidence conflicts, scope mismatches, and unresolved governance questions.",
      body: lines.join("\n"),
    })
  );
};
