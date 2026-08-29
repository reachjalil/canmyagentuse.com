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
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT's current retention and deletion contract covers chats and uploaded files used through the desktop client, including separate Library management and workspace retention policies."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT documents chat, Temporary Chat, Library file, custom GPT, and Project retention and lets web users delete covered chats and files, subject to explicit legal and security exceptions."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 documents default non-retention, provider-path exceptions, explicit opt-in persistence, and permanent deletion of local thread history."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit's service-wide Privacy Policy expressly covers prompts, project files, generated responses, revision history, messages, and attachments and provides access, portability, and deletion requests, but no fixed Agent-data period or per-conversation retention control."
  - id: 74
    text: "Evidence checked 2026-08-29: enterprise Cline v4.1.16 prompt storage supports customer-defined S3 lifecycle archival and deletion policies, but those controls cover centralized prompt backups rather than every local, provider, telemetry, cache, and backup data class."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp documents Enterprise Minimal Data Retention, explicit thread deletion within 30 days, account and workspace ownership rules, and optional configurable Enterprise thread retention."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 documents a clean reset that deletes local extension configuration and indices from ~/.continue; provider, Hub, telemetry, and backup retention remain unestablished."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity web supports user deletion of sessions, Projects, and accounts, plus Enterprise session-retention policies and enforced Incognito mode with documented object-specific lifetimes."
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
  - id: 60
    text: "Evidence checked 2026-08-29: Consumer Microsoft Copilot retains conversation activity for 18 months by default, permits individual or full-history deletion, and automatically deletes uploaded files after up to 18 months."
  - id: 61
    text: "Evidence checked 2026-08-29: Grok.com users can delete selected conversations, all history, or the account; deleted and Private Chat conversations are removed within 30 days subject to de-identification and legal or safety exceptions."
issues: []
resources:
  - id: openai-chatgpt-desktop-retention
    title: "OpenAI — Chat and File Retention Policies in ChatGPT"
    href: https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Chats; Temporary Chats; Files; Custom GPTs and projects"
  - id: openai-chatgpt-web-retention
    title: "OpenAI — Chat and File Retention Policies in ChatGPT"
    href: https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Chats; Temporary Chats; Files; Custom GPTs and projects"
  - id: zed-v1-17-2-ai-privacy
    title: "Zed v1.17.2 — AI Privacy"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/privacy-and-security.md#L13-L20"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Default handling, lines 13–20; request paths and hosted-model commitments, lines 22–88"
  - id: zed-v1-17-2-parallel-agents
    title: "Zed v1.17.2 — Parallel Agents"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/parallel-agents.md#L28-L38"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Thread History, lines 28–38"
  - id: replit-privacy-policy-2026-08-03
    title: "Replit — Privacy Policy"
    href: "https://replit.com/privacy-policy"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Last updated August 3, 2026; Personal Data We Collect; Your Privacy Rights and Choices; Security"
  - id: cline-v4-1-16-data-retention-controls
    title: "Cline v4.1.16 — Prompt Storage"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/enterprise-solutions/monitoring/prompt-storage.mdx#L246-L272"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "S3 lifecycle policy example; retention guidance at lines 478–484"
  - id: amp-2026-08-retention
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Data Security and Retention; Thread Data"
  - id: amp-2026-08-retention-plan
    title: "Amp — Pricing"
    href: https://ampcode.com/docs/pricing
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Enterprise configurable thread retention"
  - id: continue-v2-local-reset
    title: "Continue v2.0.0 — extension-state reset"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/faqs.mdx#L311-L316
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How do I reset the state of the extension?"
  - id: perplexity-account-deletion
    title: "Perplexity — Account Deletion"
    href: https://www.perplexity.ai/help-center/en/articles/10354879-account-deletion
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Delete account data, sessions, Projects, files, images, and generated assets"
  - id: perplexity-enterprise-retention
    title: "Perplexity — Data Retention for Enterprise"
    href: https://www.perplexity.ai/help-center/en/articles/11652701-data-retention-for-enterprise
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "File retention; session retention periods; FAQ"
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
  - id: microsoft-copilot-privacy-faq
    title: "Microsoft — Privacy FAQ for Microsoft Copilot"
    href: https://support.microsoft.com/en-us/Microsoft-Copilot/privacy-faq-for-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Conversation History; file uploads and retention"
  - id: spacexai-grok-consumer-faq
    title: "SpaceXAI — Consumer FAQs"
    href: https://x.ai/legal/faq
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Private Chat; data and account deletion; retention"
support:
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "ordinary chats persist until deletion; covered deletions are scheduled within 30 days subject to de-identification and legal or security exceptions"
          - type: runtime
            value: "Library files are managed separately from conversations; Enterprise, Edu, and Healthcare files follow the workspace retention policy; Temporary Chats auto-delete within 30 days"
        evidence:
          - resourceId: openai-chatgpt-desktop-retention
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "ordinary chats persist until deletion; deleted chats and project or custom-GPT files are scheduled for removal within 30 days unless de-identified or retained for legal or security reasons"
          - type: runtime
            value: "Library files are managed separately from chats; Enterprise, Edu, and Healthcare Library files follow workspace retention policy; Temporary Chats auto-delete within 30 days"
        evidence:
          - resourceId: openai-chatgpt-web-retention
            type: documented
            observedAt: 2026-08-29
  - harness: zed-agent
    versions:
      - track: current
        status: partial
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "Zed-hosted inference is zero-retention except designated safety-retention models, which may retain prompts and outputs for at least 30 days"
          - type: host-role
            value: "own API keys, subscriptions, gateways, local models, External Agents, and Terminal Threads follow their respective terms"
          - type: auth
            value: "Zed retains AI data only after explicit feedback submission or eligible training-data opt-in"
          - type: format
            value: "Thread History deletion removes conversation history and associated worktree data locally and is irreversible"
        evidence:
          - resourceId: zed-v1-17-2-ai-privacy
            type: documented
            observedAt: 2026-08-29
          - resourceId: zed-v1-17-2-parallel-agents
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: dated-documentation
          revision: "Replit Privacy Policy last updated 2026-08-03, observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "users can request Personal Data deletion by email or account settings, subject to legal exceptions; data is deleted or de-identified when identifiable retention is no longer necessary"
          - type: runtime
            value: "service-wide lifecycle policy covering prompts and generated responses, not a per-thread or administrator-configurable Agent retention period"
        evidence:
          - resourceId: replit-privacy-policy-2026-08-03
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: partial
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: "enterprise prompt storage"
          - type: policy
            value: "retention is implemented through customer-managed S3 lifecycle rules"
          - type: format
            value: "applies to centralized conversation and tool-input/output backups rather than every Cline data class"
        evidence:
          - resourceId: cline-v4-1-16-data-retention-controls
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "explicitly deleted thread data is removed within 30 days"
          - type: plan
            value: "Minimal Data Retention and configurable retention are Enterprise controls; provider safety retention can still apply"
        evidence:
          - resourceId: amp-2026-08-retention
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-retention-plan
            type: documented
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: partial
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "documented local clean reset, not a configurable retention period"
          - type: runtime
            value: "covers local configuration and indices only, not provider, Hub, telemetry, logs, legal holds, or backups"
        evidence:
          - resourceId: continue-v2-local-reset
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "consumer account deletion completes within 30 days; sessions and Projects can be deleted individually or in bulk"
          - type: plan
            value: "Enterprise session attachments are deleted after seven days while repository, My Files, and Project files persist until deletion"
          - type: runtime
            value: "custom Enterprise retention can make old sessions inaccessible immediately and permanently delete them within seven days"
        evidence:
          - resourceId: perplexity-account-deletion
            type: documented
            observedAt: 2026-08-29
          - resourceId: perplexity-enterprise-retention
            type: documented
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [61]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Grok.com consumer web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "account data may otherwise remain as long as the user keeps it; unauthenticated sessions are not retained for user access"
          - type: policy
            value: "deletion completes within 30 days unless content is de-identified, disassociated, or retained for safety, security, or legal reasons"
        evidence:
          - resourceId: spacexai-grok-consumer-faq
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 consumer Microsoft Copilot web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "conversation activity defaults to 18 months; users can delete individual conversations or all history"
          - type: policy
            value: "uploaded files are stored for up to 18 months and then automatically deleted"
        evidence:
          - resourceId: microsoft-copilot-privacy-faq
            type: documented
            observedAt: 2026-08-29
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
