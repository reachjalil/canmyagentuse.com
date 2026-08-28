---
title: Comparisons and Product Positioning
file: 15-comparison-tables.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 5
---

# Comparisons and Product Positioning

## Reader Promise
Make the product-design differences explicit and distinguish CanMyAgentUse from registries or standards-specific compatibility lists.

## Summary (≤120 words)
CanMyAgentUse should copy Can I Use’s scanability while becoming much more explicit about target identity, evidence and asymmetric protocol roles. Existing registries answer “what exists?”; protocol client lists answer “who claims compatibility?”; vendor docs answer one product at a time. The product opportunity is the cross-standard, cross-harness normalized evidence layer.

## What We Found
### Can I Use vs CanMyAgentUse

| axis | Can I Use | CanMyAgentUse |
| --- | --- | --- |
| Primary target | Web feature × browser version | Agent capability × harness surface target × environment |
| Version model | Enumerated browser releases | Release/build OR dated hosted observation |
| Standards role | Mostly browser implementation of web standards | Multiple asymmetric roles: client/server/agent/host/editor |
| Support state | Compact token + notes | Token + structured qualifiers + evidence class + freshness |
| Usage/adoption | Browser usage percentages | No default equivalent; avoid fabricated market share |
| Testing | External browser test ecosystems + manual data | Planned protocol fixtures + host runners + docs evidence |
| Evidence | Links/notes | Immutable evidence ledger + contradiction records |
| Distribution | Full JSON + caniuse-lite | Versioned JSON/CSV package + API later |

### Adjacent products/data surfaces

| surface | what it answers | why it is not the whole product |
| --- | --- | --- |
| Official MCP Registry | Which MCP servers/packages are registered? | Does not provide a cross-harness implementation matrix for every MCP primitive. |
| Agent Plugins compatible clients | Which clients the standards project lists as compatible? | A useful attestation layer, but not feature-by-feature, revision/policy/test evidence. |
| ACP agent/client registries | Which ACP integrations are discoverable? | Focused on ACP, not MCP/skills/plugins/instructions and host extensions. |
| Vendor docs | What this vendor says its product supports. | Source-of-truth evidence but siloed and differently structured. |
| MDN BCD | Rich compatibility schema for web platform features. | Excellent structural inspiration but browser-centric target/semantics. |

### Competitive differentiation

1. **Cross-standard normalization** without flattening standards into equivalents.
2. **Surface-level targeting** instead of brand checklists.
3. **Evidence provenance** visible to end users.
4. **Revision/policy-aware partial support.**
5. **Documented vs tested support as separate axes.**
6. **Historical compatibility** for procurement and reproducibility.

### Build-or-use analysis

Reuse upstream registries and standards metadata as inputs where licenses/APIs permit. Do not build a competing MCP Registry merely to list servers. CanMyAgentUse’s unique dataset is the normalized compatibility assertion graph.

## Confidence Notes
High on product positioning; not a market-size or revenue comparison.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-005] Can I Use website — https://caniuse.com/
- [S-012] MDN BCD schema documentation — https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md
- [S-035] Official MCP Registry — https://registry.modelcontextprotocol.io/
- [S-050] Agent Plugins compatible clients — https://agent-plugins.org/clients
- [S-059] ACP clients — https://agentclientprotocol.com/overview/clients
