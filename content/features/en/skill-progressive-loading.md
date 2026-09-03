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
updated: 2026-09-02
published: 2026-08-28
category: runtime
summary: "Load skill metadata first and defer full instructions or resources until relevant."
specLabel: Agent Skills specification
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
  - id: 50
    text: "Evidence checked 2026-09-02: JetBrains AI Assistant 2026.2 indexes skill names and descriptions from configured sources for discovery and search, loading full instructions automatically when relevant to a task."
  - id: 87
    text: "Evidence checked 2026-09-02: Vibe Work loads skills progressively in three stages: discovery loads only name and description (~100 tokens), activation loads full SKILL.md instructions when matched, and execution loads referenced files on demand."
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Cascade loads skills via progressive disclosure: only name and description are shown to the model by default (~100 tokens), while full SKILL.md instructions and supporting files load only when invoked or @mentioned."
  - id: 85
    text: "Evidence checked 2026-08-29: Gemini Spark first checks a skill's name and description, reads full instructions only when the skill is relevant, and opens supporting files only when needed for the current step."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent reads every installed Skill's name and description on each chat but defers the full Skill body until it determines that Skill is relevant."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code keeps skill descriptions available for discovery, loads the full `SKILL.md` body only on invocation, and reads supporting files on demand."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor documents on-demand loading for skill resources, keeping the main `SKILL.md` focused and loading optional resources only when needed."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents three loading levels: metadata always present, `SKILL.md` after activation, and bundled resources only as needed."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code documents three-level loading for skill metadata, the instruction body, and referenced resources."
  - id: 5
    text: "Evidence checked 2026-08-29: Amp CLI exposes skill names and descriptions first and loads the remaining SKILL.md content only when a skill is invoked."
  - id: 6
    text: "Evidence checked 2026-08-29: OpenCode CLI first advertises skill names and descriptions through its skill tool, then loads a selected skill's full content on demand."
  - id: 7
    text: "Evidence checked 2026-08-29: Goose CLI adds discovered skill names and descriptions at session start, then loads full instructions only after matching or explicit selection."
  - id: 8
    text: "Evidence checked 2026-08-29: Copilot CLI selects a skill from prompt and description metadata, then injects the full SKILL.md into agent context."
  - id: 9
    text: "Evidence checked 2026-08-29: Claude.ai uses three-level progressive disclosure, subject to code-execution enablement and separately uploaded web skills."
  - id: 10
    text: "Evidence checked 2026-08-29: ChatGPT web loads skill metadata before full instructions, but the web surface receives skills only through plugins."
  - id: 11
    text: "Evidence checked 2026-08-29: ChatGPT desktop begins with skill metadata and loads the full SKILL.md only when it selects a skill."
  - id: 12
    text: "Evidence checked 2026-08-29: Codex CLI begins with names, descriptions, and paths, then loads full SKILL.md instructions only for selected skills."
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
    locator: "Browse and discover skills; Use skills: Agents can run installed skills automatically, when they are relevant to a task"
  - id: cognition-devin-desktop-skills
    title: "Cognition — Devin Desktop Skills"
    href: https://docs.devin.ai/desktop/cascade/skills
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Skills overview — progressive disclosure"
  - id: mistral-vibe-work-skills-progressive
    title: "Mistral Docs — Reuse work with Skills"
    href: https://docs.mistral.ai/vibe/work/skills
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "How Skills work — Discovery, Activation, Execution"
  - id: replit-agent-skills-current
    title: "Replit — Agent Skills"
    href: "https://docs.replit.com/features/agent/skills"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is a Skill?; How Agent loads skills"
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
  - id: amp-agent-skills
    title: Amp — Skills
    href: https://ampcode.com/docs/customize/skills
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Skill Format; Viewing and Reloading Skills"
  - id: opencode-agent-skills
    title: OpenCode — Agent Skills
    href: https://opencode.ai/docs/skills/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Recognize tool description; Disable the skill tool"
  - id: goose-agent-skills
    title: Goose — Agent Skills
    href: https://github.com/aaif-goose/goose/blob/8ae4e4ba02836529790f47109b8785e8b42843a7/documentation/docs/guides/context-engineering/using-skills.md
    kind: docs
    publisher: goose maintainers
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Opening progressive-loading description"
  - id: github-copilot-cli-agent-skills
    title: GitHub — Adding agent skills for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Using agent skills; Skills versus custom instructions"
  - id: anthropic-agent-skills-overview
    title: Anthropic — Agent Skills
    href: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How Skills work; Levels 1–3; claude.ai"
  - id: openai-build-skills
    title: OpenAI — Build skills
    href: https://learn.chatgpt.com/docs/build-skills
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Availability and progressive-disclosure paragraphs"
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
        evidence:
          - resourceId: google-gemini-web-effective-skills
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
          - type: runtime
            value: "metadata is loaded on every chat; the full body remains outside the context window until Agent judges it relevant"
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
            value: "existing sessions require a skills reload to rescan sources"
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
          - type: policy
            value: "denied skills are omitted and the skill tool can be disabled per agent"
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
            value: "full instructions are deferred until request matching or explicit activation"
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
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Claude.ai Agent Skills documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "code execution and file creation must be enabled; custom skills are uploaded separately to claude.ai"
        evidence:
          - resourceId: anthropic-agent-skills-overview
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [10]
        target:
          kind: hosted-observation
          revision: 2026-08-29 ChatGPT web Skills documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "ChatGPT web receives skills through plugins rather than standalone skill installation"
        evidence:
          - resourceId: openai-build-skills
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [11]
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
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Codex CLI Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "initial skill metadata is bounded by a documented context-budget limit"
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
            value: "only name and description are shown to the model by default; full SKILL.md and supporting files load only when invoked or @mentioned"
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
          - type: runtime
            value: "three-stage progressive disclosure loads name and description at discovery (~100 tokens), full SKILL.md at activation, and referenced files at execution"
        evidence:
          - resourceId: mistral-vibe-work-skills-progressive
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
          - type: runtime
            value: "skills from configured sources are indexed and automatically loaded when relevant to a task"
        evidence:
          - resourceId: jetbrains-ai-agent-skills
            type: documented
            observedAt: 2026-09-02
---

Load skill metadata first and defer full instructions or resources until relevant.

Support is recorded only when exact, dated evidence covers this behavior.
