---
title: Data residency
description: Select or document the geographic region where covered product data is stored or processed.
slug: data-residency
locale: en
seoTitle: Data residency controls compatibility — Can My Agent Use
socialTitle: Data residency
socialDescription: Compare storage and processing regions for content, inference, logs, and backups.
llmSummary: Data residency is the documented geographic location of covered storage or processing; storage residency does not automatically establish regional inference.
audience: Compliance, security, and procurement teams with geographic requirements.
contentKind: feature
status: published
tags: [security, privacy, residency, region]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Select or document geographic storage or processing regions.
specLabel: Common product term
aliases: [regional processing, data location, EU data residency]
parent: data-security-controls
related: [local-only-mode, data-retention-controls]
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — Data controls and data residency
    href: https://platform.openai.com/docs/models/default-usage-policies-by-endpoint
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - title: OpenAI — Data residency and inference residency for ChatGPT
    href: https://help.openai.com/en/articles/9903489-eu-data-residency
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
support: []
---

This row asks where each data class is stored and processed. Storage residency does not necessarily constrain model inference, transient processing, support access, telemetry, safety systems, caches, backups, connectors, or third-party tools.

Evidence should name selectable regions, default placement, migration behavior, plan and contract requirements, excluded features, disaster-recovery locations, subprocessors, and whether local clients send content outside the selected boundary.
