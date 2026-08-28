---
title: Local-only and offline operation
description: Complete a documented class of work without sending prompts, files, tool output, or telemetry to hosted services.
slug: local-only-mode
locale: en
seoTitle: Local-only and offline operation — Can My Agent Use
socialTitle: Local-only and offline operation
socialDescription: Compare truly local execution, network dependencies, telemetry, updates, and offline feature boundaries.
llmSummary: Local-only mode requires a documented workflow whose model, tools, storage, and required control plane remain local; a desktop or CLI interface alone is insufficient.
audience: Security-sensitive, air-gapped, and privacy-conscious teams.
contentKind: feature
status: published
tags: [security, privacy, local, offline, air-gapped]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Run a documented workflow without required hosted inference, storage, control-plane, or telemetry dependencies.
specLabel: Product capability
aliases: [offline mode, air-gapped operation, no-cloud mode]
parent: data-security-controls
related: [local-models, sandbox-network, data-residency]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

A native desktop or CLI process is not automatically local-only. This row requires a documented workflow in which model inference, required tools, storage, authentication, policy evaluation, and necessary control-plane functions remain available without sending task content to a hosted service.

Evidence should record initial and recurring sign-in, license checks, model downloads, updates, telemetry, crash reports, remote connectors, disabled features, offline duration, DNS and network behavior, and the steps required for an air-gapped installation. Partial support is appropriate when the core run is local but setup or optional features require the cloud.
