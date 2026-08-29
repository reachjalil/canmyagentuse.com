---
title: Plugin vendor extensions
description: "Preserve namespaced host-specific behavior without representing it as portable core support. This is tracked as an independent compatibility claim."
slug: plugin-vendor-extensions
locale: en
seoTitle: "Plugin vendor extensions compatibility — Can My Agent Use"
socialTitle: Plugin vendor extensions
socialDescription: "Preserve namespaced host-specific behavior without representing it as portable core support. Unreviewed product cells remain unknown."
llmSummary: "Plugin vendor extensions is atomic and does not follow automatically from broader plugins support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Preserve namespaced host-specific behavior without representing it as portable core support."
specLabel: Agent Plugins 1.0
specification:
  id: agent-plugins
  revision: "1.0.0"
  maturity: published convention
  role: "vendor extension"
  authority: specification maintainers
  canonicalUrl: https://agent-plugins.org/specification/1.0
aliases: ["namespaced plugin extensions"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Claude Code keeps foreign manifest fields non-fatal and has native metadata and experimental fields, but does not document the Agent Plugins reverse-domain extensions model."
issues: []
resources:
  - title: Plugin vendor extensions reference
    href: https://agent-plugins.org/specification/1.0
    kind: spec
  - id: anthropic-claude-code-plugins-reference
    title: Anthropic — Claude Code plugins reference
    href: https://code.claude.com/docs/en/plugins-reference
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Plugin manifest schema — complete schema and unrecognized fields
support:
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code plugins reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: vendor-extension
            value: Claude Code supports its own metadata and experimental manifest fields and treats foreign top-level fields as non-fatal, but does not document the Agent Plugins reverse-domain extensions object or namespace-directory model
        evidence:
          - resourceId: anthropic-claude-code-plugins-reference
            type: documented
            observedAt: 2026-08-28
---

Preserve namespaced host-specific behavior without representing it as portable core support.

Support is recorded only when exact, dated evidence covers this behavior.
