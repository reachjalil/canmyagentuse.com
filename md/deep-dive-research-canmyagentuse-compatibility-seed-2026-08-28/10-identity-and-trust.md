---
title: Evidence Trust and Vendor Attestation
file: 10-identity-and-trust.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 4
---

# Evidence Trust and Vendor Attestation

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

Registry, vendor documentation, issue reports, and future conformance results answer different questions. The site should expose the evidence method on every cell, require explicit evidence for unsupported, and keep vendor-attested claims visibly distinct from project-run tests. Version drift and adapter paths must remain inspectable.

## What We Found

### Evidence methods

- `documented` — first-party surface documentation;
- `release-noted` — named release or dated rollout;
- `registry-listed` — official registry role/component only;
- `reported` — scoped issue or practitioner reproduction;
- `tested` — future project-run conformance test;
- `vendor-attested` — future signed vendor claim;
- `inferred` — analysis that must remain labeled and cannot create a verified badge.

### Trust gates

1. Non-unknown cells require source keys.
2. Unsupported cannot use inference alone.
3. Registry entries never populate unrelated standards.
4. Product-family docs do not automatically populate every surface.
5. Adapter/wrapper support is labeled separately from native support.
6. Stale registry versions create a drift warning, not silent replacement.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-016] Claude Code MCP stale tools issue — https://github.com/anthropics/claude-code/issues/88172
