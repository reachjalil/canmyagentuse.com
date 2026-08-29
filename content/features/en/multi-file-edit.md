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
support:
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
