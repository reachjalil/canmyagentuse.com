---
title: Prioritized Open Questions
file: 21-open-questions.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 6
---

# Prioritized Open Questions

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The highest-priority gaps are exact MCP revision negotiation, optional primitive coverage, portable plugin failure isolation, ACP optional methods, and stable hosted release identity. These gaps should become vendor questionnaires and release-pinned tests before the public matrix presents parent-level protocol support.

## What We Found

### P0

1. What exact MCP revision does each Tier A surface negotiate today?
2. What required-child profile defines “MCP Core,” “MCP Tools,” and “MCP Full Client”?
3. Do all 9 official Agent Plugins clients implement path containment and failure isolation?
4. Which of the 39 ACP agents support session load, session list, terminal reverse RPC, elicitation, and MCP forwarding?
5. Can hosted products expose a stable build identifier?

### P1

- Which clients support resources, prompts, roots, sampling, elicitation, tasks, and Apps?
- Which native “skills” are fully Agent Skills-compatible versus similar product formats?
- Which native plugins can import/export Agent Plugins without semantic loss?
- Which organization policies or plans disable otherwise documented support?

### P2

- Which surveyed vendors implement A2A client or server roles?
- How should probabilistic skill activation be reported?
- Which discontinued/historical releases should be imported first?

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-006] A2A Protocol latest specification — https://a2a-protocol.org/latest/specification/
