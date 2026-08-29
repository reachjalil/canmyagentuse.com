---
title: WebMCP execution cancellation
description: "Cancel pending tool registration or execution through abort signals and lifecycle rules. Draft and implementation support are tracked independently."
slug: webmcp-cancellation
locale: en
seoTitle: "WebMCP execution cancellation compatibility — Can My Agent Use"
socialTitle: WebMCP execution cancellation
socialDescription: "Cancel pending tool registration or execution through abort signals and lifecycle rules. Browser and agent evidence remains revision-specific."
llmSummary: "WebMCP execution cancellation is an atomic WebMCP capability and does not imply every other part of the draft."
audience: Web platform architects and agent-tooling engineers.
contentKind: feature
status: published
tags: [interfaces, webmcp, web, draft]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Cancel pending tool registration or execution through abort signals and lifecycle rules."
specLabel: WebMCP draft 2026-08-26
specification:
  id: webmcp
  revision: 2026-08-26 draft
  maturity: draft community group report
  role: website, user agent, or browser agent
  authority: W3C Web Machine Learning Community Group
  canonicalUrl: https://webmachinelearning.github.io/webmcp/
aliases: ["AbortSignal"]
parent: webmcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Chrome's WebMCP Imperative API documentation exposes AbortSignal for canceling pending execution and passes a cancellation signal into the tool callback; Chrome 153 separately changed registration abort so unregistering no longer breaks in-flight work."
issues: []
resources:
  - id: webmcp-draft
    title: WebMCP Draft Community Group Report
    href: https://webmachinelearning.github.io/webmcp/
    kind: spec
    publisher: W3C Web Machine Learning Community Group
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: chrome-webmcp-imperative-cancellation
    title: Chrome for Developers — WebMCP Imperative API
    href: https://developer.chrome.com/docs/ai/webmcp/imperative-api
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Unregister tools, handle tool cancellation, and execute tool
support:
  - harness: chrome-webmcp-preview
    versions:
      - track: current
        status: yes
        stage: experimental
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: Chrome 153 WebMCP origin-trial documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: origin-trial
            value: WebMCP is an experimental origin trial and local testing requires the enable-webmcp-testing flag
          - type: protocol-revision
            value: Chrome 153 separates tool unregistration from cancellation of in-flight execution; execution cancellation remains exposed through AbortSignal
        evidence:
          - resourceId: webmcp-draft
            type: documented
            observedAt: 2026-08-28
          - resourceId: chrome-webmcp-imperative-cancellation
            type: documented
            observedAt: 2026-08-28
---

Cancel pending tool registration or execution through abort signals and lifecycle rules.

WebMCP is a draft Community Group Report, not a W3C Standard. Positive implementation cells must retain origin-trial, version, permissions, and agent-integration qualifiers.
