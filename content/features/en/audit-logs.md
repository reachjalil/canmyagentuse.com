---
title: Audit logs
description: Record security-relevant activity in an administrative audit log.
slug: audit-logs
locale: en
seoTitle: Audit log compatibility — Can My Agent Use
socialTitle: Audit logs
socialDescription: Compare documented administrative audit logs and their event coverage.
llmSummary: Audit logs are product-provided administrative records of security-relevant activity; ordinary conversation history is not automatically an audit log.
audience: Security operations, compliance, and platform teams.
contentKind: feature
status: published
tags: [security, audit, observability, enterprise]
updated: 2026-08-31
published: 2026-08-28
category: security-privacy
summary: Record security-relevant activity in an administrative audit log.
specLabel: Common product term
aliases: [activity log, security log, admin audit]
parent: data-security-controls
related: [admin-policy-controls, subagent-approval-boundaries, conversation-export]
notes:
  - id: 82
    text: "Evidence checked 2026-08-31: configured Cascade audit hooks can record file reads, edits, commands, and prompt or response boundaries, but this is legacy hook output rather than a complete built-in administrative audit system."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop records workspace security and administrative actions as local JSONL with actor, action, target, summary, and timestamp and exposes recent entries through an authenticated workspace endpoint."
  - id: 74
    text: "Evidence checked 2026-08-29: enterprise Cline v4.1.16 can export authentication, task, tool, approval, edit, MCP, browser, and terminal events through OpenTelemetry, but records omit content and paths and require customer-managed infrastructure."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp Enterprise exposes authentication audit logs to administrators, retains application audit logs at least 30 days, and can provide application logs on request."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok Bot team documentation says spend and usage are visible in the dashboard but an audit view of Bot actions is still coming. Conversation transcripts expose activity but do not satisfy this row's exportable security-event audit-log definition."
  - id: 2
    text: "Evidence checked 2026-08-28: OpenAI's Enterprise Compliance API provides an append-only compliance log stream and JSONL download workflow for supported workspace records, including correlation with Codex activity. The live API reference—not the overview page—owns current event coverage, fields, retention, and permissions."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Enterprise Owners can export the previous 180 days of organization audit events with actor, entity, IP, device, user-agent, and event fields. Chat and project content are excluded from audit logs, and customer-managed encryption key organizations use the Compliance API instead of the export button."
  - id: 4
    text: "Evidence checked 2026-08-28: Mistral Enterprise audit logs are enabled automatically for every Workspace and cover Studio and Vibe authentication, API keys, organization and Workspace changes, user and role changes, settings, and Vibe conversation creation and deletion. Entries include timestamp, human, API-key, or system actor, event, target, and metadata; the reviewed page says export is not currently supported."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor Enterprise audit logs cover authentication, users and roles, API keys, team settings, repositories, Cloud Agent environments, directory groups, privacy, team rules, and commands. Admins can filter and export CSV or stream JSON to SIEM, webhook, S3, and log-aggregation destinations; agent responses and generated code are excluded."
  - id: 6
    text: "Evidence checked 2026-08-28: Perplexity Enterprise provides configurable audit logs with event details and real-time monitoring. The audit-log walkthrough states a 50-seat minimum, while the current Enterprise Max page says one Enterprise Max user removes the organization-wide seat minimum for Audit Logs."
  - id: 7
    text: "Evidence checked 2026-08-28: Replit Enterprise audit logs cover more than 50 event types across deployments, identity, workspace administration, projects, secrets, connectors, domains, and Agent activity. Organization admins can search, filter, bulk export, and stream to Datadog, Splunk, S3, or HTTP; default portal retention is 30 days."
  - id: 8
    text: "Evidence checked 2026-08-28: Google Workspace provides Gemini usage reports and Reporting API audit data for active users, per-app usage patterns, and last-used timestamps, including chats with gemini.google.com. The reviewed documentation describes adoption telemetry rather than a security-event log of prompts, resources, tools, policy decisions, or administrator changes, so support is partial."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp records agent actions with full context for incident review when cloud conversation storage is enabled, but current docs do not establish a centralized exportable administrative audit-log interface."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin Enterprise exposes customer-facing security and administrative audit records with actor, action, organization, timestamp, data, filters, and pagination."
issues: []
resources:
  - id: cognition-windsurf-hooks-audit
    title: "Cognition — Cascade hooks"
    href: https://docs.devin.ai/desktop/cascade/hooks
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Audit hooks; file, command, prompt, and response events"
  - id: openwork-v01839-audit-store
    title: "OpenWork v0.18.39 — workspace audit store"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/audit.ts#L11-L73"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "auditLogPath, recordAudit, and readAuditEntries, lines 11–73"
  - id: openwork-v01839-audit-route
    title: "OpenWork v0.18.39 — workspace audit endpoint"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/server.ts#L2812-L2818"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "GET workspace audit route at lines 2812–2818 and representative audit writes"
  - id: cline-v4-1-16-audit-logs
    title: "Cline v4.1.16 — OpenTelemetry"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/enterprise-solutions/monitoring/opentelemetry.mdx#L7-L35"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview and privacy scope; event inventory in opentelemetry-events.mdx"
  - id: amp-2026-08-audit
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Audit Logging"
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-audit
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Can I see what Bots did on behalf of my team?
  - id: openai-compliance-api
    title: OpenAI — Compliance API and audit events
    href: https://learn.chatgpt.com/docs/enterprise/compliance-api
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: When to use the Compliance API; download logs; administration boundaries
  - id: anthropic-audit-logs
    title: Anthropic Help Center — Access audit logs
    href: https://support.claude.com/en/articles/9970975-access-audit-logs
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Export logs; log structure; recorded events
  - id: mistral-vibe-audit-logs
    title: Mistral Docs — Audit logs overview
    href: https://docs.mistral.ai/admin/monitor-comply/audit-logs/overview
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Availability; event fields; Vibe events; filtering and export
  - id: cursor-enterprise-audit-logs
    title: Cursor Docs — Compliance and Monitoring
    href: https://prod.cursor.com/docs/enterprise/compliance-and-monitoring
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Audit logs; streaming; format; filtering; hooks
  - id: perplexity-enterprise-audit-logs
    title: Perplexity Enterprise — Enabling Audit Logs
    href: https://www.perplexity.ai/enterprise/videos/enabling-audit-logs
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Settings; event details; monitoring; seat requirement
  - id: perplexity-enterprise-max-audit
    title: Perplexity Help Center — What is Enterprise Max?
    href: https://www.perplexity.ai/help-center/en/articles/12310544-what-is-enterprise-max
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Premium security features; Audit Logs seat minimum
  - id: replit-enterprise-audit-logs
    title: Replit Docs — Audit Logs
    href: https://docs.replit.com/teams/identity-and-access-management/audit-logs
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Event coverage; access; export; SIEM; retention
  - id: google-gemini-usage-audit
    title: Google Workspace Admin Help — Review Gemini usage in your organization
    href: https://support.google.com/a/answer/14564320?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Organization and user reports; Gemini app chats; Reporting API audit data
  - id: warp-security-overview
    title: "Warp — Security overview"
    href: https://docs.warp.dev/enterprise/security-and-compliance/security-overview
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Agent permissions — Visibility; responding to security incidents"
  - id: cognition-devin-enterprise-audit-logs
    title: "Cognition — List Audit Logs"
    href: https://docs.devin.ai/api-reference/v3/audit-logs/enterprise-audit-logs
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Permissions; time filters; action; audit record fields"
  - id: cognition-devin-rbac-audit-permission
    title: "Cognition — Custom Roles and RBAC"
    href: https://docs.devin.ai/enterprise/security-access/custom-roles
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Account-Level Roles — View Audit Logs"
support:
  - harness: windsurf
    versions:
      - track: current
        status: partial
        noteIds: [82]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: enterprise-managed
        qualifiers:
          - type: vendor-extension
            value: requires configured legacy Cascade audit hooks
          - type: policy
            value: hook events do not establish a complete searchable administrator audit log, retention contract, or SIEM export
        evidence:
          - resourceId: cognition-windsurf-hooks-audit
            type: documented
            observedAt: 2026-08-31
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "workspace-scoped JSONL; endpoint defaults to 50 newest entries and caps requests at 200"
          - type: auth
            value: "workspace client route; actor distinguishes host and remote and can include client or token-scope metadata"
        evidence:
          - resourceId: openwork-v01839-audit-store
            type: documented
            observedAt: 2026-08-29
          - resourceId: openwork-v01839-audit-route
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
            value: "enterprise-managed deployment"
          - type: policy
            value: "the organization must opt in and operate an OTLP destination"
          - type: format
            value: "anonymous operational records omit conversation content, file paths, and command arguments"
        evidence:
          - resourceId: cline-v4-1-16-audit-logs
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
          - type: plan
            value: "authentication logs are available to Enterprise admins; application logs are provided on request"
          - type: policy
            value: "application logs include timestamps, actor IDs, request details, and events and are retained at least 30 days"
        evidence:
          - resourceId: amp-2026-08-audit
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
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "Devin Enterprise"
          - type: auth
            value: "View Audit Logs in web administration or ManageEnterpriseSettings for the API"
          - type: format
            value: "paginated action, actor, organization, timestamp, and data records"
        evidence:
          - resourceId: cognition-devin-enterprise-audit-logs
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-devin-rbac-audit-permission
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
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: "full-context action logging requires cloud conversation storage"
          - type: format
            value: "centralized fields, retention, filtering, export, and SIEM delivery are not established"
        evidence:
          - resourceId: warp-security-overview
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: no
        stage: planned
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: runtime
            value: spend and usage are visible today; the documented Bot-action audit view is not yet available
        evidence:
          - resourceId: xai-grok-bot-team-audit
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Compliance API access and appropriate administrator permissions are required
          - type: runtime
            value: supported append-only compliance records can be collected continuously or downloaded as JSONL for a SIEM, data lake, investigation, retention, or legal-hold workflow
          - type: policy
            value: exact event coverage, schemas, filters, retention, and request mechanics are delegated to the live API reference and are not established by the overview page
        evidence:
          - resourceId: openai-compliance-api
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Compliance API access and appropriate administrator permissions are required
          - type: policy
            value: coverage follows the workspace and products represented in the current API reference; this overview does not guarantee every local file, tool, approval, or subagent event
        evidence:
          - resourceId: openai-compliance-api
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Codex Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Compliance API access and ChatGPT workspace authentication are required; API-key-only Codex use follows separate Platform controls
          - type: runtime
            value: the overview explicitly supports correlating Codex activity, but the current API reference owns exact local-client event coverage and retention
        evidence:
          - resourceId: openai-compliance-api
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Owner or Primary Owner access is required; the export aggregates the prior 180 days and its download link remains active for 24 hours
          - type: runtime
            value: logs include actor, event, entity, IP, device, user-agent, and related fields; chat and project titles and content are excluded and represented by identifiers
          - type: policy
            value: organizations using customer-managed encryption keys must use Compliance API events instead of the Export logs button
        evidence:
          - resourceId: anthropic-audit-logs
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise Owner or Primary Owner access is required; the organization export aggregates the prior 180 days
          - type: runtime
            value: client and device metadata may appear when available, but chat content is excluded and the reviewed page does not establish complete local tool, approval, or subagent event coverage
        evidence:
          - resourceId: anthropic-audit-logs
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe Enterprise audit-log documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise audit logs are enabled automatically for all Workspaces and cover actions across Vibe and Studio
          - type: runtime
            value: entries include timestamp, human, API-key, or system actor, event, target, and metadata; Vibe conversation creation and deletion are included
          - type: transport
            value: administrators can search and filter in the Admin Panel, but export is not currently supported
        evidence:
          - resourceId: mistral-vibe-audit-logs
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor Enterprise audit-log documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise plan and administrator access are required
          - type: runtime
            value: logs cover authentication, user and role, API-key, settings, repository, Cloud Agent environment, directory-group, privacy, rule, and command events; agent responses and generated code are excluded
          - type: transport
            value: dashboard filters and CSV export are documented, with JSON streaming to SIEM, webhook, S3, and log-aggregation destinations available by contacting Cursor
        evidence:
          - resourceId: cursor-enterprise-audit-logs
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity Enterprise audit-log documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: runtime
            value: organization administrators can activate and customize audit logs, inspect event details, and monitor events in real time
          - type: plan
            value: the audit walkthrough states a 50-seat minimum, while the current Enterprise Max page says one Enterprise Max user removes the organization-wide Audit Logs seat minimum
          - type: policy
            value: the reviewed public pages do not enumerate the complete event schema, retention, export, or streaming behavior
        evidence:
          - resourceId: perplexity-enterprise-audit-logs
            type: documented
            observedAt: 2026-08-28
          - resourceId: perplexity-enterprise-max-audit
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Enterprise audit-log documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: audit logs are exclusive to Enterprise and only organization admins can enable, view, export, or configure streaming
          - type: runtime
            value: more than 50 event types cover deployments, identity, Workspace administration, projects, secrets, connectors, domains, and Agent activity
          - type: transport
            value: the portal supports search, filters, and bulk export; real-time streams support Datadog, Splunk, Amazon S3, and generic HTTP, with 30-day default portal retention
        evidence:
          - resourceId: replit-enterprise-audit-logs
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-28 managed Gemini usage-audit documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: runtime
            value: Workspace administrators can review organization and user adoption, per-app usage, Gemini app chat counts, active days, and last-used timestamps through reports and Reporting API audit data
          - type: runtime
            value: reports can be filtered by organizational unit or group and downloaded, but data can lag and is focused on usage and adoption
          - type: policy
            value: the reviewed page does not establish a security-event log of prompt contents, accessed resources, tool calls, policy decisions, sharing, exports, or administrator changes
        evidence:
          - resourceId: google-gemini-usage-audit
            type: documented
            observedAt: 2026-08-28
---

This row asks whether security-relevant activity is recorded with enough identity and provenance for investigation. Conversation history is not sufficient when it omits tool parameters, connector reads, file changes, approvals, child-agent actions, model routing, policy decisions, sharing, exports, and administrator changes.

Evidence should record event types and fields, user and service identities, timestamps, model and harness version, retention, search, export or streaming API, SIEM integration, tenant isolation, tamper resistance, redaction, regional placement, and documented gaps.
