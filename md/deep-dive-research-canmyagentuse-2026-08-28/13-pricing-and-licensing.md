---
title: Licensing, Plan Gating, and Business Model
file: 13-pricing-and-licensing.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 3
---

# Licensing, Plan Gating, and Business Model

## Reader Promise
Clarify data licensing, evidence reuse boundaries, plan-gating semantics and a business-model direction that does not compromise compatibility trust.

## Summary (≤120 words)
Can I Use’s dataset is licensed CC BY 4.0, while MDN BCD uses CC0. Vendor documentation remains copyrighted source material, so CanMyAgentUse should author its own factual compatibility assertions and link/cite rather than reproducing long documentation. Commercially, the compatibility dataset should remain broadly accessible; paid value can live in hosted conformance, team governance, private matrices, alerts and enterprise evidence workflows.

## What We Found
### Upstream licenses

- Can I Use data: CC BY 4.0. Attribution obligations matter if records are copied or adapted. [S-010]
- MDN browser-compat-data: CC0. [S-017]
- Individual standards repositories have their own licenses; record license metadata per specification before redistributing schemas or examples.
- Vendor docs are evidence sources, not a bulk data feed unless their terms explicitly permit one. Store concise factual assertions, source URLs and locators.

### Plan/pricing is a compatibility qualifier

A feature may exist technically while access differs by subscription, organization policy or beta enrollment. The data model should attach `plan`, `policy`, `region`, or `preview` qualifiers rather than creating fake products such as “ChatGPT Enterprise MCP v2.”

### Product business model

A credible open compatibility product benefits from data independence. Recommended paid layers:

- private enterprise compatibility matrix for internal agents/tools;
- authenticated conformance runs and historical reports;
- release/change alerts with impact analysis;
- vendor/maintainer dashboards and evidence SLAs;
- policy-aware compatibility (e.g. “works in our tenant configuration”);
- on-prem/private runner for regulated environments.

Avoid charging for the meaning of a public standards fact itself. Trust is the moat; hidden compatibility data works against that moat.

## Confidence Notes
High on license references; monetization is a strategic proposal, not source-derived fact.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-010] Can I Use CC BY 4.0 license — https://github.com/Fyrd/caniuse/blob/main/LICENSE
- [S-017] MDN BCD CC0 license — https://github.com/mdn/browser-compat-data/blob/main/LICENSE
- [S-088] OpenAI MCP support for ChatGPT and Codex — https://learn.chatgpt.com/docs/extend/mcp
