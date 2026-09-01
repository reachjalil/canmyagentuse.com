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
updated: 2026-08-31
published: 2026-08-28
category: tools
summary: Edit multiple files during one task.
specLabel: Common product term
highlight: true
notes:
  - id: 903
    text: "Evidence checked 2026-08-31: Devin Desktop Code Mode supports complex refactors across files, and its worktree workflow isolates parallel edits before merging them back into the main workspace."
  - id: 902
    text: "Evidence checked 2026-08-29: personal-account Cowork can create and edit Word documents, Excel spreadsheets, PowerPoint presentations, and PDFs in a task, and Microsoft expressly describes tasks that produce multiple output files downloadable together. The documentation does not promise coordinated source-controlled changes or atomic edits across arbitrary local files."
  - id: 901
    text: "Evidence checked 2026-08-29: Claude Desktop Cowork reads, creates, edits, organizes, and saves multiple files within folders the user explicitly connects."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 accepts multiple source paths at launch, can add multiple files during chat, and edits those files within one coding task."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 documents native Agent file editing and a review surface that reports every edited file and opens all changes together in a multi-buffer tab."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 documents coordinated changes across related project files, with checkpoints and a diff covering every file affected by a tool operation."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp threads record the files changed by the agent, expose create_file and edit_file tools, and support independent work across different code areas."
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
  - id: cognition-devin-desktop-worktrees-edits
    title: "Cognition — Worktrees"
    href: https://docs.devin.ai/desktop/cascade/worktrees
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Parallel tasks; merge changes back"
  - id: aider-v0860-usage
    title: "Aider v0.86.0 — Usage"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding files; Making changes"
  - id: aider-v0860-commands
    title: "Aider v0.86.0 — In-chat commands"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/commands.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "/add and file-management commands"
  - id: zed-v1-17-2-zed-agent
    title: "Zed v1.17.2 — Zed Agent"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/zed-agent.md#L8-L20"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Native Zed Agent capabilities, lines 8–20"
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L114-L123"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Reviewing Changes, lines 114–123"
  - id: cline-v4-1-16-multi-file-edit
    title: "Cline v4.1.16 — Checkpoints"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/core-workflows/checkpoints.mdx#L15-L26"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Multi-file example and affected-files diff"
  - id: amp-2026-08-multi-file
    title: "Amp — Threads"
    href: https://ampcode.com/docs/threads
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Thread files changed; Changes pane"
  - id: amp-2026-08-file-tools
    title: "Amp — Streaming JSON"
    href: https://ampcode.com/docs/cli/streaming-json
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Init tools create_file and edit_file"
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
  - id: anthropic-claude-desktop-cycle6-multi-file-edit
    title: "Get started with Claude Cowork"
    href: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Current capability, permissions, and workflow sections"
  - id: microsoft-copilot-cowork-personal-preview-2026-08
    title: "Get started with Cowork (preview)"
    href: "https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-cowork"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "For personal accounts (preview); What you can do with Cowork; Review files and results; Limitations"
support:
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [903]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: worktrees can isolate parallel multi-file work before changes are merged back
        evidence:
          - resourceId: cognition-devin-desktop-worktrees-edits
            type: documented
            observedAt: 2026-08-31
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [902]
        target:
          kind: hosted-observation
          revision: "Microsoft Copilot web Cowork for personal accounts, August 2026 preview documentation"
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: preview
            value: "Cowork for personal accounts is preview"
          - type: plan
            value: "eligible Microsoft 365 subscription"
          - type: auth
            value: "personal Microsoft account"
          - type: runtime
            value: "hosted Cowork task and cloud files; no arbitrary local project or source-control transaction is established"
        evidence:
          - resourceId: microsoft-copilot-cowork-personal-preview-2026-08
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [901]
        target:
          kind: dated-documentation
          revision: "Current official Anthropic documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Cowork with a connected local folder"
          - type: policy
            value: "read and write access is limited to user-approved folders"
          - type: format
            value: "coordinated multi-file and document operations"
        evidence:
          - resourceId: anthropic-claude-desktop-cycle6-multi-file-edit
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
            value: "files can be named at launch, added with /add, or selected by Aider from the repository"
          - type: policy
            value: "Aider recommends adding only task-relevant files because every added file consumes context"
        evidence:
          - resourceId: aider-v0860-usage
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands
            type: documented
            observedAt: 2026-08-29
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
            value: "file tools remain subject to the active Agent Profile, tool permissions, project trust, and sandbox policy"
        evidence:
          - resourceId: zed-v1-17-2-zed-agent
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-agent-panel
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "coordinated project edits with per-operation checkpoints"
          - type: policy
            value: "edits remain reviewable and revertible from the VS Code diff surface"
        evidence:
          - resourceId: cline-v4-1-16-multi-file-edit
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
            value: "the agent coordinates changes through repeated file-tool calls in one thread"
        evidence:
          - resourceId: amp-2026-08-multi-file
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-file-tools
            type: documented
            observedAt: 2026-08-29
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
