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
updated: 2026-08-31
published: 2026-08-28
category: runtime
summary: Inspect and act on a visual interface through screenshots and input actions.
specLabel: Common product term
aliases: [GUI automation, visual browser, browser control]
related: [browser-automation, screenshots]
highlight: true
notes:
  - id: 79
    text: "Evidence checked 2026-08-31: cloud Devin exposes mouse, keyboard, screenshot, and browser or GUI interaction inside its hosted Linux VM when launched through eligible Devin Desktop access."
  - id: 78
    text: "Evidence checked 2026-08-29: Claude Desktop can click, type, navigate desktop apps, open files, and operate browsers through Cowork or Code, but Anthropic labels the capability a Pro/Max research preview."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exhaustive legacy tool enumeration and maintained ClineCore tool table provide browser-only interaction plus code, terminal, and file tools, with no general operating-system desktop-control tool."
  - id: 10
    text: "Evidence checked 2026-08-29: Replit Agent visually navigates, clicks, and enters mock data in a project-preview browser, but current documentation does not establish control of desktop applications or the hosted operating-system interface."
  - id: 9
    text: "Evidence checked 2026-08-29: Warp explicitly limits screenshot-informed Computer Use to sandboxed cloud environments and says it is unavailable in local interactive terminal sessions."
  - id: 8
    text: "Evidence checked 2026-08-29: on macOS, Goose CLI v1.48.0's opt-in Computer Controller uses screenshot-informed Peekaboo automation to identify interface elements, click, type, scroll, drag, navigate menus, and interact across desktop applications."
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
  - id: 60
    text: "Evidence checked 2026-08-29: Preview Copilot Tasks captures webpage screenshots and performs clicks, scrolling, and typing, but current documentation establishes browser interaction rather than general desktop application control."
issues: []
resources:
  - id: cognition-devin-computer-use-vm
    title: "Cognition — Computer use"
    href: https://docs.devin.ai/work-with-devin/computer-use
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Mouse, keyboard, screenshots, browser, and GUI in the Devin VM"
  - id: anthropic-claude-desktop-computer-use
    title: "Anthropic — Let Claude use your computer in Cowork"
    href: https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "availability; How computer use works with Cowork; Current limitations; Get started"
  - id: cline-v4-1-16-computer-use
    title: "Cline v4.1.16 — default tool enumeration"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/shared/tools.ts#L7-L35"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Exhaustive ClineDefaultTool enum; corroborated by the ClineCore built-in table"
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
  - id: goose-peekaboo-v1-48
    title: Goose — Computer control with Peekaboo at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/blog/2026-04-29-computer-controller-peekaboo/index.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Screenshot, identify, click, and type loop"
  - id: goose-computer-controller-v1-48
    title: Goose — Computer Controller Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/computer-controller-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI configuration and platform behavior"
  - id: warp-local-computer-use-exclusion
    title: Warp — Computer Use for agents
    href: https://docs.warp.dev/agents/capabilities/computer-use/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Capabilities — local-session exclusion; enabling Computer Use; setup and requirements"
  - id: replit-app-testing-current
    title: Replit — App Testing
    href: https://docs.replit.com/features/agent/app-testing
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How App Testing works; Testing Process; Key capabilities; Usage; Take over"
  - id: microsoft-copilot-tasks
    title: "Microsoft — Using Copilot Tasks"
    href: https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Browser-based tasks; screenshots and control"
support:
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: controls a cloud Devin Linux VM, not arbitrary applications on the operator's computer
          - type: plan
            value: Desktop access to cloud Devin depends on plan, administrator enablement, and rollout
        evidence:
          - resourceId: cognition-devin-computer-use-vm
            type: documented
            observedAt: 2026-08-31
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [78]
        target:
          kind: dated-documentation
          revision: "Anthropic Claude Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: "Pro and Max only; unavailable to Team and Enterprise in the reviewed documentation"
          - type: runtime
            value: "research-preview computer use in Cowork or Claude Code inside Claude Desktop on macOS or Windows; the app must remain open and the computer awake"
          - type: policy
            value: "the user enables computer use, grants per-app access, and on macOS grants Accessibility and Screen Recording permissions"
        evidence:
          - resourceId: anthropic-claude-desktop-computer-use
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: no
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "browser_action is limited to Chromium and does not control arbitrary operating-system applications"
        evidence:
          - resourceId: cline-v4-1-16-computer-use
            type: listed
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: preview
        status: partial
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Microsoft Copilot Tasks preview documentation observation"
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: runtime
            value: "browser-only screenshot-informed interaction in preview"
          - type: format
            value: "general operating-system or desktop-app control is not established"
        evidence:
          - resourceId: microsoft-copilot-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: no
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "status is scoped to the local Warp agent; the separately hosted cloud-agent environment supports Computer Use"
          - type: runtime
            value: "cloud Computer Use is isolated from the user's local machine, credentials, and desktop"
          - type: feature-flag
            value: "cloud runs started from the Warp app have Computer use in Cloud Agents off by default"
        evidence:
          - resourceId: warp-local-computer-use-exclusion
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [8]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "full screenshot-informed Peekaboo automation is macOS-only"
          - type: policy
            value: "the built-in Computer Controller must be enabled"
          - type: runtime
            value: "Windows and Linux fall back to shell-oriented automation and are not equivalent to the cited visual behavior"
          - type: runtime
            value: "fast-changing or custom-rendered interfaces can be unreliable, and one screenshot is processed per see command"
          - type: policy
            value: "moving the mouse or changing UI state during automation can invalidate the visual target"
        evidence:
          - resourceId: goose-peekaboo-v1-48
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-computer-controller-v1-48
            type: documented
            observedAt: 2026-08-29
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
        noteIds: [10]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: visual interaction is confined to the project browser preview and does not establish desktop-application or operating-system control
          - type: runtime
            value: current documentation limits support to Full Stack JavaScript and Streamlit Python web applications
          - type: feature-flag
            value: App Testing is an advanced Agent setting and is invoked selectively
          - type: auth
            value: login or CAPTCHA roadblocks can require operator takeover
          - type: policy
            value: exact mode or plan availability is omitted because current Replit pages use conflicting mode names
        evidence:
          - resourceId: replit-app-testing-current
            type: documented
            observedAt: 2026-08-29
---

This row asks whether the exact harness can inspect a rendered visual state and perform direct input actions. It distinguishes broad computer or GUI control from a browser-only feedback loop.

That distinction matters: a coding harness can fully automate its integrated browser while leaving desktop applications and operating-system controls outside scope. Plan, region, policy, and runtime boundaries remain attached to each sourced cell.
