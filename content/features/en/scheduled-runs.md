---
title: Scheduled runs
description: Start a task on a schedule without a new human prompt.
slug: scheduled-runs
locale: en
seoTitle: "Scheduled runs — Can My Agent Use"
socialTitle: Scheduled runs
socialDescription: Compare scheduled task execution, limits, and background behavior.
llmSummary: Scheduled runs start saved tasks according to a schedule without a new human prompt. Hosting, limits, retention, and unattended-run behavior are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-09-01
published: 2026-08-28
category: runtime
summary: Start a task on a schedule without a new human prompt.
specLabel: Common product term
highlight: false
notes:
  - id: 85
    text: "Evidence checked 2026-09-01: Vibe Work Public Preview Scheduled Tasks run a prompt once or on daily, weekly, monthly, or yearly schedules. Users can edit, pause, resume, or delete schedules; sensitive Connector actions normally require confirmation unless pre-authorized."
  - id: 82
    text: "Evidence checked 2026-08-31: the official Devin MCP integration can create and manage cron or one-time scheduled cloud sessions after API or service-user authentication; this is a vendor integration rather than a local Desktop scheduler."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop claims Den-scheduled Automation occurrences and runs them as visible local threads, but Den remains the scheduler and an authenticated Desktop runner must be online before the claim deadline."
  - id: 80
    text: "Evidence checked 2026-08-29: Claude web exposes Cowork scheduled tasks with remote hourly, daily, weekly, weekday, or manual execution and edit, pause, resume, delete, and run-now controls."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop can expose the Scheduled task list and supported task controls, but desktop availability varies and event-trigger creation or trigger editing remains a web or supported-mobile operation."
  - id: 78
    text: "Evidence checked 2026-08-29: Claude Desktop exposes Cowork scheduled tasks with recurring or on-demand execution, configurable cadence, model and approval mode, result history, and pause, resume, edit, delete, and run-now controls."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT web exposes one-time, recurring, monitoring, and eligible event-triggered tasks through Scheduled, with result review, notifications, sharing, and pause, resume, edit, and delete controls."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Routines schedule recurring Agent work from a hosted Conversation and return later results to the same thread without a new human prompt."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline explicitly says scheduling applies only to its SDK, CLI, and Kanban surfaces and is not currently applicable to the VS Code extension."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp Automations save a prompt and one-time or repeating schedule on a thread, wake the agent later, and resume an orb when repository tools are needed."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer creates user-confirmed recurring tasks and runs them autonomously in the cloud on hourly, daily, weekly, monthly, or custom schedules."
  - id: 62
    text: "Evidence checked 2026-08-29: Gemini Apps on the web saves recurring actions with user-defined timing and runs them later without a new prompt; users can edit, pause, resume, and delete up to ten active schedules."
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot routines can run a workflow on a schedule, show the next run, execute while the operator's laptop is closed, and retain the 20 most recent run records; each Bot can own up to 50 routines."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code can schedule recurring or one-shot prompts with `/loop` and cron tools inside a live session; it also exposes durable cloud Routines through `/schedule`, but Routines are a research preview."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor Automations run Cloud Agents on recurring preset or cron schedules, and Cloud Agent timer subscriptions can wake an existing conversation without another human prompt."
  - id: 4
    text: "Evidence checked 2026-08-28: Warp documents scheduled recurring tasks for cloud agents on its Automation Platform; this is a hosted automation surface, not a timer inside the default local Warp Agent session."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 tasks can start from a documented GitHub Actions cron workflow, but scheduling is supplied by the separately configured hosted integration."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin Scheduled Sessions create sessions automatically on a recurring cron frequency or one-time date and time; existing schedules remain supported while Automations are recommended for new workflows."
  - id: 60
    text: "Evidence checked 2026-08-29: Preview Copilot Tasks supports one-time tasks at a specified time and recurring schedules that can be paused, edited, disabled, or deleted."
  - id: 61
    text: "Evidence checked 2026-08-29: Grok Automations on grok.com run once, daily, weekdays, weekly, monthly, or yearly at a user-selected local time, with pause, resume, edit, delete, and Run now controls."
issues: []
resources:
  - id: mistral-vibe-work-scheduled-tasks
    title: "Mistral Docs — Schedule tasks"
    href: https://docs.mistral.ai/vibe/work/scheduled-tasks
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Public Preview; Creating a scheduled task; Scheduling options; Tools, Connectors, and approvals; Managing your schedules; Limits"
  - id: cognition-devin-mcp-schedules
    title: "Cognition — Devin MCP"
    href: https://docs.devin.ai/desktop/devin-mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Schedule management; Windsurf setup"
  - id: openwork-v01839-desktop-automations
    title: "OpenWork v0.18.39 — Desktop runner for Den-scheduled Automations"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/features/automations-desktop-runner/README.md#L1-L32"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Outcome and Offline behavior, lines 1–32"
  - id: anthropic-claude-web-scheduled-cowork
    title: "Anthropic — Schedule recurring tasks in Claude Cowork"
    href: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "availability; How scheduled tasks work; Create a scheduled task; Manage your scheduled tasks"
  - id: openai-chatgpt-desktop-scheduled-tasks
    title: "OpenAI — Scheduled tasks in ChatGPT"
    href: https://help.openai.com/en/articles/10291617-what-is-agent-mode
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "desktop-app availability FAQ; Scheduled page controls; event-trigger surface limitations"
  - id: anthropic-claude-desktop-scheduled-cowork
    title: "Anthropic — Schedule recurring tasks in Claude Cowork"
    href: https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "availability; What scheduled tasks can do; How scheduled tasks work; Create and manage scheduled tasks"
  - id: openai-chatgpt-web-scheduled-tasks
    title: "OpenAI — Scheduled tasks in ChatGPT"
    href: https://help.openai.com/en/articles/10291617-what-is-agent-mode
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Create an event-triggered task; Review scheduled task limits; FAQ"
  - id: replit-routines-current
    title: "Replit — Routines"
    href: "https://docs.replit.com/chat/routines"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What's a Routine?; Permissions and results; Availability and limits; Create a Routine"
  - id: cline-v4-1-16-scheduled-runs
    title: "Cline v4.1.16 — Scheduling"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/cli/scheduling.mdx#L6-L14"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Applicability notice"
  - id: amp-2026-08-automations
    title: "Amp — Automations"
    href: https://ampcode.com/docs/orbs/automations
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Scheduling semantics; Manage an Automation"
  - id: perplexity-scheduled-computer-tasks
    title: "Perplexity — Scheduled Tasks in Computer"
    href: https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating a Scheduled Task; Supported schedules; Availability"
  - id: google-gemini-web-scheduled-actions
    title: "Google — Schedule actions in Gemini Apps"
    href: https://support.google.com/gemini/answer/16316416?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What you need; Schedule an action; Pause or resume; Edit or delete"
  - id: xai-grok-bot-routines
    title: xAI — Grok Bot skills and routines
    href: https://docs.x.ai/grok-bot/skills-routines-and-automations
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Create a routine
  - id: anthropic-claude-code-scheduled-tasks
    title: Anthropic — Run prompts on a schedule
    href: https://code.claude.com/docs/en/scheduled-tasks
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-routines
    title: Anthropic — Automate work with routines
    href: https://code.claude.com/docs/en/web-scheduled-tasks
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-cloud-agent-automations
    title: Cursor — Automations
    href: https://cursor.com/docs/cloud-agent/automations
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Scheduled triggers
  - id: cursor-cloud-agent-capabilities
    title: Cursor — Cloud Agent capabilities
    href: https://cursor.com/docs/cloud-agent/capabilities
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Subscriptions
  - id: warp-cloud-agent-schedules
    title: Warp — Getting started with Warp
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: In the cloud, as a cloud agent
  - id: opencode-v1-18-25-github-schedule
    title: "OpenCode v1.18.25 — GitHub integration"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/github.mdx#L114-L163
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Supported Events; Schedule Example"
  - id: cognition-devin-scheduled-sessions
    title: "Cognition — Scheduled Sessions"
    href: https://docs.devin.ai/product-guides/scheduled-sessions
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating a Scheduled Session; Schedule type; Managing Schedules"
  - id: microsoft-copilot-tasks
    title: "Microsoft — Using Copilot Tasks"
    href: https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Regular and scheduled tasks; task controls"
  - id: spacexai-grok-automations
    title: "SpaceXAI — Automations in Grok"
    href: https://x.ai/news/grok-automations
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "On a schedule or trigger; automation controls"
support:
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [85]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Vibe Work scheduled-tasks documentation observation
          observedAt: 2026-09-01
        environmentProfile: hosted-default
        qualifiers:
          - type: feature-flag
            value: Scheduled Tasks are a Public Preview feature available only in Vibe Work
          - type: runtime
            value: users can schedule one-time, daily, weekly, monthly, or yearly prompts and later edit, pause, resume, or delete them; runs use Work capabilities including Skills, Connectors, web search, Libraries, and Projects
          - type: policy
            value: sensitive Connector actions normally ask for confirmation; unattended completion requires pre-authorizing the relevant Connector actions
        evidence:
          - resourceId: mistral-vibe-work-scheduled-tasks
            type: documented
            observedAt: 2026-09-01
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [82]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: local-default
        qualifiers:
          - type: vendor-extension
            value: scheduling is exposed through the official Devin MCP integration and executes as cloud Devin sessions
          - type: auth
            value: requires a Devin API key or service-user credential
          - type: runtime
            value: supports cron and one-time scheduled sessions
        evidence:
          - resourceId: cognition-devin-mcp-schedules
            type: documented
            observedAt: 2026-08-31
  - harness: openwork-desktop
    versions:
      - track: current
        status: partial
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: "requires an authenticated Desktop installation registered with Den"
          - type: runtime
            value: "Desktop must be online to claim an occurrence; otherwise Den records runner_unavailable, and Run now fails without an online runner"
          - type: host-role
            value: "Den is the durable scheduler and source of truth; Desktop is the execution runner"
        evidence:
          - resourceId: openwork-v01839-desktop-automations
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
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
            value: "paid plans; Pro, Max, and Team can use Cowork on web, while Enterprise availability requires owner enablement"
          - type: runtime
            value: "cloud sessions can use connectors and account-stored files but cannot attach a local computer folder"
          - type: policy
            value: "the user selects approval mode, model, and cadence"
        evidence:
          - resourceId: anthropic-claude-web-scheduled-cowork
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
            value: "scheduled tasks require an eligible ChatGPT account and workspace; active-task and cadence limits vary by plan"
          - type: runtime
            value: "the Desktop Scheduled page may be absent depending on app version and account; existing event-trigger tasks can be displayed but trigger conditions cannot be created or edited there"
          - type: policy
            value: "available controls include result and schedule review plus pause, resume, edit, and delete"
        evidence:
          - resourceId: openai-chatgpt-desktop-scheduled-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [78]
        target:
          kind: dated-documentation
          revision: "Anthropic Claude Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "available with Cowork on paid Pro, Max, Team, and Enterprise plans"
          - type: runtime
            value: "the Scheduled page is accessible in Claude Desktop; cloud tasks continue after Desktop closes, while tasks needing local folders or native apps require the computer and app"
          - type: policy
            value: "the creator chooses an approval mode and can pause, resume, edit, delete, or run a task on demand"
          - type: format
            value: "hourly, daily, weekly, weekday, or manual cadence"
        evidence:
          - resourceId: anthropic-claude-desktop-scheduled-cowork
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
            value: "scheduled tasks cover eligible Free, Go, Plus, Pro, Business, Enterprise, Edu, and Healthcare users; event triggers require Work and an eligible paid account and are unavailable in FedRAMP"
          - type: runtime
            value: "web Scheduled surface supports one-time, recurring, monitoring, and supported Gmail, Slack, or GitHub event-triggered work"
          - type: policy
            value: "active-task and frequency limits vary by plan; tasks can pause for approval or required action, and project-created tasks cannot access project uploads"
        evidence:
          - resourceId: openai-chatgpt-web-scheduled-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit hosted Routines documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Routines attach to hosted Conversations, cannot be created inside a Project, and cannot schedule publishing"
          - type: plan
            value: "Core permits up to five active Routines and Pro up to ten; Routines run only in Power or Max Mode"
          - type: policy
            value: "minimum interval is one hour; every run requires a budget; overlapping runs wait without creating another pending run"
        evidence:
          - resourceId: replit-routines-current
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
            value: "expressly excluded from the VS Code and JetBrains extensions"
        evidence:
          - resourceId: cline-v4-1-16-scheduled-runs
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
            value: "one schedule per thread; schedules can run once or repeat and be paused, resumed, or deleted"
          - type: host-role
            value: "execution wakes the hosted thread or orb associated with an Amp client thread"
        evidence:
          - resourceId: amp-2026-08-automations
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
            value: "cadence cannot be more frequent than hourly and one conversation can own up to 15 scheduled tasks"
          - type: policy
            value: "Computer proposes the schedule and requires approval before creation"
          - type: plan
            value: "runs consume Computer credits and can be skipped and retried when credits or access are unavailable"
        evidence:
          - resourceId: perplexity-scheduled-computer-tasks
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "requires sign-in and Keep Activity; work or school accounts need a qualifying Google Workspace edition"
          - type: runtime
            value: "gradual availability; maximum ten active scheduled actions; inactive actions can be turned off automatically"
        evidence:
          - resourceId: google-gemini-web-scheduled-actions
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
            value: "scheduled Grok.com automation with one-time through yearly cadence in the user's timezone"
          - type: plan
            value: "scheduled automations are available to everyone; email triggers require SuperGrok"
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
            value: "specific-time or recurring schedule in the Copilot Tasks view"
          - type: policy
            value: "tasks are user initiated and schedules can be paused, turned off, or deleted"
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
            value: "recurring cron or one-time hosted session"
        evidence:
          - resourceId: cognition-devin-scheduled-sessions
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: partial
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "scheduling is implemented by GitHub Actions cron rather than a local OpenCode scheduler"
          - type: auth
            value: "workflow requires configured model credentials and repository permissions"
        evidence:
          - resourceId: opencode-v1-18-25-github-schedule
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code scheduling documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: session-scoped tasks fire only while Claude Code is running and idle and recurring tasks expire after seven days
          - type: preview
            value: durable cloud Routines created with /schedule are research preview, require Claude Code on the web, and have account and organization availability constraints
        evidence:
          - resourceId: anthropic-claude-code-scheduled-tasks
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-claude-code-routines
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor Cloud Agent documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Automations create billable Cloud Agents; repository access and optional tools must be configured for each automation
          - type: runtime
            value: conversation timer subscriptions last at most 180 days
        evidence:
          - resourceId: cursor-cloud-agent-automations
            type: documented
            observedAt: 2026-08-28
          - resourceId: cursor-cloud-agent-capabilities
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Warp cloud-agent documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: schedules run cloud agents on Warp infrastructure or customer-managed infrastructure through the Automation Platform, not the default local app session
        evidence:
          - resourceId: warp-cloud-agent-schedules
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: each Bot can own up to 50 routines and the app keeps the 20 most recent run records per routine
          - type: policy
            value: unattended routines may be paused after a long absence and consequential actions should remain approval-gated
        evidence:
          - resourceId: xai-grok-bot-routines
            type: documented
            observedAt: 2026-08-28
---

Start a task on a timer without a human prompt.

Grok Bot's sourced cell covers product-native routines owned by one Bot. It does not establish unlimited unattended operation, guaranteed event delivery, or identical retention for the conversation and run history.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
