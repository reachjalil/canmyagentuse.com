---
title: Risks and Unknowns
file: 23-risks-and-unknowns.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 7
---

# Risks and Unknowns

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The largest risks are false product-wide claims, registry over-promotion, unsupported inferred from silence, stale hosted observations, version drift, native/portable plugin conflation, and treating documentation as conformance. The full grid intentionally retains thousands of unknown cells so these risks remain visible.

## What We Found

| Risk | Severity | Mitigation |
|---|---:|---|
| Product logo used as a compatibility unit | critical | Require surface ID |
| ACP Registry interpreted as full ACP matrix | high | Promote only agent role/version |
| Agent Plugins list inherited by unsupported surfaces | high | First-party surface override |
| Missing docs interpreted as unsupported | high | Unknown-by-default generation |
| Exact MCP revision assumed from modern docs | high | Separate revision feature and handshake tests |
| Hosted product changes without build ID | high | Observation date, short expiry, vendor manifest |
| Native plugin called Agent Plugins-compatible | high | Separate feature IDs and mode |
| Documentation/runtime mismatch | high | Evidence method plus regression tests |
| A2A support guessed from “multi-agent” marketing | high | Leave A2A unknown without role evidence |
| Discontinued products erased | medium | Historical lifecycle and as-of data |

Current full-grid unknown cells: **3779**. That is an evidence backlog, not a data-quality failure.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-016] Claude Code MCP stale tools issue — https://github.com/anthropics/claude-code/issues/88172
- [S-270] Roo Code shutdown notice — https://roocodeinc.github.io/Roo-Code/
