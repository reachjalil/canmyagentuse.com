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
specLabel: Product capability
aliases: [model picker, model choice, model routing]
parent: models-and-context
related: [local-models, reasoning-effort-controls, model-fallback]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether the operator can select a specific model or a clearly documented model class for the exact harness and task. An opaque automatic router is not explicit selection; a “fast” or “deep” mode may be partial if its underlying model can change without notice.

Evidence should record eligible plans, model aliases and revisions, per-workspace restrictions, whether tools and media inputs narrow the choices, and whether the selection persists for a conversation, agent, project, or single run.
