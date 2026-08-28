---
title: Compatibility Routes
file: 25-route-system-proposal.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 2
---

# Compatibility Routes

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The site should expose vendor, product, surface, feature, registry, evidence, test, contradiction, and version-drift routes. Product pages group surfaces; only surface pages and filtered comparisons make compatibility claims. Every non-unknown cell links to source and assertion detail.

## What We Found

```text
/vendors
/vendor/:vendor
/product/:product
/surface/:surface
/features
/feature/:feature
/matrix
/compare
/registries/acp
/registries/agent-plugins
/sources
/source/:key
/gaps
/tests
/contradictions
/timeline
/methodology
/downloads
```

Surface pages should lead with version/observation, lifecycle, tier, supported/partial/unsupported counts, high-priority unknowns, registry roles, and evidence. Product pages must visibly state that child surfaces differ.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
