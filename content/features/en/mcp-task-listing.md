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
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2's exhaustive MCP request definitions stop at initialization, tools, prompts, resources, logging, completion, ping, and roots; no tasks/list type or native consumer exists."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exhaustive MCP operations list tools, resources, resource templates, and prompts and call tools; no tasks/list request is implemented."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 advertises empty MCP client capabilities and its released connection operation set lists only resources, tools, and prompts, with no tasks/list path."
  - id: 1
    text: "Pinned VS Code source implements paginated tasks/list requests in both the MCP client connection and host-side task dispatcher."
  - id: 2
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 does not advertise the MCP Tasks extension, and its exhaustive client and probe operations include no task polling or listing method."
  - id: 51
    text: "Evidence checked 2026-08-29: Because OpenCode v1.18.25 explicitly disables the complete MCP tasks client capability, the released client has no tasks/list utility."
issues: []
resources:
  - id: zed-v1-17-2-mcp-types
    title: "Zed v1.17.2 — MCP request method definitions"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs#L19-L88"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Exhaustive requests module, lines 19–88"
  - id: zed-v1-17-2-mcp-docs
    title: "Zed v1.17.2 — Model Context Protocol"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/mcp.md#L12-L18"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Supported Features, lines 12–18"
  - id: cline-v4-1-16-mcp-task-listing
    title: "Cline v4.1.16 — exhaustive MCP operations"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L830-L1005"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Server capability checks and list request implementations; tools/call at lines 1673–1725"
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
    locator: "Exhaustive discovery for resources, tools, and prompts"
  - id: mcp-sdk-v1-29-task-types
    title: "MCP TypeScript SDK v1.29.0 — task capabilities"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/types.ts#L472-L519
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Optional Tasks capability; tasks/list at lines 782–793"
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
  - id: opencode-v1-18-25-mcp-capabilities
    title: "OpenCode v1.18.25 — MCP client capabilities"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L38-L50
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLIENT_OPTIONS capabilities; commented tasks entry"
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
            value: "stable latest revision is 2025-11-25 rather than the row's 2026-07-28 Tasks design"
          - type: host-role
            value: "Zed editor Tasks and Agent threads are unrelated to MCP tasks/list"
        evidence:
          - resourceId: zed-v1-17-2-mcp-types
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-mcp-docs
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
            value: "MCP task APIs are not exposed or called"
          - type: protocol-revision
            value: "resolved SDK 1.30.0"
        evidence:
          - resourceId: cline-v4-1-16-mcp-task-listing
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
            value: "SDK 1.29.0 defines Tasks and tasks/list; Continue advertises no Tasks capability"
          - type: host-role
            value: "Continue desktop MCP client"
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
            value: "the parent tasks capability is explicitly disabled, including task listing"
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
