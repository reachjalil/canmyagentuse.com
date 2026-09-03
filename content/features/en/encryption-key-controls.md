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
updated: 2026-09-03
published: 2026-08-28
category: security-privacy
summary: Record documented encryption key ownership, scope, rotation, and revocation.
specLabel: Common product term
aliases: [customer-managed keys, CMK, BYOK, encryption at rest]
parent: data-security-controls
related: [secrets-management, data-residency]
notes:
  - id: 87
    text: "Evidence checked 2026-09-02: ChatGPT Enterprise workspaces support Enterprise Key Management (EKM) using AWS KMS or Azure Key Vault, covering conversations, files, and workspace memories across both web and desktop surfaces."
  - id: 2
    text: "Evidence checked 2026-08-28: Eligible Claude Enterprise organizations can replace Anthropic's default encryption for covered chats, projects, and files with a customer key in AWS KMS, Google Cloud KMS, or Azure Key Vault. The customer controls the key and cloud-provider audit logs record Anthropic key operations; the overview delegates the exact coverage and limitations to the implementation docs."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor Enterprise offers customer-managed encryption keys for embeddings and Cloud Agent data stored in Cursor infrastructure, with customer-controlled rotation and access. The feature does not establish customer-key coverage for every prompt, third-party model request, external integration, or local artifact."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin encrypts customer data with Cognition-managed keys by default, while Enterprise Assured customers can provide an AWS KMS key for session data and VM snapshots."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openai-ekm-overview
    title: OpenAI — Enterprise Key Management overview
    href: https://help.openai.com/en/articles/20000943
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-cmek
    title: Anthropic Help Center — Customer-managed encryption keys
    href: https://support.claude.com/en/articles/15505325-what-are-customer-managed-encryption-keys-cmek
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Availability; key providers; covered data; audit trail
  - id: cursor-cmek
    title: Cursor Docs — Privacy and data governance
    href: https://prod.cursor.com/docs/enterprise/privacy-and-data-governance
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Data encryption; customer-managed encryption keys
  - id: cognition-devin-customer-managed-keys
    title: "Cognition — Customer Managed Keys"
    href: https://docs.devin.ai/enterprise/security-access/security/customer-managed-keys
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; How It Works; Key Management"
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [87]
        target:
          kind: dated-documentation
          revision: "2026-09-02 OpenAI Enterprise Key Management documentation observation"
          observedAt: 2026-09-02
          url: "https://help.openai.com/en/articles/20000943"
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "ChatGPT Enterprise workspace with EKM enabled"
          - type: auth
            value: "customer controls key in AWS KMS or Azure Key Vault"
        evidence:
          - resourceId: openai-ekm-overview
            type: documented
            observedAt: 2026-09-02
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [87]
        target:
          kind: dated-documentation
          revision: "2026-09-02 OpenAI Enterprise Key Management documentation observation"
          observedAt: 2026-09-02
          url: "https://help.openai.com/en/articles/20000943"
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "ChatGPT Enterprise workspace with EKM enabled"
          - type: auth
            value: "customer controls key in AWS KMS or Azure Key Vault"
        evidence:
          - resourceId: openai-ekm-overview
            type: documented
            observedAt: 2026-09-02
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: "provider-managed at-rest keys by default; customer-owned AWS KMS key can be rotated, disabled, or revoked"
          - type: plan
            value: "customer-managed keys require Enterprise Assured"
        evidence:
          - resourceId: cognition-devin-customer-managed-keys
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise CMEK documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: available to eligible Enterprise organizations
          - type: policy
            value: a customer key in AWS KMS, Google Cloud KMS, or Azure Key Vault can replace Anthropic's default encryption for covered team chats, projects, and files
          - type: runtime
            value: the customer controls the key and cloud-provider audit logs record key operations; exact exclusions and changed features are defined in the implementation documentation
        evidence:
          - resourceId: anthropic-cmek
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise CMEK documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: available to eligible Enterprise organizations for covered organization content used from Claude clients
          - type: policy
            value: covered team chats, projects, and files can use a customer key in AWS KMS, Google Cloud KMS, or Azure Key Vault instead of Anthropic's default encryption
          - type: runtime
            value: local desktop-only artifacts are not established as covered; exact exclusions and changed features follow the CMEK implementation documentation
        evidence:
          - resourceId: anthropic-cmek
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor CMEK documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise customers contact sales to enable CMEK
          - type: policy
            value: embeddings and Cloud Agent data stored in Cursor infrastructure are encrypted with the customer key, and the customer controls key rotation and access
          - type: runtime
            value: the reviewed page does not establish CMEK coverage for every prompt, model-provider request, external integration, shared link, or local artifact
        evidence:
          - resourceId: cursor-cmek
            type: documented
            observedAt: 2026-08-28
---

This row records the cryptographic controls that apply to the exact harness path. Baseline TLS and provider-managed storage encryption are narrower than customer-managed keys, but even customer keys may exclude logs, indexes, memory, backups, connector data, or third-party tools.

Evidence should identify algorithms or platform guarantees when documented, key ownership and hierarchy, tenant scope, rotation and revocation, service behavior after revocation, recovery, regional restrictions, and plan requirements. Marketing shorthand such as “end-to-end encrypted” needs a precise endpoint and key-holder definition.
