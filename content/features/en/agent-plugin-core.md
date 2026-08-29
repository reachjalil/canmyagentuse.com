---
title: Agent Plugins portable manifest
description: "Load the published portable plugin.json manifest and its core components. This is tracked as an independent compatibility claim."
slug: agent-plugin-core
locale: en
seoTitle: "Agent Plugins portable manifest compatibility — Can My Agent Use"
socialTitle: Agent Plugins portable manifest
socialDescription: "Load the published portable plugin.json manifest and its core components. Unreviewed product cells remain unknown."
llmSummary: "Agent Plugins portable manifest is atomic and does not follow automatically from broader plugins support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Load the published portable plugin.json manifest and its core components."
specLabel: Agent Plugins 1.0
specification:
  id: agent-plugins
  revision: "1.0.0"
  maturity: published convention
  role: "portable manifest"
  authority: specification maintainers
  canonicalUrl: https://agent-plugins.org/specification/1.0
aliases: ["plugin.json"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry lists Grok Bot among clients that support the portable Agent Plugins format. This is registry evidence, not an independent runtime conformance test."
  - id: 2
    text: "Evidence checked 2026-08-29: Cursor's first-party documentation explicitly says spec-conformant Agent Plugins with a root plugin.json load without changes."
issues: []
resources:
  - title: Agent Plugins portable manifest reference
    href: https://agent-plugins.org/specification/1.0
    kind: spec
  - id: agent-plugins-grok-bot-client
    title: Agent Plugins — Compatible clients
    href: https://agent-plugins.org/compatible-clients
    kind: spec
    publisher: Agent Plugins
    evidenceType: listed
    reviewedAt: 2026-08-28
    locator: Grok Bot
  - id: cursor-agent-plugins
    title: Cursor — Plugins
    href: https://cursor.com/docs/plugins
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: The Agent Plugins standard
support:
  - harness: cursor
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Cursor Agent Plugins documentation
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: Cursor documents a spec-conformant root plugin.json and says conforming Agent Plugins load without changes
          - type: runtime
            value: Agent Plugins are supported alongside the separate Cursor Plugins format and share Cursor's installation flow
        evidence:
          - resourceId: cursor-agent-plugins
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Agent Plugins compatible-client listing
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: support is registry-listed and was not independently conformance-tested by Can My Agent Use
        evidence:
          - resourceId: agent-plugins-grok-bot-client
            type: listed
            observedAt: 2026-08-28
---

Load the published portable plugin.json manifest and its core components.

The Grok Bot cell is based on the Agent Plugins project's dated compatible-client registry. Unreviewed clients remain unknown, and the listing does not prove every optional client extension.
