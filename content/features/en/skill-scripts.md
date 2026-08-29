---
title: Agent Skills scripts
description: "Resolve and execute optional scripts included with an Agent Skill under explicit runtime policy. This is tracked as an independent compatibility claim."
slug: skill-scripts
locale: en
seoTitle: "Agent Skills scripts compatibility — Can My Agent Use"
socialTitle: Agent Skills scripts
socialDescription: "Resolve and execute optional scripts included with an Agent Skill under explicit runtime policy. Unreviewed product cells remain unknown."
llmSummary: "Agent Skills scripts is atomic and does not follow automatically from broader agent-skills support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, agent-skills]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: "Resolve and execute optional scripts included with an Agent Skill under explicit runtime policy."
specLabel: Agent Skills specification
specification:
  id: agent-skills
  revision: "living"
  maturity: published convention
  role: "component"
  authority: specification maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: ["skill scripts"]
parent: agent-skills
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code skills can bundle executable scripts, reference them relative to the skill directory, and run them through Claude Code's permission-governed tools."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor documents executable `scripts/` contents in any language supported by the agent environment and shows the agent running referenced scripts."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents bundled executable scripts, per-activation user consent, and a worked example that executes a skill's JavaScript helper."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code documents skills containing scripts and points to terminal approval and allow-list controls for script execution."
issues: []
resources:
  - title: Agent Skills scripts reference
    href: https://agentskills.io/specification
    kind: spec
  - id: anthropic-claude-code-skills
    title: Anthropic — Extend Claude with skills
    href: https://code.claude.com/docs/en/slash-commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add supporting files; generate visual output
  - id: cursor-agent-skills
    title: Cursor — Agent Skills
    href: https://prod.cursor.com/docs/skills
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Including scripts in skills
  - id: gemini-creating-agent-skills
    title: Gemini CLI — Creating Agent Skills
    href: https://geminicli.com/docs/cli/creating-skills/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add the tool logic; test the skill
  - id: vscode-agent-skills
    title: Visual Studio Code — Use Agent Skills
    href: https://code.visualstudio.com/docs/agent-customization/agent-skills
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Agent Skills versus custom instructions; use shared skills
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
          - type: policy
            value: script execution remains governed by the active tool permissions and workspace trust
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
          - type: policy
            value: actual execution depends on the agent's tool permissions and available language runtime
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
            value: the user must approve each skill activation before the skill can execute scripts or access files
        evidence:
          - resourceId: gemini-creating-agent-skills
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
        qualifiers:
          - type: policy
            value: script execution uses VS Code's terminal tool and remains subject to approval or configured allow-list controls
        evidence:
          - resourceId: vscode-agent-skills
            type: documented
            observedAt: 2026-08-28
---

Resolve and execute optional scripts included with an Agent Skill under explicit runtime policy.

Support is recorded only when exact, dated evidence covers this behavior.
