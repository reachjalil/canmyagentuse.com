---
title: MCP server role
description: "Expose capabilities from the harness as an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-server-role
locale: en
seoTitle: "MCP server role compatibility — Can My Agent Use"
socialTitle: MCP server role
socialDescription: "Expose capabilities from the harness as an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP server role is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Expose capabilities from the harness as an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "server role"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP server"]
parent: mcp
related: []
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 has no native MCP server, server entrypoint, initialize handler, or exposed MCP capability list."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop exposes semantic UI control through the separately launched openwork-ui-mcp server, providing status, snapshot, action-list, and action-execution tools to external MCP clients."
  - id: 1
    text: "Evidence checked 2026-08-28: Anthropic documents `claude mcp serve`, which runs Claude Code itself as an MCP server and exposes Claude Code tools to another MCP client."
  - id: 2
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 exposes bundled Auto Visualiser, Computer Controller, Memory, and Tutorial capabilities as MCP servers through `goose mcp`."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 includes an IDE MCP Server plugin that exposes a documented set of IDE capabilities to external MCP clients."
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
  - id: openwork-v01839-ui-mcp
    title: "OpenWork v0.18.39 — Control OpenWork from any MCP client"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/mcp-ui-control-profile.md#L1-L35"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "UI server overview and tools, install and client configuration, and requirements at lines 1–35, 54–135, and 233–237"
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
    locator: Use Claude Code as an MCP server
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "goose mcp command and bundled servers, lines 57-103"
  - id: jetbrains-ai-mcp-2026-2
    title: JetBrains AI Assistant — Model Context Protocol
    href: https://www.jetbrains.com/help/ai-assistant/mcp.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: IDE as an MCP server; supported IDE tools
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
            value: "no MCP server role"
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
  - harness: openwork-desktop
    versions:
      - track: current
        status: partial
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "requires the separate openwork-ui-mcp companion process connected to the Desktop app's local bridge"
          - type: transport
            value: "stdio MCP server"
          - type: runtime
            value: "OpenWork Desktop must be running; macOS is the primary supported platform in the reviewed release documentation"
        evidence:
          - resourceId: openwork-v01839-ui-mcp
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: support is scoped to the bundled IDE MCP Server plugin and its documented IDE tools
        evidence:
          - resourceId: jetbrains-ai-mcp-2026-2
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
          - type: host-role
            value: "the server role covers bundled Goose extension servers; the full Goose agent is exposed separately through ACP"
        evidence:
          - resourceId: goose-v1-48-using-extensions
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
        qualifiers:
          - type: host-role
            value: the consuming MCP client is responsible for user confirmation around the exposed Claude Code tool calls
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Expose capabilities from the harness as an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
