---
title: Audience and Compatibility Thesis
file: 03-audience-and-thesis.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 7
---

# Audience and Compatibility Thesis

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The primary reader is a builder or architect deciding whether an integration will work across one or more harness surfaces. The secondary reader is a skeptical evaluator auditing the claim. The site should therefore optimize for precise scope, visible unknowns, explicit negatives, revision awareness, and evidence inspection rather than a visually complete green grid.

## What We Found

### Primary audience

Builders need primitive-level answers before selecting adapters, packaging workflows, or promising cross-harness portability. Their success moment is being able to choose a supported surface or identify the exact missing requirement before implementation.

### Secondary audience

Evaluators need to distinguish native, adapter, wrapper, registry-listed, preview, mode-specific, plan-gated, and discontinued behavior.

### Thesis

- A product logo is not a compatibility unit.
- A registry role is not a complete capability profile.
- “MCP supported” must be decomposed into role, revision, transports, primitives, authorization, and extensions.
- Portable Agent Plugins and native plugin systems are separate rows.
- ACP client and ACP agent are opposite roles.
- Unknown is a valuable research result.
- Explicit non-support deserves the same visibility as support.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-021] ChatGPT and Codex MCP — https://learn.chatgpt.com/docs/extend/mcp
- [S-060] Zed MCP — https://zed.dev/docs/ai/mcp
- [S-061] Zed External Agents — https://zed.dev/docs/ai/external-agents
