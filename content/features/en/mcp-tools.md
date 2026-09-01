---
title: MCP tools
description: Invoke tools exposed by a Model Context Protocol server, with current-track evidence for selected harnesses.
slug: mcp-tools
locale: en
seoTitle: MCP tools compatibility — Can My Agent Use
socialTitle: Can my agent use MCP tools?
socialDescription: Current-track MCP tool support by agent harness, with dated public evidence.
llmSummary: MCP tools let a harness invoke operations exposed by a Model Context Protocol server. Selected current-track cells are sourced; all others remain unknown.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
  - mcp
updated: 2026-08-31
published: 2026-08-28
category: interfaces
summary: Invoke operations exposed by a Model Context Protocol server.
specLabel: MCP 2026-07-28
specification:
  id: mcp
  revision: "2026-07-28"
  maturity: published
  role: host or client invoking server tools
  authority: MCP project / AAIF ecosystem
  canonicalUrl: https://modelcontextprotocol.io/specification/2026-07-28/server/tools
aliases: [MCP tool calling, tools/list, tools/call]
parent: mcp
related: [mcp-resources, mcp-prompts, mcp-apps]
highlight: true
notes:
  - id: 84
    text: "Evidence checked 2026-08-31: Chrome WebMCP is an MCP-inspired page API rather than an MCP client; it does not implement MCP tools/list or tools/call even though both systems expose structured tools."
  - id: 83
    text: "Evidence checked 2026-08-29: exhaustive stable-source review establishes that Aider v0.86.0 does not implement MCP tools/list or tools/call; shell commands and model-provider APIs are not MCP tools."
  - id: 28
    text: "Evidence checked 2026-08-29: current Devin Desktop documentation says both default Devin Local and legacy Cascade discover and invoke tools from configured MCP servers, with permission and organization controls."
  - id: 1
    text: "Evidence checked 2026-08-28: ChatGPT developer mode can scan and invoke tools from custom remote MCP apps on ChatGPT web, but full MCP is a beta rollout limited by plan and workspace controls."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude web supports tools from custom remote MCP connectors on paid plans, and Anthropic labels the feature beta."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Desktop supports local MCP servers through desktop extensions and remote MCP connectors, with beta and administrator controls documented."
  - id: 4
    text: "Evidence checked 2026-08-28: the Claude Code CLI reference exposes `claude mcp` for configuring MCP servers and documents MCP tools in its permission surface."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor documents local and remote MCP transports and automatic use of discovered MCP tools by Agent."
  - id: 6
    text: "Evidence checked 2026-08-28: OpenAI documents MCP as a Codex CLI tool for connecting the local agent to external systems."
  - id: 7
    text: "Evidence checked 2026-08-28: Gemini CLI documents configured MCP server discovery and invocation of the tools those servers expose."
  - id: 8
    text: "Evidence checked 2026-08-28: VS Code documents MCP tools as a supported agent tool type and supports local or remote MCP servers in Copilot agent mode."
  - id: 9
    text: "Evidence checked 2026-08-28: OpenWork Desktop documents workspace or global custom MCP servers, including an OAuth setup path, for use in agent sessions."
  - id: 10
    text: "Evidence checked 2026-08-28: xAI documents that Grok Bot connects to tools through plugins and MCP servers, while hosted MCP tool calls are run on the Bot computer's behalf; team MCP policy can disable servers or member-added configurations."
  - id: 11
    text: "Evidence checked 2026-08-28: xAI documents that Grok Web discovers tools exposed by a custom remote MCP connector and makes them available in conversations."
  - id: 12
    text: "Evidence checked 2026-08-28: Cline documents discovering tools from configured MCP servers and testing or invoking those tools from the desktop extension."
  - id: 13
    text: "Evidence checked 2026-08-28: Continue documents MCP servers as custom Agent-mode tools, and its pinned desktop client lists and calls server tools."
  - id: 14
    text: "Evidence checked 2026-08-28: Zed explicitly lists MCP Tools as supported and documents MCP tools in the Agent Panel and per-tool permission surface."
  - id: 15
    text: "Evidence checked 2026-08-28: OpenAI documents that plugins work in ChatGPT desktop Chat and Work, and that installed plugins can add MCP tools to new chats."
  - id: 16
    text: "Evidence checked 2026-08-28: Gemini web can connect a custom app by its MCP server URL and use that app in prompts, but only through Gemini Spark under narrow account, age, language, and region eligibility."
  - id: 17
    text: "Evidence checked 2026-08-28: Perplexity web can use the MCP-backed Carbon Arc managed connector, while Perplexity separately says arbitrary remote MCP support is still coming to all platforms."
  - id: 18
    text: "Evidence checked 2026-08-28: Mistral documents custom MCP connectors whose functions Work can call, and identifies Vibe as the successor name for Le Chat with settings and plans carried over."
  - id: 19
    text: "Evidence checked 2026-08-28: Devin documents marketplace and custom MCP servers whose discovered tools it can use in sessions."
  - id: 20
    text: "Evidence checked 2026-08-28: Replit's shipped-feature retrospective says Replit Agents can connect custom remote MCP servers and access hundreds of external tools."
  - id: 21
    text: "Evidence checked 2026-08-28: Amp CLI documents local and remote MCP servers as sources of additional tools, with CLI configuration, approval, and OAuth paths."
  - id: 22
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents local and remote MCP servers and automatic or explicit use of the tools they provide."
  - id: 23
    text: "Evidence checked 2026-08-29: goose CLI v1.48.0 documents MCP servers as extensions and its pinned client implementation performs paginated `tools/list` discovery and `tools/call` invocation."
  - id: 24
    text: "Evidence checked 2026-08-28: OpenCode documents local and remote MCP servers whose tools are made available to its agents."
  - id: 25
    text: "Evidence checked 2026-08-28: JetBrains AI Assistant documents connecting MCP servers so the IDE agent can access and invoke their tools."
  - id: 26
    text: "Evidence checked 2026-08-28: Warp documents generally available MCP support in its desktop terminal, with connected servers used in Agent Mode conversations."
  - id: 27
    text: "Evidence checked 2026-08-28: current Devin Desktop documentation preserves MCP tool consumption for the legacy Cascade agent, while new tabs default to Devin Local and use a separate configuration path."
issues: []
resources:
  - id: chrome-webmcp-compare-mcp-tools
    title: "Google Chrome — When to use WebMCP and MCP"
    href: https://developer.chrome.com/docs/ai/webmcp/compare-mcp
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Functions and purpose; MCP is for backend; WebMCP is for frontend"
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
  - id: openai-chatgpt-mcp
    title: OpenAI — Developer mode and MCP apps in ChatGPT
    href: https://help.openai.com/en/articles/12584461-developer-mode-and-full-mcp-connectors-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-remote-mcp
    title: Anthropic — Custom connectors using remote MCP
    href: https://support.anthropic.com/en/articles/11175166-about-custom-integrations-using-remote-mcp
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-desktop-mcp
    title: Anthropic — Local MCP servers on Claude Desktop
    href: https://support.anthropic.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-cli
    title: Anthropic — Claude Code CLI reference
    href: https://docs.anthropic.com/en/docs/claude-code/cli-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-mcp
    title: Cursor — Model Context Protocol
    href: https://docs.cursor.com/context/model-context-protocol
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-codex-mcp
    title: OpenAI — Introducing upgrades to Codex
    href: https://openai.com/index/introducing-upgrades-to-codex/
    kind: note
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: gemini-cli-mcp
    title: Gemini CLI — MCP server documentation
    href: https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: vscode-agent-tools
    title: Visual Studio Code — Tools in agents
    href: https://code.visualstudio.com/docs/copilot/concepts/tools
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openwork-mcp
    title: OpenWork — Add an MCP server
    href: https://openworklabs.com/docs/start-here/connect-your-stack/add-an-mcp-server
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-team-mcp
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Plugins and MCP policy
  - id: xai-grok-web-mcp
    title: xAI — Grok connectors
    href: https://docs.x.ai/grok/connectors
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Custom MCP connectors
  - id: cline-mcp-docs
    title: Cline — Model Context Protocol
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What MCP gives you; quick start; managing servers
  - id: continue-mcp-client-source
    title: Continue source — MCP desktop client at 5522c6f
    href: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/core/context/mcp/MCPConnection.ts
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: listTools and desktop MCP connection
  - id: zed-mcp-docs
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed Industries
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported Features; Agent Panel Usage; tool permissions
  - id: openai-chatgpt-desktop-plugins
    title: OpenAI — Plugins in ChatGPT and Codex
    href: https://learn.chatgpt.com/docs/plugins
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Overview; supported surfaces; plugin parts
  - id: google-gemini-spark-custom-apps
    title: Google — Connect custom MCP apps for Gemini Spark
    href: https://support.google.com/gemini/answer/17209137
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: What you need; connect a custom app
  - id: perplexity-carbon-arc-mcp
    title: Perplexity — Connecting Perplexity with Carbon Arc
    href: https://www.perplexity.ai/help-center/en/articles/14809930-connecting-perplexity-with-carbon-arc
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to activate it; trying it out
  - id: perplexity-mcp-platform-status
    title: Perplexity — Local and remote MCPs
    href: https://www.perplexity.ai/help-center/en/articles/11502712-local-and-remote-mcps-for-perplexity
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Local versus remote MCPs; remote MCP status
  - id: mistral-work-mcp-connectors
    title: Mistral — MCP connectors for Work
    href: https://docs.mistral.ai/vibe/work/connectors/mcp-connectors
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configuring a custom connector; per-function permissions
  - id: mistral-le-chat-vibe-rename
    title: Mistral — Vibe gets to work
    href: https://mistral.ai/news/vibe-agent/
    kind: note
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat is now Vibe; Vibe for work
  - id: devin-mcp-marketplace
    title: Devin — MCP marketplace and custom servers
    href: https://docs.devin.ai/work-with-devin/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Why use MCP; custom MCP server; test listing tools
  - id: replit-agent-custom-mcp
    title: Replit — 2025 in review
    href: https://replit.com/blog/2025-replit-in-review
    kind: note
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: December; custom MCP server support
  - id: amp-cli-mcp-tools
    title: Amp — MCP
    href: https://ampcode.com/docs/customize/mcp
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: MCP; workspace trust; OAuth
  - id: github-copilot-cli-mcp
    title: GitHub — Add MCP servers to Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Adding an MCP server; using MCP servers
  - id: goose-mcp-extensions
    title: goose v1.48.0 — Using Extensions
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/getting-started/using-extensions.md
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP extension model; MCP Servers; CLI command-line and Streamable HTTP extensions"
  - id: goose-v1-48-mcp-client-source
    title: goose v1.48.0 — MCP client implementation
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose/src/agents/mcp_client.rs
    kind: docs
    publisher: Agentic AI Foundation
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "tools/list and tools/call, lines 867-958"
  - id: opencode-mcp-servers-v2
    title: OpenCode — MCP servers
    href: https://opencode.ai/v2/docs/mcp-servers/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configure servers; local and remote servers
  - id: jetbrains-ai-mcp
    title: JetBrains — Model Context Protocol in AI Assistant
    href: https://www.jetbrains.com/help/ai-assistant/mcp.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Connect to an MCP server; invoke MCP tools
  - id: warp-mcp-ga
    title: Warp — Launch Log 3
    href: https://www.warp.dev/blog/launch-log-3
    kind: note
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: MCP support
  - id: windsurf-cascade-mcp-current
    title: Devin Desktop — Model Context Protocol for Cascade
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Cascade MCP scope; adding a new MCP; configuring MCP tools
  - id: cognition-desktop-local-mcp-tools
    title: Cognition — MCP Overview
    href: https://docs.devin.ai/cli/extensibility/mcp/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How It Works; Tool discovery; Tool execution; Permission Control"
  - id: cognition-desktop-cascade-mcp-tools
    title: Cognition — Model Context Protocol for Cascade
    href: https://docs.devin.ai/desktop/cascade/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding a new MCP; Configuring MCP tools; General Information"
support:
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: no
        stage: experimental
        noteIds: [84]
        target:
          kind: dated-documentation
          revision: Chrome 153 WebMCP origin-trial documentation
          observedAt: 2026-08-31
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: WebMCP is an experimental Chrome origin trial from Chrome 149; local development requires the enable-webmcp-testing flag
          - type: protocol-revision
            value: the cell covers MCP server tools/list and tools/call; WebMCP exposes its own page-local APIs instead
        evidence:
          - resourceId: chrome-webmcp-compare-mcp-tools
            type: documented
            observedAt: 2026-08-31
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
            value: "no MCP tool-consuming or tool-serving role"
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
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [11]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web connector documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: custom MCP servers must be remotely reachable; local-only servers require a separate tunnel
          - type: auth
            value: server authentication and provider permissions can be required
        evidence:
          - resourceId: xai-grok-web-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 hosted documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: preview
            value: developer mode and full MCP are beta
          - type: plan
            value: availability varies by ChatGPT plan
          - type: policy
            value: workspace role and administrator controls apply
        evidence:
          - resourceId: openai-chatgpt-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 hosted documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: preview
            value: custom connectors are beta
          - type: plan
            value: paid plan required
        evidence:
          - resourceId: anthropic-remote-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: extension installation and administrator controls apply
          - type: transport
            value: local extensions and remote connectors use different setup paths
        evidence:
          - resourceId: anthropic-desktop-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Claude Code CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: anthropic-claude-code-cli
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cursor documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: cursor-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openai-codex-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: gemini-cli-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current VS Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: vscode-agent-tools
            type: documented
            observedAt: 2026-08-28
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current OpenWork MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: documented OAuth setup currently expects dynamic client registration
        evidence:
          - resourceId: openwork-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: team MCP allowlists, denylists, member-install policy, and network allowlists can disable a server
          - type: auth
            value: sign-in tokens for hosted MCP servers remain with the backend that runs tool calls on the computer's behalf
        evidence:
          - resourceId: xai-grok-bot-team-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [12]
        target:
          kind: dated-documentation
          revision: current Cline MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: tool calls can require approval unless the operator places a tool in the server's auto-approval configuration
        evidence:
          - resourceId: cline-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [13]
        target:
          kind: dated-documentation
          revision: Continue source commit 5522c6f44ca0 observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: MCP tools are available in Agent mode and only from connected servers that declare the tools capability
        evidence:
          - resourceId: continue-mcp-client-source
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [14]
        target:
          kind: dated-documentation
          revision: current Zed MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: Agent profiles, server enablement, and global or per-tool permission rules determine whether a discovered MCP tool can run
        evidence:
          - resourceId: zed-mcp-docs
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [15]
        target:
          kind: dated-documentation
          revision: current ChatGPT plugin documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: the plugin must be available to the account and installed before its MCP tools become available in a new chat
        evidence:
          - resourceId: openai-chatgpt-desktop-plugins
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [16]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps Help observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: custom MCP apps are available only in Gemini Spark
          - type: region
            value: limited to users age 18 or over in the United States and to English
          - type: policy
            value: requires a personal Google Account with Keep Activity enabled and is unavailable to work or school accounts
        evidence:
          - resourceId: google-gemini-spark-custom-apps
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: partial
        noteIds: [17]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity connector documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the documented Carbon Arc MCP connector requires Perplexity Pro and a separate Carbon Arc subscription
          - type: transport
            value: arbitrary remote MCP support is still documented as coming soon to all platforms
          - type: policy
            value: an organization administrator can need to enable the managed connector
        evidence:
          - resourceId: perplexity-carbon-arc-mcp
            type: documented
            observedAt: 2026-08-28
          - resourceId: perplexity-mcp-platform-status
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [18]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Mistral Work documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Mistral renamed Le Chat to Vibe and carries existing conversations settings and plans into the successor surface
          - type: policy
            value: an administrator must add the MCP connector and per-function approval rules can apply
          - type: transport
            value: custom servers must be reachable over HTTPS
        evidence:
          - resourceId: mistral-work-mcp-connectors
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-le-chat-vibe-rename
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [19]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin MCP documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: organization permissions control who can add and authenticate custom MCP servers and how connections are shared
        evidence:
          - resourceId: devin-mcp-marketplace
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [20]
        target:
          kind: dated-documentation
          revision: Replit shipped-feature retrospective updated 2026-01-01
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: the first-party evidence specifically documents custom remote MCP servers
        evidence:
          - resourceId: replit-agent-custom-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [21]
        target:
          kind: dated-documentation
          revision: current Amp MCP documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: workspace MCP servers require explicit approval before running
        evidence:
          - resourceId: amp-cli-mcp-tools
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [22]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: organization registry allowlists and folder trust can restrict which servers and tools run
        evidence:
          - resourceId: github-copilot-cli-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [23]
        target:
          kind: release
          revision: goose CLI v1.48.0 commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "extension enablement, available-tools filters, permission policy, server health, and timeout determine which tools can be invoked"
        evidence:
          - resourceId: goose-mcp-extensions
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-v1-48-mcp-client-source
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [24]
        target:
          kind: dated-documentation
          revision: current OpenCode v2 documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: server and tool enablement and tool permissions determine agent access
        evidence:
          - resourceId: opencode-mcp-servers-v2
            type: documented
            observedAt: 2026-08-28
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [25]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 documentation observed 2026-08-28
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: centrally managed IDE deployments can preconfigure servers or prevent users from adding their own
        evidence:
          - resourceId: jetbrains-ai-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [26]
        target:
          kind: dated-documentation
          revision: Warp MCP general-availability announcement dated 2025-06-04
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: MCP servers are used in Agent Mode conversations
        evidence:
          - resourceId: warp-mcp-ga
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [28]
        target:
          kind: dated-documentation
          revision: current Devin Desktop MCP documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: host-role
            value: default Devin Local and legacy Cascade both invoke MCP tools through separate configuration paths
          - type: transport
            value: Devin Local supports stdio and Streamable HTTP with documented SSE fallback; Cascade documents stdio, Streamable HTTP, and SSE
          - type: auth
            value: remote servers can use OAuth, with separate OAuth sessions for the two MCP clients
          - type: runtime
            value: Devin Local MCP tools participate in its allow, deny, and ask permission system
          - type: policy
            value: enterprise administrators can disable MCP or enforce registries and allowlists
        evidence:
          - resourceId: cognition-desktop-local-mcp-tools
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-desktop-cascade-mcp-tools
            type: documented
            observedAt: 2026-08-29
---

MCP tools are operations advertised by a Model Context Protocol server and made available for a model or agent to invoke.

This row asks whether the named harness can connect to an MCP server and call its tools. It does not claim support for every MCP transport, authentication flow, protocol primitive, or third-party server. Plan, rollout, and transport restrictions are marked partial when the public documentation states them.

Only the current track is sourced. Cells without directly matching first-party evidence for this exact harness surface remain unknown.
