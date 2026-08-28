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
specLabel: Product capability
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop can connect to hosted OpenWork Cloud workers; the background-run claim is conditional on that remote worker and an active Cloud subscription."
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
---

Keep a run going after the operator leaves the session.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
