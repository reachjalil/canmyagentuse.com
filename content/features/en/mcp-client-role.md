---
title: MCP client role
description: "Consume capabilities exposed by MCP servers. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-client-role
locale: en
seoTitle: "MCP client role compatibility — Can My Agent Use"
socialTitle: MCP client role
socialDescription: "Consume capabilities exposed by MCP servers. Unreviewed product cells remain unknown."
llmSummary: "MCP client role is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Consume capabilities exposed by MCP servers."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client, host role"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP client"]
parent: mcp
related: []
highlight: false
notes:
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent operates as an MCP client by connecting to pre-listed or custom servers, retrieving their tool lists, and selecting server tools for user requests."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI connects to local or remote MCP servers, discovers their tools, and invokes those tools from agent threads."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity web acts as a client of the managed Guidepoint MCP integration, authorizing queries and consuming transcript search results and citations; arbitrary remote MCP client support remains unestablished."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents Grok Bot connecting to tools through MCP servers and following Cursor team MCP policy; the Agent Plugins compatible-client registry independently lists Grok Bot's supported MCP transports."
  - id: 2
    text: "Evidence checked 2026-08-28: xAI documents custom MCP connectors in Grok Web, including server URL and authentication setup, tool discovery, and making the server's tools available in conversations."
  - id: 3
    text: "Evidence checked 2026-08-28: Anthropic documents Claude Code connecting to local and remote MCP servers, discovering their tools, prompts, and resources, and managing those servers through `claude mcp`."
  - id: 4
    text: "Evidence checked 2026-08-28: Google documents Gemini CLI connecting to configured MCP servers as a client, discovering tools, prompts, and resources, and executing server-provided tools."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor documents its editor and CLI connecting to MCP servers and consuming protocol capabilities exposed by those servers."
  - id: 6
    text: "Evidence checked 2026-08-28: Cline documents its desktop extension connecting to configured local or remote MCP servers and using their exposed capabilities."
  - id: 7
    text: "Evidence checked 2026-08-28: Continue documents MCP servers as an Agent-mode integration for connecting the editor extension to external tools, systems, databases, and context."
  - id: 8
    text: "Evidence checked 2026-08-28: Zed documents that Zed Agent uses Zed-configured MCP servers directly and currently consumes their Tools and Prompts capabilities."
  - id: 9
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 configures local or remote MCP servers as extensions, negotiates client connections, and consumes their tools, prompts, resources, instructions, and client-directed capabilities."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 connects local or remote MCP servers, discovers their available tools, and exposes those capabilities to supported AI agents."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 instantiates the official MCP SDK Client and connects configured local or remote servers for tools, prompts, resources, and server metadata."
issues: []
resources:
  - id: replit-agent-mcp-current
    title: "Replit — Connect via MCP"
    href: "https://docs.replit.com/build/connect-via-mcp"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Connect a pre-listed MCP server; Add a custom MCP server; Use MCP tools in Agent"
  - id: amp-2026-08-mcp-client
    title: "Amp — MCP"
    href: https://ampcode.com/docs/customize/mcp
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Add local and remote servers; loading order"
  - id: perplexity-guidepoint-mcp
    title: "Perplexity — Connecting Perplexity with Guidepoint"
    href: https://www.perplexity.ai/help-center/en/articles/14818160-connecting-perplexity-with-guidepoint
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What you need; activate and authorize; try the integration"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: xai-grok-bot-team-mcp
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Plugins and MCP policy
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: xai-grok-web-mcp
    title: xAI — Grok connectors
    href: https://docs.x.ai/grok/connectors
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Custom MCP connectors
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add MCP servers; use MCP resources and prompts
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What is an MCP server; core integration architecture
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What is MCP; how it works
  - id: cline-mcp-docs
    title: Cline — Model Context Protocol
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What MCP gives you; add servers
  - id: continue-mcp-docs
    title: Continue — Model Context Protocol
    href: https://docs.continue.dev/customize/deep-dives/mcp
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How MCP works in Continue
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported Features; Agent Path Support
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP extension model; MCP server installation and transports"
  - id: jetbrains-ai-mcp-2026-2
    title: JetBrains AI Assistant — Model Context Protocol
    href: https://www.jetbrains.com/help/ai-assistant/mcp.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Connect to an MCP server; available tools
  - id: opencode-v1-18-25-mcp-client
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L1-L17
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP SDK Client and transport imports; createClient; connectTransport"
support:
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent MCP documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: "custom server configuration accepts an HTTPS endpoint; the page does not name the underlying MCP HTTP transport revision"
          - type: auth
            value: "connections may use OAuth or custom headers such as X-API-Key"
          - type: policy
            value: "users are warned to connect only trusted servers; individual tools can require confirmation"
        evidence:
          - resourceId: replit-agent-mcp-current
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
          - type: host-role
            value: "Amp acts as the MCP client and tool consumer"
          - type: runtime
            value: "configuration can come from CLI flags, workspace settings, user settings, or Skills"
        evidence:
          - resourceId: amp-2026-08-mcp-client
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: partial
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: host-role
            value: "Perplexity consumes capabilities exposed by one managed Guidepoint MCP integration"
          - type: auth
            value: "requires Guidepoint Library, a Guidepoint360 account, entitlement, sign-in, and authorization"
          - type: runtime
            value: "does not establish arbitrary remote server configuration or optional MCP primitives"
        evidence:
          - resourceId: perplexity-guidepoint-mcp
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
          - type: host-role
            value: "OpenCode acts as the MCP host/client connecting to external servers"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-client
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
          - type: host-role
            value: JetBrains AI Assistant acts as an MCP host/client for configured servers
        evidence:
          - resourceId: jetbrains-ai-mcp-2026-2
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "only configured and enabled extensions connect; tool filters and permission policy can restrict exposed operations"
        evidence:
          - resourceId: goose-v1-48-using-extensions
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: configured server scope, enterprise managed configuration, tool permissions, and server health determine which MCP capabilities are available in a session
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cursor MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: configured server enablement, tool approval, enterprise allowlists, and server health determine which capabilities are available
        evidence:
          - resourceId: cursor-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: Gemini CLI MCP documentation updated 2026-06-18
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: configured server enablement, workspace trust, tool confirmation, and server health determine which capabilities are available
        evidence:
          - resourceId: google-gemini-cli-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web connector documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: custom servers must be reachable over the public internet; local-only servers require a separate tunnel
          - type: auth
            value: server authentication and provider permissions can be required
        evidence:
          - resourceId: xai-grok-web-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation and compatible-client listing
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: team MCP allowlists, denylists, member-install policy, and network allowlists can disable a server
          - type: auth
            value: hosted MCP authentication is shared across Cursor and Grok Bot for the account
        evidence:
          - resourceId: xai-grok-bot-team-mcp
            type: documented
            observedAt: 2026-08-28
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cline MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: configured server enablement, tool approval, enterprise controls, and server health determine which capabilities are available
        evidence:
          - resourceId: cline-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Continue MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: MCP servers are available in Agent mode and depend on the active Continue configuration and server health
        evidence:
          - resourceId: continue-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Zed MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to Zed Agent using Zed-configured MCP servers directly, not external agents forwarded through ACP
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
---

Consume capabilities exposed by MCP servers.

The Grok Bot claim is scoped to its hosted desktop product and inherited Cursor MCP policy. It does not prove support for MCP resources, prompts, sampling, elicitation, or every authentication flow; those remain separate rows.
