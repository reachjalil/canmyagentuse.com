---
title: Workspace files
description: Read and edit files in a user-selected project workspace, with current-track evidence for selected desktop and CLI harnesses.
slug: workspace-files
locale: en
seoTitle: Workspace file compatibility — Can My Agent Use
socialTitle: Can my agent use workspace files?
socialDescription: Current-track workspace file access by agent harness, with dated public evidence.
llmSummary: Workspace file access means reading or changing files inside a user-selected local project. Selected current-track cells are sourced; all others remain unknown.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - workspace
  - files
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Read and edit files inside a user-selected local project.
specLabel: Product capability
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Desktop extensions can bundle local MCP servers that expose files or applications, but access depends on the installed extension and its permissions."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code is documented as an agentic coding tool that works in a codebase and includes file editing in its permission surface."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor Agent documents autonomous codebase exploration and file editing in the opened project."
  - id: 4
    text: "Evidence checked 2026-08-28: OpenAI documents Codex CLI as a local coding agent that can read, change, and run code in the selected directory."
  - id: 5
    text: "Evidence checked 2026-08-28: Gemini CLI documents file-system tools for listing, reading, searching, writing, and patching files within the workspace."
  - id: 6
    text: "Evidence checked 2026-08-28: VS Code agent tools include workspace search and file editing in the open workspace."
  - id: 7
    text: "Evidence checked 2026-08-28: OpenWork Desktop selects a project folder, runs its host stack against that workspace, and routes workspace file access through the OpenWork server and OpenCode runtime."
issues: []
resources:
  - id: anthropic-desktop-files
    title: Anthropic — Local MCP servers on Claude Desktop
    href: https://support.anthropic.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-cli-files
    title: Anthropic — Claude Code CLI reference
    href: https://docs.anthropic.com/en/docs/claude-code/cli-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-agent-files
    title: Cursor — Agent overview
    href: https://cursor.com/docs/agent/overview
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-codex-files
    title: OpenAI — Get started with Codex CLI
    href: https://help.openai.com/en/articles/11096431
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: gemini-files
    title: Gemini CLI — Tool reference
    href: https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/tools.md
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-files
    title: Visual Studio Code — Tools in agents
    href: https://code.visualstudio.com/docs/copilot/concepts/tools
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openwork-workspace-files
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: separately installed extension and permissions required
        evidence:
          - resourceId: anthropic-desktop-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-cli-files
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: cursor-agent-files
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openai-codex-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: gemini-files
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current VS Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vscode-files
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: access is limited by the selected workspace and OpenWork approval rules
        evidence:
          - resourceId: openwork-workspace-files
            type: documented
            observedAt: 2026-08-28
---

This row asks whether a harness can directly read or change files inside a local project that the user has opened or selected. It does not imply unrestricted access to the whole computer, cloud drives, or files outside the tool's permission boundary.

Desktop support is marked partial when file access is supplied through a separately installed extension or MCP server. The current track is the only reviewed track in this first evidence wave.
