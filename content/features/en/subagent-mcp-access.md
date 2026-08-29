---
title: Subagent MCP access
description: "Allow a child agent to use MCP tools or declare its own MCP servers. This is tracked as an independent compatibility claim."
slug: subagent-mcp-access
locale: en
seoTitle: "Subagent MCP access compatibility — Can My Agent Use"
socialTitle: Subagent MCP access
socialDescription: "Allow a child agent to use MCP tools or declare its own MCP servers. Unreviewed product cells remain unknown."
llmSummary: "Subagent MCP access is atomic and does not follow automatically from broader subagents support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [runtime, subagents]
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: "Allow a child agent to use MCP tools or declare its own MCP servers."
specLabel: Common product term
aliases: ["child agent MCP"]
parent: subagents
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude Code subagents inherit MCP tools by default unless restricted and can use `mcpServers` to reference parent-session servers or declare inline servers scoped to the child."
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code custom agents can include individual MCP tools or complete `<server>/*` tool groups, and custom tool settings override defaults when the agent runs as a child."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin sessions can use installed MCP servers under a security-profile allowlist, and child sessions inherit the same profile chain as their parent."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-subagents
    title: Anthropic — Create custom subagents
    href: https://code.claude.com/docs/en/subagents
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Available tools; scope MCP servers to a subagent
  - id: vscode-custom-agents
    title: Visual Studio Code — Custom agents
    href: https://code.visualstudio.com/docs/agent-customization/custom-agents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Custom agent file structure; tools
  - id: vscode-subagents
    title: Visual Studio Code — Subagents in Visual Studio Code
    href: https://code.visualstudio.com/docs/agents/run/subagents
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Run a custom agent as a subagent
  - id: cognition-devin-security-profiles
    title: "Cognition — Security Profiles"
    href: https://docs.devin.ai/product-guides/security-profiles
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "MCP access; profile bindings and child inheritance"
support:
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "MCP access is inherited through the parent security-profile chain; independent per-child MCP declarations are not established"
        evidence:
          - resourceId: cognition-devin-security-profiles
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: plugin-provided subagents ignore the `mcpServers` frontmatter field for security; project, user, managed, and CLI-defined subagents can use it
        evidence:
          - resourceId: anthropic-claude-code-subagents
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code custom-agent and subagent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: MCP access is restricted by the child agent's tool list and the enabled MCP servers in the local VS Code session
        evidence:
          - resourceId: vscode-custom-agents
            type: documented
            observedAt: 2026-08-28
          - resourceId: vscode-subagents
            type: documented
            observedAt: 2026-08-28
---

Allow a child agent to use MCP tools or declare its own MCP servers.

Support is recorded only when exact, dated evidence covers this behavior.
