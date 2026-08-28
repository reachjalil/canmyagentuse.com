---
title: Rate limit and quota disclosure
description: Publish request, token, run, concurrency, upload, tool, and rolling usage limits with reset and retry behavior.
slug: rate-limit-disclosure
locale: en
seoTitle: Agent harness rate limits and quotas — Can My Agent Use
socialTitle: Rate limit and quota disclosure
socialDescription: Compare request, token, concurrency, upload, tool, and rolling quotas plus reset behavior.
llmSummary: Rate-limit records identify numeric limits, scope, reset windows, shared pools, headers or meters, and boundary behavior; vague “fair use” language is partial.
audience: Engineers planning production and high-volume agent workflows.
contentKind: feature
status: published
tags: [operations, rate-limits, quotas, concurrency]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Record numeric request, token, run, concurrency, upload, and tool quotas with reset behavior.
specLabel: Measured product capability
aliases: [quota, usage cap, fair use limit, concurrency limit]
parent: usage-and-reliability
related: [subagent-concurrency, upload-limits, plan-pricing-disclosure]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row records rate and quota boundaries around the harness: requests, tokens, agent runs, active sandboxes, sub-agent concurrency, tool calls, connectors, uploads, media minutes, storage, and background compute. Each number needs a plan, model, user or organization scope, and reset window.

Evidence should state whether pools are shared, whether limits are fixed or dynamic, what meters or headers reveal, retry and backoff guidance, priority tiers, overage behavior, and whether work queues, degrades, or fails at the boundary. “Reasonable use” without an inspectable limit is partial disclosure.
