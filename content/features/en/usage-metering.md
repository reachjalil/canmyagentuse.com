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
updated: 2026-09-01
published: 2026-08-28
category: operations
summary: Inspect documented product usage such as requests, tokens, or cost.
specLabel: Common product term
aliases: [cost meter, token usage, spend dashboard, usage dashboard]
parent: usage-and-reliability
related: [prompt-cache-telemetry, context-usage-visibility, rate-limit-disclosure]
notes:
  - id: 85
    text: "Evidence checked 2026-09-01: Grok's current web/app FAQ describes one shared weekly usage pool across Grok products and says it provides clear usage visibility in one place. The reviewed FAQ does not establish token, cost, per-run, tool, or export telemetry."
  - id: 84
    text: "Evidence checked 2026-08-29: Gemini web exposes a Usage Limits view and near-limit or exhausted-limit notifications with refresh timing, and Deep Research reports remaining daily research requests when the user is near that feature's limit."
  - id: 83
    text: "Evidence checked 2026-08-29: Microsoft documents plan-specific consumer AI credits and feature-use limits, including Copilot Chat, Pages, Agents, Vision, and Voice, and tells users to inspect limit and credit status through Microsoft Account Services and subscriptions. This is account and plan metering, not per-conversation token, tool, or monetary-cost telemetry."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 reports sent and received tokens and, when pricing metadata exists, estimated cost for the current message and accumulated CLI session."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp reports per-thread token and cost statistics, shows current cost in thread UI, and exposes the credit balance through amp usage."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer Analytics reports daily credit consumption, model and credit-source breakdowns, connectors, skills, Projects, artifacts, and task duration for personal and organization views."
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
  - id: 52
    text: "Evidence checked 2026-08-29: Warp reports per-turn and conversation credits together with tool calls, context use, files changed, diffs, and account totals."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin reports per-session and account consumption through actions, VM time, bandwidth, ACUs, quota, remaining credits, and enterprise organization totals."
resources:
  - id: spacexai-grok-web-app-faq
    title: "SpaceXAI Docs — FAQ: Grok Website / Apps"
    href: https://docs.x.ai/grok/faq
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Usage & Limits — How do SuperGrok's weekly usage limits work?"
  - id: aider-v0860-coder-source-usage
    title: "Aider v0.86.0 — Coder runtime"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/coders/base_coder.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "calculate_and_show_tokens_and_cost and show_usage_report"
  - id: amp-2026-08-metering
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Assistant and result usage fields"
  - id: amp-2026-08-usage-balance
    title: "Amp — Pricing"
    href: https://ampcode.com/docs/pricing
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How Usage Is Charged"
  - id: perplexity-computer-analytics
    title: "Perplexity — Computer Analytics"
    href: https://www.perplexity.ai/help-center/en/articles/14855310-computer-analytics
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Organization administrators; members and Pro or Max users; FAQ"
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
  - id: warp-credits
    title: "Warp — Credits and billing"
    href: https://docs.warp.dev/support-and-community/plans-and-billing/credits
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tracking usage; credit calculation"
  - id: cognition-devin-usage
    title: "Cognition — Usage"
    href: https://docs.devin.ai/admin/billing/usage
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What counts toward usage; FAQs and account views"
  - id: microsoft-copilot-consumer-ai-credits-2026-07
    title: "AI credits and limits for Microsoft 365 subscriptions"
    href: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/ai-credits-and-limits-for-microsoft-365-subscriptions"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Limits and credits for each plan; How do I manage my feature limits and AI credits?"
  - id: google-gemini-web-usage-limits
    title: "Google Gemini Apps Help — Gemini Apps limits & upgrades for Google AI subscribers"
    href: "https://support.google.com/gemini/answer/16275805?hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "More info about limits — How to tell if you're close to a limit & when it refreshes; To view your usage limits"
  - id: google-gemini-web-deep-research
    title: "Google Gemini Apps Help — Use Deep Research in Gemini Apps"
    href: "https://support.google.com/gemini/answer/15719111?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "About Deep Research models & limits"
support:
  - harness: grok-web
    versions:
      - track: current
        status: partial
        noteIds: [85]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Grok website and apps FAQ observation
          observedAt: 2026-09-01
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: SuperGrok combines Chat, Imagine, Voice, and Build consumption into a shared weekly pool with stated visibility in one place
          - type: format
            value: token, cost, per-run, tool, export, attribution, refresh-delay, and billing-final dimensions are not established by the reviewed FAQ
        evidence:
          - resourceId: spacexai-grok-web-app-faq
            type: documented
            observedAt: 2026-09-01
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [84]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini web usage documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "the general usage-limits article is scoped to personal Google Accounts"
          - type: runtime
            value: "reports compute-based five-hour and weekly allowance state plus Deep Research daily requests remaining; no token or dollar meter is documented"
          - type: plan
            value: "limits vary among no plan, Google AI Plus, Google AI Pro, and Google AI Ultra"
        evidence:
          - resourceId: google-gemini-web-usage-limits
            type: documented
            observedAt: 2026-08-29
          - resourceId: google-gemini-web-deep-research
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [83]
        target:
          kind: dated-documentation
          revision: "Microsoft consumer Copilot AI credits and limits, last updated July 2026"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Microsoft 365 Personal, Family, and Premium have different feature limits and AI-credit allowances; benefits are limited to the subscription owner"
          - type: auth
            value: "status is inspected in the signed-in Microsoft account Services and subscriptions page"
          - type: runtime
            value: "account-level feature and credit status; no run-level tokens, latency, tool usage, or cost breakdown is documented"
        evidence:
          - resourceId: microsoft-copilot-consumer-ai-credits-2026-07
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "report distinguishes sent, received, cache-write, and cache-hit tokens when provider usage fields exist"
          - type: runtime
            value: "displayed cost is an estimate from response or embedded model metadata, not a final provider invoice"
          - type: policy
            value: "organization budgets, billing-period totals, and administrative usage exports are not established"
        evidence:
          - resourceId: aider-v0860-coder-source-usage
            type: documented
            observedAt: 2026-08-29
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
          - type: format
            value: "streaming output reports input, cache, output, duration, and turn fields; UI and amp usage expose monetary or credit totals"
        evidence:
          - resourceId: amp-2026-08-metering
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-usage-balance
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
            value: "personal analytics is available to Pro, Max, and organization members; organization-wide export requires an administrator"
          - type: runtime
            value: "analytics refresh once daily, so the newest complete data is typically from the prior day"
        evidence:
          - resourceId: perplexity-computer-analytics
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "Enterprise ACUs or self-serve quota plus prepaid on-demand credits"
          - type: plan
            value: "per-session use is broadly visible; account-wide views vary by self-serve or Enterprise administration"
        evidence:
          - resourceId: cognition-devin-usage
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "ordinary shell commands do not consume Warp credits"
          - type: policy
            value: "consumption varies with model, tokens, context, tools, and task complexity"
        evidence:
          - resourceId: warp-credits
            type: documented
            observedAt: 2026-08-29
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
