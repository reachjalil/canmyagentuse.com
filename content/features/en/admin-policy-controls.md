---
title: Organization policy controls
description: Centrally enable, disable, constrain, and enforce models, tools, data paths, sharing, and agent behavior.
slug: admin-policy-controls
locale: en
seoTitle: Organization policy controls compatibility — Can My Agent Use
socialTitle: Organization policy controls
socialDescription: Compare organization-wide enforcement for models, tools, connectors, sharing, data, and autonomous actions.
llmSummary: Organization policy controls are centrally enforced product settings; user preferences and prompt instructions are not organization policy.
audience: Enterprise administrators, security teams, and platform owners.
contentKind: feature
status: published
tags: [security, governance, policy, enterprise]
updated: 2026-09-02
published: 2026-08-28
category: security-privacy
summary: Centrally configure and enforce product settings for an organization.
specLabel: Common product term
aliases: [enterprise policy, organization controls, managed settings]
parent: data-security-controls
related: [audit-logs, training-data-controls, human-approval]
notes:
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Enterprise policies centrally manage editor and agent settings across Windows (Group Policy/Registry), macOS (Configuration Profiles), and Linux (JSON policy files), overriding user and workspace settings to enforce extensions, update modes, MCP server allowlists, and security controls."
  - id: 82
    text: "Evidence checked 2026-09-01: Grok Business administrators centrally set the widest permitted sharing audience for conversations, Projects, and Skills. The policy is enforced immediately, prevents members from creating broader shares, and can restrict access to existing shares; it does not establish a complete model, tool, connector, or retention policy matrix."
  - id: 81
    text: "Evidence checked 2026-08-29: signed-in OpenWork Desktop loads organization policy from OpenWork Cloud and enforces centralized feature, model, provider, and multiple-workspace gates with cached-first loading and periodic refresh."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT managed workspaces expose centrally enforced web controls for feature, model, Work, plugin, app, network, sharing, and role access."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp Enterprise administrators can deploy managed settings that override user and workspace configuration and centrally constrain MCP servers, sharing, model routing, usage, and authentication."
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot team administrators can control Cloud Agents, inherit team privacy mode, MCP configuration and team rules, enforce MCP server and network allowlists, restrict member-added servers, and restrict local-computer execution. The reviewed docs do not establish the full policy surface in this row."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Enterprise managed configuration can enforce requirements and defaults across supported local clients, including approval and permission profiles, sandbox modes, filesystem and network rules, web and computer use, apps, plugins, MCP servers, feature flags, and telemetry. Version support and source precedence are material boundaries."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code managed settings override user, project, local, and command-provided settings, can be delivered from the claude.ai admin console, MDM, OS policy, or managed files, and cover permissions, models, MCP, marketplaces, sandbox restrictions, login, and telemetry. Some stricter lower-level settings and source-composition rules remain exceptions."
  - id: 4
    text: "Evidence checked 2026-08-28: Mistral administrators can enforce Vibe organization controls for model training, public chat sharing, response feedback, chat retention, shared app connections, and Workspace connector-tool access. Public sharing can be disabled while internal organization sharing remains available, and retention choices range from 30 days to one year or Never."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor Teams and Enterprise provide centrally enforced Privacy Mode and team rules, while Enterprise adds organization-wide Agent Sandbox Mode, repository blocklists, model-access restrictions, server-distributed hooks, and MDM policies."
  - id: 6
    text: "Evidence checked 2026-08-28: Perplexity Enterprise administrators can centrally govern retention, incognito mode, models and providers, public session, page, and Project sharing, connector availability, Computer access, organization skills, audit configuration, files, and API access. Organization-wide master switches remain authoritative over role grants."
  - id: 7
    text: "Evidence checked 2026-08-28: Replit Enterprise administrators can require private deployments and authenticated development URLs, ban source-code export, require pre-publish security scans and Git remotes, and require private repositories. These are enforceable organization settings, but the reviewed page does not establish a complete model, tool, connector, sharing, or autonomous-agent policy surface."
  - id: 8
    text: "Evidence checked 2026-08-28: Claude Enterprise organizations can enforce capability, connector, tool, model, and effort restrictions through organization settings and custom roles. Anthropic explicitly documents model and effort enforcement across Claude chat on web and desktop; organization settings are the upper gate and a role cannot widen them."
  - id: 9
    text: "Evidence checked 2026-08-28: Google Workspace administrators can control access to gemini.google.com by organizational unit or configuration group, centrally set Gemini conversation-history retention, and enable or disable Gemini access to Workspace and other Google apps. These settings are specific to managed work or school accounts and do not describe personal Google accounts."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains organization administrators can centrally allow or block JetBrains AI Assistant for all organization users, but the current control is not a complete per-tool, per-model, and per-data policy matrix."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp administrators centrally enforce agent autonomy, command, directory, file, model, data-collection, indexing, and sharing policies."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin Enterprise security profiles centrally enforce network, MCP, git, and management-tool restrictions and prevent lower-level profiles or child sessions from loosening them."
issues: []
resources:
  - id: cognition-devin-desktop-enterprise-policies
    title: "Cognition — Enterprise Policies"
    href: https://docs.devin.ai/desktop/enterprise-policies
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Enterprise Policies for Extension Management; Windows Group Policies"
  - id: spacexai-grok-business-sharing-policy
    title: "SpaceXAI Docs — Manage Licenses and Users"
    href: https://docs.x.ai/grok/management
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Sharing policy; Product Sharing; policy levels; tightening a policy"
  - id: openwork-v01839-desktop-policies
    title: "OpenWork v0.18.39 — Desktop App Policies"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/desktop-app-policies.md#L1-L15"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "policy source and semantics, feature-gate hooks, loading, and refresh at lines 1–15, 25–115, and 117–127"
  - id: openai-chatgpt-web-admin-policy
    title: "OpenAI — Role Based Access Controls for ChatGPT Enterprise"
    href: https://help.openai.com/en/articles/11750701-rbac/
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "capabilities and permissions; Model access; Lockdown Mode roles; configure RBAC"
  - id: amp-2026-08-admin-settings
    title: "Amp — Configuration"
    href: https://ampcode.com/docs/cli/settings
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Enterprise Managed Settings"
  - id: amp-2026-08-enterprise-controls
    title: "Amp — Pricing"
    href: https://ampcode.com/docs/pricing
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Enterprise controls"
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-controls
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: openai-managed-configuration
    title: OpenAI — Managed configuration
    href: https://learn.chatgpt.com/docs/enterprise/managed-configuration
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Admin-enforced requirements; cloud-managed requirements; precedence and layering
  - id: anthropic-managed-settings
    title: Anthropic — Deploy Claude Code managed settings
    href: https://code.claude.com/docs/en/managed-settings
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Deploy managed settings; surfaces; policy precedence
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat rename; web availability
  - id: mistral-vibe-privacy-controls
    title: Mistral Docs — Privacy and data controls
    href: https://docs.mistral.ai/admin/monitor-comply/privacy-data-controls
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Vibe privacy controls
  - id: mistral-vibe-connector-controls
    title: Mistral Docs — Connectors
    href: https://docs.mistral.ai/admin/identity-access/connectors
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Organization connections; Workspace tool permissions
  - id: cursor-enterprise-controls
    title: Cursor Docs — Enterprise
    href: https://prod.cursor.com/docs/enterprise
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Plan comparison; privacy and security controls
  - id: perplexity-enterprise-policy-controls
    title: Perplexity Help Center — Enterprise roles and permissions
    href: https://www.perplexity.ai/help-center/en/articles/11187754-enterprise-roles-and-permissions
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Organization permissions; organization-wide controls
  - id: replit-enterprise-privacy-settings
    title: Replit Docs — Enterprise Privacy Settings
    href: https://docs.replit.com/teams/enterprise-privacy-settings
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Privacy, security, and source-control settings
  - id: anthropic-enterprise-role-policy
    title: Anthropic Help Center — Set up role-based permissions on Enterprise plans
    href: https://support.claude.com/en/articles/13930458-set-up-role-based-permissions-on-enterprise-plans
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Organization gate; capabilities; connectors; models
  - id: anthropic-enterprise-surface-enforcement
    title: Anthropic Help Center — Claude Enterprise consumption guide
    href: https://support.claude.com/en/articles/14782391-claude-enterprise-consumption-guide
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Model access enforcement across chat web and desktop
  - id: google-gemini-admin-access
    title: Google Workspace Admin Help — Turn the Gemini app on or off
    href: https://support.google.com/a/answer/14571493?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: gemini.google.com user access; conversation history and retention
  - id: google-gemini-app-controls
    title: Google Workspace Admin Help — Turn Google apps in Gemini on or off
    href: https://support.google.com/a/answer/15293691?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Workspace and other Google app access
  - id: jetbrains-ai-org-access
    title: JetBrains — Enable or disable JetBrains AI for all organization users
    href: https://sales.jetbrains.com/hc/en-gb/articles/14753675807506-Enable-or-disable-JetBrains-AI-for-all-users-in-your-organization
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Organization-wide allow or block control and propagation timing
  - id: warp-admin-panel
    title: "Warp — Admin Panel for teams"
    href: https://docs.warp.dev/enterprise/team-management/admin-panel
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Settings enforcement; AI, Privacy, Code, Models, and Sharing settings"
  - id: cognition-devin-security-profiles
    title: "Cognition — Security Profiles"
    href: https://docs.devin.ai/product-guides/security-profiles
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Bindings; mandatory enforcement; permissions and governance"
support:
  - harness: grok-web
    versions:
      - track: current
        status: partial
        noteIds: [82]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Grok Business sharing-policy documentation observation
          observedAt: 2026-09-01
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: team administrators centrally constrain conversation, Project, and Skill sharing from Private through Team and Organization, with Public available only for conversations
          - type: runtime
            value: tightening the ceiling immediately blocks newly broader shares and limits existing wider shares
          - type: format
            value: reviewed documentation does not establish a complete Grok policy surface for models, connectors, tools, training, data retention, or agent behavior
        evidence:
          - resourceId: spacexai-grok-business-sharing-policy
            type: documented
            observedAt: 2026-09-01
  - harness: openwork-desktop
    versions:
      - track: current
        status: partial
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: "requires OpenWork Cloud organization sign-in and policy delivery"
          - type: plan
            value: "organization control-plane capability; unsigned local use has no centrally delivered policy"
          - type: policy
            value: "reviewed keys include feature booleans and allowed Desktop versions; false disables a gated feature, and helpers block restricted models or providers"
        evidence:
          - resourceId: openwork-v01839-desktop-policies
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
          - type: plan
            value: "workspace policy and custom-role scope depends on eligible Enterprise, Edu, Healthcare, or Teachers plan capabilities"
          - type: policy
            value: "workspace owners set baselines and custom roles for tools and models; Lockdown Mode can further restrict web search, deep research, agent features, Canvas networking, and app, MCP, or connector behavior"
          - type: runtime
            value: "configuration is available through ChatGPT web Workspace settings and the admin console"
        evidence:
          - resourceId: openai-chatgpt-web-admin-policy
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
            value: "managed settings and advanced organization controls require Enterprise"
          - type: policy
            value: "managed settings override workspace and user settings"
        evidence:
          - resourceId: amp-2026-08-admin-settings
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-enterprise-controls
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
            value: "enterprise-wide mandatory enforcement requires Enterprise"
          - type: policy
            value: "mandatory profiles intersect with lower-level profiles, which may tighten but not loosen restrictions"
        evidence:
          - resourceId: cognition-devin-security-profiles
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "availability and settings vary across team, Business, and Enterprise plans"
          - type: policy
            value: "organization-enforced settings cannot be overridden; Respect User Setting permits personal control"
        evidence:
          - resourceId: warp-admin-panel
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains organization administration article observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: organization-wide access can be allowed or blocked and may take up to one hour to propagate; controls for other vendors' plugins are outside this setting
        evidence:
          - resourceId: jetbrains-ai-org-access
            type: documented
            observedAt: 2026-08-29
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot team documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: enterprise availability is rolling out and controls vary by organization plan
          - type: policy
            value: documented controls cover cloud agents, privacy mode, MCP and plugins, team rules, network allowlists, and local execution; full model, upload, sharing, retention, and subagent fan-out policy is not established
        evidence:
          - resourceId: xai-grok-bot-team-controls
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Enterprise managed configuration observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: managed requirements and defaults can constrain permission profiles, approvals, sandboxing, filesystem and network access, browser and computer use, apps, plugins, MCP servers, feature flags, and telemetry
          - type: runtime
            value: support is key- and client-version-specific; managed source precedence, signed cache behavior, startup refresh, and fail-closed loading are documented boundaries
          - type: policy
            value: the reviewed page does not establish every upload, retention, sharing, model, or subagent-fan-out control in this row
        evidence:
          - resourceId: openai-managed-configuration
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Codex managed configuration observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: requirements.toml and managed defaults can centrally constrain permissions, approvals, sandboxing, filesystem and network access, web and computer use, apps, plugins, MCP servers, feature flags, and telemetry
          - type: runtime
            value: supported keys depend on Codex version and authentication; cloud-managed bundles are identity-matched, signed, cached, and fail closed when no valid cache can be loaded
          - type: policy
            value: API-key-only authentication and Platform organization controls are outside this ChatGPT workspace configuration cell
        evidence:
          - resourceId: openai-managed-configuration
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Code managed settings observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: admin settings override user, project, local, and --settings values and can govern permissions, models, MCP servers, marketplaces, sandboxing, login, telemetry, and minimum versions
          - type: transport
            value: policy can be delivered by server-managed settings, MDM or OS policy, managed files, or a restricted Windows user-policy fallback
          - type: runtime
            value: source selection and optional merging have documented precedence, version gates, stricter-lower-level exceptions, refresh intervals, and /status verification
        evidence:
          - resourceId: anthropic-managed-settings
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe organization-policy documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: administrators can centrally control Vibe model training, public chat sharing, response feedback, chat retention, shared app connections, and Workspace connector tools
          - type: policy
            value: disabling public chat sharing still permits sharing within the Organization; connector tools can be Allowed, Restricted, or Blocked by Workspace
          - type: runtime
            value: Le Chat is now Vibe and chat.mistral.ai remains the web entry point
        evidence:
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-privacy-controls
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-connector-controls
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor enterprise-control documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Teams can enforce Privacy Mode and team rules; Enterprise adds organization-wide Agent Sandbox Mode, repository blocklists, model restrictions, server-distributed hooks, and MDM policy
          - type: policy
            value: the reviewed plan comparison distinguishes user choice from team-enforced and organization-enforced controls
        evidence:
          - resourceId: cursor-enterprise-controls
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity Enterprise policy documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: organization controls cover retention, enforced incognito mode, models and providers, audit configuration, public session, page, and Project sharing, connectors, Computer, files, API access, and organization skills
          - type: runtime
            value: organization-wide master switches remain authoritative and role permissions cannot enable a feature that an administrator disabled globally
        evidence:
          - resourceId: perplexity-enterprise-policy-controls
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit Enterprise policy documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: organization administrators can require private deployments and development URLs, ban source export, require security scans and Git remotes, and restrict users to private repositories
          - type: runtime
            value: some controls apply only to new publications or future publishing actions, while authenticated development URLs apply retroactively
          - type: policy
            value: the reviewed page does not establish complete model, tool, connector, sharing, data-retention, or agent-autonomy controls
        evidence:
          - resourceId: replit-enterprise-privacy-settings
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise web-policy documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise organization settings and custom roles can govern Chat capability, features, connectors and tools, models, default models, and effort limits
          - type: policy
            value: organization settings are the upper gate and model and effort restrictions are explicitly enforced in Claude chat on web
        evidence:
          - resourceId: anthropic-enterprise-role-policy
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-enterprise-surface-enforcement
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise desktop-policy documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise organization settings and custom roles can govern Chat capability, features, connectors and tools, models, default models, and effort limits
          - type: policy
            value: model and effort restrictions are explicitly enforced in Claude chat on desktop; a role cannot widen an organization-disabled capability
        evidence:
          - resourceId: anthropic-enterprise-role-policy
            type: documented
            observedAt: 2026-08-28
          - resourceId: anthropic-enterprise-surface-enforcement
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: hosted-observation
          revision: 2026-08-28 managed Gemini web-policy documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: Workspace administrators can control gemini.google.com access by organizational unit or configuration group and centrally set whether conversations are saved and retained for 3, 18, or 36 months
          - type: policy
            value: administrators can separately allow or block Gemini access to Workspace apps and other Google apps
          - type: plan
            value: these controls apply to managed Google Workspace accounts; personal Google Accounts use individual settings instead
        evidence:
          - resourceId: google-gemini-admin-access
            type: documented
            observedAt: 2026-08-28
          - resourceId: google-gemini-app-controls
            type: documented
            observedAt: 2026-08-28
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [86]
        target:
          kind: dated-documentation
          revision: 2026-09-02 Devin Desktop Enterprise documentation
          observedAt: 2026-09-02
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: "enterprise policies centrally enforce settings across Windows, macOS, and Linux, overriding local user and workspace settings"
        evidence:
          - resourceId: cognition-devin-desktop-enterprise-policies
            type: documented
            observedAt: 2026-09-02
---

This row covers centrally enforced organization policy, not a user preference or a natural-language instruction the agent may ignore. Useful controls cover allowed models and providers, tools and connectors, MCP servers, network destinations, data sharing, uploads, memory, retention, training use, public links, autonomous actions, and sub-agent fan-out.

Evidence should record scope, role required to change policy, inheritance and exceptions, client support, propagation time, offline behavior, precedence over local configuration, change logs, and the user experience when policy blocks an action.
