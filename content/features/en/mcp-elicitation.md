---
title: MCP elicitation
description: "Handle structured user-input requests initiated by an MCP server. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-elicitation
locale: en
seoTitle: "MCP elicitation compatibility — Can My Agent Use"
socialTitle: MCP elicitation
socialDescription: "Handle structured user-input requests initiated by an MCP server. Unreviewed product cells remain unknown."
llmSummary: "MCP elicitation is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Handle structured user-input requests initiated by an MCP server."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client feature"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["elicitation/create"]
parent: mcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code automatically presents MCP elicitation requests and supports both structured form mode and URL mode, with an optional Elicitation hook for automated responses."
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI v0.57.0's MCP client registers only the roots client capability and contains no elicitation request handler, so it does not advertise the classic `elicitation/create` capability."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor's protocol capability table explicitly lists MCP Elicitation as supported server-initiated requests for additional user information."
  - id: 4
    text: "Evidence checked 2026-08-29: goose v1.48.0 advertises MCP elicitation and documents form-mode structured input in the CLI, including accept or cancel behavior and a timeout."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 explicitly leaves the MCP elicitation client capability commented out in the released client options."
issues: []
resources:
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
    locator: Respond to MCP elicitation requests
  - id: google-gemini-cli-mcp-client-source
    title: Google Gemini CLI v0.57.0 — MCP client implementation
    href: https://github.com/google-gemini/gemini-cli/blob/6b0ae9a6c37aa117cc8b070d8b41c5bb4fa6d253/packages/core/src/tools/mcp-client.ts
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: connectToMcpServer client capability registration and request handlers
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Protocol and extension support — Elicitation
  - id: goose-v1-48-elicitation-docs
    title: goose v1.48.0 — MCP Elicitation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/guides/mcp-elicitation.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Automatic form-mode elicitation and CLI interaction, lines 11-52"
  - id: opencode-v1-18-25-mcp-capabilities
    title: "OpenCode v1.18.25 — MCP client capabilities"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L38-L50
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLIENT_OPTIONS capabilities; commented elicitation entry"
support:
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
            value: "elicitation capability is explicitly disabled in the released client options"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-capabilities
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the public CLI documentation establishes form-mode elicitation; URL-mode is not claimed for this surface"
        evidence:
          - resourceId: goose-v1-48-elicitation-docs
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
          - type: policy
            value: an Elicitation hook may be configured to auto-respond instead of showing the interactive dialog
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
            value: the documentation confirms elicitation generally but does not enumerate form-mode, URL-mode, or automation-hook behavior
        evidence:
          - resourceId: cursor-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: no
        noteIds: [2]
        target:
          kind: release
          revision: Gemini CLI v0.57.0
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: protocol-revision
            value: this finding covers the classic elicitation/create client capability; MCP 2026-07-28 multi-round-trip semantics are not claimed
        evidence:
          - resourceId: google-gemini-cli-mcp-client-source
            type: documented
            observedAt: 2026-08-28
---

Handle structured user-input requests initiated by an MCP server.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
