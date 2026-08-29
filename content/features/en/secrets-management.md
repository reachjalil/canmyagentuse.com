---
title: Secrets management
description: Store and provide credentials to product tools or execution environments through a documented secrets feature.
slug: secrets-management
locale: en
seoTitle: Secrets management compatibility — Can My Agent Use
socialTitle: Secrets management
socialDescription: Compare documented secret storage, scope, injection, and masking behavior.
llmSummary: Secrets management is a documented product facility for storing credentials and providing them to tools or execution environments; plain-text configuration is not a secrets manager.
audience: Security engineers and teams connecting agents to real systems.
contentKind: feature
status: published
tags: [security, secrets, credentials, redaction]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Store and provide credentials through a documented secrets feature.
specLabel: Common product term
aliases: [credential vault, secret redaction, environment secrets]
parent: data-security-controls
related: [subagent-approval-boundaries, connectors, mcp-oauth]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Cursor Background Agents accept development-environment secrets, store them encrypted at rest with KMS, and inject them into the remote agent environment. The reviewed page does not document per-tool allowlists, masking behavior, or a guarantee that the model cannot read an injected value."
  - id: 2
    text: "Evidence checked 2026-08-28: GitHub Copilot cloud agent has dedicated Agents secrets at repository and organization scope, repository allowlists for organization secrets, masked session logs, and an MCP-only prefix that withholds designated values from the general agent environment. It cannot access Actions, Codespaces, or Dependabot secrets."
  - id: 3
    text: "Evidence checked 2026-08-28: Devin encrypts global secrets at rest and supports organization, personal, repository, and session scopes, including raw credentials, site cookies, and TOTP material. Organization members can use global secrets while only admins can view or edit them; environment injection means Devin or executed code can access the value."
  - id: 4
    text: "Evidence checked 2026-08-28: Replit's Secrets tool encrypts app and account secrets with AES-256 at rest and TLS in transit and exposes linked values as environment variables to the app and Agent execution environment. Collaborators and non-owner organization members may still recover values by printing environment variables, which is an important disclosure boundary."
  - id: 5
    text: "Evidence checked 2026-08-28: Mistral organization administrators can connect shared apps once, review or add connector credentials, and make those connections available to Vibe workspaces while allowing, restricting, or blocking connector tools. The reviewed docs do not state credential encryption, masking, rotation, export prevention, or whether the model can read a stored credential, so support is partial."
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: GitHub — Secrets reference
    href: https://docs.github.com/en/actions/reference/security/secrets
    kind: docs
    publisher: GitHub
    reviewedAt: 2026-08-28
  - title: GitHub — Agentic workflows and repository secrets
    href: https://docs.github.com/en/actions/tutorials/develop-agentic-workflows-in-github-actions
    kind: docs
    publisher: GitHub
    reviewedAt: 2026-08-28
  - id: cursor-background-agent-secrets
    title: Cursor Docs — Background Agents
    href: https://docs.cursor.com/background-agent
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Base environment setup; secrets; security
  - id: github-copilot-agent-secrets
    title: GitHub Docs — Configure secrets and variables for Copilot cloud agent
    href: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Scope; repository access; injection and masking
  - id: devin-secrets
    title: Devin Docs — Secrets and site cookies
    href: https://docs.devin.ai/product-guides/secrets
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Global, personal, repository, and session secrets; injection
  - id: replit-secrets
    title: Replit Docs — Secrets
    href: https://docs.replit.com/core-concepts/project-editor/app-setup/secrets
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Features; app and account secrets; visibility
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat rename; chat.mistral.ai entry point
  - id: mistral-admin-connector-credentials
    title: Mistral Docs — Connectors
    href: https://docs.mistral.ai/admin/identity-access/connectors
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Organization app connections; Credentials; Workspace permissions
support:
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor Background Agent secrets documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: development-environment secrets are stored encrypted at rest using KMS and injected into the remote Background Agent environment
          - type: policy
            value: per-tool access controls, log masking, rotation, and prevention of model or shell access to injected values are not established by the reviewed page
        evidence:
          - resourceId: cursor-background-agent-secrets
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Copilot cloud-agent secrets documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: dedicated Agents secrets can be scoped to a repository or organization, with all, private, or selected repository access for organization values
          - type: runtime
            value: values are injected as environment variables and masked in session logs; COPILOT_MCP_-prefixed values are exposed only to MCP servers
          - type: policy
            value: the cloud agent cannot access Actions, Codespaces, or Dependabot secrets and variables
        evidence:
          - resourceId: github-copilot-agent-secrets
            type: documented
            observedAt: 2026-08-28
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Devin secrets documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: encrypted-at-rest secrets support organization-wide, personal, repository, and session scope; global values are usable by all organization members but viewable and editable only by admins
          - type: format
            value: supported credential forms include raw values, site cookies, and TOTP material
          - type: runtime
            value: configured values are injected as environment variables for sessions created after configuration, so Devin and executed code can access them
        evidence:
          - resourceId: devin-secrets
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Secrets documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: app-scoped and account-scoped secrets are encrypted with AES-256 at rest and TLS in transit and can be linked to selected Replit Apps
          - type: runtime
            value: values are supplied to the app and Agent execution environment as environment variables; static deployments are excluded
          - type: policy
            value: collaborators and non-owner organization members may be unable to reveal a value in the UI yet can still access it by printing the environment variable
        evidence:
          - resourceId: replit-secrets
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe connector-credential documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: organization administrators can connect shared apps once or add connector credentials for a particular user or Workspace account connection
          - type: policy
            value: Workspace connector tools can be Allowed, Restricted to selected tools, or Blocked
          - type: runtime
            value: encryption, masking, rotation, export prevention, and prevention of model access to credential values are not established by the reviewed pages
        evidence:
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-admin-connector-credentials
            type: documented
            observedAt: 2026-08-28
---

This row asks how a harness handles credentials used by tools, connectors, repositories, terminals, MCP servers, and sub-agents. Plain environment variables or pasted API keys are not equivalent to a managed secret that can be injected without revealing its value to model context or logs.

Evidence should record storage boundary, encryption, user and workspace scope, tool allowlists, just-in-time grants, masking, rotation, revocation, export prevention, prompt-injection defenses, child-agent inheritance, and audit events. Redaction is best-effort unless the documented mechanism prevents the model from receiving the value in the first place.
