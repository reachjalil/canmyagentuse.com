---
title: Agent Skills manual invocation
description: "Let a user or agent explicitly select and activate a named skill. This is tracked as an independent compatibility claim."
slug: skill-manual-invocation
locale: en
seoTitle: "Agent Skills manual invocation compatibility — Can My Agent Use"
socialTitle: Agent Skills manual invocation
socialDescription: "Let a user or agent explicitly select and activate a named skill. Unreviewed product cells remain unknown."
llmSummary: "Agent Skills manual invocation is atomic and does not follow automatically from broader agent-skills support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, agent-skills]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: "Let a user or agent explicitly select and activate a named skill."
specLabel: Agent Skills specification
specification:
  id: agent-skills
  revision: "living"
  maturity: published convention
  role: "activation"
  authority: specification maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: ["manual skill invocation"]
parent: agent-skills
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code exposes discovered skills as `/skill-name` commands and supports `disable-model-invocation: true` for user-only activation."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor lets users invoke a discovered skill by selecting `/skill-name` in Agent chat and can disable automatic model invocation."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI lets users list, enable, disable, reload, and link named skills, and requires user consent whenever a matched skill activates; the reviewed guide does not document a direct `/skill-name` invocation form."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code lists skills in the `/` menu, accepts `/skill-name` with optional context, and supports manual-only skills through `disable-model-invocation`."
issues: []
resources:
  - title: Agent Skills manual invocation reference
    href: https://agentskills.io/specification
    kind: spec
  - id: anthropic-claude-code-skills
    title: Anthropic — Extend Claude with skills
    href: https://code.claude.com/docs/en/slash-commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Control who invokes a skill
  - id: cursor-agent-skills
    title: Cursor — Agent Skills
    href: https://prod.cursor.com/docs/skills
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How skills work; disabling automatic invocation
  - id: gemini-agent-skills
    title: Gemini CLI — Managing Agent Skills
    href: https://geminicli.com/docs/cli/using-agent-skills/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: In-session management; security and consent
  - id: vscode-agent-skills
    title: Visual Studio Code — Use Agent Skills
    href: https://code.visualstudio.com/docs/agent-customization/agent-skills
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use skills as slash commands
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
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: named enable, disable, reload, and link controls plus per-activation consent are documented; direct `/skill-name` invocation was not established by the reviewed guide
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

Let a user or agent explicitly select and activate a named skill.

Support is recorded only when exact, dated evidence covers this behavior.
