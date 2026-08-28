---
title: Encryption and key controls
description: Document encryption in transit and at rest plus customer-managed keys, key scope, rotation, and revocation.
slug: encryption-key-controls
locale: en
seoTitle: Encryption and key controls compatibility — Can My Agent Use
socialTitle: Encryption and key controls
socialDescription: Compare transport, at-rest encryption, customer-managed keys, rotation, revocation, and feature exclusions.
llmSummary: Encryption-key controls distinguish baseline provider-managed encryption from customer-managed keys and record which content, indexes, logs, and backups each key actually covers.
audience: Security and compliance teams evaluating cryptographic control.
contentKind: feature
status: published
tags: [security, encryption, keys, enterprise]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Record transport and at-rest encryption plus customer key scope, rotation, and revocation.
specLabel: Product capability
aliases: [customer-managed keys, CMK, BYOK, encryption at rest]
parent: data-security-controls
related: [secrets-management, data-residency]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row records the cryptographic controls that apply to the exact harness path. Baseline TLS and provider-managed storage encryption are narrower than customer-managed keys, but even customer keys may exclude logs, indexes, memory, backups, connector data, or third-party tools.

Evidence should identify algorithms or platform guarantees when documented, key ownership and hierarchy, tenant scope, rotation and revocation, service behavior after revocation, recovery, regional restrictions, and plan requirements. Marketing shorthand such as “end-to-end encrypted” needs a precise endpoint and key-holder definition.
