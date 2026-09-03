---
title: Role-based access control (RBAC)
description: Assign permissions to users through documented roles.
slug: role-based-access
locale: en
seoTitle: Role-based access control compatibility — Can My Agent Use
socialTitle: Role-based access control
socialDescription: Compare documented product roles and the permissions assigned to them.
llmSummary: Role-based access control assigns permissions to users through roles; possession of a shared link alone is not RBAC.
audience: Teams requiring least-privilege collaboration.
contentKind: feature
status: published
tags: [collaboration, permissions, RBAC, teams]
updated: 2026-09-02
published: 2026-08-28
category: collaboration
summary: Assign and enforce permissions through documented roles.
specLabel: Common product term
aliases: [RBAC, team roles, collaborator permissions]
parent: collaboration-and-portability
related: [admin-policy-controls, audit-logs, conversation-sharing]
notes:
  - id: 86
    text: "Evidence checked 2026-09-02: Devin Desktop Enterprise supports role-based access control with default Admin and User roles, custom role creation, and granular permission assignments across team and editor resources."
  - id: 80
    text: "Evidence checked 2026-09-01: Grok Enterprise organizations support custom roles mapped from identity-provider groups; roles are prioritized, can be assigned teams, permissions, and product licenses, and include a default Member role. This is Enterprise organization governance, not a claim about personal Grok.com accounts."
  - id: 79
    text: "Evidence checked 2026-08-29: eligible ChatGPT workspace roles control member access to desktop-visible tools and models, with direct and group assignments, inherited defaults, additive grants, and a separate Lockdown restriction path."
  - id: 77
    text: "Evidence checked 2026-08-29: eligible ChatGPT workspace owners can create reusable custom roles on the web, assign them directly or through groups, and combine inherited, allowed, and denied feature permissions."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp distinguishes workspace administrators, ordinary members, groups, project owners, and thread owners and uses those roles for visibility, policy, and administration."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude Enterprise custom roles can grant product capabilities, connector and model access, and delegated administration through group assignments. Organization settings are the upper gate, permissions are additive across roles, and only members whose organization role is Custom are governed by custom roles."
  - id: 3
    text: "Evidence checked 2026-08-28: Cursor documents team Member, Admin, and Unpaid Admin roles plus Enterprise organization groups that can map cohorts into teams with Member or Admin roles and apply model and agent controls. The role vocabulary is fixed rather than an arbitrary custom-role builder."
  - id: 4
    text: "Evidence checked 2026-08-28: Perplexity Enterprise supports base and custom roles assigned directly or through managed or SCIM groups. Roles grant product, sharing, file, API, security, and administrative permissions, while organization-level master switches remain separate."
  - id: 5
    text: "Evidence checked 2026-08-28: Replit provides Admin, Member, Guest, and Viewer roles plus Enterprise custom groups and app-specific Owner, Publisher, Editor, Viewer, and None access levels. Groups can receive access to selected apps; permissions differ between organization and app scope."
  - id: 6
    text: "Evidence checked 2026-08-28: Mistral uses predefined roles at independent Organization and Workspace scopes, permits multiple additive roles, and supports assignments in the Admin Panel or Admin API. Workspace roles distinguish Vibe access from developer, contributor, observability, and administrative capabilities."
  - id: 7
    text: "Evidence checked 2026-08-28: Google Workspace supports administrator roles with a Gemini service privilege that can grant access to Gemini settings, while end-user access to gemini.google.com is assigned through organizational units or configuration groups rather than a Gemini-specific user-role system. This is partial product RBAC."
  - id: 52
    text: "Evidence checked 2026-08-29: Managed Warp teams define Owner, Admin, and Member roles with distinct administrative and product permissions."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin Enterprise implements organization- and account-level RBAC with custom roles assembled from named permissions and assigned to users or identity-provider groups."
resources:
  - id: cognition-devin-desktop-rbac
    title: "Cognition — Role Based Access & Management"
    href: https://docs.devin.ai/desktop/accounts/rbac-role-management
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Role Based Access Controls; Role Management; Role Permissions"
  - id: openai-chatgpt-desktop-rbac
    title: "OpenAI — Role Based Access Controls for ChatGPT Enterprise"
    href: https://help.openai.com/en/articles/11750701-rbac/
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; capabilities and permissions; role evaluation; configuration"
  - id: openai-chatgpt-web-rbac
    title: "OpenAI — Role Based Access Controls for ChatGPT Enterprise"
    href: https://help.openai.com/en/articles/11750701-rbac/
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Who can configure; capabilities; permission evaluation; configure RBAC"
  - id: amp-2026-08-rbac
    title: "Amp — Threads"
    href: https://ampcode.com/docs/threads
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Thread visibility and workspace administrators"
  - id: amp-2026-08-rbac-security
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "User Authentication and administrative access"
  - title: Methodology
    href: /methodology
    kind: note
  - title: NIST — Role Based Access Control
    href: https://csrc.nist.gov/projects/role-based-access-control
    kind: spec
    publisher: NIST
    reviewedAt: 2026-08-28
  - title: OpenAI — Role-based access controls for ChatGPT Enterprise
    href: https://help.openai.com/en/articles/11750701-rbac
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - id: anthropic-custom-roles
    title: Anthropic Help Center — Manage custom roles on Enterprise plans
    href: https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Custom roles; precedence; capabilities and permissions
  - id: cursor-iam-rbac
    title: Cursor Docs — Identity and access management
    href: https://prod.cursor.com/docs/enterprise/identity-and-access-management
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Role-Based Access Control
  - id: cursor-organization-groups
    title: Cursor Docs — Organization Groups
    href: https://prod.cursor.com/docs/enterprise/organization-groups
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Set team roles from mappings; group settings
  - id: perplexity-enterprise-rbac
    title: Perplexity Help Center — Enterprise roles and permissions
    href: https://www.perplexity.ai/help-center/en/articles/11187754-enterprise-roles-and-permissions
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Roles and groups; access evaluation; permissions reference
  - id: replit-roles-groups-access
    title: Replit Docs — Roles, groups, and access
    href: https://docs.replit.com/teams/identity-and-access-management/groups-and-permissions
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Roles; custom groups; app access control
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat rename; web availability
  - id: mistral-rbac
    title: Mistral Docs — Roles and permissions (RBAC)
    href: https://docs.mistral.ai/admin/identity-access/roles-permissions
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Role scopes; assignments; permissions
  - id: google-workspace-admin-privileges
    title: Google Workspace Admin Help — Administrator privilege definitions
    href: https://support.google.com/a/answer/1219251?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Admin roles; Gemini service privilege
  - id: google-gemini-admin-access
    title: Google Workspace Admin Help — Turn the Gemini app on or off
    href: https://support.google.com/a/answer/14571493?hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: User access by organizational unit or configuration group
  - id: warp-roles-permissions
    title: "Warp — Roles and permissions"
    href: https://docs.warp.dev/enterprise/team-management/roles-and-permissions
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "User roles; Permission details; Settings enforcement"
  - id: cognition-devin-rbac
    title: "Cognition — Custom Roles and RBAC"
    href: https://docs.devin.ai/enterprise/security-access/custom-roles
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Creating and assigning roles; organization and account roles"
  - id: xai-grok-bot-teams-enterprise
    title: "xAI — Grok Bot for teams and enterprises"
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Admins manage Grok Bot from the Grok Bot page of the Cursor dashboard: network policy, team rules, setup scripts, organization-wide off switch"
  - id: spacexai-grok-organization-rbac
    title: "SpaceXAI Docs — Organization Management"
    href: https://docs.x.ai/grok/organization
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Understanding Organizations; Map groups to roles; Configure roles with teams, permissions, and licenses; Managing roles after activation"
support:
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [80]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Grok Enterprise organization-management documentation observation
          observedAt: 2026-09-01
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise tier organization administration in the xAI console and Grok Business environment
          - type: policy
            value: custom roles map identity-provider groups to teams, access-control-list permissions, and product licenses; administrators can create roles and reorder priority after SCIM activation
          - type: runtime
            value: the built-in Member role is the default for users without a specified group; personal Grok.com accounts are outside this evidence
        evidence:
          - resourceId: spacexai-grok-organization-rbac
            type: documented
            observedAt: 2026-09-01
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [80]
        target:
          kind: dated-documentation
          revision: current Grok Bot Teams and Enterprises documentation
          observedAt: 2026-09-02
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "Grok Bot Enterprise tier managed via organization permissions and administration dashboard"
          - type: policy
            value: "enterprise organization roles govern Bot management, computer termination, network policy, and plugin controls"
        evidence:
          - resourceId: xai-grok-bot-teams-enterprise
            type: documented
            observedAt: 2026-09-02
          - resourceId: spacexai-grok-organization-rbac
            type: documented
            observedAt: 2026-09-02
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: "available for Enterprise, Edu, ChatGPT for Healthcare, and ChatGPT for Teachers"
          - type: policy
            value: "workspace baselines and assigned roles control eligible ChatGPT capabilities regardless of client; Lockdown Mode can further restrict network-enabled tools"
          - type: runtime
            value: "owners configure roles on the web or in the admin console; the resulting access policy applies to eligible members using ChatGPT Desktop"
        evidence:
          - resourceId: openai-chatgpt-desktop-rbac
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
            value: "available for Enterprise, Edu, ChatGPT for Healthcare, and ChatGPT for Teachers"
          - type: runtime
            value: "configured on the web in Workspace settings → Permissions & roles or the admin console"
          - type: policy
            value: "ordinary role permissions use Default, On, and Off with additive grants; Lockdown Mode is evaluated separately and can further restrict access"
        evidence:
          - resourceId: openai-chatgpt-web-rbac
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
            value: "workspace admins govern workspace threads; Enterprise groups constrain visibility"
        evidence:
          - resourceId: amp-2026-08-rbac
            type: documented
            observedAt: 2026-08-29
          - resourceId: amp-2026-08-rbac-security
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
            value: "role creation and assignment require the documented account or organization membership permissions"
        evidence:
          - resourceId: cognition-devin-rbac
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
          - type: policy
            value: "Owner alone transfers ownership; Admin otherwise shares management permissions; Members operate within admin policies"
        evidence:
          - resourceId: warp-roles-permissions
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise custom-role documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: custom roles are available to Enterprise organizations and apply only after a member's organization role is set to Custom
          - type: policy
            value: roles assigned through groups can grant Chat and other capabilities, connectors and tools, models and effort limits, and delegated administration
          - type: runtime
            value: organization-level settings are the upper gate and capability grants are additive across applicable custom roles
        evidence:
          - resourceId: anthropic-custom-roles
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Enterprise desktop role enforcement observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise custom roles can grant or restrict Chat access across web, desktop, and mobile for members whose organization role is Custom
          - type: policy
            value: group-assigned roles also govern connectors, models, effort limits, and other supported capabilities; the most restrictive organization-level gate remains authoritative
        evidence:
          - resourceId: anthropic-custom-roles
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor RBAC documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: team Member, Admin, and Unpaid Admin roles separate product use from team and security administration
          - type: plan
            value: Enterprise organization groups can map directory or manually managed cohorts to teams with Member or Admin roles and attach model and agent controls
          - type: runtime
            value: roles are built in rather than arbitrary custom permission bundles, and group settings commonly use a most-permissive merge
        evidence:
          - resourceId: cursor-iam-rbac
            type: documented
            observedAt: 2026-08-28
          - resourceId: cursor-organization-groups
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity Enterprise RBAC documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Enterprise administrators can manage base and custom roles and assign them directly or through Perplexity-managed or SCIM-synced groups
          - type: policy
            value: roles grant file, sharing, API, security, product, and administrative permissions; grants are additive across roles
          - type: runtime
            value: organization-level feature and public-sharing controls remain master switches that roles cannot override
        evidence:
          - resourceId: perplexity-enterprise-rbac
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit roles and app-access documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: organization roles are Admin, Member, Guest, and Viewer; app access levels are Owner, Publisher, Editor, Viewer, and None
          - type: plan
            value: Enterprise custom groups add fine-grained cohort access and can be synchronized from an identity provider
          - type: runtime
            value: organization permissions and app-specific access are separate scopes, and groups receive app access through each app's Access panel
        evidence:
          - resourceId: replit-roles-groups-access
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe organization RBAC documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: predefined roles apply independently at Organization and Workspace scope, multiple role grants are additive, and assignments can be made in the Admin Panel or Admin API
          - type: policy
            value: Workspace roles distinguish Vibe User, Developer, Vibe Code User, Contributor, Admin, and Observability Viewer access
          - type: runtime
            value: Le Chat is now Vibe and chat.mistral.ai remains the web entry point
        evidence:
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-rbac
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 managed Gemini administrative-RBAC documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: policy
            value: Google Workspace administrator roles can include the Gemini service privilege, which permits managing Gemini access and settings
          - type: runtime
            value: end-user access to gemini.google.com is targeted through organizational units or configuration groups rather than Gemini-specific user roles
          - type: plan
            value: this cell covers managed Google Workspace administration, not personal Google Accounts
        evidence:
          - resourceId: google-workspace-admin-privileges
            type: documented
            observedAt: 2026-08-28
          - resourceId: google-gemini-admin-access
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
          - type: plan
            value: "role-based access features are available on Enterprise plans only and govern team settings and permissions"
        evidence:
          - resourceId: cognition-devin-desktop-rbac
            type: documented
            observedAt: 2026-09-02
---

This row asks whether collaboration rights are enforced by role rather than inferred from possession of a link. Useful permission boundaries separate viewing prompts and files, editing context, starting runs, using billable models, invoking tools, approving actions, managing connectors or secrets, sharing externally, exporting, deleting, and administering policy.

Evidence should record built-in and custom roles, project and organization scope, group mapping, temporary access, inheritance and exceptions, removal behavior for active runs, service identities, and audit attribution.
