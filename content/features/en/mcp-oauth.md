---
title: MCP OAuth authorization
description: "Complete the MCP authorization flow for protected remote servers. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-oauth
locale: en
seoTitle: "MCP OAuth authorization compatibility — Can My Agent Use"
socialTitle: MCP OAuth authorization
socialDescription: "Complete the MCP authorization flow for protected remote servers. Unreviewed product cells remain unknown."
llmSummary: "MCP OAuth authorization is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Complete the MCP authorization flow for protected remote servers."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "authorization"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP OAuth"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents browser-based OAuth for remote HTTP MCP servers, secure token storage and refresh, revocation, callback recovery, and fixed callback-port or preconfigured-client options."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents OAuth 2.0 for remote SSE and HTTP MCP servers, automatic discovery, browser authorization, token storage and refresh, and `/mcp auth` management."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor documents OAuth for remote MCP servers, dynamic or static client registration, fixed redirect URLs, and CLI login with automatic callback handling."
  - id: 4
    text: "Evidence checked 2026-08-28: Cline's pinned desktop implementation performs MCP OAuth discovery, client registration, browser authorization, callback validation, code exchange, token storage, and refresh for remote SSE and Streamable HTTP servers."
  - id: 5
    text: "Evidence checked 2026-08-28: Continue's pinned desktop implementation includes the MCP OAuth authorization-code flow, but its connection path states that native OAuth is currently supported only for the legacy SSE transport."
  - id: 6
    text: "Evidence checked 2026-08-28: Zed documents prompting the user through the standard MCP OAuth flow when a remote server has no configured Authorization header."
  - id: 7
    text: "Evidence checked 2026-08-29: goose v1.48.0 implements OAuth for protected Streamable HTTP servers, including challenge detection, refresh, browser fallback, PKCE, registration, and pre-registered clients."
issues: []
resources:
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Authenticate with remote MCP servers
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: OAuth support for remote MCP servers
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Static OAuth for remote servers; Authentication
  - id: cline-mcp-oauth-source
    title: Cline source — MCP OAuth manager at 27350f2
    href: https://github.com/cline/cline/blob/27350f243c2a31c97b4e38fa700e009a2f61adae/apps/vscode/src/services/mcp/McpOAuthManager.ts
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: ClineOAuthClientProvider and startOAuthFlow
  - id: cline-mcp-client-source
    title: Cline source — MCP desktop client at 27350f2
    href: https://github.com/cline/cline/blob/27350f243c2a31c97b4e38fa700e009a2f61adae/apps/vscode/src/services/mcp/McpHub.ts
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: remote transport authProvider
  - id: continue-mcp-oauth-source
    title: Continue source — MCP OAuth client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPOauth.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: MCPConnectionOauthProvider and OAuth callback flow
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: native OAuth transport scope
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: custom remote server OAuth note
  - id: goose-v1-48-extension-manager-source
    title: goose v1.48.0 — MCP extension manager
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/extension_manager.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "OAuth challenge, refresh, fallback, and step-up, lines 488-535 and 1105-1299"
support:
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "OAuth applies to normal Streamable HTTP connections; the Unix-domain-socket HTTP path does not support it"
          - type: auth
            value: "metadata, scopes, callback reachability, and optional pre-registered credentials determine completion"
        evidence:
          - resourceId: goose-v1-48-extension-manager-source
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: OAuth applies to HTTP servers and requires a server-compatible redirect and client-registration flow
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: remote servers may use dynamic registration or configured static credentials, and redirect URLs differ between web/agents and desktop surfaces
        evidence:
          - resourceId: cursor-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: Gemini CLI MCP documentation updated 2026-06-18
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: browser-based OAuth requires local callback access; headless, remote SSH, and container environments need an alternative authentication arrangement
        evidence:
          - resourceId: google-gemini-cli-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: Cline source commit 27350f243c2a observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: browser authorization requires a working local callback path; manually configured authorization headers remain a separate option
        evidence:
          - resourceId: cline-mcp-oauth-source
            type: documented
            observedAt: 2026-08-28
          - resourceId: cline-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: Continue source commit 5522c6f44ca0 observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: the reviewed desktop connection path limits native MCP OAuth handling to legacy SSE servers
          - type: auth
            value: a browser callback is required; API keys and configured headers are separate authentication paths
        evidence:
          - resourceId: continue-mcp-oauth-source
            type: documented
            observedAt: 2026-08-28
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Zed MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: automatic OAuth prompting applies when a remote server has no configured Authorization header
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
---

Complete the MCP authorization flow for protected remote servers.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
