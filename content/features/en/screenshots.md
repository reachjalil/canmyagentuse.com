---
title: Screenshots
description: Capture a screen, window, or browser page for use as model input.
slug: screenshots
locale: en
seoTitle: "Screenshots — Can My Agent Use"
socialTitle: Screenshots
socialDescription: Compare screenshot capture scope by exact product surface.
llmSummary: Screenshot support captures a screen, window, or browser page for use as model input. Browser-only and arbitrary desktop capture are distinct qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
updated: 2026-08-29
published: 2026-08-28
category: perception
summary: Capture a screen, window, or browser page for use as model input.
specLabel: Common product term
highlight: false
notes:
  - id: 78
    text: "Evidence checked 2026-08-29: Claude Desktop Quick Entry on macOS can capture a selected screen region or attach an application window directly to an outgoing Claude message."
  - id: 1
    text: "Evidence checked 2026-08-28: the first-party OpenWork Browser can take screenshots during browser-control tasks; arbitrary desktop capture is not documented."
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code Copilot Chat can capture the current integrated-browser viewport and attach it as image context. Arbitrary desktop capture is not established by the current page."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI's optional browser agent can capture and analyze browser screenshots when a visual model is configured. The visual agent requires API-key or Vertex AI authentication and is unavailable with Sign in with Google."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin's hosted Computer Use loop captures screenshots of its remote desktop, identifies visual elements, acts, and captures the next screen state."
  - id: 60
    text: "Evidence checked 2026-08-29: Preview Copilot Tasks captures webpage screenshots to understand and complete browser-based tasks and retains them only for a limited period."
issues: []
resources:
  - id: anthropic-claude-desktop-quick-entry-screenshots
    title: "Anthropic — Use quick entry with Claude Desktop on Mac"
    href: https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Key features; Capture a screenshot; Share an application window; Permissions"
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
  - id: vscode-chat-context
    title: Visual Studio Code — Add context to chat
    href: https://code.visualstudio.com/docs/chat/copilot-chat-context
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add browser context
  - id: gemini-cli-browser-agent
    title: Gemini CLI — Subagents
    href: https://geminicli.com/docs/core/subagents/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Browser agent; visual agent
  - id: cognition-devin-computer-use
    title: "Cognition — Computer Use"
    href: https://docs.devin.ai/work-with-devin/computer-use
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What Is Computer Use?; How Computer Use Works"
  - id: microsoft-copilot-tasks
    title: "Microsoft — Using Copilot Tasks"
    href: https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What data Copilot Tasks uses and stores — Screenshots"
support:
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [78]
        target:
          kind: dated-documentation
          revision: "Anthropic Claude Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Claude Desktop Quick Entry on macOS; the documented feature is unavailable on Windows"
          - type: policy
            value: "requires macOS Screen Recording permission"
          - type: format
            value: "selected screen region or application-window image attached to the outgoing message"
        evidence:
          - resourceId: anthropic-claude-desktop-quick-entry-screenshots
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: preview
        status: yes
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Microsoft Copilot Tasks preview documentation observation"
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: runtime
            value: "screenshots are captured for browser tasks when Copilot controls the browser, not while the user has taken control"
          - type: policy
            value: "task screenshots are not used for training and have a limited unspecified retention period"
        evidence:
          - resourceId: microsoft-copilot-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "screenshots cover Devin's hosted 1024×768 remote Linux desktop, not the separate Devin Desktop product"
        evidence:
          - resourceId: cognition-devin-computer-use
            type: documented
            observedAt: 2026-08-29
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
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: 2026-08-26 VS Code chat-context documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the integrated browser can capture its current viewport and attach it as an image to Chat
          - type: runtime
            value: arbitrary desktop, application-window, and multi-monitor capture is not established by the current reviewed page
        evidence:
          - resourceId: vscode-chat-context
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI browser-agent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the optional browser agent gains an analyze_screenshot tool that captures a browser screenshot and sends it to a configured vision model
          - type: plan
            value: requires API-key or Vertex AI authentication and is unavailable with Sign in with Google
          - type: runtime
            value: browser-only capture does not establish arbitrary desktop, application-window, or multi-monitor screenshot support
        evidence:
          - resourceId: gemini-cli-browser-agent
            type: documented
            observedAt: 2026-08-28
---

Capture the current screen or window as context. OpenWork's sourced cell is deliberately partial because its documented screenshot path is limited to the first-party browser.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
