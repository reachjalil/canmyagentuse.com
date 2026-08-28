---
title: Concurrent subagents
description: Run more than one child-agent task at the same time with documented concurrency and queue limits.
slug: subagent-concurrency
locale: en
seoTitle: Concurrent subagents compatibility — Can My Agent Use
socialTitle: Concurrent subagents
socialDescription: Compare parallel child-agent execution, queueing, and concurrency limits.
llmSummary: Concurrent subagents means multiple child-agent tasks can overlap in time; sequential delegation, tool-call parallelism, and background shell processes are separate behaviors.
audience: Engineers comparing multi-agent throughput and coordination.
contentKind: feature
status: published
tags: [runtime, subagents, concurrency, delegation]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Run multiple child-agent tasks concurrently with explicit queue and fan-out limits.
specLabel: Product capability
aliases: [parallel subagents, agent fan-out, concurrent child agents]
parent: subagents
related: [subagent-delegation, nested-subagents, subagent-context-isolation]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row requires two or more child-agent executions whose active intervals overlap. Sequential delegation, concurrent ordinary tool calls, and detached shell commands do not establish concurrent subagents.

Evidence should record maximum active and queued children, nesting effects, per-plan or per-organization quotas, scheduling order, cancellation behavior, rate-limit sharing, and whether concurrent children can safely write to the same workspace. Tests should detect accidental serialization as well as unsafe shared-state races.
