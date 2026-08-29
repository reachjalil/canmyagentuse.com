---
title: AGENTS.md root instructions
description: "Discover and apply the cross-agent AGENTS.md convention at repository scope. This is tracked as an independent compatibility claim."
slug: agents-md
locale: en
seoTitle: "AGENTS.md root instructions compatibility — Can My Agent Use"
socialTitle: AGENTS.md root instructions
socialDescription: "Discover and apply the cross-agent AGENTS.md convention at repository scope. Unreviewed product cells remain unknown."
llmSummary: "AGENTS.md root instructions is atomic and does not follow automatically from broader instructions support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, instructions]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Discover and apply the cross-agent AGENTS.md convention at repository scope."
specLabel: AGENTS.md convention
specification:
  id: agents-md
  revision: "living"
  maturity: published convention
  role: "instruction file"
  authority: specification maintainers
  canonicalUrl: https://agents.md
aliases: ["AGENTS.md"]
parent: instructions
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenAI documents automatic AGENTS.md discovery from the project root for Codex."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor documents AGENTS.md in the project root as an automatically applied plain-Markdown alternative to Cursor Rules."
  - id: 3
    text: "Evidence checked 2026-08-28: Microsoft documents automatic AGENTS.md detection at the VS Code workspace root."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI can load AGENTS.md through its configurable context.fileName setting; AGENTS.md is not the default filename."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub documents AGENTS.md discovery by Copilot CLI at the repository root and other standard locations."
  - id: 6
    text: "Evidence checked 2026-08-28: Cline documents AGENTS.md as a detected cross-tool rule format at the workspace root."
  - id: 7
    text: "Evidence checked 2026-08-28: Windsurf documents root AGENTS.md files as always-on workspace rules."
  - id: 8
    text: "Evidence checked 2026-08-28: Zed documents project AGENTS.md as an automatically loaded project instruction file."
issues: []
resources:
  - title: AGENTS.md root instructions reference
    href: https://agents.md
    kind: spec
  - id: openai-codex-agents-md
    title: OpenAI — Custom instructions with AGENTS.md
    href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How Codex discovers guidance
  - id: cursor-rules-agents-md
    title: Cursor — Rules
    href: https://prod.cursor.com/docs/rules
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: AGENTS.md
  - id: microsoft-vscode-custom-instructions
    title: Microsoft — Use custom instructions in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/custom-instructions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use an AGENTS.md file
  - id: google-gemini-context-files
    title: Google — Provide context with GEMINI.md files
    href: https://geminicli.com/docs/cli/gemini-md/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Customize the context file name
  - id: github-copilot-cli-custom-instructions
    title: GitHub — Adding custom instructions for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported instruction locations
  - id: cline-rules-agents-md
    title: Cline — Rules
    href: https://docs.cline.bot/customization/cline-rules
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported rule types and where rules live
  - id: windsurf-rules-agents-md
    title: Windsurf — Memories and Rules
    href: https://docs.windsurf.com/windsurf/cascade/memories
    kind: docs
    publisher: Windsurf
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Rules scope table
  - id: zed-agent-instructions
    title: Zed — Agent instructions
    href: https://zed.dev/docs/ai/instructions
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Project Instructions and Instruction File Support
support:
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Codex AGENTS.md documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openai-codex-agents-md
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
          - resourceId: cursor-rules-agents-md
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [3]
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
  - harness: gemini-cli
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Gemini CLI context-file documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: requires adding AGENTS.md to context.fileName because GEMINI.md is the default context filename
        evidence:
          - resourceId: google-gemini-context-files
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
        qualifiers:
          - type: host-role
            value: claim is scoped to the Cline editor agent and workspace-root AGENTS.md discovery
        evidence:
          - resourceId: cline-rules-agents-md
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Windsurf Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: windsurf-rules-agents-md
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Zed Agent instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Zed Agent rather than external agents or terminal threads
          - type: runtime
            value: Zed uses the first matching project instruction filename in its documented priority list, so a higher-priority compatible rules file can supersede AGENTS.md
        evidence:
          - resourceId: zed-agent-instructions
            type: documented
            observedAt: 2026-08-28
---

Discover and apply the cross-agent AGENTS.md convention at repository scope.

Support is recorded only when exact, dated evidence covers this behavior.
