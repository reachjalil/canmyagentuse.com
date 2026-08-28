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
updated: 2026-08-28
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
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT can run MCP-backed apps with interactive in-chat UI, but developer mode and full MCP availability are limited by plan, workspace role, and beta rollout."
  - id: 2
    text: "Evidence checked 2026-08-28: the official MCP Apps client list names Claude, while Anthropic limits custom remote connectors to paid plans and currently labels them beta."
  - id: 3
    text: "Evidence checked 2026-08-28: the official MCP Apps client list names Claude Desktop as a host; connector and extension availability still depends on configuration and administrator policy."
  - id: 4
    text: "Evidence checked 2026-08-28: the VS Code MCP developer guide lists MCP Apps among the protocol features implemented for GitHub Copilot agent mode."
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
support:
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
---

MCP Apps is the official Model Context Protocol extension for interactive interfaces returned by tools. A compatible host fetches a declared UI resource, renders it in a sandboxed frame, and mediates communication between the interface and MCP tools.

This row is narrower than ordinary MCP tool calling. A harness can support MCP tools while leaving this UI extension unknown. The first wave sources only hosts named by current product or protocol documentation.
