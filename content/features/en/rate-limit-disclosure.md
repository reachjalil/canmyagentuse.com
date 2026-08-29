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
specLabel: Measured product property
aliases: [quota, usage cap, fair use limit, concurrency limit]
parent: usage-and-reliability
related: [subagent-concurrency, upload-limits, usage-metering]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Cursor documents two monthly usage pools, real-time remaining allowance, a billing-cycle reset with no rollover, editor notification at the boundary, and optional on-demand usage. The numeric included allowance varies by plan and is not stated on the reviewed page."
  - id: 2
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents plan-based concurrent-subagent limits of 2, 4, 8, 16, or 32, a global session-tree maximum of 32, and rejection of new child requests until capacity becomes available. These are subagent quotas, not the complete request, token, tool, or premium-request envelope."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: cursor-usage-limits
    title: Cursor — Usage and limits
    href: https://prod.cursor.com/help/models-and-usage/usage-limits
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Usage pools; limits; reset
  - id: github-copilot-cli-reference
    title: GitHub Docs — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Subagent limits
support:
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: usage is split into two monthly pools; remaining allowance, on-demand charges, and reset date are visible in the Spending dashboard
          - type: runtime
            value: unused usage does not roll over; at the boundary the editor offers on-demand usage or a plan upgrade
          - type: policy
            value: numeric included allowances and the complete request, token, upload, tool, and agent-concurrency envelope are not established by the reviewed page
        evidence:
          - resourceId: cursor-usage-limits
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 GitHub Copilot CLI documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: concurrent subagents are limited to 2 on Free or Education, 4 on Pro or Pro+, 8 on Max, 16 on Business, and 32 on Enterprise or usage-based billing
          - type: runtime
            value: concurrency is counted across the full session tree; new child requests are rejected until an active child completes; maximum documented concurrency is 32
          - type: policy
            value: this cell establishes subagent limits only, not the full request, token, premium-request, tool, or upload quota envelope
        evidence:
          - resourceId: github-copilot-cli-reference
            type: documented
            observedAt: 2026-08-28
---

This row records rate and quota boundaries around the harness: requests, tokens, agent runs, active sandboxes, sub-agent concurrency, tool calls, connectors, uploads, media minutes, storage, and background compute. Each number needs a plan, model, user or organization scope, and reset window.

Evidence should state whether pools are shared, whether limits are fixed or dynamic, what meters or headers reveal, retry and backoff guidance, priority tiers, overage behavior, and whether work queues, degrades, or fails at the boundary. “Reasonable use” without an inspectable limit is partial disclosure.
