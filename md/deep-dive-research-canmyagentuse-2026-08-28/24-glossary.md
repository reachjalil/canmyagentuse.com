---
title: Glossary
file: 24-glossary.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 7
---

# Glossary

## Reader Promise
Give product, design and engineering one shared vocabulary so vendor terms do not silently become false equivalences.

## Summary (≤120 words)
The glossary separates protocol roles, packaging, runtime surfaces and evidence concepts. It is intentionally plain-English and should power tooltip definitions in the future site.

## What We Found
| term | plain-English meaning | closest analogue |
| --- | --- | --- |
| Assertion | A support judgment for one feature revision × target × environment tuple. | Compatibility statement |
| Target | Versioned or observed instance of a harness surface. | Browser-version analogue |
| Surface | Distinct execution/product boundary such as CLI, IDE, web, desktop or cloud agent. | Agent-specific concept |
| Hosted observation | Timestamped compatibility target used when no stable public build ID exists. | Observation record |
| Environment profile | Plan/policy/region/runtime/auth conditions that can change support. | Test/config profile |
| Evidence type | Classification such as documented, tested, vendor-attested, reported or inferred. | Provenance class |
| MCP | Protocol for exchanging tools/context and related primitives between hosts/clients and servers. | Agent↔tools/context protocol |
| MCP Apps | MCP extension for interactive UI resources rendered by hosts. | MCP UI extension |
| Agent Skill | Portable directory centered on SKILL.md with reusable instructions and optional resources/scripts. | Reusable instruction/capability bundle |
| Agent Plugin | Package manifest that can compose portable agent components plus vendor extensions. | Distribution/package layer |
| ACP | Protocol connecting coding agents and editor/client hosts. | Editor↔agent protocol |
| AHP | Agent Host Protocol for persistent/shared agent sessions in the VS Code ecosystem. | Session host protocol |
| A2A | Agent2Agent protocol for agent-to-agent discovery/tasks/artifacts. | Agent↔agent protocol |
| AG-UI | Event protocol connecting agent backends to interactive applications. | Agent↔UI event layer |
| A2UI | Streaming representation for generative user interfaces. | Generative UI protocol |
| WebMCP | Web API/specification work for sites exposing tools to agents. | Website↔agent tool layer |
| NLWeb | Natural-language web interface approach that can expose web capabilities via MCP-oriented interfaces. | Semantic web/agent layer |
| AGENTS.md | Repository instruction convention consumed by multiple coding agents with host-specific discovery rules. | Workspace instruction file |
| Transport | Communication carrier such as stdio or Streamable HTTP. | Protocol transport |
| Role | Direction such as MCP client/server or ACP client/agent. | Protocol endpoint role |
| Qualifier | Structured condition that narrows a support claim. | Compatibility condition |
| Partial support | Capability works only under documented limits or incomplete semantics. | Token `a` |
| Unknown | Insufficient specific evidence for a support judgment. | Token `u` |
| Parent profile | Named collection of child capabilities with a deterministic aggregation rule. | Derived compatibility label |
| Conformance test | Deterministic test mapped to a normative capability. | Executable evidence generator |
| Vendor attestation | Compatibility statement made by a vendor or standards-project client list. | Evidence class, not independent test |
| Contradiction | Two credible evidence records whose scopes/claims cannot both be treated as the same assertion. | Evidence conflict |
| Freshness window | How long evidence remains current before re-checking. | Operational policy |
| Vendor extension | Non-portable host-specific behavior or namespaced configuration. | Prefix/extension analogue |
| Registry | Discovery/index service listing servers, agents, plugins or integrations. | Existence/listing service, not automatically conformance |

## Confidence Notes
High; definitions are concise project translations rather than copied normative text.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-056] Agent Client Protocol overview — https://agentclientprotocol.com/overview/introduction
- [S-067] A2A protocol specification — https://a2a-protocol.org/latest/specification/
- [S-074] WebMCP Draft Community Group Report — https://webmachinelearning.github.io/webmcp/
- [S-077] AG-UI overview — https://docs.ag-ui.com/
