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
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Keep a run going after the operator leaves the session.
specLabel: Common product term
highlight: true
notes:
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
issues: []
resources:
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
