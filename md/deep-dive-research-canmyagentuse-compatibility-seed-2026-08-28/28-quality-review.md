---
title: Compatibility Seed Quality Review
file: 28-quality-review.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:48:01Z
confidence: high
sources_count: 7
---

# Compatibility Seed Quality Review

## Reader Promise

After reading this file, a development team can understand the compatibility decision it covers, audit the supporting evidence, and distinguish a documented surface capability from an unsupported or still-unknown claim.

## Summary

The expanded seed is implementation-ready for a documentation-backed compatibility MVP and complete for the official ACP Registry and Agent Plugins client list at the cutoff. It is not a certification. Runtime execution, immutable archives, vendor review, release-pinned build identity, and independent conformance testing remain required before the site labels a capability independently verified.

## What We Found

### Scope confirmation

This pass is complete for the two official discovery universes used as its inclusion boundary:

- **ACP Registry:** 39 current agent entries represented. [S-001]
- **Agent Plugins compatible clients:** 9 current clients represented. [S-002]

The package also includes deeper surface-specific research for major vendors outside or beyond those registry claims. It does not claim to enumerate every agent product on the market.

### Quantitative checks

| Object | Count |
|---|---:|
| Vendors | 50 |
| Products | 59 |
| Surfaces | 92 |
| Features | 49 |
| Long-form assertions | 825 |
| Full compatibility cells | 4508 |
| Supported cells | 670 |
| Partial cells | 21 |
| Explicit unsupported cells | 38 |
| Unknown cells | 3779 |
| Source records | 149 |
| Proposed tests | 15 |

### Quality-bar checklist

- Audience is locked to Builder / Architect with Evaluator / Skeptic secondary.
- Every numbered file has front matter, a reader promise, summary, confidence notes, open threads, and a source list.
- Every non-unknown assertion includes one or more source keys.
- Every source key resolves in the source ledger.
- Every source row includes a retrieval timestamp and either an archive URL or an explicit archive-failed marker.
- Specifications, product documentation, registry evidence, release notes, and runtime issue reports remain visibly distinct.
- Portable Agent Plugins support is not conflated with native plugin formats.
- ACP client and ACP agent roles are separate features.
- Missing evidence is `unknown`, not `unsupported`.
- Explicit negative rows were reviewed separately.
- Registry membership is not promoted into optional protocol primitives.
- Contradictions and version-drift risks remain visible.
- No runtime conformance test is represented as executed.
- The compact matrix is a projection; long-form assertions remain canonical.

### Important limitations

1. No client binary, hosted tenant, MCP server, ACP host, plugin, skill script, hook, or OAuth flow was executed.
2. Hosted products often do not expose stable public build identifiers.
3. Exact MCP revision support remains unknown for most clients.
4. ACP optional methods are unknown for registry-only entries unless first-party docs establish them.
5. A2A support is almost entirely unknown across this harness-focused seed.
6. Archive submissions were unavailable in this environment; every source is explicitly marked for remediation.
7. Some first-party documentation is live and mutable, so the seed must be refreshed before public launch.

### Handoff verdict

**Implementation-ready for a compatibility-data MVP:** yes. The normalized catalogs, assertions, full unknown-by-default grid, registry inventory, vendor report, source ledger, evidence gaps, and test backlog are sufficient to build the data and editorial system.

**Ready to claim independent conformance or certification:** no. Such claims require the isolated, signed, release-pinned tests described in `data/test-backlog.csv`.

## Confidence Notes

Normative specifications define requirements but do not prove an implementation. First-party product documentation establishes `documented` support for the named surface and observation date. Official registries establish only the role or portable component they list. No runtime conformance suite was executed in this pass. Missing evidence remains `unknown`, not `unsupported`.

## Open Threads

Run archive remediation, re-query both registries, ask vendors to confirm surface mappings, and execute the P0/P1 conformance backlog before public certification language is used.

## Sources Used

- [S-001] ACP Registry — https://agentclientprotocol.com/get-started/registry
- [S-002] Agent Plugins compatible clients — https://agent-plugins.org/compatible-clients
- [S-003] Agent Plugins Specification 1.0.0 — https://agent-plugins.org/specification
- [S-004] Agent Skills Specification — https://agentskills.io/specification
- [S-005] MCP Specification 2026-07-28 — https://modelcontextprotocol.io/specification/2026-07-28
- [S-015] Claude Code MCP optional-field issue — https://github.com/anthropics/claude-code/issues/88128
- [S-016] Claude Code MCP stale tools issue — https://github.com/anthropics/claude-code/issues/88172
