---
title: MCP logging
description: "Receive structured log messages emitted by an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-logging
locale: en
seoTitle: "MCP logging compatibility — Can My Agent Use"
socialTitle: MCP logging
socialDescription: "Receive structured log messages emitted by an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP logging is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Receive structured log messages emitted by an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol utility"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["logging/message"]
parent: mcp
related: []
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP logging/setLevel or notifications/message."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2's native MCP registry has one server-notification subscription, tools/list_changed; it registers no notifications/message handler or structured server-log consumption path."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 receives MCP notifications/message and forwards log events, but its handler accepts only string-valued data rather than the protocol's arbitrary structured JSON data."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0's MCP connection explicitly leaves server notification-handler registration as TODO, so it has no handler for structured notifications/message logging."
  - id: 1
    text: "VS Code source dispatches MCP notifications/message payloads to its structured MCP log translator."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 receives structured MCP logging notifications, forwards their data to subscribers, and renders or streams them in the CLI."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 handles MCP structured logging notifications and maps server, logger, level, and data fields into corresponding application log levels."
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
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L42-L47"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Registered server operation and subscription set; only handler at lines 124–168"
  - id: cline-v4-1-16-mcp-logging
    title: "Cline v4.1.16 — MCP logging handler"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L711-L763"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "LoggingMessageNotificationSchema and notifications/message handler"
  - id: continue-v2-mcp-client
    title: "Continue v2.0.0 — MCP notification handling"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L284-L288
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Explicit TODO for server notification handlers"
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
    locator: handleServerNotification notifications/message and handleLoggingNotification
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Logging handler, lines 350-407"
  - id: opencode-v1-18-25-mcp-logging
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L442-L480
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "watch; LoggingMessageNotificationSchema; serverLog"
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
            value: "no MCP logging receiver or emitter"
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
            value: "local server stderr diagnostics are separate from MCP structured logging/message notifications"
          - type: host-role
            value: "negative is native Zed Agent direct MCP client only"
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
        status: partial
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP host/client"
          - type: format
            value: "level, logger, data, and message are accepted, but data is restricted to string"
          - type: protocol-revision
            value: "implementation uses a local notification schema"
        evidence:
          - resourceId: cline-v4-1-16-mcp-logging
            type: documented
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
            value: "stdio process output captured for connection errors is separate from MCP structured logging"
        evidence:
          - resourceId: continue-v2-mcp-client
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
            value: "structured server, logger, level, and data fields"
          - type: runtime
            value: "routed into OpenCode logs rather than a dedicated TUI panel"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-logging
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
            value: the handler implements structured notifications/message logging; MCP 2026-07-28 retains this notification with revised per-request log-level semantics
        evidence:
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

Receive structured log messages emitted by an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
