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
updated: 2026-08-28
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
support:
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
---

Complete the MCP authorization flow for protected remote servers.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
