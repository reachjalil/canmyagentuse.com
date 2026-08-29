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
updated: 2026-08-29
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
  - id: 85
    text: "Evidence checked 2026-08-29: A personal Gemini Spark skill is saved on the account's Skills page and can be reused across any Gemini Spark task rather than being limited to one task or project."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop optionally discovers global skills from the user's OpenCode, Claude, .agents, and legacy .agent directories and labels them separately from project skills."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit's Workspace Skill library makes reusable Skills available outside one project and permits a new Skill to remain private to its creator and Workspace administrators, but the page does not establish one personal library spanning all Workspaces."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer stores user-created or uploaded skills under My Skills and makes those custom skills available for automatic activation in future conversations."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code discovers personal skills from `~/.claude/skills/` and makes them available across projects."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor discovers user-level skills from `~/.agents/skills/`, `~/.cursor/skills/`, and compatible Claude or Codex directories on the machine where the agent runs."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI discovers user skills from `~/.gemini/skills/` and `~/.agents/skills/`, available across projects."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code discovers personal skills from `~/.copilot/skills/`, `~/.claude/skills/`, and `~/.agents/skills/`."
  - id: 5
    text: "Evidence checked 2026-08-29: Amp CLI discovers machine-local, personal, and workspace skill sources outside the current project with explicit precedence."
  - id: 6
    text: "Evidence checked 2026-08-29: OpenCode CLI discovers global skills from user-level OpenCode, Claude-compatible, and portable directories."
  - id: 7
    text: "Evidence checked 2026-08-29: Goose CLI discovers global skills under `~/.agents/skills/` and documented compatibility paths."
  - id: 8
    text: "Evidence checked 2026-08-29: Copilot CLI discovers personal skills under `~/.copilot/skills` and `~/.agents/skills`, shared across projects."
  - id: 9
    text: "Evidence checked 2026-08-29: Claude.ai supports personal uploaded skills and Team or Enterprise organization-wide provisioning, subject to code-execution and policy controls."
  - id: 10
    text: "Evidence checked 2026-08-29: ChatGPT desktop exposes Personal and System skills in its Skills sidebar beyond a single project."
  - id: 11
    text: "Evidence checked 2026-08-29: Codex CLI discovers user, administrator, and bundled system skills outside the current repository."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 discovers reusable skills from IDE-level, global, and configured local directories for its supported integrated agents."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native Agent Skills package or SKILL.md discovery and execution surface."
issues: []
resources:
  - id: openwork-v01839-global-skills
    title: "OpenWork v0.18.39 — project and global skill discovery"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/skills.ts#L188-L209"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "global directories and scope labels, lines 188–209"
  - id: replit-agent-skills-current
    title: "Replit — Agent Skills"
    href: "https://docs.replit.com/features/agent/skills"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skill scope; Create a custom Skill; Set Workspace member access"
  - id: perplexity-computer-skills
    title: "Perplexity — How to use Computer Skills"
    href: https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Managing Skills; How Skills Work During a Conversation"
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
  - id: amp-agent-skills
    title: Amp — Skills
    href: https://ampcode.com/docs/customize/skills
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating and Installing Skills; Skill Sources and Precedence; Skill Repositories"
  - id: opencode-agent-skills
    title: OpenCode — Agent Skills
    href: https://opencode.ai/docs/skills/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Place files; Understand discovery"
  - id: goose-agent-skills
    title: Goose — Agent Skills
    href: https://github.com/aaif-goose/goose/blob/8ae4e4ba02836529790f47109b8785e8b42843a7/documentation/docs/guides/context-engineering/using-skills.md
    kind: docs
    publisher: goose maintainers
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Skill Locations
  - id: github-copilot-cli-agent-skills
    title: GitHub — Adding agent skills for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating and adding a skill; Skills commands in the CLI"
  - id: anthropic-use-skills-current
    title: Anthropic — Use skills in Claude
    href: https://support.claude.com/en/articles/12512180-use-skills-in-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Prerequisites; Provision skills organization-wide; Add and use custom skills"
  - id: openai-build-skills
    title: OpenAI — Build skills
    href: https://learn.chatgpt.com/docs/build-skills
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ChatGPT desktop Skills sidebar; Where Codex loads local skills"
  - id: jetbrains-ai-agent-skills
    title: JetBrains AI Assistant — Agent Skills
    href: https://www.jetbrains.com/help/ai-assistant/agent-skills.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Skill locations; IDE and Global directories
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
  - id: google-gemini-web-skills
    title: "Google Gemini Apps Help — Create & manage skills for Gemini Apps"
    href: "https://support.google.com/gemini/answer/17094296?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Create a skill; Use skills for a task; Manage your skills"
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
            value: "personal Google Account only, age 18 or over, with Keep Activity enabled"
          - type: region
            value: "unavailable in the EEA, Nigeria, Switzerland, and the UK"
          - type: policy
            value: "account-persistent personal scope; organization or project installation is not established"
        evidence:
          - resourceId: google-gemini-web-skills
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "~/.config/opencode/skills, ~/.claude/skills, ~/.agents/skills, and ~/.agent/skills; global discovery is controlled by includeGlobal"
        evidence:
          - resourceId: openwork-v01839-global-skills
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the documented non-project scope is a Workspace library, not an account-global library across every Workspace"
          - type: policy
            value: "a new custom Skill begins Private; only its creator and Workspace administrators can use it until sharing changes"
          - type: plan
            value: "who can manage Workspace Skills depends on plan; the page does not enumerate the complete matrix"
        evidence:
          - resourceId: replit-agent-skills-current
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "My Skills is separate from the built-in skill library"
          - type: policy
            value: "users can delete their own skills but not built-in Perplexity skills"
        evidence:
          - resourceId: perplexity-computer-skills
            type: documented
            observedAt: 2026-08-29
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
            value: user-level skill discovery is documented for integrated Claude Agent and Codex
          - type: format
            value: IDE, global, and configured local skill directories
        evidence:
          - resourceId: jetbrains-ai-agent-skills
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
          - type: policy
            value: "machine-local, personal-repository, and administrator-managed workspace sources have distinct precedence"
        evidence:
          - resourceId: amp-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current OpenCode Agent Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "global discovery includes OpenCode, Claude-compatible, and portable home-directory paths"
        evidence:
          - resourceId: opencode-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: release
          revision: "goose v1.48.0 documentation source at commit 8ae4e4ba02836529790f47109b8785e8b42843a7"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "user-level Claude-compatible and Goose-specific compatibility paths are also discovered"
        evidence:
          - resourceId: goose-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI Agent Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "additional user locations can be registered with the CLI skills command"
        evidence:
          - resourceId: github-copilot-cli-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Claude.ai Skills documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "personal skills are uploaded separately to Claude.ai and require code execution"
          - type: policy
            value: "organization-wide provisioning requires Team or Enterprise owner controls"
        evidence:
          - resourceId: anthropic-use-skills-current
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
        qualifiers: []
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
          - type: policy
            value: "administrator skills can be provisioned separately from user and bundled system scopes"
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
---

Discover personal or global skills outside the current project.

Support is recorded only when exact, dated evidence covers this behavior.
