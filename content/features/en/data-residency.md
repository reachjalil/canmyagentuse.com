---
title: Data residency and processing location controls
description: Select or document where prompts, files, inference, logs, and backups are stored and processed.
slug: data-residency
locale: en
seoTitle: Data residency controls compatibility — Can My Agent Use
socialTitle: Data residency and processing location
socialDescription: Compare storage and processing regions for content, inference, logs, and backups.
llmSummary: Residency records distinguish storage from inference and transient processing, and identify which harness data classes and subprocessors remain inside a selected region.
audience: Compliance, security, and procurement teams with geographic requirements.
contentKind: feature
status: published
tags: [security, privacy, residency, region]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Control and document storage, inference, transient processing, logging, and backup regions.
specLabel: Product capability
aliases: [regional processing, data location, EU data residency]
parent: data-security-controls
related: [local-only-mode, data-retention-controls]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks where each data class is stored and processed. Storage residency does not necessarily constrain model inference, transient processing, support access, telemetry, safety systems, caches, backups, connectors, or third-party tools.

Evidence should name selectable regions, default placement, migration behavior, plan and contract requirements, excluded features, disaster-recovery locations, subprocessors, and whether local clients send content outside the selected boundary.
