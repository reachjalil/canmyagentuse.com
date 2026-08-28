---
title: Source Inventory and Promotion Rules
file: 02-source-inventory.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 6
---

# Source Inventory and Promotion Rules

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

Primary specifications, official registries, first-party product documentation, release notes, and narrowly scoped issue reports form the evidence base. An official directory row is useful discovery evidence but never proof of every primitive. Product documentation can establish intended behavior, while a release-pinned conformance run is still needed for independent verification.

## What We Found

### Source inventory

The package contains 183 source records in `raw/source-ledger.csv`. Every row includes a live URL, publisher, source type, role, confidence, retrieval timestamp, and explicit archive failure.

### Promotion rules

| Evidence | Allowed claim |
|---|---|
| Normative specification | Defines a feature or conformance requirement; never proves a vendor implements it |
| ACP Registry | ACP agent role and registry version only |
| Agent Plugins client list | Portable components and listed MCP transports only |
| First-party surface docs | `documented` support or explicit non-support for the named surface |
| First-party release note | Release-specific availability, migration, or lifecycle |
| Reproducible issue | `reported` incident or contradiction, scoped to its build and payload |
| Project-run conformance test | Future `tested` status for that exact release/profile |

### Negative-claim rule

Missing documentation becomes `unknown`. An `unsupported` assertion requires an explicit negative statement, an explicit capability table, a lifecycle end, or a reviewed conformance result. This rule prevents the matrix from punishing projects merely for incomplete docs.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

Create immutable archive snapshots and attach exact section locators or test artifacts to each assertion before public launch.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-016] Claude Code MCP stale tools issue — https://github.com/anthropics/claude-code/issues/88172
