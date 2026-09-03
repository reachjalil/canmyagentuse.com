---
title: Context window
description: Record the context-window limit available in the documented product, model, and mode.
slug: context-window
locale: en
seoTitle: Context window comparison — Can My Agent Use
socialTitle: Context window
socialDescription: Compare advertised and effective context budgets by exact harness, model, and mode.
llmSummary: Context-window records distinguish published model capacity from the limit documented for a particular product and mode. Usable input can be lower because of output reservations, instructions, tools, files, and product caps.
audience: Engineers sizing long conversations, repositories, documents, and tool schemas.
contentKind: feature
status: published
tags: [context, context-length, tokens, limits]
updated: 2026-08-29
published: 2026-08-28
category: models-context
summary: Record the documented context-window limit by product, model, and mode.
specLabel: Measured product property
aliases: [context length, token limit, input token limit, context size, long context]
parent: models-and-context
related: [output-token-limit, context-usage-visibility, automatic-context-compaction, upload-limits]
highlight: true
notes:
  - id: 87
    text: "Evidence checked 2026-09-02: OpenAI GPT-4o models provide a 128,000-token context window in ChatGPT across web and desktop surfaces."
  - id: 89
    text: "Evidence checked 2026-09-02: Anthropic Claude 3.5 and 3.7 models provide a standard 200,000-token context window across Claude web and desktop applications."
  - id: 88
    text: "Evidence checked 2026-09-02: Grok models offer context windows of 500,000 tokens (Grok 4.6) and 1,000,000 tokens (Grok 4.3)."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 embeds a 1,048,576-token maximum input for gemini/gemini-2.5-pro and /tokens reports the selected model's known maximum and remaining context."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 sends local Ollama a num_ctx context length and documents a 4,096-token default configurable globally or per model; this does not establish one limit for other provider paths."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exact OpenRouter record for anthropic/claude-sonnet-4.5 specifies a 1,000,000-token context window and 64,000 maximum output tokens; this does not generalize to every selectable model."
  - id: 1
    text: "Evidence checked 2026-08-28: Google publishes Gemini Apps context windows of 32k tokens without an AI plan, 128k with AI Plus, and 1 million with AI Pro or AI Ultra."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents 1 million-token Claude Code variants and plan/model eligibility; this is not a claim that every Claude Code session receives 1M context."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor documents a normal 200k-token context window and Max Mode up to the maximum supported by the selected model, including models with windows up to 1M."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 publishes exact context windows for its supported hosted models, ranging from 128k to 1 million tokens, and documents a configurable local-model context default of 64k."
resources:
  - id: xai-developer-models
    title: "xAI — Models and Pricing"
    href: https://docs.x.ai/developers/models
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Text API Pricing: grok-4.6 500k context; grok-4.3 1M context"
  - id: aider-v0860-model-metadata
    title: "Aider v0.86.0 — Embedded model metadata"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/resources/model-metadata.json"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "gemini/gemini-2.5-pro max_input_tokens: 1048576"
  - id: aider-v0860-commands-source-context
    title: "Aider v0.86.0 — CLI command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "cmd_tokens maximum and remaining context report"
  - id: zed-v1-17-2-local-models
    title: "Zed v1.17.2 — Use a Local Model"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/use-a-local-model.md#L117-L133"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Ollama Context Length, lines 117–133"
  - id: cline-v4-1-16-context-window
    title: "Cline v4.1.16 — OpenRouter model metadata"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/shared/api.ts#L145-L161"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "openRouterDefaultModelId and openRouterDefaultModelInfo"
  - title: Methodology
    href: /methodology
    kind: note
  - id: google-gemini-limits
    title: Google — Gemini Apps limits and context windows
    href: https://support.google.com/gemini/answer/16275805?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-code-model-config
    title: Anthropic — Claude Code model configuration
    href: https://code.claude.com/docs/en/model-config
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-models-context
    title: Cursor — Models and context windows
    href: https://docs.cursor.com/advanced/models
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: jetbrains-ai-supported-models
    title: JetBrains AI Assistant — Supported LLMs
    href: https://www.jetbrains.com/help/ai-assistant/supported-llms.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Supported model table and context-window column
  - id: jetbrains-ai-custom-models
    title: JetBrains AI Assistant — Use third-party and local models
    href: https://www.jetbrains.com/help/ai-assistant/use-custom-models.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Configure context window and message trimming for local models
  - id: openai-chatgpt-context-window
    title: "OpenAI Documentation — Models: GPT-4o context window"
    href: "https://platform.openai.com/docs/models#gpt-4o"
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "128,000 tokens context window"
  - id: anthropic-claude-context-window
    title: "Anthropic Claude Documentation — Context windows"
    href: "https://docs.anthropic.com/en/docs/about-claude/models"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Claude 3.5 Sonnet 200k token context window"
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [87]
        target:
          kind: dated-documentation
          revision: "2026-09-02 OpenAI model documentation observation"
          observedAt: 2026-09-02
          url: "https://platform.openai.com/docs/models#gpt-4o"
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "128,000 tokens for GPT-4o models"
        evidence:
          - resourceId: openai-chatgpt-context-window
            type: documented
            observedAt: 2026-09-02
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [87]
        target:
          kind: dated-documentation
          revision: "2026-09-02 OpenAI model documentation observation"
          observedAt: 2026-09-02
          url: "https://platform.openai.com/docs/models#gpt-4o"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "128,000 tokens for GPT-4o models"
        evidence:
          - resourceId: openai-chatgpt-context-window
            type: documented
            observedAt: 2026-09-02
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Anthropic model documentation observation"
          observedAt: 2026-09-02
          url: "https://docs.anthropic.com/en/docs/about-claude/models"
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "200,000 tokens for Claude 3.5/3.7 models"
        evidence:
          - resourceId: anthropic-claude-context-window
            type: documented
            observedAt: 2026-09-02
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Anthropic model documentation observation"
          observedAt: 2026-09-02
          url: "https://docs.anthropic.com/en/docs/about-claude/models"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "200,000 tokens for Claude 3.5/3.7 models"
        evidence:
          - resourceId: anthropic-claude-context-window
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
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "value is scoped to Aider v0.86.0 embedded metadata for gemini/gemini-2.5-pro only"
          - type: format
            value: "maximum input is 1,048,576 tokens; effective prompt capacity is lower after system prompts, history, files, repository map, images, and output reservation"
          - type: policy
            value: "the value does not transfer to other Aider models or providers"
        evidence:
          - resourceId: aider-v0860-model-metadata
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source-context
            type: documented
            observedAt: 2026-08-29
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
            value: "measured value is 4,096 tokens for the native Agent local Ollama path; other providers and models have separate limits"
          - type: format
            value: "context_window configures all Ollama models and max_tokens can override an individual model"
          - type: policy
            value: "effective input is lower when output reservation, instructions, tools, and history consume the window; boundary behavior is not documented"
        evidence:
          - resourceId: zed-v1-17-2-local-models
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "1,000,000-token total context window and 64,000 maximum output tokens"
          - type: runtime
            value: "anthropic/claude-sonnet-4.5 through OpenRouter"
          - type: auth
            value: "OpenRouter availability and credentials apply"
        evidence:
          - resourceId: cline-v4-1-16-context-window
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: published limits vary by selected model; supported hosted models span 128k to 1M tokens, while local-model context is configurable with a 64k default
        evidence:
          - resourceId: jetbrains-ai-supported-models
            type: documented
            observedAt: 2026-08-29
          - resourceId: jetbrains-ai-custom-models
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps limits documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: 32k tokens without an AI plan; 128k with AI Plus; 1 million with AI Pro or AI Ultra
          - type: runtime
            value: the published window is shared by prompt, chat, and uploaded content and is not a guarantee of uniform attention quality
        evidence:
          - resourceId: google-gemini-limits
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: Opus with 1M context is included on Max, Team, and Enterprise; Pro requires usage credits, and Sonnet 1M requires credits on subscription plans
          - type: runtime
            value: the [1m] model suffix selects an eligible 1M variant; effective input remains lower after system, tools, history, and output reservations
        evidence:
          - resourceId: anthropic-code-model-config
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor models documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: normal mode uses 200k tokens; Max Mode extends to the selected model's maximum, with some supported models reaching 1M
          - type: plan
            value: Max Mode availability and billing depend on plan and model
        evidence:
          - resourceId: cursor-models-context
            type: documented
            observedAt: 2026-08-28
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [88]
        target:
          kind: dated-documentation
          revision: current Grok models documentation
          observedAt: 2026-09-02
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "500,000 tokens on Grok 4.6; 1,000,000 tokens on Grok 4.3"
        evidence:
          - resourceId: xai-developer-models
            type: documented
            observedAt: 2026-09-02
---

“Context length” is not one provider-wide number. The catalog records the exact harness, selected model or mode, advertised total context window, maximum accepted input when separately documented, reserved output budget, and observation date. Tool definitions, hidden instructions, memory, file extraction, images, video frames, and previous turns may all consume the same budget.

A sourced cell should carry the numeric limit and unit in its evidence note or structured qualifier. Mark it partial when the harness supports the model but enforces a lower cap, exposes only a qualitative label, or dynamically routes among models with different limits. Do not infer a web, desktop, editor, or CLI limit from an API model card unless the harness documentation explicitly adopts it.

Useful conformance work tests boundary behavior: rejection, truncation, silent omission, compaction, retrieval, and “lost in the middle” quality are different outcomes. A large accepted input is not proof that every supplied token remains equally influential.
