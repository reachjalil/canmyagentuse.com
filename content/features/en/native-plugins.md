---
title: Native plugin system
description: Install product-specific extensions without implying Agent Plugins portability.
slug: native-plugins
locale: en
seoTitle: Native plugin compatibility — Can My Agent Use
socialTitle: Native plugin systems
socialDescription: Product-native extension support tracked separately from portable Agent Plugins.
llmSummary: A native plugin system is product-specific and does not establish support for the portable Agent Plugins manifest.
audience: Engineers comparing agent extension systems.
contentKind: feature
status: published
tags: [interfaces, plugins, native-extensions]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Install and load a product-specific extension package.
specLabel: Common product term
aliases: [native extensions, proprietary plugins]
parent: plugins
related: [agent-plugin-core]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop manages native OpenCode plugins through opencode.json; this is not the portable Agent Plugins manifest."
  - id: 2
    text: "Evidence checked 2026-08-29: OpenAI documents reusable plugins on ChatGPT web, ChatGPT desktop, and Codex CLI. This is OpenAI's product-native plugin system, not evidence of Agent Plugins 1.0 portability."
  - id: 3
    text: "Evidence checked 2026-08-29: Claude Code plugins bundle skills, agents, hooks, and MCP servers. Anthropic does not identify this native format as Agent Plugins 1.0."
  - id: 4
    text: "Evidence checked 2026-08-29: Gemini CLI extensions package prompts, MCP servers, commands, themes, hooks, sub-agents, and Agent Skills in a Gemini CLI-specific extension format."
  - id: 5
    text: "Evidence checked 2026-08-29: VS Code has a native extension system that installs packages into the editor hosting GitHub Copilot. This host-level support does not establish a Copilot-specific plugin format or Agent Plugins conformance."
  - id: 6
    text: "Evidence checked 2026-08-29: Cursor documents its own .cursor-plugin/plugin.json format alongside the separate Agent Plugins open standard."
  - id: 7
    text: "Evidence checked 2026-08-29: Grok Bot exposes a product-native Settings → Plugins surface for supported connectors and packaged skills."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native or portable plugin loader, marketplace, failure-isolation contract, or vendor-extension format."
issues: []
resources:
  - id: openwork-native-plugins
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-chatgpt-codex-plugins
    title: OpenAI — Plugins in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/plugins
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Overview and Use and install plugins
  - id: anthropic-claude-code-discover-plugins
    title: Anthropic — Discover and install Claude Code plugins
    href: https://code.claude.com/docs/en/discover-plugins
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: How marketplaces work
  - id: google-gemini-cli-extensions
    title: Google — Gemini CLI extensions
    href: https://geminicli.com/docs/extensions/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Introduction
  - id: microsoft-vscode-extension-marketplace
    title: Microsoft — VS Code Extension Marketplace
    href: https://code.visualstudio.com/docs/configure/extensions/extension-marketplace
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Extension Marketplace
  - id: cursor-plugins
    title: Cursor — Plugins
    href: https://cursor.com/docs/plugins
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: The Agent Plugins standard
  - id: xai-grok-bot-native-plugins
    title: xAI — Grok Bot skills and routines
    href: https://docs.x.ai/grok-bot/skills-routines-and-automations
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Save a skill
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
            value: OpenAI-native plugins can bundle skills, connectors, and MCP-backed tools; this is not an Agent Plugins 1.0 conformance claim
          - type: policy
            value: account and workspace controls can affect which plugins are available
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
            value: the ChatGPT desktop app exposes the same product-native public plugin directory as ChatGPT web
          - type: policy
            value: account and workspace controls can affect which plugins are available
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
            value: /plugins opens the Codex CLI plugin browser; a new session is required before installed plugin skills or tools are available
          - type: policy
            value: installation uses a configured marketplace and can be affected by workspace policy
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
          - type: format
            value: native Claude Code plugins can bundle skills, agents, hooks, and MCP servers; Agent Plugins 1.0 portability is a separate claim
          - type: policy
            value: managed settings can restrict marketplaces and plugin installation
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
          - type: format
            value: Gemini CLI extensions are product-native packages and do not establish Agent Plugins 1.0 conformance
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
            value: support is provided by the VS Code host extension system around GitHub Copilot, not by an Agent Plugins manifest loader
          - type: runtime
            value: extensions run with the same permissions as VS Code and can be installed, disabled, updated, or uninstalled
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
          - type: format
            value: Cursor Plugins use .cursor-plugin/plugin.json and add Cursor-specific rules, agents, commands, hooks, and variables
        evidence:
          - resourceId: cursor-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Grok Bot skills and routines documentation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Settings → Plugins installs supported connectors and packaged skills; private skills are managed separately under Yours
        evidence:
          - resourceId: xai-grok-bot-native-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: native OpenCode plugin format configured through opencode.json
        evidence:
          - resourceId: openwork-native-plugins
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
---

This capability covers the product's own extension mechanism. It does not establish portability to another host.
