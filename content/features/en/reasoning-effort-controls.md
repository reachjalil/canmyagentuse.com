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
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 documents a thinking-effort picker and configurable levels from none through max, with exact choices determined by the selected model and provider."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent exposes a per-model Effort control from Low through Max, with documented depth, latency, quality, and cost behavior."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp exposes four Dial modes and a CLI reasoning-effort toggle; the modes explicitly combine different reasoning effort with model and tool choices."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Search exposes an operator-controlled Thinking setting on eligible models, giving the model additional reasoning time for complex or multi-step work."
  - id: 62
    text: "Evidence checked 2026-08-29: Gemini Apps documents operator-selectable Standard and Extended thinking levels where available, plus Deep Think for eligible AI Ultra users on Pro, with explicit speed, depth, and usage tradeoffs."
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT Work on the web and ChatGPT desktop expose a reasoning control beneath the composer; Codex CLI exposes reasoning effort through /model, with documented Low through Ultra levels when supported."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude web and desktop expose effort and extended-thinking controls; Claude Code documents per-session and configured effort levels, subject to model support."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp exposes named model variants with documented Low through Max reasoning-effort choices."
  - id: 60
    text: "Evidence checked 2026-08-29: Consumer Microsoft Copilot offers a Think Deeper mode that spends additional time reasoning, but does not expose a numeric token or adjustable low-to-high effort budget."
resources:
  - id: zed-v1-17-2-api-access
    title: "Zed v1.17.2 — Use API Access"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/use-api-access.md#L506-L540"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "OpenAI-compatible reasoning models, lines 506–540"
  - id: zed-v1-17-2-gateway
    title: "Zed v1.17.2 — Use a Gateway"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/use-a-gateway.md#L240-L247"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Custom gateway thinking-effort picker, line 246"
  - id: replit-agent-model-selector-current
    title: "Replit — Model selector"
    href: "https://docs.replit.com/features/agent/model-selector"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Effort"
  - id: amp-2026-08-reasoning
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Modes"
  - id: amp-2026-08-keybindings
    title: "Amp — CLI Keybindings"
    href: https://ampcode.com/docs/cli/keybindings
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Alt+D effort toggle; Ctrl+S modes"
  - id: perplexity-web-models
    title: "Perplexity — Advanced AI models included in subscriptions"
    href: https://www.perplexity.ai/help-center/en/articles/10354919-what-advanced-ai-models-are-included-in-my-subscription
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What does the Thinking option do?"
  - id: google-gemini-web-thinking-level
    title: "Google — Gemini Apps limits and upgrades for Google AI subscribers"
    href: https://support.google.com/gemini/answer/16275805?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Thinking level"
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
  - id: microsoft-copilot-conversation-modes
    title: "Microsoft — Conversation modes in Microsoft Copilot"
    href: https://support.microsoft.com/en-US/microsoft-copilot/conversation-modes-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Think Deeper"
support:
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
            value: "picker appears only for a model/provider configuration that declares compatible thinking or reasoning-effort support"
          - type: format
            value: "available levels vary by provider and model; disabling thinking maps to none where supported"
        evidence:
          - resourceId: zed-v1-17-2-api-access
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-gateway
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent Model selector documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Effort follows selectable models in Power or Max Mode for eligible Core and Pro builders"
          - type: runtime
            value: "the enclosing selector is rolling out; Effort is per model and higher settings can cost up to approximately twice as much on the hardest tasks"
        evidence:
          - resourceId: replit-agent-model-selector-current
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
            value: "low, medium, high, and ultra combine effort with other configuration; Alt+D toggles effort where supported"
        evidence:
          - resourceId: amp-2026-08-reasoning
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-keybindings
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the control is in Search rather than Computer and is not a numeric token budget"
          - type: plan
            value: "model and plan eligibility determine whether Thinking is optional, always on, or unavailable"
        evidence:
          - resourceId: perplexity-web-models
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Standard and Extended are available where supported; Deep Think requires the Pro model"
          - type: plan
            value: "Deep Think is limited to AI Ultra and higher thinking levels consume more usage"
        evidence:
          - resourceId: google-gemini-web-thinking-level
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 consumer Microsoft Copilot web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Think Deeper takes up to ten seconds for a more thoughtful response"
          - type: format
            value: "binary mode choice rather than a numeric or multi-level effort control"
        evidence:
          - resourceId: microsoft-copilot-conversation-modes
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
