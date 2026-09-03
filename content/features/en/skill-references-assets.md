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
updated: 2026-09-02
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
  - id: 50
    text: "Evidence checked 2026-09-02: JetBrains AI Assistant 2026.2 installs skills as directory trees bundling skill definitions and supporting files that can be opened and inspected."
  - id: 87
    text: "Evidence checked 2026-09-02: Vibe Work allows adding supporting reference documents, templates, guidelines, and data files alongside SKILL.md in the skill folder, which Work loads during skill execution."
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Cascade skills bundle supporting files in the skill folder alongside SKILL.md (such as checklists, templates, and config files) and loads them on demand when the skill is invoked."
  - id: 85
    text: "Evidence checked 2026-08-29: A Gemini Spark skill package can include supporting templates, style guides, spreadsheets, and other supported plain-text files, which Spark opens only as needed."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit defines a Skill as a SKILL.md folder plus supporting files that Agent can reference, establishing ancillary reference and asset resolution beyond the primary Skill body."
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
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native Agent Skills package or SKILL.md discovery and execution surface."
issues: []
resources:
  - id: jetbrains-ai-agent-skills
    title: "JetBrains AI Assistant — Agent Skills"
    href: https://www.jetbrains.com/help/ai-assistant/agent-skills.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Open skill location: inspect the skill files, review its structure, or make manual changes"
  - id: cognition-devin-desktop-skills
    title: "Cognition — Devin Desktop Skills"
    href: https://docs.devin.ai/desktop/cascade/skills
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Adding Supporting Resources"
  - id: mistral-vibe-work-skills-assets
    title: "Mistral Docs — Reuse work with Skills"
    href: https://docs.mistral.ai/vibe/work/skills
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Creating a Skill — Add files or folders"
  - id: replit-agent-skills-current
    title: "Replit — Agent Skills"
    href: "https://docs.replit.com/features/agent/skills"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is a Skill?"
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
  - id: aider-v0860-production-tree
    title: "Aider v0.86.0 — complete production package"
    href: "https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete aider package at the stable release commit"
  - id: aider-v0860-args-source
    title: "Aider v0.86.0 — complete CLI argument parser"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete get_parser option declarations"
  - id: aider-v0860-commands-source
    title: "Aider v0.86.0 — complete in-chat command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete command implementation"
  - id: aider-v0860-dependencies
    title: "Aider v0.86.0 — stable runtime dependencies"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/requirements.txt"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete stable runtime dependency manifest"
  - id: google-gemini-web-effective-skills
    title: "Google Gemini Apps Help — Write effective skills for Gemini Apps"
    href: "https://support.google.com/gemini/answer/17102773?hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skills basics — How skills work"
  - id: google-gemini-web-skills
    title: "Google Gemini Apps Help — Create & manage skills for Gemini Apps"
    href: "https://support.google.com/gemini/answer/17094296?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Upload requirements — Supported file types; Structure and naming"
support:
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [85]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Spark Skills web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: experimental
            value: "Gemini Spark only"
          - type: plan
            value: "requires Google AI Pro or Ultra"
          - type: auth
            value: "requires a personal account, age 18 or over, and Keep Activity; unavailable to work or school accounts"
          - type: region
            value: "unavailable in the EEA, Nigeria, Switzerland, and the UK"
          - type: format
            value: "uploaded skill packages support enumerated plain-text text, code, data, configuration, web, and build files; PDF, DOCX, XLSX, JPG, PNG, and other binary or rich-media files are explicitly unsupported; total package size is at most 100 MB"
        evidence:
          - resourceId: google-gemini-web-effective-skills
            type: documented
            observedAt: 2026-08-29
          - resourceId: google-gemini-web-skills
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "supporting files are colocated with SKILL.md inside the Skill folder"
        evidence:
          - resourceId: replit-agent-skills-current
            type: documented
            observedAt: 2026-08-29
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
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [84]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; similarly named prompts, community wrappers, external programs invoked through /run, AiderDesk, and unreleased proposals do not count"
          - type: format
            value: "absence claim is specific to Agent Skills packages centered on SKILL.md and their standard discovery, loading, supporting-file, script, invocation, and scope behaviors"
        evidence:
          - resourceId: aider-v0860-production-tree
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-args-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-dependencies
            type: documented
            observedAt: 2026-08-29
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [86]
        target:
          kind: dated-documentation
          revision: 2026-09-02 Devin Desktop Cascade documentation
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "supporting files placed alongside SKILL.md are loaded into context when the skill is invoked"
        evidence:
          - resourceId: cognition-devin-desktop-skills
            type: documented
            observedAt: 2026-09-02
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [87]
        target:
          kind: hosted-observation
          revision: 2026-09-02 Vibe Work documentation observation
          observedAt: 2026-09-02
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "supporting reference documents, templates, and data files placed in the skill folder are read during execution"
        evidence:
          - resourceId: mistral-vibe-work-skills-assets
            type: documented
            observedAt: 2026-09-02
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "skills are installed as directory structures bundling skill definitions and supporting files"
        evidence:
          - resourceId: jetbrains-ai-agent-skills
            type: documented
            observedAt: 2026-09-02
---

Resolve supporting reference files, templates, and assets from a skill package.

Support is recorded only when exact, dated evidence covers this behavior.
