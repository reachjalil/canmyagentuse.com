---
title: MCP tasks
description: "Create, inspect, and manage long-running MCP tasks. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-tasks
locale: en
seoTitle: "MCP tasks compatibility — Can My Agent Use"
socialTitle: MCP tasks
socialDescription: "Create, inspect, and manage long-running MCP tasks. Unreviewed product cells remain unknown."
llmSummary: "MCP tasks is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Create, inspect, and manage long-running MCP tasks."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol utility"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP tasks"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Pinned VS Code source implements creation, status inspection, result retrieval, cancellation, and listing for the older experimental MCP task design."
  - id: 2
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 does not advertise the MCP Tasks extension and implements no task result, polling, update, persistence, or cancellation flow."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 explicitly leaves the MCP tasks client capability commented out in the released client options."
issues: []
resources:
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-mcp-task-source
    title: Microsoft VS Code — MCP task manager implementation
    href: https://github.com/microsoft/vscode/blob/a39698f7e6ecc255f6e9cf752d1c6d01faf308da/src/vs/workbench/contrib/mcp/common/mcpTaskManager.ts
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: task creation, status, result, cancellation, and listing
  - id: goose-v1-48-agent-source
    title: goose v1.48.0 — agent MCP configuration
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/agent.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Default MCP revision and advertised CLI extensions, lines 99 and 221-259"
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Exhaustive operation interface and advertised capabilities, lines 85-159 and 565-584"
  - id: opencode-v1-18-25-mcp-capabilities
    title: "OpenCode v1.18.25 — MCP client capabilities"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L38-L50
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLIENT_OPTIONS capabilities; commented tasks entry"
support:
  - harness: opencode
    versions:
      - track: current
        status: no
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "tasks capability is explicitly disabled in the released client options"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-capabilities
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
            value: "normal sessions pin MCP 2025-11-25; the release's selectable modern client path does not opt into Tasks either"
        evidence:
          - resourceId: goose-v1-48-agent-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        stage: experimental
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code source commit a39698f7
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: protocol-revision
            value: source implements the experimental 2025-11-25 core task design; MCP 2026-07-28 moves redesigned tasks to io.modelcontextprotocol/tasks with tasks/get and tasks/update semantics
          - type: runtime
            value: implementation evidence is present in current source, but no first-party end-user documentation was located for availability in a stable VS Code release
        evidence:
          - resourceId: microsoft-vscode-mcp-task-source
            type: documented
            observedAt: 2026-08-28
---

Create, inspect, and manage long-running MCP tasks.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
