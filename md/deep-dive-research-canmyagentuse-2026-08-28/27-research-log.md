---
title: Research Log
file: 27-research-log.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 7
---

# Research Log

## Reader Promise
Let another researcher retrace the research path, major query themes, decisions and known dead ends.

## Summary (≤120 words)
The research used a source lattice: normative specification → first-party product docs → repositories/changelogs → registries/compatibility lists → practitioner signals. The main dead end was attempting to treat brand-level support pages as sufficient evidence; that repeatedly failed because surfaces and primitives differ.

## What We Found
| workstream | what was inspected | decision/result |
| --- | --- | --- |
| Can I Use architecture | Reviewed repository, contribution schema, feature records, full exports, usage/grid presentation and licensing. | Established compact token + evidence-rich backing model. |
| MDN BCD | Reviewed schema/governance/types/license. | Adopted hierarchical features and multi-statement compatibility inspiration. |
| MCP | Reviewed 2025-11-25 architecture, lifecycle, transports, auth, tools/resources/prompts, sampling/elicitation/roots/tasks and Apps. | Decomposed MCP into atomic rows. |
| Agent Skills | Reviewed specification, integration guidance, repository/examples. | Separated discovery/progressive loading/scripts/assets/scopes. |
| Agent Plugins | Reviewed 1.0 manifest, MCP component, extensions and compatible-client list. | Separated portable core from host-specific install/hooks/extensions. |
| ACP/AHP/A2A | Reviewed protocol/registry/host docs and current evolution. | Modeled role direction and protocol families separately. |
| Web/UI protocols | Reviewed WebMCP, NLWeb, AG-UI and A2UI sources. | Added web and UI layers outside MCP core. |
| Harness docs | Reviewed OpenAI, Anthropic, Cursor, VS Code/Copilot, Kiro, Gemini, Zed, JetBrains, goose, OpenCode docs. | Defined 20 target surfaces and conservative seed assertions. |
| Community | Reviewed Reddit, HN and Cursor forum signals. | Used only to identify friction/contradictions, not definitive support. |
| Packaging | Generated CSV/JSON, reports, diagrams, validation and checksums. | Created reproducible development handoff. |

### Query lattice used

Representative patterns:

- `<protocol> specification current revision capabilities`
- `<protocol> transport auth client server roles`
- `<vendor> <surface> MCP tools resources prompts sampling`
- `<vendor> Agent Skills SKILL.md`
- `<vendor> Agent Plugins plugin.json`
- `<vendor> AGENTS.md rules hooks subagents`
- `<vendor> ACP agent editor`
- `site:github.com <project> changelog release protocol`
- `site:reddit.com MCP agent compatibility`
- `site:news.ycombinator.com ACP MCP`

### Dead ends and repairs

- **Brand-only support:** repaired by creating surface targets.
- **One MCP row:** repaired by deriving an atomic feature tree from the spec.
- **“Compatible client” as conformance:** repaired by evidence-type separation.
- **Browser version assumption:** repaired by hosted observations.
- **Market-share analogue:** deliberately omitted because no defensible cross-harness usage dataset was established.
- **Archive snapshots:** unavailable in execution environment; marked failed explicitly.
- **Runtime testing:** deliberately not performed; test design included instead.

## Confidence Notes
High as an internal reproducibility log.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-056] Agent Client Protocol overview — https://agentclientprotocol.com/overview/introduction
- [S-067] A2A protocol specification — https://a2a-protocol.org/latest/specification/
