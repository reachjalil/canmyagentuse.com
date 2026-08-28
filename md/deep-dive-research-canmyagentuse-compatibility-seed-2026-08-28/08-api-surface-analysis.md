---
title: Compatibility API Surface
file: 08-api-surface-analysis.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 2
---

# Compatibility API Surface

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The expanded seed is designed for long-form filtering rather than a static wide table. The API should query vendors, products, surfaces, features, assertions, sources, registry records, gaps, and tests, while preserving environment scope, evidence method, confidence, availability, version observation, and historical state.

## What We Found

### Minimum read endpoints

```text
GET /v1/vendors
GET /v1/vendors/:id
GET /v1/surfaces/:id
GET /v1/features
GET /v1/compatibility?surface=&feature=&status=&method=&tier=
GET /v1/compare?surface=<repeated>&features=<repeated>
GET /v1/registries
GET /v1/sources/:id
GET /v1/evidence-gaps
GET /v1/tests
```

### Response requirements

Each cell returns primary status, full scoped assertions, version/observation, surface lifecycle, evidence method, source keys, last verification, qualifier, and notes. A registry-listed cell cannot be serialized as independently verified. A product-wide response must retain child surfaces rather than flatten them.

### Data artifacts

- `compatibility-seed.json` — complete normalized bundle;
- `compatibility-cells.csv` — full grid;
- `support-assertions.csv` — canonical sourced claims;
- `registry-inventory.csv` — official registry imports;
- `summary-by-vendor.csv` — coverage diagnostics.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
