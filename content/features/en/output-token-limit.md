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
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Record the maximum generated response budget by exact model and harness mode.
specLabel: Measured product property
aliases: [max output tokens, response length limit, generation limit]
parent: models-and-context
related: [context-window, structured-output]
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — Create a model response
    href: https://developers.openai.com/api/reference/cli/resources/responses/methods/create
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
support: []
---

This row tracks the maximum response or artifact generation budget exposed by the harness. The number may be lower than a model API limit and may vary for chat, code edits, tool calls, structured output, or background tasks.

Evidence should identify units, model and mode, defaults, user controls, stop behavior, and whether the harness continues long results across messages or files. UI clipping, transport truncation, and model generation limits should not be collapsed into one cause.
