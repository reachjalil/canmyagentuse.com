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
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Control child-agent tools, inherited permissions, and approval behavior.
specLabel: Common product term
aliases: [child approvals, delegated permissions, subagent least privilege]
parent: subagents
related: [human-approval, subagent-mcp-access, subagent-write-access, secrets-management]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents child-specific tool allowlists and denylists plus `default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, and `plan` permission modes, with explicit rules for parent-mode precedence."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work children use the parent chat's available tools; local Codex children inherit the selected permission or sandbox policy, surface interactive approvals by source thread, and fail actions that need fresh approval in non-interactive flows."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI subagents can receive explicitly scoped tools, isolated MCP servers, and subagent-specific policy files; other agents remain unavailable to descendants."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code coordinator agents can allowlist callable children, and each custom child can restrict built-in, extension, and MCP tools; the reviewed docs do not define a separate child approval ledger."
issues: []
resources:
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
support:
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
---

This row asks which tools and permissions a child receives and how its actions obtain approval. A child may inherit parent permissions, receive a reduced tool set, prompt the operator, ask the parent to broker an action, or be unable to request more access.

Evidence should cover one-time and persistent approvals, resource and command scope, MCP and connector credentials, filesystem and network access, nested descendants, denial propagation, audit identity, and whether the operator can review a combined action plan before fan-out.
