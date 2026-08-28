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
updated: 2026-08-28
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
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry explicitly lists MCP Streamable HTTP for Grok Bot. This is registry evidence, not an independent transport test."
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
support:
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
---

Connect to an MCP server over the current Streamable HTTP transport.

The Grok Bot cell is registry-listed. Authentication, server policy, and optional MCP primitives remain separate claims.
