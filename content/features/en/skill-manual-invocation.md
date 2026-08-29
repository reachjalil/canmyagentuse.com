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
updated: 2026-08-29
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
  - id: 85
    text: "Evidence checked 2026-08-29: A Gemini web user can explicitly invoke a named Gemini Spark skill in a task by entering slash and selecting the skill."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop lets users choose a named local or OpenWork Connect skill from the composer or slash menu and inserts an explicit skill token that is expanded into the model prompt."
  - id: 75
    text: "Evidence checked 2026-08-29: a Replit Agent user can explicitly select a named Skill from the Use a skill picker or ask Agent to load a Skill; a chat-attached Skill applies to that message only."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Computer explicitly invokes an enabled named Skill by typing its slash command, selecting the Skill, and then entering the task."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code exposes discovered skills as `/skill-name` commands and supports `disable-model-invocation: true` for user-only activation."
  - id: 2
    text: "Evidence checked 2026-08-28: Cursor lets users invoke a discovered skill by selecting `/skill-name` in Agent chat and can disable automatic model invocation."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI lets users list, enable, disable, reload, and link named skills, and requires user consent whenever a matched skill activates; the reviewed guide does not document a direct `/skill-name` invocation form."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code lists skills in the `/` menu, accepts `/skill-name` with optional context, and supports manual-only skills through `disable-model-invocation`."
  - id: 5
    text: "Evidence checked 2026-08-29: OpenCode's agent explicitly selects a named skill through its native, permission-governed skill tool."
  - id: 6
    text: "Evidence checked 2026-08-29: Goose CLI users can explicitly load one or more named skills with `/skills`."
  - id: 7
    text: "Evidence checked 2026-08-29: Copilot CLI accepts `/skill-name` in a prompt and exposes named enable or disable controls through `/skills`."
  - id: 8
    text: "Evidence checked 2026-08-29: Claude.ai lets users enable or disable named skills, but its documentation does not establish direct prompt-time slash invocation."
  - id: 9
    text: "Evidence checked 2026-08-29: ChatGPT web supports explicit `@` selection for plugin-bundled skills."
  - id: 10
    text: "Evidence checked 2026-08-29: ChatGPT desktop supports explicit named skill selection through `@`."
  - id: 11
    text: "Evidence checked 2026-08-29: Codex CLI supports explicit skill invocation through `/skills` or `$` mentions."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 lets users invoke an installed Agent Skill explicitly by naming it as $skill-name in chat with a supported integrated agent."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native Agent Skills package or SKILL.md discovery and execution surface."
issues: []
resources:
  - id: openwork-v01839-skill-selection
    title: "OpenWork v0.18.39 — composer skill selection"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/react-app/domains/session/surface/composer/composer.tsx#L838-L893"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "applyCommandSelection and applySkillSelection, lines 838–893"
  - id: openwork-v01839-connect-skill-token
    title: "OpenWork v0.18.39 — Connect skill invocation token"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/react-app/domains/session/surface/composer/connect-skill-token.ts#L3-L51"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "token fields, encoding, parsing, and prompt expansion, lines 3–51"
  - id: replit-agent-skills-current
    title: "Replit — Agent Skills"
    href: "https://docs.replit.com/features/agent/skills"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Pre-defined Skills"
  - id: perplexity-guidepoint-mcp-skill
    title: "Perplexity — Connecting Perplexity with Guidepoint"
    href: https://www.perplexity.ai/help-center/en/articles/14818160-connecting-perplexity-with-guidepoint
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Using the Guidepoint MCP Skill — Add the Skill to Perplexity Computer"
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
  - id: opencode-agent-skills
    title: OpenCode — Agent Skills
    href: https://opencode.ai/docs/skills/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Recognize tool description; Configure permissions"
  - id: goose-agent-skills
    title: Goose — Agent Skills
    href: https://github.com/aaif-goose/goose/blob/8ae4e4ba02836529790f47109b8785e8b42843a7/documentation/docs/guides/context-engineering/using-skills.md
    kind: docs
    publisher: goose maintainers
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Opening usage examples and /skills syntax"
  - id: github-copilot-cli-agent-skills
    title: GitHub — Adding agent skills for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Using agent skills; Skills commands in the CLI"
  - id: anthropic-use-skills-current
    title: Anthropic — Use skills in Claude
    href: https://support.claude.com/en/articles/12512180-use-skills-in-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How to enable skills; Add and use custom skills"
  - id: openai-build-skills
    title: OpenAI — Build skills
    href: https://learn.chatgpt.com/docs/build-skills
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How ChatGPT and Codex use skills"
  - id: jetbrains-ai-agent-skills
    title: JetBrains AI Assistant — Agent Skills
    href: https://www.jetbrains.com/help/ai-assistant/agent-skills.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Use an Agent Skill; manual invocation
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
    locator: "Use skills for a task; Manage Gemini's automatic use of a skill"
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
            value: "requires age 18 or over, a personal account, and Keep Activity; unavailable to work or school accounts"
          - type: region
            value: "unavailable in the EEA, Nigeria, Switzerland, and the UK"
          - type: runtime
            value: "the documented web syntax is `/`; the `@` alternative documented for the Mac app is not transferred"
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
            value: "local [skill name] token; Connect token stores slug, name, marketplace, and capability"
        evidence:
          - resourceId: openwork-v01839-skill-selection
            type: documented
            observedAt: 2026-08-29
          - resourceId: openwork-v01839-connect-skill-token
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
          - type: runtime
            value: "a Skill selected from the chat picker is attached to one message and is not installed into the project"
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
          - type: format
            value: "the documented flow types and selects a named slash-command Skill"
          - type: auth
            value: "the example Guidepoint Skill requires its managed connector, entitlement, and authentication"
        evidence:
          - resourceId: perplexity-guidepoint-mcp-skill
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
            value: manual skill invocation is documented for integrated Claude Agent and Codex
          - type: format
            value: reference the skill as $skill-name in chat
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
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current OpenCode Agent Skills documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "selection is agent-driven and skill access can be allow, ask, or deny"
        evidence:
          - resourceId: opencode-agent-skills
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
            value: "implicit request matching remains available separately"
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
        qualifiers: []
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
          revision: 2026-08-29 Claude.ai Skills documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "users can select named on/off controls; direct prompt-time named invocation was not established"
          - type: runtime
            value: "code execution must be enabled"
        evidence:
          - resourceId: anthropic-use-skills-current
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
          - type: runtime
            value: "implicit invocation remains separately available and can be disabled per skill"
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

Let a user or agent explicitly select and activate a named skill.

Support is recorded only when exact, dated evidence covers this behavior.
