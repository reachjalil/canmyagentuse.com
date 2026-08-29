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
updated: 2026-08-28
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
issues: []
resources:
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
support:
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
