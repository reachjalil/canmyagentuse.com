---
title: Multi-file edit
description: Edit multiple files during one task.
slug: multi-file-edit
locale: en
seoTitle: "Multi-file edit — Can My Agent Use"
socialTitle: Multi-file edit
socialDescription: Compare editing multiple files during one task.
llmSummary: Multi-file editing changes more than one file during a task. Review, approval, and source-control behavior are qualifiers rather than requirements of the term.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Edit multiple files during one task.
specLabel: Common product term
highlight: true
notes:
  - id: 7
    text: "Evidence checked 2026-08-29: Warp documents multi-file and repository-wide agent changes, including creating a module and updating imports, changing matching files, and updating affected routes plus tests in one task."
  - id: 6
    text: "Evidence checked 2026-08-29: Cognition's documented Figma-to-code Devin session creates three project files and updates a fourth during one implementation task before verifying the result and opening a pull request."
  - id: 5
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0's default Developer extension can create and edit multiple project files during one task, as shown by its first-party multi-file application-setup example."
  - id: 1
    text: No reviewed public evidence is attached to this capability row. Unknown records the evidence gap.
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code documents agents creating and editing multiple files from one natural-language request, then exposing the resulting changes in a multi-file diff."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor documents Agent searching the codebase and editing multiple files, with edits reviewed in its diff view."
  - id: 4
    text: "Evidence checked 2026-08-28: Claude Code documents reading multiple files and making coordinated edits across them in one task, but its CLI permission modes can review edits individually rather than as one grouped step."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: microsoft-vscode-multi-file-edits
    title: Visual Studio Code — Review and revert agent changes
    href: https://code.visualstudio.com/docs/agents/run/review-code-edits
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Review agent changes and multi-file diff
  - id: microsoft-vscode-agentic-coding
    title: Microsoft — Agentic coding in VS Code
    href: https://code.visualstudio.com/docs/agents/agents-tutorial
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Agent capabilities
  - id: cursor-agent-multi-file
    title: Cursor — Agent mode
    href: https://prod.cursor.com/help/ai-features/agent
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What Agent mode can do and review changes
  - id: anthropic-claude-code-multi-file
    title: Anthropic — How Claude Code works
    href: https://code.claude.com/docs/en/how-claude-code-works
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Agentic loop across a project
  - id: goose-developer-v1-48
    title: Goose — Developer Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/developer-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI example creating a multi-file JavaScript application"
  - id: devin-multi-file-figma-session
    title: Cognition — Figma to Pixel-Perfect Code
    href: https://docs.devin.ai/use-cases/gallery/figma-design-implementation
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Devin extracts, builds, and verifies; Opens a PR; New files and Updated"
  - id: warp-code-multi-file
    title: Warp — Code overview
    href: https://docs.warp.dev/code/overview
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Examples of coding capabilities — Multi-file and repo-wide changes; Complex workflows"
support:
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Warp's coding agent performs these changes in a local repository"
          - type: policy
            value: "application of generated diffs follows the active Agent Profile's Apply code diffs permission"
        evidence:
          - resourceId: warp-code-multi-file
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Devin hosted web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the cited workflow uses a linked Figma MCP for design input and applies resulting edits in the hosted repository workspace"
        evidence:
          - resourceId: devin-multi-file-figma-session
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "changes use local filesystem tools across multiple files in one Goose session"
          - type: policy
            value: "file changes follow the configured Goose permission mode"
          - type: runtime
            value: "tools can modify any accessible file rather than only files inside an enforced project sandbox"
        evidence:
          - resourceId: goose-developer-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code agentic-coding documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: agents apply edits in the session workspace or worktree; review and integration behavior varies by session mode
        evidence:
          - resourceId: microsoft-vscode-agentic-coding
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-multi-file-edits
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor Agent mode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Cursor Agent in the desktop workbench
        evidence:
          - resourceId: cursor-agent-multi-file
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Claude Code workflow documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: coordinated multi-file editing is documented, but whether edits are approved individually or reviewed after the fact depends on the active permission mode
        evidence:
          - resourceId: anthropic-claude-code-multi-file
            type: documented
            observedAt: 2026-08-28
---

Edit multiple files during one task. Review and approval behavior is recorded separately for each product.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
