---
title: Web fetch
description: "Retrieve live web pages or APIs during a run. Compatibility evidence is published only after review."
slug: web-fetch
locale: en
seoTitle: "Web fetch — Can My Agent Use"
socialTitle: Web fetch
socialDescription: "Retrieve live web pages or APIs during a run. Unreviewed cells remain unknown."
llmSummary: "Web fetch: Retrieve live web pages or APIs during a run. Unreviewed harness cells remain unknown until dated public evidence exists."
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
support:
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
