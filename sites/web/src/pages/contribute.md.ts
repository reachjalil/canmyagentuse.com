import type { APIRoute } from "astro";
import { generatedPageMarkdown } from "../lib/markdown";
import { markdownResponse } from "../lib/security";

export const GET: APIRoute = () =>
  markdownResponse(
    generatedPageMarkdown({
      title: "Contribute compatibility evidence",
      path: "/contribute",
      description:
        "How to propose an atomic capability, exact target, qualification, and public evidence record.",
      body: [
        "## 1. Define the capability",
        "",
        "Use a stable, provider-neutral ID and name the specification revision, role, authority, parent, related capabilities, and aliases.",
        "",
        "## 2. Name the exact target",
        "",
        "Identify one web, desktop, IDE, CLI, API, or hosted surface. Use a release where available or a dated hosted observation.",
        "",
        "## 3. Record the environment and constraints",
        "",
        "Retain plan, policy, region, authorization, transport, runtime, preview, and feature-flag conditions as typed qualifiers.",
        "",
        "## 4. Attach evidence",
        "",
        "Add a stable resource ID, public HTTPS source, evidence class, review date, locator, and concise factual note.",
        "",
        "## 5. Validate and preview",
        "",
        "Run schema, relation, formatting, test, build, and representation-parity checks. Review the HTML, Markdown, and JSON records.",
        "",
        "## 6. Preserve history",
        "",
        "Supersede changed statements with dated evidence. Keep vendor attestation distinct from independent reproduction.",
        "",
        "The repository workflow and frontmatter example live in `CONTRIBUTING.md`.",
      ].join("\n"),
    })
  );
