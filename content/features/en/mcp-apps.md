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
updated: 2026-08-31
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
  - id: 84
    text: "Evidence checked 2026-08-31: WebMCP lets an agent interact with the website's existing UI, whereas MCP Apps render server-provided UI inside an agent host; Chrome WebMCP does not implement the MCP Apps extension."
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable CLI package, arguments, commands, and dependencies establishes that it implements no MCP client or MCP Apps UI-resource host."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exhaustive MCP response renderer supports text, Markdown, URLs, images, links, and errors but has no MCP Apps iframe, ui:// resource, or app-bridge rendering path."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 detects MCP App resource metadata, reads linked text content, and renders interactive HTML through the official AppBridge in a sandboxed editor iframe."
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
  - id: chrome-webmcp-compare-mcp-apps
    title: "Google Chrome — When to use WebMCP and MCP"
    href: https://developer.chrome.com/docs/ai/webmcp/compare-mcp
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Control UI access"
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
  - id: cline-v4-1-16-mcp-apps
    title: "Cline v4.1.16 — exhaustive MCP response renderer"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/webview-ui/src/components/mcp/chat-display/McpResponseDisplay.tsx#L75-L215"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "MCP response segmentation and rendering branches"
  - id: cline-v4-1-16-mcp-apps-secondary
    title: "Cline v4.1.16 — MCP rich segment union"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/webview-ui/src/components/mcp/chat-display/utils/mcpRichUtil.ts#L4-L19"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Exhaustive McpRichSegment type union"
  - id: continue-v2-mcp-tool-adapter
    title: "Continue v2.0.0 — MCP UI resource adapter"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/tools/callTool.ts#L102-L142
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "UI metadata and linked resource retrieval"
  - id: continue-v2-mcp-app-renderer
    title: "Continue v2.0.0 — MCP App renderer"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/gui/src/pages/gui/ToolCallDiv/MCPAppRenderer.tsx
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "AppBridge, sandbox, messages, tools, and input/result, lines 76–328"
  - id: continue-v2-lockfile
    title: "Continue v2.0.0 — pinned MCP dependencies"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/package-lock.json#L4401-L4433
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "@modelcontextprotocol/ext-apps 1.7.4"
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
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: no
        stage: experimental
        noteIds: [84]
        target:
          kind: dated-documentation
          revision: Chrome 153 WebMCP origin-trial documentation
          observedAt: 2026-08-31
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: WebMCP is an experimental Chrome origin trial from Chrome 149; local development requires the enable-webmcp-testing flag
          - type: protocol-revision
            value: WebMCP acts on an existing website UI; it does not render MCP App UI inside an agent host
        evidence:
          - resourceId: chrome-webmcp-compare-mcp-apps
            type: documented
            observedAt: 2026-08-31
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [83]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; community MCP wrappers, external programs invoked through /run, AiderDesk, and unreleased proposals do not count"
          - type: host-role
            value: "local CLI does not render MCP Apps"
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
  - harness: cline
    versions:
      - track: current
        status: no
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP host/client"
          - type: format
            value: "plain text, Markdown, URL, image, link, and error segments only"
          - type: runtime
            value: "no interactive server-provided iframe or MCP Apps host bridge"
        evidence:
          - resourceId: cline-v4-1-16-mcp-apps
            type: listed
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-apps-secondary
            type: listed
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "ui.resourceUri or legacy ui/resourceUri metadata and a linked text resource"
          - type: policy
            value: "sandboxed iframe; some sensitive permissions cannot be delegated in VS Code/Electron"
          - type: protocol-revision
            value: "@modelcontextprotocol/ext-apps 1.7.4"
        evidence:
          - resourceId: continue-v2-mcp-tool-adapter
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-mcp-app-renderer
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-lockfile
            type: documented
            observedAt: 2026-08-29
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
