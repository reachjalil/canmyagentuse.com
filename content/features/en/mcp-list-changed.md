---
title: MCP list-changed notifications
description: "Refresh capability lists when a server announces dynamic changes. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-list-changed
locale: en
seoTitle: "MCP list-changed notifications compatibility — Can My Agent Use"
socialTitle: MCP list-changed notifications
socialDescription: "Refresh capability lists when a server announces dynamic changes. Unreviewed product cells remain unknown."
llmSummary: "MCP list-changed notifications is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Refresh capability lists when a server announces dynamic changes."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "notification"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["list_changed"]
parent: mcp
related: []
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP tool, resource, or prompt list_changed notifications."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 subscribes to notifications/tools/list_changed and reloads tools, while its native registry defines no corresponding prompt- or resource-list subscription."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 registers MCP list-changed handlers for tools, resources, and prompts and schedules refreshed list retrieval when each notification arrives."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 lists resources, tools, and prompts during connection, but explicitly leaves all server notification-handler registration as TODO and therefore does not refresh changed lists."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code explicitly supports MCP `list_changed` notifications and refreshes available tools, prompts, and resources without reconnecting."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI v0.57.0 registers tool, resource, and prompt list-change notification handlers and refreshes each corresponding registry."
  - id: 3
    text: "Evidence checked 2026-08-29: goose v1.48.0 refreshes tools after `tools/list_changed`, but its exhaustive handler does not implement corresponding prompt- or resource-list refresh."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 refreshes cached tools after tools/list_changed, but equivalent prompt- and resource-list refresh handling is not established."
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
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L124-L168"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Sole notification subscription and tools/list_changed reload, lines 124–168"
  - id: cline-v4-1-16-mcp-list-changed
    title: "Cline v4.1.16 — MCP list-change handlers"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L765-L775"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ToolListChangedNotificationSchema, ResourceListChangedNotificationSchema, and PromptListChangedNotificationSchema handlers"
  - id: continue-v2-mcp-client
    title: "Continue v2.0.0 — MCP connection discovery and notifications"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L284-L355
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Notification-handler TODO and one-time list calls"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: MCP list_changed notifications
  - id: google-gemini-cli-mcp-client-source
    title: Google Gemini CLI v0.57.0 — MCP client implementation
    href: https://github.com/google-gemini/gemini-cli/blob/6b0ae9a6c37aa117cc8b070d8b41c5bb4fa6d253/packages/core/src/tools/mcp-client.ts
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: registerNotificationHandlers and refreshTools, refreshResources, refreshPrompts
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tool-list cache invalidation and client handler, lines 232-237 and 350-407"
  - id: opencode-v1-18-25-mcp-list-changed
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L442-L471
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "watch; ToolListChangedNotificationSchema handler"
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
            value: "no MCP dynamic-list refresh"
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
        status: partial
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "dynamic refresh is implemented only for tools/list_changed"
          - type: protocol-revision
            value: "prompts/list_changed and resources/list_changed are not registered by the native Agent registry"
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
        status: yes
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
            value: "tools, resources, and prompts list_changed notifications"
          - type: runtime
            value: "each notification schedules a cached-list refresh"
        evidence:
          - resourceId: cline-v4-1-16-mcp-list-changed
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
            value: "initial tools, resources, resource templates, and prompts load once; no list-change callback is registered"
        evidence:
          - resourceId: continue-v2-mcp-client
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: partial
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "support is proven only for tools/list_changed"
          - type: protocol-revision
            value: "prompt- and resource-list change notifications remain unknown"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-list-changed
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "dynamic refresh is implemented for tools/list_changed only"
        evidence:
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: release
          revision: Gemini CLI v0.57.0
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: evidence covers the tool, resource, and prompt list_changed notification handlers in the v0.57.0 MCP client
        evidence:
          - resourceId: google-gemini-cli-mcp-client-source
            type: documented
            observedAt: 2026-08-28
---

Refresh capability lists when a server announces dynamic changes.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
