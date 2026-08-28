---
title: Resumable runs
description: Reconnect to and continue a run after client closure, network loss, process restart, or an explicit pause.
slug: resumable-runs
locale: en
seoTitle: Resumable agent runs compatibility — Can My Agent Use
socialTitle: Resumable runs
socialDescription: Compare reconnect, pause, resume, checkpoint, restart, and state-restoration behavior.
llmSummary: Resumable runs preserve enough server or local state to reconnect or continue after interruption; merely opening old conversation text is insufficient.
audience: Operators relying on long-running or mobile agent workflows.
contentKind: feature
status: published
tags: [operations, reliability, resume, checkpoints]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Reconnect or continue after closure, disconnection, restart, pause, or worker migration.
specLabel: Product capability
aliases: [resume agent, reconnect run, run checkpoint, session recovery]
parent: usage-and-reliability
related: [background-agents, failure-recovery, conversation-export]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row requires more than viewing an old transcript. The harness must preserve enough execution state to reconnect to an active run or continue from a checkpoint after closure, network loss, process restart, pause, or worker migration.

Evidence should identify which state survives: conversation and instructions, tool results, filesystem and git state, browser sessions, pending approvals, sub-agents, environment variables, secrets, timers, and streamed output. Record resume window, idempotency, billing, cross-device behavior, and cases that force a fresh run.
