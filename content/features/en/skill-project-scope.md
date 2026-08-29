---
title: Project-scoped Agent Skills
description: "Discover skills installed for a repository or workspace. This is tracked as an independent compatibility claim."
slug: skill-project-scope
locale: en
seoTitle: "Project-scoped Agent Skills compatibility — Can My Agent Use"
socialTitle: Project-scoped Agent Skills
socialDescription: "Discover skills installed for a repository or workspace. Unreviewed product cells remain unknown."
llmSummary: "Project-scoped Agent Skills is atomic and does not follow automatically from broader agent-skills support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, agent-skills]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: "Discover skills installed for a repository or workspace."
specLabel: Project-scoped Agent Skills
specification:
  id: agent-skills
  revision: "living"
  maturity: published convention
  role: "scope"
  authority: specification maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: ["project skills"]
parent: agent-skills
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code discovers project skills from `.claude/skills/` in the working directory, parent directories through the repository root, and nested directories on demand."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor discovers project skills from `.agents/skills/`, `.cursor/skills/`, and compatible Claude or Codex project directories."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI discovers workspace skills from `.gemini/skills/` and the portable `.agents/skills/` alias, with workspace entries taking precedence over user entries of the same name."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code discovers project skills from `.github/skills/`, `.claude/skills/`, and `.agents/skills/`, with optional additional project locations."
issues: []
resources:
  - title: Project-scoped Agent Skills reference
    href: https://agentskills.io/specification
    kind: spec
  - id: anthropic-claude-code-skills
    title: Anthropic — Extend Claude with skills
    href: https://code.claude.com/docs/en/slash-commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Where skills live; automatic discovery from parent and nested directories
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
        qualifiers: []
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

Discover skills installed for a repository or workspace.

This row remains unknown until exact, dated evidence covers this behavior.
