---
title: Browser automation
description: Drive a browser for clicks, forms, and navigation, with current OpenWork Desktop evidence.
slug: browser-automation
locale: en
seoTitle: "Browser automation — Can My Agent Use"
socialTitle: Browser automation
socialDescription: Browser automation support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop can automate its first-party OpenWork Browser for navigation, clicks, form filling, page reading, and screenshots. This is not general operating-system control.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Drive a browser for clicks, forms, and navigation.
specLabel: Product capability
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop can open pages, click, fill forms, read content, and take screenshots through the enabled first-party OpenWork Browser."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-browser-automation
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
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork Browser documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: first-party OpenWork Browser only
          - type: policy
            value: OpenWork Browser extension must be enabled
        evidence:
          - resourceId: openwork-browser-automation
            type: documented
            observedAt: 2026-08-28
---

Drive a browser for clicks, forms, and navigation.

The sourced OpenWork cell is browser-scoped. It does not claim control over arbitrary desktop applications. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
