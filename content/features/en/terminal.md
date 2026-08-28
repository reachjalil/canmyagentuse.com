---
title: Terminal commands
description: Run shell commands in a project environment, with current-track evidence for selected coding harnesses.
slug: terminal
locale: en
seoTitle: Terminal command compatibility — Can My Agent Use
socialTitle: Can my agent run terminal commands?
socialDescription: Current-track terminal access by agent harness, with dated public evidence.
llmSummary: Terminal support means the harness can propose or execute shell commands in its project environment. Selected current-track cells are sourced; all others remain unknown.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - workspace
  - terminal
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Propose or execute shell commands in a project environment.
specLabel: Product capability
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents Bash as a permission-controlled tool and provides CLI modes for agentic command execution."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor Agent documents running terminal commands while completing coding tasks."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenAI documents Codex CLI as able to run code and commands locally in the selected directory."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI's official tool reference includes the `run_shell_command` tool with workspace and approval controls."
  - id: 5
    text: "Evidence checked 2026-08-28: VS Code documents terminal tools for agent mode, with user-configurable approval and auto-approval behavior."
issues: []
resources:
  - id: anthropic-cli-terminal
    title: Anthropic — Claude Code CLI reference
    href: https://docs.anthropic.com/en/docs/claude-code/cli-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-agent-terminal
    title: Cursor — Agent overview
    href: https://cursor.com/docs/agent/overview
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-codex-terminal
    title: OpenAI — Get started with Codex CLI
    href: https://help.openai.com/en/articles/11096431
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: gemini-terminal
    title: Gemini CLI — Tool reference
    href: https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/tools.md
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-terminal
    title: Visual Studio Code — Tools in agents
    href: https://code.visualstudio.com/docs/copilot/concepts/tools
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-cli-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: cursor-agent-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openai-codex-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: gemini-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vscode-terminal
            type: documented
            observedAt: 2026-08-28
---

This capability covers a built-in, permissioned route for an agent to propose or execute shell commands in its working environment. It does not claim unattended execution, access beyond the selected workspace, a particular shell, or identical approval behavior.

Only current product documentation is used here. Preview tracks and unreviewed surfaces remain unknown.
