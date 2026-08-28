---
title: Agent Skills
description: Discover and load reusable SKILL.md instruction packages, with current-track evidence for selected chat and coding harnesses.
slug: skills
locale: en
seoTitle: Agent Skills compatibility — Can My Agent Use
socialTitle: Can my agent use Agent Skills?
socialDescription: Current-track Agent Skills support by exact harness surface, with dated public evidence.
llmSummary: Agent Skills are reusable packages centered on SKILL.md. Selected harnesses document discovery or use; plan, code-execution, scope, and beta conditions remain explicit.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [runtime, skills, instructions, packaging]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Discover and load reusable instruction packages centered on SKILL.md.
specLabel: Agent Skills
specification:
  id: agent-skills
  revision: living
  maturity: open standard
  role: consuming agent or host
  authority: Agent Skills maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: [SKILL.md, skill packs, reusable workflows]
related: [custom-instructions, plugins]
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT supports OpenAI Skills following the Agent Skills open standard, but personal skill availability and administration vary by plan, workspace, and surface."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude can dynamically load Agent Skills across plans when code execution is enabled; organization controls and feature prerequisites still apply."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code supports Agent Skills in beta, so the CLI cell is conditional rather than unqualified support."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents automatic discovery, manual invocation, progressive loading, and project or user skill directories."
  - id: 5
    text: "Evidence checked 2026-08-28: OpenAI documents skills as reusable capabilities for Codex across its local agent surfaces, including CLI workflows."
  - id: 6
    text: "Evidence checked 2026-08-28: Gemini CLI documents skill discovery tiers, installation, activation, and the Agent Skills directory structure."
  - id: 7
    text: "Evidence checked 2026-08-28: VS Code documents Agent Skills as generally available for GitHub Copilot in VS Code with project and personal directories and progressive loading."
issues: []
resources:
  - id: openai-chatgpt-skills
    title: OpenAI — Skills in ChatGPT
    href: https://help.openai.com/en/articles/20001066
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-skills
    title: Anthropic — What are skills?
    href: https://support.claude.com/en/articles/12512176-what-are-skills
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-use-skills
    title: Anthropic — Use skills in Claude
    href: https://support.claude.com/en/articles/12512180-use-skills-in-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-skills
    title: Cursor — Agent Skills
    href: https://prod.cursor.com/docs/skills
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-codex-skills
    title: OpenAI — Introducing the Codex app
    href: https://openai.com/index/introducing-the-codex-app/
    kind: note
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: gemini-skills
    title: Gemini CLI — Managing Agent Skills
    href: https://geminicli.com/docs/cli/using-agent-skills/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-skills
    title: Visual Studio Code — Use Agent Skills
    href: https://code.visualstudio.com/docs/agent-customization/agent-skills
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 hosted documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: personal availability is limited to eligible plans
          - type: policy
            value: workspace administrators control enablement and sharing
        evidence:
          - resourceId: openai-chatgpt-skills
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 hosted documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: code execution must be enabled
          - type: policy
            value: organization controls can govern availability
        evidence:
          - resourceId: anthropic-skills
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: preview
            value: Claude Code support is beta
        evidence:
          - resourceId: anthropic-use-skills
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: cursor-skills
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Codex documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openai-codex-skills
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Gemini CLI Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: gemini-skills
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current VS Code Agent Skills documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vscode-skills
            type: documented
            observedAt: 2026-08-28
---

Agent Skills are reusable directories centered on `SKILL.md`, with optional scripts, references, and assets. The catalog treats basic discovery as narrower than full support for progressive loading, script execution, every install scope, or every extension field.

Sourced cells therefore retain beta, plan, policy, code-execution, and surface conditions. A skill package can contain executable code; documented loading does not imply that Can My Agent Use executed or security-reviewed third-party skills.
