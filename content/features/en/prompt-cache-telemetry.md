---
title: Prompt cache telemetry
description: Report cache reads, writes, hits, misses, saved latency, or cached-token billing for a run.
slug: prompt-cache-telemetry
locale: en
seoTitle: Prompt cache telemetry compatibility — Can My Agent Use
socialTitle: Prompt cache telemetry
socialDescription: Compare visibility into prompt-cache hits, misses, token counts, latency, and cost.
llmSummary: Prompt-cache telemetry exposes whether reuse occurred and, ideally, cached read/write tokens, cost, latency, and cache scope; documented caching without visibility is a separate claim.
audience: Engineers verifying that context caching is effective and economical.
contentKind: feature
status: published
tags: [context, prompt-caching, telemetry, cost]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Inspect cache hits, misses, token counts, latency, or billing effects.
specLabel: Product capability
aliases: [cache hit metrics, cached tokens, cache observability]
parent: models-and-context
related: [prompt-cache-reuse, prompt-cache-controls, usage-metering]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether an operator can verify prompt-cache behavior for the exact harness. A billing dashboard total, per-request cached-token count, cache-hit event, and detailed read/write breakdown provide different levels of evidence and should be qualified.

Useful records identify where telemetry appears, how long it is retained, whether sub-agent and tool-generated requests are included, and how cached reads and writes map to price. A generic statement that caching is automatic does not prove that the harness exposes telemetry.
