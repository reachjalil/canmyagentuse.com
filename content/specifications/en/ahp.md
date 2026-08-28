---
title: Agent Host Protocol
description: Preview protocol for hosting, sharing, subscribing to, and resuming persistent agent sessions.
slug: ahp
locale: en
seoTitle: Agent Host Protocol compatibility reference — Can My Agent Use
socialTitle: Agent Host Protocol compatibility
socialDescription: Preview maturity and session host/client roles for AHP.
llmSummary: AHP is a preview session host protocol in the VS Code ecosystem. Current claims require precise version and preview qualifiers.
audience: Architects and engineers evaluating persistent agent sessions.
contentKind: specification
status: published
tags: [ahp, sessions, host, protocol]
updated: 2026-08-28
published: 2026-08-28
authority: Microsoft
revision: 0.5.x
maturity: preview
structure: Session host and client protocol
sourceId: S-116
canonicalUrl: https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture
summary: Host persistent agent sessions that clients can subscribe to and resume.
roles: [session-host, client]
aliases: [AHP, Agent Host]
---

AHP addresses durable agent sessions and client access to those sessions. It is distinct from ACP’s editor-to-coding-agent boundary and from A2A task exchange.

The research snapshot treats AHP as preview. Compatibility claims should include a precise implementation version and feature flag or preview state until the protocol and host behavior stabilize.
