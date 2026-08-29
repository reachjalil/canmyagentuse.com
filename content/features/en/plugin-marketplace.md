---
title: Plugin marketplace
description: Discover and install extensions through a documented registry or marketplace.
slug: plugin-marketplace
locale: en
seoTitle: "Plugin marketplace compatibility — Can My Agent Use"
socialTitle: Plugin marketplace
socialDescription: Compare marketplace discovery, installation, update, and removal support.
llmSummary: A plugin marketplace is a documented registry or marketplace for discovering and installing extensions. Update, removal, private-extension, and organization-policy behavior are qualifiers.
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Discover and install extensions through a documented registry or marketplace."
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

Discover and install extensions through a documented registry or marketplace.

Update, removal, private-extension, and organization-policy behavior are qualifiers. A marketplace listing does not prove that every extension is available to every account, that all extensions use one portable format, or that the catalog has reviewed third-party packages.
