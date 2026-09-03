---
title: Nested subagents
description: "Allow a child agent to delegate further work to another child agent. This is tracked as an independent compatibility claim."
slug: nested-subagents
locale: en
seoTitle: "Nested subagents compatibility — Can My Agent Use"
socialTitle: Nested subagents
socialDescription: "Allow a child agent to delegate further work to another child agent. Unreviewed product cells remain unknown."
llmSummary: "Nested subagents is atomic and does not follow automatically from broader subagents support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, subagents]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: "Allow a child agent to delegate further work to another child agent."
specLabel: Common product term
aliases: ["recursive subagents"]
parent: subagents
related: []
highlight: false
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: Grok Bot group chat coordinates 2 to 6 Bots interacting in a flat group session; child Bots cannot spawn nested child Bots."
  - id: 1
    text: "Evidence checked 2026-08-28: Anthropic explicitly states that Claude Code subagents cannot spawn their own subagents and advises against granting the Agent tool to a child."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI recursion protection prevents subagents from seeing or invoking other agents, including when the all-tools wildcard is granted."
  - id: 3
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI supports nested subagents with a default maximum depth of 6 and a configurable maximum of 256 for usage-based billing."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code disables child-to-child delegation by default but supports nested subagents behind `chat.subagents.allowInvocationsFromSubagents`, with a maximum depth of 5."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp explicitly limits orchestration to one parent-child level and states that child agents cannot spawn their own children."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native child-agent spawning or delegated subagent lifecycle."
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
    locator: Subagent limitations
  - id: google-gemini-cli-subagents
    title: Google — Gemini CLI subagents
    href: https://geminicli.com/docs/core/subagents/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-reference
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
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
    locator: Nested subagents
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "The parent/child model"
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
  - id: xai-grok-bot-group-chat
    title: "xAI — Grok Bot Chat and Collaboration"
    href: "https://docs.x.ai/grok-bot/chat-and-collaboration"
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Group chat; Bot collaboration; flat delegation model"
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: "no"
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Grok Bot chat documentation observation"
          observedAt: 2026-09-02
          url: "https://docs.x.ai/grok-bot/chat-and-collaboration"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "flat group coordination; Bots cannot spawn nested child agents"
        evidence:
          - resourceId: xai-grok-bot-group-chat
            type: documented
            observedAt: 2026-09-02
  - harness: warp
    versions:
      - track: current
        status: no
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "applies to the documented orchestration model across local, cloud, and mixed execution"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-cli
    versions:
      - track: current
        status: no
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: recursion protection removes other agents from every child tool surface
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: default maximum nesting depth is 6; usage-based billing can configure subagents.maxDepth up to 256
        evidence:
          - resourceId: github-copilot-cli-reference
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: no
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the restriction applies to Claude Code subagents; separate agent-team teammates and independently dispatched sessions use different orchestration models
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        stage: experimental
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: feature-flag
            value: requires `chat.subagents.allowInvocationsFromSubagents`; disabled by default
          - type: runtime
            value: nesting depth is capped at 5
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
          - resourceId: aider-v0860-dependencies
            type: documented
            observedAt: 2026-08-29
---

Allow a child agent to delegate further work to another child agent.

Support is recorded only when exact, dated evidence covers this behavior.
