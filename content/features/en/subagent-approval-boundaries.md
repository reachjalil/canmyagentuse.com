---
title: Subagent permissions
description: Define which tools and permissions a child agent receives and how it requests approval.
slug: subagent-approval-boundaries
locale: en
seoTitle: Subagent permissions compatibility — Can My Agent Use
socialTitle: Subagent permissions
socialDescription: Compare child-agent tool permissions, inherited grants, and approval behavior.
llmSummary: Subagent permissions describe which tools and grants a child receives and how child actions obtain approval. Inheritance, restrictions, and escalation behavior are qualifiers.
audience: Security engineers and operators supervising delegated actions.
contentKind: feature
status: published
tags: [runtime, subagents, approvals, permissions, security]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Control child-agent tools, inherited permissions, and approval behavior.
specLabel: Common product term
aliases: [child approvals, delegated permissions, subagent least privilege]
parent: subagents
related: [human-approval, subagent-mcp-access, subagent-write-access, secrets-management]
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: Copilot CLI custom subagents configure an explicit tools list, while built-in and delegated subagents inherit tool permission dialogs unless Autopilot mode is enabled to grant autonomous execution."
  - id: 88
    text: "Evidence checked 2026-09-02: Grok Bot enforces human approval boundaries for sensitive Bot actions, evaluated by an Auto Review model with approval cards presented in the chat transcript."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents child-specific tool allowlists and denylists plus `default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, and `plan` permission modes, with explicit rules for parent-mode precedence."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work children use the parent chat's available tools; local Codex children inherit the selected permission or sandbox policy, surface interactive approvals by source thread, and fail actions that need fresh approval in non-interactive flows."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI subagents can receive explicitly scoped tools, isolated MCP servers, and subagent-specific policy files; other agents remain unavailable to descendants."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code coordinator agents can allowlist callable children, and each custom child can restrict built-in, extension, and MCP tools; the reviewed docs do not define a separate child approval ledger."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp requires explicit approval before children launch and lets operators inspect or adjust model, environment, host, and parallelism configuration."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native child-agent spawning or delegated subagent lifecycle."
issues: []
resources:
  - id: github-copilot-cli-subagent-tools
    title: "GitHub Copilot CLI — Allowing and denying tool use"
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Tool permissions, allowlists, and Autopilot autonomous mode"
  - id: xai-grok-bot-teams-enterprise
    title: "xAI — Grok Bot for teams and enterprises"
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Human approval gates; Auto Review evaluates sensitive actions"
  - id: xai-grok-bot-group-chat
    title: "xAI — Grok Bot Chat and Collaboration"
    href: https://docs.x.ai/grok-bot/chat-and-collaboration
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Approval cards in the chat transcript"
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/sub-agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Available tools; permission modes
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
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Restrict which subagents an agent can use; coordinator and worker pattern
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Approval mode"
  - id: aider-v0860-production-tree
    title: "Aider v0.86.0 — complete production package"
    href: "https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete aider package at the stable release commit"
  - id: aider-v0860-args-source
    title: "Aider v0.86.0 — complete CLI argument parser"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete get_parser option declarations"
  - id: aider-v0860-commands-source
    title: "Aider v0.86.0 — complete in-chat command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete command implementation"
  - id: aider-v0860-dependencies
    title: "Aider v0.86.0 — stable runtime dependencies"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/requirements.txt"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete stable runtime dependency manifest"
support:
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
          - type: policy
            value: "/orchestrate and orchestration proposed by /plan wait for approval; per-child overrides remain possible"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: children use the tools available to the parent chat and website or connector permissions remain tool-specific; no local sandbox or approval-mode control is exposed
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: subagents inherit the permission mode chosen for the parent turn; choose it before delegation
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: interactive approval prompts identify the child thread; actions needing a new approval fail in non-interactive execution and return the error to the parent
        evidence:
          - resourceId: openai-subagents
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
          - type: policy
            value: tool lists, inline or inherited MCP servers, and named policy rules can be scoped to a child; recursion protection always removes other agents
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: parent `bypassPermissions`, `acceptEdits`, or auto mode can take precedence over a child definition; background subagents auto-deny actions that would require a new prompt
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: child identity and tool allowlists are configurable, but separate child approval ownership, grant consumption, and escalation semantics are not fully documented
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [84]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; external orchestration, community wrappers, model-side role prompts, AiderDesk, and unreleased proposals do not count"
          - type: host-role
            value: "Aider's architect/editor model handoff stays inside one CLI editing loop and is not a spawned child-agent lifecycle"
        evidence:
          - resourceId: aider-v0860-production-tree
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-args-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [88]
        target:
          kind: dated-documentation
          revision: current Grok Bot Teams and Enterprises documentation
          observedAt: 2026-09-02
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "Auto Review evaluates sensitive actions and presents approval gates in the chat transcript"
        evidence:
          - resourceId: xai-grok-bot-teams-enterprise
            type: documented
            observedAt: 2026-09-02
          - resourceId: xai-grok-bot-group-chat
            type: documented
            observedAt: 2026-09-02
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: GitHub Copilot CLI documentation observed 2026-09-02
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: subagents prompt for interactive confirmation on sensitive tools unless autopilot mode is enabled
        evidence:
          - resourceId: github-copilot-cli-subagent-tools
            type: documented
            observedAt: 2026-09-02
---

This row asks which tools and permissions a child receives and how its actions obtain approval. A child may inherit parent permissions, receive a reduced tool set, prompt the operator, ask the parent to broker an action, or be unable to request more access.

Evidence should cover one-time and persistent approvals, resource and command scope, MCP and connector credentials, filesystem and network access, nested descendants, denial propagation, audit identity, and whether the operator can review a combined action plan before fan-out.
