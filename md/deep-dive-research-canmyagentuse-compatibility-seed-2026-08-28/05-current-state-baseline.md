---
title: Current Compatibility Baseline
file: 05-current-state-baseline.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 4
---

# Current Compatibility Baseline

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The market now has two useful official discovery lists but no complete cross-standard conformance matrix. ACP’s registry provides a curated agent catalog, while Agent Plugins lists clients and portable component transports. First-party product docs still provide the only reliable source for surface differences and explicit negatives, leaving many optional protocol features unknown.

## What We Found

### Baseline numbers

- Official ACP Registry agents represented: **39**. [S-001]
- Official Agent Plugins clients represented: **9**. [S-002]
- Product surfaces in this seed: **92**.
- Features modeled: **49**.
- Full cells: **4508**.

### What the registries do well

ACP supplies a current versioned distribution inventory for agents that support authentication. Agent Plugins names portable clients and the Agent Skills/MCP transport components each has adopted. [S-001] [S-002]

### What remains absent

Neither official list establishes exact MCP revision, every primitive, OAuth behavior, MCP Apps, Agent Plugins failure isolation, ACP session methods, A2A roles, plan/admin gates, or hosted surface builds. Those facts require product documentation or tests.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
