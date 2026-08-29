---
title: MCP progress notifications
description: "Receive progress updates for long-running requests. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-progress
locale: en
seoTitle: "MCP progress notifications compatibility — Can My Agent Use"
socialTitle: MCP progress notifications
socialDescription: "Receive progress updates for long-running requests. Unreviewed product cells remain unknown."
llmSummary: "MCP progress notifications is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Receive progress updates for long-running requests."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol utility"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["notifications/progress"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "VS Code source exposes and fires an event for MCP notifications/progress messages."
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
    locator: onDidReceiveProgressNotification and notifications/progress dispatch
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

Receive progress updates for long-running requests.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
