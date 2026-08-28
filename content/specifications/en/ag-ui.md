---
title: AG-UI
description: Open event protocol connecting agent backends to interactive applications and user interfaces.
slug: ag-ui
locale: en
seoTitle: AG-UI compatibility reference — Can My Agent Use
socialTitle: AG-UI compatibility
socialDescription: Event roles and agent-to-application UI boundaries for AG-UI.
llmSummary: AG-UI is an event-based bidirectional protocol between agent backends and interactive applications. It complements rather than replaces MCP and A2A.
audience: Architects building interactive agent applications.
contentKind: specification
status: published
tags: [ag-ui, ui, events, protocol]
updated: 2026-08-28
published: 2026-08-28
authority: AG-UI community
revision: living
maturity: open protocol
structure: Event-based bidirectional agent and user interaction
sourceId: S-077
canonicalUrl: https://docs.ag-ui.com/
summary: Stream agent state, events, and interaction between backends and user interfaces.
roles: [agent-backend, application]
aliases: [Agent User Interaction Protocol]
---

AG-UI focuses on interaction between an agent backend and an application. MCP can supply tools and context, while A2A can exchange work between agents; those layers can coexist with AG-UI.

Compatibility records should identify protocol revision, event families, transport, state synchronization behavior, and application/backend role.
