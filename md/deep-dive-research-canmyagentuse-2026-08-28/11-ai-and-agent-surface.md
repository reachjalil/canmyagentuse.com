---
title: Agent Standards Stack and Harness Surfaces
file: 11-ai-and-agent-surface.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: mixed
sources_count: 13
---

# Agent Standards Stack and Harness Surfaces

## Reader Promise
Show how the emerging standards relate to one another and how current harness surfaces should be compared without pretending they expose identical extension models.

## Summary (≤120 words)
The ecosystem is better understood as a stack than as one protocol race. Instruction files influence agent behavior; Skills package reusable guidance and assets; Plugins package multiple components; MCP connects models/agents to tools and context; WebMCP/NLWeb expose web capabilities; MCP Apps/AG-UI/A2UI address interactive UI; ACP/AHP connect or host coding agents; A2A handles agent-to-agent communication. Harnesses implement different subsets.

## What We Found
### Layer model

1. **Repository/workspace instructions:** AGENTS.md, CLAUDE.md, vendor rules.
2. **Reusable capability bundles:** Agent Skills.
3. **Distribution/package layer:** Agent Plugins plus vendor-native plugin systems.
4. **Agent ↔ tools/context:** MCP.
5. **Website ↔ agent:** WebMCP and NLWeb.
6. **Agent ↔ interactive UI:** MCP Apps, AG-UI, A2UI.
7. **Editor/client ↔ coding agent:** ACP.
8. **Session host ↔ clients:** AHP.
9. **Agent ↔ agent:** A2A.

The layers can coexist; showing them as direct substitutes would mislead users. [S-019] [S-043] [S-049] [S-057] [S-067] [S-074] [S-077]

### Seed surface coverage counts

Counts below are only the seed matrix’s documentation-backed classifications, **not quality scores**.

| surface | type | execution | y | a | n | u |
| --- | --- | --- | --- | --- | --- | --- |
| Claude Code | cli | local | 21 | 0 | 0 | 21 |
| Claude Desktop | desktop | local | 9 | 0 | 0 | 33 |
| claude.ai | web | hosted | 6 | 0 | 0 | 36 |
| ChatGPT web | web | hosted | 10 | 2 | 1 | 29 |
| Codex CLI | cli | local | 19 | 1 | 0 | 22 |
| Codex IDE extension | ide | local | 18 | 1 | 0 | 23 |
| Codex in ChatGPT desktop | desktop | local | 18 | 1 | 0 | 23 |
| Cursor IDE | ide | local | 24 | 0 | 0 | 18 |
| Cursor CLI Agent | cli | local | 18 | 0 | 0 | 24 |
| GitHub Copilot in VS Code | ide | local | 18 | 3 | 0 | 21 |
| GitHub Copilot CLI | cli | local | 8 | 0 | 0 | 34 |
| GitHub Copilot coding agent | cloud-agent | hosted | 8 | 1 | 0 | 33 |
| Kiro IDE | ide | local | 21 | 0 | 0 | 21 |
| Kiro CLI | cli | local | 21 | 0 | 0 | 21 |
| Kiro Web | cloud-agent | hosted | 18 | 0 | 2 | 22 |
| Gemini CLI | cli | local | 18 | 1 | 0 | 23 |
| Zed Agent | ide | local | 6 | 0 | 3 | 33 |
| JetBrains AI Assistant | ide | local | 6 | 3 | 0 | 33 |
| goose Desktop / CLI | desktop-cli | local | 8 | 0 | 0 | 34 |
| OpenCode CLI | cli | local | 8 | 0 | 0 | 34 |

### Representative differences worth preserving

- OpenAI documents different MCP behavior/configuration across ChatGPT web and local Codex surfaces; they should never share one compatibility target. [S-088]
- Cursor documents both open Agent Plugins support and its own plugin/runtime conventions; represent portable core and vendor extensions separately. [S-106] [S-050]
- Kiro publishes a surface-level MCP matrix where local/remote transports differ across IDE/CLI/Web; that is exactly the level of evidence CanMyAgentUse should preserve. [S-124]
- Zed’s current MCP documentation is explicit about implemented primitives rather than claiming every MCP capability; this is a model source for atomic support. [S-136]
- JetBrains integrates multiple embedded/ACP agents whose skills/MCP behavior can differ by agent, so “JetBrains supports X” is often too broad. [S-142]

### Product-page design

A `/harness/[slug]` page should group by surface, then show capability families. Users can switch between “latest documented,” release history and environment profiles. Never roll up to a single percentage score by default.

## Confidence Notes
Mixed because surface-level docs change rapidly; the layered model is high confidence.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-050] Agent Plugins compatible clients — https://agent-plugins.org/clients
- [S-057] Agent Client Protocol architecture — https://agentclientprotocol.com/overview/architecture
- [S-067] A2A protocol specification — https://a2a-protocol.org/latest/specification/
- [S-074] WebMCP Draft Community Group Report — https://webmachinelearning.github.io/webmcp/
- [S-077] AG-UI overview — https://docs.ag-ui.com/
- [S-088] OpenAI MCP support for ChatGPT and Codex — https://learn.chatgpt.com/docs/extend/mcp
- [S-106] Cursor plugins — https://prod.cursor.com/docs/plugins
- [S-124] Kiro MCP support matrix — https://kiro.dev/docs/mcp/
- [S-136] Zed MCP support — https://zed.dev/docs/ai/mcp
- [S-142] JetBrains AI Assistant agents — https://www.jetbrains.com/help/ai-assistant/agents.html
