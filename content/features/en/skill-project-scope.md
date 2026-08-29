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
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: "Discover skills installed for a repository or workspace."
specLabel: Agent Skills specification
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
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent discovers project-specific Skills versioned under /.agents/skills, keeps them available across Agent sessions, and allows them to be committed for team sharing."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Project settings let owners upload and manage reusable skills scoped to that Project while retaining separately available personal and organization skills."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code discovers project skills from `.claude/skills/` in the working directory, parent directories through the repository root, and nested directories on demand."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor discovers project skills from `.agents/skills/`, `.cursor/skills/`, and compatible Claude or Codex project directories."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI discovers workspace skills from `.gemini/skills/` and the portable `.agents/skills/` alias, with workspace entries taking precedence over user entries of the same name."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code discovers project skills from `.github/skills/`, `.claude/skills/`, and `.agents/skills/`, with optional additional project locations."
  - id: 5
    text: "Evidence checked 2026-08-29: Amp CLI discovers project skills from `.agents/skills/` in the project and searched parent directories, with documented compatibility paths."
  - id: 6
    text: "Evidence checked 2026-08-29: OpenCode CLI walks from the working directory to the Git worktree root and discovers project skills in OpenCode, Claude-compatible, and portable paths."
  - id: 7
    text: "Evidence checked 2026-08-29: Goose CLI discovers project-level skills under `.agents/skills/` and documented legacy compatibility paths."
  - id: 8
    text: "Evidence checked 2026-08-29: Copilot CLI discovers repository skills in `.github/skills`, `.claude/skills`, and `.agents/skills`."
  - id: 9
    text: "Evidence checked 2026-08-29: Codex CLI scans `.agents/skills` from the working directory through parents to the repository root."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 discovers project-scoped Agent Skills under the current project's .agents/skills directory for supported integrated agents."
issues: []
resources:
  - id: replit-agent-skills-current
    title: "Replit — Agent Skills"
    href: "https://docs.replit.com/features/agent/skills"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skill scope; How Agent loads skills"
  - id: perplexity-projects
    title: "Perplexity — What are Projects?"
    href: https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Project settings — Skills; Collaboration and sharing — Roles"
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
  - id: amp-agent-skills
    title: Amp — Skills
    href: https://ampcode.com/docs/customize/skills
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating and Installing Skills; Skill Sources and Precedence"
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
    locator: "Creating and adding a skill; Adding a skill that someone else has created"
  - id: openai-build-skills
    title: OpenAI — Build skills
    href: https://learn.chatgpt.com/docs/build-skills
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Where Codex loads local skills; REPO scopes"
  - id: jetbrains-ai-agent-skills
    title: JetBrains AI Assistant — Agent Skills
    href: https://www.jetbrains.com/help/ai-assistant/agent-skills.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Skill locations; Project directory
support:
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
            value: "project-level Skills are stored with project files in /.agents/skills"
          - type: runtime
            value: "installed project Skills persist across Agent sessions"
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
            value: "Project skills coexist with personal and organization skills"
          - type: policy
            value: "Project edit permissions govern skill management"
        evidence:
          - resourceId: perplexity-projects
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
            value: project skill discovery is documented for integrated Claude Agent and Codex
          - type: format
            value: project .agents/skills directory
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
            value: "project sources participate in precedence and same-name skills can be masked by a higher-precedence source"
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
            value: "discovery includes matching project locations along the path up to the worktree root"
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
            value: "legacy .goose/skills and .claude/skills paths are also supported"
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
        qualifiers: []
        evidence:
          - resourceId: github-copilot-cli-agent-skills
            type: documented
            observedAt: 2026-08-29
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Codex CLI Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "same-name skills from multiple discovered scopes remain separate rather than being merged"
        evidence:
          - resourceId: openai-build-skills
            type: documented
            observedAt: 2026-08-29
---

Discover skills installed for a repository or workspace.

Support is recorded only when exact, dated evidence covers this behavior.
