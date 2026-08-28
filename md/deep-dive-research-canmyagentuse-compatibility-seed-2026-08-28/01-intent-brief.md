---
title: Compatibility Seed Intent
file: 01-intent-brief.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 6
---

# Compatibility Seed Intent

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The seed answers a narrow question: for this exact agent surface and observation or release, which protocol roles, primitives, package standards, instruction formats, and native extension features are documented, explicitly absent, constrained, or unknown? It rejects vendor-wide badges because web, CLI, IDE, cloud, mobile, ACP-host, and adapter surfaces routinely differ.

## What We Found

### Reader question

> Can this exact agent surface use this exact capability, under which implementation mode and availability state, and what evidence supports the answer?

### Scope definition

“All vendors” is defined defensibly rather than rhetorically:

1. every agent currently listed in the official ACP Registry; [S-001]
2. every client currently listed by Agent Plugins, with its listed portable components and transports; [S-002]
3. major adjacent harnesses with first-party documentation, including Claude Code, OpenAI surfaces, Zed, JetBrains, Continue, Replit, Warp, OpenHands, and others;
4. an explicit watchlist for products where no current protocol evidence was found.

The seed does not claim that no unlisted vendor exists. It claims completeness for the two named official lists at the cutoff.

### Output contract

The canonical fact is a long-form assertion with surface, feature, environment scope, status, implementation mode, availability, evidence method, confidence, date, source keys, and notes. The wide matrices are generated views.

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
