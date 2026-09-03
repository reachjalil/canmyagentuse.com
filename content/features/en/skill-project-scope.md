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
updated: 2026-09-02
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
  - id: 87
    text: "Evidence checked 2026-09-02: Vibe Work supports Workspace Skills that are shared across an organization workspace, with admin capabilities to force-enable specific skills for all members."
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Cascade discovers and manages project-specific workspace skills from .windsurf/skills/, .devin/skills/, and portable .agents/skills/ directories."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop discovers workspace skills from .opencode/skills and .claude/skills while walking to the Git root; local SKILL.md skills require no Cloud account."
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
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native Agent Skills package or SKILL.md discovery and execution surface."
issues: []
resources:
  - id: cognition-devin-desktop-skills
    title: "Cognition — Devin Desktop Skills"
    href: https://docs.devin.ai/desktop/cascade/skills
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Manual Creation — Workspace Skill; Skill Scopes"
  - id: mistral-vibe-work-skills-workspace
    title: "Mistral Docs — Reuse work with Skills"
    href: https://docs.mistral.ai/vibe/work/skills
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Personal and workspace Skills — Workspace"
  - id: openwork-v01839-project-skills
    title: "OpenWork v0.18.39 — project and global skill discovery"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/skills.ts#L145-L209"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "listSkillsInDir and listSkills, lines 145–209"
  - id: openwork-v01839-local-skill-doc
    title: "OpenWork v0.18.39 — Create a skill from chat"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/packages/docs/start-here/do-work-with-it/create-a-skill-from-chat.mdx#L57-L59"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Keep a skill local to one workspace, lines 57–59"
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
support:
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
            value: "flat <skills>/<name>/SKILL.md and one-level namespaced <skills>/<domain>/<name>/SKILL.md layouts"
        evidence:
          - resourceId: openwork-v01839-project-skills
            type: documented
            observedAt: 2026-08-29
          - resourceId: openwork-v01839-local-skill-doc
            type: documented
            observedAt: 2026-08-29
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
          - type: runtime
            value: "workspace skills located under .windsurf/skills/, .devin/skills/, or .agents/skills/ are discovered for the active project"
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
          - type: policy
            value: "workspace skills are shared across the organization workspace, and admins can force-enable skills for all users"
        evidence:
          - resourceId: mistral-vibe-work-skills-workspace
            type: documented
            observedAt: 2026-09-02
---

Discover skills installed for a repository or workspace.

Support is recorded only when exact, dated evidence covers this behavior.
