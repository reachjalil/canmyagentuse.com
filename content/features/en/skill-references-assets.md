---
title: Agent Skills references and assets
description: "Resolve supporting reference files, templates, and assets from a skill package. This is tracked as an independent compatibility claim."
slug: skill-references-assets
locale: en
seoTitle: "Agent Skills references and assets compatibility — Can My Agent Use"
socialTitle: Agent Skills references and assets
socialDescription: "Resolve supporting reference files, templates, and assets from a skill package. Unreviewed product cells remain unknown."
llmSummary: "Agent Skills references and assets is atomic and does not follow automatically from broader agent-skills support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, agent-skills]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: "Resolve supporting reference files, templates, and assets from a skill package."
specLabel: Agent Skills references and assets
specification:
  id: agent-skills
  revision: "living"
  maturity: published convention
  role: "component"
  authority: specification maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: ["skill assets"]
parent: agent-skills
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code skills may include templates, examples, scripts, and detailed references addressed from `SKILL.md`; supporting files load only when needed."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor documents optional `references/` and `assets/` directories and loads referenced resources progressively."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents `references/` for on-demand documentation and `assets/` for templates and other non-executable resources."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code resolves relative references to files in a skill directory and loads referenced resources only when needed."
issues: []
resources:
  - title: Agent Skills references and assets reference
    href: https://agentskills.io/specification
    kind: spec
  - id: anthropic-claude-code-skills
    title: Anthropic — Extend Claude with skills
    href: https://code.claude.com/docs/en/slash-commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add supporting files
  - id: cursor-agent-skills
    title: Cursor — Agent Skills
    href: https://prod.cursor.com/docs/skills
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Optional directories
  - id: gemini-agent-skills-best-practices
    title: Gemini CLI — Agent Skill best practices
    href: https://geminicli.com/docs/cli/skills-best-practices/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Bundle resources effectively; anatomy of a great skill
  - id: vscode-agent-skills
    title: Visual Studio Code — Use Agent Skills
    href: https://code.visualstudio.com/docs/agent-customization/agent-skills
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Create a skill; how Copilot uses skills
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
        qualifiers:
          - type: policy
            value: the user must approve skill activation before it can access bundled resources
        evidence:
          - resourceId: gemini-agent-skills-best-practices
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

Resolve supporting reference files, templates, and assets from a skill package.

This row remains unknown until exact, dated evidence covers this behavior.
