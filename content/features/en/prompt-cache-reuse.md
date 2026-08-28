---
title: Prompt and context cache reuse
description: Reuse eligible repeated prompt prefixes or context so later requests avoid equivalent fresh processing.
slug: prompt-cache-reuse
locale: en
seoTitle: Prompt and context caching compatibility — Can My Agent Use
socialTitle: Prompt and context cache reuse
socialDescription: Compare automatic and persistent reuse of eligible repeated context across harnesses.
llmSummary: Prompt-cache reuse means eligible repeated context can receive documented latency or billing reuse; ordinary browser, HTTP, file, or retrieval caching does not count.
audience: Engineers comparing latency and token cost for repeated large contexts.
contentKind: feature
status: published
tags: [context, prompt-caching, latency, cost]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Reuse eligible repeated prompt context with documented latency or billing semantics.
specLabel: Product capability
aliases: [prompt caching, context caching, cached input, prefix caching]
parent: models-and-context
related: [prompt-cache-controls, prompt-cache-telemetry, usage-metering]
highlight: true
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row concerns model-request prompt or context caching: eligible repeated prefixes receive documented processing, latency, or billing reuse. It does not include browser caches, downloaded-file caches, embedding indexes, retrieval caches, build caches, or a conversation merely retaining its history.

Evidence should identify whether reuse is automatic or explicit, minimum eligible prefix size, exact-prefix requirements, supported models and regions, cache lifetime, isolation boundary, invalidation behavior, and read-versus-write pricing. A model API feature does not prove that a hosted chat or coding harness preserves stable prefixes or passes cache controls through.
