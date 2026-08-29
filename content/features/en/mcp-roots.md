---
title: MCP roots
description: "Provide filesystem or workspace roots to an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-roots
locale: en
seoTitle: "MCP roots compatibility — Can My Agent Use"
socialTitle: MCP roots
socialDescription: "Provide filesystem or workspace roots to an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP roots is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Provide filesystem or workspace roots to an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client feature"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["roots/list"]
parent: mcp
related: []
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP roots/list or notifications/roots/list_changed; local repository context is not an MCP roots primitive."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code documents the MCP `roots/list` request returning the directory from which Claude Code was launched."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI v0.57.0 advertises the roots capability, handles `roots/list` from its current workspace directories, and sends `roots/list_changed` when those directories change."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor's protocol capability table explicitly lists MCP Roots as supported server-initiated inquiries into URI or filesystem boundaries."
  - id: 4
    text: "Evidence checked 2026-08-28: Cline's pinned desktop MCP client initializes with an empty client-capabilities object, so it does not advertise or handle the Roots capability."
  - id: 5
    text: "Evidence checked 2026-08-28: Continue's pinned desktop MCP client initializes with an empty client-capabilities object, so it does not advertise or handle the Roots capability."
  - id: 6
    text: "Evidence checked 2026-08-28: Zed's pinned MCP initialization explicitly sets the client Roots capability to none."
  - id: 7
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 advertises MCP roots, returns the session working directory from `roots/list`, and emits `roots/list_changed` when it changes."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 advertises MCP roots and answers roots/list with the active workspace directory as a file URI."
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
    locator: MCP installation scopes and roots/list
  - id: google-gemini-cli-mcp-client-source
    title: Google Gemini CLI v0.57.0 — MCP client implementation
    href: https://github.com/google-gemini/gemini-cli/blob/6b0ae9a6c37aa117cc8b070d8b41c5bb4fa6d253/packages/core/src/tools/mcp-client.ts
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: registerCapabilities roots and ListRootsRequestSchema handler
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Protocol and extension support — Roots
  - id: cline-mcp-client-source
    title: Cline source — MCP desktop client at 27350f2
    href: https://github.com/cline/cline/blob/27350f243c2a31c97b4e38fa700e009a2f61adae/apps/vscode/src/services/mcp/McpHub.ts
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Client initialization capabilities
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Client initialization capabilities
  - id: zed-mcp-protocol-source
    title: Zed source — MCP protocol client at e3adf43
    href: https://github.com/zed-industries/zed/blob/e3adf43f37d7a2a9c165a78b255d293b0848d2d0/crates/context_server/src/protocol.rs
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: InitializeParams client capabilities
  - id: goose-v1-48-roots-docs
    title: goose v1.48.0 — MCP Roots
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/guides/mcp-roots.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Advertisement, list request, change notification, and CLI working-directory root, lines 12-85"
  - id: opencode-v1-18-25-mcp-roots
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L38-L81
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLIENT_OPTIONS capabilities; ListRootsRequestSchema handler"
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
            value: "no MCP roots client capability"
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
          - type: host-role
            value: "MCP client supplies the active OpenCode directory"
          - type: format
            value: "root is returned as a file URI"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-roots
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Goose exposes one root per session, mapped to the CLI working directory"
        evidence:
          - resourceId: goose-v1-48-roots-docs
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
          - type: runtime
            value: the documented root is the directory Claude Code was launched from
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the documentation confirms the capability but does not enumerate Cursor's root selection or change-notification policy
        evidence:
          - resourceId: cursor-mcp-docs
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
          - type: runtime
            value: roots are derived from the CLI workspace context and change notifications follow workspace-directory updates
          - type: protocol-revision
            value: evidence covers the pre-2026 roots/list request flow implemented by Gemini CLI v0.57.0
        evidence:
          - resourceId: google-gemini-cli-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: no
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: Cline source commit 27350f243c2a observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: status is scoped to Cline's desktop extension MCP client
        evidence:
          - resourceId: cline-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: no
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: Continue source commit 5522c6f44ca0 observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: status is scoped to Continue's desktop extension MCP client
        evidence:
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: no
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: Zed source commit e3adf43f37d7 observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: status is scoped to Zed Agent's direct MCP client initialization
        evidence:
          - resourceId: zed-mcp-protocol-source
            type: documented
            observedAt: 2026-08-28
---

Provide filesystem or workspace roots to an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
