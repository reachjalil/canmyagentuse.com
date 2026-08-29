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
  - id: 1
    text: "Evidence checked 2026-08-28: Google publishes Gemini Apps context windows of 32k tokens without an AI plan, 128k with AI Plus, and 1 million with AI Pro or AI Ultra."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents 1 million-token Claude Code variants and plan/model eligibility; this is not a claim that every Claude Code session receives 1M context."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor documents a normal 200k-token context window and Max Mode up to the maximum supported by the selected model, including models with windows up to 1M."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 publishes exact context windows for its supported hosted models, ranging from 128k to 1 million tokens, and documents a configurable local-model context default of 64k."
resources:
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
support:
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
---

“Context length” is not one provider-wide number. The catalog records the exact harness, selected model or mode, advertised total context window, maximum accepted input when separately documented, reserved output budget, and observation date. Tool definitions, hidden instructions, memory, file extraction, images, video frames, and previous turns may all consume the same budget.

A sourced cell should carry the numeric limit and unit in its evidence note or structured qualifier. Mark it partial when the harness supports the model but enforces a lower cap, exposes only a qualitative label, or dynamically routes among models with different limits. Do not infer a web, desktop, editor, or CLI limit from an API model card unless the harness documentation explicitly adopts it.

Useful conformance work tests boundary behavior: rejection, truncation, silent omission, compaction, retrieval, and “lost in the middle” quality are different outcomes. A large accepted input is not proof that every supplied token remains equally influential.
