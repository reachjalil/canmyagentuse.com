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
updated: 2026-08-29
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
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0's maintained discovery implementation enumerates configured extensions only; its documentation directs users to a separate directory rather than consuming official MCP Registry metadata."
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
  - id: goose-v1-48-extension-manager-source
    title: goose v1.48.0 — MCP extension manager
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/extension_manager.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Available-extension discovery enumerates configured extensions, lines 2599-2664"
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Extension discovery guidance"
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
          - type: runtime
            value: "search_available_extensions searches current Goose configuration rather than an official-Registry-compatible remote catalog"
        evidence:
          - resourceId: goose-v1-48-extension-manager-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-using-extensions
            type: documented
            observedAt: 2026-08-29
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
