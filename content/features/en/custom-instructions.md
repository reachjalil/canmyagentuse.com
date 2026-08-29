---
title: Custom instructions
description: Persist instructions at user or project scope.
slug: custom-instructions
locale: en
seoTitle: "Custom instructions — Can My Agent Use"
socialTitle: Custom instructions
socialDescription: Compare persistent user and project instructions by exact product surface.
llmSummary: Custom instructions persist user- or project-scoped guidance. Storage format, discovery, scope, and precedence are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: Persist instructions at user or project scope.
specLabel: Common product term
parent: instructions
highlight: false
notes:
  - id: 5
    text: "Evidence checked 2026-08-29: the current Devin Desktop product supports persistent global, workspace, personal, and directory-scoped instructions through AGENTS.md and native rule files, while retaining legacy Windsurf configuration paths."
  - id: 4
    text: "Evidence checked 2026-08-29: Amp CLI documents persistent project, personal, and system-wide instruction scopes through automatically loaded AGENTS.md files and Amp-specific configuration locations."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork's server owns workspace .opencode configuration, including skills, agents, commands, and other persistent OpenCode instruction primitives."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT desktop documents cross-chat custom instructions, while Codex CLI documents global and nested project AGENTS.md discovery with explicit precedence."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code, Cursor, Gemini CLI, VS Code Copilot, GitHub Copilot CLI, Cline, Continue, OpenCode, Zed Agent, and Warp each document persistent user-, project-, workspace-, or path-scoped instruction files or rules."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-instructions
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-chatgpt-personalize
    title: OpenAI — Personalize ChatGPT
    href: https://learn.chatgpt.com/docs/personalize
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add custom instructions
  - id: openai-codex-agents-md
    title: OpenAI — Custom instructions with AGENTS.md
    href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How Codex discovers guidance
  - id: anthropic-claude-code-memory
    title: Anthropic — How Claude remembers your project
    href: https://code.claude.com/docs/en/memory
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: CLAUDE.md files; choose where to put files
  - id: cursor-rules
    title: Cursor — Rules
    href: https://cursor.com/docs/rules
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Project Rules; User Rules
  - id: google-gemini-md
    title: Google — GEMINI.md context files
    href: https://geminicli.com/docs/cli/gemini-md/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Hierarchical context loading
  - id: microsoft-copilot-custom-instructions
    title: Microsoft — Custom instructions in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/custom-instructions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-custom-instructions
    title: GitHub — Add custom instructions for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-rules
    title: Cline — Cline Rules
    href: https://docs.cline.bot/customization/cline-rules
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: continue-rules
    title: Continue — Rules
    href: https://docs.continue.dev/customize/rules
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: opencode-rules
    title: OpenCode — Rules
    href: https://opencode.ai/docs/rules/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: zed-instructions
    title: Zed — Instructions
    href: https://zed.dev/docs/ai/instructions
    kind: docs
    publisher: Zed
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: warp-ai-rules
    title: Warp — Rules for Agent Mode
    href: https://docs.warp.dev/knowledge-and-collaboration/warp-drive/ai-objects
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: amp-custom-instructions
    title: Amp — AGENTS.md
    href: https://ampcode.com/docs/customize/agents-md
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Automatic inclusion; personal instructions; system-wide instructions; Granular Guidance"
  - id: cognition-desktop-local-rules
    title: Cognition — Rules and AGENTS.md
    href: https://docs.devin.ai/cli/extensibility/rules
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "AGENTS.md; Global Rules; Personal Rules; Rules in the .devin Directory"
  - id: cognition-desktop-cascade-rules
    title: Cognition — Cascade Memories
    href: https://docs.devin.ai/desktop/cascade/memories
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Rules; Rules Discovery; storage locations and activation"
support:
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "global instructions load for every project, while project and personal instructions can be repository-scoped"
          - type: host-role
            value: "Devin Local uses the Devin CLI rules system and legacy Cascade uses the desktop Rules engine"
          - type: format
            value: "AGENTS.md, AGENTS.local.md, .devin/rules Markdown, and backward-compatible .windsurf/rules Markdown are documented"
          - type: vendor-extension
            value: "the current desktop documentation uses Devin Desktop naming while preserving legacy Windsurf paths"
        evidence:
          - resourceId: cognition-desktop-local-rules
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-desktop-cascade-rules
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Amp AGENTS.md documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "project guidance can use repository-root or subtree AGENTS.md files"
          - type: runtime
            value: "personal guidance loads from documented Amp configuration locations"
          - type: policy
            value: "system-wide guidance can be installed in documented operating-system-specific locations"
          - type: runtime
            value: "AGENTS.md can reference conditional instruction files with globs"
        evidence:
          - resourceId: amp-custom-instructions
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop personalization documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: personal custom instructions apply across chats and are managed from desktop personalization settings
        evidence:
          - resourceId: openai-chatgpt-personalize
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code memory documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: CLAUDE.md supports managed, user, project, and local scopes; path-scoped rules load for matching files
          - type: policy
            value: instructions shape model behavior but are not a hard enforcement layer
        evidence:
          - resourceId: anthropic-claude-code-memory
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: project rules can be stored under .cursor/rules and user rules apply globally in Cursor settings
        evidence:
          - resourceId: cursor-rules
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex AGENTS.md documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: global AGENTS.md guidance is layered with project-root and nested-directory instructions; closer files override earlier guidance
          - type: runtime
            value: combined project instruction discovery stops at 32 KiB by default
        evidence:
          - resourceId: openai-codex-agents-md
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
        qualifiers:
          - type: runtime
            value: GEMINI.md files provide hierarchical global and project context with documented discovery and import behavior
        evidence:
          - resourceId: google-gemini-md
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
        qualifiers:
          - type: runtime
            value: personal, repository-wide, and path-specific instruction scopes are documented for Copilot agents in VS Code
        evidence:
          - resourceId: microsoft-copilot-custom-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: user, repository, and path-specific instructions are supported, including AGENTS.md and GitHub instruction formats
        evidence:
          - resourceId: github-copilot-cli-custom-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cline Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: workspace and global rules persist in .clinerules or rule directories
        evidence:
          - resourceId: cline-rules
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Continue rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: rules provide persistent workspace or personal guidance in Agent, Chat, and Edit workflows
        evidence:
          - resourceId: continue-rules
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current OpenCode rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: project AGENTS.md and global rule files provide persistent instructions
        evidence:
          - resourceId: opencode-rules
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Zed instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Zed supports personal AGENTS.md and project instruction files with documented precedence
        evidence:
          - resourceId: zed-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Warp rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: global rules and project AGENTS.md or WARP.md files persist guidance for Agent Mode
        evidence:
          - resourceId: warp-ai-rules
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: precedence and file discovery are supplied by the embedded OpenCode runtime
        evidence:
          - resourceId: openwork-instructions
            type: documented
            observedAt: 2026-08-28
---

Persist project or user instruction files. OpenWork's sourced cell covers its server-owned OpenCode workspace configuration; it does not claim that every instruction format or precedence rule is unique to OpenWork.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
