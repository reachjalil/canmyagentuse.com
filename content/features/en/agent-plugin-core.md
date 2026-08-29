---
title: Agent Plugins portable manifest
description: "Load the published portable plugin.json manifest and its core components. This is tracked as an independent compatibility claim."
slug: agent-plugin-core
locale: en
seoTitle: "Agent Plugins portable manifest compatibility — Can My Agent Use"
socialTitle: Agent Plugins portable manifest
socialDescription: "Load the published portable plugin.json manifest and its core components. Unreviewed product cells remain unknown."
llmSummary: "Agent Plugins portable manifest is atomic and does not follow automatically from broader plugins support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Load the published portable plugin.json manifest and its core components."
specLabel: Agent Plugins 1.0
specification:
  id: agent-plugins
  revision: "1.0.0"
  maturity: published convention
  role: "portable manifest"
  authority: specification maintainers
  canonicalUrl: https://agent-plugins.org/specification/1.0
aliases: ["plugin.json"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry lists Grok Bot among clients that support the portable Agent Plugins format. This is registry evidence, not an independent runtime conformance test."
  - id: 2
    text: "Evidence checked 2026-08-29: Cursor's first-party documentation explicitly says spec-conformant Agent Plugins with a root plugin.json load without changes."
  - id: 3
    text: "Evidence checked 2026-08-29: the maintained Agent Plugins compatible-client registry lists VS Code, Cursor, GitHub Copilot, ChatGPT & Codex, Kiro, Hermes Agent, OpenClaw, Grok Bot, and NanoClaw as clients of the portable format. The catalog maps only the explicitly described VS Code, Cursor, GitHub Copilot terminal, ChatGPT web and desktop, Codex terminal, and Grok Bot surfaces."
  - id: 4
    text: "Evidence checked 2026-08-29: every other exact catalog surface is absent from the maintained Agent Plugins compatible-client registry. The resulting unsupported cells are scoped only to the portable Agent Plugins format and do not claim that a product lacks its own native extension system."
issues: []
resources:
  - title: Agent Plugins portable manifest reference
    href: https://agent-plugins.org/specification/1.0
    kind: spec
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: cursor-agent-plugins
    title: Cursor — Plugins
    href: https://cursor.com/docs/plugins
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: The Agent Plugins standard
  - id: agent-plugins-compatible-clients-2026-08-29
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: Complete compatible-client list and per-client component summary
support:
  - harness: cursor
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor Agent Plugins documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Cursor documents a spec-conformant root plugin.json and says conforming Agent Plugins load without changes
          - type: runtime
            value: Agent Plugins are supported alongside the separate Cursor Plugins format and share Cursor's installation flow
        evidence:
          - resourceId: cursor-agent-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Agent Plugins compatible-client listing
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: support is registry-listed and was not independently conformance-tested by Can My Agent Use
        evidence:
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Aider is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Amp CLI is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: chatgpt-cli
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: ChatGPT CLI is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: The maintained registry lists ChatGPT desktop under the registry's ChatGPT & Codex entry for portable Agent Plugins manifest; this is listing evidence rather than independent runtime conformance testing
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: The maintained registry lists ChatGPT web under the registry's ChatGPT & Codex entry for portable Agent Plugins manifest; this is listing evidence rather than independent runtime conformance testing
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: preview-enabled
        qualifiers:
          - type: format
            value: Chrome WebMCP preview is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Claude CLI is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: claude-desktop
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Claude desktop is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Claude web is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Cline is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: The maintained registry lists Codex CLI under the registry's ChatGPT & Codex entry for portable Agent Plugins manifest; this is listing evidence rather than independent runtime conformance testing
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Continue is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: The maintained registry lists GitHub Copilot CLI under the registry's GitHub Copilot entry for portable Agent Plugins manifest; this is listing evidence rather than independent runtime conformance testing
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Microsoft Copilot web, which is distinct from the listed GitHub Copilot client is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Devin web is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: gemini-cli
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Gemini CLI is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Gemini web is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Goose CLI is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Grok web, which is distinct from the listed Grok Bot client is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: JetBrains AI Assistant is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: le-chat
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Le Chat is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: OpenCode is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: openwork-desktop
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: OpenWork desktop is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Perplexity web is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: Replit Agent is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: The maintained registry lists VS Code with Copilot under the registry's VS Code entry for portable Agent Plugins manifest; this is listing evidence rather than independent runtime conformance testing
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Warp is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: windsurf
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Windsurf is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
  - harness: zed-agent
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: 2026-08-29 Agent Plugins compatible-client registry
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Zed Agent is absent from the maintained compatible-client registry; this no is limited to portable Agent Plugins manifest and does not cover product-native extension mechanisms
        evidence:
          - resourceId: agent-plugins-compatible-clients-2026-08-29
            type: listed
            observedAt: 2026-08-29
---

Load the published portable plugin.json manifest and its core components.

The Grok Bot cell is based on the Agent Plugins project's dated compatible-client registry. Unreviewed clients remain unknown, and the listing does not prove every optional client extension.
