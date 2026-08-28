---
title: Methodology
description: How compatibility cells are defined, sourced, dated, reviewed, and left unknown when evidence is insufficient.
slug: methodology
locale: en
seoTitle: Methodology | Can My Agent Use
socialTitle: Methodology
socialDescription: Support cells stay unknown until a dated, sourced note exists.
llmSummary: A support assertion is feature revision × exact harness surface target × environment profile. Unknown is the default; every other status requires dated notes, typed evidence, and public resources.
audience: Contributors and readers evaluating a support cell.
contentKind: page
status: published
tags:
  - methodology
updated: 2026-08-28
published: 2026-08-28
summary: Evidence rules for moving a cell off unknown.
---

A support assertion answers one narrow question for a **capability revision × exact product target × environment profile**. A rendered cell may be `yes`, `partial`, `no`, `unknown`, or `na`.

- `yes` means current public documentation demonstrates the row’s capability without a material limit.
- `partial` means the capability exists with a documented plan, platform, transport, rollout, environment, or interaction limit.
- `no` requires an explicit current source saying the capability is unsupported. Silence is not evidence of no.
- `unknown` is the default whenever evidence has not been reviewed or remains ambiguous.
- `na` means the row does not apply to that kind of harness and still needs public evidence.

## Capability families and atomic rows

Broad labels such as MCP, plugins, Agent Skills, subagents, persistent instructions, and WebMCP are capability families, not compatibility cells. A family has independently testable atomic children. For example, MCP tool calling does not imply MCP prompts, resources, sampling, authorization, transport, or Apps support. Likewise, a product-native plugin does not imply support for the portable Agent Plugins manifest.

Family progress is derived from child rows for each exact product. The catalog reports both reviewed children and supported-or-partial children, plus the full status breakdown. It never authors or infers one umbrella family status.

Atomic rows may also declare typed `requires`, `extends`, `alternative`, or `related` edges. Siblings are derived from their shared family parent.

## Evidence contract

Every non-unknown cell is authored as a version entry with one or more note IDs, an explicit target, an environment profile, structured qualifiers, and typed evidence references. Each evidence reference resolves to a stable resource ID and records when it was reviewed. The resource list links to public vendor documentation, release notes, maintained first-party repositories, or the relevant open-standard documentation.

Targets are versioned releases when a stable release is public. Continuously deployed web products use a dated hosted observation. When only current local-product documentation is available, the record says `dated-documentation` rather than pretending a particular binary was reproduced.

Evidence classes stay separate: **documented**, **vendor-attested**, **listed**, **tested**, **reported**, **inferred**, and **not found** do not carry the same authority. Catalog v1 publishes documentation and listing evidence. The public test registry contains proposed definitions only; Can My Agent Use has not executed runtime conformance tests against these harnesses.

Plan, policy, region, authorization, transport, protocol revision, role, feature flag, runtime, preview, and vendor-extension limits remain structured qualifiers. They are not folded into prose and lost when the matrix is rendered.

Compatibility status and product lifecycle are separate. An exact cell can be currently unsupported while its lifecycle is `planned`, or partially supported while it is `experimental` or `preview`. Lifecycle values are `untracked`, `requested`, `planned`, `experimental`, `preview`, `stable`, and `deprecated`; they require the same evidence discipline as the associated compatibility assertion.

Do not source a claim from rumors, search snippets without a stable page, community recollection, private beta screens, or screenshots of interfaces that are not public. When a document describes a model or API rather than the named harness, it does not automatically prove harness support.

Community reports can surface an investigation or contradiction, but do not change a definitive support state without authoritative or reproducible corroboration. When sources conflict, the contradiction stays public instead of being smoothed into a color.

## Tracks and coverage

Tracks (`current`, `preview`) are catalog version stacks. They are not a claim that a vendor publishes channels with those names, and evidence for current never fills preview automatically.

The feature-page percentage is the share of published product tracks that have moved off unknown. It measures catalog coverage. It does not measure usage, adoption, quality, or market share. The first review covers MCP tools, MCP Apps, workspace files, terminal access, computer use, and skills for a small set of products. All other cells stay unknown until reviewed.

## Corrections

Public documentation changes. A correction should supersede the affected statement, update the review date, preserve a clear explanation of the documented limit, and replace stale resource links without erasing the reason for the change. Contributors should follow `CONTRIBUTING.md`; the shared schema rejects non-unknown cells without targets, environment profiles, notes, and typed evidence.

The product deliberately does not publish a synthetic harness score or fabricated market-share figure. Useful operational metrics are evidence freshness, sourced-cell coverage, contradiction age, revision pinning, source diversity, review latency, and future conformance-test coverage.
