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
updated: 2026-08-29
published: 2026-08-28
category: models-context
summary: Continue long sessions by automatically summarizing or pruning older context.
specLabel: Common product term
aliases: [context summarization, auto compact, conversation compression]
parent: models-and-context
related: [context-window, context-compaction-controls, long-term-memory]
notes:
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 automatically summarizes older chat history after a soft token threshold, using the weak model with the main model as fallback."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 enables automatic compaction by default at 90% of the selected model's context window, replacing earlier messages with a visible summary so the thread can continue."
  - id: 73
    text: "Evidence checked 2026-08-29: the rebuilt Amp CLI automatically compacts a thread at 90% context use by summarizing the current context and continuing in a fresh window."
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
  - id: 52
    text: "Evidence checked 2026-08-29: Warp automatically summarizes a local agent conversation after it exceeds the selected model's context window so work can continue."
resources:
  - id: aider-v0860-options-compaction
    title: "Aider v0.86.0 — Command-line options"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/config/options.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "--max-chat-history-tokens and --weak-model"
  - id: aider-v0860-history-source
    title: "Aider v0.86.0 — Chat-history summarizer"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/history.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ChatSummary.summarize, summarize_real, and summarize_all"
  - id: zed-v1-17-2-agent-settings
    title: "Zed v1.17.2 — Agent Settings"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-settings.md#L58-L85"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Automatic Compaction, lines 58–85"
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L151-L159"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Token Usage and Compaction, lines 151–159"
  - id: amp-2026-08-auto-compaction
    title: "Amp — Amp, Rebuilt"
    href: https://ampcode.com/news/neo
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "No More Manual Context Management"
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
  - id: warp-interacting-agents
    title: "Warp — Interacting with agents"
    href: https://docs.warp.dev/agents/local-agents/interacting-with-agents/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Context window management"
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
            value: "trigger is --max-chat-history-tokens or the selected model's max_chat_history_tokens when unset"
          - type: runtime
            value: "the summarizer retains recent messages and replaces older user and assistant history with a generated summary"
          - type: policy
            value: "summaries are model-generated continuity state and may omit details"
        evidence:
          - resourceId: aider-v0860-options-compaction
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-history-source
            type: documented
            observedAt: 2026-08-29
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "automatic compaction requires at least an 80,000-token selected-model window; smaller windows show a start-new-thread path"
          - type: policy
            value: "default threshold is 90% and can be changed or disabled"
        evidence:
          - resourceId: zed-v1-17-2-agent-settings
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-agent-panel
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "automatic threshold is 90%; older context becomes a summary and the thread continues"
        evidence:
          - resourceId: amp-2026-08-auto-compaction
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "automatic summarization occurs after context-window exhaustion"
        evidence:
          - resourceId: warp-interacting-agents
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
