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
updated: 2026-08-29
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
  - id: 4
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI exposes `/compact` with optional focus instructions and lets the operator cancel manual compaction."
  - id: 5
    text: "Evidence checked 2026-08-28: VS Code exposes `/compact`, optional preservation instructions, a context-control action, and a setting that disables automatic compaction."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 lets users configure a context-percentage threshold that trims message and tool attachments for local models, but does not document general history summarization controls."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp exposes slash commands that manually compact the active conversation, optionally fork first, and send a follow-up after summarization."
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
  - id: github-copilot-cli-context-management
    title: GitHub — Managing context in Copilot CLI
    href: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/copilot-cli/context-management
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Compaction
  - id: microsoft-vscode-session-context
    title: Microsoft — Manage agent sessions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Compact conversation context
  - id: jetbrains-ai-custom-models
    title: JetBrains AI Assistant — Use third-party and local models
    href: https://www.jetbrains.com/help/ai-assistant/use-custom-models.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Configure context window and message trimming
  - id: warp-changelog-2026-compaction
    title: "Warp — Changelog 2026"
    href: https://docs.warp.dev/changelog/2026/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "2026.02.25 — /compact-and"
  - id: warp-conversation-forking
    title: "Warp — Conversation Forking"
    href: https://docs.warp.dev/agents/local-agents/interacting-with-agents/conversation-forking/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Using the /fork-and-compact slash command"
support:
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: release
          revision: "Warp v0.2026.02.25.08.24"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "/compact-and compacts then sends a follow-up; /fork-and-compact creates and compacts a fork"
          - type: policy
            value: "no setting to disable automatic compaction is established"
        evidence:
          - resourceId: warp-changelog-2026-compaction
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-conversation-forking
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: configurable trimming threshold applies to local-model message and tool attachments, not a general conversation-summary control
        evidence:
          - resourceId: jetbrains-ai-custom-models
            type: documented
            observedAt: 2026-08-29
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
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI context-management documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /compact accepts optional focus instructions and manual compaction can be canceled with Escape; the automatic threshold itself is not documented as configurable
        evidence:
          - resourceId: github-copilot-cli-context-management
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code agent-session documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: /compact accepts preservation instructions and automatic compaction can be disabled; threshold selection and retained-item pinning are not documented
        evidence:
          - resourceId: microsoft-vscode-session-context
            type: documented
            observedAt: 2026-08-28
---

This row separates controllability from the existence of automatic compaction. Useful controls include a manual compact action, an editable instruction for the summary, threshold configuration, inspection of the compacted state, pinning of durable facts, and an opt-out.

A single manual “summarize this chat” prompt is not necessarily a harness-level compaction control. Evidence should show that the resulting state is used for subsequent requests and identify the scope of each setting.
