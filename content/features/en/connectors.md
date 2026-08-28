---
title: Connectors
description: Reach mail, chat, files, calendars, and other services the user authorizes, with current Grok Web and Grok Bot evidence.
slug: connectors
locale: en
seoTitle: "Connectors — Can My Agent Use"
socialTitle: Connectors
socialDescription: Current connector support for Grok Web and Grok Bot, with authentication and organization-policy boundaries.
llmSummary: Grok Web provides a connector catalog plus custom remote MCP connectors. Grok Bot installs supported connectors from its Plugins settings; availability, authentication, and team policy remain product and account dependent.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Reach mail, chat, calendar, or issue trackers the user authorizes.
specLabel: Product capability
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents a Grok connector catalog for services such as Box, GitHub, Notion, and Vercel, plus custom remote MCP connectors for publicly reachable servers."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot installs supported connectors from Settings → Plugins, authenticates them in the browser when required, and makes installed connectors available account-wide; organization policy can require, restrict, or disable them."
issues: []
resources:
  - id: xai-grok-connectors
    title: xAI — Grok connectors
    href: https://docs.x.ai/grok/connectors
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: xai-grok-bot-computer-apps
    title: xAI — Grok Bot computer and apps
    href: https://docs.x.ai/grok-bot/computer-and-apps
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Connect an app
support:
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web connector documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: catalog and custom connectors can require provider authentication and permissions
          - type: transport
            value: custom MCP connectors must be remotely reachable; local-only servers require a separate tunnel
        evidence:
          - resourceId: xai-grok-connectors
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: installed connectors may require browser authentication
          - type: policy
            value: installed connectors are account-wide and may be required, restricted, or disabled by an organization administrator
        evidence:
          - resourceId: xai-grok-bot-computer-apps
            type: documented
            observedAt: 2026-08-28
---

Reach mail, chat, files, calendars, issue trackers, and other services the user authorizes.

The Grok Web and Grok Bot desktop paths are separate. A connector's appearance in a catalog does not establish that every account can authenticate it, that every exposed action is writable, or that organization policy permits it.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
