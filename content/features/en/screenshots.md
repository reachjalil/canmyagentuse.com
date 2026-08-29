---
title: Screenshots
description: Capture the current screen or window as context, with qualified OpenWork Browser evidence.
slug: screenshots
locale: en
seoTitle: "Screenshots — Can My Agent Use"
socialTitle: Screenshots
socialDescription: Screenshot support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop's first-party OpenWork Browser can capture screenshots while automating web pages. This does not establish arbitrary desktop screenshot capture.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Capture the current screen or window as context.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the first-party OpenWork Browser can take screenshots during browser-control tasks; arbitrary desktop capture is not documented."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-screenshots
    title: OpenWork — Control the browser
    href: https://openworklabs.com/docs/start-here/do-work-with-it/control-the-browser
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
          revision: current OpenWork Browser documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: browser screenshots only; arbitrary desktop capture is not established
        evidence:
          - resourceId: openwork-screenshots
            type: documented
            observedAt: 2026-08-28
---

Capture the current screen or window as context. OpenWork's sourced cell is deliberately partial because its documented screenshot path is limited to the first-party browser.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
