---
title: MCP roots
description: "Provide filesystem or workspace roots to an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-roots
locale: en
seoTitle: "MCP roots compatibility — Can My Agent Use"
socialTitle: MCP roots
socialDescription: "Provide filesystem or workspace roots to an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP roots is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Provide filesystem or workspace roots to an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client feature"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["roots/list"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents the MCP `roots/list` request returning the directory from which Claude Code was launched."
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
    locator: MCP installation scopes and roots/list
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
          - type: runtime
            value: the documented root is the directory Claude Code was launched from
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Provide filesystem or workspace roots to an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
