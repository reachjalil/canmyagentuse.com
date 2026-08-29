---
title: MCP list-changed notifications
description: "Refresh capability lists when a server announces dynamic changes. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-list-changed
locale: en
seoTitle: "MCP list-changed notifications compatibility — Can My Agent Use"
socialTitle: MCP list-changed notifications
socialDescription: "Refresh capability lists when a server announces dynamic changes. Unreviewed product cells remain unknown."
llmSummary: "MCP list-changed notifications is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Refresh capability lists when a server announces dynamic changes."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "notification"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["list_changed"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code explicitly supports MCP `list_changed` notifications and refreshes available tools, prompts, and resources without reconnecting."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI v0.57.0 registers tool, resource, and prompt list-change notification handlers and refreshes each corresponding registry."
  - id: 3
    text: "Evidence checked 2026-08-29: goose v1.48.0 refreshes tools after `tools/list_changed`, but its exhaustive handler does not implement corresponding prompt- or resource-list refresh."
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
  - id: google-gemini-cli-mcp-client-source
    title: Google Gemini CLI v0.57.0 — MCP client implementation
    href: https://github.com/google-gemini/gemini-cli/blob/6b0ae9a6c37aa117cc8b070d8b41c5bb4fa6d253/packages/core/src/tools/mcp-client.ts
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: registerNotificationHandlers and refreshTools, refreshResources, refreshPrompts
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tool-list cache invalidation and client handler, lines 232-237 and 350-407"
support:
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "dynamic refresh is implemented for tools/list_changed only"
        evidence:
          - resourceId: goose-v1-48-mcp-client-source
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
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: release
          revision: Gemini CLI v0.57.0
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: evidence covers the tool, resource, and prompt list_changed notification handlers in the v0.57.0 MCP client
        evidence:
          - resourceId: google-gemini-cli-mcp-client-source
            type: documented
            observedAt: 2026-08-28
---

Refresh capability lists when a server announces dynamic changes.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
