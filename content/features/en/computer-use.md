---
title: Computer use
description: Interact with a visual interface using screenshots, clicks, typing, and navigation.
slug: computer-use
locale: en
seoTitle: Computer use compatibility — Can My Agent Use
socialTitle: Can my agent use a computer interface?
socialDescription: Compare screenshot-informed visual interaction by exact product surface.
llmSummary: Computer use is screenshot-informed interaction with a graphical interface through input actions. Browser-only and general desktop control are recorded separately.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [runtime, browser, visual-interaction]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Inspect and act on a visual interface through screenshots and input actions.
specLabel: Common product term
aliases: [GUI automation, visual browser, browser control]
related: [browser-automation, screenshots]
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT Work can use a separate cloud browser to read pages, click, enter form data, and continue supported tasks, but access varies by paid plan, region, rollout, and workspace permission."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor Agent can navigate, click, type, scroll, and capture screenshots in its integrated browser; this is browser control, not general operating-system GUI control."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code agents can navigate, read, screenshot, click, type, hover, drag, and handle dialogs in the integrated browser; organization policy can disable the tools."
  - id: 4
    text: "Evidence checked 2026-08-28: OpenWork Desktop's first-party browser can open pages, click, fill forms, read page content, and take screenshots; OpenWork explicitly distinguishes this from general operating-system control."
  - id: 5
    text: "Evidence checked 2026-08-28: Grok Bot exposes a persistent hosted computer with browser and desktop tools. The operator can watch clicks, typing, and navigation, take over sensitive steps, and let work continue after closing the preview."
  - id: 6
    text: "Evidence checked 2026-08-28: Devin's hosted session exposes a full desktop environment and native Computer Use for browser and desktop-app testing, including Electron applications."
  - id: 7
    text: "Evidence checked 2026-08-28: Replit Agent visually clicks, navigates, enters mock data, and validates applications in a real browser preview; it does not establish general operating-system control."
issues: []
resources:
  - id: openai-cloud-browser
    title: OpenAI — Using cloud browser in ChatGPT
    href: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-browser
    title: Cursor — Browser tools
    href: https://prod.cursor.com/docs/agent/tools/browser
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-browser-tools
    title: Visual Studio Code — Use browser tools with agents
    href: https://code.visualstudio.com/docs/agents/run/browser-tools
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openwork-browser
    title: OpenWork — Control the browser
    href: https://openworklabs.com/docs/start-here/do-work-with-it/control-the-browser
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-computer
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: devin-computer-use
    title: Devin — Computer Use
    href: https://docs.devin.ai/work-with-devin/computer-use
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Desktop and Electron application testing
  - id: replit-app-testing-computer-use
    title: Replit — App Testing
    href: https://docs.replit.com/features/agent/app-testing
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Testing process and key capabilities
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: paid ChatGPT plan required
          - type: region
            value: supported regions only
          - type: policy
            value: workspace permission and site restrictions apply
        evidence:
          - resourceId: openai-cloud-browser
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor browser documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: integrated browser only
          - type: policy
            value: enterprise MCP origin policy can restrict access
        evidence:
          - resourceId: cursor-browser
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code browser-tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: integrated browser only
          - type: policy
            value: organization policy can disable browser tools
        evidence:
          - resourceId: vscode-browser-tools
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current OpenWork Browser documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: first-party OpenWork Browser only; no general desktop-app control
          - type: policy
            value: OpenWork Browser extension must be enabled
        evidence:
          - resourceId: openwork-browser
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: computer use runs on an account-scoped hosted Linux VM; all Bots for the account share its files, sessions, and credentials
          - type: policy
            value: one Bot can run one computer-use task on its screen at a time; sensitive steps should use operator takeover
        evidence:
          - resourceId: xai-grok-bot-computer
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Devin Computer Use documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: computer use runs inside Devin's hosted desktop environment rather than on the operator's local computer
          - type: policy
            value: authentication, MFA, and CAPTCHA steps can require operator takeover
        evidence:
          - resourceId: devin-computer-use
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Replit Agent App Testing documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: visual interaction is limited to the Replit project browser preview and does not include general desktop-app or operating-system control
          - type: plan
            value: App Testing is enabled for Economy or Power mode and disabled in Lite mode
          - type: policy
            value: currently limited to Full Stack JavaScript and Streamlit Python web applications
        evidence:
          - resourceId: replit-app-testing-computer-use
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the exact harness can inspect a rendered visual state and perform direct input actions. It distinguishes broad computer or GUI control from a browser-only feedback loop.

That distinction matters: a coding harness can fully automate its integrated browser while leaving desktop applications and operating-system controls outside scope. Plan, region, policy, and runtime boundaries remain attached to each sourced cell.
