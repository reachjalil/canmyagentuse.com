---
title: MCP Registry metadata
description: "Discover MCP servers and metadata through the official registry model. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-registry
locale: en
seoTitle: "MCP Registry metadata compatibility — Can My Agent Use"
socialTitle: MCP Registry metadata
socialDescription: "Discover MCP servers and metadata through the official registry model. Unreviewed product cells remain unknown."
llmSummary: "MCP Registry metadata is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-09-02
published: 2026-08-28
category: interfaces
summary: "Discover MCP servers and metadata through the official registry model."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "distribution"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["MCP Registry"]
parent: mcp
related: []
highlight: false
notes:
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Cascade supports custom MCP registry URLs following the official MCP registry schema for enterprise teams, unioning configured registries with or replacing the default marketplace."
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 has no MCP Registry discovery, metadata lookup, or registry-backed installation surface."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp Enterprise can enforce an MCP registry allowlist endpoint for all or selected workspace users and block servers outside it."
  - id: 1
    text: "VS Code can browse and install MCP server metadata from an administrator-configured registry and can restrict access to registry-listed servers."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0's maintained discovery implementation enumerates configured extensions only; its documentation directs users to a separate directory rather than consuming official MCP Registry metadata."
issues: []
resources:
  - id: cognition-devin-desktop-mcp
    title: "Cognition — Model Context Protocol (MCP)"
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Admin Controls (Teams & Enterprises) — MCP Registry"
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
  - id: amp-2026-08-mcp-registry
    title: "Amp — Appendix"
    href: https://ampcode.com/manual/appendix
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP Registry Allowlist"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-enterprise-mcp-registry
    title: Microsoft VS Code — Configure MCP server access and custom registries
    href: https://code.visualstudio.com/docs/enterprise/ai-settings#_configure-a-custom-mcp-registry
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configure a custom MCP registry
  - id: goose-v1-48-extension-manager-source
    title: goose v1.48.0 — MCP extension manager
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/extension_manager.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Available-extension discovery enumerates configured extensions, lines 2599-2664"
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Extension discovery guidance"
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
          - type: runtime
            value: "no MCP Registry integration"
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
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: "Enterprise workspace control"
          - type: policy
            value: "registry can apply to all or selected users; clearing it removes the restriction"
        evidence:
          - resourceId: amp-2026-08-mcp-registry
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
            value: "search_available_extensions searches current Goose configuration rather than an official-Registry-compatible remote catalog"
        evidence:
          - resourceId: goose-v1-48-extension-manager-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-using-extensions
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code documentation dated 2026-08-26
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: an administrator configures the registry with McpGalleryServiceUrl; registry-only policy can restrict installs to its catalog
        evidence:
          - resourceId: microsoft-vscode-enterprise-mcp-registry
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [86]
        target:
          kind: dated-documentation
          revision: 2026-09-02 Devin Desktop Cascade documentation
          observedAt: 2026-09-02
        environmentProfile: enterprise-managed
        qualifiers:
          - type: format
            value: "enterprise teams can configure custom MCP registry URLs following the official schema; registries union to provide available servers"
        evidence:
          - resourceId: cognition-devin-desktop-mcp
            type: documented
            observedAt: 2026-09-02
---

Discover MCP servers and metadata through the official registry model.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
