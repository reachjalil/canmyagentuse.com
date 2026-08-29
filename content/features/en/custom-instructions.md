---
title: Custom instructions
description: Persist instructions at user or project scope.
slug: custom-instructions
locale: en
seoTitle: "Custom instructions — Can My Agent Use"
socialTitle: Custom instructions
socialDescription: Compare persistent user and project instructions by exact product surface.
llmSummary: Custom instructions persist user- or project-scoped guidance. Storage format, discovery, scope, and precedence are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Persist instructions at user or project scope.
specLabel: Common product term
parent: instructions
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: Copilot Notebooks, which Microsoft expressly makes available to Microsoft 365 Personal, Family, and Premium subscribers, let a user save editable Notebook instructions governing response language, format, focus, tone, and other preferences. The evidence establishes Notebook-scoped instructions, not an account-wide instruction applied to every ordinary consumer chat."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 persists coding conventions in arbitrary Markdown or text files loaded read-only with --read or /read and can automatically load them from user- or project-scoped configuration."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT web supports account-level custom instructions on every plan, applies setting changes across chats, and lets users enable, disable, edit, or delete the guidance."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit supports always-on Workspace Custom Instructions across projects and sessions and project-persistent instructions in a root replit.md that Agent automatically reads in future conversations."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity Projects persist up to 8,000 characters of instructions that tell Computer how to work and apply managed Project instructions to every query run in the Project."
  - id: 62
    text: "Evidence checked 2026-08-29: Gemini Apps on the consumer web lets a signed-in personal-account user store instructions that apply to every ordinary chat, with view, edit, delete, and on/off controls; Google says the feature is unavailable to work, school, or supervised accounts and does not apply inside Gems."
  - id: 5
    text: "Evidence checked 2026-08-29: the current Devin Desktop product supports persistent global, workspace, personal, and directory-scoped instructions through AGENTS.md and native rule files, while retaining legacy Windsurf configuration paths."
  - id: 4
    text: "Evidence checked 2026-08-29: Amp CLI documents persistent project, personal, and system-wide instruction scopes through automatically loaded AGENTS.md files and Amp-specific configuration locations."
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork's server owns workspace .opencode configuration, including skills, agents, commands, and other persistent OpenCode instruction primitives."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT desktop documents cross-chat custom instructions, while Codex CLI documents global and nested project AGENTS.md discovery with explicit precedence."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code, Cursor, Gemini CLI, VS Code Copilot, GitHub Copilot CLI, Cline, Continue, OpenCode, Zed Agent, and Warp each document persistent user-, project-, workspace-, or path-scoped instruction files or rules."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 persists project-specific instructions as Markdown rules under .aiassistant/rules and applies them according to each rule's configured mode."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin Knowledge persists instructions across hosted sessions, supports repository or all-repository pinning, macros, and per-user enable or disable controls."
  - id: 61
    text: "Evidence checked 2026-08-29: Each Grok Automation persists a named instruction message and reuses it for fresh scheduled or triggered runs, but this does not establish account-wide instructions for every ordinary Grok chat."
issues: []
resources:
  - id: aider-v0860-conventions
    title: "Aider v0.86.0 — Specifying coding conventions"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/conventions.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Specifying coding conventions; Always load conventions"
  - id: aider-v0860-config
    title: "Aider v0.86.0 — YAML configuration"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/config/aider_conf.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "YAML config file; home, repository-root, and current-directory search order"
  - id: openai-chatgpt-web-custom-instructions
    title: "OpenAI — ChatGPT Custom Instructions"
    href: https://help.openai.com/en/articles/8096356-chat-preferences-for-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "General Information; Web & Desktop; Disabling Custom Instructions; character-limit FAQ"
  - id: replit-custom-instructions-current
    title: "Replit — Custom Instructions"
    href: "https://docs.replit.com/chat/custom-instructions"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Custom Instructions; Choose the right kind of guidance; Set up Custom Instructions"
  - id: replit-dot-md-current
    title: "Replit — replit.md"
    href: "https://docs.replit.com/features/project-setup/replit-dot-md"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How replit.md works; Manual creation; Limitations"
  - id: perplexity-projects
    title: "Perplexity — What are Projects?"
    href: https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating a Project; Project settings — Context"
  - id: google-gemini-web-custom-instructions
    title: "Google — Customize Gemini's responses with your instructions"
    href: https://support.google.com/gemini/answer/16598625?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What you need; Add your instructions for Gemini; Find, edit, delete, or turn off instructions"
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-instructions
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-chatgpt-personalize
    title: OpenAI — Personalize ChatGPT
    href: https://learn.chatgpt.com/docs/personalize
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add custom instructions
  - id: openai-codex-agents-md
    title: OpenAI — Custom instructions with AGENTS.md
    href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How Codex discovers guidance
  - id: anthropic-claude-code-memory
    title: Anthropic — How Claude remembers your project
    href: https://code.claude.com/docs/en/memory
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: CLAUDE.md files; choose where to put files
  - id: cursor-rules
    title: Cursor — Rules
    href: https://cursor.com/docs/rules
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Project Rules; User Rules
  - id: google-gemini-md
    title: Google — GEMINI.md context files
    href: https://geminicli.com/docs/cli/gemini-md/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Hierarchical context loading
  - id: microsoft-copilot-custom-instructions
    title: Microsoft — Custom instructions in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/custom-instructions
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-custom-instructions
    title: GitHub — Add custom instructions for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-rules
    title: Cline — Cline Rules
    href: https://docs.cline.bot/customization/cline-rules
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: continue-rules
    title: Continue — Rules
    href: https://docs.continue.dev/customize/rules
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: opencode-rules
    title: OpenCode — Rules
    href: https://opencode.ai/docs/rules/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: zed-instructions
    title: Zed — Instructions
    href: https://zed.dev/docs/ai/instructions
    kind: docs
    publisher: Zed
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: warp-ai-rules
    title: Warp — Rules for Agent Mode
    href: https://docs.warp.dev/knowledge-and-collaboration/warp-drive/ai-objects
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: amp-custom-instructions
    title: Amp — AGENTS.md
    href: https://ampcode.com/docs/customize/agents-md
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Automatic inclusion; personal instructions; system-wide instructions; Granular Guidance"
  - id: cognition-desktop-local-rules
    title: Cognition — Rules and AGENTS.md
    href: https://docs.devin.ai/cli/extensibility/rules
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "AGENTS.md; Global Rules; Personal Rules; Rules in the .devin Directory"
  - id: cognition-desktop-cascade-rules
    title: Cognition — Cascade Memories
    href: https://docs.devin.ai/desktop/cascade/memories
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Rules; Rules Discovery; storage locations and activation"
  - id: jetbrains-ai-project-rules
    title: JetBrains AI Assistant — Configure project rules
    href: https://www.jetbrains.com/help/ai-assistant/configure-project-rules.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Create a new project rule; configure when rules are applied
  - id: cognition-devin-knowledge
    title: "Cognition — Knowledge"
    href: https://docs.devin.ai/product-guides/knowledge
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What is Knowledge?; Macros; enable and disable; pinning"
  - id: spacexai-grok-automations
    title: "SpaceXAI — Automations in Grok"
    href: https://x.ai/news/grok-automations
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Describe the job once; automation instructions"
  - id: microsoft-copilot-notebook-custom-instructions-2026-02
    title: "Provide custom instructions for your Microsoft Copilot Notebook"
    href: "https://support.microsoft.com/en-us/Microsoft-365-Copilot/provide-custom-instructions-for-your-microsoft-365-copilot-notebook"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Availability notes; Provide specific guidelines for Copilot"
support:
  - harness: copilot-web
    versions:
      - track: current
        status: partial
        noteIds: [83]
        target:
          kind: dated-documentation
          revision: "Microsoft Copilot Notebook custom-instruction documentation, last updated February 2026"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Microsoft 365 Personal, Family, or Premium subscription"
          - type: auth
            value: "signed-in personal Microsoft account with the required OneDrive service"
          - type: runtime
            value: "instructions persist at Copilot Notebook scope; ordinary account-wide chat scope is not established"
          - type: feature-flag
            value: "Microsoft says some described Notebook features are rolling out gradually"
        evidence:
          - resourceId: microsoft-copilot-notebook-custom-instructions-2026-02
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "ordinary Markdown or text files; no Aider-specific rule syntax is required"
          - type: runtime
            value: "convention files are loaded read-only with /read or --read"
          - type: policy
            value: ".aider.conf.yml can persist the read list at home, repository-root, or current-directory scope; later locations take priority"
        evidence:
          - resourceId: aider-v0860-conventions
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-config
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "available on every ChatGPT plan; Free and Go allow 1,500 characters, while Plus, Pro, Enterprise, Business, and Education allow 5,000"
          - type: runtime
            value: "web settings are under Personalization; changes apply immediately across chats, while edits affect future responses"
        evidence:
          - resourceId: openai-chatgpt-web-custom-instructions
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "Workspace guidance is managed in Settings → Customization; project guidance is stored in root replit.md"
          - type: runtime
            value: "replit.md is detected only at the project root, and extremely large files may not be fully processed"
        evidence:
          - resourceId: replit-custom-instructions-current
            type: documented
            observedAt: 2026-08-29
          - resourceId: replit-dot-md-current
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
            value: "instructions are scoped to a Project and apply to each query in that Project"
          - type: policy
            value: "Project owners manage the persisted context"
        evidence:
          - resourceId: perplexity-projects
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "requires a signed-in personal Google Account; unavailable to work, school, and supervised accounts"
          - type: runtime
            value: "instructions apply to every ordinary chat but Google documents that they are unavailable inside Gems"
        evidence:
          - resourceId: google-gemini-web-custom-instructions
            type: documented
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: partial
        noteIds: [61]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Grok.com consumer web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "persistent instructions are scoped to one automation and applied to every fresh run"
          - type: format
            value: "instructions may include attached files, connectors, skills, and a mode; account-wide chat instructions remain unestablished"
        evidence:
          - resourceId: spacexai-grok-automations
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "trigger-based automatic retrieval of repository-pinned or organization Knowledge"
          - type: policy
            value: "organization scope by default; enterprise-wide scope is available to enterprise accounts"
        evidence:
          - resourceId: cognition-devin-knowledge
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: persistent project Markdown rules under .aiassistant/rules
        evidence:
          - resourceId: jetbrains-ai-project-rules
            type: documented
            observedAt: 2026-08-29
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "global instructions load for every project, while project and personal instructions can be repository-scoped"
          - type: host-role
            value: "Devin Local uses the Devin CLI rules system and legacy Cascade uses the desktop Rules engine"
          - type: format
            value: "AGENTS.md, AGENTS.local.md, .devin/rules Markdown, and backward-compatible .windsurf/rules Markdown are documented"
          - type: vendor-extension
            value: "the current desktop documentation uses Devin Desktop naming while preserving legacy Windsurf paths"
        evidence:
          - resourceId: cognition-desktop-local-rules
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-desktop-cascade-rules
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Amp AGENTS.md documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "project guidance can use repository-root or subtree AGENTS.md files"
          - type: runtime
            value: "personal guidance loads from documented Amp configuration locations"
          - type: policy
            value: "system-wide guidance can be installed in documented operating-system-specific locations"
          - type: runtime
            value: "AGENTS.md can reference conditional instruction files with globs"
        evidence:
          - resourceId: amp-custom-instructions
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop personalization documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: personal custom instructions apply across chats and are managed from desktop personalization settings
        evidence:
          - resourceId: openai-chatgpt-personalize
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code memory documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: CLAUDE.md supports managed, user, project, and local scopes; path-scoped rules load for matching files
          - type: policy
            value: instructions shape model behavior but are not a hard enforcement layer
        evidence:
          - resourceId: anthropic-claude-code-memory
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: project rules can be stored under .cursor/rules and user rules apply globally in Cursor settings
        evidence:
          - resourceId: cursor-rules
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex AGENTS.md documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: global AGENTS.md guidance is layered with project-root and nested-directory instructions; closer files override earlier guidance
          - type: runtime
            value: combined project instruction discovery stops at 32 KiB by default
        evidence:
          - resourceId: openai-codex-agents-md
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI context-file documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: GEMINI.md files provide hierarchical global and project context with documented discovery and import behavior
        evidence:
          - resourceId: google-gemini-md
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: personal, repository-wide, and path-specific instruction scopes are documented for Copilot agents in VS Code
        evidence:
          - resourceId: microsoft-copilot-custom-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI custom-instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: user, repository, and path-specific instructions are supported, including AGENTS.md and GitHub instruction formats
        evidence:
          - resourceId: github-copilot-cli-custom-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cline Rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: workspace and global rules persist in .clinerules or rule directories
        evidence:
          - resourceId: cline-rules
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Continue rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: rules provide persistent workspace or personal guidance in Agent, Chat, and Edit workflows
        evidence:
          - resourceId: continue-rules
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current OpenCode rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: project AGENTS.md and global rule files provide persistent instructions
        evidence:
          - resourceId: opencode-rules
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Zed instructions documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Zed supports personal AGENTS.md and project instruction files with documented precedence
        evidence:
          - resourceId: zed-instructions
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Warp rules documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: global rules and project AGENTS.md or WARP.md files persist guidance for Agent Mode
        evidence:
          - resourceId: warp-ai-rules
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: precedence and file discovery are supplied by the embedded OpenCode runtime
        evidence:
          - resourceId: openwork-instructions
            type: documented
            observedAt: 2026-08-28
---

Persist project or user instruction files. OpenWork's sourced cell covers its server-owned OpenCode workspace configuration; it does not claim that every instruction format or precedence rule is unique to OpenWork.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
