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
updated: 2026-08-29
published: 2026-08-28
category: security-privacy
summary: Select or document geographic storage or processing regions.
specLabel: Common product term
aliases: [regional processing, data location, EU data residency]
parent: data-security-controls
related: [local-only-mode, data-retention-controls]
notes:
  - id: 83
    text: "Evidence checked 2026-08-29: Eligible Workspace administrators can select United States or Europe residency for Gemini App prompts and responses at rest and, where the edition includes it, during processing."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider's policy says its Services are hosted in the United States and international-user information transfers there for storage and processing, while permitting onward transfers; selected model endpoints remain separate."
  - id: 79
    text: "Evidence checked 2026-08-29: eligible ChatGPT Enterprise and Edu workspace residency applies to covered conversations and files used from the desktop client, with ten storage regions and three inference regions."
  - id: 77
    text: "Evidence checked 2026-08-29: eligible ChatGPT Enterprise and Edu customers can select regional storage for in-scope customer content and, in three supported regions, add in-region GPU inference residency."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp documents primary server, user, and thread storage on Google Cloud in the United States and offers regional endpoints for customer model-provider connections on request."
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents US storage for commercial Claude data and offers US-only inference to usage-based Enterprise organizations. The inference setting covers all Claude apps, including Claude Code and Desktop, but excludes storage, connectors, support, analytics, and other non-inference processing, so the catalog marks each applicable surface partial."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor Enterprise offers team-scoped US-only residency for supported model inference, content processing, storage, backups, and Cloud Agents, plus EU and Iceland inference-only coverage on request. Authentication, external integrations, some indexing, BYOK, shared links, and other listed paths remain outside the guarantee."
  - id: 53
    text: "Evidence checked 2026-08-29: Cognition's dedicated hosted deployment stores customer data in a customer-dedicated tenant with a documented AWS deployment region, but no public selectable region menu is listed."
resources:
  - id: aider-v0860-privacy-residency
    title: "Aider v0.86.0 — Privacy policy"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/legal/privacy.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "International Visitors; service hosting and transfers"
  - id: openai-chatgpt-desktop-data-residency
    title: "OpenAI — Data residency and inference residency for ChatGPT"
    href: https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Eligibility; Supported regions; covered conversations and files; global-processing exceptions"
  - id: openai-chatgpt-web-data-residency
    title: "OpenAI — Data residency and inference residency for ChatGPT"
    href: https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Eligibility; Supported regions; Customer content stored in the selected region; Processing that may occur outside"
  - id: amp-2026-08-residency
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Infrastructure and Service Providers"
  - id: amp-2026-08-regional-endpoints
    title: "Amp — Pricing"
    href: https://ampcode.com/docs/pricing
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Enterprise regional endpoint support"
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
  - id: anthropic-commercial-data-location
    title: Anthropic Privacy Center — Server and model locations
    href: https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Commercial products; routing; storage location
  - id: anthropic-us-only-inference
    title: Anthropic Help Center — Enable US-only inference
    href: https://support.claude.com/en/articles/15422948-enable-us-only-inference-for-your-organization
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Scope; eligible plans; exclusions
  - id: cursor-residency
    title: Cursor Docs — Privacy and data governance
    href: https://prod.cursor.com/docs/enterprise/privacy-and-data-governance
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Data residency; US data residency; exceptions
  - id: cognition-devin-enterprise-deployment
    title: "Cognition — Enterprise Deployment"
    href: https://docs.devin.ai/enterprise/deployment/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Customer Dedicated Deployment Architecture; Deployment Options"
  - id: cognition-devin-cmk-region
    title: "Cognition — Customer Managed Keys"
    href: https://docs.devin.ai/enterprise/security-access/security/customer-managed-keys
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "AWS KMS key must use the same deployment region"
  - id: google-workspace-gemini-app-data-regions
    title: "Google Workspace Help — Data covered by data regions"
    href: "https://knowledge.workspace.google.com/admin/compliance/data-covered-by-data-regions?hl=en"
    kind: docs
    publisher: "Google Workspace"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; What are covered data and services? — Gemini App row; What about other services and data types?"
support:
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [83]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Google Workspace Gemini App data-regions documentation observation"
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "Enterprise data regions are included with Frontline Plus, Enterprise Plus, or the Data Regions add-on; fundamental coverage is also listed for qualifying Frontline, Business, Education, and Enterprise Essentials editions; processing coverage varies by edition"
          - type: region
            value: "selectable geographic location is the United States or Europe"
          - type: format
            value: "covered Gemini App data is prompts and responses"
          - type: policy
            value: "logs, cached content, and other data types not specifically listed are outside the data-regions claim"
        evidence:
          - resourceId: google-workspace-gemini-app-data-regions
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: aider
    versions:
      - track: current
        status: partial
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Aider service storage and processing are described as United States-hosted without a selectable residency region; onward transfers to other countries or regions are permitted"
          - type: policy
            value: "model inference, prompts, files, caches, and provider logs depend on the separately selected provider or local endpoint"
          - type: policy
            value: "the policy collectively covers the website, programming tools, and related Services and does not enumerate every CLI data class"
        evidence:
          - resourceId: aider-v0860-privacy-residency
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "eligible new Enterprise and Edu workspaces; owners and administrators inspect the region through ChatGPT web workspace settings"
          - type: runtime
            value: "storage residency covers listed customer-content features in ten regions; GPU inference residency is available in Europe, UAE, and the US"
          - type: policy
            value: "metadata, CPU processing, external integrations, routing, and analytics may remain outside the selected region"
        evidence:
          - resourceId: openai-chatgpt-desktop-data-residency
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "available to eligible new ChatGPT Enterprise and Edu customers; residency is configured for the workspace and visible in web Workspace settings"
          - type: runtime
            value: "storage-at-rest regions are Australia, Canada, Europe, India, Japan, Singapore, South Korea, UAE, UK, and US; inference residency is limited to Europe, UAE, and US"
          - type: policy
            value: "coverage is limited to listed customer-content features; metadata, CPU processing, routing, analytics, and external integrations may remain outside the selected region"
        evidence:
          - resourceId: openai-chatgpt-web-data-residency
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Amp-hosted server data is documented in the United States; subprocessors have separately listed locations"
          - type: plan
            value: "regional endpoints concern BYOK providers and are Enterprise on request"
        evidence:
          - resourceId: amp-2026-08-residency
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-regional-endpoints
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: partial
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "Customer Dedicated or Enterprise Assured deployment"
          - type: format
            value: "AWS deployment region is confirmed through the Cognition account team; no public selectable region list was found"
        evidence:
          - resourceId: cognition-devin-enterprise-deployment
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-devin-cmk-region
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise location documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: US-only inference is available to usage-based Enterprise organizations and applies organization-wide; contractual routing restrictions may also apply
          - type: policy
            value: commercial-product data is documented as stored in the US; the selectable control constrains inference to the US rather than offering multiple storage regions
          - type: runtime
            value: connectors, support, analytics, storage, and other non-inference processing are outside the US-only inference setting
        evidence:
          - resourceId: anthropic-commercial-data-location
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-us-only-inference
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Desktop inference-location documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: the usage-based Enterprise US-only inference setting explicitly applies to Claude Desktop and the organization's other Claude apps
          - type: policy
            value: commercial-product data remains documented as stored in the US, while the control constrains inference only
          - type: runtime
            value: connectors, support, analytics, storage, and other non-inference processing are outside the setting
        evidence:
          - resourceId: anthropic-commercial-data-location
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-us-only-inference
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Code inference-location documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: the usage-based Enterprise US-only inference setting explicitly applies to Claude Code signed into that organization
          - type: policy
            value: the setting constrains inference to the US but does not establish local-only execution or multiple selectable storage regions
          - type: runtime
            value: connectors, support, analytics, storage, local files, and other non-inference processing have separate location boundaries
        evidence:
          - resourceId: anthropic-commercial-data-location
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-us-only-inference
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor Enterprise residency documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: US-only residency is enabled per Enterprise team through the account team; EU and Iceland inference-only coverage is available on request
          - type: policy
            value: supported US-only coverage includes model inference, content-processing pipelines, customer-data storage and backups, Cloud Agents, Tab, editing, autocomplete, and semantic search
          - type: runtime
            value: eligible models are restricted, and authentication, some indexing, BYOK, custom models, MCP and web integrations, Bugbot, shared links, and Slack or web triggers have documented exceptions
        evidence:
          - resourceId: cursor-residency
            type: documented
            observedAt: 2026-08-28
---

This row asks where each data class is stored and processed. Storage residency does not necessarily constrain model inference, transient processing, support access, telemetry, safety systems, caches, backups, connectors, or third-party tools.

Evidence should name selectable regions, default placement, migration behavior, plan and contract requirements, excluded features, disaster-recovery locations, subprocessors, and whether local clients send content outside the selected boundary.
