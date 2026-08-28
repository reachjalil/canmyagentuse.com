---
title: Risks and Unknowns
file: 23-risks-and-unknowns.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 4
---

# Risks and Unknowns

## Reader Promise
Identify the failure modes most likely to damage trust, security or correctness and give concrete mitigations.

## Summary (≤120 words)
The largest risks are epistemic and operational: false greens, stale hosted observations, policy-dependent behavior and unsafe conformance execution. The architecture should optimize for traceability even when that makes the matrix look less complete.

## What We Found
| risk | severity | why it matters | mitigation |
| --- | --- | --- | --- |
| False greens from brand-level claims | critical | A broad “supports MCP/plugins/skills” label can hide unsupported child features. | Atomic feature model; derived parent profiles; evidence required. |
| Hosted surface drift | high | Continuous deployment can invalidate a result without a version change. | Dated observations, freshness windows, source fingerprints and change watchers. |
| Plan/policy ambiguity | high | Support can vary by plan, admin policy, region or preview flag. | Environment qualifiers and explicit unknown/conditional states. |
| Spec revision drift | high | Protocols add/remove/rename capabilities. | Revision-pinned feature definitions and migration history. |
| Vendor/native naming collision | high | Plugin/skill/agent terms can look equivalent while package semantics differ. | Stable canonical IDs + aliases + vendor-extension layer. |
| Test runner supply chain | critical | Skills/plugins/MCP servers can execute code or reach networks. | Static-first tests, sandboxing, no ambient secrets, egress control, artifact signing. |
| Credential exposure | critical | Remote auth tests require OAuth/session credentials. | Dedicated tenants, secret broker, scoped/short-lived credentials, redaction. |
| Licensing/copyright | medium | Copying documentation text or upstream datasets can create obligations. | Author factual assertions; cite links; track licenses and attribution. |
| Community poisoning/SEO spam | medium | Public contributions can be gamed for directory visibility. | Evidence quality gates, maintainer review, no “listed = compatible” shortcut. |
| Governance capture | high | Vendors may pressure maintainers to accept broad green claims. | Transparent evidence types, immutable history, independent tests, conflict disclosure. |
| Unknown treated as no | medium | Users may read blank/gray cells as unsupported. | Explicit “unknown” language and coverage metrics. |
| Aggregate score misuse | medium | A percentage can imply quality or standards conformance. | Avoid default composite scores; show profile definitions and child cells. |

## Confidence Notes
High as design-risk analysis.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-010] Can I Use CC BY 4.0 license — https://github.com/Fyrd/caniuse/blob/main/LICENSE
- [S-034] MCP security best practices — https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
