---
title: Agent Skills progressive loading
description: "Load skill metadata first and defer full instructions or resources until relevant. This is tracked as an independent compatibility claim."
slug: skill-progressive-loading
locale: en
seoTitle: "Agent Skills progressive loading compatibility — Can My Agent Use"
socialTitle: Agent Skills progressive loading
socialDescription: "Load skill metadata first and defer full instructions or resources until relevant. Unreviewed product cells remain unknown."
llmSummary: "Agent Skills progressive loading is atomic and does not follow automatically from broader agent-skills support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, agent-skills]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: "Load skill metadata first and defer full instructions or resources until relevant."
specLabel: Agent Skills progressive loading
specification:
  id: agent-skills
  revision: "living"
  maturity: published convention
  role: "loading"
  authority: specification maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: ["progressive disclosure"]
parent: agent-skills
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code keeps skill descriptions available for discovery, loads the full `SKILL.md` body only on invocation, and reads supporting files on demand."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor documents on-demand loading for skill resources, keeping the main `SKILL.md` focused and loading optional resources only when needed."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents three loading levels: metadata always present, `SKILL.md` after activation, and bundled resources only as needed."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code documents three-level loading for skill metadata, the instruction body, and referenced resources."
issues: []
resources:
  - title: Agent Skills progressive loading reference
    href: https://agentskills.io/specification
    kind: spec
  - id: anthropic-claude-code-skills
    title: Anthropic — Extend Claude with skills
    href: https://code.claude.com/docs/en/slash-commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Control who invokes a skill; add supporting files
  - id: cursor-agent-skills
    title: Cursor — Agent Skills
    href: https://prod.cursor.com/docs/skills
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What are skills; optional directories
  - id: gemini-agent-skills-best-practices
    title: Gemini CLI — Agent Skill best practices
    href: https://geminicli.com/docs/cli/skills-best-practices/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Progressive disclosure
  - id: vscode-agent-skills
    title: Visual Studio Code — Use Agent Skills
    href: https://code.visualstudio.com/docs/agent-customization/agent-skills
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How Copilot uses skills
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

Load skill metadata first and defer full instructions or resources until relevant.

This row remains unknown until exact, dated evidence covers this behavior.
