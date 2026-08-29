---
title: Native plugin system
description: Install product-specific extensions without implying Agent Plugins portability.
slug: native-plugins
locale: en
seoTitle: Native plugin compatibility — Can My Agent Use
socialTitle: Native plugin systems
socialDescription: Product-native extension support tracked separately from portable Agent Plugins.
llmSummary: A native plugin system is product-specific and does not establish support for the portable Agent Plugins manifest.
audience: Engineers comparing agent extension systems.
contentKind: feature
status: published
tags: [interfaces, plugins, native-extensions]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: Install and load a product-specific extension package.
specLabel: Common product term
aliases: [native extensions, proprietary plugins]
parent: plugins
related: [agent-plugin-core]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop manages native OpenCode plugins through opencode.json; this is not the portable Agent Plugins manifest."
issues: []
resources:
  - id: openwork-native-plugins
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        stage: stable
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: native OpenCode plugin format configured through opencode.json
        evidence:
          - resourceId: openwork-native-plugins
            type: documented
            observedAt: 2026-08-28
---

This capability covers the product's own extension mechanism. It does not establish portability to another host.
