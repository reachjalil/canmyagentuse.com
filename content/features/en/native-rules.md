---
title: Project rules
description: "Load persistent or path-scoped instructions from a documented product rule format."
slug: native-rules
locale: en
seoTitle: "Project rules compatibility — Can My Agent Use"
socialTitle: Project rules
socialDescription: "Discover persistent or path-scoped instructions in the product's own rule format. Unreviewed product cells remain unknown."
llmSummary: "Product-native rules is atomic and does not follow automatically from broader instructions support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, instructions]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Load persistent or path-scoped instructions from a documented product rule format."
specLabel: Common product term
aliases: ["agent rules"]
parent: instructions
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code loads persistent CLAUDE.md instructions and recursively discovers unconditional or path-scoped Markdown rules in .claude/rules."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor project rules are versioned .mdc files under .cursor/rules with always-on, relevance, glob, or manual activation."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI automatically loads hierarchical GEMINI.md context files and discovers more-specific files just in time."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code supports workspace-wide copilot-instructions.md plus path- or task-scoped .instructions.md files."
  - id: 5
    text: "Evidence checked 2026-08-28: Copilot CLI supports repository-wide copilot-instructions.md and path-specific .instructions.md files."
  - id: 6
    text: "Evidence checked 2026-08-28: Cline's primary workspace rule format is Markdown or text under .clinerules, with optional paths conditions."
  - id: 7
    text: "Evidence checked 2026-08-28: Continue loads persistent workspace rules from .continue/rules and supports glob-scoped rule frontmatter."
  - id: 8
    text: "Evidence checked 2026-08-28: Windsurf loads workspace Markdown rules from .windsurf/rules with always-on, glob, model-decision, or manual activation."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: microsoft-vscode-custom-instructions
    title: Visual Studio Code — Custom instructions
    href: https://code.visualstudio.com/docs/agent-customization/custom-instructions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Types of instruction files and .instructions.md files
  - id: anthropic-claude-code-memory-rules
    title: Anthropic — How Claude remembers your project
    href: https://code.claude.com/docs/en/memory
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: CLAUDE.md files and organize rules with .claude/rules
  - id: cursor-project-rules
    title: Cursor — Rules
    href: https://prod.cursor.com/docs/rules
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Project rules and rule anatomy
  - id: google-gemini-context-files
    title: Google — Provide context with GEMINI.md files
    href: https://geminicli.com/docs/cli/gemini-md/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Understand the context hierarchy
  - id: github-copilot-cli-custom-instructions
    title: GitHub — Adding custom instructions for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported instruction locations
  - id: cline-primary-rules
    title: Cline — Rules
    href: https://docs.cline.bot/customization/cline-rules
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported rule types and paths conditional
  - id: continue-project-rules
    title: Continue — Create and manage rules
    href: https://docs.continue.dev/customize/deep-dives/rules
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Project-specific rules and rule file frontmatter
  - id: windsurf-workspace-rules
    title: Windsurf — Memories and Rules
    href: https://docs.windsurf.com/windsurf/cascade/memories
    kind: docs
    publisher: Windsurf
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Rules scope table
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code memory documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-memory-rules
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Cursor Agent in the desktop workbench
        evidence:
          - resourceId: cursor-project-rules
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI context-file documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: google-gemini-context-files
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: microsoft-vscode-custom-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: github-copilot-cli-custom-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cline Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: cline-primary-rules
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Continue Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: continue-project-rules
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Windsurf Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: windsurf-workspace-rules
            type: documented
            observedAt: 2026-08-28
---

Load persistent or path-scoped instructions from a documented product rule format.

Support is recorded only when exact, dated evidence covers this behavior.
