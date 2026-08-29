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
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2's maintained support declaration and exhaustive native registry contain Tools and Prompts only, with no resource collection, subscribe lifecycle, or resource-update handler."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exhaustive resource implementation lists resources and templates and refreshes on list changes, but contains no resources/subscribe or resources/unsubscribe request path despite those methods existing in its resolved SDK."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 can consume text resource content from MCP tool output, but the adapter explicitly marks resource change subscribers as TODO and implements no subscribe or update flow."
  - id: 1
    text: "VS Code documents real-time resource updates and its source implements the legacy resources/subscribe, resources/unsubscribe, and notifications/resources/updated flow."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0's exhaustive client interface implements resource listing and reading but no URI-level resource subscription or update-notification operation."
issues: []
resources:
  - id: zed-v1-17-2-mcp-docs
    title: "Zed v1.17.2 — Model Context Protocol"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/mcp.md#L12-L18"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Supported Features, lines 12–18"
  - id: zed-v1-17-2-mcp-registry-source
    title: "Zed v1.17.2 — native Agent MCP registry"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L42-L92"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Registered tools and prompts only, lines 42–92"
  - id: cline-v4-1-16-mcp-resource-subscriptions
    title: "Cline v4.1.16 — exhaustive MCP resource paths"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L914-L971"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Resource and resource-template request paths"
  - id: cline-v4-1-16-mcp-resource-subscriptions-secondary
    title: "MCP TypeScript SDK 1.30.0 — resource methods"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/client/index.ts#L693-L706"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "readResource, subscribeResource, and unsubscribeResource methods"
  - id: continue-v2-mcp-tool-adapter
    title: "Continue v2.0.0 — MCP resource-content adapter"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/tools/callTool.ts#L145-L170
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Explicit TODO resource change subscribers"
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
  - harness: zed-agent
    versions:
      - track: current
        status: no
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "generic resource structs exist in the library, but the native Agent registry exposes no resource consumer or subscription lifecycle"
          - type: host-role
            value: "negative is direct native Zed Agent behavior"
        evidence:
          - resourceId: zed-v1-17-2-mcp-docs
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-mcp-registry-source
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: no
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20 with MCP TypeScript SDK 1.30.0 commit 2d889f2b329e46680ec9bdd565de4616c497825a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP host/client"
          - type: runtime
            value: "resource listing, caching, and list_changed refresh only"
          - type: protocol-revision
            value: "SDK subscription support is present transitively but unused"
        evidence:
          - resourceId: cline-v4-1-16-mcp-resource-subscriptions
            type: listed
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-resource-subscriptions-secondary
            type: listed
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: no
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "status concerns resources/subscribe and update notifications; listing and reading remain separately supported"
        evidence:
          - resourceId: continue-v2-mcp-tool-adapter
            type: documented
            observedAt: 2026-08-29
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
