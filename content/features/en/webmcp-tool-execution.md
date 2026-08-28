---
title: WebMCP tool execution
description: "Invoke a page tool with structured arguments and return its result to the agent. Draft and implementation support are tracked independently."
slug: webmcp-tool-execution
locale: en
seoTitle: "WebMCP tool execution compatibility — Can My Agent Use"
socialTitle: WebMCP tool execution
socialDescription: "Invoke a page tool with structured arguments and return its result to the agent. Browser and agent evidence remains revision-specific."
llmSummary: "WebMCP tool execution is an atomic WebMCP capability and does not imply every other part of the draft."
audience: Web platform architects and agent-tooling engineers.
contentKind: feature
status: published
tags: [interfaces, webmcp, web, draft]
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: "Invoke a page tool with structured arguments and return its result to the agent."
specLabel: WebMCP draft 2026-08-26
specification:
  id: webmcp
  revision: 2026-08-26 draft
  maturity: draft community group report
  role: website, user agent, or browser agent
  authority: W3C Web Machine Learning Community Group
  canonicalUrl: https://webmachinelearning.github.io/webmcp/
aliases: ["executeTool"]
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

Invoke a page tool with structured arguments and return its result to the agent.

WebMCP is a draft Community Group Report, not a W3C Standard. Positive implementation cells must retain origin-trial, version, permissions, and agent-integration qualifiers.
