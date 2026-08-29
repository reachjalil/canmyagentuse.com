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
updated: 2026-08-29
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
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 loads project Markdown rules from .aiassistant/rules and supports always, manual, model-decision, file-pattern, and disabled modes."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 loads persistent local files, glob patterns, and remote instruction URLs through the product-native opencode.json instructions field."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp provides persistent Global Rules and repository-scoped Project Rules with documented automatic injection and current-directory, root, and global precedence."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin Review discovers path-scoped REVIEW.md instructions and administrator-configured review globs, but this native-rules behavior is not established for ordinary Agent sessions."
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
  - id: jetbrains-ai-project-rules
    title: JetBrains AI Assistant — Configure project rules
    href: https://www.jetbrains.com/help/ai-assistant/configure-project-rules.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Create a new project rule; configure when rules are applied
  - id: opencode-v1-18-25-rules
    title: "OpenCode v1.18.25 — Rules"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/rules.mdx#L107-L147
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Custom Instructions; Referencing External Files"
  - id: warp-rules
    title: "Warp — Rules for agents"
    href: https://docs.warp.dev/agents/capabilities/rules/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Global Rules; Project Rules; Rules precedence"
  - id: cognition-devin-review-rules
    title: "Cognition — Devin Review"
    href: https://docs.devin.ai/work-with-devin/devin-review
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Instruction Files; Custom Review Rules; REVIEW.md"
support:
  - harness: devin-web
    versions:
      - track: current
        status: partial
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "Devin Review only; not established for general hosted Agent sessions"
          - type: format
            value: "directory-scoped **/REVIEW.md plus administrator-configured review-context globs"
        evidence:
          - resourceId: cognition-devin-review-rules
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
          - type: format
            value: "Global Rules in Warp Drive or Settings; Project Rules in AGENTS.md or legacy WARP.md"
          - type: policy
            value: "current-subdirectory rules override root rules, which override Global Rules"
        evidence:
          - resourceId: warp-rules
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "project or global opencode.json instructions array with local paths, globs, or HTTPS URLs"
        evidence:
          - resourceId: opencode-v1-18-25-rules
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: project Markdown files under .aiassistant/rules with selectable activation modes
        evidence:
          - resourceId: jetbrains-ai-project-rules
            type: documented
            observedAt: 2026-08-29
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
