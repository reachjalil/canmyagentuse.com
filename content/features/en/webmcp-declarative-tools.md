---
title: WebMCP declarative form tools
description: "Expose semantic HTML forms as structured tools through WebMCP annotations. Draft and implementation support are tracked independently."
slug: webmcp-declarative-tools
locale: en
seoTitle: "WebMCP declarative form tools compatibility — Can My Agent Use"
socialTitle: WebMCP declarative form tools
socialDescription: "Expose semantic HTML forms as structured tools through WebMCP annotations. Browser and agent evidence remains revision-specific."
llmSummary: "WebMCP declarative form tools is an atomic WebMCP capability and does not imply every other part of the draft."
audience: Web platform architects and agent-tooling engineers.
contentKind: feature
status: published
tags: [interfaces, webmcp, web, draft]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Expose semantic HTML forms as structured tools through WebMCP annotations."
specLabel: WebMCP draft 2026-08-26
specification:
  id: webmcp
  revision: 2026-08-26 draft
  maturity: draft community group report
  role: website, user agent, or browser agent
  authority: W3C Web Machine Learning Community Group
  canonicalUrl: https://webmachinelearning.github.io/webmcp/
aliases: ["tool-enabled forms"]
parent: webmcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Chrome documents this WebMCP behavior through its origin-trial developer surface; availability is experimental and must not be read as stable browser-wide support."
  - id: 84
    text: "Evidence checked 2026-08-29: exhaustive review of Aider v0.86.0's complete stable production package, CLI arguments, chat commands, and runtime dependencies establishes no native WebMCP browser API or page-tool implementation."
issues: []
resources:
  - id: webmcp-draft
    title: WebMCP Draft Community Group Report
    href: https://webmachinelearning.github.io/webmcp/
    kind: spec
    publisher: W3C Web Machine Learning Community Group
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: chrome-webmcp-docs
    title: Chrome for Developers — WebMCP and AI agents
    href: https://developer.chrome.com/docs/ai/agents
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-28
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
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: partial
        stage: experimental
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: Chrome WebMCP origin-trial documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: registration in the Chrome WebMCP origin trial is required
          - type: feature-flag
            value: support is not claimed for stable default Chrome
        evidence:
          - resourceId: chrome-webmcp-docs
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
            value: "claim is limited to native Aider CLI v0.86.0; browser extensions, community wrappers, external programs invoked through /run, AiderDesk, and unreleased proposals do not count"
          - type: host-role
            value: "local terminal CLI is neither a WebMCP user agent nor a page-provided browser agent"
          - type: protocol-revision
            value: "WebMCP draft 2026-08-26 terminology was checked against the complete stable implementation surface"
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

Expose semantic HTML forms as structured tools through WebMCP annotations.

WebMCP is a draft Community Group Report, not a W3C Standard. Positive implementation cells must retain origin-trial, version, permissions, and agent-integration qualifiers.
