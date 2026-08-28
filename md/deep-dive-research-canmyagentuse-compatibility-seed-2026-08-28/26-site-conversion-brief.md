---
title: Astro Conversion Brief
file: 26-site-conversion-brief.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 3
---

# Astro Conversion Brief

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

Build the seed as an Evidence Atlas: static vendor, product, surface, feature, and source pages generated from normalized data, with client-side islands for filtering, comparison, registry views, and evidence drawers. Unknown and evidence method are first-class visual states; the grid must remain accessible without color.

## What We Found

### Data-to-UI mapping

- `vendors.csv` → vendor index and filters;
- `surfaces.csv` → product/surface cards;
- `features.csv` → feature taxonomy;
- `support-assertions.csv` → evidence drawer;
- `compatibility-cells.csv` → matrix and compare;
- `registry-inventory.csv` → registry routes;
- `explicit-non-support.csv` → “known limits” panels;
- `evidence-gaps.csv` → research backlog;
- `test-backlog.csv` → conformance roadmap;
- `source-ledger.csv` → source pages.

### Accessibility

Use text labels (`Y`, `P`, `N`, `?`) plus words; do not use color alone. Every cell’s accessible name should include feature, surface, version, status, method, and verification date. Provide a semantic table/list fallback for virtualized matrices.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

See `21-open-questions.md`.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
