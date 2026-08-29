---
title: WebMCP security annotations
description: "Communicate read-only and untrusted-content hints across the site-to-agent boundary. Draft and implementation support are tracked independently."
slug: webmcp-security-annotations
locale: en
seoTitle: "WebMCP security annotations compatibility — Can My Agent Use"
socialTitle: WebMCP security annotations
socialDescription: "Communicate read-only and untrusted-content hints across the site-to-agent boundary. Browser and agent evidence remains revision-specific."
llmSummary: "WebMCP security annotations is an atomic WebMCP capability and does not imply every other part of the draft."
audience: Web platform architects and agent-tooling engineers.
contentKind: feature
status: published
tags: [interfaces, webmcp, web, draft]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Communicate read-only and untrusted-content hints across the site-to-agent boundary."
specLabel: WebMCP draft 2026-08-26
specification:
  id: webmcp
  revision: 2026-08-26 draft
  maturity: draft community group report
  role: website, user agent, or browser agent
  authority: W3C Web Machine Learning Community Group
  canonicalUrl: https://webmachinelearning.github.io/webmcp/
aliases: ["untrustedContentHint"]
parent: webmcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Chrome's origin-trial documentation exposes `readOnlyHint` and `untrustedContentHint` in registered and discovered WebMCP tools and publishes handling guidance for both hints."
issues: []
resources:
  - id: webmcp-draft
    title: WebMCP Draft Community Group Report
    href: https://webmachinelearning.github.io/webmcp/
    kind: spec
    publisher: W3C Web Machine Learning Community Group
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: chrome-webmcp-security-annotations-api
    title: Chrome for Developers — WebMCP Imperative API
    href: https://developer.chrome.com/docs/ai/webmcp/imperative-api
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: annotations and discovered tool representation
  - id: chrome-webmcp-security-annotations-guidance
    title: Chrome for Developers — WebMCP tool security
    href: https://developer.chrome.com/docs/ai/webmcp/secure-tools
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Use annotation hints
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
          - type: policy
            value: annotations are advisory hints to the consuming agent; they do not by themselves enforce read-only behavior or sanitize untrusted output
        evidence:
          - resourceId: webmcp-draft
            type: documented
            observedAt: 2026-08-28
          - resourceId: chrome-webmcp-security-annotations-api
            type: documented
            observedAt: 2026-08-28
          - resourceId: chrome-webmcp-security-annotations-guidance
            type: documented
            observedAt: 2026-08-28
---

Communicate read-only and untrusted-content hints across the site-to-agent boundary.

WebMCP is a draft Community Group Report, not a W3C Standard. Positive implementation cells must retain origin-trial, version, permissions, and agent-integration qualifiers.
