---
title: Prompt cache controls
description: Mark reusable prompt segments, choose retention, or explicitly create, refresh, and invalidate cached context.
slug: prompt-cache-controls
locale: en
seoTitle: Prompt cache controls compatibility — Can My Agent Use
socialTitle: Prompt cache controls
socialDescription: Compare explicit breakpoints, retention choices, creation, refresh, and invalidation of prompt caches.
llmSummary: Prompt-cache controls let an operator or configuration mark reusable segments or manage cache lifetime; automatic caching alone does not establish control.
audience: Engineers optimizing repeated large prompts and agent instructions.
contentKind: feature
status: published
tags: [context, prompt-caching, control]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Mark, retain, refresh, or invalidate cached prompt context.
specLabel: Common product term
aliases: [cache breakpoint, cache retention, explicit prompt cache]
parent: models-and-context
related: [prompt-cache-reuse, prompt-cache-telemetry]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code exposes environment-variable controls to disable prompt caching globally or per model and to choose documented five-minute or one-hour TTL behavior in eligible environments."
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
support:
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: DISABLE_PROMPT_CACHING and per-model variants disable caching; TTL variables select documented retention behavior where supported
          - type: policy
            value: Claude Code manages prefix breakpoints automatically and does not expose arbitrary per-message breakpoint authoring in the reviewed harness documentation
        evidence:
          - resourceId: anthropic-code-prompt-caching
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the harness exposes a supported way to influence prompt caching rather than relying entirely on automatic provider behavior. Controls can include cache breakpoints, explicit cache objects, retention choices, refresh, or invalidation.

Evidence should record where the control lives—UI, project configuration, command flag, plugin, or provider-specific request setting—and whether the exact harness preserves it. Security review should also identify the tenant, workspace, user, project, or organization boundary around reuse.
