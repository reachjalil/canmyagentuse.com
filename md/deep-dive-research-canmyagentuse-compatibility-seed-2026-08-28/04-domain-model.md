---
title: Compatibility Domain Model
file: 04-domain-model.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 4
---

# Compatibility Domain Model

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The seed separates vendors, products, surfaces, features, assertions, sources, registry entries, and derived cells. The natural assertion key includes surface, feature, and environment scope. Derived cells aggregate multiple scoped assertions without discarding a plan gate, preview state, adapter path, or contradiction.

## What We Found

### Core entities

```text
vendor → product → surface
specification → feature
surface + feature + environment_scope → support assertion
support assertion ↔ source evidence
assertions → derived compatibility cell → matrix/API/page
```

### Why surfaces matter

ChatGPT web uses remote plugin-backed MCP tools while local Codex hosts use direct MCP configuration; the Codex IDE extension supports direct MCP and standalone skills but explicitly lacks plugins. [S-020] [S-021] Zed’s native Agent is an MCP client with a limited primitive set, while Zed’s external-agent surface is an ACP host whose agent process owns much of the model/tool configuration. [S-060] [S-061]

### Cell roll-up

- all scoped assertions supported → supported;
- supported plus unsupported profiles, or any partial profile → partial;
- all explicit negative assertions → unsupported;
- no defensible assertion → unknown.

`support-assertions.csv` is canonical. `compatibility-cells.csv` and the compact matrix are projections.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-020] ChatGPT and Codex Plugins — https://learn.chatgpt.com/docs/plugins
- [S-021] ChatGPT and Codex MCP — https://learn.chatgpt.com/docs/extend/mcp
- [S-060] Zed MCP — https://zed.dev/docs/ai/mcp
- [S-061] Zed External Agents — https://zed.dev/docs/ai/external-agents
