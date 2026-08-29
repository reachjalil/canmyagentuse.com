---
title: Agent Skills core and discovery
description: Discover and load standard SKILL.md packages, with current-track evidence for selected chat and coding harnesses.
slug: skills
locale: en
seoTitle: Agent Skills core and discovery compatibility — Can My Agent Use
socialTitle: Can my agent discover Agent Skills?
socialDescription: Current-track Agent Skills core discovery by exact harness surface, with dated public evidence.
llmSummary: This atomic row covers recognizing, discovering, and loading standard SKILL.md packages. Scripts, assets, invocation, and scopes have separate sibling rows.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [runtime, skills, instructions, packaging]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Recognize, discover, and load reusable instruction packages centered on SKILL.md.
specLabel: Agent Skills specification
specification:
  id: agent-skills
  revision: living
  maturity: open standard
  role: consuming agent or host
  authority: Agent Skills maintainers
  canonicalUrl: https://agentskills.io/specification
aliases: [SKILL.md, skill packs, reusable workflows]
parent: agent-skills
related: [custom-instructions, plugins]
highlight: true
notes:
  - id: 11
    text: "Evidence checked 2026-08-29: the current Devin Desktop product discovers and invokes SKILL.md packages for Cascade and default Devin Local, with automatic or explicit invocation and project, global, compatible, and enterprise scopes."
  - id: 10
    text: "Evidence checked 2026-08-29: Amp CLI discovers reusable skill directories containing SKILL.md, applies a documented source-precedence order, exposes skill metadata to the model, and loads the remaining instructions when a skill is invoked."
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
  - id: 8
    text: "Evidence checked 2026-08-28: OpenWork Desktop documents SKILL.md creation, import, sharing, organization installation, and workspace loading through its OpenCode-backed runtime."
  - id: 9
    text: "Evidence checked 2026-08-28: xAI documents saved and packaged skills in Grok Bot, and the Agent Plugins compatible-client registry lists Grok Bot as loading Agent Skills. The cell establishes core discovery and loading, not every optional Agent Skills behavior."
  - id: 12
    text: "Evidence checked 2026-08-29: OpenCode CLI discovers reusable SKILL.md packages from project and user directories and loads them on demand through its permission-governed skill tool."
  - id: 13
    text: "Evidence checked 2026-08-29: Goose CLI's default-enabled Skills extension discovers standard SKILL.md packages, exposes their metadata, and loads matching or explicitly selected skills."
  - id: 14
    text: "Evidence checked 2026-08-29: GitHub documents creating, discovering, loading, invoking, and controlling Agent Skills in Copilot CLI."
  - id: 15
    text: "Evidence checked 2026-08-29: the ChatGPT desktop app supports standalone and plugin-bundled Agent Skills and exposes them in its Skills sidebar."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 discovers Agent Skills for its integrated Claude Agent and Codex agent, with project, IDE, global, and custom local directories."
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
  - id: openwork-skills
    title: OpenWork — Import a skill
    href: https://openworklabs.com/docs/start-here/do-work-with-it/import-a-skill
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-skills
    title: xAI — Grok Bot skills and routines
    href: https://docs.x.ai/grok-bot/skills-routines-and-automations
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: amp-skills
    title: Amp — Skills
    href: https://ampcode.com/docs/customize/skills
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating and Installing Skills; Skill Sources and Precedence; Skill Format"
  - id: cognition-desktop-cascade-skills
    title: Cognition — Desktop Skills
    href: https://docs.devin.ai/desktop/cascade/skills
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "SKILL.md format, supporting resources, invocation, and scopes"
  - id: cognition-desktop-local-skills
    title: Cognition — Skills Overview
    href: https://docs.devin.ai/cli/extensibility/skills/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skill triggers, compatible skills, and locations"
  - id: opencode-agent-skills
    title: OpenCode — Agent Skills
    href: https://opencode.ai/docs/skills/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Place files; Understand discovery"
  - id: goose-agent-skills
    title: Goose — Agent Skills
    href: https://github.com/aaif-goose/goose/blob/8ae4e4ba02836529790f47109b8785e8b42843a7/documentation/docs/guides/context-engineering/using-skills.md
    kind: docs
    publisher: goose maintainers
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Introduction; Skill Locations; Creating a Skill"
  - id: github-copilot-cli-agent-skills
    title: GitHub — About agent skills
    href: https://docs.github.com/en/copilot/concepts/agents/about-agent-skills
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "About agent skills; supported surfaces note"
  - id: openai-build-skills-current
    title: OpenAI — Build skills
    href: https://learn.chatgpt.com/docs/build-skills
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Availability paragraphs; Skills sidebar"
  - id: jetbrains-ai-agent-skills
    title: JetBrains AI Assistant — Agent Skills
    href: https://www.jetbrains.com/help/ai-assistant/agent-skills.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Supported agents; skill locations; use skills
support:
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: support is documented for integrated Claude Agent and Codex, not every JetBrains AI Assistant mode
        evidence:
          - resourceId: jetbrains-ai-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "legacy Cascade uses progressive disclosure and mention invocation; default Devin Local uses the CLI skills format with model or slash-command invocation"
          - type: runtime
            value: "project and global discovery includes .agents/skills, .devin/skills, and backward-compatible .windsurf/skills paths"
          - type: format
            value: "each skill is a directory centered on SKILL.md and can include supporting files"
          - type: policy
            value: "enterprise system-level skills can be deployed read-only by administrators"
          - type: vendor-extension
            value: "the current documentation maps legacy Windsurf skill paths into the rebranded desktop product"
        evidence:
          - resourceId: cognition-desktop-cascade-skills
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-desktop-local-skills
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current Amp Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "project, personal, Amp-specific, compatible, configured, built-in, and hosted skill sources participate in documented precedence"
          - type: runtime
            value: "the first matching frontmatter name wins according to source precedence"
          - type: runtime
            value: "only skill name and description load initially; the rest of SKILL.md loads on invocation"
          - type: runtime
            value: "existing sessions require a skills reload to rescan local and hosted sources"
        evidence:
          - resourceId: amp-skills
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current OpenCode Agent Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "skill access can be allowed, denied, or approval-gated and can be disabled per agent"
        evidence:
          - resourceId: opencode-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [13]
        target:
          kind: release
          revision: "goose v1.48.0 documentation source at commit 8ae4e4ba02836529790f47109b8785e8b42843a7"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the built-in Skills platform extension is enabled by default"
          - type: format
            value: ".agents/skills is recommended; Goose also discovers documented compatibility paths"
        evidence:
          - resourceId: goose-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [14]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI Agent Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "organization-provided access requires the Copilot CLI policy to be enabled"
        evidence:
          - resourceId: github-copilot-cli-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [15]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "standalone skills are desktop-local; plugin packaging distributes skills to additional ChatGPT surfaces"
        evidence:
          - resourceId: openai-build-skills-current
            type: documented
            observedAt: 2026-08-29
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
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current OpenWork skill documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: native workspace path is .opencode/skills
          - type: policy
            value: organization skill installation requires OpenWork Cloud
        evidence:
          - resourceId: openwork-skills
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation and compatible-client listing
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: saved skills are available across Bots and packaged or private skills are managed through the desktop Plugins area
          - type: policy
            value: connector or login prerequisites and per-Bot enablement can limit a skill at runtime
        evidence:
          - resourceId: xai-grok-bot-skills
            type: documented
            observedAt: 2026-08-28
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
---

Agent Skills are reusable directories centered on `SKILL.md`, with optional scripts, references, and assets. The catalog treats basic discovery as narrower than full support for progressive loading, script execution, every install scope, or every extension field.

Sourced cells therefore retain beta, plan, policy, code-execution, and surface conditions. A skill package can contain executable code; documented loading does not imply that Can My Agent Use executed or security-reviewed third-party skills.
