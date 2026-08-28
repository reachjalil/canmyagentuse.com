---
title: Intent Brief
file: 01-intent-brief.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 3
---

# Intent Brief

## Reader Promise
Understand what CanMyAgentUse is supposed to answer, what it deliberately does not claim, and how success should be measured.

## Summary (≤120 words)
CanMyAgentUse should answer one operational question: “Can this exact agent harness surface use this exact capability under these conditions?” It should do that with the speed and scanability of Can I Use while exposing deeper evidence, revision and policy qualifiers than a browser-only matrix normally needs. The primary deliverable is an evidence-backed compatibility knowledge system; runtime certification is a separate, later capability.

## What We Found
### Primary audience

**Builder / Architect.** Assumed prior knowledge: they know what an agent, tool call and IDE/CLI are, but should not need to memorize every emerging protocol. Success moment: they can select a harness or feature, see what is actually supported, understand conditions, and follow the source.

**Secondary audience: Evaluator / Skeptic.** Success moment: they can distinguish a green marketing claim from revision-pinned evidence and see contradictions, staleness, plan gates, and test provenance.

### User jobs

1. “I built an MCP server. Which clients can use tools, resources, prompts, OAuth, MCP Apps, or sampling?”
2. “I wrote an Agent Skill. Where is it discovered, at what scope, and can it execute scripts?”
3. “I have a plugin package. Is its manifest portable, and which parts are vendor extensions?”
4. “Which editors can host this coding agent over ACP, and which agents can speak ACP?”
5. “Does this harness honor AGENTS.md, nested instructions, rules, hooks or subagents?”
6. “What changed in the last release, and is the evidence still fresh?”

### Non-goals for v1

- No synthetic “AI readiness score.”
- No automatic claim that a brand supports an entire standard from one subfeature.
- No crowd vote that can override canonical evidence without review.
- No execution of arbitrary contributed binaries in the web process.
- No fabricated market-share analogue to Can I Use’s browser usage percentages.

### Success metrics

Track assertion freshness, evidence coverage, contradiction age, version pinning coverage, source diversity, contribution review latency, and conformance-test coverage. Do **not** optimize initially for number of green cells.

## Confidence Notes
High. This chapter is a product interpretation of the user goal plus the evidence constraints revealed by the ecosystem.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-005] Can I Use website — https://caniuse.com/
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
