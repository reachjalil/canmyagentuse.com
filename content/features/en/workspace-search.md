---
title: Workspace search
description: Search file names, text, or symbols across a workspace.
slug: workspace-search
locale: en
seoTitle: "Workspace search — Can My Agent Use"
socialTitle: Workspace search
socialDescription: Compare file-name, text, symbol, and semantic search across a workspace.
llmSummary: Workspace search locates files, text, or symbols across a project. Query types, indexing, scope, and semantic retrieval are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Search file names, text, or symbols across a workspace.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: No reviewed public evidence is attached to this capability row. Unknown records the evidence gap.
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code documents Glob and Grep built-ins and describes searching relevant files before coordinated edits."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents glob and grep_search tools that search file names and contents across the workspace."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents Agent tools for searching files, folders, names, directory structures, and exact content patterns."
  - id: 5
    text: "Evidence checked 2026-08-28: VS Code documents workspace-context search tools that locate relevant files, symbols, and text."
  - id: 6
    text: "Evidence checked 2026-08-28: Copilot CLI documents automatic read-only codebase search plus grep and glob tools."
  - id: 7
    text: "Evidence checked 2026-08-28: Cline documents a ripgrep-powered codebase search built-in."
  - id: 8
    text: "Evidence checked 2026-08-28: Continue documents glob search, grep search, repository map, subdirectory, and codebase tools in Plan and Agent modes."
  - id: 9
    text: "Evidence checked 2026-08-28: OpenCode documents built-in grep and glob tools for codebase content and path search."
  - id: 10
    text: "Evidence checked 2026-08-28: Zed documents that its native Agent can search code in the current project."
  - id: 11
    text: "Evidence checked 2026-08-28: Aider analyzes the repository to build a compact map and uses that map to identify relevant code, but does not document it as an explicit queryable search tool."
  - id: 12
    text: "Evidence checked 2026-08-28: Windsurf documents Search and Analyze among Cascade's codebase tools."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: microsoft-vscode-workspace-context
    title: Visual Studio Code — How Copilot understands your workspace
    href: https://code.visualstudio.com/docs/agents/reference/workspace-context
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Workspace search tools
  - id: anthropic-claude-code-search-tools
    title: Anthropic — Claude Code tools reference
    href: https://code.claude.com/docs/en/tools-reference
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Glob and Grep
  - id: anthropic-claude-code-workflow
    title: Anthropic — How Claude Code works
    href: https://code.claude.com/docs/en/how-claude-code-works
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Agentic loop across a project
  - id: google-gemini-file-system-tools
    title: Google — Gemini CLI file system tools
    href: https://geminicli.com/docs/tools/file-system/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: glob and grep_search
  - id: cursor-agent-tools
    title: Cursor — Agent overview
    href: https://cursor.com/docs/agent/overview
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Search files and folders
  - id: github-copilot-cli-tool-controls
    title: GitHub — Allowing and denying tool use in Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Introduction and available tools
  - id: cline-codebase-search
    title: Cline — Tools reference
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Built-In Tools
  - id: continue-agent-tools
    title: Continue — How Agent mode works
    href: https://docs.continue.dev/features/agent/how-it-works
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Tools available in Plan mode
  - id: opencode-search-tools
    title: OpenCode — Tools
    href: https://opencode.ai/docs/tools
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: grep and glob
  - id: zed-agent-project-search
    title: Zed — AI Quick Start
    href: https://zed.dev/docs/ai/quick-start
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use the Zed Agent
  - id: aider-repository-map
    title: Aider — Frequently asked questions
    href: https://aider.chat/docs/faq.html
    kind: docs
    publisher: Aider
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How can I add all files to the chat and repository map
  - id: windsurf-cascade-search-tools
    title: Windsurf — Cascade overview
    href: https://docs.windsurf.com/windsurf/cascade/cascade
    kind: docs
    publisher: Windsurf
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Tool Calling
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-search-tools
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-claude-code-workflow
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI file-system tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: google-gemini-file-system-tools
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Agent tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Cursor Agent in the desktop workbench
        evidence:
          - resourceId: cursor-agent-tools
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code workspace-context documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: microsoft-vscode-workspace-context
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI tool-permissions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: read-only search operations are allowed automatically unless tool restrictions override them
        evidence:
          - resourceId: github-copilot-cli-tool-controls
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Cline tools reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: cline-codebase-search
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Continue Agent mode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: continue-agent-tools
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current OpenCode tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: grep and glob availability can be allowed, denied, or set to ask through OpenCode permissions
        evidence:
          - resourceId: opencode-search-tools
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current Zed Agent quick-start documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Zed's native Agent
        evidence:
          - resourceId: zed-agent-project-search
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: partial
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Aider repository-map documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Aider provides a task-aware repository map for relevance discovery, but the reviewed documentation does not expose a dedicated interactive workspace-search tool
        evidence:
          - resourceId: aider-repository-map
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Cascade overview documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: windsurf-cascade-search-tools
            type: documented
            observedAt: 2026-08-28
---

Search a codebase or knowledge tree before editing.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
