---
title: Subagent context
description: Define which conversation, instructions, files, memory, and tools a child agent receives.
slug: subagent-context-isolation
locale: en
seoTitle: Subagent context compatibility — Can My Agent Use
socialTitle: Subagent context
socialDescription: Compare child-agent context, inheritance, isolation, and context-window behavior.
llmSummary: Subagent context describes what a child receives from its parent. Fresh context, copied history, selected files, shared memory, and task-only context are recorded as distinct qualifiers.
audience: Engineers evaluating multi-agent correctness, privacy, and token cost.
contentKind: feature
status: published
tags: [runtime, subagents, context, isolation, security]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Define which conversation, instructions, files, memory, and tools a child receives.
specLabel: Common product term
aliases: [child context, subagent isolation, context inheritance]
parent: subagents
related: [context-window, subagent-approval-boundaries, secrets-management]
notes:
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 gives each spawn_agent child its own context window and the same tools as its parent, but does not fully define history, instruction, memory, or file-context inheritance."
  - id: 75
    text: "Evidence checked 2026-08-29: each Replit background task runs in a separate conversation thread and isolated project copy, leaving the main version untouched until review, but precise instruction, memory, secret, and tool inheritance is not documented."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp subagents have separate context windows and selected context rather than the full conversation; agent-to-agent threads additionally get separate workspaces."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code runs each subagent in its own context window with a custom system prompt and tool set; the child receives its task rather than the parent conversation history and returns a summary."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI subagents use an independent context loop, independent history, explicit tool sets, and recursion protection."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor subagents start with clean context, do not receive prior parent history, receive relevant information through the delegation prompt, and may use isolated project copies."
  - id: 4
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI describes subagents as separate-context workers, allowing offloaded information to stay outside the main context window."
  - id: 5
    text: "Evidence checked 2026-08-28: VS Code documents a separate context window that excludes the parent conversation history and receives the child task, applicable instructions, and current agent configuration."
  - id: 52
    text: "Evidence checked 2026-08-29: Each local Warp child has an independent run, conversation, transcript, lifecycle, working directory, and credit usage, coordinating through explicit messages."
  - id: 53
    text: "Evidence checked 2026-08-29: Each Dynamic Workflow child runs in its own VM by default and cannot see orchestrator files, with an optional shared-VM mode for the working tree and uncommitted changes."
issues: []
resources:
  - id: zed-v1-17-2-tools
    title: "Zed v1.17.2 — Agent Tools"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/tools.md#L108-L112"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "spawn_agent, lines 108–112"
  - id: replit-agent-task-system-current
    title: "Replit — Task system"
    href: "https://docs.replit.com/core-concepts/agent/task-system"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is the task system?; Tasks start running; Review and apply"
  - id: amp-2026-08-subagent-isolation
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Specialist Subagents"
  - id: amp-2026-08-agent-thread-isolation
    title: "Amp — Agent to Agent"
    href: https://ampcode.com/docs/orbs/agent-to-agent
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Send Out a Side Quest"
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
    locator: How subagents work; manage subagent context
  - id: google-gemini-cli-subagents
    title: Google — Gemini CLI subagents
    href: https://geminicli.com/docs/core/subagents/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-subagents
    title: Cursor — Subagents
    href: https://cursor.com/docs/subagents
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-custom-agents
    title: GitHub — Creating custom agents for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-agent-concepts
    title: Visual Studio Code — Agents concepts
    href: https://code.visualstudio.com/docs/agents/concepts/agents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Subagents
  - id: warp-orchestration
    title: "Warp — Multi-agent orchestration"
    href: https://docs.warp.dev/platform/orchestration/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Parent/child model; where agents run; messaging"
  - id: cognition-devin-dynamic-workflows
    title: "Cognition — Devin Dynamic Workflows"
    href: https://docs.devin.ai/work-with-devin/dynamic-workflows
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Where agents run; Separate VM; Shared VM"
support:
  - harness: zed-agent
    versions:
      - track: current
        status: partial
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "own context window and parent tool set are explicit; initial history, instruction, memory, and file-context inheritance remain unspecified"
          - type: policy
            value: "effective tools depend on parent profile, model support, permissions, trust, and sandbox settings"
        evidence:
          - resourceId: zed-v1-17-2-tools
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent task-system documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "conversation and working-copy isolation are explicit; exact inherited instructions, memory, tools, secrets, and context-window behavior remain undocumented"
          - type: policy
            value: "changes merge into the main project only after operator review and Apply changes"
        evidence:
          - resourceId: replit-agent-task-system-current
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
            value: "native specialists are isolated; separate agent threads also have distinct conversations, working copies, and orbs"
        evidence:
          - resourceId: amp-2026-08-subagent-isolation
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-agent-thread-isolation
            type: documented
            observedAt: 2026-08-29
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
            value: "separate VM is the default; shared VM is optional"
        evidence:
          - resourceId: cognition-devin-dynamic-workflows
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
            value: "agents do not read one another's transcripts or live working trees; local children are separate conversations on the same machine"
        evidence:
          - resourceId: warp-orchestration
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: a child has independent history and only explicitly granted tools; it cannot invoke another subagent even when granted the all-tools wildcard
        evidence:
          - resourceId: google-gemini-cli-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: clean child context receives a parent-composed task prompt; project files share the checkout by default but can be isolated in a worktree, branch, or cloud VM
        evidence:
          - resourceId: cursor-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: each subagent receives its own context window; exact inheritance of credentials, instructions, files, and later parent changes remains separately qualified
        evidence:
          - resourceId: github-copilot-cli-custom-agents
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the child has a separate model context but normally shares the parent process's project files and environment unless worktree isolation is configured
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code agent-concepts documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the model context is isolated; project files and tools remain available according to the child agent configuration
        evidence:
          - resourceId: vscode-agent-concepts
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the child-agent boundary has documented context semantics. A child may start fresh, receive the full parent transcript, inherit only a task prompt and selected files, share project memory, or receive a compacted summary. Those modes have different correctness, privacy, and token-cost consequences.

Evidence should record inherited system and project instructions, conversation turns, tool schemas, environment variables, files, long-term memory, credentials, approval state, and context budget. It should also say whether later parent changes propagate and whether the operator can inspect the exact handoff.
