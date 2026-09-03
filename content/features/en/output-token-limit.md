---
title: Output token limit
description: Identify the maximum response or generated-artifact budget available through the exact harness.
slug: output-token-limit
locale: en
seoTitle: Output token limit comparison — Can My Agent Use
socialTitle: Output token limit
socialDescription: Compare maximum response budgets and harness-specific output caps.
llmSummary: Output-token limits are recorded separately from total context because harnesses may reserve, cap, or truncate generated text and artifacts independently.
audience: Engineers sizing generated code, reports, and structured output.
contentKind: feature
status: published
tags: [context, output, tokens, limits]
updated: 2026-09-02
published: 2026-08-28
category: models-context
summary: Record the maximum generated response budget by exact model and harness mode.
specLabel: Measured product property
aliases: [max output tokens, response length limit, generation limit]
parent: models-and-context
related: [context-window, structured-output]
notes:
  - id: 88
    text: "Evidence checked 2026-09-02: xAI API and Grok web models define a default maximum completion limit of 128,000 output tokens for grok-4+ series completions (excluding reasoning tokens)."
  - id: 89
    text: "Evidence checked 2026-09-02: Grok Bot enforces a maximum completion budget of 128,000 output tokens per Bot turn."
  - id: 82
    text: "Evidence checked 2026-09-02: Aider v0.86.0 tracks per-model max_output_tokens (e.g. 4,096 or 8,192 depending on model) from LiteLLM and embedded model metadata or custom .aider.model.metadata.json, enforcing output token headroom calculations."
  - id: 74
    text: "Evidence checked 2026-09-02: Cline v4.1.16 defines per-model maxTokens / maxOutput limits (e.g. 64,000 for anthropic/claude-sonnet-4.5) to bound response generation and trigger output context management."
resources:
  - id: aider-v0860-adv-model-settings
    title: "Aider v0.86.0 — Advanced model settings"
    href: https://aider.chat/docs/config/adv-model-settings.html
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Model metadata file — max_output_tokens"
  - id: cline-v4-1-16-output-tokens
    title: "Cline v4.1.16 — Model metadata configuration"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/shared/api.ts#L145-L161"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "openRouterDefaultModelId and openRouterDefaultModelInfo maxTokens"
  - id: xai-grok-models-spec
    title: "xAI Docs — Models"
    href: "https://docs.x.ai/developers/models"
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "max_completion_tokens defaults to 128,000"
  - id: xai-grok-bot-files-results
    title: "xAI — Grok Bot files and results"
    href: "https://docs.x.ai/grok-bot/files-and-results"
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Task outputs and completion token budget"
support:
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [88]
        target:
          kind: dated-documentation
          revision: "2026-09-02 xAI models specification observation"
          observedAt: 2026-09-02
          url: "https://docs.x.ai/developers/models"
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "max_completion_tokens defaults to 128,000 tokens for grok-4+ models"
        evidence:
          - resourceId: xai-grok-models-spec
            type: documented
            observedAt: 2026-09-02
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Grok Bot documentation observation"
          observedAt: 2026-09-02
          url: "https://docs.x.ai/grok-bot/files-and-results"
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "completion token budget capped at 128,000 tokens per Bot task"
        evidence:
          - resourceId: xai-grok-bot-files-results
            type: documented
            observedAt: 2026-09-02
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "max_output_tokens is tracked from LiteLLM and embedded metadata or configured via .aider.model.metadata.json to ensure output headroom"
        evidence:
          - resourceId: aider-v0860-adv-model-settings
            type: documented
            observedAt: 2026-09-02
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline v4.1.16, commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "defines model-specific maxTokens (such as 64,000 for claude-sonnet-4.5) to bound single-response generation"
        evidence:
          - resourceId: cline-v4-1-16-output-tokens
            type: documented
            observedAt: 2026-09-02
---

This row tracks the maximum response or artifact generation budget exposed by the harness. The number may be lower than a model API limit and may vary for chat, code edits, tool calls, structured output, or background tasks.

Evidence should identify units, model and mode, defaults, user controls, stop behavior, and whether the harness continues long results across messages or files. UI clipping, transport truncation, and model generation limits should not be collapsed into one cause.
