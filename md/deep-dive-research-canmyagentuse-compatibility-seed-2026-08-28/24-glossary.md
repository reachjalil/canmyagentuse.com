---
title: Compatibility Glossary
file: 24-glossary.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 4
---

# Compatibility Glossary

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The glossary separates vendor, protocol, role, and evidence terms that are commonly collapsed. In particular, MCP client/server, ACP client/agent, Agent Plugins/native plugins, Agent Skills/native skills, registry-listed/tested, and product/surface must remain distinct in data and UI.

## What We Found

| Term | Meaning |
|---|---|
| Vendor | Organization maintaining one or more products |
| Product | Brand/family; navigation object, not compatibility unit |
| Surface | Exact web, desktop, mobile, IDE, CLI, cloud, ACP, or server boundary |
| MCP client | Consumes an MCP server |
| MCP server | Exposes MCP capabilities |
| ACP client/host | Editor or application that hosts an ACP agent |
| ACP agent/server | Coding agent exposed to an ACP client |
| Agent Skills | Vendor-neutral SKILL.md specification [S-004] |
| Agent Plugins | Published portable package containing Skills and MCP config [S-003] |
| Native plugin | Product-specific package; not portable by default |
| Registry-listed | Official inventory evidence for a narrow role/component |
| Documented | First-party docs describe support |
| Tested | Future project-run release-pinned conformance result |
| Partial | Gated, experimental, adapter, mode-specific, or conflicting |
| Unknown | No defensible answer; not unsupported |
| Explicit unsupported | First-party negative or current lifecycle end |

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
