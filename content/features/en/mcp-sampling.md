---
title: MCP sampling
description: "Handle server requests for model sampling through the client. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-sampling
locale: en
seoTitle: "MCP sampling compatibility — Can My Agent Use"
socialTitle: MCP sampling
socialDescription: "Handle server requests for model sampling through the client. Unreviewed product cells remain unknown."
llmSummary: "MCP sampling is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Handle server requests for model sampling through the client."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "client feature"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["sampling/createMessage"]
parent: mcp
related: []
highlight: false
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: Anthropic's Claude Code documentation enumerates supported MCP capabilities for tools, prompts, and resources; server-initiated sampling (sampling/createMessage) is not supported in the Claude Code MCP client."
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP sampling/createMessage in either client or server role."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 explicitly invites contributions for Sampling, and its complete initialization declares sampling: None."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's MCP client advertises no sampling capability, and its exact SDK 1.30.0 refuses sampling/createMessage handling unless that client capability is declared."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 constructs its MCP client with empty capabilities, omitting SDK 1.29.0's explicit sampling capability, and registers no server-initiated sampling handler."
  - id: 1
    text: "VS Code documents MCP server sampling through the user's configured models, with first-use authorization and per-server model controls."
  - id: 2
    text: "Evidence checked 2026-08-29: goose v1.48.0 advertises sampling and handles server-initiated sampling by invoking Goose's configured model provider and returning the result."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 explicitly leaves the MCP sampling client capability commented out in the released client options."
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
  - id: zed-v1-17-2-mcp-protocol
    title: "Zed v1.17.2 — MCP protocol initialization"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/protocol.rs#L37-L50"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ClientCapabilities sampling: None, lines 37–50"
  - id: cline-v4-1-16-mcp-sampling
    title: "Cline v4.1.16 — MCP client capabilities"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/mcp/McpHub.ts#L463-L472"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "new Client capabilities declaration"
  - id: cline-v4-1-16-mcp-sampling-secondary
    title: "MCP TypeScript SDK 1.30.0 — client capability guards"
    href: "https://github.com/modelcontextprotocol/typescript-sdk/blob/2d889f2b329e46680ec9bdd565de4616c497825a/src/client/index.ts#L614-L637"
    kind: docs
    publisher: "Model Context Protocol Project"
    evidenceType: listed
    reviewedAt: 2026-08-29
    locator: "Sampling capability guard"
  - id: continue-v2-mcp-client
    title: "Continue v2.0.0 — MCP client capabilities"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core/context/mcp/MCPConnection.ts#L81-L98
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Empty client capability declaration"
  - id: mcp-sdk-v1-29-client-capabilities
    title: "MCP TypeScript SDK v1.29.0 — sampling capability"
    href: https://github.com/modelcontextprotocol/typescript-sdk/blob/e12cbd7078db388152f6e839abdbe09ba01f3f32/src/types.ts#L472-L499
    kind: docs
    publisher: "MCP project"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ClientCapabilitiesSchema.sampling"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: microsoft-vscode-mcp-guide
    title: Microsoft VS Code — MCP developer guide
    href: https://code.visualstudio.com/api/extension-guides/ai/mcp#_sampling
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sampling
  - id: goose-v1-48-sampling-docs
    title: goose v1.48.0 — MCP Sampling
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/guides/mcp-sampling.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Automatic sampling and server-to-Goose model request flow, lines 11-27"
  - id: opencode-v1-18-25-mcp-capabilities
    title: "OpenCode v1.18.25 — MCP client capabilities"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L38-L50
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLIENT_OPTIONS capabilities; commented sampling entry"
  - id: anthropic-claude-code-mcp-sampling
    title: "Anthropic — Model Context Protocol in Claude Code"
    href: "https://code.claude.com/docs/en/mcp"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "MCP server capabilities and limitations; sampling not supported"
support:
  - harness: claude-cli
    versions:
      - track: current
        status: "no"
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Claude Code MCP documentation observation"
          observedAt: 2026-09-02
          url: "https://code.claude.com/docs/en/mcp"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Claude Code client does not advertise sampling capability or handle sampling/createMessage"
        evidence:
          - resourceId: anthropic-claude-code-mcp-sampling
            type: documented
            observedAt: 2026-09-02
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
            value: "no MCP sampling handler"
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
            value: "native client latest revision is 2025-11-25 and explicitly advertises no sampling capability"
          - type: host-role
            value: "negative is native Zed Agent; External Agents are outside this cell"
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
          - type: runtime
            value: "client capabilities are explicitly {}"
          - type: protocol-revision
            value: "SDK 1.30.0"
        evidence:
          - resourceId: cline-v4-1-16-mcp-sampling
            type: listed
            observedAt: 2026-08-29
          - resourceId: cline-v4-1-16-mcp-sampling-secondary
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
            value: "server-initiated sampling through Continue's desktop MCP client"
          - type: protocol-revision
            value: "SDK 1.29.0 requires a declared sampling capability; Continue advertises none"
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
            value: "sampling capability is explicitly disabled in the released client options"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-capabilities
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
          - type: runtime
            value: "sampling requires a configured Goose provider and model capable of the server-supplied request"
        evidence:
          - resourceId: goose-v1-48-sampling-docs
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: VS Code documentation dated 2026-07-29
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: the user authorizes a server's first sampling request and can restrict which configured models that server may use
        evidence:
          - resourceId: microsoft-vscode-mcp-guide
            type: documented
            observedAt: 2026-08-28
---

Handle server requests for model sampling through the client.

This row remains unknown for a product until exact, dated evidence covers this capability rather than MCP generally.
