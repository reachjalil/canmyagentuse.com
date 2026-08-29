---
title: Agent Plugins failure isolation
description: "Reject invalid components narrowly without disabling valid components in the same package. This is tracked as an independent compatibility claim."
slug: agent-plugin-failure-isolation
locale: en
seoTitle: "Agent Plugins failure isolation compatibility — Can My Agent Use"
socialTitle: Agent Plugins failure isolation
socialDescription: "Reject invalid components narrowly without disabling valid components in the same package. Unreviewed product cells remain unknown."
llmSummary: "Agent Plugins failure isolation is atomic and does not follow automatically from broader plugins support."
audience: Engineers comparing agent harness capabilities.
contentKind: feature
status: published
tags: [interfaces, plugins]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Reject invalid components narrowly without disabling valid components in the same package."
specLabel: Agent Plugins 1.0
specification:
  id: agent-plugins
  revision: "1.0.0"
  maturity: published convention
  role: "component validation"
  authority: specification maintainers
  canonicalUrl: https://agent-plugins.org/specification/1.0
aliases: ["plugin failure isolation"]
parent: plugins
related: []
highlight: false
notes:
  - id: 1
    text: "Claude Code documents component-scoped validation behavior: invalid frontmatter affects that file, and invalid hooks JSON loads the plugin without those hooks."
issues: []
resources:
  - title: Agent Plugins failure isolation reference
    href: https://agent-plugins.org/specification/1.0
    kind: spec
  - id: anthropic-claude-code-plugin-validation
    title: Anthropic — Create and distribute a Claude Code plugin marketplace
    href: https://code.claude.com/docs/en/plugin-marketplaces
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Validate plugins and marketplaces — read the validation results
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current Claude Code plugin marketplace documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: invalid skill, agent, or command frontmatter is scoped to that component, and invalid hooks JSON loads the plugin without those hooks; manifest-level failures remain fatal
        evidence:
          - resourceId: anthropic-claude-code-plugin-validation
            type: documented
            observedAt: 2026-08-28
---

Reject invalid components narrowly without disabling valid components in the same package.

Support is recorded only when exact, dated evidence covers this behavior.
