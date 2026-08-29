---
title: Code execution
description: Run generated code in a documented execution environment.
slug: code-execution
locale: en
seoTitle: "Code execution — Can My Agent Use"
socialTitle: Code execution
socialDescription: Compare documented code-execution environments, permissions, and isolation.
llmSummary: Code execution runs generated code in a product-provided environment. Sandbox isolation, workspace access, permissions, language support, and persistence are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Run generated code in a documented execution environment.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop runs OpenCode and the OpenWork server against a selected workspace and documents shell execution as a permission-sensitive primitive; default sandbox isolation is not established."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code, Cursor Agent, Codex CLI, Gemini CLI, VS Code Copilot agents, GitHub Copilot CLI, Cline, Continue Agent mode, OpenCode, Zed Agent, and Warp agents each document running shell or terminal commands in a local project environment."
  - id: 3
    text: "Evidence checked 2026-08-28: Devin documents commands executed in its hosted development environment, and Grok Bot documents a persistent account-scoped cloud VM with a terminal."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-code-execution
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-code-execution
    title: Anthropic — How Claude Code works
    href: https://code.claude.com/docs/en/how-claude-code-works
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What Claude can access; Execution environments
  - id: cursor-code-execution
    title: Cursor — Agent overview
    href: https://cursor.com/docs/agent/overview
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Tools; Run shell commands
  - id: openai-codex-cli-code-execution
    title: OpenAI — Codex CLI
    href: https://learn.chatgpt.com/docs/codex/cli
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Work against your local repository
  - id: google-gemini-cli-code-execution
    title: Google — Gemini CLI tools reference
    href: https://geminicli.com/docs/reference/tools/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Execution; run_shell_command
  - id: microsoft-vscode-agent-tools
    title: Microsoft — Use tools with agents in VS Code
    href: https://code.visualstudio.com/docs/agents/run/tools
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Run terminal commands
  - id: github-copilot-cli-code-execution
    title: GitHub — Using GitHub Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Using Copilot CLI; tool approval
  - id: cline-code-execution
    title: Cline — All Cline tools
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Terminal Operations
  - id: continue-code-execution
    title: Continue — How Agent mode works
    href: https://docs.continue.dev/features/agent/how-it-works
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What tools are available in Agent mode
  - id: opencode-code-execution
    title: OpenCode — Tools
    href: https://opencode.ai/docs/tools/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: bash
  - id: zed-code-execution
    title: Zed — Agent tools
    href: https://zed.dev/docs/ai/tools
    kind: docs
    publisher: Zed
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: terminal
  - id: warp-code-execution
    title: Warp — Getting started with Warp and Oz
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Local agents
  - id: cognition-devin-code-execution
    title: Cognition — Devin session tools
    href: https://docs.devin.ai/work-with-devin/devin-session-tools
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Shell and Terminal
  - id: xai-grok-bot-code-execution
    title: xAI — Grok Bot overview
    href: https://docs.x.ai/grok-bot/overview
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What makes Grok Bot different
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: commands run on the user's machine by default; Claude Code also documents separate cloud and remote-control environments
          - type: policy
            value: command access is governed by Claude Code permissions and sandbox configuration
        evidence:
          - resourceId: anthropic-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor Agent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Agent executes terminal commands in the configured local terminal profile and monitors output
        evidence:
          - resourceId: cursor-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Codex runs tools already installed on the user's machine against the selected local repository
          - type: policy
            value: sandbox and approval settings constrain command execution
        evidence:
          - resourceId: openai-codex-cli-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: run_shell_command executes arbitrary shell commands and supports interactive sessions and background processes
          - type: policy
            value: the documented default requires manual confirmation; sandbox and policy settings can further restrict execution
        evidence:
          - resourceId: google-gemini-cli-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code agent tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the built-in terminal tool executes commands in a VS Code integrated terminal
          - type: policy
            value: approvals and terminal permission settings govern execution
        evidence:
          - resourceId: microsoft-vscode-agent-tools
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: modifying or executing files requires tool approval unless the operator grants broader permission
          - type: runtime
            value: local sandboxing can restrict commands; a separate cloud sandbox mode is also documented
        evidence:
          - resourceId: github-copilot-cli-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cline tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: execute_command runs CLI commands in the local project environment
          - type: policy
            value: approval and command-permission configuration can restrict execution
        evidence:
          - resourceId: cline-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Continue Agent mode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: run_terminal_command runs commands from the workspace root in Agent mode
          - type: policy
            value: user permission is requested unless the tool policy is Automatic
        evidence:
          - resourceId: continue-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current OpenCode tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the bash tool executes shell commands in the project environment
          - type: policy
            value: allow, ask, and deny permissions can be configured for shell execution
        evidence:
          - resourceId: opencode-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Zed Agent tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the terminal tool starts a new local shell process for each invocation and returns combined output
          - type: policy
            value: tool permissions, project trust, agent profiles, and optional terminal sandboxing constrain execution
        evidence:
          - resourceId: zed-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Warp and Oz documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local agents run commands and interpret their results in the user's coding environment
          - type: policy
            value: the operator can review and approve actions before execution
        evidence:
          - resourceId: warp-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Devin executes commands inside its hosted development environment and exposes command history and output in the web session
        evidence:
          - resourceId: cognition-devin-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: each account has a persistent cloud VM with a terminal; Bots on the account share the computer
          - type: policy
            value: the documented cloud computer is account-scoped rather than isolated per Bot
        evidence:
          - resourceId: xai-grok-bot-code-execution
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local workspace execution is documented; default sandbox isolation is not
          - type: policy
            value: execution is constrained by workspace and approval configuration
        evidence:
          - resourceId: openwork-code-execution
            type: documented
            observedAt: 2026-08-28
---

Run generated code in a documented execution environment. Sandbox isolation, workspace scope, permissions, persistence, and supported runtimes are recorded separately as qualifiers.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
