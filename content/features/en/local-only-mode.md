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
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Run a documented workflow without a required network connection.
specLabel: Common product term
aliases: [offline mode, air-gapped operation, no-cloud mode]
parent: data-security-controls
related: [local-models, sandbox-network, data-residency]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot requires cloud data storage, authentication through a Cursor account, and a hosted computer; accounts using Legacy Privacy Mode must change to a supported data setting before the product can start."
issues: []
resources:
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
support:
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

A native desktop or CLI process is not automatically local-only. This row requires a documented workflow in which model inference, required tools, storage, authentication, policy evaluation, and necessary control-plane functions remain available without sending task content to a hosted service.

Evidence should record initial and recurring sign-in, license checks, model downloads, updates, telemetry, crash reports, remote connectors, disabled features, offline duration, DNS and network behavior, and the steps required for an air-gapped installation. Partial support is appropriate when the core run is local but setup or optional features require the cloud.
