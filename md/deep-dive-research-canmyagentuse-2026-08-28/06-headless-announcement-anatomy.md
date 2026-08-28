---
title: Can I Use Anatomy and Agent-Site Adaptation
file: 06-headless-announcement-anatomy.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 8
---

# Can I Use Anatomy and Agent-Site Adaptation

## Reader Promise
Give the design team a page-by-page and data-by-data blueprint for translating Can I Use into an agent-compatibility product.

## Summary (≤120 words)
The most reusable Can I Use pattern is the feature detail page: concise explanation at top, status/spec context, a wide compatibility table, legend and notes. The adaptation should preserve that visual hierarchy but add surface selectors, role/revision qualifiers, evidence drill-down and stale/contradicted states. The page must never hide unknowns behind brand-level support.

## What We Found
### Anatomy of a feature page

**1. Search and canonical feature identity.** Search accepts protocol names, aliases and vendor terminology but resolves to one canonical atomic feature.  
**2. Short description.** One paragraph answering “what is this?” before compatibility.  
**3. Specification rail.** Authority, revision, maturity, normative requirement and canonical links.  
**4. Matrix.** Columns group by product family; subcolumns are surfaces/releases/observations. Rows can switch between latest and historical targets.  
**5. Legend.** `y/a/n/u`; partial state is never a vague yellow—qualifiers are visible on hover/tap and in accessible text.  
**6. Evidence drawer.** Every cell opens its source history, evidence type, observation time and contradictions.  
**7. Notes/conditions.** Plan, policy, transport, role and preview conditions are structured rather than prose-only.  
**8. Related features.** Parent/children and sibling primitives prevent “MCP tools” from being mistaken for “MCP.”

### Mapping Can I Use data choices to CanMyAgentUse

| Can I Use concept | Agent adaptation | design rule |
| --- | --- | --- |
| feature JSON | feature/revision record | one atomic capability per stable ID |
| browser agents map | surface target registry | surface, not product brand, owns targets |
| stats[agent][version] token | assertion records | render token from evidence-backed statements |
| notes_by_num | qualifier/evidence records | machine-readable and citeable |
| status/spec URL | spec revision + authority | pin to revision whenever possible |
| shown=false | draft feature lifecycle | new definitions can merge without entering public index |
| caniuse-lite | compact public export | ship a versioned npm/JSON data package later |
| validation script | schema + referential + evidence validation | CI blocks unresolved IDs and unqualified positives |

### Recommended cell visual states

- **Supported** — solid positive state, with evidence class icon.
- **Partial/conditional** — visible striped/segmented state; qualifier count shown.
- **Not supported** — explicit negative with source date.
- **Unknown** — neutral, not a red failure.
- **Stale** — overlay/clock badge on any state whose evidence exceeded its freshness policy.
- **Contradicted** — warning badge without automatically changing the underlying support state.

### The central anti-pattern

Do not create a feature called only `mcp` and mark ChatGPT/Cursor/Zed/Kiro green. A builder needs to know whether the exact host can call tools, read resources, request prompts, expose sampling, negotiate OAuth, render MCP Apps, and which transport it accepts. [S-019] [S-136] [S-124] [S-088]

## Confidence Notes
High for source architecture; UI details are recommended design choices.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-002] Can I Use contribution and data-format guide — https://github.com/Fyrd/caniuse/blob/main/CONTRIBUTING.md
- [S-004] Can I Use details feature record — https://github.com/Fyrd/caniuse/blob/main/features-json/details.json
- [S-006] Can I Use Details & Summary feature page — https://caniuse.com/details
- [S-009] caniuse-lite data package — https://github.com/browserslist/caniuse-lite
- [S-019] MCP Specification 2025-11-25 — https://modelcontextprotocol.io/specification/2025-11-25
- [S-088] OpenAI MCP support for ChatGPT and Codex — https://learn.chatgpt.com/docs/extend/mcp
- [S-124] Kiro MCP support matrix — https://kiro.dev/docs/mcp/
- [S-136] Zed MCP support — https://zed.dev/docs/ai/mcp
