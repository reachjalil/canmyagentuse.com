---
title: Scheduled runs
description: Start a task on a timer without a human prompt, with current Grok Bot routine evidence.
slug: scheduled-runs
locale: en
seoTitle: "Scheduled runs — Can My Agent Use"
socialTitle: Scheduled runs
socialDescription: Current scheduled-run support for Grok Bot routines, including background execution and retention limits.
llmSummary: Grok Bot routines can run a saved workflow on a schedule, including while the operator's laptop is closed. A Bot owns at most 50 routines, the app keeps 20 recent run records per routine, and unattended routines can be paused after a long absence.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Start a task on a timer without a human prompt.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot routines can run a workflow on a schedule, show the next run, execute while the operator's laptop is closed, and retain the 20 most recent run records; each Bot can own up to 50 routines."
issues: []
resources:
  - id: xai-grok-bot-routines
    title: xAI — Grok Bot skills and routines
    href: https://docs.x.ai/grok-bot/skills-routines-and-automations
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Create a routine
support:
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
            value: each Bot can own up to 50 routines and the app keeps the 20 most recent run records per routine
          - type: policy
            value: unattended routines may be paused after a long absence and consequential actions should remain approval-gated
        evidence:
          - resourceId: xai-grok-bot-routines
            type: documented
            observedAt: 2026-08-28
---

Start a task on a timer without a human prompt.

Grok Bot's sourced cell covers product-native routines owned by one Bot. It does not establish unlimited unattended operation, guaranteed event delivery, or identical retention for the conversation and run history.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
