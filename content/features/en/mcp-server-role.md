---
title: MCP server role
description: "Expose capabilities from the harness as an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-server-role
locale: en
seoTitle: "MCP server role compatibility — Can My Agent Use"
socialTitle: MCP server role
socialDescription: "Expose capabilities from the harness as an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP server role is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Expose capabilities from the harness as an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "server role"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP server"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Anthropic documents `claude mcp serve`, which runs Claude Code itself as an MCP server and exposes Claude Code tools to another MCP client."
  - id: 2
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 exposes bundled Auto Visualiser, Computer Controller, Memory, and Tutorial capabilities as MCP servers through `goose mcp`."
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
    locator: Use Claude Code as an MCP server
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "goose mcp command and bundled servers, lines 57-103"
support:
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "the server role covers bundled Goose extension servers; the full Goose agent is exposed separately through ACP"
        evidence:
          - resourceId: goose-v1-48-using-extensions
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
          - type: host-role
            value: the consuming MCP client is responsible for user confirmation around the exposed Claude Code tool calls
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Expose capabilities from the harness as an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
