---
title: Usage and cost metering
description: Show per-run and aggregate model, cache, tool, compute, storage, and subagent consumption before a bill arrives.
slug: usage-metering
locale: en
seoTitle: Usage and cost metering compatibility — Can My Agent Use
socialTitle: Usage and cost metering
socialDescription: Compare per-run token, cache, tool, compute, storage, and subagent usage visibility.
llmSummary: Usage metering exposes consumption and preferably cost at run, user, project, and organization scope; a monthly invoice total alone is narrower support.
audience: Engineers and administrators controlling agent spend.
contentKind: feature
status: published
tags: [operations, usage, cost, metering]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Inspect per-run and aggregate model, cache, tool, compute, storage, and delegated usage.
specLabel: Common product term
aliases: [cost meter, token usage, spend dashboard, usage dashboard]
parent: usage-and-reliability
related: [prompt-cache-telemetry, context-usage-visibility, rate-limit-disclosure]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code's `/usage` screen reports current-session tokens by model, cache reads and writes, duration, code changes, and an estimated cost. Subscription users also receive plan-usage bars and attribution across skills, subagents, plugins, MCP servers, and scheduled tasks, with documented version and device-scope boundaries."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor's Spending dashboard reports real-time consumption for its separate monthly model pools, remaining allowance, on-demand charges, and request-level cost and pool details. The reviewed page does not establish a portable telemetry export or tool and subagent cost breakdown."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-costs
    title: Anthropic — Manage Claude Code costs effectively
    href: https://code.claude.com/docs/en/costs
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Using the /usage command; prompt cache statistics; plan usage breakdown
  - id: cursor-usage-limits
    title: Cursor — Usage and limits
    href: https://prod.cursor.com/help/models-and-usage/usage-limits
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How do I check my usage?
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Code documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /usage shows session tokens by model, cache reads and writes, duration, code changes, and locally estimated cost; /clear resets session totals
          - type: plan
            value: Pro, Max, Team, and Enterprise add plan-usage bars and approximate local attribution across skills, subagents, plugins, MCP servers, and scheduled tasks
          - type: policy
            value: session cost is an estimate unless organization pricing is configured; authoritative billing remains in the applicable console or provider
        evidence:
          - resourceId: anthropic-claude-code-costs
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Spending dashboard shows real-time use, remaining allowance, on-demand charges, reset date, and request-level cost and pool details
          - type: plan
            value: Cursor Models and third-party Other Models draw from separate monthly pools; Auto requests are charged at the routed model's list price
          - type: policy
            value: portable telemetry export and separate tool, compute, storage, and subagent consumption are not established by the reviewed page
        evidence:
          - resourceId: cursor-usage-limits
            type: documented
            observedAt: 2026-08-28
---

This row asks whether operators can see consumption close enough to a run to diagnose and control cost. Useful meters separate input, output, reasoning, and cached tokens; tool and connector calls; hosted sandbox or GPU time; storage; media processing; and parent versus sub-agent usage.

Evidence should record update delay, estimated versus final values, price mapping, currencies, user/project/organization attribution, export API, budgets and alerts, model routing, and treatment of retries and failed runs. A monthly invoice total is only partial operational visibility.
