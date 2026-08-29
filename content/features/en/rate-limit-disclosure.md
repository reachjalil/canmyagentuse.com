---
title: Rate limits and quotas
description: Document request, token, concurrency, or other product usage limits.
slug: rate-limit-disclosure
locale: en
seoTitle: Rate limits and quotas — Can My Agent Use
socialTitle: Rate limits and quotas
socialDescription: Compare documented request, token, concurrency, and usage limits.
llmSummary: Rate limits and quotas are documented product usage boundaries; their scope and reset period are recorded as qualifiers.
audience: Engineers planning production and high-volume agent workflows.
contentKind: feature
status: published
tags: [operations, rate-limits, quotas, concurrency]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Record documented product usage limits and reset periods.
specLabel: Measured product property
aliases: [quota, usage cap, fair use limit, concurrency limit]
parent: usage-and-reliability
related: [subagent-concurrency, upload-limits, usage-metering]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Cursor documents two monthly usage pools, real-time remaining allowance, a billing-cycle reset with no rollover, editor notification at the boundary, and optional on-demand usage. The numeric included allowance varies by plan and is not stated on the reviewed page."
  - id: 2
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents plan-based concurrent-subagent limits of 2, 4, 8, 16, or 32, a global session-tree maximum of 32, and rejection of new child requests until capacity becomes available. These are subagent quotas, not the complete request, token, tool, or premium-request envelope."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenAI publishes plan- and model-specific estimated local-message ranges per five-hour window for ChatGPT Work and Codex, documents that local and cloud tasks share the window, notes additional weekly limits, and describes credit-based continuation. The ranges vary with task complexity and are not hard per-message guarantees."
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
  - id: openai-work-pricing-limits
    title: OpenAI — ChatGPT Work and Codex pricing and usage limits
    href: https://learn.chatgpt.com/docs/pricing
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Usage limits; what happens at the limit; current limits
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work usage-limit documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: local messages and cloud chats share a five-hour allowance; additional weekly limits may apply, and Enterprise or Edu flexible pricing can scale through credits
          - type: runtime
            value: documented plan and model tables are estimated ranges because task size, context, reasoning, tools, retrieval, caching, and local versus cloud execution change consumption
          - type: policy
            value: an active turn may finish at the boundary subject to fair use; eligible plans can buy credits, switch models, or use separately billed API-key sessions
        evidence:
          - resourceId: openai-work-pricing-limits
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT desktop usage-limit documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: local desktop tasks share the five-hour ChatGPT Work and Codex allowance with cloud chats; additional weekly limits may apply
          - type: runtime
            value: ChatGPT Voice on desktop has a separate plan-dependent rolling five-hour allowance, while tasks started through Voice still consume the shared Codex task budget
          - type: policy
            value: the published local-message and voice-minute ranges are estimates rather than fixed per-message guarantees
        evidence:
          - resourceId: openai-work-pricing-limits
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Codex CLI usage-limit documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: ChatGPT-authenticated local messages share a five-hour allowance with cloud chats and may have additional weekly limits; model-specific estimated ranges are published by plan
          - type: runtime
            value: /status exposes remaining limits during the session; an active turn may finish at the boundary subject to fair use
          - type: auth
            value: API-key sessions are billed independently at API rates and are not part of the ChatGPT-plan allowance
        evidence:
          - resourceId: openai-work-pricing-limits
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
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
        status: yes
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
