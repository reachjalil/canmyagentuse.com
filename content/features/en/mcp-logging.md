---
title: MCP logging
description: "Receive structured log messages emitted by an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-logging
locale: en
seoTitle: "MCP logging compatibility — Can My Agent Use"
socialTitle: MCP logging
socialDescription: "Receive structured log messages emitted by an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP logging is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Receive structured log messages emitted by an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol utility"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["logging/message"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "VS Code source dispatches MCP notifications/message payloads to its structured MCP log translator."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 receives structured MCP logging notifications, forwards their data to subscribers, and renders or streams them in the CLI."
issues: []
resources:
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-mcp-connection-source
    title: Microsoft VS Code — MCP server connection implementation
    href: https://github.com/microsoft/vscode/blob/a39698f7e6ecc255f6e9cf752d1c6d01faf308da/src/vs/workbench/contrib/mcp/common/mcpServerConnection.ts
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: handleServerNotification notifications/message and handleLoggingNotification
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Logging handler, lines 350-407"
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
        qualifiers: []
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
          revision: VS Code source commit a39698f7
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: the handler implements structured notifications/message logging; MCP 2026-07-28 retains this notification with revised per-request log-level semantics
        evidence:
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

Receive structured log messages emitted by an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
