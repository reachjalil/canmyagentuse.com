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
  - id: 3
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents automatic background compaction beginning at roughly 80% context usage and waiting for completion if usage reaches roughly 95%."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code documents automatic conversation-history compaction when the context window fills."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor documents automatic summarization of older messages when a conversation exceeds the selected model's context window."
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
  - id: github-copilot-cli-context-management
    title: GitHub — Managing context in Copilot CLI
    href: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/copilot-cli/context-management
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: When compaction happens
  - id: microsoft-vscode-session-context
    title: Microsoft — Manage agent sessions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Compact conversation context
  - id: cursor-chat-summarization
    title: Cursor — Summarization
    href: https://docs.cursor.com/en/agent/chat/summarization
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Message summarization
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
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI context-management documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: background compaction begins at approximately 80% of the selected model's context window and the run can pause near 95% until compaction finishes
        evidence:
          - resourceId: github-copilot-cli-context-management
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code agent-session documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: automatic compaction occurs when context fills and can be disabled with github.copilot.chat.summarizeAgentConversationHistory.enabled
        evidence:
          - resourceId: microsoft-vscode-session-context
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cursor chat-summarization documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Cursor summarizes older messages as chats exceed the model context window and separately condenses oversized files and folders
        evidence:
          - resourceId: cursor-chat-summarization
            type: documented
            observedAt: 2026-08-28
---

This row requires a documented mechanism that summarizes, prunes, or otherwise reduces earlier context so work can continue. Silent truncation without a continuity mechanism is not compaction.

Evidence should record the trigger, whether the operator is warned, what state is preserved, whether instructions and tool results are treated specially, and whether the compacted summary is inspectable. Reliability tests should probe commitments, file paths, pending tasks, citations, approvals, and negative constraints across the boundary.
