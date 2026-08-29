---
title: MCP task listing
description: "List and page through tasks exposed by the task utility. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-task-listing
locale: en
seoTitle: "MCP task listing compatibility — Can My Agent Use"
socialTitle: MCP task listing
socialDescription: "List and page through tasks exposed by the task utility. Unreviewed product cells remain unknown."
llmSummary: "MCP task listing is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "List and page through tasks exposed by the task utility."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol utility"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["tasks/list"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Pinned VS Code source implements paginated tasks/list requests in both the MCP client connection and host-side task dispatcher."
  - id: 2
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 does not advertise the MCP Tasks extension, and its exhaustive client and probe operations include no task polling or listing method."
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
    locator: tasks/list dispatch and paginated listTasks client method
  - id: goose-v1-48-agent-source
    title: goose v1.48.0 — agent MCP configuration
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/agent.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Default MCP revision and advertised CLI extensions, lines 99 and 221-259"
  - id: goose-v1-48-cli-source
    title: goose CLI v1.48.0 — MCP probe operations
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose-cli/src/cli.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Exhaustive mcp-probe operation enum, lines 1400-1422"
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
          - type: protocol-revision
            value: "normal sessions pin pre-Tasks MCP 2025-11-25, and the selectable modern probe path still declares no Tasks extension or listing operation"
        evidence:
          - resourceId: goose-v1-48-agent-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-cli-source
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        stage: experimental
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code source commit a39698f7
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: protocol-revision
            value: this is the experimental 2025-11-25 tasks/list design; MCP 2026-07-28 removes tasks/list from the redesigned Tasks extension
        evidence:
          - resourceId: microsoft-vscode-mcp-connection-source
            type: documented
            observedAt: 2026-08-28
---

List and page through tasks exposed by the task utility.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
