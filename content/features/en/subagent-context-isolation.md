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
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Define which conversation, instructions, files, memory, and tools a child receives.
specLabel: Common product term
aliases: [child context, subagent isolation, context inheritance]
parent: subagents
related: [context-window, subagent-approval-boundaries, secrets-management]
notes:
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
issues: []
resources:
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
support:
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
