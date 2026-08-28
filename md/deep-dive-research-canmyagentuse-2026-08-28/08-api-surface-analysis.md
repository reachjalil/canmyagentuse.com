---
title: Specification Surface Analysis
file: 08-api-surface-analysis.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 19
---

# Specification Surface Analysis

## Reader Promise
Give maintainers a source-of-truth map for each major agent specification/convention and show which structural fields must be normalized.

## Summary (≤120 words)
There is no single “AI agent specification stack.” The ecosystem is layered: MCP handles agent-to-tool/context exchange; Agent Skills packages reusable instructions/assets; Agent Plugins packages components; ACP connects editors to coding agents; AHP manages persistent agent sessions; A2A handles agent-to-agent work; WebMCP/NLWeb expose web capabilities; AG-UI/A2UI address user-interface streams. CanMyAgentUse should model these as separate families with explicit authority and maturity.

## What We Found
### Specification families

| id | name | authority | revision | maturity | structure |
| --- | --- | --- | --- | --- | --- |
| mcp | Model Context Protocol | MCP project / AAIF ecosystem | 2025-11-25 | published | JSON-RPC + normative prose + TypeScript schema |
| mcp-apps | MCP Apps | MCP project | 2026-01-26 | stable extension | MCP extension + ui:// resource + sandboxed iframe |
| agent-skills | Agent Skills | Agent Skills maintainers | living | open standard | SKILL.md + YAML frontmatter + directory conventions |
| agent-plugins | Agent Plugins | cross-vendor TSC | 1.0.0 | stable | closed JSON manifest + optional skills/mcp + vendor namespaces |
| acp | Agent Client Protocol | ACP/Zed ecosystem | living | active | JSON-RPC; local stdio mature, remote transport evolving |
| ahp | Agent Host Protocol | Microsoft | 0.5.x | preview | session host/client protocol |
| a2a | Agent2Agent Protocol | Linux Foundation project | 1.0.x | stable family | Agent Cards + Tasks + artifacts + streaming + bindings |
| agents-md | AGENTS.md | community convention | living | convention | Markdown instruction file with host-specific discovery/precedence |
| webmcp | WebMCP | W3C Web Machine Learning CG | 2026-08-26 draft | draft community group report | web API + HTML/JS tool exposure + WPT |
| ag-ui | AG-UI | AG-UI community | living | open protocol | event-based bidirectional agent/user interaction |
| a2ui | A2UI | A2UI project | 0.9.1 stable / 1.0 candidate | mixed | streaming JSON UI schema |
| nlweb | NLWeb | NLWeb community | 0.5 TypeSpec | early | natural-language web endpoints + Schema.org + MCP |

### MCP

The 2025-11-25 MCP specification uses JSON-RPC and capability negotiation. Its server-facing features include resources, prompts and tools; client-facing features include sampling, roots and elicitation; utilities include tasks and other protocol mechanisms. Transports include stdio and Streamable HTTP. This split should become the canonical MCP tree in CanMyAgentUse. [S-020] [S-022] [S-023] [S-031]

### Agent Skills

The portable unit is a directory with a required `SKILL.md`, YAML frontmatter, and optional scripts/references/assets. The design intentionally supports progressive disclosure. Compatibility therefore needs separate rows for discovery, loading, scripts and scope—not only “reads SKILL.md.” [S-043] [S-044]

### Agent Plugins

Agent Plugins 1.0 defines a root `plugin.json`, portable optional components such as skills and MCP configuration, plus namespaced vendor extensions. Installation UX and trust prompts are host concerns. Store the manifest revision independently from vendor-native package formats. [S-049] [S-052] [S-053]

### ACP and AHP

ACP is primarily an editor/client ↔ coding-agent protocol, commonly JSON-RPC over local stdio; remote transport work is evolving. AHP is a newer Microsoft/VS Code host/session layer designed around persistent agent sessions. These should not be collapsed under “agent protocol.” [S-057] [S-065] [S-116]

### A2A

A2A addresses agent-to-agent interoperability with Agent Cards, tasks, parts/artifacts, streaming/push and multiple bindings. It operates at a different relationship boundary from MCP. [S-067] [S-069]

### UI and web-facing layers

WebMCP exposes web-page capabilities to agents; NLWeb makes web content/actions addressable through natural-language/MCP-oriented interfaces; AG-UI defines an event bridge between agent backends and interactive frontends; A2UI defines a streaming representation for generative UI. [S-074] [S-084] [S-077] [S-082]

### Normalized spec fields

`spec_id`, `authority`, `canonical_url`, `license`, `revision_id`, `published_at`, `maturity`, `normative_status`, `roles`, `transports`, `feature_tree`, `conformance_links`, `registry_links`, `supersedes`, `source_fingerprint`.

## Confidence Notes
High on the documented structures; maturity labels for fast-moving projects should be refreshed before publication.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-020] MCP architecture and overview — https://modelcontextprotocol.io/specification/2025-11-25/architecture
- [S-022] MCP lifecycle and capability negotiation — https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
- [S-023] MCP transports — https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- [S-031] MCP tasks — https://modelcontextprotocol.io/specification/2025-11-25/basic/utilities/tasks
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-044] Integrate Agent Skills into an agent — https://agentskills.io/integrate-skills
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-052] Agent Plugins MCP configuration — https://agent-plugins.org/specification/1.0/mcp
- [S-053] Agent Plugins extension namespaces — https://agent-plugins.org/specification/1.0/extensions
- [S-057] Agent Client Protocol architecture — https://agentclientprotocol.com/overview/architecture
- [S-065] ACP remote transport work — https://github.com/agentclientprotocol/agent-client-protocol/discussions
- [S-067] A2A protocol specification — https://a2a-protocol.org/latest/specification/
- [S-069] A2A protocol bindings — https://a2a-protocol.org/latest/specification/#protocol-bindings
- [S-074] WebMCP Draft Community Group Report — https://webmachinelearning.github.io/webmcp/
- [S-077] AG-UI overview — https://docs.ag-ui.com/
- [S-082] A2UI v0.9 stable specification — https://a2ui.org/specification/v0.9-a2ui/
- [S-084] NLWeb reference implementation — https://github.com/nlweb-ai/NLWeb
- [S-116] VS Code Agent Host architecture — https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture
