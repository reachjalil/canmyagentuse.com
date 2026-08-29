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
updated: 2026-08-29
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
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 sends `notifications/cancelled` with the request ID when an in-flight MCP request times out or is cancelled locally."
  - id: 51
    text: "Evidence checked 2026-08-29: Aborting an OpenCode v1.18.25 MCP tool execution propagates the signal to the pinned SDK, which sends notifications/cancelled for the in-flight request."
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
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Cancellable request and notifications/cancelled path, lines 729-798"
  - id: opencode-v1-18-25-mcp-tool-adapter
    title: "OpenCode v1.18.25 — MCP tool adapter"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/catalog.ts#L42-L67
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "convertTool; callTool signal option"
  - id: mcp-sdk-v1-29-cancellation
    title: "MCP TypeScript SDK v1.29.0 — cancellation handling"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/shared/protocol.ts#L1166-L1218
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "AbortSignal listener and cancellation notification construction"
support:
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "cancellation uses notifications/cancelled for an in-flight request"
          - type: runtime
            value: "initiated through OpenCode's tool abort signal"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-tool-adapter
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-cancellation
            type: documented
            observedAt: 2026-08-29
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
          - type: protocol-revision
            value: "the explicit notifications/cancelled path is used by the CLI's default 2025-11-25 request lifecycle"
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
            value: the inspected implementation declares MCP 2025-11-25; exact 2026-07-28 revision negotiation is tracked separately
        evidence:
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

Cancel an in-flight MCP request and handle cancellation correctly.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
