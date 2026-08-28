---
title: Subagent lifecycle controls
description: List, inspect, pause, resume, cancel, retry, and set timeouts for child-agent tasks.
slug: subagent-lifecycle-controls
locale: en
seoTitle: Subagent lifecycle controls compatibility — Can My Agent Use
socialTitle: Subagent lifecycle controls
socialDescription: Compare listing, inspection, cancellation, pause, resume, retry, and timeout controls for child agents.
llmSummary: Subagent lifecycle controls cover operator and parent visibility into active children plus supported cancel, pause, resume, retry, and timeout actions.
audience: Operators supervising multi-agent runs.
contentKind: feature
status: published
tags: [runtime, subagents, supervision, cancellation]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: List, inspect, pause, resume, cancel, retry, and time-limit child-agent tasks.
specLabel: Product capability
aliases: [subagent cancellation, child task control, agent supervision]
parent: subagents
related: [subagent-concurrency, background-agents, run-timeout-disclosure]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row tracks supervision of child-agent executions after delegation. At minimum, evidence should show how active and queued children are identified and whether cancellation propagates to their tools and descendants.

Record pause, resume, retry, deadline, timeout, priority, log inspection, partial-result recovery, and orphan cleanup separately. A UI that hides a child after cancel while its tools continue running is only partial support.
