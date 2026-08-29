---
title: Terminal commands
description: Propose or run shell commands in a project environment.
slug: terminal
locale: en
seoTitle: Terminal command compatibility — Can My Agent Use
socialTitle: Can my agent run terminal commands?
socialDescription: Compare terminal command support by exact product surface.
llmSummary: Terminal command support lets a product propose or execute shell commands in a project environment. Approval, shell, sandbox, working directory, and persistence are qualifiers.
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
specLabel: Common product term
highlight: true
notes:
  - id: 901
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork executes shell commands inside an isolated hosted environment; local developer tools require separately granted Desktop access."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI exposes Bash among its documented tools and remote orb threads provide a shared tmux terminal on the same filesystem as the agent."
  - id: 18
    text: "Evidence checked 2026-08-29: Replit Agent runs commands in the selected project, with General Agent setting up and operating within a Replit-hosted execution environment."
  - id: 17
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0's default Developer extension exposes a shell tool that runs commands locally with the current user's privileges and the Goose process's inherited environment."
  - id: 16
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant Chat mode generates terminal commands and exposes an operator-invoked Run Snippet action that executes a generated command; autonomous terminal-tool access is not documented for plain AI Assistant."
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
  - id: 6
    text: "Evidence checked 2026-08-28: OpenWork's OpenCode-backed runtime includes shell execution, with permission requests surfaced in the desktop app and policy controlled by the host."
  - id: 7
    text: "Evidence checked 2026-08-28: Grok Bot's persistent cloud computer includes a command line and filesystem; local-computer commands are a separate capability controlled by a desktop approval policy."
  - id: 8
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI can run shell tools in the current repository or directory, with potentially destructive commands gated by its permission system."
  - id: 9
    text: "Evidence checked 2026-08-28: Cline's built-in Bash tool runs commands in a persistent shell session and can be approval-gated by settings or policy."
  - id: 10
    text: "Evidence checked 2026-08-28: Continue Agent mode exposes `run_terminal_command`, which runs commands from the workspace root after the tool-permission step unless configured Automatic."
  - id: 11
    text: "Evidence checked 2026-08-28: OpenCode's built-in Bash tool lets the model execute shell commands in the project environment, subject to configurable allow, ask, or deny permissions."
  - id: 12
    text: "Evidence checked 2026-08-28: Zed's native Agent is documented as able to run code in the project, and its permission system includes a terminal tool."
  - id: 13
    text: "Evidence checked 2026-08-28: Warp Agent runs commands and interprets results in the local app; the same agent is also available through Warp Agent CLI."
  - id: 14
    text: "Evidence checked 2026-08-28: Devin executes shell commands in its hosted development environment and exposes the complete command history and outputs in the session UI."
  - id: 15
    text: "Evidence checked 2026-08-28: Aider includes a user-invoked `/run` command for executing shell commands and optionally adding output to chat, but the cited reference does not establish an autonomous model tool for proposing and running commands."
issues: []
resources:
  - id: amp-2026-08-terminal
    title: "Amp — Orbs"
    href: https://ampcode.com/docs/orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Use the Terminal"
  - id: amp-2026-08-terminal-tool
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Init tool inventory including Bash"
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
  - id: openwork-terminal
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-terminal
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-terminal
    title: GitHub — Allowing and denying tool use in Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-tools-terminal
    title: Cline — Tools reference
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: bash
  - id: continue-agent-terminal
    title: Continue — How Agent mode works
    href: https://docs.continue.dev/features/agent/how-it-works
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What Tools Are Available in Agent Mode
  - id: opencode-tools-terminal
    title: OpenCode — Tools
    href: https://opencode.ai/docs/tools/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: bash
  - id: zed-agent-terminal
    title: Zed — AI quick start
    href: https://zed.dev/docs/ai/quick-start
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use the Zed Agent
  - id: warp-agent-terminal
    title: Warp — Getting started with Warp
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: In the Warp app
  - id: devin-session-terminal
    title: Devin — Session tools
    href: https://docs.devin.ai/work-with-devin/devin-session-tools
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Shell and Terminal
  - id: aider-run-command
    title: Aider — In-chat commands
    href: https://aider.chat/docs/usage/commands.html
    kind: docs
    publisher: Aider
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: /run
  - id: jetbrains-ai-chat-mode
    title: JetBrains — Chat with AI
    href: https://www.jetbrains.com/help/ai-assistant/chat-mode.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Terminal-command responses and Run Snippet"
  - id: goose-developer-v1-48
    title: Goose — Developer Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/developer-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Developer tools; shell; security and access control"
  - id: replit-agent-commands
    title: Replit — Introduction to AI
    href: https://docs.replit.com/learn/foundations/introduction-to-ai
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Replit Agent"
  - id: replit-general-agent-runtime
    title: Replit — General Agent
    href: https://docs.replit.com/features/agent/general-agent
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Just start chatting; What to expect"
  - id: anthropic-claude-desktop-cycle6-terminal
    title: "Get started with Claude Cowork"
    href: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Current capability, permissions, and workflow sections"
support:
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [901]
        target:
          kind: dated-documentation
          revision: "Current official Anthropic documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Cowork mode in Claude Desktop"
          - type: policy
            value: "hosted shell isolation; local tools require explicit access"
          - type: format
            value: "agent-executed shell commands rather than a general interactive terminal panel"
        evidence:
          - resourceId: anthropic-claude-desktop-cycle6-terminal
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
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
            value: "local agent shell commands are distinct from the optional operator-visible orb terminal pane"
        evidence:
          - resourceId: amp-2026-08-terminal
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-terminal-tool
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [18]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "commands run in the Replit-hosted project environment rather than a terminal on the operator's local computer"
        evidence:
          - resourceId: replit-agent-commands
            type: documented
            observedAt: 2026-08-29
          - resourceId: replit-general-agent-runtime
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [17]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "commands run locally with the current user's privileges"
          - type: runtime
            value: "environment variables are inherited from the Goose process; desktop-launched and terminal-launched environments can differ"
          - type: policy
            value: "the Developer extension is enabled by default and approval behavior depends on permission mode"
          - type: policy
            value: "shell commands can receive sensitive inherited environment variables"
        evidence:
          - resourceId: goose-developer-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [16]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "command generation and execution are scoped to Chat mode in the local IDE"
          - type: policy
            value: "the operator invokes Run Snippet; plain AI Assistant is not documented as autonomously invoking a shell"
          - type: runtime
            value: "shell, working directory, and commands come from the host IDE and project environment"
        evidence:
          - resourceId: jetbrains-ai-chat-mode
            type: documented
            observedAt: 2026-08-29
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
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: shell execution is scoped by repository or working-directory permissions and potentially destructive commands require approval unless pre-authorized
        evidence:
          - resourceId: github-copilot-cli-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Cline documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: approval, auto-approval, or disablement depends on Cline settings and policy
        evidence:
          - resourceId: cline-tools-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current Continue documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: terminal execution is available in Agent mode, not read-only Plan mode, and depends on model tool-use support and tool policy
        evidence:
          - resourceId: continue-agent-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current OpenCode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: the Bash tool can be allowed, approval-gated, or denied through permission rules
        evidence:
          - resourceId: opencode-tools-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Zed documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: terminal calls remain subject to Zed Agent profiles, tool permissions, and workspace trust
        evidence:
          - resourceId: zed-agent-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [13]
        target:
          kind: dated-documentation
          revision: current Warp documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: the local Agent documents review and approval controls before actions execute
        evidence:
          - resourceId: warp-agent-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [14]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: commands run in Devin's hosted development environment rather than the operator's local terminal
        evidence:
          - resourceId: devin-session-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: partial
        noteIds: [15]
        target:
          kind: dated-documentation
          revision: current Aider documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the documented /run command is invoked by the person; this evidence does not establish an autonomous agent shell tool
        evidence:
          - resourceId: aider-run-command
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: shell execution remains subject to OpenWork and OpenCode permission rules
        evidence:
          - resourceId: openwork-terminal
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: commands run on the account-scoped hosted computer by default; credentials and files there are shared across the account's Bots
          - type: policy
            value: commands on the operator's local Mac or Windows computer are separately controlled and default to asking every time
        evidence:
          - resourceId: xai-grok-bot-terminal
            type: documented
            observedAt: 2026-08-28
---

This capability covers a built-in, permissioned route for an agent to propose or execute shell commands in its working environment. It does not claim unattended execution, access beyond the selected workspace, a particular shell, or identical approval behavior.

Only current product documentation is used here. Preview tracks and unreviewed surfaces remain unknown.
