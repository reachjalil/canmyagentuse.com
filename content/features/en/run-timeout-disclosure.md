---
title: Run timeout and duration limits
description: Publish maximum foreground, background, tool, sandbox, and child-agent durations plus idle and approval deadlines.
slug: run-timeout-disclosure
locale: en
seoTitle: Agent run timeout and duration limits — Can My Agent Use
socialTitle: Run timeout and duration limits
socialDescription: Compare foreground, background, tool, sandbox, approval, and subagent duration limits.
llmSummary: Run-timeout records separate wall-clock, CPU, idle, tool, sandbox, approval, and child-agent deadlines and document checkpoint or cleanup behavior at expiry.
audience: Engineers sizing long-running and unattended workflows.
contentKind: feature
status: published
tags: [operations, timeout, duration, limits]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Record foreground, background, tool, sandbox, idle, approval, and child-agent time limits.
specLabel: Measured product capability
aliases: [agent timeout, max run duration, execution deadline]
parent: usage-and-reliability
related: [background-agents, subagent-lifecycle-controls, resumable-runs]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

One “timeout” can conceal several clocks: total wall time, active compute, inactivity, tool-call duration, sandbox lifetime, browser session, approval wait, connector deadline, and child-agent or nested-agent limits.

Evidence should record each limit, plan and environment, whether activity resets the clock, warning behavior, checkpointing, partial artifacts, cancellation propagation, billing after the client disconnects, and cleanup. Observed timeouts are useful test evidence but should not be mislabeled as documented guarantees.
