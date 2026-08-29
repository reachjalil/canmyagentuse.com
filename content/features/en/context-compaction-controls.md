---
title: Context compaction controls
description: Trigger, inspect, configure, or disable the harness's context-compaction behavior.
slug: context-compaction-controls
locale: en
seoTitle: Context compaction controls compatibility — Can My Agent Use
socialTitle: Context compaction controls
socialDescription: Compare manual compact commands, retained-state inspection, thresholds, and opt-out controls.
llmSummary: Compaction controls cover operator actions such as manual compaction, threshold configuration, summary inspection, retained-item pinning, and disabling automatic compaction.
audience: Operators who need predictable long-session state.
contentKind: feature
status: published
tags: [context, compaction, control]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Trigger, inspect, configure, or disable context compaction.
specLabel: Common product term
aliases: [manual compact, compaction settings, context pinning]
parent: models-and-context
related: [automatic-context-compaction, context-usage-visibility]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT desktop exposes /compact to compact the current chat context."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code exposes /compact with an optional preservation instruction and also accepts durable compact instructions in CLAUDE.md."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI exposes /compress and a model.compressionThreshold setting whose documented default is 0.5."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openai-slash-commands
    title: OpenAI — ChatGPT desktop slash commands
    href: https://learn.chatgpt.com/docs/reference/slash-commands
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-code-costs
    title: Anthropic — Manage Claude Code costs
    href: https://code.claude.com/docs/en/costs
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-commands
    title: Google — Gemini CLI commands
    href: https://geminicli.com/docs/cli/commands/
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
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /compact triggers compaction; summary inspection, threshold configuration, retained-item pinning, and disabling are not established by the reviewed page
        evidence:
          - resourceId: openai-slash-commands
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /compact can include task-specific preservation instructions; CLAUDE.md can define reusable compact guidance
        evidence:
          - resourceId: anthropic-code-costs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /compress replaces chat context with a high-level summary; model.compressionThreshold configures the automatic trigger fraction and defaults to 0.5
        evidence:
          - resourceId: google-gemini-cli-commands
            type: documented
            observedAt: 2026-08-28
          - resourceId: google-gemini-cli-settings
            type: documented
            observedAt: 2026-08-28
---

This row separates controllability from the existence of automatic compaction. Useful controls include a manual compact action, an editable instruction for the summary, threshold configuration, inspection of the compacted state, pinning of durable facts, and an opt-out.

A single manual “summarize this chat” prompt is not necessarily a harness-level compaction control. Evidence should show that the resulting state is used for subsequent requests and identify the scope of each setting.
