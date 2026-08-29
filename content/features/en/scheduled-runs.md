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
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Start a task on a schedule without a new human prompt.
specLabel: Common product term
highlight: false
notes:
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
issues: []
resources:
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
support:
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
