---
title: Prompt cache controls
description: Mark reusable prompt segments, choose retention, or explicitly create, refresh, and invalidate cached context.
slug: prompt-cache-controls
locale: en
seoTitle: Prompt cache controls compatibility — Can My Agent Use
socialTitle: Prompt cache controls
socialDescription: Compare explicit breakpoints, retention choices, creation, refresh, and invalidation of prompt caches.
llmSummary: Prompt-cache controls let an operator or configuration mark reusable segments or manage cache lifetime; automatic caching alone does not establish control.
audience: Engineers optimizing repeated large prompts and agent instructions.
contentKind: feature
status: published
tags: [context, prompt-caching, control]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Mark, retain, refresh, or invalidate cached prompt context.
specLabel: Product capability
aliases: [cache breakpoint, cache retention, explicit prompt cache]
parent: models-and-context
related: [prompt-cache-reuse, prompt-cache-telemetry]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether the harness exposes a supported way to influence prompt caching rather than relying entirely on automatic provider behavior. Controls can include cache breakpoints, explicit cache objects, retention choices, refresh, or invalidation.

Evidence should record where the control lives—UI, project configuration, command flag, plugin, or provider-specific request setting—and whether the exact harness preserves it. Security review should also identify the tenant, workspace, user, project, or organization boundary around reuse.
