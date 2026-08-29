---
title: MCP prompt-list notifications
description: "Refresh prompt templates after a server announces changes. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-prompts-list-changed
locale: en
seoTitle: "MCP prompt-list notifications compatibility — Can My Agent Use"
socialTitle: MCP prompt-list notifications
socialDescription: "Refresh prompt templates after a server announces changes. Unreviewed product cells remain unknown."
llmSummary: "MCP prompt-list notifications is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Refresh prompt templates after a server announces changes."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "prompt notification"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["prompts/list_changed"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code explicitly supports MCP `list_changed` notifications for prompts, tools, and resources, refreshing the available lists without reconnecting."
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
    locator: MCP list_changed notifications
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
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Refresh prompt templates after a server announces changes.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
