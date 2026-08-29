---
title: WebMCP permissions policy
description: "Gate tool exposure across documents and origins through the tools permissions policy. Draft and implementation support are tracked independently."
slug: webmcp-permissions-policy
locale: en
seoTitle: "WebMCP permissions policy compatibility — Can My Agent Use"
socialTitle: WebMCP permissions policy
socialDescription: "Gate tool exposure across documents and origins through the tools permissions policy. Browser and agent evidence remains revision-specific."
llmSummary: "WebMCP permissions policy is an atomic WebMCP capability and does not imply every other part of the draft."
audience: Web platform architects and agent-tooling engineers.
contentKind: feature
status: published
tags: [interfaces, webmcp, web, draft]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Gate tool exposure across documents and origins through the tools permissions policy."
specLabel: WebMCP draft 2026-08-26
specification:
  id: webmcp
  revision: 2026-08-26 draft
  maturity: draft community group report
  role: website, user agent, or browser agent
  authority: W3C Web Machine Learning Community Group
  canonicalUrl: https://webmachinelearning.github.io/webmcp/
aliases: ["Permissions-Policy tools"]
parent: webmcp
related: []
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Chrome documents both WebMCP APIs as gated by the `tools` Permissions Policy, defaulting to `self`, with explicit delegation required for cross-origin iframes and separate secure-origin exposure checks."
issues: []
resources:
  - id: webmcp-draft
    title: WebMCP Draft Community Group Report
    href: https://webmachinelearning.github.io/webmcp/
    kind: spec
    publisher: W3C Web Machine Learning Community Group
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: chrome-webmcp-permissions-policy
    title: Chrome for Developers — WebMCP
    href: https://developer.chrome.com/docs/ai/webmcp
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Security and permissions
  - id: chrome-webmcp-cross-origin-policy
    title: Chrome for Developers — WebMCP Imperative API
    href: https://developer.chrome.com/docs/ai/webmcp/imperative-api
    kind: docs
    publisher: Google Chrome
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Cross-origin iframes
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
            value: the tools policy defaults to self; cross-origin use requires iframe delegation plus explicit secure-origin exposure and request options
        evidence:
          - resourceId: webmcp-draft
            type: documented
            observedAt: 2026-08-28
          - resourceId: chrome-webmcp-permissions-policy
            type: documented
            observedAt: 2026-08-28
          - resourceId: chrome-webmcp-cross-origin-policy
            type: documented
            observedAt: 2026-08-28
---

Gate tool exposure across documents and origins through the tools permissions policy.

WebMCP is a draft Community Group Report, not a W3C Standard. Positive implementation cells must retain origin-trial, version, permissions, and agent-integration qualifiers.
