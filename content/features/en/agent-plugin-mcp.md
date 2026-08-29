---
title: Agent Plugins packaged MCP
description: "Load MCP server configuration contained in an Agent Plugins package. This is tracked as an independent compatibility claim."
slug: agent-plugin-mcp
locale: en
seoTitle: "Agent Plugins packaged MCP compatibility — Can My Agent Use"
socialTitle: Agent Plugins packaged MCP
socialDescription: "Load MCP server configuration contained in an Agent Plugins package. Unreviewed product cells remain unknown."
llmSummary: "Agent Plugins packaged MCP is atomic and does not follow automatically from broader plugins support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Load MCP server configuration contained in an Agent Plugins package."
specLabel: Agent Plugins 1.0
specification:
  id: agent-plugins
  revision: "1.0.0"
  maturity: published convention
  role: "packaged MCP configuration"
  authority: specification maintainers
  canonicalUrl: https://agent-plugins.org/specification/1.0
aliases: ["plugin mcp.json"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry lists Grok Bot as a portable client with MCP stdio, Streamable HTTP, and legacy SSE transport support. This is registry evidence, not an independent runtime conformance test."
  - id: 2
    text: "Evidence checked 2026-08-29: Cursor's first-party documentation identifies MCP servers as available in Agent Plugins and shows the standard package containing mcp.json."
issues: []
resources:
  - title: Agent Plugins packaged MCP reference
    href: https://agent-plugins.org/specification/1.0
    kind: spec
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: cursor-agent-plugins-mcp
    title: Cursor — Plugins
    href: https://cursor.com/docs/plugins
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: What plugins contain and Creating plugins
support:
  - harness: cursor
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor Agent Plugins documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Cursor documents MCP Servers as available in the Agent Plugins format and shows mcp.json in the portable package layout
          - type: runtime
            value: individual MCP transports, authentication flows, and primitives remain separate compatibility claims
        evidence:
          - resourceId: cursor-agent-plugins-mcp
            type: documented
            observedAt: 2026-08-29
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
          - type: transport
            value: the listing names stdio, Streamable HTTP, and legacy SSE
          - type: runtime
            value: support is registry-listed and was not independently conformance-tested by Can My Agent Use
        evidence:
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
---

Load MCP server configuration contained in an Agent Plugins package.

The Grok Bot cell is based on the Agent Plugins project's dated compatible-client registry. Individual MCP primitives, authentication flows, and extension fields remain separate claims.
