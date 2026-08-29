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
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native or portable plugin loader, marketplace, failure-isolation contract, or vendor-extension format."
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
  - id: aider-v0860-production-tree
    title: "Aider v0.86.0 — complete production package"
    href: "https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete aider package at the stable release commit"
  - id: aider-v0860-args-source
    title: "Aider v0.86.0 — complete CLI argument parser"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete get_parser option declarations"
  - id: aider-v0860-commands-source
    title: "Aider v0.86.0 — complete in-chat command implementation"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete command implementation"
  - id: aider-v0860-dependencies
    title: "Aider v0.86.0 — stable runtime dependencies"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/requirements.txt"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "complete stable runtime dependency manifest"
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
  - harness: aider
    versions:
      - track: current
        status: no
        noteIds: [84]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "claim is limited to native Aider CLI v0.86.0; Python packages used by development tooling, community wrappers, AiderDesk, and unreleased proposals do not count as an Aider plugin surface"
          - type: format
            value: "review covered portable plugin isolation plus native extension loading, distribution, marketplace, and vendor-extension surfaces"
        evidence:
          - resourceId: aider-v0860-production-tree
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-args-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-commands-source
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-dependencies
            type: documented
            observedAt: 2026-08-29
---

Reject invalid components narrowly without disabling valid components in the same package.

Support is recorded only when exact, dated evidence covers this behavior.
