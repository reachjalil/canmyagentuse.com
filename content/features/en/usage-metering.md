---
title: Usage and cost metering
description: Show per-run and aggregate model, cache, tool, compute, storage, and subagent consumption before a bill arrives.
slug: usage-metering
locale: en
seoTitle: Usage and cost metering compatibility — Can My Agent Use
socialTitle: Usage and cost metering
socialDescription: Compare per-run token, cache, tool, compute, storage, and subagent usage visibility.
llmSummary: Usage metering exposes consumption and preferably cost at run, user, project, and organization scope; a monthly invoice total alone is narrower support.
audience: Engineers and administrators controlling agent spend.
contentKind: feature
status: published
tags: [operations, usage, cost, metering]
updated: 2026-08-28
published: 2026-08-28
category: operations
summary: Inspect per-run and aggregate model, cache, tool, compute, storage, and delegated usage.
specLabel: Product capability
aliases: [cost meter, token usage, spend dashboard, usage dashboard]
parent: usage-and-reliability
related: [prompt-cache-telemetry, context-usage-visibility, plan-pricing-disclosure]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether operators can see consumption close enough to a run to diagnose and control cost. Useful meters separate input, output, reasoning, and cached tokens; tool and connector calls; hosted sandbox or GPU time; storage; media processing; and parent versus sub-agent usage.

Evidence should record update delay, estimated versus final values, price mapping, currencies, user/project/organization attribution, export API, budgets and alerts, model routing, and treatment of retries and failed runs. A monthly invoice total is only partial operational visibility.
