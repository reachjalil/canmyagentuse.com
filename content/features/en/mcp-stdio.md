---
title: MCP stdio transport
description: "Connect to a local MCP server over standard input and output. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-stdio
locale: en
seoTitle: "MCP stdio transport compatibility — Can My Agent Use"
socialTitle: MCP stdio transport
socialDescription: "Connect to a local MCP server over standard input and output. Unreviewed product cells remain unknown."
llmSummary: "MCP stdio transport is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Connect to a local MCP server over standard input and output."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "transport"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["stdio MCP"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry explicitly lists MCP stdio for Grok Bot. This is registry evidence, not an independent transport test."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents adding local Claude Code MCP servers with the stdio transport and a command plus arguments."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents spawning local MCP subprocesses and communicating over stdin/stdout."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents stdio as a supported local MCP transport managed by Cursor and provides its command, arguments, and environment configuration fields."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline documents local MCP servers using the stdio transport with command, arguments, environment, and optional working-directory configuration."
  - id: 6
    text: "Evidence checked 2026-08-28: Continue documents local MCP server configurations using a command and arguments, and its pinned desktop client constructs a Stdio client transport."
  - id: 7
    text: "Evidence checked 2026-08-28: Zed documents local custom MCP servers configured with a command, arguments, and environment, and its pinned client uses a dedicated stdio transport."
  - id: 8
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 supports command-line MCP extensions, spawns the configured child process, and connects through standard input/output."
issues: []
resources:
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
    locator: Add a local stdio server
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport mechanisms — Stdio Transport
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport table and STDIO server configuration
  - id: cline-mcp-docs
    title: Cline — Model Context Protocol
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configuration examples — Local server (STDIO)
  - id: continue-mcp-docs
    title: Continue — Model Context Protocol
    href: https://docs.continue.dev/customize/deep-dives/mcp
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: local MCP server configuration
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: constructStdioTransport
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: custom local server configuration
  - id: zed-mcp-client-source
    title: Zed source — MCP client at e3adf43
    href: https://github.com/zed-industries/zed/blob/e3adf43f37d7a2a9c165a78b255d293b0848d2d0/crates/context_server/src/client.rs
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Client::stdio
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Command-line and stdio extension configuration, lines 149-164 and 266-365"
support:
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
          - type: runtime
            value: "the command must be locally available, pass extension checks, and initialize within the configured timeout"
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
            value: server command, arguments, environment, and configuration scope are supplied by the operator or administrator
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
            value: Cursor launches the configured local command; executable availability, environment, workspace trust, and enterprise policy can prevent connection
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
            value: stdio servers are started only for trusted folders and use the configured command, arguments, environment, and working directory
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
            value: Cline launches the configured command; executable availability, environment, working directory, and enterprise policy can prevent connection
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
            value: Continue launches the configured local command; executable availability, environment, working directory, and server health can prevent connection
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
          - type: transport
            value: Zed launches the configured local command; executable availability, environment, and server configuration determine connection success
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
          - resourceId: zed-mcp-client-source
            type: documented
            observedAt: 2026-08-28
---

Connect to a local MCP server over standard input and output.

The Grok Bot cell is registry-listed. Server lifecycle, installation location, authorization, and security policy remain deployment-specific.
