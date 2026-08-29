---
title: Pull request integration
description: "Open or review pull requests through a documented product integration."
slug: git-pull-requests
locale: en
seoTitle: "Pull request integration — Can My Agent Use"
socialTitle: Pull request integration
socialDescription: "Open or review pull requests through a documented product integration. Unreviewed cells remain unknown."
llmSummary: "Pull request integration means a product documents opening or reviewing pull requests; unreviewed harness cells remain unknown."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Open or review pull requests through a documented integration.
specLabel: Common product term
highlight: true
notes:
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; opening and reviewing pull requests qualify independently, with surface-specific scope recorded below.
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Code documents `/review [PR]` for local pull-request review and `--from-pr` for resuming a session linked to a pull request."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor documents Cloud Agents automatically opening pull requests and attaching test evidence and other artifacts to them."
  - id: 4
    text: "Evidence checked 2026-08-28: VS Code documents Cloud agent sessions that create a branch and pull request, plus local review and checkout controls for that result."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents a native `/review` command that runs its code-review agent against session changes."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: GitHub — Copilot cloud agent
    href: https://docs.github.com/en/copilot/tutorials/cloud-agent/pilot-cloud-agent
    kind: docs
    publisher: GitHub
    reviewedAt: 2026-08-28
  - id: anthropic-claude-code-commands-pr-review
    title: Anthropic — Claude Code commands
    href: https://code.claude.com/docs/en/commands
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: /review and /resume
  - id: cursor-cloud-agent-pull-requests
    title: Cursor — What are background agents?
    href: https://prod.cursor.com/help/ai-features/background-agents
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Pull-request results and artifacts
  - id: microsoft-vscode-cloud-agent-pull-request
    title: Microsoft — Hand off work between agents in VS Code
    href: https://code.visualstudio.com/docs/agents/agents-handoff-tutorial
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Continue in the cloud
  - id: github-copilot-cli-pr-review
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: /review
support:
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Claude Code command documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the documented native capability reviewed here is pull-request review and session linkage; opening a pull request can additionally depend on GitHub tooling and repository authorization
        evidence:
          - resourceId: anthropic-claude-code-commands-pr-review
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Cursor Cloud Agent documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: Cloud Agent pull requests require an authorized repository and run on Cursor's hosted VM environment
        evidence:
          - resourceId: cursor-cloud-agent-pull-requests
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current VS Code cloud-agent handoff documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: the pull-request workflow applies to a GitHub-backed Cloud session selected from VS Code and requires repository authorization
        evidence:
          - resourceId: microsoft-vscode-cloud-agent-pull-request
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI command reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /review analyzes current session changes; the reviewed command reference does not by itself establish opening or reviewing a hosted pull-request object from the CLI
        evidence:
          - resourceId: github-copilot-cli-pr-review
            type: documented
            observedAt: 2026-08-28
---

Open or review pull requests through a documented product integration.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
