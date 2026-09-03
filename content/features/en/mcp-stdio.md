---
title: MCP stdio transport
description: "Connect to a local MCP server over standard input and output. Compatibility evidence is tracked independently from other MCP capabilities."
slug: mcp-stdio
locale: en
seoTitle: "MCP stdio transport compatibility — Can My Agent Use"
socialTitle: MCP stdio transport
socialDescription: "Connect to a local MCP server over standard input and output. Unreviewed product cells remain unknown."
llmSummary: "MCP stdio transport is an atomic MCP capability. Support for another MCP primitive does not imply this capability."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags: [interfaces, mcp]
updated: 2026-09-02
published: 2026-08-28
category: interfaces
summary: "Connect to a local MCP server over standard input and output."
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: "transport"
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28
aliases: ["stdio MCP"]
parent: mcp
related: []
highlight: false
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: GitHub Copilot CLI supports local stdio MCP servers via the --transport stdio option or configuration in ~/.copilot/mcp-config.json."
  - id: 81
    text: "Evidence checked 2026-09-02: OpenWork Desktop supports local command-line MCP servers over the standard stdio transport using its embedded OpenCode engine."
  - id: 60
    text: "Evidence checked 2026-09-02: OpenAI Codex CLI supports local stdio MCP servers configured via command and environment settings."
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Cascade supports stdio transport for local MCP servers configured with command, args, and env in ~/.codeium/windsurf/mcp_config.json or installed through the marketplace."
  - id: 84
    text: "Evidence checked 2026-08-29: Claude Desktop extensions package and launch local MCP server processes with a bundled Node runtime. The standard local MCP process transport is assessed as stdio, although the reviewed help page does not literally name the wire transport."
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 has no MCP stdio server configuration, subprocess-protocol client, or JSON-RPC transport."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI configures local MCP servers with command, args, and env and documents launching a server through amp mcp add."
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry explicitly lists MCP stdio for Grok Bot. This is registry evidence, not an independent transport test."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents adding local Claude Code MCP servers with the stdio transport and a command plus arguments."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini CLI documents spawning local MCP subprocesses and communicating over stdin/stdout."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents stdio as a supported local MCP transport managed by Cursor and provides its command, arguments, and environment configuration fields."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline documents local MCP servers using the stdio transport with command, arguments, environment, and optional working-directory configuration."
  - id: 6
    text: "Evidence checked 2026-08-28: Continue documents local MCP server configurations using a command and arguments, and its pinned desktop client constructs a Stdio client transport."
  - id: 7
    text: "Evidence checked 2026-08-28: Zed documents local custom MCP servers configured with a command, arguments, and environment, and its pinned client uses a dedicated stdio transport."
  - id: 8
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 supports command-line MCP extensions, spawns the configured child process, and connects through standard input/output."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 supports local command-based MCP servers over stdio."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 creates the MCP SDK stdio client transport for enabled local server commands with project working directory and configured environment."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp launches local command-based MCP servers over stdio, including documented npx and Docker configurations."
issues: []
resources:
  - id: github-copilot-cli-mcp-servers
    title: "GitHub — Adding MCP servers for GitHub Copilot CLI"
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Local or STDIO: starts a local process and communicates over standard input/output (stdin/stdout); --transport stdio"
  - id: openwork-v01839-stdio
    title: "OpenWork Desktop v0.18.39 — OpenCode MCP client"
    href: https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/packages/docs/start-here/do-work-with-it/create-a-skill-from-chat.mdx
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "OpenCode engine stdio MCP configuration"
  - id: openai-codex-mcp
    title: "OpenAI — Introducing upgrades to Codex"
    href: https://openai.com/index/introducing-upgrades-to-codex/
    kind: note
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Model Context Protocol support in Codex"
  - id: cognition-devin-desktop-mcp
    title: "Cognition — Model Context Protocol (MCP)"
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "One-Click Install via Deeplink; mcp_config.json"
  - id: anthropic-claude-desktop-extension-mcp-process
    title: Anthropic — Deploy enterprise-grade MCP servers with desktop extensions
    href: https://support.claude.com/en/articles/12702546-deploying-enterprise-grade-mcp-servers-with-desktop-extensions
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Local MCP server packaging, runtime, authentication, and deployment
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
  - id: amp-2026-08-mcp-stdio
    title: "Amp — MCP"
    href: https://ampcode.com/docs/customize/mcp
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Local command, args, and env configuration"
  - title: Model Context Protocol specification
    href: https://modelcontextprotocol.io/specification/2026-07-28
    kind: spec
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: anthropic-claude-code-mcp
    title: Anthropic — Connect Claude Code to tools via MCP
    href: https://code.claude.com/docs/en/mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Add a local stdio server
  - id: google-gemini-cli-mcp-docs
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport mechanisms — Stdio Transport
  - id: cursor-mcp-docs
    title: Cursor — Model Context Protocol
    href: https://prod.cursor.com/docs/mcp
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Transport table and STDIO server configuration
  - id: cline-mcp-docs
    title: Cline — Model Context Protocol
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configuration examples — Local server (STDIO)
  - id: continue-mcp-docs
    title: Continue — Model Context Protocol
    href: https://docs.continue.dev/customize/deep-dives/mcp
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: local MCP server configuration
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: constructStdioTransport
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: custom local server configuration
  - id: zed-mcp-client-source
    title: Zed source — MCP client at e3adf43
    href: https://github.com/zed-industries/zed/blob/e3adf43f37d7a2a9c165a78b255d293b0848d2d0/crates/context_server/src/client.rs
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Client::stdio
  - id: goose-v1-48-using-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Command-line and stdio extension configuration, lines 149-164 and 266-365"
  - id: jetbrains-ai-mcp-2026-2
    title: JetBrains AI Assistant — Model Context Protocol
    href: https://www.jetbrains.com/help/ai-assistant/mcp.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Supported transports; Stdio server configuration
  - id: opencode-v1-18-25-mcp-stdio
    title: "OpenCode v1.18.25 — MCP client implementation"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts#L340-L370
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "connectLocal; StdioClientTransport"
  - id: warp-mcp
    title: "Warp — Model Context Protocol"
    href: https://docs.warp.dev/agents/capabilities/mcp/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding an MCP Server; command-based examples selecting stdio"
support:
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [84]
        target:
          kind: dated-documentation
          revision: current official Claude Desktop extension documentation reviewed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: local packaged MCP process; stdio is an editorial inference because the reviewed help page does not name the wire token
          - type: runtime
            value: desktop extensions can bundle and launch a local MCP server with Anthropic's bundled Node runtime
          - type: auth
            value: local servers can reuse desktop SSO or session credentials under the documented deployment model
        evidence:
          - resourceId: anthropic-claude-desktop-extension-mcp-process
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: editorial-inference
        confidence: provisional
        assessedAt: 2026-08-29
        humanVerificationDesired: true
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
          - type: transport
            value: "no MCP stdio transport"
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
          - type: transport
            value: "local child-process command transport corresponding to MCP stdio"
          - type: policy
            value: "workspace-configured servers require explicit approval"
        evidence:
          - resourceId: amp-2026-08-mcp-stdio
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "local process over standard input and output"
          - type: runtime
            value: "Warp starts the command with the app and shuts it down on exit"
        evidence:
          - resourceId: warp-mcp
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
          - type: transport
            value: "stdio"
          - type: runtime
            value: "OpenCode starts the configured server command in the project environment"
        evidence:
          - resourceId: opencode-v1-18-25-mcp-stdio
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
          - type: transport
            value: local server command over standard input and output
        evidence:
          - resourceId: jetbrains-ai-mcp-2026-2
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the command must be locally available, pass extension checks, and initialize within the configured timeout"
        evidence:
          - resourceId: goose-v1-48-using-extensions
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: server command, arguments, environment, and configuration scope are supplied by the operator or administrator
        evidence:
          - resourceId: anthropic-claude-code-mcp
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
          - type: transport
            value: Cursor launches the configured local command; executable availability, environment, workspace trust, and enterprise policy can prevent connection
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
          - type: transport
            value: stdio servers are started only for trusted folders and use the configured command, arguments, environment, and working directory
        evidence:
          - resourceId: google-gemini-cli-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Agent Plugins compatible-client listing
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: transport support is registry-listed and was not independently tested by Can My Agent Use
        evidence:
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cline MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Cline launches the configured command; executable availability, environment, working directory, and enterprise policy can prevent connection
        evidence:
          - resourceId: cline-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: Continue source commit 5522c6f44ca0 and current documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Continue launches the configured local command; executable availability, environment, working directory, and server health can prevent connection
        evidence:
          - resourceId: continue-mcp-docs
            type: documented
            observedAt: 2026-08-28
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: Zed source commit e3adf43f37d7 and current documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Zed launches the configured local command; executable availability, environment, and server configuration determine connection success
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
          - resourceId: zed-mcp-client-source
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
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "Cascade connects to local MCP servers via stdio transport configured in mcp_config.json with command, args, and env"
        evidence:
          - resourceId: cognition-devin-desktop-mcp
            type: documented
            observedAt: 2026-09-02
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "stdio process execution configured in ~/.copilot/mcp-config.json or /mcp add"
        evidence:
          - resourceId: github-copilot-cli-mcp-servers
            type: documented
            observedAt: 2026-09-02
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "local stdio subprocess transport supported via OpenCode engine"
        evidence:
          - resourceId: openwork-v01839-stdio
            type: documented
            observedAt: 2026-09-02
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [60]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-09-02
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "local stdio transport executing configured command and arguments"
        evidence:
          - resourceId: openai-codex-mcp
            type: documented
            observedAt: 2026-09-02
---

Connect to a local MCP server over standard input and output.

The Grok Bot cell is registry-listed. Server lifecycle, installation location, authorization, and security policy remain deployment-specific.
