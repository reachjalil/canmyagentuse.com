---
title: Context usage visibility
description: Show how much of the current token or context budget is consumed and what major sources contribute to it.
slug: context-usage-visibility
locale: en
seoTitle: Context usage visibility compatibility — Can My Agent Use
socialTitle: Context usage visibility
socialDescription: Compare token meters, context inspectors, and budget warnings across harnesses.
llmSummary: Context usage visibility means the harness reports current budget consumption or remaining capacity; exact counters, estimates, and simple warnings are qualified separately.
audience: Operators diagnosing truncation, compaction, and unexpectedly expensive context.
contentKind: feature
status: published
tags: [context, tokens, observability]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Inspect consumed or remaining context budget during a conversation or run.
specLabel: Product capability
aliases: [context meter, token counter, context inspector]
parent: models-and-context
related: [context-window, prompt-cache-telemetry, usage-metering]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether the exact harness shows the operator how much context is in use or remains. An exact token count, a percentage estimate, and a warning shown only at exhaustion are materially different and should be qualified.

The most useful implementations identify contributions from conversation turns, project instructions, tool schemas, retrieved files, images or video, long-term memory, and reserved output. Evidence should also say whether the meter updates before a request, after server-side processing, or only in logs.
