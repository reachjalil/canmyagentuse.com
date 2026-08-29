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
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP notifications/cancelled; CLI Control-C behavior is not MCP cancellation."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2's native MCP tool path uses a client request wrapper with cancel_rx=None; the UI separately races user cancellation without sending notifications/cancelled for that request."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 propagates an abort signal into MCP tool calls, and its exact SDK 1.30.0 sends notifications/cancelled when an in-flight request is aborted or times out."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 supplies an MCP tool timeout, causing SDK 1.29.0 to send notifications/cancelled; its adapter does not supply an AbortSignal, so direct user-driven cancellation is not established."
  - id: 1
    text: "VS Code source sends notifications/cancelled when a pending MCP request is cancelled and cancels pending requests when it receives the same notification."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 sends `notifications/cancelled` with the request ID when an in-flight MCP request times out or is cancelled locally."
  - id: 51
    text: "Evidence checked 2026-08-29: Aborting an OpenCode v1.18.25 MCP tool execution propagates the signal to the pinned SDK, which sends notifications/cancelled for the in-flight request."
issues: []
resources:
  - id: aider-v0860-production-tree
    title: "Aider v0.86.0 — complete production package"
    href: "https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete aider package at the stable release commit"
  - id: aider-v0860-args-source
    title: "Aider v0.86.0 — complete CLI argument parser"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete get_parser option declarations"
  - id: aider-v0860-commands-source
    title: "Aider v0.86.0 — complete in-chat command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete command implementation"
  - id: aider-v0860-dependencies
    title: "Aider v0.86.0 — stable runtime dependencies"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/requirements.txt"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete stable runtime dependency manifest"
  - id: zed-v1-17-2-mcp-registry-source
    title: "Zed v1.17.2 — native Agent MCP tool call"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L374-L393"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "protocol.request and user-cancellation race, lines 374–393"
  - id: zed-v1-17-2-mcp-client-source
    title: "Zed v1.17.2 — MCP client request lifecycle"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/client.rs#L374-L486"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "request supplies cancel_rx=None; request_with cancellation notification, lines 374–486"
  - id: cline-v4-1-16-mcp-cancellation
    title: "Cline v4.1.16 — MCP tool cancellation path"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/sdk/vscode-runtime-builder.ts#L16-L45"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "callTool passes request.context.signal; McpHub request options at lines 1673–1725"
  - id: cline-v4-1-16-mcp-cancellation-secondary
    title: "MCP TypeScript SDK 1.30.0 — cancellation"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/shared/protocol.ts#L1165-L1218"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Abort listener and CancelledNotification emission"
  - id: continue-v2-mcp-tool-adapter
    title: "Continue v2.0.0 — MCP tool-call options"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/tools/callTool.ts#L98-L109
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "callTool receives only a timeout option"
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
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [83]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; community MCP wrappers, external programs invoked through /run, AiderDesk, and unreleased proposals do not count"
          - type: host-role
            value: "no MCP cancellation sender or receiver"
        evidence:
          - resourceId: aider-v0860-production-tree
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-args-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-dependencies
            type: documented
            observedAt: 2026-08-29
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
          - type: runtime
            value: "user cancellation stops the local UI/tool future but is not passed into the protocol cancellation channel"
          - type: protocol-revision
            value: "the generic client can construct notifications/cancelled only when a caller supplies cancel_rx; the native Agent path does not"
        evidence:
          - resourceId: zed-v1-17-2-mcp-registry-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20 with MCP TypeScript SDK 1.30.0 commit 2d889f2b329e46680ec9bdd565de4616c497825a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP host/client"
          - type: transport
            value: "AbortSignal propagated to tools/call and SDK notifications/cancelled"
          - type: protocol-revision
            value: "SDK 1.30.0 negotiates through MCP 2025-11-25"
        evidence:
          - resourceId: cline-v4-1-16-mcp-cancellation
            type: documented
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-cancellation-secondary
            type: documented
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: partial
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad with MCP TypeScript SDK 1.29.0"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "proven path is request timeout; the adapter passes timeout but no signal"
          - type: protocol-revision
            value: "SDK 1.29.0 emits notifications/cancelled for timeout cancellation"
        evidence:
          - resourceId: continue-v2-mcp-tool-adapter
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-cancellation
            type: documented
            observedAt: 2026-08-29
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
