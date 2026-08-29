---
title: MCP server instructions
description: "Consume server-provided instructions during initialization. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-server-instructions
locale: en
seoTitle: "MCP server instructions compatibility — Can My Agent Use"
socialTitle: MCP server instructions
socialDescription: "Consume server-provided instructions during initialization. Unreviewed product cells remain unknown."
llmSummary: "MCP server instructions is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Consume server-provided instructions during initialization."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "metadata"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["server instructions"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code's MCP guide explicitly describes the server `instructions` field as useful context for deferred MCP tool discovery; the reviewed page does not define how every instruction is surfaced or prioritized."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 retains server initialization instructions and incorporates them into extension information used to build agent context."
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
    locator: Scale with MCP Tool Search; for MCP server authors
  - id: goose-v1-48-extension-manager-source
    title: goose v1.48.0 — MCP extension manager
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/extension_manager.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Server instructions consumed into ExtensionInfo, lines 1746-1758"
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
          - type: policy
            value: "instructions are consumed only when the connected server provides them during initialization"
        evidence:
          - resourceId: goose-v1-48-extension-manager-source
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the server instructions field is documented as input to Tool Search, but the documentation does not specify full initialization-time display, precedence, or conflict behavior
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Consume server-provided instructions during initialization.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
