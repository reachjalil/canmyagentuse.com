---
title: Human approval
description: Pause before a tool action or file change until a person confirms.
slug: human-approval
locale: en
seoTitle: "Human approval — Can My Agent Use"
socialTitle: Human approval
socialDescription: Compare approval prompts, remembered decisions, and policy boundaries.
llmSummary: Human approval pauses an action until a person confirms or denies it. Action scope, remembered decisions, and policy behavior are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Pause before a tool action or file change until a person confirms.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop surfaces permission requests and documents allow-once, always-allow, and deny responses."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot shows a proposed operation and inputs before approval; desktop controls include Allow once, Deny, and matching Always allow rules, while Require Approval rules take precedence."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code Manual mode stops before most file edits, shell commands, or network access, and its plan flow can keep edits blocked until the person approves the plan."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor requires manual approval for sensitive actions by default, including terminal commands, MCP connections and calls, and configuration-file edits; ordinary workspace-file edits are saved immediately without approval."
  - id: 5
    text: "Evidence checked 2026-08-28: Gemini CLI requires manual confirmation for file-modifying tools and shell commands and shows the proposed diff or exact command before execution."
  - id: 6
    text: "Evidence checked 2026-08-28: VS Code can show a confirmation dialog for tool calls, with approval scopes ranging from one use through future invocations and managed rules that can continue to require approval."
  - id: 7
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI prompts before destructive shell commands, file edits, or URL access unless the relevant permission has already been granted."
  - id: 8
    text: "Evidence checked 2026-08-28: Cline documents approval or auto-approval policies, including requiring approval for risky Bash and write/edit operations."
  - id: 9
    text: "Evidence checked 2026-08-28: Continue Agent mode asks the user for permission between a model tool call and tool execution unless that tool's policy is set to Automatic."
  - id: 10
    text: "Evidence checked 2026-08-28: OpenCode permission rules can resolve a tool call to ask, and an ask prompt offers once, session-scoped always, or reject outcomes."
  - id: 11
    text: "Evidence checked 2026-08-28: Zed Agent tool permissions support confirm, always-allow, and always-deny rules for terminal, edit, write, delete, fetch, MCP, and other tools."
  - id: 12
    text: "Evidence checked 2026-08-28: Warp says local Agent users can review changes and approve actions before they execute."
  - id: 13
    text: "Evidence checked 2026-08-28: Replit Plan mode waits for plan approval before Agent changes project files, but this is an opt-in plan-level gate rather than a documented per-tool approval system."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-permissions
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-approvals
    title: xAI — Grok Bot approvals, security, and privacy
    href: https://docs.x.ai/grok-bot/approvals-security-and-privacy
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-permission-modes
    title: Anthropic — Claude Code permission modes
    href: https://code.claude.com/docs/en/permission-modes
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Available modes and review and approve a plan
  - id: cursor-agent-security
    title: Cursor — Agent security
    href: https://prod.cursor.com/docs/agent/security
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: First-party tool calls
  - id: gemini-cli-tools-approval
    title: Google — Gemini CLI tools reference
    href: https://geminicli.com/docs/reference/tools/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Automatic execution and security
  - id: vscode-agent-approvals
    title: Microsoft — Manage approvals and permissions in VS Code
    href: https://code.visualstudio.com/docs/agents/run/approvals
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Tool approval
  - id: github-copilot-cli-tool-permissions
    title: GitHub — Allowing and denying tool use in Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-tool-approval-controls
    title: Cline — Tools and approval controls
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Approval and Policy Controls
  - id: continue-agent-tool-handshake
    title: Continue — How Agent mode works
    href: https://docs.continue.dev/features/agent/how-it-works
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How the Tool Handshake Works
  - id: opencode-permissions
    title: OpenCode — Permissions
    href: https://opencode.ai/docs/permissions/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What Ask Does
  - id: zed-tool-permissions
    title: Zed — Tool permissions
    href: https://zed.dev/docs/ai/tool-permissions
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: warp-agent-overview
    title: Warp — Getting started with Warp
    href: https://docs.warp.dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: In the Warp app
  - id: replit-agent-plan-mode
    title: Replit — Build with Agent
    href: https://docs.replit.com/learn/build-with-agent
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Plan the work
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: prompts depend on permission mode and rules; acceptEdits, auto, dontAsk, and bypassPermissions reduce or remove routine prompts
        evidence:
          - resourceId: anthropic-claude-code-permission-modes
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: ordinary workspace-file edits do not prompt; terminal, MCP, configuration-file, and sensitive actions do unless pre-approved or another run mode applies
        evidence:
          - resourceId: cursor-agent-security
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
        qualifiers:
          - type: policy
            value: security policy and sandbox configuration still determine the effective execution boundary
        evidence:
          - resourceId: gemini-cli-tools-approval
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
        qualifiers:
          - type: policy
            value: permission level, tool settings, saved approvals, and organization-managed rules determine which calls prompt
        evidence:
          - resourceId: vscode-agent-approvals
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: command-line and saved permissions can pre-authorize calls; deny rules take precedence
        evidence:
          - resourceId: github-copilot-cli-tool-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Cline documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: settings and policy can require approval, auto-approve, or disable specific tools
        evidence:
          - resourceId: cline-tool-approval-controls
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Continue documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: a tool whose policy is Automatic skips the human permission step
        evidence:
          - resourceId: continue-agent-tool-handshake
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current OpenCode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: approval requires an ask rule; tools are enabled without prompts by default
        evidence:
          - resourceId: opencode-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Zed documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: per-tool defaults and matching allow, deny, and confirm patterns determine prompts
        evidence:
          - resourceId: zed-tool-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Warp documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: warp-agent-overview
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [13]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Agent documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the documented gate applies when Plan mode is selected and approves the plan before file changes, not each tool call
        evidence:
          - resourceId: replit-agent-plan-mode
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: effective prompts depend on workspace and server approval configuration
        evidence:
          - resourceId: openwork-permissions
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: Auto Review is model-based and complements rather than replaces explicit approval boundaries and least privilege
          - type: runtime
            value: local-computer execution defaults to asking every time and is configured separately from cloud-computer actions
        evidence:
          - resourceId: xai-grok-bot-approvals
            type: documented
            observedAt: 2026-08-28
---

Pause before a tool action or file change until a person confirms.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
