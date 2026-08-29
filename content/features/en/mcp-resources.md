---
title: MCP resources
description: "Read MCP resources as live context. Compatibility evidence is published only after review."
slug: mcp-resources
locale: en
seoTitle: "MCP resources — Can My Agent Use"
socialTitle: MCP resources
socialDescription: "Read MCP resources as live context. Unreviewed cells remain unknown."
llmSummary: "MCP resources: Read MCP resources as live context. Unreviewed harness cells remain unknown until dated public evidence exists."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Read MCP resources as live context.
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: host or client reading server resources
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28/server/resources
aliases: [resources/list, resources/read, MCP context resources]
parent: mcp
related: [mcp-tools, mcp-prompts]
highlight: false
notes:
  - id: 9
    text: "Evidence checked 2026-08-29: current desktop documentation explicitly lists MCP resources for legacy Cascade, while the default Devin Local MCP documentation does not establish resource listing or reading."
  - id: 8
    text: "Evidence checked 2026-08-29: Amp's 2026-08-19 MCP announcement explicitly says MCP Resources are not supported across the announced Amp MCP surfaces, including the TUI."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code lists and reads MCP resources, exposes them through `@` mentions, and fetches referenced resources into conversation context."
  - id: 2
    text: "Evidence checked 2026-08-28: Microsoft's VS Code MCP developer guide states that VS Code implements MCP tools, prompts, and resources; the end-user skill is scoped to GitHub Copilot's local VS Code agent surface."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI fetches `resources/list`, exposes resource URIs through `@` completion, calls `resources/read`, and injects the result into conversation context."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor's protocol capability table explicitly lists MCP Resources as supported structured data sources that can be read and referenced."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline's pinned desktop client requests `resources/list` and displays resource metadata, but the reviewed MCP client surface does not read resource contents into agent context."
  - id: 6
    text: "Evidence checked 2026-08-28: Continue's pinned desktop client lists resources, reads a selected resource, and injects text contents through its MCP context provider; non-text contents are rejected and resource-template support is experimental."
  - id: 7
    text: "Evidence checked 2026-08-28: Zed's current MCP documentation explicitly limits supported server features to Tools and Prompts, so MCP Resources are not supported on the reviewed Zed Agent path."
  - id: 10
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 implements paginated `resources/list` and URI-based `resources/read` and exposes them when the connected server declares resources."
issues: []
resources:
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use MCP resources
  - id: vscode-mcp-developer-guide
    title: Visual Studio Code — MCP developer guide
    href: https://code.visualstudio.com/api/extension-guides/ai/mcp
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: MCP implementation overview
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Working with MCP resources
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Protocol and extension support — Resources
  - id: cline-mcp-client-source
    title: Cline source — MCP desktop client at 27350f2
    href: https://github.com/cline/cline/blob/27350f243c2a31c97b4e38fa700e009a2f61adae/apps/vscode/src/services/mcp/McpHub.ts
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: fetchResourcesList and fetchServerCapabilities
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: listResources and getResource
  - id: continue-mcp-context-source
    title: Continue source — MCP context provider at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/providers/MCPContextProvider.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: resource read and text-content conversion
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported Features
  - id: amp-mcp-unsupported-primitives
    title: Amp — MCP in Orbs
    href: https://ampcode.com/news/mcp-in-orbs
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP support across surfaces and explicitly unsupported primitives"
  - id: cognition-desktop-cascade-mcp
    title: Cognition — Model Context Protocol for Cascade
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "General Information and legacy Cascade applicability"
  - id: cognition-desktop-local-mcp
    title: Cognition — MCP Overview
    href: https://docs.devin.ai/cli/extensibility/mcp/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Default Devin Local MCP feature description"
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "resources/list and resources/read, lines 806-865"
support:
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "resource operations are exposed only for configured extensions that declare resource capability"
        evidence:
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "resources are explicitly documented only for legacy Cascade; new desktop tabs default to Devin Local, whose current MCP page documents tools and prompts but not resource reading"
          - type: policy
            value: "enterprise administrators can disable MCP or restrict servers through registries and allowlists"
          - type: transport
            value: "Cascade documents stdio, Streamable HTTP, and SSE transports"
          - type: vendor-extension
            value: "Cascade uses a backward-compatible Windsurf MCP configuration path inside the rebranded desktop product"
        evidence:
          - resourceId: cognition-desktop-cascade-mcp
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-desktop-local-mcp
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: no
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: Amp MCP in Orbs release dated 2026-08-19
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "scoped to Amp's MCP client behavior in the TUI rather than non-MCP built-in retrieval tools"
          - type: runtime
            value: "the same announcement documents MCP tools as supported, so this negative is specific to the Resources primitive"
        evidence:
          - resourceId: amp-mcp-unsupported-primitives
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
            value: resource availability and media types depend on the connected server
        evidence:
          - resourceId: anthropic-claude-code-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: claim is scoped to GitHub Copilot's local VS Code agent surface, not every Copilot product surface
        evidence:
          - resourceId: vscode-mcp-developer-guide
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: exact resource availability, URI schemes, and media types depend on the connected server
        evidence:
          - resourceId: cursor-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: Gemini CLI MCP documentation updated 2026-06-18
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: exact resource availability, URI schemes, and media types depend on the connected server
        evidence:
          - resourceId: google-gemini-cli-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: Cline source commit 27350f243c2a observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the reviewed desktop client lists resources and resource templates for display but does not evidence resources/read or resource-content injection into agent context
        evidence:
          - resourceId: cline-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: Continue source commit 5522c6f44ca0 observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Continue currently accepts text resource contents only; its resource-template path is experimental and supports a query placeholder
        evidence:
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
          - resourceId: continue-mcp-context-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: no
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Zed MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: status is scoped to Zed Agent's direct use of Zed-configured MCP servers
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
---

Read MCP resources as live context.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
