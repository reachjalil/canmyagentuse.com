---
title: Data retention controls
description: Configure or document how long covered product data is retained and how it can be deleted.
slug: data-retention-controls
locale: en
seoTitle: Data retention controls — Can My Agent Use
socialTitle: Data retention controls
socialDescription: Compare configurable retention, deletion scope, timelines, backups, and legal exceptions.
llmSummary: Retention controls cover prompts, files, outputs, tool data, memory, logs, feedback, and backups; deleting a visible conversation alone is a narrower claim.
audience: Privacy, compliance, and security teams evaluating agent data lifecycles.
contentKind: feature
status: published
tags: [security, privacy, retention, deletion]
updated: 2026-08-29
published: 2026-08-28
category: security-privacy
summary: Configure or document retention and deletion for covered product data.
specLabel: Common product term
aliases: [retention policy, delete chat data, zero retention, data lifecycle]
parent: data-security-controls
related: [conversation-export, audit-logs]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents steps to remove Grok Bot routines, connectors, shared files, and Bots, but deleting a Bot does not remove shared-computer files or browser sessions and backend retention follows applicable Cursor terms. No configurable retention period or verified completion timeline is documented on the reviewed page."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Enterprise Owners can configure conversation and project retention with a 30-day minimum; retention is activity-based, defaults to indefinite when unset, deletes chats, projects, and artifacts at the boundary, and records changes in audit logs."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code documents different server retention by account and preference, optional qualified Enterprise zero-data-retention, a local plaintext transcript cache retained 30 days by default, and a configurable local `cleanupPeriodDays`."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini Apps personal accounts default to 18-month activity deletion and allow 3, 18, 36 months, indefinite retention, or manual deletion. Keep Activity-off and temporary chats remain for 72 hours, while human-reviewed material can remain for up to three years."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor Privacy Mode uses ZDR agreements for model providers and temporary encrypted file-content caches, but indexing may persist embeddings and metadata and safety investigations follow provider retention policies. No user-configurable retention period is documented on the reviewed page."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 documents retention and deletion controls for cloud-shared conversations, but not the complete lifecycle of local sessions, provider data, telemetry, caches, or backups."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp documents cloud-conversation deletion, account-deletion timing, shared-session expiry, and telemetry retention, but no general configurable retention period."
  - id: 53
    text: "Evidence checked 2026-08-29: Cognition documents that data processed through hosted Devin is retained for the customer relationship unless the customer specifies otherwise, while feedback and interaction data may be retained as needed."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-privacy
    title: xAI — Grok Bot approvals, security, and privacy
    href: https://docs.x.ai/grok-bot/approvals-security-and-privacy
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Remove access and working data
  - id: anthropic-enterprise-retention
    title: Anthropic Help Center — Configure custom data retention controls
    href: https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How data retention works; what gets deleted
  - id: anthropic-claude-code-data-usage
    title: Anthropic — Claude Code data usage
    href: https://code.claude.com/docs/en/data-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Data retention
  - id: google-gemini-activity
    title: Google — Manage and delete Gemini Apps activity
    href: https://support.google.com/gemini/answer/13278892?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Delete activity; turn off Keep Activity; auto-delete
  - id: google-gemini-privacy-hub
    title: Google — Gemini Apps Privacy Hub
    href: https://support.google.com/gemini/answer/13594961
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How long we retain your data
  - id: cursor-data-use
    title: Cursor — Data Use and Privacy Overview
    href: https://cursor.com/data-use
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Privacy Mode; indexing; temporary cache
  - id: opencode-v1-18-25-sharing
    title: "OpenCode v1.18.25 — Share"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/share.mdx#L66-L104
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Disabled; Un-sharing; Privacy — Data retention"
  - id: warp-cloud-conversations
    title: "Warp — Cloud-synced conversations"
    href: https://docs.warp.dev/agents/local-agents/cloud-conversations/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Privacy and data; Deleting conversations"
  - id: warp-session-sharing-retention
    title: "Warp — Agent Session Sharing"
    href: https://docs.warp.dev/agents/local-agents/session-sharing/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Data retention and access"
  - id: warp-security-retention
    title: "Warp — Security overview"
    href: https://docs.warp.dev/enterprise/security-and-compliance/security-overview
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Data handling and privacy — Data retention"
  - id: cognition-devin-security
    title: "Cognition — Security at Cognition"
    href: https://docs.devin.ai/admin/security
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Privacy and Intellectual Property; data retention policy"
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
            value: "documented vendor retention policy; no self-service numeric retention window or deletion schedule is established"
        evidence:
          - resourceId: cognition-devin-security
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: partial
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "cloud-synced conversations can be permanently deleted; shared sessions expire after about one week; verified account deletion is processed within 30 days"
          - type: policy
            value: "collected telemetry is retained indefinitely and no general configurable period is documented"
        evidence:
          - resourceId: warp-cloud-conversations
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-session-sharing-retention
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-security-retention
            type: documented
            observedAt: 2026-08-29
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
          - type: policy
            value: "shared conversations remain available until unshared; /unshare deletes the cloud-shared copy"
          - type: format
            value: "local sessions, provider retention, telemetry, caches, and backups remain unestablished"
        evidence:
          - resourceId: opencode-v1-18-25-sharing
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: operators can separately remove routines, connectors, shared files, browser sessions, Bots, and the account; deleting one Bot does not remove account-shared computer state
          - type: runtime
            value: configurable retention periods, backup expiry, legal exceptions, and verified deletion-completion timelines are not established by the reviewed page
        evidence:
          - resourceId: xai-grok-bot-privacy
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Owner or Primary Owner can configure chat and project retention with a 30-day minimum; data is retained indefinitely by default when no custom period is set
          - type: runtime
            value: activity resets the applicable timer; expired chats, projects, and artifacts are permanently deleted at midnight UTC, and configuration changes are audited
        evidence:
          - resourceId: anthropic-enterprise-retention
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Owner or Primary Owner can configure organization chat and project retention with a 30-day minimum; data is retained indefinitely by default when no custom period is set
          - type: runtime
            value: activity resets the applicable timer; expired chats, projects, and artifacts are permanently deleted at midnight UTC, and configuration changes are audited
        evidence:
          - resourceId: anthropic-enterprise-retention
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Code documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: server retention is 5 years for opted-in consumer improvement, 30 days for opted-out consumers and standard commercial use, and qualified Enterprise organizations may receive separately enabled ZDR
          - type: runtime
            value: local plaintext session transcripts are kept for 30 days by default and can be adjusted with cleanupPeriodDays
          - type: policy
            value: feedback submissions, safety processing, remote sessions, cloud providers, and local artifacts have separate paths and retention rules
        evidence:
          - resourceId: anthropic-claude-code-data-usage
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps privacy documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: applies to signed-in personal accounts; work and school account retention is controlled by Google Workspace administrators
          - type: policy
            value: activity auto-deletes after 18 months by default and can be changed to 3, 18, or 36 months or indefinite; manual item, range, or all-time deletion is supported
          - type: policy
            value: Keep Activity-off and temporary chats are retained 72 hours; human-reviewed data can remain up to three years and other Google services have separate retention
        evidence:
          - resourceId: google-gemini-activity
            type: documented
            observedAt: 2026-08-28
          - resourceId: google-gemini-privacy-hub
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor privacy documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: Privacy Mode uses ZDR agreements with model providers; encrypted file-content caches are temporary and their server-side keys exist only for the request
          - type: runtime
            value: codebase indexing may persist embeddings and metadata, and abuse-triggered data may follow provider investigation retention
          - type: policy
            value: user-configurable retention periods, backup expiry, and verified deletion completion are not established by the reviewed page
        evidence:
          - resourceId: cursor-data-use
            type: documented
            observedAt: 2026-08-28
---

This row asks what is retained, for how long, by whom, and how deletion works. The visible conversation is only one object; prompts, uploads, tool results, memory, generated files, feedback, telemetry, safety logs, caches, search indexes, and backups can have different lifetimes.

Evidence should record default and configurable periods, plan and workspace scope, deletion initiation and completion timelines, administrator versus user controls, legal or abuse-monitoring exceptions, backup expiry, account-deletion behavior, and APIs or exports that let an organization verify completion.
