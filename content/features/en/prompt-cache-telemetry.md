---
title: Prompt cache telemetry
description: Report cache reads, writes, hits, misses, saved latency, or cached-token billing for a run.
slug: prompt-cache-telemetry
locale: en
seoTitle: Prompt cache telemetry compatibility — Can My Agent Use
socialTitle: Prompt cache telemetry
socialDescription: Compare visibility into prompt-cache hits, misses, token counts, latency, and cost.
llmSummary: Prompt-cache telemetry exposes whether reuse occurred and, ideally, cached read/write tokens, cost, latency, and cache scope; documented caching without visibility is a separate claim.
audience: Engineers verifying that context caching is effective and economical.
contentKind: feature
status: published
tags: [context, prompt-caching, telemetry, cost]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Inspect cache hits, misses, token counts, latency, or billing effects.
specLabel: Common product term
aliases: [cache hit metrics, cached tokens, cache observability]
parent: models-and-context
related: [prompt-cache-reuse, prompt-cache-controls, usage-metering]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code exposes cache creation and cache read token counts through status-line data and OpenTelemetry, including per-user and per-session organization metrics."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents cached-token savings in /stats when token caching is available."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-code-prompt-caching
    title: Anthropic — How Claude Code uses prompt caching
    href: https://code.claude.com/docs/en/prompt-caching
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-code-monitoring
    title: Anthropic — Monitor Claude Code usage
    href: https://code.claude.com/docs/en/monitoring-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-token-caching
    title: Google — Gemini CLI token caching
    href: https://geminicli.com/docs/cli/token-caching/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: current_usage exposes cache_creation_input_tokens and cache_read_input_tokens; OpenTelemetry reports cache read and creation tokens per request, user, and session
        evidence:
          - resourceId: anthropic-code-prompt-caching
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-code-monitoring
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /stats displays cached-token savings when caching is available; the reviewed page does not establish hit/miss events or retained historical telemetry
        evidence:
          - resourceId: google-gemini-cli-token-caching
            type: documented
            observedAt: 2026-08-28
---

This row asks whether an operator can verify prompt-cache behavior for the exact harness. A billing dashboard total, per-request cached-token count, cache-hit event, and detailed read/write breakdown provide different levels of evidence and should be qualified.

Useful records identify where telemetry appears, how long it is retained, whether sub-agent and tool-generated requests are included, and how cached reads and writes map to price. A generic statement that caching is automatic does not prove that the harness exposes telemetry.
