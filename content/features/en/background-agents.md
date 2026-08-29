---
title: Background agents
description: Keep a run going after the operator leaves the session, with conditional OpenWork Cloud evidence.
slug: background-agents
locale: en
seoTitle: "Background agents — Can My Agent Use"
socialTitle: Background agents
socialDescription: Background-agent support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop can connect to hosted OpenWork Cloud workers for remote agent execution. This cell is conditional because it depends on the hosted worker and subscription layer, not the default local desktop process alone.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Keep a run going after the operator leaves the session.
specLabel: Common product term
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop can connect to hosted OpenWork Cloud workers; the background-run claim is conditional on that remote worker and an active Cloud subscription."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot runs from a persistent cloud computer, continues when the desktop preview or operator laptop is closed, and can run scheduled routines in the background."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-cloud-workers
    title: OpenWork — Get started with OpenWork Cloud
    href: https://openworklabs.com/docs/cloud/get-started
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-background
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Watch computer work
support:
  - harness: openwork-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork Cloud documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: active OpenWork Cloud subscription required
          - type: runtime
            value: work runs on a connected hosted worker rather than the local desktop process
        evidence:
          - resourceId: openwork-cloud-workers
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: work runs on an account-scoped hosted computer and can continue after the desktop preview or operator laptop is closed
          - type: plan
            value: an eligible SuperGrok or Cursor plan is required
        evidence:
          - resourceId: xai-grok-bot-background
            type: documented
            observedAt: 2026-08-28
---

Keep a run going after the operator leaves the session.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
