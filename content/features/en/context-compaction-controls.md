---
title: Context compaction controls
description: Trigger, inspect, configure, or disable the harness's context-compaction behavior.
slug: context-compaction-controls
locale: en
seoTitle: Context compaction controls compatibility — Can My Agent Use
socialTitle: Context compaction controls
socialDescription: Compare manual compact commands, retained-state inspection, thresholds, and opt-out controls.
llmSummary: Compaction controls cover operator actions such as manual compaction, threshold configuration, summary inspection, retained-item pinning, and disabling automatic compaction.
audience: Operators who need predictable long-session state.
contentKind: feature
status: published
tags: [context, compaction, control]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Trigger, inspect, configure, or disable context compaction.
specLabel: Product capability
aliases: [manual compact, compaction settings, context pinning]
parent: models-and-context
related: [automatic-context-compaction, context-usage-visibility]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row separates controllability from the existence of automatic compaction. Useful controls include a manual compact action, an editable instruction for the summary, threshold configuration, inspection of the compacted state, pinning of durable facts, and an opt-out.

A single manual “summarize this chat” prompt is not necessarily a harness-level compaction control. Evidence should show that the resulting state is used for subsequent requests and identify the scope of each setting.
