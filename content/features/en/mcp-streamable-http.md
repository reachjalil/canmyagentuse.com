---
title: MCP Streamable HTTP
description: "Connect to an MCP server over the current Streamable HTTP transport. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-streamable-http
locale: en
seoTitle: "MCP Streamable HTTP compatibility — Can My Agent Use"
socialTitle: MCP Streamable HTTP
socialDescription: "Connect to an MCP server over the current Streamable HTTP transport. Unreviewed product cells remain unknown."
llmSummary: "MCP Streamable HTTP is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Connect to an MCP server over the current Streamable HTTP transport."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "transport"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["Streamable HTTP"]
parent: mcp
related: []
highlight: false
notes:
  - id: 73
    text: "Evidence checked 2026-08-29: Amp supports hosted remote MCP servers over Streamable HTTP with OAuth or bearer-token authentication."
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry explicitly lists MCP Streamable HTTP for Grok Bot. This is registry evidence, not an independent transport test."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents adding remote Claude Code MCP servers with the HTTP transport and a server URL."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents Streamable HTTP as a supported MCP transport using HTTP streaming."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents Streamable HTTP as a supported local or remote MCP transport using an HTTP endpoint."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline documents Streamable HTTP as its recommended remote MCP transport and provides an explicit `streamableHttp` configuration."
  - id: 6
    text: "Evidence checked 2026-08-28: Continue documents `streamable-http` remote MCP configuration and its pinned desktop client constructs the MCP SDK Streamable HTTP client transport."
  - id: 7
    text: "Evidence checked 2026-08-28: Zed documents a single remote MCP endpoint, while its pinned HTTP transport sends JSON-RPC with POST and accepts JSON or request-scoped SSE responses."
  - id: 8
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 offers remote Streamable HTTP extensions and constructs a Streamable HTTP MCP client for the configured URI."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 supports connecting remote MCP servers through Streamable HTTP."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 attempts Streamable HTTP first for configured remote MCP servers, carrying configured headers and OAuth state."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp local agents connect to MCP servers over Streamable HTTP with optional custom headers."
issues: []
resources:
  - id: amp-2026-08-mcp-streamable
    title: "Amp — MCP in Orbs"
    href: https://ampcode.com/news/mcp-in-orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Streamable HTTP with OAuth or bearer tokens"
  - id: amp-2026-08-mcp-remote
    title: "Amp — MCP"
    href: https://ampcode.com/docs/customize/mcp
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Remote URL and headers configuration"
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
    locator: Add a remote HTTP server
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport mechanisms — Streamable HTTP Transport
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport table — Streamable HTTP
  - id: cline-mcp-docs
    title: Cline — Model Context Protocol
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Remote server (Streamable HTTP); transport types
  - id: continue-mcp-docs
    title: Continue — Model Context Protocol
    href: https://docs.continue.dev/customize/deep-dives/mcp
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to use Streamable HTTP transport
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: StreamableHTTPClientTransport
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: custom remote server configuration
  - id: zed-mcp-http-source
    title: Zed source — MCP HTTP transport at e3adf43
    href: https://github.com/zed-industries/zed/blob/e3adf43f37d7a2a9c165a78b255d293b0848d2d0/crates/context_server/src/transport/http.rs
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: POST request and JSON or SSE response handling
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Remote Extension Streamable HTTP choice and configuration, lines 149-164 and 266-365"
  - id: jetbrains-ai-mcp-2026-2
    title: JetBrains AI Assistant — Model Context Protocol
    href: https://www.jetbrains.com/help/ai-assistant/mcp.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Supported transports; HTTP stream server configuration
  - id: opencode-v1-18-25-mcp-http
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L236-L284
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "connectRemote; StreamableHTTP transport"
  - id: warp-mcp
    title: "Warp — Model Context Protocol"
    href: https://docs.warp.dev/agents/capabilities/mcp/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding an MCP Server; Streamable HTTP configuration examples"
support:
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
            value: "Streamable HTTP for hosted remote servers"
          - type: auth
            value: "OAuth, bearer-token headers, or managed remote authentication"
        evidence:
          - resourceId: amp-2026-08-mcp-streamable
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-mcp-remote
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
            value: "Streamable HTTP URL with optional headers"
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
            value: "Streamable HTTP"
          - type: auth
            value: "configured headers or the OpenCode MCP OAuth provider may be attached"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-http
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
            value: Streamable HTTP remote server endpoint
        evidence:
          - resourceId: jetbrains-ai-mcp-2026-2
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "remote servers require a reachable endpoint; headers, timeouts, and optional Unix-socket routing are configuration-dependent"
          - type: auth
            value: "protected endpoints can invoke Goose's MCP OAuth flow"
        evidence:
          - resourceId: goose-v1-48-using-extensions
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
            value: the remote server must be reachable from the Claude Code host and may require headers or OAuth
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
            value: the configured HTTP endpoint must be reachable and may be restricted by authentication, enterprise MCP policy, and URL/network allowlists
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
            value: the configured endpoint must be reachable and can require headers, OAuth, or other documented authentication providers
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
            value: transport support is registry-listed and was not independently tested by Can My Agent Use
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
            value: the endpoint must be reachable and `type` must be set to `streamableHttp`; omitted remote types retain legacy SSE behavior for compatibility
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
            value: the configured endpoint must be reachable and may require API-key or custom-header configuration; native desktop OAuth is separately limited
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
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: Zed source commit e3adf43f37d7 and current documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: the pinned source negotiates MCP through revision 2025-11-25; it does not yet advertise the catalog's 2026-07-28 revision
          - type: transport
            value: the remote endpoint must be reachable and may require configured headers or Zed's OAuth flow
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
          - resourceId: zed-mcp-http-source
            type: documented
            observedAt: 2026-08-28
---

Connect to an MCP server over the current Streamable HTTP transport.

The Grok Bot cell is registry-listed. Authentication, server policy, and optional MCP primitives remain separate claims.
