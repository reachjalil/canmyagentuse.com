---
title: MCP prompts
description: "Invoke reusable MCP prompt templates. Compatibility evidence is published only after review."
slug: mcp-prompts
locale: en
seoTitle: "MCP prompts — Can My Agent Use"
socialTitle: MCP prompts
socialDescription: "Invoke reusable MCP prompt templates. Unreviewed cells remain unknown."
llmSummary: "MCP prompts: Invoke reusable MCP prompt templates. Unreviewed harness cells remain unknown until dated public evidence exists."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: Invoke reusable MCP prompt templates.
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: host or client retrieving server prompt templates
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28/server/prompts
aliases: [prompts/list, prompts/get, MCP prompt templates]
parent: mcp
related: [mcp-tools, mcp-resources]
highlight: false
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP prompts/list or prompts/get."
  - id: 9
    text: "Evidence checked 2026-08-29: both default Devin Local and legacy Cascade support MCP prompts; Devin Local exposes connected-server prompts as parameterized namespaced slash commands and fetches their returned messages."
  - id: 8
    text: "Evidence checked 2026-08-29: Amp's 2026-08-19 MCP announcement explicitly says MCP Prompts are not supported across the announced Amp MCP surfaces, including the TUI."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code dynamically discovers MCP prompts and exposes them as `/mcp__servername__promptname` commands with documented argument handling."
  - id: 2
    text: "Evidence checked 2026-08-28: Microsoft's VS Code MCP developer guide states that VS Code implements MCP tools, prompts, and resources; the claim is scoped to GitHub Copilot's local VS Code agent surface."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI discovers MCP prompts and exposes them as named slash commands with positional or named argument handling."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor's protocol capability table explicitly lists MCP Prompts as supported templated messages and workflows."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline's pinned desktop client requests `prompts/list` and displays prompt metadata and arguments, but the reviewed surface does not retrieve prompt messages with `prompts/get`."
  - id: 6
    text: "Evidence checked 2026-08-28: Continue's pinned desktop client lists MCP prompts, exposes them as slash commands, and retrieves selected prompt messages with `prompts/get`."
  - id: 7
    text: "Evidence checked 2026-08-28: Zed explicitly lists MCP Prompts among the server features supported by Zed Agent."
  - id: 10
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 implements paginated `prompts/list` and `prompts/get`, lists extension prompts, and invokes selected templates with arguments."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 pages through prompt templates from connected MCP servers and retrieves a selected prompt with optional arguments."
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
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use MCP prompts as commands
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
    locator: MCP prompts as slash commands
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Protocol and extension support — Prompts
  - id: cline-mcp-client-source
    title: Cline source — MCP desktop client at 27350f2
    href: https://github.com/cline/cline/blob/27350f243c2a31c97b4e38fa700e009a2f61adae/apps/vscode/src/services/mcp/McpHub.ts
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: fetchPromptsList and fetchServerCapabilities
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPManagerSingleton.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: getPrompt
  - id: continue-mcp-prompt-source
    title: Continue source — MCP slash-command adapter at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/commands/slash/mcpSlashCommand.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: stringifyMcpPrompt
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
  - id: cognition-desktop-local-mcp-prompts
    title: Cognition — MCP Overview
    href: https://docs.devin.ai/cli/extensibility/mcp/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Prompts as Slash Commands and argument mapping"
  - id: cognition-desktop-cascade-mcp
    title: Cognition — Model Context Protocol for Cascade
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "General Information"
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "prompts/list and prompts/get, lines 960-1027"
  - id: opencode-v1-18-25-mcp-prompts
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L690-L779
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP.prompts; MCP.getPrompt"
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
            value: "no MCP prompt client or server primitive"
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
          - type: format
            value: "prompt lists are paginated"
          - type: host-role
            value: "retrieval is scoped to client, prompt name, and optional arguments"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-prompts
            type: documented
            observedAt: 2026-08-29
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
            value: "only prompts from configured and successfully connected extensions are available"
        evidence:
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: "supported by both the default Devin Local agent and legacy Cascade"
          - type: format
            value: "Devin Local maps MCP prompts to namespaced slash commands with positional argument handling"
          - type: auth
            value: "prompts from an authenticated remote server are unavailable until the server is reauthenticated"
          - type: policy
            value: "organization restrictions can block an MCP server and its prompts"
        evidence:
          - resourceId: cognition-desktop-local-mcp-prompts
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-desktop-cascade-mcp
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
            value: "scoped to Amp's MCP client behavior in the TUI"
          - type: runtime
            value: "Amp supports MCP-provided tools but does not expose the protocol's reusable prompt-template primitive"
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
            value: commands appear only for prompts exposed by connected and healthy MCP servers
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
            value: available templates and their arguments depend on prompts exposed by the connected server
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
            value: slash commands appear only for prompts discovered from connected servers
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
            value: the reviewed desktop client lists prompts and displays their metadata but does not evidence prompts/get or insertion of prompt messages into a task
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
            value: prompts are supplied by connected servers that declare the prompts capability and are exposed through Continue's slash-command path
        evidence:
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
          - resourceId: continue-mcp-prompt-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
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

Invoke reusable MCP prompt templates.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
