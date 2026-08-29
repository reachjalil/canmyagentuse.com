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
updated: 2026-08-29
published: 2026-08-28
category: tools
summary: Control a browser for navigation, clicks, forms, and page reading.
specLabel: Common product term
highlight: false
notes:
  - id: 79
    text: "Evidence checked 2026-08-29: Gemini Spark in the Gemini web app can open a remote browser, navigate websites, interact with pages such as by adding items to a cart, and hand browser control to the user."
  - id: 78
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork can navigate, click, and fill forms in a built-in browser or the user's Chrome browser, with availability tied to Cowork and connector or computer-use configuration."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT Work on the web can use an isolated cloud browser to read pages, click controls, fill forms, and complete supported steps on public and signed-in websites."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 retains browser_action automation for Chromium navigation, screenshots, clicking, typing, and scrolling in the legacy VS Code runtime, while the same release's exhaustive ClineCore tool table omits browser automation."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue documents Agent-mode browser navigation through a configured Playwright MCP server, including navigating a site and saving extracted headlines; browser automation is not a built-in default tool."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer documents attended tasks that drive a browser for booking, form filling, and site login inside its hosted task workflow."
  - id: 9
    text: "Evidence checked 2026-08-29: Replit Agent App Testing navigates a real project-preview browser, clicks controls, enters mock data, and validates workflows, but it is restricted to specified Replit web-app types and can require operator takeover."
  - id: 8
    text: "Evidence checked 2026-08-29: Warp's browser-driving tools are confined to Computer Use in sandboxed cloud environments, and the documentation explicitly says Computer Use is unavailable in local interactive terminal sessions."
  - id: 7
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0 documents a Chrome DevTools extension for browser navigation, login interaction, button clicks, DOM queries, and web-performance inspection."
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
  - id: 60
    text: "Evidence checked 2026-08-29: Preview Copilot Tasks can browse, click, scroll, type, and navigate websites on a user's behalf with observable progress and takeover controls."
issues: []
resources:
  - id: anthropic-claude-desktop-browser-use
    title: "Anthropic — Let Claude use your computer in Cowork"
    href: https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How computer use works with Cowork — browser operation; Current limitations"
  - id: openai-chatgpt-web-cloud-browser
    title: "OpenAI — Using cloud browser in ChatGPT"
    href: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "opening capability statement; Availability; Start a cloud browser task; limitations FAQ"
  - id: cline-v4-1-16-browser-automation
    title: "Cline v4.1.16 — BrowserSession"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/browser/BrowserSession.ts#L155-L225"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "launchBrowser; browser actions and results at lines 378–591"
  - id: continue-v2-playwright-mcp
    title: "Continue v2.0.0 — Playwright MCP Agent-mode example"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/customize/deep-dives/mcp.mdx#L14-L50
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Playwright browser-navigation quick start"
  - id: perplexity-scheduled-computer-tasks
    title: "Perplexity — Scheduled Tasks in Computer"
    href: https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Background versus attended tasks"
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
  - id: goose-chrome-devtools-v1-48
    title: Goose — Chrome DevTools Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/chrome-devtools-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI configuration and browser-automation examples"
  - id: warp-local-computer-use-exclusion
    title: Warp — Computer Use for agents
    href: https://docs.warp.dev/agents/capabilities/computer-use/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Capabilities — explicit local-session exclusion; Browser use"
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
    locator: "How Copilot Tasks works; browser-based tasks"
  - id: google-gemini-web-spark-tasks
    title: "Google Gemini Apps Help — Use Gemini Spark to manage your tasks & workflows in Gemini Apps"
    href: "https://support.google.com/gemini/answer/17094507?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What you need; Monitor & take over a task; Delete remote browser & computer data; Remote browser & computer"
support:
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Spark web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: experimental
            value: "Gemini Spark is described as an experimental feature in early development"
          - type: plan
            value: "requires a Google AI Pro or Ultra subscription"
          - type: auth
            value: "requires age 18 or over, a personal Google Account, and Keep Activity enabled; unavailable to work or school accounts"
          - type: region
            value: "available where Gemini Apps are supported except the European Economic Area, Nigeria, Switzerland, and the United Kingdom"
          - type: runtime
            value: "the supported web-app path uses Spark's separate hosted remote browser; local Chrome auto browse is a distinct Gemini-in-Chrome surface and is not included in this claim"
        evidence:
          - resourceId: google-gemini-web-spark-tasks
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
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
          - type: runtime
            value: "Cowork inside Claude Desktop can use its built-in browser; broader screen-driven operation is a Pro/Max research preview"
          - type: auth
            value: "using the user's Chrome browser requires the Claude in Chrome connector to be enabled"
          - type: policy
            value: "the user grants computer-use and per-app permissions; some sites or actions may still require manual participation"
        evidence:
          - resourceId: anthropic-claude-desktop-browser-use
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "available in ChatGPT Work on eligible paid plans in supported regions, excluding Free and Go, subject to rollout and workspace permissions"
          - type: runtime
            value: "remote isolated browser with its own cookies and sign-ins; site automation controls may block tasks"
          - type: policy
            value: "ChatGPT may use a connected app or plugin instead and may require operator takeover or a final manual step"
        evidence:
          - resourceId: openai-chatgpt-web-cloud-browser
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: partial
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "legacy VS Code runtime with local headless Chromium or an optional remote Chrome debugging connection; absent from the ClineCore built-in-tool inventory"
          - type: format
            value: "navigation, screenshots, click, type, and scroll actions"
        evidence:
          - resourceId: cline-v4-1-16-browser-automation
            type: documented
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: partial
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires separately available and configured @playwright/mcp plus its browser dependencies"
          - type: policy
            value: "MCP is available only in Agent mode and calls remain subject to approval policy"
        evidence:
          - resourceId: continue-v2-playwright-mcp
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "browser-driving work is classified as attended and runs inside Computer's hosted task workflow"
          - type: policy
            value: "a task that needs input surfaces Needs attention rather than guessing"
        evidence:
          - resourceId: perplexity-scheduled-computer-tasks
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
            value: "preview browser-based Tasks; website support and usage limits may vary"
          - type: policy
            value: "operator can observe, interrupt, stop, or take control"
        evidence:
          - resourceId: microsoft-copilot-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: no
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "status is scoped to the local Warp agent in the desktop app; cloud agents are a separate hosted environment"
          - type: runtime
            value: "bundled Chromium, visual interaction, and Playwright control are documented only for Computer Use cloud environments"
        evidence:
          - resourceId: warp-local-computer-use-exclusion
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [7]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires adding and enabling the Chrome DevTools MCP extension"
          - type: runtime
            value: "requires Node.js and a compatible local Chrome environment"
          - type: host-role
            value: "scope is Chrome-browser automation rather than arbitrary desktop-application control"
          - type: policy
            value: "site authentication and permitted interactions depend on the local browser and target site"
        evidence:
          - resourceId: goose-chrome-devtools-v1-48
            type: documented
            observedAt: 2026-08-29
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
        status: partial
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: native App Testing is limited to the web application built in the Replit project's browser preview
          - type: runtime
            value: current documentation limits support to Full Stack JavaScript and Streamlit Python web applications
          - type: feature-flag
            value: App Testing is an advanced Agent setting and Agent decides when testing is appropriate
          - type: auth
            value: login or CAPTCHA roadblocks can require the operator to use Take over
          - type: policy
            value: exact mode or plan availability is omitted because current Replit pages use conflicting mode names
        evidence:
          - resourceId: replit-app-testing-current
            type: documented
            observedAt: 2026-08-29
---

Drive a browser for clicks, forms, and navigation.

The sourced OpenWork cell is limited to its first-party browser. Grok Bot instead drives a browser on its hosted computer and uses an explicit takeover path for sensitive steps. Neither cell silently generalizes to the operator's local desktop or to unrestricted access across every site.

Use the Markdown and JSON twins if you are an agent reading this site.
