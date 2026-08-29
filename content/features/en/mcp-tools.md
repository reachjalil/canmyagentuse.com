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
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: Invoke operations exposed by a Model Context Protocol server.
specLabel: MCP
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
issues: []
resources:
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
support:
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
---

MCP tools are operations advertised by a Model Context Protocol server and made available for a model or agent to invoke.

This row asks whether the named harness can connect to an MCP server and call its tools. It does not claim support for every MCP transport, authentication flow, protocol primitive, or third-party server. Plan, rollout, and transport restrictions are marked partial when the public documentation states them.

Only the current track is sourced in this first wave. Preview and unreviewed harness cells remain unknown.
