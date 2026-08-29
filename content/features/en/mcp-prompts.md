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
---

Invoke reusable MCP prompt templates.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
