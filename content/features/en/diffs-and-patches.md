---
title: Diffs and patches
description: Propose or apply file changes as diffs or patches.
slug: diffs-and-patches
locale: en
seoTitle: "Diffs and patches — Can My Agent Use"
socialTitle: Diffs and patches
socialDescription: Compare diff generation, review, and patch application.
llmSummary: Diffs and patches represent proposed file changes in a reviewable patch form. Generation, application, approval, and source-control integration are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Propose or apply file changes as diffs or patches.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: No reviewed public evidence is attached to this capability row. Unknown records the evidence gap.
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code displays agent edits in file and multi-file diff views, with review, feedback, keep, undo, and discard controls."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor presents Agent changes in a diff review interface with file-by-file navigation and selective acceptance or rejection."
  - id: 4
    text: "Evidence checked 2026-08-28: Cline documents a built-in apply_patch tool for applying unified diffs to files."
  - id: 5
    text: "Evidence checked 2026-08-28: Continue Edit streams proposed changes as inline diffs that can be accepted or rejected."
  - id: 6
    text: "Evidence checked 2026-08-28: OpenCode documents a built-in apply_patch tool that applies patch text to project files under the edit permission."
  - id: 7
    text: "Evidence checked 2026-08-28: Aider documents generating a file diff and applying the edit directly during a chat."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: microsoft-vscode-review-edits
    title: Visual Studio Code — Review and revert agent changes
    href: https://code.visualstudio.com/docs/agents/run/review-code-edits
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Review agent changes
  - id: cursor-diffs-review
    title: Cursor — Diffs and Review
    href: https://docs.cursor.com/en/agent/review
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Diffs and Review
  - id: cline-apply-patch
    title: Cline — Tools reference
    href: https://docs.cline.bot/tools-reference/all-cline-tools
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Built-In Tools
  - id: continue-inline-diffs
    title: Continue — Quick Start with Edit
    href: https://docs.continue.dev/ide-extensions/edit/quick-start
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to accept or reject changes
  - id: opencode-apply-patch
    title: OpenCode — Tools
    href: https://opencode.ai/docs/tools
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: apply_patch
  - id: aider-diff-edit
    title: Aider — Specifying coding conventions
    href: https://aider.chat/docs/usage/conventions.html
    kind: docs
    publisher: Aider
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Example transcript showing generated diff and applied edit
support:
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code agent-edit review documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: review presentation varies by Chat view, Agents window, isolation mode, and editing settings
        evidence:
          - resourceId: microsoft-vscode-review-edits
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor diff-review documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Cursor Agent in the desktop workbench
        evidence:
          - resourceId: cursor-diffs-review
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cline tools reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: tool approval or auto-approval depends on Cline settings and policy
        evidence:
          - resourceId: cline-apply-patch
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Continue Edit documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Continue Edit in its supported IDE extensions
        evidence:
          - resourceId: continue-inline-diffs
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current OpenCode tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: apply_patch is governed by the edit permission, which may allow, ask, or deny the operation
        evidence:
          - resourceId: opencode-apply-patch
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Aider editing documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: aider-diff-edit
            type: documented
            observedAt: 2026-08-28
---

Propose and apply file diffs without a full git flow.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
