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
updated: 2026-08-28
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
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry explicitly lists legacy MCP SSE for Grok Bot. This is registry evidence, not an independent transport test."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents the `sse` transport for legacy remote Claude Code MCP servers while recommending HTTP for current servers."
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
    locator: Add a remote SSE server
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
            value: SSE is retained for legacy compatibility; Anthropic recommends the HTTP transport where the server supports it
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
            value: superseded transport support is registry-listed and was not independently tested by Can My Agent Use
          - type: policy
            value: organization server and network allowlists can block a remote server
        evidence:
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
---

Connect through the superseded HTTP plus SSE transport when migration compatibility is required.

The Grok Bot cell is registry-listed for migration compatibility. New deployments should prefer the current transport where the server supports it.
