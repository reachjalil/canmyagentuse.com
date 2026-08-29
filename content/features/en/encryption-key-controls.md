---
title: Encryption key management
description: Document provider-managed or customer-managed encryption keys and their scope.
slug: encryption-key-controls
locale: en
seoTitle: Encryption key management compatibility — Can My Agent Use
socialTitle: Encryption key management
socialDescription: Compare documented provider-managed and customer-managed encryption key options.
llmSummary: Encryption key management covers documented provider-managed or customer-managed keys; coverage, rotation, and revocation are recorded as qualifiers.
audience: Security and compliance teams evaluating cryptographic control.
contentKind: feature
status: published
tags: [security, encryption, keys, enterprise]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Record documented encryption key ownership, scope, rotation, and revocation.
specLabel: Common product term
aliases: [customer-managed keys, CMK, BYOK, encryption at rest]
parent: data-security-controls
related: [secrets-management, data-residency]
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — Enterprise Key Management overview
    href: https://help.openai.com/en/articles/20000943
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
support: []
---

This row records the cryptographic controls that apply to the exact harness path. Baseline TLS and provider-managed storage encryption are narrower than customer-managed keys, but even customer keys may exclude logs, indexes, memory, backups, connector data, or third-party tools.

Evidence should identify algorithms or platform guarantees when documented, key ownership and hierarchy, tenant scope, rotation and revocation, service behavior after revocation, recovery, regional restrictions, and plan requirements. Marketing shorthand such as “end-to-end encrypted” needs a precise endpoint and key-holder definition.
