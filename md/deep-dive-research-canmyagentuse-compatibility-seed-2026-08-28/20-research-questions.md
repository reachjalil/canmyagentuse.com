---
title: Research Questions and Answer State
file: 20-research-questions.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 5
---

# Research Questions and Answer State

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The registry universes, surface taxonomy, status rules, and major explicit negatives are answered. Exact MCP revisions, optional primitives, ACP session methods, A2A roles, hosted build identity, portable-plugin failure isolation, and many registry-only product capabilities remain partially answered or unknown.

## What We Found

### Answered

- Which agents are in the current ACP Registry? Complete import. [S-001]
- Which clients are in the current Agent Plugins list, and which transports are listed? Complete import. [S-002]
- Which product surfaces must be split? Documented for major vendors.
- Which explicit non-support statements are material? Captured in `explicit-non-support.csv`.
- How should registry claims be promoted? Narrowly, with `registry-listed` evidence.

### Partially answered

- Exact MCP revision for most clients.
- Full resources/prompts/roots/sampling/elicitation/tasks/Apps coverage.
- ACP session load/list and terminal reverse RPC across registry agents.
- Agent Plugins failure isolation across all nine clients.
- Hosted cloud build identifiers and release dates.

### Unanswered

- A2A client/server adoption across the surveyed harnesses.
- Independent conformance pass rates.
- Complete plan, region, organization-policy, and model-provider matrices.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-006] A2A Protocol latest specification — https://a2a-protocol.org/latest/specification/
