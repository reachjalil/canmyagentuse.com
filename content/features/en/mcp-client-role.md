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
updated: 2026-08-28
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
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents Grok Bot connecting to tools through MCP servers and following Cursor team MCP policy; the Agent Plugins compatible-client registry independently lists Grok Bot's supported MCP transports."
issues: []
resources:
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
support:
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
---

Consume capabilities exposed by MCP servers.

The Grok Bot claim is scoped to its hosted desktop product and inherited Cursor MCP policy. It does not prove support for MCP resources, prompts, sampling, elicitation, or every authentication flow; those remain separate rows.
