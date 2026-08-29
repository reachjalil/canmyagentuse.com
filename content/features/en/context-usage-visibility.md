---
title: Context usage
description: Show how much of the current context budget is used or remains.
slug: context-usage-visibility
locale: en
seoTitle: Context usage compatibility — Can My Agent Use
socialTitle: Context usage
socialDescription: Compare token meters, context inspectors, and budget warnings across harnesses.
llmSummary: Context usage means the product reports current context consumption or remaining capacity; exact counters, estimates, source breakdowns, and warnings are qualifiers.
audience: Operators diagnosing truncation, compaction, and unexpectedly expensive context.
contentKind: feature
status: published
tags: [context, tokens, observability]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Inspect consumed or remaining context budget during a conversation or run.
specLabel: Common product term
aliases: [context meter, token counter, context inspector]
parent: models-and-context
related: [context-window, prompt-cache-telemetry, usage-metering]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT desktop documents /status as showing context usage; the Codex CLI interface documents remaining context in its session footer."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code documents /usage and a configurable status line for current token usage, plus /context for identifying major context consumers."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code's context-window control reports token count, percentage usage, category breakdown, and session AI credits for agent chats."
  - id: 4
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents `/context` as a token-usage visualization and breakdown of the current context window."
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
  - id: openai-codex-cli
    title: OpenAI — Codex CLI
    href: https://learn.chatgpt.com/docs/codex/cli
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
  - id: microsoft-vscode-session-context
    title: Microsoft — Manage agent sessions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Manage session context
  - id: github-copilot-cli-context-management
    title: GitHub — Managing context in Copilot CLI
    href: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/copilot-cli/context-management
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Checking your context usage
support:
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /status shows the chat ID, context usage, and rate limits
        evidence:
          - resourceId: openai-slash-commands
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the interactive interface displays remaining context as a percentage; the reviewed page does not document a component-by-component breakdown
        evidence:
          - resourceId: openai-codex-cli
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
            value: /usage and status-line fields expose token usage; /context identifies major context consumers such as MCP definitions
        evidence:
          - resourceId: anthropic-code-costs
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code agent-session documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the chat input control shows current usage, exact token count, a category breakdown, and the selected model's available context
        evidence:
          - resourceId: microsoft-vscode-session-context
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
            value: /context displays total usage plus token and percentage breakdowns for context components
        evidence:
          - resourceId: github-copilot-cli-context-management
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the exact harness shows the operator how much context is in use or remains. An exact token count, a percentage estimate, and a warning shown only at exhaustion are materially different and should be qualified.

The most useful implementations identify contributions from conversation turns, project instructions, tool schemas, retrieved files, images or video, long-term memory, and reserved output. Evidence should also say whether the meter updates before a request, after server-side processing, or only in logs.
