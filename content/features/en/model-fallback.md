---
title: Model fallback visibility and control
description: Detect, configure, or prevent a run from switching to another model after capacity, policy, or service failures.
slug: model-fallback
locale: en
seoTitle: Model fallback visibility and control — Can My Agent Use
socialTitle: Model fallback visibility and control
socialDescription: Compare fallback routing, disclosure, opt-out, and retry behavior across harnesses.
llmSummary: Model fallback covers documented switching after capacity, policy, or service failures; automatic routing is partial when the selected model and reason are not visible.
audience: Engineers who need predictable model behavior and reproducible runs.
contentKind: feature
status: published
tags: [models, routing, reliability, observability]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Detect, configure, or prevent fallback to another model during a run.
specLabel: Product capability
aliases: [model failover, automatic model routing, fallback model]
parent: models-and-context
related: [model-selection, failure-recovery]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row tracks whether a harness may retry or continue with a different model and what control the operator has over that change. Transparent, configurable fallback is distinct from silent automatic routing.

Evidence should record triggers, candidate models, changes in context or tool compatibility, whether the operator is notified, how provenance appears in logs or exports, and whether regulated or reproducible workflows can disable fallback.
