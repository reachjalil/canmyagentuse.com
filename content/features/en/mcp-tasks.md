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
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement the MCP task utility or task-lifecycle methods; ordinary coding tasks are not MCP Tasks."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 defines no MCP task creation, status, result, cancellation, or listing method, and its native registry is limited to tools, prompts, and tool-list refresh."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's stable MCP client implements direct tools/call only and no MCP tasks/get, tasks/result, tasks/cancel, or durable protocol-task lifecycle operations."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 supplies empty MCP client capabilities, omitting SDK 1.29.0's Tasks capability, and implements no task creation, status, result, cancellation, or listing flow."
  - id: 1
    text: "Pinned VS Code source implements creation, status inspection, result retrieval, cancellation, and listing for the older experimental MCP task design."
  - id: 2
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 does not advertise the MCP Tasks extension and implements no task result, polling, update, persistence, or cancellation flow."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 explicitly leaves the MCP tasks client capability commented out in the released client options."
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
  - id: zed-v1-17-2-mcp-types
    title: "Zed v1.17.2 — MCP request method definitions"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs#L19-L88"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Exhaustive requests module, lines 19–88"
  - id: zed-v1-17-2-mcp-registry-source
    title: "Zed v1.17.2 — native Agent MCP registry"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L42-L92"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tools and prompts only, lines 42–92"
  - id: cline-v4-1-16-mcp-tasks
    title: "Cline v4.1.16 — MCP callTool implementation"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L1673-L1725"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Exhaustive callTool path; supported server operations at lines 830–1005"
  - id: continue-v2-mcp-client
    title: "Continue v2.0.0 — MCP client capabilities"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L81-L98
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Empty client capability declaration"
  - id: continue-v2-mcp-discovery
    title: "Continue v2.0.0 — implemented MCP operations"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L284-L355
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Resources, tools, and prompts branches; no task branch"
  - id: mcp-sdk-v1-29-task-types
    title: "MCP TypeScript SDK v1.29.0 — task lifecycle"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/types.ts#L399-L470
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Client and server Tasks capability schemas"
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
          - type: protocol-revision
            value: "no MCP task-capable revision is implemented"
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
          - type: protocol-revision
            value: "stable latest revision is 2025-11-25; this row targets MCP 2026-07-28"
          - type: host-role
            value: "native subagents, threads, and editor tasks do not establish MCP Tasks"
        evidence:
          - resourceId: zed-v1-17-2-mcp-types
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
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP host/client"
          - type: runtime
            value: "synchronous direct MCP tool-call path with timeout and abort signal only"
          - type: protocol-revision
            value: "resolved SDK 1.30.0 task APIs are unused"
        evidence:
          - resourceId: cline-v4-1-16-mcp-tasks
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
            value: "SDK 1.29.0 exposes task lifecycle schemas; Continue's capability object is empty"
          - type: host-role
            value: "desktop extension MCP client, not Continue background jobs or Hub agents"
        evidence:
          - resourceId: continue-v2-mcp-client
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-mcp-discovery
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-task-types
            type: documented
            observedAt: 2026-08-29
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
