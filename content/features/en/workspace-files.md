---
title: Workspace files
description: Read or edit files in a user-selected project workspace.
slug: workspace-files
locale: en
seoTitle: Workspace file compatibility — Can My Agent Use
socialTitle: Can my agent use workspace files?
socialDescription: Compare workspace file access by exact product surface.
llmSummary: Workspace file access means reading or changing files inside a user-selected project. Local or hosted scope, permissions, sandboxing, and persistence are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - workspace
  - files
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Read or edit files inside a user-selected project.
specLabel: Common product term
highlight: true
notes:
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI works in the current repository, reads and edits workspace files, and exposes file discovery, read, create, edit, glob, and grep tools."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Projects provide persistent hosted files, including folders and connected-source imports, and Computer can create, update, and manage those Project files."
  - id: 19
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0 enables its Developer extension by default and provides file-write and exact-text-edit tools for accessible local files; permission mode controls whether operations require approval."
  - id: 18
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant Chat mode reads user-selected project files and folders as context, applies a generated suggestion to the open file, and creates a new file from a generated snippet."
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
  - id: 8
    text: "Evidence checked 2026-08-28: Grok Bot provides a durable `/workspace` directory on its hosted computer and lets Bots read files saved there by other Bots. The directory and its contents are shared across all Bots on the account, not selected as an isolated local project."
  - id: 9
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI reads files in the current repository or directory and can edit them, with writes governed by its tool-permission system."
  - id: 10
    text: "Evidence checked 2026-08-28: Cline provides built-in tools for reading files, searching a workspace, editing or writing files, and applying patches."
  - id: 11
    text: "Evidence checked 2026-08-28: Continue Agent mode exposes read, create, and edit tools for files in the project; Plan mode restricts the session to read-only tools."
  - id: 12
    text: "Evidence checked 2026-08-28: OpenCode's built-in tools read codebase files and edit, create, overwrite, or patch files relative to the project."
  - id: 13
    text: "Evidence checked 2026-08-28: Zed's native Agent is documented as able to read, edit, and search code in the open project."
  - id: 14
    text: "Evidence checked 2026-08-28: Aider accepts source files or a repository as its working context, reads related code, and edits or creates files requested in the session."
  - id: 15
    text: "Evidence checked 2026-08-28: Warp Agent writes and refactors code across the local codebase and includes a file tree and code editor for reviewing changes."
  - id: 16
    text: "Evidence checked 2026-08-28: Devin works in a hosted VS Code environment loaded with the user's repositories and performs code edits there; this is not direct access to an arbitrary local folder."
  - id: 17
    text: "Evidence checked 2026-08-28: Replit Agent writes code and sets up a hosted project in the Project Editor, including projects imported from GitHub or uploaded files; the workspace is Replit-hosted rather than an arbitrary local directory."
issues: []
resources:
  - id: amp-2026-08-workspace-files
    title: "Amp — Getting Started"
    href: https://ampcode.com/docs/cli
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI repository and editor integration"
  - id: amp-2026-08-file-inventory
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Init tool inventory"
  - id: perplexity-projects
    title: "Perplexity — What are Projects?"
    href: https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Project files"
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
  - id: xai-grok-bot-workspace
    title: xAI — Grok Bot files and results
    href: https://docs.x.ai/grok-bot/files-and-results
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Shared computer files
  - id: github-copilot-cli-files
    title: GitHub — Allowing and denying tool use in Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-tools-files
    title: Cline — Tools reference
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: editor, read_files, and apply_patch
  - id: continue-agent-files
    title: Continue — How Agent mode works
    href: https://docs.continue.dev/features/agent/how-it-works
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What Built-in Tools Are Available
  - id: opencode-tools-files
    title: OpenCode — Tools
    href: https://opencode.ai/docs/tools/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: edit, write, read, and apply_patch
  - id: zed-agent-files
    title: Zed — AI quick start
    href: https://zed.dev/docs/ai/quick-start
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use the Zed Agent
  - id: aider-workspace-files
    title: Aider — Usage
    href: https://aider.chat/docs/usage.html
    kind: docs
    publisher: Aider
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Adding files and making changes
  - id: warp-agent-files
    title: Warp — Getting started with Warp
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: In the Warp app
  - id: devin-session-files
    title: Devin — Session tools
    href: https://docs.devin.ai/work-with-devin/devin-session-tools
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Devin IDE
  - id: replit-project-editor-files
    title: Replit — Project Editor
    href: https://docs.replit.com/learn/projects-and-artifacts/project-editor
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: jetbrains-ai-chat-mode
    title: JetBrains — Chat with AI
    href: https://www.jetbrains.com/help/ai-assistant/chat-mode.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Codebase Mode; Add Attachment; response actions"
  - id: goose-developer-v1-48
    title: Goose — Developer Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/developer-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Developer tools; write; edit; access control"
support:
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
            value: "local-default uses the current checkout; CLI-launched orbs use a separate project working copy"
        evidence:
          - resourceId: amp-2026-08-workspace-files
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-file-inventory
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
            value: "Perplexity-hosted Project storage rather than local filesystem access"
          - type: policy
            value: "Project viewers can view files while editors can edit them"
        evidence:
          - resourceId: perplexity-projects
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [19]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "local files accessible to the user running Goose; access is not confined to an isolated hosted workspace"
          - type: policy
            value: "the Developer extension is enabled by default and approval behavior depends on Goose permission mode"
          - type: policy
            value: "Autonomous mode can modify accessible files without per-action approval"
        evidence:
          - resourceId: goose-developer-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [18]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "scoped to AI Assistant Chat mode in the currently open JetBrains IDE project"
          - type: policy
            value: "Codebase Mode omits .gitignore and .aiignore paths; manually attaching a restricted file bypasses .aiignore"
          - type: runtime
            value: "large attached files or folders can be trimmed to fit the model context window"
          - type: policy
            value: "applying edits and creating files are explicit operator actions in Chat mode"
        evidence:
          - resourceId: jetbrains-ai-chat-mode
            type: documented
            observedAt: 2026-08-29
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
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: access is scoped to the current repository or directory, and file writes require approval unless a matching permission is saved or pre-granted
        evidence:
          - resourceId: github-copilot-cli-files
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current Cline documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: tool availability and approval behavior depend on settings and policy
        evidence:
          - resourceId: cline-tools-files
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Continue documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: create and edit tools require Agent mode and model tool-use support; Plan mode is read-only
        evidence:
          - resourceId: continue-agent-files
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current OpenCode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: read and edit behavior can be allowed, approval-gated, or denied through permission rules
        evidence:
          - resourceId: opencode-tools-files
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [13]
        target:
          kind: dated-documentation
          revision: current Zed documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: file operations remain subject to Agent profiles, tool permissions, and workspace trust
        evidence:
          - resourceId: zed-agent-files
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [14]
        target:
          kind: dated-documentation
          revision: current Aider documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: files can be named explicitly, added during chat, or discovered from the repository; Aider recommends limiting explicitly added files
        evidence:
          - resourceId: aider-workspace-files
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [15]
        target:
          kind: dated-documentation
          revision: current Warp documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: the local Agent documents review and approval controls before actions execute
        evidence:
          - resourceId: warp-agent-files
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [16]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Devin edits repositories loaded into its hosted VS Code environment, not arbitrary local folders on the operator's computer
        evidence:
          - resourceId: devin-session-files
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [17]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Agent documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Agent operates in a Replit-hosted project; local code must be imported from GitHub or uploaded before Agent can use it
        evidence:
          - resourceId: replit-project-editor-files
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
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the documented workspace is a durable hosted `/workspace` shared across all Bots on one account, not an isolated user-selected local project
          - type: policy
            value: access to the operator's local files is separately controlled and requires local-computer permission
        evidence:
          - resourceId: xai-grok-bot-workspace
            type: documented
            observedAt: 2026-08-28
---

This row asks whether a product can directly read or change files inside a project workspace that the user selected or the product provisioned. It does not imply unrestricted access to the whole computer, cloud drives, or files outside the tool's permission boundary.

Local versus hosted storage, separately installed extensions, MCP-backed access, read-only behavior, and permission boundaries are recorded as qualifiers.
