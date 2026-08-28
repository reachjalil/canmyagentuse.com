---
title: Standards and Registry Anatomy
file: 06-headless-announcement-anatomy.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 6
---

# Standards and Registry Anatomy

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The compatibility ecosystem is layered: MCP defines model-to-tool/context communication, Agent Skills defines reusable instruction packages, Agent Plugins packages Skills and MCP configuration, ACP connects editors to coding agents, and A2A connects agents. Official registry membership at one layer must never be promoted into support at another.

## What We Found

### Layer rules

| Layer | Proves | Does not prove |
|---|---|---|
| MCP client | Can consume at least some MCP server capability | Every primitive, exact revision, OAuth, Apps, or server role |
| MCP server | Exposes some MCP capability | Client support |
| Agent Skills | Loads SKILL.md packages | Plugin packaging, scripts, or identical activation semantics |
| Agent Plugins | Loads portable Skills/MCP package components | Native hooks, agents, commands, or MCP wire conformance |
| ACP agent | Can be hosted by an ACP client | ACP client role, MCP support, or optional session methods |
| ACP client | Hosts an ACP agent | The hosted agent’s native tools, models, or permissions |
| A2A | Agent-to-agent task protocol | Editor integration or MCP support |

Agent Plugins v1.0.0 defines exactly two portable component families—Skills and MCP servers—and explicitly allows incremental client adoption. [S-002] [S-003] ACP’s registry is a curated distribution list, not a detailed optional-capability matrix. [S-001]

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
