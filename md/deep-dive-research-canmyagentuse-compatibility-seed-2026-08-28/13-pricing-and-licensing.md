---
title: Access Gates, Pricing, and Licensing
file: 13-pricing-and-licensing.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: medium
sources_count: 13
---

# Access Gates, Pricing, and Licensing

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

This seed records plan, administrator, preview, hosted, and lifecycle gates when they change availability, but it does not estimate vendor prices. Agent Plugins and Agent Skills specifications are open standards; native marketplaces, cloud agents, enterprise policy controls, and hosted connectors remain vendor products with separate commercial terms.

## What We Found

### Access gates captured as compatibility qualifiers

- Cursor team marketplaces and some Cloud Agent hooks are plan/admin dependent. [S-030] [S-035]
- GitHub hosted agents and enterprise controls are organization-policy dependent. [S-043] [S-045]
- Kiro Mobile is preview and surface capabilities differ. [S-080] [S-081]
- Cascade MCP can require enterprise enablement. [S-121]
- Replit connectors can depend on plan, while MCP and Skills are distinct extension paths. [S-250] [S-252]
- Warp local custom inference behavior does not automatically carry to cloud runs. [S-263] [S-264]

### Licensing boundary

Preserve per-source attribution. Publish original compatibility data under an open data license only after legal review; do not relicense vendor documentation or registry content without observing their terms.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-030] Cursor Plugins — https://cursor.com/docs/plugins
- [S-035] Cursor Cloud Agents — https://cursor.com/docs/cloud-agent
- [S-043] GitHub Copilot cloud agent — https://docs.github.com/copilot/concepts/agents/cloud-agent/about-cloud-agent
- [S-045] GitHub Copilot enterprise agent management — https://docs.github.com/copilot/concepts/agents/enterprise-management
- [S-080] Kiro Agent Skills — https://kiro.dev/docs/skills/
- [S-081] Kiro Hooks — https://kiro.dev/docs/hooks/
- [S-121] Cascade MCP — https://docs.devin.ai/desktop/cascade/mcp
- [S-250] Replit Agent — https://docs.replit.com/features/agent/overview
- [S-252] Replit MCP list — https://docs.replit.com/features/mcp/overview
- [S-263] Warp Cloud Agents — https://docs.warp.dev/platform/
- [S-264] Warp Agent cloud harness — https://docs.warp.dev/platform/harnesses/warp-agent/
