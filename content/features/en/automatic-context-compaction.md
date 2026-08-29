---
title: Automatic context compaction
description: Continue a long-running session by summarizing, pruning, or otherwise compacting older context.
slug: automatic-context-compaction
locale: en
seoTitle: Automatic context compaction compatibility — Can My Agent Use
socialTitle: Automatic context compaction
socialDescription: Compare automatic summarization, pruning, and continuation of long-running sessions.
llmSummary: Automatic context compaction lets a harness reduce older context to continue a run; it must be distinguished from silent truncation and from user-triggered compaction.
audience: Engineers evaluating long-running agent reliability.
contentKind: feature
status: published
tags: [context, compaction, summarization, runtime]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Continue long sessions by automatically summarizing or pruning older context.
specLabel: Common product term
aliases: [context summarization, auto compact, conversation compression]
parent: models-and-context
related: [context-window, context-compaction-controls, long-term-memory]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents auto-compaction that summarizes conversation history as context limits approach."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents automatic chat-history compression near the configured model's limit and exposes a configurable compression threshold."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-code-costs
    title: Anthropic — Manage Claude Code costs
    href: https://code.claude.com/docs/en/costs
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-core
    title: Google — Gemini CLI core
    href: https://geminicli.com/docs/core/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-settings
    title: Google — Gemini CLI settings
    href: https://geminicli.com/docs/cli/settings/
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
            value: auto-compaction summarizes history when approaching context limits; retained-state reliability still requires boundary testing
        evidence:
          - resourceId: anthropic-code-costs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the core automatically compresses chat history near the model limit; model.compressionThreshold controls the trigger and defaults to 0.5
        evidence:
          - resourceId: google-gemini-cli-core
            type: documented
            observedAt: 2026-08-28
          - resourceId: google-gemini-cli-settings
            type: documented
            observedAt: 2026-08-28
---

This row requires a documented mechanism that summarizes, prunes, or otherwise reduces earlier context so work can continue. Silent truncation without a continuity mechanism is not compaction.

Evidence should record the trigger, whether the operator is warned, what state is preserved, whether instructions and tool results are treated specially, and whether the compacted summary is inspectable. Reliability tests should probe commitments, file paths, pending tasks, citations, approvals, and negative constraints across the boundary.
