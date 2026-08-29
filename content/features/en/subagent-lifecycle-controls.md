---
title: Subagent lifecycle controls
description: List, inspect, pause, resume, cancel, retry, and set timeouts for child-agent tasks.
slug: subagent-lifecycle-controls
locale: en
seoTitle: Subagent lifecycle controls compatibility — Can My Agent Use
socialTitle: Subagent lifecycle controls
socialDescription: Compare listing, inspection, cancellation, pause, resume, retry, and timeout controls for child agents.
llmSummary: Subagent lifecycle controls cover operator and parent visibility into active children plus supported cancel, pause, resume, retry, and timeout actions.
audience: Operators supervising multi-agent runs.
contentKind: feature
status: published
tags: [runtime, subagents, supervision, cancellation]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: List, inspect, pause, resume, cancel, retry, and time-limit child-agent tasks.
specLabel: Common product term
aliases: [subagent cancellation, child task control, agent supervision]
parent: subagents
related: [subagent-concurrency, background-agents]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code lists live subagents and background tasks, supports foreground/background execution, stopping and attaching to background work, resuming a subagent by ID, and a per-subagent `maxTurns` limit. Pause and retry semantics are not fully documented."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work exposes read-only Active and Done child lists; local Codex lets operators inspect child threads and ask the parent to steer, stop, or close them, with CLI thread switching through /agent."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code exposes each running child, current tool, elapsed time, prompt, full tool-call details, and returned result as a persistent read-only child chat; each child invocation is stateless and cannot receive follow-up messages."
issues: []
resources:
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
support:
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
