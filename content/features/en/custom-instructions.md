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
support:
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
