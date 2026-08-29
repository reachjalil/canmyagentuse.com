---
title: MCP sampling
description: "Handle server requests for model sampling through the client. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-sampling
locale: en
seoTitle: "MCP sampling compatibility — Can My Agent Use"
socialTitle: MCP sampling
socialDescription: "Handle server requests for model sampling through the client. Unreviewed product cells remain unknown."
llmSummary: "MCP sampling is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Handle server requests for model sampling through the client."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client feature"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["sampling/createMessage"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "VS Code documents MCP server sampling through the user's configured models, with first-use authorization and per-server model controls."
issues: []
resources:
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-mcp-guide
    title: Microsoft VS Code — MCP developer guide
    href: https://code.visualstudio.com/api/extension-guides/ai/mcp#_sampling
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sampling
support:
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code documentation dated 2026-07-29
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: the user authorizes a server's first sampling request and can restrict which configured models that server may use
        evidence:
          - resourceId: microsoft-vscode-mcp-guide
            type: documented
            observedAt: 2026-08-28
---

Handle server requests for model sampling through the client.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
