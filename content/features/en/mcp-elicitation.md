---
title: MCP elicitation
description: "Handle structured user-input requests initiated by an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-elicitation
locale: en
seoTitle: "MCP elicitation compatibility — Can My Agent Use"
socialTitle: MCP elicitation
socialDescription: "Handle structured user-input requests initiated by an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP elicitation is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Handle structured user-input requests initiated by an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client feature"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["elicitation/create"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code automatically presents MCP elicitation requests and supports both structured form mode and URL mode, with an optional Elicitation hook for automated responses."
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
    locator: Respond to MCP elicitation requests
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
          - type: policy
            value: an Elicitation hook may be configured to auto-respond instead of showing the interactive dialog
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Handle structured user-input requests initiated by an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
