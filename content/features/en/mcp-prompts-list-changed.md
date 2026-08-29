---
title: MCP prompt-list notifications
description: "Refresh prompt templates after a server announces changes. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-prompts-list-changed
locale: en
seoTitle: "MCP prompt-list notifications compatibility — Can My Agent Use"
socialTitle: MCP prompt-list notifications
socialDescription: "Refresh prompt templates after a server announces changes. Unreviewed product cells remain unknown."
llmSummary: "MCP prompt-list notifications is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Refresh prompt templates after a server announces changes."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "prompt notification"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["prompts/list_changed"]
parent: mcp
related: []
highlight: false
notes:
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 loads prompts/list when a server starts, while the native registry's only change-notification subscription is tools/list_changed; no prompt reload trigger is registered."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 handles MCP prompts/list_changed notifications and refreshes the server's prompt list after notification."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 initially calls listPrompts while explicitly leaving server notification-handler registration as TODO; prompt templates are not refreshed after prompts/list_changed."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code explicitly supports MCP `list_changed` notifications for prompts, tools, and resources, refreshing the available lists without reconnecting."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0's exhaustive MCP notification handler implements tool-list changes but has no prompt-list-change callback or prompt-registry refresh path."
issues: []
resources:
  - id: zed-v1-17-2-mcp-registry-source
    title: "Zed v1.17.2 — native Agent MCP registry"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L210-L249"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "One-time prompt reload path, lines 210–249; sole tools change subscription, lines 124–168"
  - id: cline-v4-1-16-mcp-prompts-list-changed
    title: "Cline v4.1.16 — MCP prompt list-change handler"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L765-L775"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "PromptListChangedNotificationSchema handler; prompt fetch at lines 973–1000"
  - id: continue-v2-mcp-client
    title: "Continue v2.0.0 — prompt discovery and notification TODO"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L284-L355
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Notification TODO and one-time listPrompts"
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
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Exhaustive notification handler, lines 350-407"
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
          - type: runtime
            value: "prompt templates are initially listed and available, but dynamic prompt-list refresh is absent"
        evidence:
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
          - type: runtime
            value: "notification schedules prompts/list refresh"
        evidence:
          - resourceId: cline-v4-1-16-mcp-prompts-list-changed
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
            value: "prompts are discovered at connection and exposed as slash commands, but dynamic refresh is absent"
        evidence:
          - resourceId: continue-v2-mcp-client
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
          - type: runtime
            value: "prompt templates can be listed and fetched, but dynamic prompt-list refresh is not implemented"
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
---

Refresh prompt templates after a server announces changes.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
