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
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop can open pages, click, fill forms, read content, and take screenshots through the enabled first-party OpenWork Browser."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot's persistent cloud computer includes a browser that a Bot can navigate and use; the operator can watch clicks, typing, navigation, and status or take over for sensitive steps."
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
  - id: xai-grok-bot-browser
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
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
            value: automation runs in the persistent cloud computer's browser rather than the operator's local browser
          - type: policy
            value: passwords, passkeys, verification codes, CAPTCHAs, payments, and human-required steps should use operator takeover
        evidence:
          - resourceId: xai-grok-bot-browser
            type: documented
            observedAt: 2026-08-28
---

Drive a browser for clicks, forms, and navigation.

The sourced OpenWork cell is limited to its first-party browser. Grok Bot instead drives a browser on its hosted computer and uses an explicit takeover path for sensitive steps. Neither cell silently generalizes to the operator's local desktop or to unrestricted access across every site.

Use the Markdown and JSON twins if you are an agent reading this site.
