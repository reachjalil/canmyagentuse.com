---
title: Background agents
description: Keep a run going after the operator leaves the session.
slug: background-agents
locale: en
seoTitle: "Background agents — Can My Agent Use"
socialTitle: Background agents
socialDescription: Compare background execution by exact product surface.
llmSummary: Background agents continue running after the operator leaves the active session. Hosting, subscription, duration, and notification behavior are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-31
published: 2026-08-28
category: runtime
summary: Keep a run going after the operator leaves the session.
specLabel: Common product term
highlight: true
notes:
  - id: 82
    text: "Evidence checked 2026-08-31: Chrome WebMCP tools are ephemeral and tab-bound; once the user navigates away or closes the tab, the agent cannot access the site or continue its actions."
  - id: 81
    text: "Evidence checked 2026-08-31: an eligible cloud Devin session launched from Devin Desktop runs in a hosted VM and can continue after the operator closes the laptop."
  - id: 80
    text: "Evidence checked 2026-08-29: Claude web Cowork sessions can continue in Anthropic's cloud after the browser closes or computer sleeps, while local-file, browser, or native-computer access requires connected Desktop availability."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop can participate in cloud Work and scheduled-task workflows, but the reviewed docs only establish background continuation for remote cloud-browser tasks started on web or mobile."
  - id: 78
    text: "Evidence checked 2026-08-29: remote Cowork scheduled sessions can execute after Claude Desktop closes or the computer sleeps, while tasks that need local files or native apps require the desktop environment to remain available."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT Work cloud-browser tasks started on web can continue remotely after the user leaves the conversation or closes the computer, pausing for required input, sign-in, or confirmation."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 says a prompted Agent can finish while Zed is in the background and notify the operator, but it does not document continuation after the desktop process exits."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's VS Code client can attach to a ClineCore hub whose sessions survive window closure, but default auto mode may fall back to an in-process local runtime without shared persistent sessions."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI can start an orb thread that keeps working on a remote isolated machine while the operator's laptop is closed."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer runs tasks asynchronously in the hosted cloud while the operator is away, including recurring work that does not require the laptop to remain open."
  - id: 62
    text: "Evidence checked 2026-08-29: Gemini scheduled actions prepare requested content in the background for a later delivery time and mark the resulting web chat unread when it is ready; this establishes scheduled background execution, not arbitrary continuation of every interactive chat."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop can connect to hosted OpenWork Cloud workers; the background-run claim is conditional on that remote worker and an active Cloud subscription."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot runs from a persistent cloud computer, continues when the desktop preview or operator laptop is closed, and can run scheduled routines in the background."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor Desktop can start Cloud Agents in isolated hosted VMs that do not require the local machine to remain connected."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code can hand a task to a cloud agent on GitHub infrastructure, after which the operator can close VS Code and return later to the pull request."
  - id: 5
    text: "Evidence checked 2026-08-28: Replit Agent supports plan-limited background tasks in isolated task threads, but the reviewed page does not explicitly promise continuation after the browser is closed."
  - id: 6
    text: "Evidence checked 2026-08-28: Warp can hand work to Oz cloud agents that run in the background on hosted or customer infrastructure."
  - id: 53
    text: "Evidence checked 2026-08-29: Cognition's hosted batch guide explicitly starts parallel Devin sessions on separate machines, permits closing the laptop, and returns completed pull requests later."
  - id: 60
    text: "Evidence checked 2026-08-29: Preview scheduled Copilot Tasks can run unattended after required approvals are granted during setup and later deliver results for review."
  - id: 61
    text: "Evidence checked 2026-08-29: Grok Automations run on their own after setup, including before the user is awake or when matching email arrives, then save and report results."
issues: []
resources:
  - id: chrome-webmcp-ephemeral-lifecycle
    title: "Google Chrome — When to use WebMCP and MCP"
    href: https://developer.chrome.com/docs/ai/webmcp/compare-mcp
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Control UI access; ephemeral tab-bound lifecycle"
  - id: cognition-devin-desktop-background
    title: "Cognition — Devin in Desktop"
    href: https://docs.devin.ai/desktop/devin
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Cloud sessions; continue after laptop closes"
  - id: anthropic-claude-web-cowork-background
    title: "Anthropic — Get started with Claude Cowork"
    href: https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Start a Cowork session; What to expect during a task; Schedule recurring tasks"
  - id: openai-chatgpt-desktop-cloud-work
    title: "OpenAI — ChatGPT Work and Codex"
    href: https://help.openai.com/en/articles/20001275
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Where Work and Codex are available; cloud Work sync; Scheduled Tasks"
  - id: openai-chatgpt-desktop-background-boundary
    title: "OpenAI — Using cloud browser in ChatGPT"
    href: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Availability; start surfaces; FAQ — Can a task keep running after I leave?"
  - id: anthropic-claude-desktop-cowork-background
    title: "Anthropic — Schedule recurring tasks in Claude Cowork"
    href: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How scheduled tasks work — remote execution and local-resource exception"
  - id: openai-chatgpt-web-cloud-browser-background
    title: "OpenAI — Using cloud browser in ChatGPT"
    href: https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "opening continuation statement; FAQ — Can a task keep running after I leave?"
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L105-L112"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Get Notified, lines 105–112"
  - id: cline-v4-1-16-background-agents
    title: "Cline v4.1.16 — Hub and Spoke Architecture"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/sdk/architecture/hub-spoke.mdx#L7-L18"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Client lifecycle at lines 38–55; auto fallback at lines 58–87"
  - id: amp-2026-08-background-orbs
    title: "Amp — Orbs"
    href: https://ampcode.com/docs/orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Why Use an Orb?; Start an Orb From the CLI"
  - id: perplexity-computer
    title: "Perplexity — What is Computer?"
    href: https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How does Computer work? — Asynchronous Execution"
  - id: google-gemini-web-background-scheduled-actions
    title: "Google — Schedule actions in Gemini Apps"
    href: https://support.google.com/gemini/answer/16316416?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Schedule an action; Scheduled action notifications"
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
  - id: xai-grok-bot-background
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Watch computer work
  - id: cursor-cloud-background
    title: Cursor — Cloud Agents
    href: https://cursor.com/docs/cloud-agent
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Why use Cloud Agents and how to access
  - id: vscode-cloud-background
    title: Microsoft — Agent sessions and where agents run
    href: https://code.visualstudio.com/learn/foundations/agent-sessions-and-where-agents-run
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Cloud agents
  - id: replit-background-tasks
    title: Replit — Agent task system
    href: https://docs.replit.com/core-concepts/agent/task-system
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Background-task availability and task states
  - id: warp-cloud-background
    title: Warp — Getting started with Warp and Oz
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Oz cloud agents
  - id: cognition-devin-background-batch
    title: "Cognition — Test 8 Untested Modules in One Night"
    href: https://docs.devin.ai/use-cases/gallery/batch-test-coverage
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Launch parallel sessions; close your laptop; return to pull requests"
  - id: microsoft-copilot-tasks
    title: "Microsoft — Using Copilot Tasks"
    href: https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Scheduled tasks; approvals for unattended future runs"
  - id: spacexai-grok-automations
    title: "SpaceXAI — Automations in Grok"
    href: https://x.ai/news/grok-automations
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Automations introduction; schedules and triggers; reporting"
support:
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: no
        stage: experimental
        noteIds: [82]
        target:
          kind: dated-documentation
          revision: Chrome 153 WebMCP origin-trial documentation
          observedAt: 2026-08-31
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: WebMCP is an experimental Chrome origin trial from Chrome 149; local development requires the enable-webmcp-testing flag
          - type: runtime
            value: WebMCP tools exist only while the page remains open; navigation or tab closure ends access and actions
        evidence:
          - resourceId: chrome-webmcp-ephemeral-lifecycle
            type: documented
            observedAt: 2026-08-31
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [81]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: continuation occurs in a cloud Devin VM rather than the ordinary local Desktop process
          - type: plan
            value: availability depends on plan, administrator enablement, and rollout
        evidence:
          - resourceId: cognition-devin-desktop-background
            type: documented
            observedAt: 2026-08-31
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [80]
        target:
          kind: dated-documentation
          revision: "Anthropic Claude web documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: preview
            value: "Cowork on web is beta"
          - type: plan
            value: "requires a paid Claude subscription; Enterprise use requires owner enablement"
          - type: runtime
            value: "cloud Cowork continues without the browser or device, but local files, browser use, and native computer access require an open connected Desktop app"
          - type: host-role
            value: "Claude web monitors and steers the cloud Cowork session"
        evidence:
          - resourceId: anthropic-claude-web-cowork-background
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "cloud Work and scheduled features require an eligible paid plan and workspace permissions"
          - type: runtime
            value: "cloud Work chats sync with Desktop, while explicit cloud-browser background starts are documented for web and mobile; local Desktop chats stay on the computer"
          - type: policy
            value: "remote work pauses when it needs user input, sign-in, or confirmation"
        evidence:
          - resourceId: openai-chatgpt-desktop-cloud-work
            type: documented
            observedAt: 2026-08-29
          - resourceId: openai-chatgpt-desktop-background-boundary
            type: documented
            observedAt: 2026-08-29
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [78]
        target:
          kind: dated-documentation
          revision: "Anthropic Claude Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "remote Cowork scheduling is available on paid plans"
          - type: runtime
            value: "each scheduled invocation runs as its own Cowork session; remote sessions survive app closure and sleep, but local-resource work requires Desktop connectivity"
          - type: policy
            value: "this persistence applies to scheduled remote execution, not every ordinary Cowork conversation"
        evidence:
          - resourceId: anthropic-claude-desktop-cowork-background
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
            value: "ChatGPT Work cloud-browser tasks on eligible paid plans, excluding Free and Go, subject to region, rollout, and workspace permissions"
          - type: runtime
            value: "remote cloud-browser execution can outlive the web conversation and the user's computer session"
          - type: policy
            value: "execution pauses when ChatGPT needs information, website sign-in, or confirmation"
        evidence:
          - resourceId: openai-chatgpt-web-cloud-browser-background
            type: documented
            observedAt: 2026-08-29
  - harness: zed-agent
    versions:
      - track: current
        status: partial
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "proven only while the desktop application remains running in the background; no hosted continuation or post-exit execution is documented"
          - type: policy
            value: "completion notifications can be enabled or disabled"
        evidence:
          - resourceId: zed-v1-17-2-agent-panel
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
            value: "ClineCore hub/spoke sessions continue after the VS Code client disconnects; auto mode can fall back to local in-process execution without shared sessions"
        evidence:
          - resourceId: cline-v4-1-16-background-agents
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "uses an Amp orb launched with amp -ox, not the default local process"
          - type: plan
            value: "orb allowance depends on the active plan"
        evidence:
          - resourceId: amp-2026-08-background-orbs
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
            value: "background work can monitor connected sources and notify on notable results"
          - type: plan
            value: "Computer requires subscription access and credits"
          - type: policy
            value: "blocked work surfaces Needs attention rather than guessing"
        evidence:
          - resourceId: perplexity-computer
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "background work is documented for saved scheduled actions; the source does not establish that an arbitrary interactive chat continues after departure"
          - type: auth
            value: "requires sign-in and Keep Activity; availability is gradual"
        evidence:
          - resourceId: google-gemini-web-background-scheduled-actions
            type: documented
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [61]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Grok.com consumer web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "hosted grok.com automation continues independently after the user saves it"
          - type: transport
            value: "results may be reported by email, app notification, both, or retained for later inspection"
        evidence:
          - resourceId: spacexai-grok-automations
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
            value: "preview scheduled or recurring hosted task"
          - type: policy
            value: "required approvals may be collected during setup so the task can run unattended"
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
            value: "hosted managed Devin sessions continue on separate cloud machines"
        evidence:
          - resourceId: cognition-devin-background-batch
            type: documented
            observedAt: 2026-08-29
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
            value: work runs on an account-scoped hosted computer and can continue after the desktop preview or operator laptop is closed
          - type: plan
            value: an eligible SuperGrok or Cursor plan is required
        evidence:
          - resourceId: xai-grok-bot-background
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor Cloud Agents documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Cursor Desktop starts a separate Cloud Agent VM; the default local desktop agent is not itself detached
          - type: plan
            value: a paid Cursor plan and connected source-control account are required
        evidence:
          - resourceId: cursor-cloud-background
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code cloud-agent documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: continuation after closing VS Code is supplied by a cloud session on GitHub infrastructure rather than the local Copilot process
          - type: policy
            value: availability depends on eligible account, repository, and organization settings
        evidence:
          - resourceId: vscode-cloud-background
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Replit Agent task-system documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Core supports one active background task and Pro supports up to ten
          - type: runtime
            value: background task isolation and queuing are documented, but continuation after closing the web session is not explicitly stated
        evidence:
          - resourceId: replit-background-tasks
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: partial
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Warp and Oz documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: background execution is provided by an Oz cloud agent on Warp-hosted or customer infrastructure rather than the default local Warp agent
        evidence:
          - resourceId: warp-cloud-background
            type: documented
            observedAt: 2026-08-28
---

Keep a run going after the operator leaves the session.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
