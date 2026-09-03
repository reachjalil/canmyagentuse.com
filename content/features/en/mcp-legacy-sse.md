---
title: MCP legacy HTTP and SSE
description: "Connect through the superseded HTTP plus SSE transport when migration compatibility is required. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-legacy-sse
locale: en
seoTitle: "MCP legacy HTTP and SSE compatibility — Can My Agent Use"
socialTitle: MCP legacy HTTP and SSE
socialDescription: "Connect through the superseded HTTP plus SSE transport when migration compatibility is required. Unreviewed product cells remain unknown."
llmSummary: "MCP legacy HTTP and SSE is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-09-02
published: 2026-08-28
category: interfaces
summary: "Connect through the superseded HTTP plus SSE transport when migration compatibility is required."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "legacy transport"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP SSE"]
parent: mcp
related: []
highlight: false
notes:
  - id: 88
    text: "Evidence checked 2026-09-02: Grok on the web supports remote MCP servers using Server-Sent Events (SSE) through tunneling services such as ngrok."
  - id: 89
    text: "Evidence checked 2026-09-02: GitHub Copilot CLI supports remote MCP servers over Server-Sent Events (SSE) via the sse transport option in ~/.copilot/mcp-config.json or /mcp add."
  - id: 81
    text: "Evidence checked 2026-09-02: OpenWork Desktop retains legacy Server-Sent Events (SSE) client transport support for remote MCP servers via its underlying OpenCode engine."
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Cascade documents SSE as a supported transport for MCP servers alongside stdio and Streamable HTTP."
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 has no legacy MCP HTTP-plus-SSE client or server transport."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp's current MCP documentation includes remote server URLs ending in /sse in both CLI and configuration examples."
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry explicitly lists legacy MCP SSE for Grok Bot. This is registry evidence, not an independent transport test."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents the `sse` transport for legacy remote Claude Code MCP servers while recommending HTTP for current servers."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents SSE endpoints as one of its three supported MCP transport types."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents SSE as a supported local or remote MCP transport and distinguishes it from Streamable HTTP."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline documents an explicit `sse` transport for legacy remote servers and retains SSE as the default when a remote transport type is omitted."
  - id: 6
    text: "Evidence checked 2026-08-28: Continue documents an explicit `sse` remote transport and its pinned desktop client constructs the MCP SDK SSE client transport."
  - id: 7
    text: "Evidence checked 2026-08-28: Zed's pinned transport module exposes only stdio and a single-endpoint POST-based HTTP transport; it does not implement the superseded HTTP-plus-SSE client transport."
  - id: 8
    text: "Evidence checked 2026-08-29: goose v1.48.0 explicitly states that deprecated HTTP-plus-SSE transport is unsupported; its retained configuration variant exists only for file compatibility."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 continues to support legacy remote MCP servers using Server-Sent Events."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 retains the legacy MCP SSE client transport as the fallback after Streamable HTTP for configured remote servers."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp local agents connect to legacy MCP Server-Sent Events endpoints and retain current SSE configuration examples."
issues: []
resources:
  - id: xai-grok-custom-mcp-tunneling
    title: "xAI — Custom MCP Server Tunneling"
    href: https://docs.x.ai/grok/connectors/custom-mcp-tunneling
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Setting up a tunnel; ngrok; Cloudflare quick tunnels do not support Server-Sent Events (SSE)"
  - id: github-copilot-cli-mcp-servers
    title: "GitHub — Adding MCP servers for GitHub Copilot CLI"
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "HTTP or SSE: connects to a remote MCP server; SSE uses the legacy HTTP with Server-Sent Events transport"
  - id: openwork-v01839-legacy-sse
    title: "OpenWork Desktop v0.18.39 — OpenCode MCP client"
    href: https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/packages/docs/start-here/do-work-with-it/create-a-skill-from-chat.mdx
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "OpenCode engine MCP client configuration"
  - id: cognition-devin-desktop-mcp
    title: "Cognition — Model Context Protocol (MCP)"
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "One-Click Install via Deeplink"
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
  - id: amp-2026-08-mcp-sse
    title: "Amp — MCP"
    href: https://ampcode.com/docs/customize/mcp
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Remote /sse examples"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add a remote SSE server
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport mechanisms — SSE Transport
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport table — SSE
  - id: cline-mcp-docs
    title: Cline — Model Context Protocol
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: SSE (Legacy); remote transport default
  - id: continue-mcp-docs
    title: Continue — Model Context Protocol
    href: https://docs.continue.dev/customize/deep-dives/mcp
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to use Server-Sent Events transport
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: SSEClientTransport
  - id: zed-mcp-transport-source
    title: Zed source — MCP transport module at e3adf43
    href: https://github.com/zed-industries/zed/blob/e3adf43f37d7a2a9c165a78b255d293b0848d2d0/crates/context_server/src/transport.rs
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: exported stdio and HTTP transports
  - id: zed-mcp-http-source
    title: Zed source — MCP HTTP transport at e3adf43
    href: https://github.com/zed-industries/zed/blob/e3adf43f37d7a2a9c165a78b255d293b0848d2d0/crates/context_server/src/transport/http.rs
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: single-endpoint POST transport
  - id: goose-v1-48-extension-source
    title: goose v1.48.0 — MCP extension transport configuration
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/extension.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "SSE explicitly unsupported, lines 159-196 and 440-466"
  - id: jetbrains-ai-mcp-2026-2
    title: JetBrains AI Assistant — Model Context Protocol
    href: https://www.jetbrains.com/help/ai-assistant/mcp.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Supported transports; SSE server configuration
  - id: opencode-v1-18-25-mcp-sse
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L269-L290
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "connectRemote; ordered StreamableHTTP and SSE transports"
  - id: warp-mcp
    title: "Warp — Model Context Protocol"
    href: https://docs.warp.dev/agents/capabilities/mcp/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Streamable HTTP or SSE Server; SSE examples"
support:
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
          - type: transport
            value: "no MCP legacy SSE transport"
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
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "legacy remote SSE endpoint configuration alongside newer remote HTTP options"
        evidence:
          - resourceId: amp-2026-08-mcp-sse
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "legacy HTTP URL using Server-Sent Events"
        evidence:
          - resourceId: warp-mcp
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "legacy HTTP plus Server-Sent Events"
          - type: policy
            value: "attempted after Streamable HTTP"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-sse
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
          - type: transport
            value: legacy HTTP endpoint using Server-Sent Events
        evidence:
          - resourceId: jetbrains-ai-mcp-2026-2
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
          - type: transport
            value: "stdio and Streamable HTTP remain supported; only the superseded dedicated HTTP-plus-SSE transport is rejected"
        evidence:
          - resourceId: goose-v1-48-extension-source
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: SSE is retained for legacy compatibility; Anthropic recommends the HTTP transport where the server supports it
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: SSE remains supported for compatibility, while Cursor separately documents Streamable HTTP for current HTTP endpoints
        evidence:
          - resourceId: cursor-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: Gemini CLI MCP documentation updated 2026-06-18
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: SSE endpoints can use headers or OAuth; new deployments should prefer Streamable HTTP where available
        evidence:
          - resourceId: google-gemini-cli-mcp-docs
            type: documented
            observedAt: 2026-08-28
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
            value: superseded transport support is registry-listed and was not independently tested by Can My Agent Use
          - type: policy
            value: organization server and network allowlists can block a remote server
        evidence:
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cline MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: SSE is retained for legacy compatibility; Cline recommends explicit Streamable HTTP for current remote servers
        evidence:
          - resourceId: cline-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: Continue source commit 5522c6f44ca0 and current documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: SSE is an explicit legacy remote transport and remains separate from Continue's Streamable HTTP path
        evidence:
          - resourceId: continue-mcp-docs
            type: documented
            observedAt: 2026-08-28
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: no
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: Zed source commit e3adf43f37d7 observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: SSE response bodies on Zed's POST-based Streamable HTTP path do not constitute the superseded dedicated HTTP-plus-SSE transport
        evidence:
          - resourceId: zed-mcp-transport-source
            type: documented
            observedAt: 2026-08-28
          - resourceId: zed-mcp-http-source
            type: documented
            observedAt: 2026-08-28
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
          - type: transport
            value: "supports SSE transport for MCP servers alongside stdio and Streamable HTTP"
        evidence:
          - resourceId: cognition-devin-desktop-mcp
            type: documented
            observedAt: 2026-09-02
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [88]
        target:
          kind: dated-documentation
          revision: current Grok Connectors documentation
          observedAt: 2026-09-02
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: "Server-Sent Events (SSE) for custom remote MCP servers"
        evidence:
          - resourceId: xai-grok-custom-mcp-tunneling
            type: documented
            observedAt: 2026-09-02
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "legacy HTTP with Server-Sent Events (SSE) transport for backwards compatibility"
        evidence:
          - resourceId: github-copilot-cli-mcp-servers
            type: documented
            observedAt: 2026-09-02
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "legacy HTTP plus Server-Sent Events supported via OpenCode engine"
        evidence:
          - resourceId: openwork-v01839-legacy-sse
            type: documented
            observedAt: 2026-09-02
---

Connect through the superseded HTTP plus SSE transport when migration compatibility is required.

The Grok Bot cell is registry-listed for migration compatibility. New deployments should prefer the current transport where the server supports it.
