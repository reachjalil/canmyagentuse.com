---
title: Subagent delegation
description: Delegate a bounded task to a product-native child agent.
slug: subagent-delegation
locale: en
seoTitle: Subagent delegation compatibility — Can My Agent Use
socialTitle: Subagent delegation
socialDescription: Basic child-agent delegation tracked separately from nesting and permissions.
llmSummary: Basic delegation establishes one child-agent boundary but not recursion, MCP access, or write access.
audience: Engineers comparing multi-agent execution.
contentKind: feature
status: published
tags: [runtime, subagents, delegation]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Delegate a bounded task to another agent process.
specLabel: Common product term
aliases: [child agent, task delegation]
parent: subagents
related: [nested-subagents, subagent-concurrency, subagent-context-isolation, subagent-result-handoff]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork identifies agents as OpenCode primitives for specialized tasks that may use different models and extra context."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot can create focused named Bots, let Bots message each other asynchronously, and pass work among them. This is persistent peer-Bot delegation, not documented ephemeral child-session spawning."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code documents built-in and custom subagents that receive delegated tasks through the Agent tool, run in their own context, and return a summary to the parent conversation."
  - id: 4
    text: "Evidence checked 2026-08-28: ChatGPT Work and current local Codex releases can spawn specialized agents, expose their activity, and collect results into the parent response."
  - id: 5
    text: "Evidence checked 2026-08-28: Gemini CLI exposes built-in and custom subagents as tools, with automatic delegation or explicit @agent prompting."
  - id: 6
    text: "Evidence checked 2026-08-28: Cursor Agent can automatically or explicitly launch built-in and custom subagents on editor, CLI, and Cloud Agent surfaces."
  - id: 7
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI can automatically run built-in or custom agents as temporary subagents with separate context windows."
  - id: 8
    text: "Evidence checked 2026-08-28: VS Code documents the `agent/runSubagent` tool, built-in and custom child agents, autonomous child work, and final-result return to the main agent."
issues: []
resources:
  - id: openwork-subagents
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-collaboration
    title: xAI — Grok Bot messaging and collaboration
    href: https://docs.x.ai/grok-bot/chat-and-collaboration
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Let Bots hand work off
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/sub-agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How subagents work
  - id: openai-subagents
    title: OpenAI — Subagents in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/agent-configuration/subagents
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-subagents
    title: Google — Gemini CLI subagents
    href: https://geminicli.com/docs/core/subagents/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-subagents
    title: Cursor — Subagents
    href: https://cursor.com/docs/subagents
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-custom-agents
    title: GitHub — Custom agents and subagents in Copilot CLI
    href: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Invoke a subagent
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: subagent workflows and visible activity require an eligible account; Ultra may delegate proactively while other levels generally require an explicit request
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: current local Codex releases delegate after a direct request or applicable AGENTS.md or skill instruction and surface each child thread
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: delegates after a direct request or applicable project or skill instruction; /agent opens child threads while the parent collects their results
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the main agent can automatically choose a matching subagent or be nudged to a named specialist with @agent syntax
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cursor subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: applies to Cursor editor, CLI, and Cloud Agents; named subagents can be invoked with /name or natural language
        evidence:
          - resourceId: cursor-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the main Copilot agent can automatically invoke built-in or custom agents as temporary subagents
        evidence:
          - resourceId: github-copilot-cli-custom-agents
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to GitHub Copilot's local VS Code agent surface with the subagent tool enabled
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supplied by the embedded OpenCode agent runtime
        evidence:
          - resourceId: openwork-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: delegation uses distinct persistent named Bots with asynchronous messages and visible handoffs, rather than documented ephemeral child sessions
          - type: policy
            value: all Bots for an account share one hosted computer, so delegation does not create a separate filesystem, login, or credential security boundary
        evidence:
          - resourceId: xai-grok-bot-collaboration
            type: documented
            observedAt: 2026-08-28
---

This row establishes that one agent can create a distinct child execution boundary for a bounded task. A renamed tool call, background shell command, or single-model chain-of-thought step is not enough unless the product exposes a child-agent execution with its own task state.

Deeper recursion, simultaneous children, inherited context, model choice, permissions, supervision, and result transfer are separate sibling capabilities.
