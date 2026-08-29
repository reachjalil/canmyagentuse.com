---
title: Session resume
description: Continue a previously saved product session through a documented resume feature.
slug: resumable-runs
locale: en
seoTitle: Session resume compatibility — Can My Agent Use
socialTitle: Session resume
socialDescription: Compare documented session continue and resume behavior.
llmSummary: Session resume means a product documents continuing a saved session; preserved state and cross-device behavior are qualifiers.
audience: Operators relying on long-running or mobile agent workflows.
contentKind: feature
status: published
tags: [operations, reliability, resume, checkpoints]
updated: 2026-08-29
published: 2026-08-28
category: operations
summary: Continue a previously saved product session.
specLabel: Common product term
aliases: [resume agent, reconnect run, run checkpoint, session recovery]
parent: usage-and-reliability
related: [background-agents, conversation-export]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code saves project-scoped sessions continuously and documents `--continue`, `--resume`, named or ID-based resume, and an interactive session picker."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents `--resume`, a searchable `/resume` browser, and restoring chat history and memory for continued work."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code documents persistent Copilot sessions, restoration after window reload, session sync across devices, and continued work through its sessions list."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor Agent CLI documents resuming the latest or a selected prior chat while loading its earlier context."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents local session persistence, account sync, `--continue`, `--resume`, and full-conversation restoration."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp stores past local conversations, lets users reopen them, and continues from prior context across sessions."
  - id: 53
    text: "Evidence checked 2026-08-29: Idle hosted Devin sessions sleep without consuming usage and wake to continue when the operator sends another message."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: Anthropic — Claude Code CLI reference
    href: https://docs.anthropic.com/en/docs/claude-code/cli-usage
    kind: docs
    publisher: Anthropic
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-session-management
    title: Anthropic — Manage Claude Code sessions
    href: https://code.claude.com/docs/en/sessions
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Resume a session
  - id: google-gemini-cli-session-management
    title: Google — Manage Gemini CLI sessions and history
    href: https://geminicli.com/docs/cli/tutorials/session-management/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to resume where you left off
  - id: microsoft-vscode-session-management
    title: Microsoft — Manage agent sessions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sessions list and session restoration
  - id: microsoft-vscode-session-sync
    title: Microsoft — Sync and query session history
    href: https://code.visualstudio.com/docs/agents/run/sessions/session-history
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Session sync across devices
  - id: cursor-agent-cli-session-resume
    title: Cursor — Using Agent CLI
    href: https://docs.cursor.com/en/cli/using
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: History
  - id: github-copilot-cli-session-resume
    title: GitHub — Using Copilot CLI session data
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/chronicle
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Resuming a previous session
  - id: warp-interacting-agents
    title: "Warp — Interacting with agents"
    href: https://docs.warp.dev/agents/local-agents/interacting-with-agents/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Staying in a conversation; managing past conversations"
  - id: warp-cloud-conversation-resume
    title: "Warp — Cloud-synced conversations"
    href: https://docs.warp.dev/agents/local-agents/cloud-conversations/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managing cloud-synced conversations"
  - id: cognition-devin-usage
    title: "Cognition — Usage"
    href: https://docs.devin.ai/admin/billing/usage
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Sleep and idle behavior"
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
            value: "sleeping hosted session resumes on a new message; terminated sessions are final"
        evidence:
          - resourceId: cognition-devin-usage
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
            value: "local history reopens from the Conversations menu or panel"
          - type: policy
            value: "cross-device persistence requires cloud conversation storage"
        evidence:
          - resourceId: warp-interacting-agents
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-cloud-conversation-resume
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code session-management documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: sessions are stored per project directory as local transcripts; print-mode sessions require their session ID and retention is configurable
        evidence:
          - resourceId: anthropic-claude-code-session-management
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI session-management documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: resume history is project-scoped and subject to configured retention and deletion
        evidence:
          - resourceId: google-gemini-cli-session-management
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code agent-session documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: local sessions restore after window reload; cross-device continuation depends on GitHub-backed session sync and can be disabled or repository-excluded
        evidence:
          - resourceId: microsoft-vscode-session-management
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-session-sync
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Agent CLI usage documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Agent CLI can resume the most recent chat or a selected thread; cloud-agent persistence and retention are separate hosted behaviors
        evidence:
          - resourceId: cursor-agent-cli-session-resume
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI session-data documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: sessions persist locally and sync to the GitHub account by default; organization policy and remote-session availability can limit cross-device behavior
        evidence:
          - resourceId: github-copilot-cli-session-resume
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the product documents continuing or resuming a saved session. Viewing a static transcript without continuing it does not count.

Evidence should identify which state survives, the resume window, cross-device behavior, and cases that force a new session. Those details qualify support; they are not hidden requirements in the term.
