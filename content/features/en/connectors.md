---
title: Connectors
description: Connect to mail, chat, files, calendars, and other authorized services.
slug: connectors
locale: en
seoTitle: "Connectors — Can My Agent Use"
socialTitle: Connectors
socialDescription: Compare connector availability, authentication, scope, and organization policy.
llmSummary: Connectors provide documented access to external services authorized by the user or organization. Service coverage, authentication, read/write scope, and policy are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Connect to external services authorized by the user or organization.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents a Grok connector catalog for services such as Box, GitHub, Notion, and Vercel, plus custom remote MCP connectors for publicly reachable servers."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot installs supported connectors from Settings → Plugins, authenticates them in the browser when required, and makes installed connectors available account-wide; organization policy can require, restrict, or disable them."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenAI documents plugin connectors on ChatGPT web and desktop, plus direct MCP support in the ChatGPT desktop app and Codex CLI."
  - id: 4
    text: "Evidence checked 2026-08-28: Anthropic documents remote connectors across Claude web, Claude Desktop, and Claude Code, with separate local desktop extensions for Claude Desktop and Claude Code."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor, Gemini CLI, VS Code Copilot, GitHub Copilot CLI, Cline, Continue, OpenCode, Zed Agent, and Warp each document MCP-based external tools or data sources on their local agent surfaces."
  - id: 6
    text: "Evidence checked 2026-08-28: Gemini Apps documents Connected Apps on the web, while Devin and Replit Agent document hosted MCP catalogs and custom connector configuration."
issues: []
resources:
  - id: xai-grok-connectors
    title: xAI — Grok connectors
    href: https://docs.x.ai/grok/connectors
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-computer-apps
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Connect an app
  - id: openai-chatgpt-plugins-connectors
    title: OpenAI — Plugins
    href: https://learn.chatgpt.com/docs/plugins
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported surfaces; connectors and MCP servers
  - id: openai-codex-mcp
    title: OpenAI — Model Context Protocol
    href: https://learn.chatgpt.com/docs/extend/mcp
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported surfaces; Connect Codex to an MCP server
  - id: anthropic-connectors-surfaces
    title: Anthropic — When to use desktop and web connectors
    href: https://support.claude.com/en/articles/11725091-when-to-use-desktop-and-web-connectors
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
  - id: google-gemini-cli-mcp
    title: Google — MCP servers with Gemini CLI
    href: https://geminicli.com/docs/tools/mcp-server/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-connected-apps
    title: Google — Use apps connected to Gemini
    href: https://support.google.com/gemini/answer/14959807?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: microsoft-vscode-mcp
    title: Microsoft — Add and manage MCP servers in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/mcp-servers
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-mcp
    title: GitHub — Add MCP servers for Copilot CLI
    href: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cline-mcp
    title: Cline — MCP overview
    href: https://docs.cline.bot/mcp/mcp-overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: continue-mcp
    title: Continue — MCP servers
    href: https://docs.continue.dev/customize/mcp-tools
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: opencode-mcp
    title: OpenCode — MCP servers
    href: https://opencode.ai/docs/mcp-servers/
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: zed-mcp
    title: Zed — Model Context Protocol
    href: https://zed.dev/docs/ai/mcp
    kind: docs
    publisher: Zed
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: warp-mcp
    title: Warp — MCP servers
    href: https://docs.warp.dev/reference/cli/mcp-servers
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cognition-devin-mcp
    title: Cognition — MCP Marketplace
    href: https://docs.devin.ai/work-with-devin/mcp
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: replit-agent-mcp
    title: Replit — Connect Agent via MCP
    href: https://docs.replit.com/build/connect-via-mcp
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT web plugin documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: hosted plugins can bundle connectors and remote MCP-backed tools; ChatGPT web does not read local Codex MCP configuration
          - type: policy
            value: workspace administrators can control which plugins and tools are available
        evidence:
          - resourceId: openai-chatgpt-plugins-connectors
            type: documented
            observedAt: 2026-08-28
          - resourceId: openai-codex-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop plugin and MCP documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: the desktop app supports hosted plugin connectors and direct STDIO or Streamable HTTP MCP servers for its Codex host
          - type: auth
            value: remote servers can use bearer tokens or OAuth; plugin services can prompt for external authentication
        evidence:
          - resourceId: openai-chatgpt-plugins-connectors
            type: documented
            observedAt: 2026-08-28
          - resourceId: openai-codex-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web connector documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: remote connectors work on the web; local desktop extensions are not available on the web
          - type: auth
            value: connector access inherits the user's permissions in the connected service
        evidence:
          - resourceId: anthropic-connectors-surfaces
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Claude Desktop connector documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: remote connectors are account-backed; desktop extensions can additionally expose local tools and services
          - type: auth
            value: connector access inherits user permissions and can require service authentication
        evidence:
          - resourceId: anthropic-connectors-surfaces
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Claude Code connector documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Claude Code can use remote connectors and local MCP servers or desktop extensions
        evidence:
          - resourceId: anthropic-connectors-surfaces
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cursor MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: local STDIO, SSE, and Streamable HTTP servers are supported; remote transports can use OAuth
          - type: protocol-revision
            value: documented MCP capabilities include tools, prompts, roots, and elicitation
        evidence:
          - resourceId: cursor-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Codex MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Codex CLI supports local STDIO and remote Streamable HTTP MCP servers in user or trusted-project configuration
          - type: auth
            value: bearer-token and OAuth authentication are documented for remote servers
        evidence:
          - resourceId: openai-codex-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Gemini CLI MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: STDIO, SSE, and Streamable HTTP servers can expose tools, resources, and prompts to Gemini CLI
          - type: policy
            value: tool confirmation and enterprise allowlist policy can constrain MCP execution
        evidence:
          - resourceId: google-gemini-cli-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini web Connected Apps documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Connected App availability varies by account type, Workspace edition, location, language, device, and Gemini app
          - type: policy
            value: Workspace administrators can enable or disable apps and exposed actions differ by service
        evidence:
          - resourceId: google-gemini-connected-apps
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current VS Code MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: workspace or user MCP configuration supports local and remote servers; configurations can be forwarded to Agent Host sessions
          - type: policy
            value: server trust, tool approvals, enterprise policy, and optional sandboxing constrain use
        evidence:
          - resourceId: microsoft-vscode-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: local STDIO and remote HTTP or legacy SSE servers are supported; the GitHub MCP server is built in
          - type: policy
            value: organization registry and allowlist policy can restrict servers; MCP calls require permission
        evidence:
          - resourceId: github-copilot-cli-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cline MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: MCP servers work in the Cline editor extension and Cline CLI; no servers are preinstalled
          - type: policy
            value: MCP interactions require user approval
        evidence:
          - resourceId: cline-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Continue MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: MCP servers connect Agent mode to external tools, systems, and databases
          - type: policy
            value: MCP tools are available only in Agent mode and follow tool-policy controls
        evidence:
          - resourceId: continue-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current OpenCode MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: local and remote MCP servers are supported; remote servers can use headers or OAuth
        evidence:
          - resourceId: opencode-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Zed MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Zed Agent supports configured local and remote MCP servers; remote servers can use standard MCP OAuth
          - type: protocol-revision
            value: tools and prompts are documented; other MCP capabilities are not claimed
        evidence:
          - resourceId: zed-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Warp Oz CLI MCP documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: Oz agent runs accept account-shared MCP UUIDs, inline JSON, or configuration file paths for local and cloud agents
        evidence:
          - resourceId: warp-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin MCP Marketplace documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: the hosted marketplace and custom-server path support STDIO, SSE, and Streamable HTTP
          - type: auth
            value: OAuth, authentication headers, and service-account guidance are documented; connected access can be shared within an organization
        evidence:
          - resourceId: cognition-devin-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Agent MCP documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: Replit Agent supports a curated hosted MCP catalog and custom HTTPS MCP server URLs
          - type: auth
            value: catalog and custom servers can use OAuth or configured headers; connected tools become available across projects
        evidence:
          - resourceId: replit-agent-mcp
            type: documented
            observedAt: 2026-08-28
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web connector documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: catalog and custom connectors can require provider authentication and permissions
          - type: transport
            value: custom MCP connectors must be remotely reachable; local-only servers require a separate tunnel
        evidence:
          - resourceId: xai-grok-connectors
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: installed connectors may require browser authentication
          - type: policy
            value: installed connectors are account-wide and may be required, restricted, or disabled by an organization administrator
        evidence:
          - resourceId: xai-grok-bot-computer-apps
            type: documented
            observedAt: 2026-08-28
---

Reach mail, chat, files, calendars, issue trackers, and other services the user authorizes.

The Grok Web and Grok Bot desktop paths are separate. A connector's appearance in a catalog does not establish that every account can authenticate it, that every exposed action is writable, or that organization policy permits it.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
