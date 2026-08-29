---
title: MCP Apps
description: Render an interactive interface returned by an MCP server, with current-track evidence for supported hosts.
slug: mcp-apps
locale: en
seoTitle: MCP Apps compatibility — Can My Agent Use
socialTitle: Can my agent use MCP Apps?
socialDescription: Current-track MCP Apps host support, with dated public evidence.
llmSummary: MCP Apps let tools return interactive interfaces that render inside a compatible MCP host. Selected current-track cells are sourced; all others remain unknown.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
  - mcp
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Render an interactive interface returned by an MCP server inside the product.
specLabel: MCP Apps 2026-01-26
specification:
  id: mcp-apps
  revision: "2026-01-26"
  maturity: stable extension
  role: host rendering a server-provided app
  authority: MCP project
  canonicalUrl: https://modelcontextprotocol.io/extensions/apps/specification
aliases: [MCP UI, interactive MCP apps]
parent: mcp
related: [mcp-tools, mcp-resources]
highlight: true
notes:
  - id: 5
    text: "Evidence checked 2026-08-29: Amp's 2026-08-19 MCP announcement explicitly says MCP Apps are not supported across the announced Amp MCP surfaces, including the TUI."
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT can run MCP-backed apps with interactive in-chat UI, but developer mode and full MCP availability are limited by plan, workspace role, and beta rollout."
  - id: 2
    text: "Evidence checked 2026-08-28: the official MCP Apps client list names Claude, while Anthropic limits custom remote connectors to paid plans and currently labels them beta."
  - id: 3
    text: "Evidence checked 2026-08-28: the official MCP Apps client list names Claude Desktop as a host; connector and extension availability still depends on configuration and administrator policy."
  - id: 4
    text: "Evidence checked 2026-08-28: the VS Code MCP developer guide lists MCP Apps among the protocol features implemented for GitHub Copilot agent mode."
  - id: 6
    text: "Evidence checked 2026-08-29: the maintained MCP extension matrix lists Cursor, and Cursor's own MCP reference and 2.6 changelog document interactive MCP Apps UI inside agent chat."
  - id: 7
    text: "Evidence checked 2026-08-29: OpenWork Desktop v0.18.39 documents and implements standard MCP Apps rendering; support is stable but transport- and host-policy-limited."
  - id: 8
    text: "Evidence checked 2026-08-29: goose v1.48.0 explicitly sets MCP Apps capability off for Goose CLI while enabling it for the separate Goose Desktop path."
issues: []
resources:
  - id: openai-chatgpt-mcp-apps
    title: OpenAI — Developer mode and MCP apps in ChatGPT
    href: https://help.openai.com/en/articles/12584461-developer-mode-and-full-mcp-connectors-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-apps-sdk
    title: OpenAI — Build with the Apps SDK
    href: https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: mcp-apps-overview
    title: Model Context Protocol — MCP Apps overview and client support
    href: https://modelcontextprotocol.io/extensions/apps/overview
    kind: spec
    publisher: MCP project
    evidenceType: listed
    reviewedAt: 2026-08-28
  - id: anthropic-remote-mcp-apps
    title: Anthropic — Custom connectors using remote MCP
    href: https://support.anthropic.com/en/articles/11175166-about-custom-integrations-using-remote-mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-mcp-apps
    title: Visual Studio Code — MCP developer guide
    href: https://code.visualstudio.com/api/extension-guides/ai/mcp
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: amp-mcp-unsupported-primitives
    title: Amp — MCP in Orbs
    href: https://ampcode.com/news/mcp-in-orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP support across surfaces and explicitly unsupported primitives"
  - id: mcp-apps-client-matrix-pinned
    title: Model Context Protocol — Extension Support Matrix
    href: https://github.com/modelcontextprotocol/modelcontextprotocol/blob/e1f93af48a6b5bd57df9922f5f1f62117541c7ac/docs/extensions/client-matrix.mdx
    kind: spec
    publisher: MCP project
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Support matrix; Cursor row"
  - id: cursor-mcp-apps-docs
    title: Cursor — Model Context Protocol
    href: https://cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Protocol and extension support; Apps extension"
  - id: cursor-mcp-apps-2-6
    title: Cursor 2.6 — MCP Apps
    href: https://cursor.com/changelog/2-6
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP Apps; release dated 2026-03-03"
  - id: openwork-mcp-apps-host-v01839
    title: OpenWork v0.18.39 — MCP Apps inline host
    href: https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/features/mcp-apps-host/README.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Opening statement; Runtime flow; Current compatibility"
  - id: openwork-native-mcp-apps-v01839
    title: OpenWork v0.18.39 — Native MCP Apps
    href: https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/features/remote-mcp-apps/README.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Standard MCP server path; Rollout; Host security and compatibility"
  - id: goose-v1-48-agent-source
    title: goose v1.48.0 — agent MCP configuration
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/agent.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Goose CLI sets mcpui false while Desktop sets true, lines 407-426"
support:
  - harness: amp-cli
    versions:
      - track: current
        status: no
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: Amp MCP in Orbs release dated 2026-08-19
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "scoped to Amp's TUI as an MCP host"
          - type: runtime
            value: "ordinary MCP tool invocation remains supported; this negative concerns the MCP Apps interactive-interface extension"
        evidence:
          - resourceId: amp-mcp-unsupported-primitives
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 hosted documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: preview
            value: developer mode and full MCP are beta
          - type: plan
            value: availability varies by ChatGPT plan
          - type: policy
            value: workspace role and administrator controls apply
        evidence:
          - resourceId: openai-chatgpt-mcp-apps
            type: documented
            observedAt: 2026-08-28
          - resourceId: openai-apps-sdk
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 hosted documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: custom connectors require a paid plan
          - type: preview
            value: connector workflow is beta
        evidence:
          - resourceId: mcp-apps-overview
            type: listed
            observedAt: 2026-08-28
          - resourceId: anthropic-remote-mcp-apps
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: connector and extension configuration applies
        evidence:
          - resourceId: mcp-apps-overview
            type: listed
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vscode-mcp-apps
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: release
          revision: Cursor 2.6 release dated 2026-03-03
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: mcp-apps-client-matrix-pinned
            type: listed
            observedAt: 2026-08-29
          - resourceId: cursor-mcp-apps-docs
            type: documented
            observedAt: 2026-08-29
          - resourceId: cursor-mcp-apps-2-6
            type: documented
            observedAt: 2026-08-29
  - harness: openwork-desktop
    versions:
      - track: current
        status: partial
        noteIds: [7]
        target:
          kind: release
          revision: OpenWork v0.18.39 commit 63625a4be566256370eebb84ad91b020a0f6cf06
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "configured remote Streamable HTTP is supported with legacy remote SSE fallback; direct command or stdio resource resolution is unsupported"
          - type: policy
            value: "app-originated calls remain bound to the originating MCP server and workspace policy; elevated device permissions and some optional host operations are unavailable"
        evidence:
          - resourceId: openwork-mcp-apps-host-v01839
            type: documented
            observedAt: 2026-08-29
          - resourceId: openwork-native-mcp-apps-v01839
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: no
        noteIds: [8]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP Apps is enabled for Goose Desktop but explicitly disabled for the exact Goose CLI surface"
        evidence:
          - resourceId: goose-v1-48-agent-source
            type: documented
            observedAt: 2026-08-29
---

MCP Apps is the official Model Context Protocol extension for interactive interfaces returned by tools. A compatible host fetches a declared UI resource, renders it in a sandboxed frame, and mediates communication between the interface and MCP tools.

This row is narrower than ordinary MCP tool calling. A harness can support MCP tools while leaving this UI extension unknown. The first wave sources only hosts named by current product or protocol documentation.
