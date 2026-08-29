---
title: Models and context
description: Compare model choice, reasoning controls, context budgets, compaction, fallback, and prompt caching as separate harness capabilities.
slug: models-and-context
locale: en
seoTitle: Models and context capability coverage — Can My Agent Use
socialTitle: Which model and context controls can my agent use?
socialDescription: Compare model selection, context limits, compaction, fallback, local inference, and caching without treating them as one feature.
llmSummary: Models and context is a capability family covering model choice, reasoning controls, usable token budgets, context visibility, compaction, fallback, local inference, and prompt-cache behavior.
audience: Engineers comparing the model and context envelope of agent harnesses.
contentKind: feature
status: published
tags: [models, context, tokens, caching]
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Track model access and the full lifecycle of input, output, compaction, and cached context.
specLabel: Catalog grouping
aliases: [model controls, context management, token budget, context length]
capabilityKind: family
highlight: true
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

A harness is not a transparent pass-through to a model. It can select or route models, reserve tokens for hidden instructions and tools, enforce a lower input cap, compact earlier turns, retry on another model, and cache only certain prompt segments.

This family therefore avoids copying a provider model-card number into every product surface. Each child row asks a narrower question and keeps model, mode, plan, workspace policy, file-processing cost, tool-schema overhead, and observation date attached to the answer.

For context limits, useful records report the advertised maximum and the effective usable budget when those differ. For caching, they distinguish reuse itself from explicit controls and operator-visible telemetry.
