---
title: MCP resource subscriptions
description: "Subscribe to resource changes and receive update notifications. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-resource-subscriptions
locale: en
seoTitle: "MCP resource subscriptions compatibility — Can My Agent Use"
socialTitle: MCP resource subscriptions
socialDescription: "Subscribe to resource changes and receive update notifications. Unreviewed product cells remain unknown."
llmSummary: "MCP resource subscriptions is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Subscribe to resource changes and receive update notifications."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "resource notification"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["resources/subscribe"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "VS Code documents real-time resource updates and its source implements the legacy resources/subscribe, resources/unsubscribe, and notifications/resources/updated flow."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0's exhaustive client interface implements resource listing and reading but no URI-level resource subscription or update-notification operation."
issues: []
resources:
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-mcp-guide
    title: Microsoft VS Code — MCP developer guide
    href: https://code.visualstudio.com/api/extension-guides/ai/mcp
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Resources — resource updates
  - id: microsoft-vscode-mcp-connection-source
    title: Microsoft VS Code — MCP server connection implementation
    href: https://github.com/microsoft/vscode/blob/a39698f7e6ecc255f6e9cf752d1c6d01faf308da/src/vs/workbench/contrib/mcp/common/mcpServerConnection.ts
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: subscribe, unsubscribe, and notifications/resources/updated handling
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP operation interface and resources/list/read, lines 85-159 and 806-865"
support:
  - harness: goose
    versions:
      - track: current
        status: no
        noteIds: [2]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "no legacy resources/subscribe or current subscriptions/listen resource-subscription flow is implemented"
        evidence:
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code docs and source commit a39698f7
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: the inspected implementation uses the 2025-11-25 resources/subscribe flow; MCP 2026-07-28 replaces it with subscriptions/listen
        evidence:
          - resourceId: microsoft-vscode-mcp-guide
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

Subscribe to resource changes and receive update notifications.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
