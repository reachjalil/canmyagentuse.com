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
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code subagents can inherit Edit and Write tools or receive an explicit tool allowlist; `acceptEdits` and worktree isolation provide documented write-control modes."
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code custom agents used as subagents can receive the `edit` tool, and the official coordinator example assigns code-writing work to an Implementer child."
  - id: 53
    text: "Evidence checked 2026-08-29: Dynamic Workflow child agents can modify code, push work to new branches, and report the branch and summary as structured output."
issues: []
resources:
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
support:
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
---

Allow a child agent to create or modify project files.

Support is recorded only when exact, dated evidence covers this behavior.
