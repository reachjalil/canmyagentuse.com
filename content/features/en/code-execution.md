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
updated: 2026-08-29
published: 2026-08-28
category: tools
summary: Run generated code in a documented execution environment.
specLabel: Common product term
highlight: false
notes:
  - id: 85
    text: "Evidence checked 2026-08-29: Claude Desktop can execute code and create or edit files in an isolated Anthropic-hosted sandbox, shows action summaries for auditability, and lets the user stop execution."
  - id: 84
    text: "Evidence checked 2026-08-29: Gemini Spark uses a product-provided remote computer to run code and can retain remote code-execution files and data across sessions until the user deletes them or turns off Spark."
  - id: 83
    text: "Evidence checked 2026-08-29: Microsoft says consumer Copilot can run code to complete complex calculations and generate graphs. The documentation does not describe a general-purpose user-visible runtime, supported languages, isolation, network access, persistence, or arbitrary code execution."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 documents /run for local code or shell-command execution and optional output ingestion; /test and configured auto-test commands can run code after edits and feed failures back for repair."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp runs shell commands and tests on the operator's behalf; CLI-launched orbs provide a complete machine where the agent can install dependencies, run apps, and test changes."
  - id: 6
    text: "Evidence checked 2026-08-29: Replit General Agent executes code as part of its reasoning in the hosted project environment, with documented compatibility limits in Replit's Nix environment."
  - id: 5
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0 can run model-generated JavaScript in a custom Deno-based runtime through its opt-in built-in Code Mode extension."
  - id: 4
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant Chat mode provides a Run Snippet action that executes generated code in the host JetBrains IDE environment."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop runs OpenCode and the OpenWork server against a selected workspace and documents shell execution as a permission-sensitive primitive; default sandbox isolation is not established."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code, Cursor Agent, Codex CLI, Gemini CLI, VS Code Copilot agents, GitHub Copilot CLI, Cline, Continue Agent mode, OpenCode, Zed Agent, and Warp agents each document running shell or terminal commands in a local project environment."
  - id: 3
    text: "Evidence checked 2026-08-28: Devin documents commands executed in its hosted development environment, and Grok Bot documents a persistent account-scoped cloud VM with a terminal."
issues: []
resources:
  - id: anthropic-claude-desktop-code-execution
    title: Anthropic — Create and edit files with Claude
    href: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Availability; Security and isolation; Team and Enterprise owner controls
  - id: aider-v0860-lint-test
    title: "Aider v0.86.0 — Linting and testing"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/lint-test.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Testing; Manually running code"
  - id: aider-v0860-commands-run
    title: "Aider v0.86.0 — In-chat commands"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/commands.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "/run and /test"
  - id: amp-2026-08-code-execution
    title: "Amp — Tools"
    href: https://ampcode.com/docs/tools
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Built-in tools and shell commands"
  - id: amp-2026-08-orb-execution
    title: "Amp — Orbs"
    href: https://ampcode.com/docs/orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Why Use an Orb?"
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
  - id: jetbrains-ai-chat-mode
    title: JetBrains — Chat with AI
    href: https://www.jetbrains.com/help/ai-assistant/chat-mode.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Run Snippet response action"
  - id: goose-code-mode-extension-v1-48
    title: Goose — Code Mode Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/code-mode-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Configuration and Deno-based execution runtime"
  - id: goose-code-mode-guide-v1-48
    title: Goose — Code Mode at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/guides/managing-tools/code-mode.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tool discovery, composition, execution, and result limits"
  - id: replit-general-agent-runtime
    title: Replit — General Agent
    href: https://docs.replit.com/features/agent/general-agent
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What to expect"
  - id: microsoft-copilot-individual-transparency-2026-08
    title: "Transparency Note for Microsoft Copilot (for individuals)"
    href: "https://support.microsoft.com/en-us/privacy/microsoft-copilot/transparency-note"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "System behavior; Use cases; Limitations — Dependence on Internet connectivity"
  - id: google-gemini-web-spark-tasks
    title: "Google Gemini Apps Help — Use Gemini Spark to manage your tasks & workflows in Gemini Apps"
    href: "https://support.google.com/gemini/answer/17094507?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Delete remote browser & computer data — Delete remote code execution data; Remote browser & computer"
support:
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [85]
        target:
          kind: dated-documentation
          revision: current official Claude code-execution documentation reviewed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: generated code runs in an isolated Anthropic-hosted sandbox
          - type: plan
            value: available across Claude plans, subject to usage limits
          - type: policy
            value: Team and Enterprise owners can control whether code execution and file creation are enabled
        evidence:
          - resourceId: anthropic-claude-desktop-code-execution
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [84]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Spark web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: experimental
            value: "Gemini Spark is experimental and in early development"
          - type: plan
            value: "requires Google AI Pro or Ultra"
          - type: auth
            value: "requires age 18 or over, a personal Google Account, and Keep Activity; unavailable to work or school accounts"
          - type: region
            value: "unavailable in the EEA, Nigeria, Switzerland, and the UK"
          - type: runtime
            value: "hosted remote-computer environment; languages, runtime versions, dependency catalog, resource limits, and isolation boundary are not enumerated"
          - type: policy
            value: "remote execution history and files persist until deleted or Spark is turned off"
        evidence:
          - resourceId: google-gemini-web-spark-tasks
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [83]
        target:
          kind: hosted-observation
          revision: "Microsoft Copilot web for individuals, Transparency Note dated 2026-08-18"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "the Transparency Note applies to individuals signed in with a personal Microsoft account"
          - type: runtime
            value: "documented for complex calculations and graph generation; no general shell, language matrix, sandbox contract, or persistent runtime is established"
        evidence:
          - resourceId: microsoft-copilot-individual-transparency-2026-08
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "execution occurs in the operator's local environment or the container in which Aider runs"
          - type: policy
            value: "/run is operator-invoked and does not establish an autonomous shell tool"
          - type: runtime
            value: "--auto-test is disabled by default; manual /test remains available"
        evidence:
          - resourceId: aider-v0860-lint-test
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-run
            type: documented
            observedAt: 2026-08-29
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
            value: "execution can occur in the local CLI workspace or a remote orb selected from the CLI"
        evidence:
          - resourceId: amp-2026-08-code-execution
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-orb-execution
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "execution occurs in the Replit-hosted environment that General Agent sets up for the project"
          - type: runtime
            value: "some technologies may not be fully supported in Replit's Nix environment"
        evidence:
          - resourceId: replit-general-agent-runtime
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "generated JavaScript runs in Goose's custom Deno-based Port of Context runtime"
          - type: policy
            value: "the built-in code_execution extension is disabled by default and must be enabled"
          - type: runtime
            value: "Code Mode is scoped to programmatic discovery, composition, and invocation of enabled tools"
          - type: format
            value: "only text content from tool results is supported; image and binary results are ignored"
        evidence:
          - resourceId: goose-code-mode-extension-v1-48
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-code-mode-guide-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "execution uses the host IDE and project environment; no JetBrains-provided isolated sandbox is documented"
          - type: policy
            value: "execution is initiated by the operator through Run Snippet"
          - type: runtime
            value: "runnable languages and dependencies depend on the selected JetBrains IDE, project SDK, and local tooling"
        evidence:
          - resourceId: jetbrains-ai-chat-mode
            type: documented
            observedAt: 2026-08-29
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
