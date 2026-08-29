---
title: Plugin marketplace and installation
description: Discover, install, update, and remove extensions through a registry or marketplace, with current Grok Bot evidence.
slug: plugin-marketplace
locale: en
seoTitle: "Plugin marketplace and installation compatibility — Can My Agent Use"
socialTitle: Plugin marketplace and installation
socialDescription: Current marketplace discovery and installation support for Grok Bot connectors and packaged skills.
llmSummary: Grok Bot's Settings → Plugins area includes Marketplace discovery and installation for supported connectors and packaged skills, plus a Yours area for installed plugins and private skills. Team policy can require or block entries.
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Discover, install, update, and remove extensions through a registry or marketplace."
specLabel: Common product term
aliases: ["plugin registry"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot uses Settings → Plugins to discover and install supported connectors and packaged skills; private skills appear in a separate Yours area and can be enabled per Bot."
issues: []
resources:
  - id: xai-grok-bot-skills-marketplace
    title: xAI — Grok Bot skills and routines
    href: https://docs.x.ai/grok-bot/skills-routines-and-automations
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Save a skill
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: organization policy can require, restrict, or disable marketplace plugins
          - type: runtime
            value: the marketplace covers supported connectors and packaged skills; private skills are managed under Yours
        evidence:
          - resourceId: xai-grok-bot-skills-marketplace
            type: documented
            observedAt: 2026-08-28
---

Discover, install, update, and remove extensions through a registry or marketplace.

The Grok Bot cell establishes its in-product discovery and installation flow. It does not imply that every listed plugin is available to every plan or organization, that all plugins use one portable format, or that Can My Agent Use reviewed third-party packages.
