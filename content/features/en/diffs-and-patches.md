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
updated: 2026-08-31
published: 2026-08-28
category: tools
summary: Propose or apply file changes as diffs or patches.
specLabel: Common product term
highlight: false
notes:
  - id: 77
    text: "Evidence checked 2026-08-31: Devin Local Quick Review analyzes the current diff, while legacy Cascade Arena presents independent accept or reject controls; the exact review workflow varies by runtime."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 opens agent changes in a multi-buffer review diff, supports accepting or rejecting individual hunks or the whole change set, and can show the same controls inline."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp exposes a Changes view that lists changes since the last commit and supports reviewing and staging agent-generated diffs."
  - id: 11
    text: "Evidence checked 2026-08-29: Replit's Task board lets an operator open the diff for a ready Agent task and apply its isolated changes to the main project or dismiss them."
  - id: 10
    text: "Evidence checked 2026-08-29: Warp's local Code Review panel displays agent and Git changes as diffs, supports direct editing and application, reverts individual hunks, and discards file- or branch-scope changes."
  - id: 9
    text: "Evidence checked 2026-08-29: Devin logs code edits in the hosted session's Progress view and provides an embedded IDE diff view for reviewing the resulting file changes."
  - id: 8
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant presents generated refactoring through See Diff and Apply, and current Chat mode lets the user navigate proposed changes, accept or discard all, or revert an individual change."
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
  - id: cognition-devin-desktop-quick-review
    title: "Cognition — Quick Review"
    href: https://docs.devin.ai/desktop/quick-review
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Review a diff with Devin Local"
  - id: cognition-devin-desktop-arena
    title: "Cognition — Cascade Arena"
    href: https://docs.devin.ai/desktop/cascade/arena
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Accept and reject model changes"
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L114-L123"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Reviewing Changes, lines 114–123"
  - id: amp-2026-08-diffs
    title: "Amp — Threads"
    href: https://ampcode.com/docs/threads
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Inside a Thread — Changes"
  - id: amp-2026-08-diff-review
    title: "Amp — Diffs"
    href: https://ampcode.com/news/diffs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Review and stage agent changes"
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
  - id: jetbrains-ai-refactor-diff
    title: JetBrains — Refactor Code with AI Assistant
    href: https://www.jetbrains.com/guide/ai/tips/refactor-code/
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "See Diff and Apply"
  - id: jetbrains-ai-chat-change-review
    title: JetBrains — Chat with AI
    href: https://www.jetbrains.com/help/ai-assistant/chat-mode.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Review, accept, discard, and revert proposed changes"
  - id: devin-session-diff-review
    title: Cognition — Devin Session Tools
    href: https://docs.devin.ai/work-with-devin/devin-session-tools
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Progress Tab; Devin IDE; Integration and Workflow"
  - id: warp-code-review
    title: Warp — Code Review panel
    href: https://docs.warp.dev/code/code-review
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Reviewing diffs; Reverting diffs; Directly editing code diffs"
  - id: replit-agent-task-diff
    title: Replit — Task board
    href: https://docs.replit.com/features/agent/task-board
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Ready; task settings"
support:
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [77]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Quick Review is a Devin Local diff-analysis workflow; independent accept and reject controls are documented for legacy Cascade Arena
        evidence:
          - resourceId: cognition-devin-desktop-quick-review
            type: documented
            observedAt: 2026-08-31
          - resourceId: cognition-devin-desktop-arena
            type: documented
            observedAt: 2026-08-31
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
          - type: runtime
            value: "multi-buffer review is standard; inline single-file review requires agent.single_file_review=true"
        evidence:
          - resourceId: zed-v1-17-2-agent-panel
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
            value: "CLI threads can open the current diff in a browser; orb Changes supports review and staging"
        evidence:
          - resourceId: amp-2026-08-diffs
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-diff-review
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the diff represents changes produced in a task's isolated hosted project copy"
          - type: policy
            value: "ready-task changes can be reviewed and either applied to the main project or dismissed"
        evidence:
          - resourceId: replit-agent-task-diff
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the panel operates in a local Git repository and compares uncommitted changes, the current branch against main, or arbitrary branches"
          - type: policy
            value: "generated-diff application can require review according to Agent Profile permissions"
        evidence:
          - resourceId: warp-code-review
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Devin hosted web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the diff view presents edits made in Devin's hosted repository workspace"
          - type: policy
            value: "the documented workflow reviews changes after Devin edited files rather than requiring a pre-application approval gate"
        evidence:
          - resourceId: devin-session-diff-review
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the reviewed plain-Chat workflow applies a suggestion to the currently open file"
          - type: policy
            value: "the operator reviews and accepts or rejects changes"
          - type: runtime
            value: "the evidence does not establish patch-file export, multi-file patch application, or autonomous agent edits"
        evidence:
          - resourceId: jetbrains-ai-refactor-diff
            type: documented
            observedAt: 2026-08-29
          - resourceId: jetbrains-ai-chat-change-review
            type: documented
            observedAt: 2026-08-29
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
