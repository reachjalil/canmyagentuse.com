---
title: Agent Plugins packaged skills
description: "Load portable Agent Skills contained in an Agent Plugins package. This is tracked as an independent compatibility claim."
slug: agent-plugin-skills
locale: en
seoTitle: "Agent Plugins packaged skills compatibility — Can My Agent Use"
socialTitle: Agent Plugins packaged skills
socialDescription: "Load portable Agent Skills contained in an Agent Plugins package. Unreviewed product cells remain unknown."
llmSummary: "Agent Plugins packaged skills is atomic and does not follow automatically from broader plugins support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-29
published: 2026-08-28
category: interfaces
summary: "Load portable Agent Skills contained in an Agent Plugins package."
specLabel: Agent Plugins 1.0
specification:
  id: agent-plugins
  revision: "1.0.0"
  maturity: published convention
  role: "packaged skills"
  authority: specification maintainers
  canonicalUrl: https://agent-plugins.org/specification/1.0
aliases: ["plugin skills"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: the Agent Plugins compatible-client registry lists Grok Bot as a portable client that loads Agent Skills. This is registry evidence, not an independent runtime conformance test."
  - id: 2
    text: "Evidence checked 2026-08-29: Cursor's first-party documentation identifies skills as available in Agent Plugins and shows a standard package with a skills directory."
issues: []
resources:
  - title: Agent Plugins packaged skills reference
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
  - id: cursor-agent-plugins-skills
    title: Cursor — Plugins
    href: https://cursor.com/docs/plugins
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: What plugins contain and Creating plugins
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
            value: Cursor documents Skills as available in the Agent Plugins format and shows a skills directory in the portable package layout
          - type: runtime
            value: skill script execution, references, progressive loading, and installation scopes remain separate compatibility claims
        evidence:
          - resourceId: cursor-agent-plugins-skills
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

Load portable Agent Skills contained in an Agent Plugins package.

The Grok Bot cell is based on the Agent Plugins project's dated compatible-client registry. Scripts, references, progressive loading, and installation scopes remain separate Agent Skills claims.
