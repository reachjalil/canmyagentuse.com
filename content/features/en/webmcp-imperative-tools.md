---
title: WebMCP imperative tools
description: "Register JavaScript-backed tools through document.modelContext.registerTool(). Draft and implementation support are tracked independently."
slug: webmcp-imperative-tools
locale: en
seoTitle: "WebMCP imperative tools compatibility — Can My Agent Use"
socialTitle: WebMCP imperative tools
socialDescription: "Register JavaScript-backed tools through document.modelContext.registerTool(). Browser and agent evidence remains revision-specific."
llmSummary: "WebMCP imperative tools is an atomic WebMCP capability and does not imply every other part of the draft."
audience: Web platform architects and agent-tooling engineers.
contentKind: feature
status: published
tags: [interfaces, webmcp, web, draft]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Register JavaScript-backed tools through document.modelContext.registerTool()."
specLabel: WebMCP draft 2026-08-26
specification:
  id: webmcp
  revision: 2026-08-26 draft
  maturity: draft community group report
  role: website, user agent, or browser agent
  authority: W3C Web Machine Learning Community Group
  canonicalUrl: https://webmachinelearning.github.io/webmcp/
aliases: ["registerTool"]
parent: webmcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Chrome documents this WebMCP behavior through its origin-trial developer surface; availability is experimental and must not be read as stable browser-wide support."
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
---

Register JavaScript-backed tools through document.modelContext.registerTool().

WebMCP is a draft Community Group Report, not a W3C Standard. Positive implementation cells must retain origin-trial, version, permissions, and agent-integration qualifiers.
