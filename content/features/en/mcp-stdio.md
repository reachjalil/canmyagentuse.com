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
updated: 2026-08-28
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
support:
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
---

Connect to a local MCP server over standard input and output.

The Grok Bot cell is registry-listed. Server lifecycle, installation location, authorization, and security policy remain deployment-specific.
