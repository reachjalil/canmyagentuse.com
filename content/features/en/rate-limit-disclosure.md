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
updated: 2026-09-01
published: 2026-08-28
category: operations
summary: Record documented product usage limits and reset periods.
specLabel: Measured product property
aliases: [quota, usage cap, fair use limit, concurrency limit]
parent: usage-and-reliability
related: [subagent-concurrency, upload-limits, usage-metering]
notes:
  - id: 74
    text: "Evidence checked 2026-09-01: paid Grok users have a shared weekly usage pool across Chat, Imagine, Voice, and Build, and may pay as they go or upgrade after reaching the pool. The current FAQ does not publish a fixed numeric allotment, reset timestamp, or complete feature-specific quota envelope."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp documents a burst of 20 metered orb starts per user followed by one new orb every five minutes, with excess starts queued rather than failed."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity publishes plan-scoped Search, Research, file-creation, upload, and Computer-credit quotas, including reset windows and pause, block, retry, or refill behavior."
  - id: 62
    text: "Evidence checked 2026-08-29: Google documents Gemini Apps compute-based limits that refresh every five hours until a weekly limit, relative plan multipliers, fallback behavior after a limit, and a separate cap of ten active scheduled actions; exact prompt counts remain dynamic."
  - id: 1
    text: "Evidence checked 2026-08-28: Cursor documents two monthly usage pools, real-time remaining allowance, a billing-cycle reset with no rollover, editor notification at the boundary, and optional on-demand usage. The numeric included allowance varies by plan and is not stated on the reviewed page."
  - id: 2
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents plan-based concurrent-subagent limits of 2, 4, 8, 16, or 32, a global session-tree maximum of 32, and rejection of new child requests until capacity becomes available. These are subagent quotas, not the complete request, token, tool, or premium-request envelope."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenAI publishes plan- and model-specific estimated local-message ranges per five-hour window for ChatGPT Work and Codex, documents that local and cloud tasks share the window, notes additional weekly limits, and describes credit-based continuation. The ranges vary with task complexity and are not hard per-message guarantees."
  - id: 60
    text: "Evidence checked 2026-08-29: Microsoft publishes numeric quotas for selected consumer Copilot capabilities by Microsoft 365 plan, while ordinary chat is described only as extensive use and preview-task limits may vary."
resources:
  - id: spacexai-grok-web-app-faq
    title: "SpaceXAI Docs — FAQ: Grok Website / Apps"
    href: https://docs.x.ai/grok/faq
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Usage & Limits — How do SuperGrok's weekly usage limits work?"
  - id: amp-2026-08-orb-limits
    title: "Amp — Orbs"
    href: https://ampcode.com/docs/orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Orb Spawn Pacing"
  - id: amp-2026-08-plan-limits
    title: "Amp — Pricing"
    href: https://ampcode.com/docs/pricing
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Included usage and limits"
  - id: perplexity-plan-comparison
    title: "Perplexity — Which subscription plan is right for you?"
    href: https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How do the plans compare?"
  - id: perplexity-computer-credits
    title: "Perplexity — How Credits Work on Perplexity"
    href: https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Plan credits; what happens when credits run out"
  - id: google-gemini-web-usage-limits
    title: "Google — Gemini Apps limits and upgrades for Google AI subscribers"
    href: https://support.google.com/gemini/answer/16275805?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Usage limits; More info about limits"
  - id: google-gemini-web-scheduled-action-limit
    title: "Google — Schedule actions in Gemini Apps"
    href: https://support.google.com/gemini/answer/16316416?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Schedule an action; up to 10 active scheduled actions"
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
  - id: microsoft-copilot-ai-limits
    title: "Microsoft — AI credits and limits for Microsoft 365 subscriptions"
    href: https://support.microsoft.com/en-US/Microsoft-365-Copilot/ai-credits-and-limits-for-microsoft-365-subscriptions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Limits and credits for each plan"
support:
  - harness: grok-web
    versions:
      - track: current
        status: partial
        noteIds: [74]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Grok website and apps FAQ observation
          observedAt: 2026-09-01
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: paid SuperGrok products draw from one shared weekly pool; users may pay as they go or upgrade at the boundary
          - type: runtime
            value: the reviewed FAQ does not establish fixed numeric allowances, reset timestamp, retry behavior, priority treatment, or the complete per-product quota envelope
        evidence:
          - resourceId: spacexai-grok-web-app-faq
            type: documented
            observedAt: 2026-09-01
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "burst of 20 then one start per five minutes; queued starts show an estimated wait"
          - type: plan
            value: "credits, orb hours, storage, and transfer allowances differ by subscription"
        evidence:
          - resourceId: amp-2026-08-orb-limits
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-plan-limits
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "published quotas vary by Free, Pro, Max, Enterprise Pro, and Enterprise Max"
          - type: runtime
            value: "exhausted Computer credits pause active tasks, block new tasks, and resume paused work after refill or reset"
        evidence:
          - resourceId: perplexity-plan-comparison
            type: documented
            observedAt: 2026-08-29
          - resourceId: perplexity-computer-credits
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Google publishes relative plan multipliers and a five-hour plus weekly refresh structure, but not stable exact prompt counts"
          - type: runtime
            value: "scheduled actions have a separate documented cap of ten active schedules; limits can change with capacity and task complexity"
        evidence:
          - resourceId: google-gemini-web-usage-limits
            type: documented
            observedAt: 2026-08-29
          - resourceId: google-gemini-web-scheduled-action-limit
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 consumer Microsoft Copilot web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "examples include 25 agent tasks per month on Premium, 60 image credits per month on Personal and Family, and 10 or 15 daily Vision minutes"
          - type: format
            value: "ordinary chat lacks a numeric cap and several limits remain qualitative or variable"
        evidence:
          - resourceId: microsoft-copilot-ai-limits
            type: documented
            observedAt: 2026-08-29
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
