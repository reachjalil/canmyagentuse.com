---
title: Methodology
description: How compatibility cells are assessed, sourced, dated, corrected, and kept separate from direct evidence coverage.
slug: methodology
locale: en
seoTitle: Methodology | Can My Agent Use
socialTitle: Methodology
socialDescription: Best-effort compatibility assessments stay decisive, dated, transparent, and open to reviewed corrections.
llmSummary: A support assertion is feature revision × exact harness surface target × environment profile. Status, assessment basis, confidence, and direct evidence coverage are separate.
audience: Contributors and readers evaluating a support cell.
contentKind: page
status: published
tags:
  - methodology
updated: 2026-08-29
published: 2026-08-28
summary: Editorial assessment, evidence, confidence, and correction rules.
---

A support assertion answers one narrow question for a **capability revision × exact product target × environment profile**. Can My Agent Use publishes best-effort compatibility assessments using official documentation, first-party signals, maintained source code, demonstrations, industry knowledge, credible reporting, and careful editorial inference. Assessments may be corrected as products change or better evidence becomes available.

A rendered cell uses one primary status:

- **Supported** (`yes`) means our current assessment is that the complete capability works on the named surface. Official documentation, maintained first-party source, an official demonstration, or a strong editorial inference with no meaningful contradiction can establish support.
- **Partial** means the product capability itself has a material limit—for example a plan, platform, preview, scope, transport, adapter, or provider-specific subset. Partial never means merely that our research is incomplete.
- **Unsupported** (`no`) requires explicit current non-support or an exact, exhaustive product/source boundary. Silence is not evidence of no.
- **Unknown** is reserved for genuine uncertainty after reasonable equivalent terminology, architecture, demonstrations, maintained source, and credible reports have been considered.
- **Not applicable** (`na`) is a quiet neutral state for a capability that does not apply to the product surface and still needs an explained basis.

Green means our current assessment is that the capability is supported. Open a cell to see the evidence and reasoning. Think we got it wrong? Submit a correction for review.

## Terminology and admission policy

A published compatibility question must use terminology that readers can verify outside this site. The catalog admits three kinds of atomic entry:

- A **specification feature** uses the name and scope of a public protocol, format, or convention and links the exact specification revision.
- A **common product term** appears in first-party product documentation. The catalog may normalize capitalization or singular/plural form, but it does not add requirements that the source term does not contain.
- A **measured product property** is a documented limit or quantity such as a context window, output-token maximum, upload limit, or rate limit.

Every published atomic entry must link at least one public specification or first-party documentation page. A link to this site's methodology is not terminology provenance. Provider marketing language is kept only when it names a provider-specific record; it is not silently promoted into a generic industry term.

Names should be short and recognizable. Avoid evaluative adjectives such as “accountable,” “safe,” or “controlled”; avoid combining several behaviors into one invented capability; and do not turn a desirable procurement question into a feature until public sources establish the term. If a useful distinction has no external vocabulary yet, keep it in research notes or a proposed test rather than publishing a compatibility row.

Broad pages labeled **Catalog grouping** organize related atomic checks. A family may also carry a clearly labeled broad practical assessment—for example whether a product can use reusable skills through a native or provider-specific mechanism. That broad answer does not imply every standard-format child capability. Child progress remains derived independently. “Atomic” describes the catalog's internal granularity, not an industry designation.

For example, MCP tool calling does not imply MCP prompts, resources, sampling, authorization, transport, or Apps support because those are separately named protocol features. Product documentation—not an internally invented checklist—determines whether non-protocol concepts deserve separate rows.

## Evidence contract

Every non-unknown cell is authored as a version entry with one or more note IDs, an explicit target, an environment profile, structured qualifiers, and typed evidence references. Each evidence reference resolves to a stable resource ID and records when it was reviewed. New editorial assessments can also record an explicit assessment basis, confidence, assessment date, and whether human verification is still desired. Legacy records derive these labels from their typed evidence until they are refreshed.

Targets are versioned releases when a stable release is public. Continuously deployed web products use a dated hosted observation. When only current local-product documentation is available, the record says `dated-documentation` rather than pretending a particular binary was reproduced.

Evidence classes stay separate: **documented**, **vendor-attested**, **listed**, **tested**, **reported**, **inferred**, and **not found** do not carry the same authority. Assessment basis is also explicit: verified testing, official documentation, maintained source, official demonstration, another first-party signal, credible reporting, or editorial inference. Confidence is recorded separately as verified, high-confidence, or provisional. None of these creates a weaker shade of green: the primary color communicates compatibility, while the detail explains why.

Plan, policy, region, authorization, transport, protocol revision, role, feature flag, runtime, preview, and vendor-extension limits remain structured qualifiers. They are not folded into prose and lost when the matrix is rendered.

Compatibility status and product lifecycle are separate. An exact cell can be currently unsupported while its lifecycle is `planned`, or partially supported while it is `experimental` or `preview`. Lifecycle values are `untracked`, `requested`, `planned`, `experimental`, `preview`, `stable`, and `deprecated`; they require the same evidence discipline as the associated compatibility assertion.

## Limits and measured values

Some of the most useful harness facts are numeric: advertised and effective context tokens, maximum output, file bytes and count, document pages, audio or video duration, concurrent subagents, requests or tokens per reset window, run duration, storage, retention, and price. A number is not portable without its unit and scope.

Every measured value should identify the exact harness, model or mode, plan, environment, region or policy when relevant, what the value limits, whether it is a documented maximum or a tested observation, the reset or billing period, the review date, and the boundary behavior. A model API limit is not copied into a chat, desktop, editor, or CLI surface without product evidence. When an advertised maximum and an effective usable limit differ, preserve both and explain the reservation, truncation, sampling, or compaction behavior.

Prompt caching is tracked only where first-party documentation names cache reuse, controls, or telemetry separately. File upload is kept separate from model-visible understanding because product documentation commonly distinguishes accepting a file from interpreting its contents. These distinctions keep a paperclip icon, a provider model card, or a generic caching statement from becoming a broader compatibility claim than the evidence supports.

Do not source a claim from rumors, search snippets without a stable page, anonymous recollection, or private beta material. Public provider demonstrations, maintained source, release announcements, reproducible observations, and multiple credible reports can support an editorial assessment when the exact surface and limits are clear. When a document describes a model or API rather than the named harness, it does not automatically prove harness support.

Community and first-hand reports can surface an investigation or support a careful provisional assessment, but a single submission never changes a status automatically. When sources conflict, the contradiction stays public instead of being smoothed into a color.

## Tracks and coverage

Tracks (`current`, `preview`) are catalog version stacks. They are not a claim that a vendor publishes channels with those names, and evidence for current never fills preview automatically.

Compatibility assessment and direct evidence coverage are reported separately:

- **Assessed coverage** is the share moved responsibly off unknown.
- **Compatible among assessed** is the share of assessed, applicable cells marked supported or partial.
- **Direct reviewed evidence** is the share backed by reviewed documentation, testing, vendor attestation, or an authoritative listing.

The legacy machine fields `sourced` and `share` remain aliases for direct reviewed evidence so historical consumers do not accidentally count editorial inference toward the direct-evidence percentage. None of these metrics measures usage, adoption, quality, market share, or provider endorsement.

## Corrections

Think an assessment is wrong or outdated? Suggest a correction. We review submissions before changing the catalog.

[Suggest a methodology correction](/report?targetType=methodology), [request a missing product](/report?targetType=missing-harness), or [request a missing capability](/report?targetType=missing-feature).

Each correction is tied to one exact feature, product surface, and track. The form captures the current assessment snapshot, proposed status, explanation, supporting URLs, optional reproduction steps, affected version/plan/platform, affiliation disclosure, optional contact details, and publication permission. Submissions enter a moderation queue; they never update the catalog automatically and unreviewed links or material are never published as facts.

The moderation record keeps a unique request ID, received timestamp, abuse indicators, review state, reviewer decision and rationale, and resulting catalog change or no-change outcome. Review states are `received`, `triaged`, `needs-more-information`, `accepted`, `partially-accepted`, `declined`, `duplicate`, and `superseded`. Contact details stay private. A claimed provider affiliation is recorded but is not treated as official until verified.

Accepted corrections update the canonical assessment date, basis, confidence, sources, and reasoning while preserving the previous status and correction request ID in editorial history. Declined requests retain a private rationale so the same claim does not need to be re-evaluated from scratch.

The product deliberately does not publish a synthetic harness score, fabricated market-share figure, or unsourced editorial capability. Useful operational metrics are evidence freshness, sourced-cell coverage, contradiction age, revision pinning, source diversity, review latency, and future conformance-test coverage.

## Signup, account access and provisioning

A service integration does not establish that an agent can create a new customer account. Keep agent-initiated registration, a temporary claimable preview, provisioning within an existing account and account-free local work distinct. Our [September 5 signup snapshot](/agent-signup) shows all 22 guide classifications and their limits; it is a documentation audit, not a signup benchmark.
