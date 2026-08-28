---
title: Research Questions
file: 20-research-questions.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 6
---

# Research Questions

## Reader Promise
Show which questions were answered, partially answered or remain open so the dev team can distinguish settled design from unresolved governance.

## Summary (≤120 words)
The research answers the core architecture and taxonomy questions. The largest unresolved areas are hosted-release identity, profile governance, legal/security boundaries for automated testing, and the authority conveyed by a verification badge.

## What We Found
| id | question | status | answer | source |
| --- | --- | --- | --- | --- |
| RQ-001 | How is Can I Use structured? | answered | Feature files, compact tokens, notes, versions, full export, contribution/validation workflow. | S-002 |
| RQ-002 | How should browser versions map to agents? | answered | Use surface targets: release/build or dated hosted observation, plus environment profile. | S-012 |
| RQ-003 | Can MCP be one compatibility row? | answered | No. The specification exposes independent server/client features, transports and utilities. | S-019 |
| RQ-004 | How are Agent Skills structured? | answered | SKILL.md + frontmatter and optional scripts/references/assets; progressive loading is core design. | S-043 |
| RQ-005 | How are Agent Plugins structured? | answered | plugin.json with portable components and namespaced vendor extensions; host install/trust remains separate. | S-049 |
| RQ-006 | What other interop layers matter? | answered | ACP, AHP, A2A, WebMCP, AG-UI, A2UI, NLWeb and host conventions. | S-056 |
| RQ-007 | Can we provide verified support today? | partially-answered | Documentation evidence yes; runtime certification no, because no host/client execution was performed. |  |
| RQ-008 | How should hosted surfaces be versioned? | partially-answered | Use dated observations/fingerprints pending stronger vendor release identity. |  |
| RQ-009 | Who owns parent-profile definitions? | unanswered | Requires project governance and ideally protocol-maintainer review. |  |
| RQ-010 | How safe is automated testing? | partially-answered | Architecture defined; credential/legal/host policy review needed before executing third-party clients. |  |

## Confidence Notes
High as a research-status ledger.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-056] Agent Client Protocol overview — https://agentclientprotocol.com/overview/introduction
