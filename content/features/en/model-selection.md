---
title: Model selection
description: Choose the model or documented model class used for a run instead of accepting only opaque automatic routing.
slug: model-selection
locale: en
seoTitle: Model selection compatibility — Can My Agent Use
socialTitle: Model selection
socialDescription: Compare explicit model choice and routing visibility across exact agent harnesses.
llmSummary: Model selection means the harness exposes a meaningful model choice for the run; a generic speed or quality label is partial unless it maps to documented behavior.
audience: Engineers comparing model access and routing control.
contentKind: feature
status: published
tags: [models, routing, control]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Choose the model or documented model class used for a run.
specLabel: Common product term
aliases: [model picker, model choice, model routing]
parent: models-and-context
related: [local-models, reasoning-effort-controls, model-fallback]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok Bot team documentation says the product has no model picker and does not plan to let users or administrators choose its models; requests use a product-managed fixed model set with automatic failover."
  - id: 2
    text: "Evidence checked 2026-08-28: OpenAI documents model controls in ChatGPT Work on the web and ChatGPT desktop, plus /model and --model/-m selection in Codex CLI."
  - id: 3
    text: "Evidence checked 2026-08-28: Anthropic documents model selectors in Claude web and desktop and /model, --model, environment, and settings-based selection in Claude Code."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI exposes Auto, Pro, Flash, Flash-Lite, and manual model selection through /model and --model."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-models
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Models and providers
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
  - id: google-gemini-cli-model
    title: Google — Gemini CLI model selection
    href: https://geminicli.com/docs/cli/model/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: available choices depend on account eligibility, plan, and supported model
        evidence:
          - resourceId: openai-models
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
          - type: plan
            value: available choices depend on account eligibility, plan, and supported model
        evidence:
          - resourceId: openai-models
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
            value: /model changes an interactive session; --model or -m selects a model for interactive and non-interactive runs
        evidence:
          - resourceId: openai-models
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the selector shows models available to the account and can be restricted by an Enterprise role
        evidence:
          - resourceId: anthropic-change-model
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: the selector shows models available to the account and can be restricted by an Enterprise role
        evidence:
          - resourceId: anthropic-change-model
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supports /model, --model, ANTHROPIC_MODEL, and persistent model settings with documented precedence
        evidence:
          - resourceId: anthropic-code-model-config
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /model and --model expose automatic model classes and manual model selection; this setting does not override models used by subagents
        evidence:
          - resourceId: google-gemini-cli-model
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: no
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: model choice is fully managed by the product; neither members nor administrators receive a model picker
        evidence:
          - resourceId: xai-grok-bot-team-models
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the operator can select a specific model or a clearly documented model class for the exact harness and task. An opaque automatic router is not explicit selection; a “fast” or “deep” mode may be partial if its underlying model can change without notice.

Evidence should record eligible plans, model aliases and revisions, per-workspace restrictions, whether tools and media inputs narrow the choices, and whether the selection persists for a conversation, agent, project, or single run.
