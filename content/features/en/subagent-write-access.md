---
title: Subagent write access
description: "Allow a child agent to create or modify project files. This is tracked as an independent compatibility claim."
slug: subagent-write-access
locale: en
seoTitle: "Subagent write access compatibility — Can My Agent Use"
socialTitle: Subagent write access
socialDescription: "Allow a child agent to create or modify project files. Unreviewed product cells remain unknown."
llmSummary: "Subagent write access is atomic and does not follow automatically from broader subagents support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, subagents]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: "Allow a child agent to create or modify project files."
specLabel: Common product term
aliases: ["child agent edits"]
parent: subagents
related: []
highlight: false
notes:
  - id: 77
    text: "Evidence checked 2026-09-02: Copilot CLI custom subagents configure allowed tools (defaulting to all tools including file write and apply_patch) and delegated cloud agents create Git branches and edit project files."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 says each subagent receives the parent's tools, while the native inventory includes edit_file and write_file for project modifications."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp specialist subagents can access file-editing and terminal tools, and separate agent threads can modify their own isolated working copies."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code subagents can inherit Edit and Write tools or receive an explicit tool allowlist; `acceptEdits` and worktree isolation provide documented write-control modes."
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code custom agents used as subagents can receive the `edit` tool, and the official coordinator example assigns code-writing work to an Implementer child."
  - id: 53
    text: "Evidence checked 2026-08-29: Dynamic Workflow child agents can modify code, push work to new branches, and report the branch and summary as structured output."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native child-agent spawning or delegated subagent lifecycle."
issues: []
resources:
  - id: github-copilot-cli-cca-write
    title: "GitHub Copilot CLI — Delegate tasks to Copilot cloud agent"
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/delegate-tasks-to-cca
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Delegated cloud agent modifies files and pushes branches"
  - id: github-copilot-cli-custom-agents-tools
    title: "GitHub Copilot CLI — Create custom agents"
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "tools frontmatter field — permissions to edit and modify files"
  - id: zed-v1-17-2-tools
    title: "Zed v1.17.2 — Agent Tools"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/tools.md#L66-L112"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Edit Tools, lines 66–98; spawn_agent, lines 108–112"
  - id: amp-2026-08-subagent-write
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Specialist Subagents"
  - id: amp-2026-08-agent-write
    title: "Amp — Agent to Agent"
    href: https://ampcode.com/docs/orbs/agent-to-agent
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Separate working copies and file exchange"
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/subagents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Available tools; permission modes; worktree isolation
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Coordinator and worker pattern
  - id: cognition-devin-dynamic-workflows
    title: "Cognition — Devin Dynamic Workflows"
    href: https://docs.devin.ai/work-with-devin/dynamic-workflows
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Example; Separate VM; Shared VM"
  - id: aider-v0860-production-tree
    title: "Aider v0.86.0 — complete production package"
    href: "https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete aider package at the stable release commit"
  - id: aider-v0860-args-source
    title: "Aider v0.86.0 — complete CLI argument parser"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete get_parser option declarations"
  - id: aider-v0860-commands-source
    title: "Aider v0.86.0 — complete in-chat command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete command implementation"
  - id: aider-v0860-dependencies
    title: "Aider v0.86.0 — stable runtime dependencies"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/requirements.txt"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete stable runtime dependency manifest"
support:
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "write access exists only when the parent profile includes edit and write tools and permissions, trust, and sandbox policy allow the path"
        evidence:
          - resourceId: zed-v1-17-2-tools
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
            value: "write access stays inside the child context or working copy; uncommitted parent files do not transfer automatically"
        evidence:
          - resourceId: amp-2026-08-subagent-write
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-agent-write
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
            value: "separate-VM child writes on its own branch; shared-VM children may share the current working tree"
        evidence:
          - resourceId: cognition-devin-dynamic-workflows
            type: documented
            observedAt: 2026-08-29
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
          - type: policy
            value: actual writes depend on the subagent's tools, permission mode, inherited parent permissions, and optional worktree isolation
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: writes require the child configuration to expose an editing tool and remain subject to VS Code trust and approval controls
        evidence:
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [84]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; external orchestration, community wrappers, model-side role prompts, AiderDesk, and unreleased proposals do not count"
          - type: host-role
            value: "Aider's architect/editor model handoff stays inside one CLI editing loop and is not a spawned child-agent lifecycle"
        evidence:
          - resourceId: aider-v0860-production-tree
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-args-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-dependencies
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: dated-documentation
          revision: GitHub Copilot CLI documentation observed 2026-09-02
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: child agents have write access by default through tools list or delegated branch execution
        evidence:
          - resourceId: github-copilot-cli-cca-write
            type: documented
            observedAt: 2026-09-02
          - resourceId: github-copilot-cli-custom-agents-tools
            type: documented
            observedAt: 2026-09-02
---

Allow a child agent to create or modify project files.

Support is recorded only when exact, dated evidence covers this behavior.
