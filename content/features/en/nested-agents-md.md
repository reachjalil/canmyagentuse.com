---
title: Nested AGENTS.md instructions
description: "Apply nested AGENTS.md files with directory-sensitive precedence. This is tracked as an independent compatibility claim."
slug: nested-agents-md
locale: en
seoTitle: "Nested AGENTS.md instructions compatibility — Can My Agent Use"
socialTitle: Nested AGENTS.md instructions
socialDescription: "Apply nested AGENTS.md files with directory-sensitive precedence. Unreviewed product cells remain unknown."
llmSummary: "Nested AGENTS.md instructions is atomic and does not follow automatically from broader instructions support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, instructions]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Apply nested AGENTS.md files with directory-sensitive precedence."
specLabel: AGENTS.md convention
specification:
  id: agents-md
  revision: "living"
  maturity: published convention
  role: "scope and precedence"
  authority: specification maintainers
  canonicalUrl: https://agents.md
aliases: ["nested AGENTS.md"]
parent: instructions
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Codex walks from the project root to the working directory, concatenating AGENTS.md guidance root-to-leaf so nearer files override earlier guidance."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor combines nested AGENTS.md files with parent instructions and gives more-specific directories precedence."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code's nested AGENTS.md support is experimental and exposes discovered paths to the agent, which decides relevance rather than enforcing documented nearest-file precedence."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI provides hierarchical and just-in-time context discovery, but AGENTS.md requires configuring context.fileName."
  - id: 5
    text: "Evidence checked 2026-08-28: Copilot CLI discovers AGENTS.md in intermediate directories and directories nested in the path of a file it is working on, but the reviewed CLI page does not define conflict precedence."
  - id: 6
    text: "Evidence checked 2026-08-28: Windsurf converts subdirectory AGENTS.md files into directory-scoped automatic rules, but the reviewed page does not define conflict precedence between nested files."
issues: []
resources:
  - title: Nested AGENTS.md instructions reference
    href: https://agents.md
    kind: spec
  - id: openai-codex-nested-agents-md
    title: OpenAI — Custom instructions with AGENTS.md
    href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How Codex discovers guidance
  - id: cursor-nested-agents-md
    title: Cursor — Rules
    href: https://prod.cursor.com/docs/rules
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Nested AGENTS.md support
  - id: microsoft-vscode-nested-agents-md
    title: Microsoft — Use custom instructions in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/custom-instructions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use multiple AGENTS.md files
  - id: google-gemini-context-hierarchy
    title: Google — Provide context with GEMINI.md files
    href: https://geminicli.com/docs/cli/gemini-md/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Understand the context hierarchy and customize the context file name
  - id: github-copilot-cli-nested-instructions
    title: GitHub — Adding custom instructions for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Standard instruction discovery locations
  - id: windsurf-nested-agents-md
    title: Windsurf — Memories and Rules
    href: https://docs.windsurf.com/windsurf/cascade/memories
    kind: docs
    publisher: Windsurf
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Rules scope table
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
          - resourceId: openai-codex-nested-agents-md
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
          - resourceId: cursor-nested-agents-md
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        stage: experimental
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: feature-flag
            value: requires chat.useNestedAgentsMdFiles
          - type: runtime
            value: VS Code adds relative paths to chat context and lets the agent decide which instructions to use; deterministic nearest-file precedence is not documented
        evidence:
          - resourceId: microsoft-vscode-nested-agents-md
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
            value: hierarchical and just-in-time discovery applies only after AGENTS.md is added to context.fileName; GEMINI.md is the default
        evidence:
          - resourceId: google-gemini-context-hierarchy
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the CLI documentation establishes directory-sensitive discovery but does not specify conflict precedence between nested AGENTS.md files
        evidence:
          - resourceId: github-copilot-cli-nested-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Windsurf Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: root AGENTS.md is always on and subdirectory files become automatic glob-scoped rules, but conflict precedence is not documented
        evidence:
          - resourceId: windsurf-nested-agents-md
            type: documented
            observedAt: 2026-08-28
---

Apply nested AGENTS.md files with directory-sensitive precedence.

Support is recorded only when exact, dated evidence covers this behavior.
