---
title: Model fallback visibility and control
description: Detect, configure, or prevent a run from switching to another model after capacity, policy, or service failures.
slug: model-fallback
locale: en
seoTitle: Model fallback visibility and control — Can My Agent Use
socialTitle: Model fallback visibility and control
socialDescription: Compare fallback routing, disclosure, opt-out, and retry behavior across harnesses.
llmSummary: Model fallback covers documented switching after capacity, policy, or service failures; automatic routing is partial when the selected model and reason are not visible.
audience: Engineers who need predictable model behavior and reproducible runs.
contentKind: feature
status: published
tags: [models, routing, reliability, observability]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Detect, configure, or prevent fallback to another model during a run.
specLabel: Common product term
aliases: [model failover, automatic model routing, fallback model]
parent: models-and-context
related: [model-selection, resumable-runs]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents automatic model failover for Grok Bot and says usage analytics show the model that actually served each request, including failovers. Users and administrators cannot choose models or disable fallback."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI enables model fallback by default after quota or server errors, normally prompts before switching, and can apply policy-authorized silent fallback for a turn or session. Some internal utility calls use a separate silent fallback chain."
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
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
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
