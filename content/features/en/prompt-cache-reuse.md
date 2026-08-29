---
title: Prompt caching
description: Reuse eligible repeated prompt content across requests under documented caching behavior.
slug: prompt-cache-reuse
locale: en
seoTitle: Prompt and context caching compatibility — Can My Agent Use
socialTitle: Prompt caching
socialDescription: Compare automatic and persistent reuse of eligible repeated context across harnesses.
llmSummary: Prompt caching reuses eligible repeated prompt content under documented latency or billing behavior. Browser, HTTP, file, and retrieval caching do not count.
audience: Engineers comparing latency and token cost for repeated large contexts.
contentKind: feature
status: published
tags: [context, prompt-caching, latency, cost]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Reuse eligible repeated prompt content under documented caching behavior.
specLabel: Common product term
aliases: [prompt caching, context caching, cached input, prefix caching]
parent: models-and-context
related: [prompt-cache-controls, prompt-cache-telemetry, usage-metering]
highlight: true
notes:
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 documents prompt caching that orders the system prompt, read-only files, repository map, and editable files for provider cache reuse."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents automatic prefix-based prompt caching for its system prompt, project context, conversation history, and tool results, with explicit invalidation behavior."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents automatic token caching for Gemini API-key and Vertex AI authentication, while OAuth through Code Assist does not support cached-content creation."
resources:
  - id: aider-v0860-caching
    title: "Aider v0.86.0 — Prompt caching"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/caching.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Usage; prompt organization"
  - id: aider-v0860-options-cache
    title: "Aider v0.86.0 — Command-line options"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/config/options.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Cache settings"
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
  - id: google-gemini-cli-token-caching
    title: Google — Gemini CLI token caching
    href: https://geminicli.com/docs/cli/token-caching/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "caching is opt-in through --cache-prompts or persistent configuration"
          - type: runtime
            value: "reviewed docs identify Anthropic Sonnet and Haiku plus DeepSeek Chat as supported"
          - type: policy
            value: "cache eligibility and billing behavior remain provider-dependent"
        evidence:
          - resourceId: aider-v0860-caching
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-options-cache
            type: documented
            observedAt: 2026-08-29
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
            value: automatic exact-prefix caching covers stable request layers; switching models, reconnecting MCP servers, compaction, and upgrades can invalidate all or part of the prefix
          - type: policy
            value: cache infrastructure and retention depend on the authentication and serving provider
        evidence:
          - resourceId: anthropic-code-prompt-caching
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
            value: automatic caching reuses previous system instructions and context for Gemini API-key and Vertex AI users
          - type: policy
            value: OAuth users through Google Personal or Enterprise Code Assist do not receive cached-content creation
        evidence:
          - resourceId: google-gemini-cli-token-caching
            type: documented
            observedAt: 2026-08-28
---

This row concerns model-request prompt or context caching: eligible repeated prefixes receive documented processing, latency, or billing reuse. It does not include browser caches, downloaded-file caches, embedding indexes, retrieval caches, build caches, or a conversation merely retaining its history.

Evidence should identify whether reuse is automatic or explicit, minimum eligible prefix size, exact-prefix requirements, supported models and regions, cache lifetime, isolation boundary, invalidation behavior, and read-versus-write pricing. A model API feature does not prove that a hosted chat or coding harness preserves stable prefixes or passes cache controls through.
