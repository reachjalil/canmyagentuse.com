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
updated: 2026-08-29
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
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP progressToken metadata or notifications/progress."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2's native tool call sends no progress token, and the active registry registers only tools/list_changed with no notifications/progress handler."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exhaustive MCP request paths pass timeout and optional abort signal but never provide SDK 1.30.0's onprogress callback, so no progress token or progress-notification handling is activated."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 passes only a timeout to MCP tool requests, omitting SDK 1.29.0's onprogress callback and progress-token request path."
  - id: 1
    text: "VS Code source exposes and fires an event for MCP notifications/progress messages."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 handles MCP progress notifications, preserves their token and values, and updates CLI progress output or emits structured events."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 requests and receives MCP progress notifications during tool calls and uses matching updates to extend the request timeout."
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
    locator: "CallTool request with meta: None and user-cancel race, lines 374–393"
  - id: zed-v1-17-2-mcp-registry-subscriptions
    title: "Zed v1.17.2 — native MCP notification subscription"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L124-L168"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Only tools/list_changed subscription, lines 124–168"
  - id: cline-v4-1-16-mcp-progress
    title: "Cline v4.1.16 — exhaustive MCP request options"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L884-L1005"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "List request options and callTool options at lines 1713–1725"
  - id: cline-v4-1-16-mcp-progress-secondary
    title: "MCP TypeScript SDK 1.30.0 — progress option"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/shared/protocol.ts#L111-L129"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "RequestOptions.onprogress and progressToken behavior"
  - id: continue-v2-mcp-tool-adapter
    title: "Continue v2.0.0 — MCP call options"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/tools/callTool.ts#L98-L109
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "callTool request options"
  - id: mcp-sdk-v1-29-request-options
    title: "MCP TypeScript SDK v1.29.0 — progress request option"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/shared/protocol.ts#L111-L135
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "RequestOptions.onprogress"
  - id: mcp-sdk-v1-29-progress-token
    title: "MCP TypeScript SDK v1.29.0 — progress-token behavior"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/shared/protocol.ts#L1135-L1144
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Progress token only with onprogress"
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
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI progress handler, lines 350-407"
  - id: opencode-v1-18-25-mcp-tool-adapter
    title: "OpenCode v1.18.25 — MCP tool adapter"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/catalog.ts#L42-L67
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "convertTool; callTool progress options"
  - id: mcp-sdk-v1-29-progress
    title: "MCP TypeScript SDK v1.29.0 — progress handling"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/shared/protocol.ts#L111-L122
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "RequestOptions.onprogress and matching progress notification handling"
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
            value: "no MCP progress-notification support"
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
            value: "MCP tool requests set call metadata to none and no native Agent subscriber consumes progress updates"
          - type: host-role
            value: "negative excludes behavior implemented by a forwarded ACP External Agent"
        evidence:
          - resourceId: zed-v1-17-2-mcp-registry-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-mcp-registry-subscriptions
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
            value: "list and tool requests omit onprogress"
          - type: protocol-revision
            value: "SDK adds a progressToken only when onprogress is supplied"
        evidence:
          - resourceId: cline-v4-1-16-mcp-progress
            type: listed
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-progress-secondary
            type: listed
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: no
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad with MCP TypeScript SDK 1.29.0"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "SDK 1.29.0 requests progress only when onprogress is supplied"
          - type: runtime
            value: "Continue's MCP call adapter supplies timeout only"
        evidence:
          - resourceId: continue-v2-mcp-tool-adapter
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-request-options
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-progress-token
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
          - type: format
            value: "progress is consumed for request timeout management"
          - type: policy
            value: "user-visible progress presentation is not established"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-tool-adapter
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-progress
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
            value: the inspected implementation declares MCP 2025-11-25; exact 2026-07-28 revision negotiation is tracked separately
        evidence:
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

Receive progress updates for long-running requests.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
