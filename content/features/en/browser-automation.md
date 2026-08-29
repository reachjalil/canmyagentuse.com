---
title: Browser automation
description: Control a browser for navigation, clicks, forms, and page reading.
slug: browser-automation
locale: en
seoTitle: "Browser automation — Can My Agent Use"
socialTitle: Browser automation
socialDescription: Compare browser navigation, click, form, page-reading, and screenshot support.
llmSummary: Browser automation controls a web browser for navigation and page interaction. Browser-only automation is distinct from general operating-system control.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Control a browser for navigation, clicks, forms, and page reading.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop can open pages, click, fill forms, read content, and take screenshots through the enabled first-party OpenWork Browser."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot's persistent cloud computer includes a browser that a Bot can navigate and use; the operator can watch clicks, typing, navigation, and status or take over for sensitive steps."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor Agent can navigate, click, type, scroll, and capture screenshots in its integrated browser."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code agents can navigate, read, screenshot, click, type, hover, drag, and handle dialogs in the integrated browser."
  - id: 5
    text: "Evidence checked 2026-08-28: Devin provides native browser tools and a Chrome CDP endpoint for Playwright-driven navigation, form filling, clicks, and redirects inside its hosted session."
  - id: 6
    text: "Evidence checked 2026-08-28: Replit Agent App Testing navigates, clicks, enters mock data, validates forms and workflows, and records browser replays for supported web-app types."
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
  - id: cursor-browser-automation
    title: Cursor — Browser tools
    href: https://prod.cursor.com/docs/agent/tools/browser
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Browser actions
  - id: vscode-browser-automation
    title: Microsoft — Use browser tools with agents
    href: https://code.visualstudio.com/docs/agents/run/browser-tools
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Browser tools and interactions
  - id: devin-browser-automation
    title: Devin — Computer Use
    href: https://docs.devin.ai/work-with-devin/computer-use
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Scripted browser use via Playwright
  - id: replit-browser-automation
    title: Replit — App Testing
    href: https://docs.replit.com/features/agent/app-testing
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Testing process and key capabilities
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
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor browser-tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: automation is scoped to Cursor's integrated browser rather than arbitrary desktop applications
          - type: policy
            value: enterprise MCP origin policy can restrict browser access
        evidence:
          - resourceId: cursor-browser-automation
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code browser-tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: automation is scoped to the VS Code integrated browser
          - type: policy
            value: organization policy can disable browser tools
        evidence:
          - resourceId: vscode-browser-automation
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Devin Computer Use documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: actions run in Devin's hosted Chrome session, including native browser tools or Playwright attached through the documented CDP endpoint
          - type: policy
            value: authentication, MFA, and CAPTCHA steps can require operator takeover
        evidence:
          - resourceId: devin-browser-automation
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Replit Agent App Testing documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: automation is limited to testing web applications built in the Replit project preview
          - type: plan
            value: App Testing is enabled for Economy or Power mode and disabled in Lite mode
          - type: policy
            value: currently limited to Full Stack JavaScript and Streamlit Python web applications; login or CAPTCHA roadblocks can require takeover
        evidence:
          - resourceId: replit-browser-automation
            type: documented
            observedAt: 2026-08-28
---

Drive a browser for clicks, forms, and navigation.

The sourced OpenWork cell is limited to its first-party browser. Grok Bot instead drives a browser on its hosted computer and uses an explicit takeover path for sensitive steps. Neither cell silently generalizes to the operator's local desktop or to unrestricted access across every site.

Use the Markdown and JSON twins if you are an agent reading this site.
