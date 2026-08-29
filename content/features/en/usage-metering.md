---
title: Usage metering
description: Report documented product usage such as requests, tokens, or cost.
slug: usage-metering
locale: en
seoTitle: Usage metering compatibility — Can My Agent Use
socialTitle: Usage metering
socialDescription: Compare documented request, token, project, or cost usage reporting.
llmSummary: Usage metering reports documented consumption such as requests, tokens, or cost; available dimensions and reporting delay are qualifiers.
audience: Engineers and administrators controlling agent spend.
contentKind: feature
status: published
tags: [operations, usage, cost, metering]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Inspect documented product usage such as requests, tokens, or cost.
specLabel: Common product term
aliases: [cost meter, token usage, spend dashboard, usage dashboard]
parent: usage-and-reliability
related: [prompt-cache-telemetry, context-usage-visibility, rate-limit-disclosure]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code's `/usage` screen reports current-session tokens by model, cache reads and writes, duration, code changes, and an estimated cost. Subscription users also receive plan-usage bars and attribution across skills, subagents, plugins, MCP servers, and scheduled tasks, with documented version and device-scope boundaries."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor's Spending dashboard reports real-time consumption for its separate monthly model pools, remaining allowance, on-demand charges, and request-level cost and pool details. The reviewed page does not establish a portable telemetry export or tool and subagent cost breakdown."
  - id: 3
    text: "Evidence checked 2026-08-28: ChatGPT's usage dashboard reports current limits and remaining capacity, while Codex CLI also exposes remaining limits through `/status`. OpenAI publishes a credit rate card separating input, cached input, and output consumption by model, but task-level consumption varies with context, reasoning, tools, retrieval, and caching."
  - id: 4
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI exposes `/usage` as a built-in informational command for current usage, and its model picker and credit-limit controls document session-level consumption boundaries."
  - id: 5
    text: "Evidence checked 2026-08-28: VS Code's agent-session context control reports total AI credits consumed by the current session alongside context-token usage."
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
  - id: openai-work-pricing-usage
    title: OpenAI — ChatGPT Work and Codex pricing and usage
    href: https://learn.chatgpt.com/docs/pricing
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Where can I see my current usage limits?; tokens and credits
  - id: github-copilot-cli-usage-command
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: /usage and --max-ai-credits
  - id: microsoft-vscode-session-context-usage
    title: Microsoft — Manage agent sessions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Manage session context
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT usage documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the account usage dashboard shows current limits and remaining capacity; the published rate card separates input, cached input, and output credits by model
          - type: plan
            value: ChatGPT Work and Codex share usage; included limits, flexible credits, and overage options vary by plan
        evidence:
          - resourceId: openai-work-pricing-usage
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Codex CLI usage documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /status reports remaining plan limits during an active session, and the account dashboard provides the broader current allowance
          - type: auth
            value: ChatGPT-plan authentication uses shared plan limits and credits; API-key authentication is billed separately at API token rates
          - type: policy
            value: context, reasoning, tools, retrieval, caching, execution mode, and model choice affect consumption, so prompt length alone does not predict usage
        evidence:
          - resourceId: openai-work-pricing-usage
            type: documented
            observedAt: 2026-08-28
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
        status: yes
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
  - harness: copilot-cli
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI command reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /usage is a documented informational command and --max-ai-credits sets a soft per-response ceiling; the reviewed page does not enumerate the meter's dimensions, delay, or billing-final status
        evidence:
          - resourceId: github-copilot-cli-usage-command
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code agent-session documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the session context control exposes total AI credits consumed, but the reviewed page does not establish request-level cost dimensions, export, or billing-final values
        evidence:
          - resourceId: microsoft-vscode-session-context-usage
            type: documented
            observedAt: 2026-08-28
---

This row asks whether operators can see consumption close enough to a run to diagnose and control cost. Useful meters separate input, output, reasoning, and cached tokens; tool and connector calls; hosted sandbox or GPU time; storage; media processing; and parent versus sub-agent usage.

Evidence should record update delay, estimated versus final values, price mapping, currencies, user/project/organization attribution, export API, budgets and alerts, model routing, and treatment of retries and failed runs. A monthly invoice total is only partial operational visibility.
