---
title: Plans and pricing
description: Compare documented subscription, seat, usage, credit, overage, and enterprise pricing.
slug: plan-pricing-disclosure
locale: en
seoTitle: Agent harness plans and pricing — Can My Agent Use
socialTitle: Plans and pricing
socialDescription: Compare published subscription, seat, included-usage, credit, overage, and enterprise pricing by exact harness.
llmSummary: Plans and pricing records documented subscription and seat prices, billing periods, included usage, credits or overages, API-key billing, taxes, and custom enterprise terms without treating a model API rate as the price of a hosted product.
audience: Buyers, engineers, finance teams, and administrators comparing the total cost of agent harnesses.
contentKind: feature
status: published
tags: [operations, pricing, plans, billing]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Compare documented plan, seat, included-usage, credit, and overage pricing by exact product.
specLabel: Measured product property
aliases: [pricing, subscription cost, seat price, credits, overage pricing]
parent: usage-and-reliability
related: [usage-metering, rate-limit-disclosure]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenAI publishes ChatGPT Work and Codex prices of $0 monthly for Free, $8 for Go, $20 for Plus, Pro from $100 with 5x and 20x tiers, and Business at $20 per user monthly when billed annually or $25 monthly; Enterprise and Edu require sales contact. ChatGPT-authenticated surfaces share usage, while API-key use is billed separately at API rates."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic publishes Claude Free at $0, Pro at $17 monthly with annual prepayment or $20 month-to-month, Max from $100 monthly, Team standard seats at $20 annually or $25 monthly and premium seats at $100 annually or $125 monthly, plus Enterprise seat and usage pricing. Claude web, desktop, Code, and Cowork entitlements differ by plan."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor publishes Hobby as free, Individual Pro at $20 monthly with higher Pro+ and Ultra usage tiers, Teams Standard at $40 per user monthly with a Premium tier, and custom Enterprise pricing. Included model usage, optional on-demand usage, taxes, and enterprise invoicing are separate boundaries."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI's plans page identifies Free, Google AI Pro, Google AI Ultra, Google Developer Program, AI Studio pay-as-you-go, and Vertex AI paths and their usage or privacy distinctions, but delegates exact subscription amounts to linked plan pages."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openai-work-pricing
    title: OpenAI — ChatGPT Work and Codex pricing
    href: https://learn.chatgpt.com/docs/pricing
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Pricing options; usage limits; tokens and credits
  - id: anthropic-claude-pricing
    title: Anthropic — Claude plans and pricing
    href: https://claude.com/pricing
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Individual; Team and Enterprise; models and usage
  - id: cursor-pricing
    title: Cursor — Pricing
    href: https://cursor.com/pricing
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Individual; Teams; Enterprise; usage-based pricing
  - id: google-gemini-cli-plans
    title: Google — Gemini CLI plans
    href: https://geminicli.com/plans/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Individual; team; API key
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work pricing observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Free $0 monthly; Go $8 monthly; Plus $20 monthly; Pro from $100 monthly with 5x and 20x tiers; Business $20 per user monthly billed annually or $25 month-to-month; Enterprise and Edu contact sales
          - type: policy
            value: ChatGPT Work and Codex share usage, credits, and limits; eligible plans can buy additional credits and taxes or regional pricing may differ
        evidence:
          - resourceId: openai-work-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT desktop pricing observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: desktop access and shared ChatGPT Work or Codex usage follow the eligible ChatGPT plan; Free, Go, Plus, Pro, Business, Edu, and Enterprise paths and prices are documented
          - type: runtime
            value: desktop Voice has a separate plan-dependent allowance and credit rate while tasks started through Voice still consume the Codex task budget
        evidence:
          - resourceId: openai-work-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Codex CLI pricing observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: ChatGPT authentication uses the published shared plan and credit structure; API-key authentication is usage-based at separate API model rates and omits cloud-only integrations
          - type: plan
            value: Free, Go, Plus, Pro 5x or 20x, Business, Enterprise, and Edu paths are documented with current self-service prices or a contact-sales boundary
        evidence:
          - resourceId: openai-work-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude pricing observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Free $0; Pro $17 monthly with annual prepayment or $20 monthly; Max from $100 monthly; Team and Enterprise seat and usage paths are documented
          - type: policy
            value: applicable taxes, usage limits, seat type, billing cycle, credits, and plan-specific models or features can change total cost
        evidence:
          - resourceId: anthropic-claude-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude desktop pricing observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Claude desktop access is listed across current individual and managed plans, with the same published subscription or seat prices and plan-specific usage boundaries
          - type: policy
            value: desktop extensions, enterprise deployment, Cowork, models, and usage entitlements vary by plan
        evidence:
          - resourceId: anthropic-claude-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Code pricing observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: Claude Code is included with Pro, Max, Team, and Enterprise paths; Team standard and premium seats and Enterprise seat-plus-usage pricing are published
          - type: auth
            value: API and third-party provider authentication follow separate per-token or cloud-provider billing rather than Claude subscription entitlements
        evidence:
          - resourceId: anthropic-claude-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor pricing observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: Hobby is free; Individual Pro is $20 monthly with Pro+ and Ultra usage tiers; Teams Standard is $40 per user monthly with a Premium tier; Enterprise is custom
          - type: policy
            value: every plan includes model usage; optional on-demand use is billed in arrears, taxes are excluded, and invoice or wire payment requires Enterprise
        evidence:
          - resourceId: cursor-pricing
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini CLI plans observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: Google Account Free, Google AI Pro or Ultra, Google Developer Program, AI Studio API key, and Vertex AI authentication and billing paths are documented
          - type: plan
            value: the reviewed Gemini CLI plans page describes usage and privacy differences but delegates exact Google AI subscription prices to linked plan details
        evidence:
          - resourceId: google-gemini-cli-plans
            type: documented
            observedAt: 2026-08-28
---

The sticker price of an agent harness is only one part of its cost. This row records subscription and seat prices, billing cycle, included usage, model or task pools, credit conversion, on-demand or overage pricing, API-key alternatives, taxes, minimum seats, and the boundary where an enterprise quote is required.

Every amount is time-sensitive and must retain its review date, currency, billing cadence, plan, region, authentication mode, and exact surface. A model provider's token rate does not automatically describe a hosted chat or coding product, and an included subscription does not imply unlimited model, media, tool, cloud-compute, or subagent usage.
