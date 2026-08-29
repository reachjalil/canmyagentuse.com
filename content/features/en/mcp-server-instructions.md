---
title: MCP server instructions
description: "Consume server-provided instructions during initialization. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-server-instructions
locale: en
seoTitle: "MCP server instructions compatibility — Can My Agent Use"
socialTitle: MCP server instructions
socialDescription: "Consume server-provided instructions during initialization. Unreviewed product cells remain unknown."
llmSummary: "MCP server instructions is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Consume server-provided instructions during initialization."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "metadata"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["server instructions"]
parent: mcp
related: []
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 implements no MCP initialize result and therefore cannot consume server-provided instructions."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2's complete InitializeResponse type has protocolVersion, capabilities, serverInfo, and _meta but no instructions field, and its native registry consumes only tools and prompts."
  - id: 74
    text: "Evidence checked 2026-08-29: although Cline v4.1.16's resolved SDK retains initialization instructions, the extension's exhaustive post-connect flow consumes only tools, resources, resource templates, and prompts and never retrieves or surfaces server instructions."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code's MCP guide explicitly describes the server `instructions` field as useful context for deferred MCP tool discovery; the reviewed page does not define how every instruction is surfaced or prioritized."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 retains server initialization instructions and incorporates them into extension information used to build agent context."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 retrieves non-empty server initialization instructions after connection and retains them with server tool metadata."
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
    title: "Zed v1.17.2 — MCP InitializeResponse type"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs#L274-L282"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "InitializeResponse exhaustive fields, lines 274–282"
  - id: zed-v1-17-2-mcp-registry-source
    title: "Zed v1.17.2 — native Agent MCP registry"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L42-L92"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Tools and prompts only, lines 42–92"
  - id: cline-v4-1-16-mcp-server-instructions
    title: "Cline v4.1.16 — exhaustive MCP post-connect flow"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L708-L841"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Complete notification registration and initial-fetch sequence"
  - id: cline-v4-1-16-mcp-server-instructions-secondary
    title: "MCP TypeScript SDK 1.30.0 — server instructions API"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/client/index.ts#L493-L536"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "InitializationResult instructions storage and getInstructions"
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
    locator: Scale with MCP Tool Search; for MCP server authors
  - id: goose-v1-48-extension-manager-source
    title: goose v1.48.0 — MCP extension manager
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/extension_manager.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Server instructions consumed into ExtensionInfo, lines 1746-1758"
  - id: opencode-v1-18-25-mcp-instructions
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L390-L400
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "getInstructions; MCP.instructions projection"
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
            value: "no MCP server-instructions consumer"
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
            value: "latest supported revision is 2025-11-25; server instructions are not represented in the stable result"
          - type: host-role
            value: "negative is native Zed Agent direct MCP client"
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
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20 with MCP TypeScript SDK 1.30.0 commit 2d889f2b329e46680ec9bdd565de4616c497825a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "MCP host/client"
          - type: runtime
            value: "only tools, resources, resource templates, and prompts are fetched"
          - type: protocol-revision
            value: "the SDK exposes getInstructions but Cline does not use it"
        evidence:
          - resourceId: cline-v4-1-16-mcp-server-instructions
            type: listed
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-server-instructions-secondary
            type: listed
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
            value: "instructions are consumed from the connected server initialize result"
          - type: format
            value: "empty instructions are discarded"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-instructions
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
          - type: policy
            value: "instructions are consumed only when the connected server provides them during initialization"
        evidence:
          - resourceId: goose-v1-48-extension-manager-source
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the server instructions field is documented as input to Tool Search, but the documentation does not specify full initialization-time display, precedence, or conflict behavior
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
---

Consume server-provided instructions during initialization.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
