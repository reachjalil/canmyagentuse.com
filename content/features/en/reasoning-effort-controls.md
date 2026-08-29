---
title: Reasoning effort controls
description: Choose a documented reasoning depth, effort, or budget for a run.
slug: reasoning-effort-controls
locale: en
seoTitle: Reasoning effort controls compatibility — Can My Agent Use
socialTitle: Reasoning effort controls
socialDescription: Compare operator control over reasoning depth, effort, and budgets.
llmSummary: Reasoning effort controls let an operator choose a documented reasoning mode or budget; model selection alone does not prove this capability.
audience: Engineers balancing latency, cost, and task quality.
contentKind: feature
status: published
tags: [models, reasoning, latency, cost]
updated: 2026-08-29
published: 2026-08-28
category: models-context
summary: Choose a documented reasoning depth, effort, or budget for a run.
specLabel: Common product term
aliases: [thinking budget, reasoning mode, thinking level]
parent: models-and-context
related: [model-selection, usage-metering]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT Work on the web and ChatGPT desktop expose a reasoning control beneath the composer; Codex CLI exposes reasoning effort through /model, with documented Low through Ultra levels when supported."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude web and desktop expose effort and extended-thinking controls; Claude Code documents per-session and configured effort levels, subject to model support."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp exposes named model variants with documented Low through Max reasoning-effort choices."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openai-models
    title: OpenAI — Models in ChatGPT Work and Codex
    href: https://learn.chatgpt.com/docs/models
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-change-model
    title: Anthropic — Change model, effort, and thinking settings
    href: https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-code-model-config
    title: Anthropic — Claude Code model configuration
    href: https://code.claude.com/docs/en/model-config
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: warp-model-choice
    title: "Warp — Agent model choice"
    href: https://docs.warp.dev/agents/inference/model-choice/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Available models and reasoning-level tables"
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
          - type: runtime
            value: "available effort choices depend on the selected model family"
          - type: format
            value: "effort is represented through named model variants and model IDs"
        evidence:
          - resourceId: warp-model-choice
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: available reasoning levels depend on the selected model and account eligibility
        evidence:
          - resourceId: openai-models
            type: documented
            observedAt: 2026-08-28
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
          - type: plan
            value: available reasoning levels depend on the selected model and account eligibility; Max may require enabling it in settings
        evidence:
          - resourceId: openai-models
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
            value: documented selector includes Low, Medium, High, Extra high, Max, and Ultra when the selected model supports them
        evidence:
          - resourceId: openai-models
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: effort and extended thinking are distinct controls and depend on model availability
        evidence:
          - resourceId: anthropic-change-model
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: effort and extended thinking are distinct controls and depend on model availability
        evidence:
          - resourceId: anthropic-change-model
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
            value: low, medium, high, xhigh, and max are documented where supported; ultrathink requests deeper reasoning for one turn
        evidence:
          - resourceId: anthropic-code-model-config
            type: documented
            observedAt: 2026-08-28
---

This row covers an operator-visible control over reasoning effort, depth, or budget. It does not assert that hidden reasoning is exposed, and it does not treat ordinary model selection as an equivalent control.

Evidence should name the available levels, defaults, model and plan restrictions, whether the setting changes output-token or tool-use budgets, and the scope at which it persists. Qualify controls that are only advisory or available through configuration rather than the primary interface.
