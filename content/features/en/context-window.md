---
title: Context window and effective input limit
description: Identify the maximum context budget the exact harness can actually use, including model, mode, and product-level caps.
slug: context-window
locale: en
seoTitle: Context window and input limit comparison — Can My Agent Use
socialTitle: Context window and effective input limit
socialDescription: Compare advertised and effective context budgets by exact harness, model, and mode.
llmSummary: Context-window records distinguish a model's advertised token capacity from the effective input budget available in one harness after output reservations, system instructions, tools, files, and product caps.
audience: Engineers sizing long conversations, repositories, documents, and tool schemas.
contentKind: feature
status: published
tags: [context, context-length, tokens, limits]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Record the advertised and effective maximum input budget by model and harness mode.
specLabel: Measured product capability
aliases: [context length, token limit, input token limit, context size, long context]
parent: models-and-context
related: [output-token-limit, context-usage-visibility, automatic-context-compaction, upload-limits]
highlight: true
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

“Context length” is not one provider-wide number. The catalog records the exact harness, selected model or mode, advertised total context window, maximum accepted input when separately documented, reserved output budget, and observation date. Tool definitions, hidden instructions, memory, file extraction, images, video frames, and previous turns may all consume the same budget.

A sourced cell should carry the numeric limit and unit in its evidence note or structured qualifier. Mark it partial when the harness supports the model but enforces a lower cap, exposes only a qualitative label, or dynamically routes among models with different limits. Do not infer a web, desktop, editor, or CLI limit from an API model card unless the harness documentation explicitly adopts it.

Useful conformance work tests boundary behavior: rejection, truncation, silent omission, compaction, retrieval, and “lost in the middle” quality are different outcomes. A large accepted input is not proof that every supplied token remains equally influential.
