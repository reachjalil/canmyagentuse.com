---
title: Structured outputs
description: "Return JSON or schema-constrained output through a documented product feature."
slug: structured-output
locale: en
seoTitle: "Structured outputs — Can My Agent Use"
socialTitle: Structured outputs
socialDescription: "Return JSON or schema-validated objects. Unreviewed cells remain unknown."
llmSummary: "Structured outputs are documented JSON or schema-constrained product outputs; unreviewed harness cells remain unknown."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Return JSON or schema-constrained output through a documented product feature.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; a JSON transport envelope is distinguished from arbitrary user-supplied schema validation in qualifiers.
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code print mode documents both JSON/stream-JSON output and `--json-schema` validation against a caller-supplied JSON Schema."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI headless mode documents JSON and streaming JSON output with stable result, tool, error, and usage fields."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor Agent CLI documents `json` and `stream-json` output formats for programmatic use in print mode."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents `--output-format=json` as JSONL with one JSON object per line for programmatic execution."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin Dynamic Workflow agent calls accept a JSON Schema and return a dictionary constrained to that schema."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — Structured model outputs
    href: https://developers.openai.com/api/docs/guides/structured-outputs
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-cli-structured-output
    title: Anthropic — Claude Code CLI reference
    href: https://code.claude.com/docs/en/cli-reference
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: --json-schema and --output-format
  - id: google-gemini-cli-headless-output
    title: Google — Gemini CLI headless mode reference
    href: https://geminicli.com/docs/cli/headless/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Output formats
  - id: cursor-agent-cli-output-format
    title: Cursor — Agent CLI output format
    href: https://docs.cursor.com/en/cli/reference/output-format
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: JSON format and stream JSON format
  - id: github-copilot-cli-command-reference-output
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: --output-format
  - id: cognition-devin-dynamic-workflows
    title: "Cognition — Devin Dynamic Workflows"
    href: https://docs.devin.ai/work-with-devin/dynamic-workflows
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Authoring model; agent schema parameter"
support:
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "JSON Schema constrained object or dictionary"
        evidence:
          - resourceId: cognition-devin-dynamic-workflows
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code CLI reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: caller-supplied JSON Schema validation is available in print mode through --json-schema; JSON and stream-json envelopes are available through --output-format
        evidence:
          - resourceId: anthropic-claude-code-cli-structured-output
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI headless-mode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: documented JSON output is a product-defined response and statistics envelope; this evidence does not establish caller-supplied JSON Schema conformance
        evidence:
          - resourceId: google-gemini-cli-headless-output
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Agent CLI output-format documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: JSON and stream-json formats apply to Agent CLI print mode; this evidence does not establish caller-supplied JSON Schema conformance
        evidence:
          - resourceId: cursor-agent-cli-output-format
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI command reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: JSON output is a product-defined JSONL event envelope; this evidence does not establish caller-supplied JSON Schema conformance
        evidence:
          - resourceId: github-copilot-cli-command-reference-output
            type: documented
            observedAt: 2026-08-28
---

Return JSON or schema-constrained output through a documented product feature.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
