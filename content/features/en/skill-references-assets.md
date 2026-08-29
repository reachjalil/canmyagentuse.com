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
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: "Resolve supporting reference files, templates, and assets from a skill package."
specLabel: Agent Skills specification
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
  - id: 5
    text: "Evidence checked 2026-08-29: Amp CLI skills may bundle templates and reference files addressed relative to the skill directory."
  - id: 6
    text: "Evidence checked 2026-08-29: Goose CLI loads skill supporting files such as templates and configuration and accesses them through its file tools."
  - id: 7
    text: "Evidence checked 2026-08-29: Copilot CLI discovers all supporting files in an invoked skill directory, including supplementary Markdown and examples."
  - id: 8
    text: "Evidence checked 2026-08-29: Claude.ai skills load bundled references, templates, examples, and resources when referenced, subject to web upload and code-execution constraints."
  - id: 9
    text: "Evidence checked 2026-08-29: ChatGPT web skills support references, templates, and assets when bundled inside plugins."
  - id: 10
    text: "Evidence checked 2026-08-29: ChatGPT desktop skills support bundled references, templates, resources, and presentation assets."
  - id: 11
    text: "Evidence checked 2026-08-29: Codex CLI skills support bundled references, templates, resources, and optional presentation assets."
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
  - id: amp-agent-skills
    title: Amp — Skills
    href: https://ampcode.com/docs/customize/skills
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skill Repositories; Skill Format"
  - id: goose-agent-skills
    title: Goose — Agent Skills
    href: https://github.com/aaif-goose/goose/blob/8ae4e4ba02836529790f47109b8785e8b42843a7/documentation/docs/guides/context-engineering/using-skills.md
    kind: docs
    publisher: goose maintainers
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Supporting Files; Skills from Plugins"
  - id: github-copilot-cli-agent-skills
    title: GitHub — Adding agent skills for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating and adding a skill; Using agent skills"
  - id: anthropic-agent-skills-overview
    title: Anthropic — Agent Skills
    href: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Level 3: Resources and code; claude.ai; Cross-surface availability"
  - id: openai-build-skills
    title: OpenAI — Build skills
    href: https://learn.chatgpt.com/docs/build-skills
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skill directory; Optional metadata; Distribute skills with plugins"
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
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Amp CLI Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "supporting files resolve relative to the skill directory"
        evidence:
          - resourceId: amp-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: release
          revision: "goose v1.48.0 documentation source at commit 8ae4e4ba02836529790f47109b8785e8b42843a7"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "supporting files live beside SKILL.md and become visible when the skill loads"
        evidence:
          - resourceId: goose-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI Agent Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "supporting files must be included in the skill directory and referenced by its instructions"
        evidence:
          - resourceId: github-copilot-cli-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Claude.ai Agent Skills documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "code execution must be enabled and Claude.ai skill uploads do not sync from Claude Code or the API"
        evidence:
          - resourceId: anthropic-agent-skills-overview
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-29 ChatGPT web Skills documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "web support is limited to skills bundled in plugins"
        evidence:
          - resourceId: openai-build-skills
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "optional assets can also configure desktop presentation metadata"
        evidence:
          - resourceId: openai-build-skills
            type: documented
            observedAt: 2026-08-29
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Codex CLI Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "references and assets are optional package components and metadata can reference skill-local appearance assets"
        evidence:
          - resourceId: openai-build-skills
            type: documented
            observedAt: 2026-08-29
---

Resolve supporting reference files, templates, and assets from a skill package.

Support is recorded only when exact, dated evidence covers this behavior.
