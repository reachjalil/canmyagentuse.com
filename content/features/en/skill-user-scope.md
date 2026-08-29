---
title: User-scoped Agent Skills
description: "Discover personal or global skills outside the current project. This is tracked as an independent compatibility claim."
slug: skill-user-scope
locale: en
seoTitle: "User-scoped Agent Skills compatibility — Can My Agent Use"
socialTitle: User-scoped Agent Skills
socialDescription: "Discover personal or global skills outside the current project. Unreviewed product cells remain unknown."
llmSummary: "User-scoped Agent Skills is atomic and does not follow automatically from broader agent-skills support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, agent-skills]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: "Discover personal or global skills outside the current project."
specLabel: Agent Skills specification
specification:
  id: agent-skills
  revision: "living"
  maturity: published convention
  role: "scope"
  authority: specification maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: ["personal skills"]
parent: agent-skills
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code discovers personal skills from `~/.claude/skills/` and makes them available across projects."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor discovers user-level skills from `~/.agents/skills/`, `~/.cursor/skills/`, and compatible Claude or Codex directories on the machine where the agent runs."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI discovers user skills from `~/.gemini/skills/` and `~/.agents/skills/`, available across projects."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code discovers personal skills from `~/.copilot/skills/`, `~/.claude/skills/`, and `~/.agents/skills/`."
issues: []
resources:
  - title: User-scoped Agent Skills reference
    href: https://agentskills.io/specification
    kind: spec
  - id: anthropic-claude-code-skills
    title: Anthropic — Extend Claude with skills
    href: https://code.claude.com/docs/en/slash-commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Where skills live
  - id: cursor-agent-skills
    title: Cursor — Agent Skills
    href: https://prod.cursor.com/docs/skills
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Skill directories
  - id: gemini-agent-skills
    title: Gemini CLI — Managing Agent Skills
    href: https://geminicli.com/docs/cli/using-agent-skills/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Discovery tiers
  - id: vscode-agent-skills
    title: Visual Studio Code — Use Agent Skills
    href: https://code.visualstudio.com/docs/agent-customization/agent-skills
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Create a skill
support:
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code skills documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: preview
            value: the catalog's Claude Code Agent Skills core row remains qualified as beta
        evidence:
          - resourceId: anthropic-claude-code-skills
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local user-scope folders are read from the machine where Cursor Agent runs and are not copied to Cloud Agents, remote SSH sessions, or managed workers
        evidence:
          - resourceId: cursor-agent-skills
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: gemini-agent-skills
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vscode-agent-skills
            type: documented
            observedAt: 2026-08-28
---

Discover personal or global skills outside the current project.

Support is recorded only when exact, dated evidence covers this behavior.
