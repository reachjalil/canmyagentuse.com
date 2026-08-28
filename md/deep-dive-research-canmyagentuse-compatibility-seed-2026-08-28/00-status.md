---
title: Compatibility Seed Status
file: 00-status.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 4
---

# Compatibility Seed Status

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The deep vendor pass is complete for both official registries and includes first-party surface research for the most consequential coding, desktop, web, cloud, and ACP hosts. The output is a documentation-backed seed, not a conformance certification. Unknowns are intentionally numerous because exact MCP revisions, optional primitives, ACP session methods, A2A roles, and hosted build identifiers are often undocumented.

## What We Found

### Completion ledger

| Workstream | State | Result |
|---|---|---|
| ACP Registry inventory | complete | 39/39 current entries represented |
| Agent Plugins clients | complete | 9/9 official clients represented |
| Major vendor surface split | complete | 92 surfaces across 50 vendors |
| Feature taxonomy | complete | 49 role, protocol, packaging, and native features |
| Full compatibility grid | complete | 4508 surface-feature cells |
| Explicit non-support review | complete | 38 sourced negative assertions |
| Test backlog | complete | 15 proposed tests; none executed |
| Archive capture | blocked | Every source carries `[archive-failed: automated archive submission unavailable in this environment]` |

### Coverage tiers

- **A:** detailed first-party, surface-specific documentation.
- **B:** first-party or official registry evidence with material remaining gaps.
- **C:** registry-only; only the listed role/version is promoted.
- **D:** watchlist; reviewed but no current compatibility claim established.

Surface counts by tier: A=62, B=5, C=24, D=1.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

Archive every source, re-query registries before publication, and execute release-pinned tests before labeling any row independently verified.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
