---
title: Subagent management
description: List, inspect, pause, resume, cancel, or retry child-agent tasks.
slug: subagent-lifecycle-controls
locale: en
seoTitle: Subagent management compatibility — Can My Agent Use
socialTitle: Subagent management
socialDescription: Compare listing, inspection, cancellation, pause, resume, retry, and timeout behavior for child agents.
llmSummary: Subagent management covers visibility into active children and documented cancel, pause, resume, retry, or limit behavior. Each operation is recorded separately as a qualifier.
audience: Operators supervising multi-agent runs.
contentKind: feature
status: published
tags: [runtime, subagents, supervision, cancellation]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: List, inspect, and control child-agent tasks.
specLabel: Common product term
aliases: [subagent cancellation, child task control, agent supervision]
parent: subagents
related: [subagent-concurrency, background-agents]
notes:
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop shows child-agent Working, completed, or failed state, duration, prompt, output or error, and child-session link, but no child-specific pause, resume, cancel, or retry control is documented."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp lets users request or fan out subagents, but native specialists cannot be guided mid-task and expose only their final summary."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code lists live subagents and background tasks, supports foreground/background execution, stopping and attaching to background work, resuming a subagent by ID, and a per-subagent `maxTurns` limit. Pause and retry semantics are not fully documented."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work exposes read-only Active and Done child lists; local Codex lets operators inspect child threads and ask the parent to steer, stop, or close them, with CLI thread switching through /agent."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code exposes each running child, current tool, elapsed time, prompt, full tool-call details, and returned result as a persistent read-only child chat; each child invocation is stateless and cannot receive follow-up messages."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp lists child runs with live state, opens each child conversation, and supports follow-up messages, cancellation, waiting, and replacement decisions."
  - id: 53
    text: "Evidence checked 2026-08-29: A Devin coordinator can message, monitor, sleep, terminate, and schedule reminders to revisit managed child sessions."
issues: []
resources:
  - id: openwork-v01839-subagent-run
    title: "OpenWork v0.18.39 — subagent run line"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/components/chat/subagent-run-line.tsx#L30-L64"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "run status, child-session behavior, and rendering at lines 30–140"
  - id: amp-2026-08-subagent-lifecycle
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Specialist Subagents"
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/sub-agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Run subagents in foreground or background; resume subagents; maxTurns
  - id: anthropic-claude-code-parallel-agents
    title: Anthropic — Run agents in parallel
    href: https://code.claude.com/docs/en/agents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Check on running work
  - id: openai-subagents
    title: OpenAI — Subagents in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/agent-configuration/subagents
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What you see in chat
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Run state transitions; messaging; observability"
  - id: cognition-devin-advanced-capabilities
    title: "Cognition — Advanced Capabilities"
    href: https://docs.devin.ai/work-with-devin/advanced-capabilities
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managed Devins; coordinator controls"
support:
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
          - type: runtime
            value: "inspection and status only; no documented child-specific pause, resume, cancel, or retry operation"
          - type: format
            value: "in-flight, completed, or failed status; task prompt; text output or error; child session ID"
        evidence:
          - resourceId: openwork-v01839-subagent-run
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: partial
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "operator can request delegation and parallel split but cannot guide or monitor a native specialist mid-task"
        evidence:
          - resourceId: amp-2026-08-subagent-lifecycle
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
            value: "follow-up message, status and ACU monitoring, sleep, terminate, and scheduled check-back controls"
        evidence:
          - resourceId: cognition-devin-advanced-capabilities
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "documented states include INPROGRESS, SUCCEEDED, FAILED, BLOCKED, ERROR, and CANCELLED"
          - type: runtime
            value: "parent can wait, follow up, spawn a replacement, or finish"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Active and Done lists and completed-result inspection are documented; the web sidebar cannot stop or steer an individual child
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: child threads are inspectable and the operator can ask Codex to steer, stop, or close them; pause, retry, deadlines, and priority are not established
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /agent switches among active threads and Codex accepts steer, stop, and close requests; pause, retry, deadlines, and priority are not established
        evidence:
          - resourceId: openai-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent and parallel-agent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: list, inspect, background, attach, stop, resume, and maximum-turn controls are documented; a general pause operation and explicit retry contract are not established
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-claude-code-parallel-agents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: live inspection and persistent read-only child records are documented; follow-up, resume, pause, retry, timeout, and cancellation controls are not established
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
---

This row tracks supervision of child-agent executions after delegation. At minimum, evidence should show how active and queued children are identified and whether cancellation propagates to their tools and descendants.

Record pause, resume, retry, deadline, timeout, priority, log inspection, partial-result recovery, and orphan cleanup separately. A UI that hides a child after cancel while its tools continue running is only partial support.
