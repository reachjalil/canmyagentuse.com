---
title: Model fallback
description: Switch to another model after a capacity, policy, or service failure.
slug: model-fallback
locale: en
seoTitle: Model fallback compatibility — Can My Agent Use
socialTitle: Model fallback
socialDescription: Compare documented fallback routing, disclosure, configuration, and retry behavior.
llmSummary: Model fallback is documented switching to another model after a capacity, policy, or service failure. Disclosure, configuration, and opt-out behavior are recorded as qualifiers.
audience: Engineers who need predictable model behavior and reproducible runs.
contentKind: feature
status: published
tags: [models, routing, reliability, observability]
updated: 2026-08-29
published: 2026-08-28
category: models-context
summary: Switch to another model after a documented failure condition.
specLabel: Common product term
aliases: [model failover, automatic model routing, fallback model]
parent: models-and-context
related: [model-selection, resumable-runs]
notes:
  - id: 53
    text: "Evidence checked 2026-08-29: When a Google AI subscriber reaches a Gemini Apps model-usage limit, Google documents that the conversation can continue with Flash-Lite."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents automatic model failover for Grok Bot and says usage analytics show the model that actually served each request, including failovers. Users and administrators cannot choose models or disable fallback."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI enables model fallback by default after quota or server errors, normally prompts before switching, and can apply policy-authorized silent fallback for a turn or session. Some internal utility calls use a separate silent fallback chain."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code documents --fallback-model and the fallbackModel setting for automatically using an ordered fallback model or chain when the primary model is overloaded or unavailable."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents that Auto detects degraded output performance and automatically switches models. This is Auto-routing behavior rather than fallback for an explicitly pinned model."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 uses predefined fallback models when no model is assigned to a feature or the assigned choice is unavailable, without documenting a complete operator-controlled outage chain."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp automatically substitutes a predefined comparable fallback during provider outage or capacity failure and returns to the selected model when it recovers."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-models
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Models and providers
  - id: google-gemini-cli-model-routing
    title: Google — Gemini CLI model routing
    href: https://geminicli.com/docs/cli/model-routing/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How it works
  - id: anthropic-claude-code-fallback-model
    title: Anthropic — Claude Code CLI reference
    href: https://code.claude.com/docs/en/cli-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: CLI flags; --fallback-model
  - id: cursor-auto-model-switching
    title: Cursor — Models
    href: https://docs.cursor.com/advanced/models
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Auto
  - id: jetbrains-ai-custom-models
    title: JetBrains AI Assistant — Use third-party and local models
    href: https://www.jetbrains.com/help/ai-assistant/use-custom-models.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Assign models to AI features; predefined fallback models
  - id: warp-model-choice
    title: "Warp — Agent model choice"
    href: https://docs.warp.dev/agents/inference/model-choice/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Model fallback"
  - id: google-gemini-web-usage-limits
    title: "Google Gemini Apps Help — Gemini Apps limits & upgrades for Google AI subscribers"
    href: "https://support.google.com/gemini/answer/16275805?hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "More info about limits — What you can do when you reach a usage limit"
support:
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini web limits documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "fallback is documented for Google AI subscribers"
          - type: runtime
            value: "trigger is exhaustion of a five-hour or weekly model limit; configuration and opt-out behavior are not documented"
          - type: policy
            value: "capacity and usage limits may change without notice"
        evidence:
          - resourceId: google-gemini-web-usage-limits
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
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
          - type: policy
            value: "fallback uses a predefined Warp chain rather than an operator-selected chain"
          - type: runtime
            value: "Warp automatically switches back when the original model recovers"
        evidence:
          - resourceId: warp-model-choice
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: JetBrains chooses predefined fallbacks when no assigned model is available; a user-defined ordered failure chain is not documented
        evidence:
          - resourceId: jetbrains-ai-custom-models
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code CLI reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: --fallback-model or the fallbackModel setting supplies an ordered fallback model or comma-separated chain used when the primary model is overloaded or unavailable
          - type: policy
            value: fallback is operator-configured; the reviewed reference does not establish automatic fallback when no fallback model is configured
        evidence:
          - resourceId: anthropic-claude-code-fallback-model
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Models documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: automatic switching is documented for Auto when it detects degraded output performance, not for an explicitly pinned model
          - type: policy
            value: the operator must select Auto to delegate model selection and switching to Cursor
        evidence:
          - resourceId: cursor-auto-model-switching
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: automatic failover is documented and the serving model appears in usage analytics, but the operator cannot configure, select, or prevent fallback
        evidence:
          - resourceId: xai-grok-bot-team-models
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini CLI documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: model fallback is enabled by default and can trigger after quota or server errors; the CLI normally prompts for consent before switching
          - type: policy
            value: a routing policy can permit silent fallback for the current turn or remainder of the session; internal utility calls have a separate silent fallback chain
          - type: runtime
            value: the reviewed page identifies fallback behavior but does not provide an exported per-turn routing provenance record
        evidence:
          - resourceId: google-gemini-cli-model-routing
            type: documented
            observedAt: 2026-08-28
---

This row tracks whether a harness may retry or continue with a different model and what control the operator has over that change. Transparent, configurable fallback is distinct from silent automatic routing.

Evidence should record triggers, candidate models, changes in context or tool compatibility, whether the operator is notified, how provenance appears in logs or exports, and whether regulated or reproducible workflows can disable fallback.
