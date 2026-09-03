import { CANONICAL_PROMPTS, MACHINE_PATHS, SITE } from "@canmyagentuse/catalog";
import type { APIRoute } from "astro";

const handler: APIRoute = ({ request }) => {
  const prompts = CANONICAL_PROMPTS.map(
    (prompt) => `## ${prompt.label}

${prompt.useWhen}

\`\`\`text
${prompt.text}
\`\`\`
`
  ).join("\n");

  const body = `---
title: "Prompt this catalog"
canonical: "${SITE.url}/prompt"
contentKind: "page"
locale: "en"
description: "Canonical prompts that point any AI assistant at the compatibility catalog: exact surfaces, honest unknowns, and dated citations."
llmSummary: "Copy-ready canonical prompts with the retrieval order, status semantics, and citation rules for using the Can My Agent Use catalog as an evidence source."
updatedAt: "2026-08-29T00:00:00.000Z"
verifiedAt: "2026-08-29"
tags: ["prompts", "agents", "integration"]
---

# Prompt this catalog

These are the canonical prompts maintained by ${SITE.name}. They send any AI
assistant to the catalog's evidence — exact product surfaces, honest unknowns,
and dated citations — instead of letting it guess from training data.

The full prompt is also served as plain text at [${MACHINE_PATHS.promptText}](${SITE.url}${MACHINE_PATHS.promptText}).

${prompts}
## What the prompts enforce

- **Exact surfaces.** Answers name one product surface — web, desktop, or CLI — and never generalize to the provider's product family.
- **Honest unknowns.** Unknown means no public evidence has been reviewed; it is never reported as unsupported.
- **Qualifications survive.** Plan, platform, region, configuration, transport, and rollout limits stay attached when a result is restated.
- **Dated citations.** Every claim cites the catalog page and the underlying public evidence with its verification date.

Full definitions: [methodology](/methodology.md).

## Machine entry points

- [Plain-text prompt](${MACHINE_PATHS.promptText})
- [Agent entry index](${MACHINE_PATHS.llms})
- [Read-only catalog skill](${MACHINE_PATHS.catalogSkill})
- [Agent-skills discovery index](${MACHINE_PATHS.agentSkillsIndex})
- [OpenAPI description](${MACHINE_PATHS.openapi})
- [RFC 9727 API catalog](${MACHINE_PATHS.apiCatalog})

Writing about the catalog instead? The [press kit](/press.md) has boilerplate,
the fact sheet, and brand assets.
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};

export const GET = handler;
export const HEAD = handler;
