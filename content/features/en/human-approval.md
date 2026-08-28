---
title: Human approval
description: Pause before a tool or write until a person confirms, with current OpenWork Desktop evidence.
slug: human-approval
locale: en
seoTitle: "Human approval — Can My Agent Use"
socialTitle: Human approval
socialDescription: Human-approval support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop surfaces OpenCode permission requests and lets the operator allow once, allow always, or deny. Approval behavior still depends on workspace policy and runtime configuration.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Pause before a tool or write until a person confirms.
specLabel: Product capability
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop surfaces permission requests and documents allow-once, always-allow, and deny responses."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-permissions
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: effective prompts depend on workspace and server approval configuration
        evidence:
          - resourceId: openwork-permissions
            type: documented
            observedAt: 2026-08-28
---

Pause before a tool or write until a person confirms.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
