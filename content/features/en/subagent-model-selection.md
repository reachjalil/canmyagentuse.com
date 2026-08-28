---
title: Per-subagent model selection
description: Choose or constrain the model used by an individual child agent independently of its parent.
slug: subagent-model-selection
locale: en
seoTitle: Per-subagent model selection compatibility — Can My Agent Use
socialTitle: Per-subagent model selection
socialDescription: Compare model choice, defaults, and routing for individual child agents.
llmSummary: Per-subagent model selection means a child can use a documented model choice or constraint distinct from its parent; a global conversation model picker is insufficient.
audience: Engineers balancing subagent cost, speed, specialization, and quality.
contentKind: feature
status: published
tags: [runtime, subagents, models, routing]
updated: 2026-08-28
published: 2026-08-28
category: runtime
summary: Choose or constrain each child agent's model independently of the parent.
specLabel: Product capability
aliases: [child model choice, subagent model, delegated model routing]
parent: subagents
related: [model-selection, reasoning-effort-controls, subagent-delegation]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row requires a per-child model selection, role default, or enforceable model constraint. A model chosen once for the whole conversation does not establish independent sub-agent choice.

Evidence should record which actors can select the model, allowed models and reasoning modes, fallbacks, plan restrictions, tool and media compatibility, cost attribution, and whether nested agents inherit or override the selection.
