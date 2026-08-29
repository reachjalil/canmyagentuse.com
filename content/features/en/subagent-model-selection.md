---
title: Per-subagent model selection
description: Choose or constrain the model used by an individual child agent independently of its parent.
slug: subagent-model-selection
locale: en
seoTitle: Per-subagent model selection compatibility — Can My Agent Use
socialTitle: Per-subagent model selection
socialDescription: Compare model choice, defaults, and routing for individual child agents.
llmSummary: Per-subagent model selection means a child can use a documented model choice or constraint distinct from its parent; a global conversation model picker is insufficient.
audience: Engineers balancing subagent cost, speed, specialization, and quality.
contentKind: feature
status: published
tags: [runtime, subagents, models, routing]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Choose or constrain each child agent's model independently of the parent.
specLabel: Common product term
aliases: [child model choice, subagent model, delegated model routing]
parent: subagents
related: [model-selection, reasoning-effort-controls, subagent-delegation]
notes:
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 exposes agent.subagent_model, allowing subagents to use a configured model distinct from the parent thread, but does not establish a separate choice per child invocation."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code subagent definitions accept a `model` field with aliases or a full model ID and can separately set child reasoning `effort`; omitted values inherit session defaults."
  - id: 2
    text: "Evidence checked 2026-08-28: Local Codex supports explicit spawn values, global subagent model/reasoning defaults, and per-custom-agent model and reasoning settings with documented precedence."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI custom subagents accept an independent model setting; the main /model selection does not override subagent models."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor subagents accept inherit or an explicit model ID plus per-model parameters such as speed, reasoning effort, and context window."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI resolves subagent model and reasoning values from per-call overrides, subagent settings, agent definitions, then the parent session."
  - id: 6
    text: "Evidence checked 2026-08-28: VS Code resolves a child model from an explicit invocation parameter, a custom agent's model or fallback list, or the parent model, in that priority order."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp can assign an individual child a model different from its parent and exposes inherited and per-child model configuration before launch."
issues: []
resources:
  - id: zed-v1-17-2-agent-settings
    title: "Zed v1.17.2 — Agent Settings"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-settings.md#L34-L45"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Feature-Specific Settings, lines 34–45; Feature-Specific Models, lines 153–157"
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
    locator: Supported frontmatter fields; choose a model
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
    locator: Select the model for a subagent
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Parent/child model; Approval mode"
support:
  - harness: zed-agent
    versions:
      - track: current
        status: partial
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "one configured agent.subagent_model applies to subagents as a feature class; no per-spawn model argument is documented"
          - type: auth
            value: "the selected subagent model must be available through a configured provider"
        evidence:
          - resourceId: zed-v1-17-2-agent-settings
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
            value: "run-wide model configuration is inherited unless overridden per child"
          - type: policy
            value: "availability remains subject to plan and team controls"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
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
          - type: runtime
            value: local Codex allows explicit child model/reasoning values, agents defaults, or custom-agent file settings; explicit values have highest precedence
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
          - type: runtime
            value: explicit child values override agents defaults, which override inherited parent values; custom-agent files can then set model and reasoning effort
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
          - type: runtime
            value: agent definitions and overrides can select a child model; /model and --model do not override child models
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: team policy, plan eligibility, or legacy Max Mode requirements may override an explicit child model
        evidence:
          - resourceId: cursor-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: per-call values override subagents settings, agent model/reasoning fields, and finally the parent session
        evidence:
          - resourceId: github-copilot-cli-reference
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
          - type: runtime
            value: available model aliases and effort levels depend on the account and current model catalog
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: the requested child model cannot exceed the cost tier of the parent model and must be available to the current Copilot plan
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
---

This row requires a per-child model selection, role default, or enforceable model constraint. A model chosen once for the whole conversation does not establish independent sub-agent choice.

Evidence should record which actors can select the model, allowed models and reasoning modes, fallbacks, plan restrictions, tool and media compatibility, cost attribution, and whether nested agents inherit or override the selection.
