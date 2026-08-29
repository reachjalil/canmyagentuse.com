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
updated: 2026-08-29
published: 2026-08-28
category: tools
summary: Open or review pull requests through a documented integration.
specLabel: Common product term
highlight: true
notes:
  - id: 10
    text: "Evidence checked 2026-08-29: Replit Agent can run project commands, while the Project Editor Shell provides GitHub CLI support for pull requests; this is an authenticated CLI path rather than a dedicated Agent pull-request action."
  - id: 9
    text: "Evidence checked 2026-08-29: Warp's first-party local workflow reviews an open pull request by collecting its description and diff with GitHub CLI or a checked-out branch and asking the agent for focused findings."
  - id: 8
    text: "Evidence checked 2026-08-29: Devin's GitHub integration enables hosted sessions to push branches, open pull requests, and participate in pull-request discussions for repositories granted to the integration."
  - id: 7
    text: "Evidence checked 2026-08-29: Goose CLI v1.48.0 ships first-party recipes that create pull requests from local changes and review existing pull requests through Git and GitHub CLI commands."
  - id: 6
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant integrates with IDE pull-request workflows to generate a title and description during creation and to summarize an incoming GitHub pull request when opened."
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
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 can create and review pull requests through its separately installed GitHub Actions integration rather than through local TUI-native PR handling."
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
  - id: jetbrains-ai-vcs
    title: JetBrains — AI in version control
    href: https://www.jetbrains.com/help/ai-assistant/ai-in-vcs-integration.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Generate pull request title and description; summarize incoming GitHub pull requests"
  - id: goose-pr-generator-v1-48
    title: Goose — PR Generator recipe at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/src/pages/recipes/data/recipes/pull-request-generator.yaml
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "push_pr option and GitHub CLI creation workflow"
  - id: goose-pr-analysis-v1-48
    title: Goose — Analyze PR recipe at v1.48.0
    href: https://github.com/aaif-goose/goose/blob/25021517f12cab87c94bed0874fe7d28168dc264/documentation/src/pages/recipes/data/recipes/analyze-pr.yaml
    kind: docs
    publisher: Goose
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "List and inspect pull requests, comments, commits, and files"
  - id: devin-github-integration
    title: Cognition — GitHub integration
    href: https://docs.devin.ai/integrations/gh
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Why integrate Devin with GitHub; permissions; pull request templates"
  - id: warp-pr-review
    title: Warp — Review PRs like a senior dev
    href: https://docs.warp.dev/guides/agent-workflows/how-to-review-prs-like-a-senior-dev/
    kind: docs
    publisher: Warp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Prerequisites; give the agent context; ask for focused feedback; verify findings"
  - id: replit-agent-commands
    title: Replit — Introduction to AI
    href: https://docs.replit.com/learn/foundations/introduction-to-ai
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Replit Agent"
  - id: replit-git-shell
    title: Replit — Using the Git pane
    href: https://docs.replit.com/features/workspace-tools/git-interface
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Using Git commands in Shell; Change management"
  - id: opencode-v1-18-25-github
    title: "OpenCode v1.18.25 — GitHub integration"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/github.mdx#L6-L26
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Features; Installation; Supported Events"
support:
  - harness: opencode
    versions:
      - track: current
        status: partial
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "OpenCode GitHub agent runs inside GitHub Actions"
          - type: auth
            value: "requires the OpenCode GitHub App or an authorized GitHub token and workflow permissions"
        evidence:
          - resourceId: opencode-v1-18-25-github
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [10]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Replit Agent web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: transport
            value: "pull-request operations use standard GitHub CLI commands in the Project Editor Shell rather than a dedicated Agent pull-request interface"
          - type: auth
            value: "private GitHub repository operations require suitable GitHub credentials or a personal access token"
        evidence:
          - resourceId: replit-agent-commands
            type: documented
            observedAt: 2026-08-29
          - resourceId: replit-git-shell
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Warp documentation updated 2026-08-27 and observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "requires a Git-tracked project with a branch or open pull request"
          - type: runtime
            value: "GitHub CLI retrieves hosted pull-request metadata or diffs; a checked-out branch can instead use git diff"
          - type: policy
            value: "the guide tells the user to verify findings before leaving comments"
        evidence:
          - resourceId: warp-pr-review
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-29 Devin hosted web documentation observation
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "a GitHub organization connection must be installed and authorized"
          - type: policy
            value: "Devin can act only on repositories granted to the integration"
          - type: policy
            value: "organization-level GitHub permissions govern pull-request creation and discussion access"
        evidence:
          - resourceId: devin-github-integration
            type: documented
            observedAt: 2026-08-29
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: release
          revision: Goose v1.48.0 release commit 25021517f12cab87c94bed0874fe7d28168dc264
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "first-party Goose recipes implement the integration through local Git and GitHub CLI commands"
          - type: policy
            value: "the push_pr option defaults to false and must be enabled to create and push a pull request"
          - type: auth
            value: "requires a local Git repository, required CLI programs, network access, and authenticated repository permissions"
          - type: host-role
            value: "this is a recipe-and-shell workflow rather than a dedicated hosted pull-request interface"
        evidence:
          - resourceId: goose-pr-generator-v1-48
            type: documented
            observedAt: 2026-08-29
          - resourceId: goose-pr-analysis-v1-48
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "pull-request title and description generation runs in the relevant JetBrains IDE VCS tool window"
          - type: policy
            value: "incoming pull-request summaries must be enabled in AI Assistant settings"
          - type: auth
            value: "incoming summaries depend on the bundled GitHub plugin and an accessible GitHub pull request"
          - type: runtime
            value: "the documentation establishes creation assistance and summary-based review, not autonomous submission or approval"
        evidence:
          - resourceId: jetbrains-ai-vcs
            type: documented
            observedAt: 2026-08-29
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
