---
title: Web fetch
description: Retrieve live web pages or APIs during a run.
slug: web-fetch
locale: en
seoTitle: "Web fetch — Can My Agent Use"
socialTitle: Web fetch
socialDescription: Compare live web-page and API retrieval during a run.
llmSummary: Web fetch retrieves current web pages or API responses during a run. Authentication, network policy, rendering, and source attribution are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Retrieve live web pages or APIs during a run.
specLabel: Common product term
highlight: false
notes:
  - id: 8
    text: "Evidence checked 2026-08-29: Replit Agent's built-in Web Search fetches specified websites or URLs and reads entire live web pages, documentation, and authoritative data points with citations."
  - id: 7
    text: "Evidence checked 2026-08-29: a public URL attached to a Warp agent prompt is scraped and its extracted page text is surfaced to the model; only the specified page is processed."
  - id: 6
    text: "Evidence checked 2026-08-29: Devin Agent mode browses the web during hosted sessions, and Cognition documents its browser navigating live documentation and downloading or uploading information."
  - id: 5
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0 documents a Fetch extension that retrieves and processes live web or API content from specified URLs after separate installation and configuration."
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; support for web search alone does not prove URL-fetch support.
  - id: 2
    text: "Evidence checked 2026-08-28: Anthropic documents Claude Code's built-in `WebFetch` tool as fetching content from a specified URL."
  - id: 3
    text: "Evidence checked 2026-08-28: Google documents Gemini CLI's `web_fetch` tool as retrieving and processing content from specific URLs, with URL approval and plan-mode confirmation controls."
  - id: 4
    text: "Evidence checked 2026-08-28: Microsoft documents VS Code's built-in `#web/fetch` agent tool as fetching content from a given web page, subject to URL request and response approvals."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: anthropic-claude-code-tools-reference
    title: Anthropic — Claude Code tools reference
    href: https://code.claude.com/docs/en/tools-reference
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: WebFetch
  - id: google-gemini-cli-web-fetch
    title: Google — Gemini CLI web fetch tool
    href: https://geminicli.com/docs/tools/web-fetch/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Technical reference and technical behavior
  - id: microsoft-vscode-agent-web-fetch
    title: Microsoft — VS Code AI features cheat sheet
    href: https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Agent tools — #web/fetch
  - id: microsoft-vscode-agent-url-approvals
    title: Microsoft — Manage approvals and permissions
    href: https://code.visualstudio.com/docs/agents/run/approvals
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: URL approval
  - id: goose-fetch-v1-48
    title: Goose — Fetch Extension at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp/fetch-mcp.md
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "CLI setup and live JSON API retrieval example"
  - id: devin-browser-web-retrieval
    title: Cognition — Introducing Devin
    href: https://docs.devin.ai/get-started/devin-intro
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "General Product Features — Browser"
  - id: warp-url-context
    title: Warp — URLs as Context
    href: https://docs.warp.dev/agents/local-agents/agent-context/urls-as-context/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Referencing websites via URLs"
  - id: replit-agent-web-fetch
    title: Replit — Web Search
    href: https://docs.replit.com/features/agent/web-search
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Features; Usage; Content fetching"
support:
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: "built-in content fetching retrieves page content but does not establish clicks, form entry, or persistent browser-session automation"
        evidence:
          - resourceId: replit-agent-web-fetch
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "only publicly accessible pages are supported"
          - type: runtime
            value: "only the exact user-provided URL is processed; the agent does not follow links or crawl beyond it"
          - type: runtime
            value: "native web search is a separate configurable capability"
        evidence:
          - resourceId: warp-url-context
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Devin hosted web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "live-page retrieval is browser-mediated rather than a dedicated raw HTTP-fetch API"
          - type: auth
            value: "protected sites can require credentials, cookies, multifactor authentication, or operator assistance"
        evidence:
          - resourceId: devin-browser-web-retrieval
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires the separately configured Fetch MCP extension rather than the default Developer extension"
          - type: runtime
            value: "the documented setup requires uv and uvx"
          - type: runtime
            value: "the page says this extension does not work with Google models because its schema uses format uri"
          - type: policy
            value: "API authentication and network policy depend on the requested endpoint and local environment"
        evidence:
          - resourceId: goose-fetch-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code tools reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: WebFetch requires permission and is subject to configured allow and deny rules plus Anthropic's hostname safety check
        evidence:
          - resourceId: anthropic-claude-code-tools-reference
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Gemini CLI web fetch documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: shows a confirmation dialog for converted URLs and always requires explicit confirmation in Plan Mode
        evidence:
          - resourceId: google-gemini-cli-web-fetch
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Visual Studio Code agent tools documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: URL access uses request pre-approval and fetched-response review unless trusted-domain or approval settings apply
        evidence:
          - resourceId: microsoft-vscode-agent-web-fetch
            type: documented
            observedAt: 2026-08-28
          - resourceId: microsoft-vscode-agent-url-approvals
            type: documented
            observedAt: 2026-08-28
---

Retrieve live web pages or APIs during a run.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
