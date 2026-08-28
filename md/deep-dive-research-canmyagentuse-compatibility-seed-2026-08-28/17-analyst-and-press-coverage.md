---
title: External Coverage Boundaries
file: 17-analyst-and-press-coverage.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 3
---

# External Coverage Boundaries

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

This compatibility pass prioritizes specifications, official registries, product documentation, release notes, and reproducible issue reports over analyst or promotional coverage. External press may later help prioritize adoption, but it should not determine support cells. The current package therefore records no analyst-derived compatibility assertion.

## What We Found

### Why external coverage is secondary here

Compatibility claims are technical and surface-specific. A press statement that a product “supports MCP,” “works with ACP,” or “has plugins” rarely establishes role, revision, transports, primitives, availability, or plan gates. Those details came from first-party references in this pass.

### Future use

Analyst and practitioner coverage can support:

- prioritization of which unknowns matter most;
- lifecycle and adoption context;
- discovery of undocumented bugs;
- enterprise procurement concerns.

It cannot replace normative or first-party evidence for a cell.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
