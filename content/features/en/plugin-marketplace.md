---
title: Plugin marketplace
description: Discover and install extensions through a documented registry or marketplace.
slug: plugin-marketplace
locale: en
seoTitle: "Plugin marketplace compatibility — Can My Agent Use"
socialTitle: Plugin marketplace
socialDescription: Compare marketplace discovery, installation, update, and removal support.
llmSummary: A plugin marketplace is a documented registry or marketplace for discovering and installing extensions. Update, removal, private-extension, and organization-policy behavior are qualifiers.
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Discover and install extensions through a documented registry or marketplace."
specLabel: Common product term
aliases: ["plugin registry"]
parent: plugins
related: []
highlight: false
notes:
  - id: 7
    text: "Evidence checked 2026-09-02: Copilot CLI exposes copilot plugin marketplace list and browse commands to discover and install plugins, with default registered copilot-plugins and awesome-copilot registries."
  - id: 50
    text: "Evidence checked 2026-09-02: JetBrains AI Assistant supports browsing and installing skills and extensions from external GitHub registries and the JetBrains Marketplace."
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot uses Settings → Plugins to discover and install supported connectors and packaged skills; private skills appear in a separate Yours area and can be enabled per Bot."
  - id: 2
    text: "Evidence checked 2026-08-29: ChatGPT web and desktop use a universal public plugin directory, and Codex CLI exposes a plugin browser that installs from a configured marketplace."
  - id: 3
    text: "Evidence checked 2026-08-29: Claude Code automatically registers Anthropic's official marketplace and supports browsing and installing individual plugins from it."
  - id: 4
    text: "Evidence checked 2026-08-29: Gemini CLI documents an extension gallery for discovery and GitHub or local-path installation for extensions."
  - id: 5
    text: "Evidence checked 2026-08-29: VS Code can browse, install, update, disable, and uninstall extensions from the Visual Studio Marketplace. This is the host marketplace for the VS Code + Copilot surface."
  - id: 6
    text: "Evidence checked 2026-08-29: Cursor documents an official reviewed marketplace plus plan-gated team marketplaces for both Cursor Plugins and Agent Plugins."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native or portable plugin loader, marketplace, failure-isolation contract, or vendor-extension format."
issues: []
resources:
  - id: github-copilot-cli-plugins-finding
    title: "GitHub Copilot CLI — Finding and installing plugins"
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Finding and browsing plugins in registered marketplaces"
  - id: jetbrains-ai-agent-skills
    title: "JetBrains AI Assistant — Agent Skills"
    href: https://www.jetbrains.com/help/ai-assistant/agent-skills.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "External registries – remote sources that provide access to published skills; Manage External Registries"
  - id: xai-grok-bot-skills-marketplace
    title: xAI — Grok Bot skills and routines
    href: https://docs.x.ai/grok-bot/skills-routines-and-automations
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Save a skill
  - id: openai-chatgpt-codex-plugins
    title: OpenAI — Plugins in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/plugins
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Universal plugin directory
  - id: anthropic-claude-code-discover-plugins
    title: Anthropic — Discover and install Claude Code plugins
    href: https://code.claude.com/docs/en/discover-plugins
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Official Anthropic marketplace
  - id: google-gemini-cli-extensions
    title: Google — Gemini CLI extensions
    href: https://geminicli.com/docs/extensions/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Choose your path and Installation
  - id: microsoft-vscode-extension-marketplace
    title: Microsoft — VS Code Extension Marketplace
    href: https://code.visualstudio.com/docs/configure/extensions/extension-marketplace
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Browse for extensions and Manage extensions
  - id: cursor-plugins
    title: Cursor — Plugins
    href: https://cursor.com/docs/plugins
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: The marketplace and Team marketplaces
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
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current OpenAI plugin documentation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the Plugins tab browses and installs from the universal public plugin directory
          - type: policy
            value: account and workspace controls can affect catalog availability
        evidence:
          - resourceId: openai-chatgpt-codex-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current OpenAI plugin documentation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the ChatGPT desktop Plugins tab browses and installs from the universal public plugin directory
          - type: policy
            value: account and workspace controls can affect catalog availability
        evidence:
          - resourceId: openai-chatgpt-codex-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current OpenAI plugin documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /plugins opens the browser and installs from a configured marketplace; start a new session before using installed skills or tools
          - type: policy
            value: configured marketplace sources and workspace controls determine availability
        evidence:
          - resourceId: openai-chatgpt-codex-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code plugin documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /plugin opens the catalog and installs individual plugins; the official Anthropic marketplace is registered automatically for interactive use
          - type: policy
            value: marketplace policy or network controls can block registration or installation
        evidence:
          - resourceId: anthropic-claude-code-discover-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Gemini CLI extension documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the public extension gallery provides discovery, while installation is performed from a GitHub repository URL or local path
        evidence:
          - resourceId: google-gemini-cli-extensions
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code extension marketplace documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: the marketplace belongs to the VS Code host used by GitHub Copilot, not to a portable agent-plugin standard
          - type: policy
            value: administrators can allow or block specific extensions
        evidence:
          - resourceId: microsoft-vscode-extension-marketplace
            type: documented
            observedAt: 2026-08-29
  - harness: cursor
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cursor plugin documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the official Cursor Marketplace discovers and installs reviewed Cursor Plugins; team marketplaces can distribute Cursor Plugins and Agent Plugins
          - type: plan
            value: team marketplaces are available on Teams and Enterprise plans with plan-specific limits and admin controls
        evidence:
          - resourceId: cursor-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: organization policy can require, restrict, or disable marketplace plugins
          - type: runtime
            value: the marketplace covers supported connectors and packaged skills; private skills are managed under Yours
        evidence:
          - resourceId: xai-grok-bot-skills-marketplace
            type: documented
            observedAt: 2026-08-28
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
            value: "claim is limited to native Aider CLI v0.86.0; Python packages used by development tooling, community wrappers, AiderDesk, and unreleased proposals do not count as an Aider plugin surface"
          - type: format
            value: "review covered portable plugin isolation plus native extension loading, distribution, marketplace, and vendor-extension surfaces"
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
            value: "supports external GitHub skill registries and the JetBrains Marketplace for plugin extensions"
        evidence:
          - resourceId: jetbrains-ai-agent-skills
            type: documented
            observedAt: 2026-09-02
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: GitHub Copilot CLI documentation observed 2026-09-02
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: supports registering, browsing, and installing plugins from public and custom marketplaces
        evidence:
          - resourceId: github-copilot-cli-plugins-finding
            type: documented
            observedAt: 2026-09-02
---

Discover and install extensions through a documented registry or marketplace.

Update, removal, private-extension, and organization-policy behavior are qualifiers. A marketplace listing does not prove that every extension is available to every account, that all extensions use one portable format, or that the catalog has reviewed third-party packages.
