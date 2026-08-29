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
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 explicitly says current MCP coverage is Tools and Prompts and invites contributions for Elicitation; its stable client advertises no elicitation capability or handler."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's exact MCP client declares an empty capability object, while its resolved SDK 1.30.0 rejects elicitation handler registration unless the client advertises elicitation."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 constructs its MCP client with empty client capabilities, omitting SDK 1.29.0's explicit elicitation capability, and registers no server-initiated request handler."
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
  - id: zed-v1-17-2-mcp-docs
    title: "Zed v1.17.2 — Model Context Protocol"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/mcp.md#L12-L25"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Supported Features and Agent Path Support, lines 12–25"
  - id: zed-v1-17-2-mcp-protocol
    title: "Zed v1.17.2 — MCP protocol initialization"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/protocol.rs#L37-L50"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "InitializeParams and exhaustive ClientCapabilities, lines 37–50"
  - id: cline-v4-1-16-mcp-elicitation
    title: "Cline v4.1.16 — MCP client capabilities"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L463-L472"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "new Client capabilities declaration"
  - id: cline-v4-1-16-mcp-elicitation-secondary
    title: "MCP TypeScript SDK 1.30.0 — client capability guards"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/client/index.ts#L614-L637"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Elicitation and sampling capability guards"
  - id: continue-v2-mcp-client
    title: "Continue v2.0.0 — MCP client capabilities"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L81-L98
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Client construction with capabilities: {}"
  - id: mcp-sdk-v1-29-client-capabilities
    title: "MCP TypeScript SDK v1.29.0 — client capabilities"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/types.ts#L472-L519
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ClientCapabilitiesSchema including elicitation"
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
            value: "native client latest revision is 2025-11-25 and no elicitation capability is advertised"
          - type: host-role
            value: "negative is native Zed Agent direct MCP client; forwarded External Agent behavior is excluded"
        evidence:
          - resourceId: zed-v1-17-2-mcp-docs
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-mcp-protocol
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
          - type: protocol-revision
            value: "SDK 1.30.0"
          - type: runtime
            value: "client capabilities are explicitly {}"
        evidence:
          - resourceId: cline-v4-1-16-mcp-elicitation
            type: listed
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-elicitation-secondary
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
          - type: host-role
            value: "Continue desktop extension MCP client"
          - type: protocol-revision
            value: "SDK 1.29.0 declares elicitation optionally; Continue advertises an empty capability object"
        evidence:
          - resourceId: continue-v2-mcp-client
            type: documented
            observedAt: 2026-08-29
          - resourceId: mcp-sdk-v1-29-client-capabilities
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
