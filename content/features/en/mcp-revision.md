---
title: MCP revision compatibility
description: "Implement or negotiate the exact dated MCP revision. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-revision
locale: en
seoTitle: "MCP revision compatibility compatibility — Can My Agent Use"
socialTitle: MCP revision compatibility
socialDescription: "Implement or negotiate the exact dated MCP revision. Unreviewed product cells remain unknown."
llmSummary: "MCP revision compatibility is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Implement or negotiate the exact dated MCP revision."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "protocol revision"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP revision"]
parent: mcp
related: []
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 sends, accepts, and negotiates no MCP protocolVersion because it implements no MCP initialize flow."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 declares 2025-11-25 as its latest MCP revision and negotiates three named older revisions, while this catalog row targets 2026-07-28."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16 resolves MCP TypeScript SDK 1.30.0, which supports protocol revisions only through 2025-11-25 rather than this row's 2026-07-28 revision."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 locks MCP TypeScript SDK 1.29.0, whose latest supported revision is 2025-11-25; older revisions are negotiable, but the catalog's 2026-07-28 target is absent."
  - id: 1
    text: "Microsoft documentation broadly claims full MCP support, while the pinned VS Code source still declares 2025-11-25 as its latest protocol version."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 contains a selectable MCP 2026-07-28 client path, but ordinary Goose CLI extension sessions explicitly default to MCP 2025-11-25."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 pins MCP TypeScript SDK 1.29.0, whose latest supported revision is 2025-11-25 rather than the catalog row's 2026-07-28 revision."
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
  - id: zed-v1-17-2-mcp-protocol
    title: "Zed v1.17.2 — MCP protocol initialization"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/protocol.rs#L28-L68"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "supported_protocols and initialize, lines 28–68"
  - id: zed-v1-17-2-mcp-types
    title: "Zed v1.17.2 — MCP protocol version constants"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs#L8-L16"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Revision constants and latest revision, lines 8–16"
  - id: cline-v4-1-16-mcp-revision
    title: "Cline v4.1.16 — resolved MCP SDK version"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/bun.lock#L1658-L1662"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Resolved @modelcontextprotocol/sdk 1.30.0 package"
  - id: cline-v4-1-16-mcp-revision-secondary
    title: "MCP TypeScript SDK 1.30.0 — supported revisions"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/types.ts#L4-L6"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "LATEST_PROTOCOL_VERSION and SUPPORTED_PROTOCOL_VERSIONS"
  - id: continue-v2-lockfile
    title: "Continue v2.0.0 — pinned MCP SDK"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/package-lock.json#L4431-L4433
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "@modelcontextprotocol/sdk 1.29.0"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-mcp-guide
    title: Microsoft VS Code — MCP developer guide
    href: https://code.visualstudio.com/api/extension-guides/ai/mcp
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: introduction — implements the full MCP specification
  - id: microsoft-vscode-mcp-schema-source
    title: Microsoft VS Code — vendored MCP protocol schema
    href: https://github.com/microsoft/vscode/blob/a39698f7e6ecc255f6e9cf752d1c6d01faf308da/src/vs/platform/mcp/common/modelContextProtocol.ts
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: LATEST_PROTOCOL_VERSION
  - id: goose-v1-48-agent-source
    title: goose v1.48.0 — agent MCP configuration
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/agent.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Default MCP protocol version 2025-11-25, lines 99 and 221-259"
  - id: goose-v1-48-cli-source
    title: goose CLI v1.48.0 — MCP probe commands
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose-cli/src/cli.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "mcp-probe protocolVersion override, lines 1400-1422 and 1488-1501"
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Modern and legacy protocol lifecycle selection, lines 667-706"
  - id: opencode-v1-18-25-manifest
    title: "OpenCode v1.18.25 — package manifest"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/package.json#L80-L85
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Pinned @modelcontextprotocol/sdk 1.29.0 dependency"
  - id: mcp-sdk-v1-29-revisions
    title: "MCP TypeScript SDK v1.29.0 — protocol versions"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/types.ts#L4-L6
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "LATEST_PROTOCOL_VERSION; SUPPORTED_PROTOCOL_VERSIONS"
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
            value: "none"
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
          - type: protocol-revision
            value: "latest supported revision is 2025-11-25; this row targets 2026-07-28"
          - type: format
            value: "negotiates exact older revisions 2025-06-18, 2025-03-26, and 2024-11-05"
        evidence:
          - resourceId: zed-v1-17-2-mcp-protocol
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-mcp-types
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: partial
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20 with MCP TypeScript SDK 1.30.0 commit 2d889f2b329e46680ec9bdd565de4616c497825a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "supported revisions are 2025-11-25, 2025-06-18, 2025-03-26, 2024-11-05, and 2024-10-07; 2026-07-28 is unsupported"
        evidence:
          - resourceId: cline-v4-1-16-mcp-revision
            type: documented
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-revision-secondary
            type: documented
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: partial
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad with MCP TypeScript SDK 1.29.0"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "latest supported revision is 2025-11-25; catalog row targets 2026-07-28"
          - type: format
            value: "SDK lists and negotiates older revisions"
        evidence:
          - resourceId: continue-v2-lockfile
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-revisions
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
          - type: protocol-revision
            value: "latest supported revision is 2025-11-25; catalog target 2026-07-28 is not listed"
          - type: format
            value: "older listed revisions are negotiated by SDK 1.29.0"
        evidence:
          - resourceId: opencode-v1-18-25-manifest
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-revisions
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: "2026-07-28 is implemented and selectable by the hidden probe, while normal CLI sessions default to 2025-11-25"
        evidence:
          - resourceId: goose-v1-48-agent-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-cli-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code docs and source commit a39698f7
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: current documentation says VS Code implements the full MCP specification, but the inspected source declares LATEST_PROTOCOL_VERSION as 2025-11-25 rather than 2026-07-28
        evidence:
          - resourceId: microsoft-vscode-mcp-guide
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-mcp-schema-source
            type: documented
            observedAt: 2026-08-28
---

Implement or negotiate the exact dated MCP revision.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
