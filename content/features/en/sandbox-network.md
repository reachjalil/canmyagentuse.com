---
title: Sandbox network access
description: Allow, deny, or restrict outbound network access from a tool sandbox.
slug: sandbox-network
locale: en
seoTitle: "Sandbox network access — Can My Agent Use"
socialTitle: Sandbox network access
socialDescription: Compare outbound network access and restrictions for tool sandboxes.
llmSummary: "Sandbox network access means a product documents allowing, denying, or restricting outbound access from its execution sandbox."
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-29
published: 2026-08-28
category: runtime
summary: Allow, deny, or restrict outbound network access from a tool sandbox.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; network controls are scoped to the documented execution sandbox rather than ordinary application traffic.
  - id: 2
    text: "Evidence checked 2026-08-28: Gemini CLI documents a sandbox network-access switch and sandbox profiles that allow direct or proxied network access."
  - id: 3
    text: "Evidence checked 2026-08-28: VS Code documents preview agent sandboxing with network blocked by default, unrestricted-network opt-in, and allow/deny domain controls."
  - id: 4
    text: "Evidence checked 2026-08-28: Cursor documents isolated Cloud Agent VMs governed by network policies and operator-controlled network access, but the reviewed page does not expose the policy's complete rule syntax."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI documents experimental OS-level sandboxing, an effective network policy, and explicit URL/domain allow and deny controls."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin security profiles enforce outbound hostname or CIDR allowlists on managed session VMs and block every other destination across shells, browsers, packages, and scripts."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: Anthropic — Claude Code corporate proxy configuration
    href: https://docs.anthropic.com/en/docs/claude-code/corporate-proxy
    kind: docs
    publisher: Anthropic
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-sandbox-configuration
    title: Google — Gemini CLI configuration
    href: https://geminicli.com/docs/reference/configuration/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: tools.sandboxNetworkAccess and sandboxing
  - id: microsoft-vscode-agent-approvals-sandbox
    title: Microsoft — Manage approvals and permissions
    href: https://code.visualstudio.com/docs/agents/run/approvals
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sandbox agent commands and configure network access
  - id: cursor-cloud-agent-security
    title: Cursor — What are background agents?
    href: https://prod.cursor.com/help/ai-features/background-agents
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How background agents work
  - id: github-copilot-cli-sandbox-network
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: /sandbox, --sandbox, --allow-url, and --deny-url
  - id: cognition-devin-security-profiles
    title: "Cognition — Security Profiles"
    href: https://docs.devin.ai/product-guides/security-profiles
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Restrictions in a profile; Network policy"
support:
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "all non-allowlisted outbound connections are blocked and destinations may be requested for approval"
          - type: runtime
            value: "machine-level enforcement on Devin-managed hosted VMs"
        evidence:
          - resourceId: cognition-devin-security-profiles
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Gemini CLI sandbox configuration
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: sandboxing is configurable and disabled by default; tools.sandboxNetworkAccess defaults to false and changes require restart
        evidence:
          - resourceId: google-gemini-cli-sandbox-configuration
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        stage: preview
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current VS Code approvals and sandbox documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: preview
            value: agent terminal sandboxing is preview-only and available on macOS, Linux, and WSL2
          - type: policy
            value: outbound access is blocked unless allowed when sandboxing is enabled; domain allow and deny lists and an unrestricted-network switch are configurable
        evidence:
          - resourceId: microsoft-vscode-agent-approvals-sandbox
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Cursor Cloud Agent security documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: applies to isolated Cloud Agent VMs; first-party documentation states that environments have operator-controlled network access and network policies without documenting the full rule model on the reviewed page
        evidence:
          - resourceId: cursor-cloud-agent-security
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        stage: experimental
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI command reference
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: experimental
            value: OS-level local sandboxing and the --sandbox switch require experimental mode
          - type: policy
            value: /sandbox exposes the effective network policy, while --allow-url and --deny-url control specific URLs or domains and deny rules take precedence
        evidence:
          - resourceId: github-copilot-cli-sandbox-network
            type: documented
            observedAt: 2026-08-28
---

Allow or deny outbound network from a tool sandbox.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
