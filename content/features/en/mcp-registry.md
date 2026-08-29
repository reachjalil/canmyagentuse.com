---
title: MCP Registry metadata
description: "Discover MCP servers and metadata through the official registry model. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-registry
locale: en
seoTitle: "MCP Registry metadata compatibility — Can My Agent Use"
socialTitle: MCP Registry metadata
socialDescription: "Discover MCP servers and metadata through the official registry model. Unreviewed product cells remain unknown."
llmSummary: "MCP Registry metadata is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Discover MCP servers and metadata through the official registry model."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "distribution"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP Registry"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "VS Code can browse and install MCP server metadata from an administrator-configured registry and can restrict access to registry-listed servers."
issues: []
resources:
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-enterprise-mcp-registry
    title: Microsoft VS Code — Configure MCP server access and custom registries
    href: https://code.visualstudio.com/docs/enterprise/ai-settings#_configure-a-custom-mcp-registry
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configure a custom MCP registry
support:
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code documentation dated 2026-08-26
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: an administrator configures the registry with McpGalleryServiceUrl; registry-only policy can restrict installs to its catalog
        evidence:
          - resourceId: microsoft-vscode-enterprise-mcp-registry
            type: documented
            observedAt: 2026-08-28
---

Discover MCP servers and metadata through the official registry model.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
