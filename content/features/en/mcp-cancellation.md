---
title: MCP cancellation
description: "Cancel an in-flight MCP request and handle cancellation correctly. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-cancellation
locale: en
seoTitle: "MCP cancellation compatibility — Can My Agent Use"
socialTitle: MCP cancellation
socialDescription: "Cancel an in-flight MCP request and handle cancellation correctly. Unreviewed product cells remain unknown."
llmSummary: "MCP cancellation is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Cancel an in-flight MCP request and handle cancellation correctly."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol utility"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["notifications/cancelled"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "VS Code source sends notifications/cancelled when a pending MCP request is cancelled and cancels pending requests when it receives the same notification."
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
    locator: sendRequest cancellation callback and handleCancelledNotification
support:
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
            value: the inspected implementation declares MCP 2025-11-25; exact 2026-07-28 revision negotiation is tracked separately
        evidence:
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

Cancel an in-flight MCP request and handle cancellation correctly.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
