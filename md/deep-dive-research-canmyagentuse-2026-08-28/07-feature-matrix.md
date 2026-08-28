---
title: Feature Matrix and Taxonomy
file: 07-feature-matrix.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: mixed
sources_count: 9
---

# Feature Matrix and Taxonomy

## Reader Promise
Show the initial compatibility taxonomy, support-token semantics, aggregation rules and exactly how the seed matrix should be treated.

## Summary (≤120 words)
The seed matrix contains 840 rows: 20 surfaces × 42 primary atomic capabilities. The broader taxonomy has 56 entries. Unknown is intentionally the most conservative fallback. Parent labels such as “MCP Core Client” should be computed from children rather than manually asserted.

## What We Found
### Taxonomy by family

| family | features | examples |
| --- | --- | --- |
| A2A | 1 | a2a |
| A2UI | 1 | a2ui |
| ACP | 2 | acp.client, acp.agent |
| AG-UI | 1 | ag-ui |
| AGENTS.md | 2 | instructions.agents-md, instructions.agents-md-nested |
| AHP | 2 | ahp.client, ahp.host |
| Agent Plugins | 3 | plugins.v1, plugins.skills, plugins.mcp |
| Agent Skills | 7 | skills.discovery, skills.progressive, skills.scripts, skills.references-assets, skills.manual-invoke, skills.project-scope, skills.user-scope |
| CanMyAgentUse | 1 | vendor-attestation |
| Distribution | 1 | agent-marketplace |
| Governance | 1 | workspace-policy |
| MCP | 19 | mcp.tools, mcp.resources, mcp.prompts, mcp.sampling, mcp.elicitation, mcp.roots, mcp.tasks, mcp.stdio … |
| MCP Apps | 1 | mcp.apps |
| MCP Registry | 1 | mcp.registry |
| NLWeb | 1 | nlweb |
| Open JSON UI | 1 | open-json-ui |
| Packaging | 2 | plugins.marketplace, plugins.vendor-ext |
| Runtime | 1 | session-portability |
| Vendor convention | 7 | instructions.claude-md, instructions.vendor-rules, hooks, subagents, custom-agents, permissions, headless |
| WebMCP | 1 | webmcp |

### Seed support distribution

| token | count | meaning |
| --- | --- | --- |
| y | 283 | Evidence supports this atomic capability for the exact target and qualifiers. |
| a | 13 | Some behavior works, but scope, preview status, plan, policy, transport, role, or revision limits full support. |
| n | 6 | Evidence explicitly shows absence or incompatibility for the target. |
| u | 538 | No sufficiently specific evidence was captured; never infer support from brand-level marketing. |

### Atomicity rules

A feature is atomic enough when one implementation can plausibly support it while not supporting a sibling. Examples:

- MCP Tools is separate from Resources, Prompts, Sampling, Elicitation and Roots. [S-025] [S-026] [S-027] [S-028] [S-029] [S-030]
- stdio is separate from Streamable HTTP. [S-023]
- Agent Skills discovery is separate from script execution and scope semantics. [S-043] [S-044]
- Agent Plugins manifest conformance is separate from marketplace installation and host-specific extensions. [S-049] [S-053]
- ACP client/editor role is separate from ACP agent role. [S-057]

### Proposed parent profiles

| profile | required children | display rule |
| --- | --- | --- |
| MCP Tools Client | initialize + tools list/call | green only if the target can actually connect using at least one supported transport |
| MCP Core Server Features | tools + resources + prompts | do not imply sampling/elicitation/roots |
| MCP Full Client | selected server primitives + selected client primitives + transport/auth profile | revision-specific; likely partial for many hosts |
| Agent Skills Core | valid discovery + metadata/progressive load | scripts are optional child, not silently required |
| Agent Plugins 1.0 | manifest + declared portable components parsed according to spec | marketplace and hooks remain separate |
| ACP Client | editor/client-side protocol role | must name transport/revision |
| ACP Agent | agent-side protocol role | must name transport/revision |

### Data use warning

`data/feature-matrix.csv` is a **research seed**. It is useful for schema/UI development and source follow-up. It is not the launch database until individual cells pass the publication review workflow described in `12-developer-experience.md`.

## Confidence Notes
Mixed. Taxonomy design is high confidence; cell-level support varies with source granularity and product freshness.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-023] MCP transports — https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- [S-025] MCP tools — https://modelcontextprotocol.io/specification/2025-11-25/server/tools
- [S-026] MCP resources — https://modelcontextprotocol.io/specification/2025-11-25/server/resources
- [S-027] MCP prompts — https://modelcontextprotocol.io/specification/2025-11-25/server/prompts
- [S-028] MCP sampling — https://modelcontextprotocol.io/specification/2025-11-25/client/sampling
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-057] Agent Client Protocol architecture — https://agentclientprotocol.com/overview/architecture
