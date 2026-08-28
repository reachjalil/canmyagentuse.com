---
title: Automatic context compaction
description: Continue a long-running session by summarizing, pruning, or otherwise compacting older context.
slug: automatic-context-compaction
locale: en
seoTitle: Automatic context compaction compatibility — Can My Agent Use
socialTitle: Automatic context compaction
socialDescription: Compare automatic summarization, pruning, and continuation of long-running sessions.
llmSummary: Automatic context compaction lets a harness reduce older context to continue a run; it must be distinguished from silent truncation and from user-triggered compaction.
audience: Engineers evaluating long-running agent reliability.
contentKind: feature
status: published
tags: [context, compaction, summarization, runtime]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Continue long sessions by automatically summarizing or pruning older context.
specLabel: Product capability
aliases: [context summarization, auto compact, conversation compression]
parent: models-and-context
related: [context-window, context-compaction-controls, long-term-memory]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row requires a documented mechanism that summarizes, prunes, or otherwise reduces earlier context so work can continue. Silent truncation without a continuity mechanism is not compaction.

Evidence should record the trigger, whether the operator is warned, what state is preserved, whether instructions and tool results are treated specially, and whether the compacted summary is inspectable. Reliability tests should probe commitments, file paths, pending tasks, citations, approvals, and negative constraints across the boundary.
