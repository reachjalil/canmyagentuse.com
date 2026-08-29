---
title: Offline operation
description: Complete a documented class of work without sending prompts, files, tool output, or telemetry to hosted services.
slug: local-only-mode
locale: en
seoTitle: Offline operation compatibility — Can My Agent Use
socialTitle: Offline operation
socialDescription: Compare truly local execution, network dependencies, telemetry, updates, and offline feature boundaries.
llmSummary: Offline operation means a documented product workflow can run without a required network connection; a desktop or CLI interface alone does not establish offline support.
audience: Security-sensitive, air-gapped, and privacy-conscious teams.
contentKind: feature
status: published
tags: [security, privacy, local, offline, air-gapped]
updated: 2026-08-29
published: 2026-08-28
category: security-privacy
summary: Run a documented workflow without a required network connection.
specLabel: Common product term
aliases: [offline mode, air-gapped operation, no-cloud mode]
parent: data-security-controls
related: [local-models, sandbox-network, data-residency]
notes:
  - id: 74
    text: "Evidence checked 2026-08-29: Microsoft explicitly says the consumer Copilot experience depends on internet connectivity to function; disruptions affect service availability and performance."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp's documented architecture requires the CLI client to communicate with Amp Server for authentication, thread sync and storage, usage tracking, and model inference, and explicitly offers no self-hosted deployment."
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot requires cloud data storage, authentication through a Cursor account, and a hosted computer; accounts using Legacy Privacy Mode must change to a supported data setting before the product can start."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 says supported workflows can use local Ollama or LM Studio models without cloud-based model services, but does not establish an application-wide offline or zero-network mode."
issues: []
resources:
  - id: amp-2026-08-no-local-only
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "System Components"
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-get-started
    title: xAI — Get started with Grok Bot
    href: https://docs.x.ai/grok-bot/get-started
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Before you begin
  - id: jetbrains-ai-supported-models
    title: JetBrains AI Assistant — Supported LLMs
    href: https://www.jetbrains.com/help/ai-assistant/supported-llms.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Local models
  - id: microsoft-copilot-individual-transparency-2026-08
    title: "Transparency Note for Microsoft Copilot (for individuals)"
    href: "https://support.microsoft.com/en-us/privacy/microsoft-copilot/transparency-note"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "System behavior; Use cases; Limitations — Dependence on Internet connectivity"
support:
  - harness: copilot-web
    versions:
      - track: current
        status: no
        noteIds: [74]
        target:
          kind: hosted-observation
          revision: "Microsoft Copilot web for individuals, Transparency Note dated 2026-08-18"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the hosted consumer Copilot service requires internet connectivity; this does not make a claim about unrelated on-device Windows features"
        evidence:
          - resourceId: microsoft-copilot-individual-transparency-2026-08
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: amp-cli
    versions:
      - track: current
        status: no
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the CLI manages local context and tools but depends on Amp Server and remote inference"
          - type: policy
            value: "bring-your-own model keys do not remove the Amp Server dependency"
        evidence:
          - resourceId: amp-2026-08-no-local-only
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: applies to supported features assigned to a local model, not the entire application or every telemetry and update path
        evidence:
          - resourceId: jetbrains-ai-supported-models
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: no
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: the desktop client depends on hosted execution and required cloud data storage; it is not a local-only or offline harness
        evidence:
          - resourceId: xai-grok-bot-get-started
            type: documented
            observedAt: 2026-08-28
---

A native desktop or CLI process is not automatically offline. This row requires a documented workflow that can complete without a network connection after any stated installation or model-download prerequisites.

Evidence should record installation and model downloads, recurring sign-in or license checks, updates, telemetry, remote connectors, disabled features, offline duration, and the steps required for an air-gapped installation. Data locality without offline operation belongs in the relevant privacy qualifier rather than being treated as the same claim.
