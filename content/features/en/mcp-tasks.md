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
updated: 2026-08-28
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
support:
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
