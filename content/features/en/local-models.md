---
title: Local models
description: "Run against a model hosted on the operator's machine. Compatibility evidence is published only after review."
slug: local-models
locale: en
seoTitle: "Local models — Can My Agent Use"
socialTitle: Local models
socialDescription: "Run against a model hosted on the operator's machine. Unreviewed cells remain unknown."
llmSummary: "Local models: Run against a model hosted on the operator's machine. Unreviewed harness cells remain unknown until dated public evidence exists."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Run against a model hosted on the operator's machine.
specLabel: Common product term
aliases: [self-hosted model, local inference, on-device model]
parent: models-and-context
related: [model-selection]
highlight: false
notes:
  - id: 1
    text: No reviewed public evidence is attached to this capability row. Unknown records the evidence gap.
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: Ollama — Quickstart
    href: https://docs.ollama.com/quickstart
    kind: docs
    publisher: Ollama
    reviewedAt: 2026-08-28
support: []
---

This row asks whether the exact harness can send model requests to an operator-controlled local inference runtime. A cloud model with a desktop client is not a local model, and a configurable remote API base URL does not prove on-device execution.

Evidence should identify the supported runtimes or protocols, model-discovery behavior, tool-calling and multimodal constraints, authentication, and whether any prompts, telemetry, or embeddings still leave the device.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
