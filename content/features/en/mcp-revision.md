---
title: MCP revision compatibility
description: "Implement or negotiate the exact dated MCP revision. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-revision
locale: en
seoTitle: "MCP revision compatibility compatibility — Can My Agent Use"
socialTitle: MCP revision compatibility
socialDescription: "Implement or negotiate the exact dated MCP revision. Unreviewed product cells remain unknown."
llmSummary: "MCP revision compatibility is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Implement or negotiate the exact dated MCP revision."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol revision"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP revision"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Microsoft documentation broadly claims full MCP support, while the pinned VS Code source still declares 2025-11-25 as its latest protocol version."
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
    locator: introduction — implements the full MCP specification
  - id: microsoft-vscode-mcp-schema-source
    title: Microsoft VS Code — vendored MCP protocol schema
    href: https://github.com/microsoft/vscode/blob/a39698f7e6ecc255f6e9cf752d1c6d01faf308da/src/vs/platform/mcp/common/modelContextProtocol.ts
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: LATEST_PROTOCOL_VERSION
support:
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code docs and source commit a39698f7
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: current documentation says VS Code implements the full MCP specification, but the inspected source declares LATEST_PROTOCOL_VERSION as 2025-11-25 rather than 2026-07-28
        evidence:
          - resourceId: microsoft-vscode-mcp-guide
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-mcp-schema-source
            type: documented
            observedAt: 2026-08-28
---

Implement or negotiate the exact dated MCP revision.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
