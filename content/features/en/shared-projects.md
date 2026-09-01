---
title: Shared projects
description: Share a project workspace containing documented product context such as chats, files, or instructions.
slug: shared-projects
locale: en
seoTitle: Shared projects compatibility — Can My Agent Use
socialTitle: Shared projects
socialDescription: Compare documented shared project workspaces, content, and permissions.
llmSummary: Shared projects are product-defined workspaces that multiple people can access; included context and permissions vary by product.
audience: Teams organizing ongoing agent work.
contentKind: feature
status: published
tags: [collaboration, projects, context, teams]
updated: 2026-09-01
published: 2026-08-28
category: collaboration
summary: Share a product-defined project workspace with other people.
specLabel: Common product term
aliases: [team workspace, shared workspace, project context]
parent: collaboration-and-portability
related: [role-based-access, long-term-memory, instructions]
notes:
  - id: 85
    text: "Evidence checked 2026-09-01: Grok Business lets organization administrators set the maximum sharing audience for Projects, from Private to Team or Organization; members may share more narrowly, and a tighter policy immediately restricts existing wider shares. The reviewed policy does not enumerate which Project context objects are shared."
  - id: 84
    text: "Evidence checked 2026-08-29: Claude Projects are available in the Claude client, but member and organization sharing is limited to Team and Enterprise. Shared projects can include project knowledge and instructions and support invited members with view or edit access."
  - id: 83
    text: "Evidence checked 2026-08-29: Shared Gems are multi-person Gemini workspaces containing persistent Gem instructions and uploaded files, with Viewer and Editor access, optional expiry, and ownership transfer."
  - id: 82
    text: "Evidence checked 2026-08-29: Microsoft describes Copilot Notebooks as AI-powered workspaces containing chats, files, pages, links, references, and instructions, but explicitly says Notebook sharing is not yet available for Microsoft 365 Personal, Family, or Premium subscribers. This no is limited to the consumer surface documented Notebook workspace and does not deny separate one-page sharing or ordinary conversation-link sharing."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop can expose a live local workspace to trusted collaborators through scoped credentials and can open one hosted workspace in Desktop for multiple organization members."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT Projects can be shared on the web with invited people or eligible links, expose chat and edit roles, and preserve shared chats, files, instructions, and membership context."
  - id: 73
    text: "Evidence checked 2026-08-29: an Amp project associates a repository, settings, secrets, and related threads and can belong to a user or workspace for shared work."
  - id: 1
    text: "Evidence checked 2026-08-28: Claude projects are self-contained workspaces with chat history, a knowledge base, and project instructions. Team and Enterprise users can share a project with individual members or the organization, assign view or edit access, manage membership, and collaboratively add documents and chats."
  - id: 3
    text: "Evidence checked 2026-08-28: Perplexity Projects are persistent shared workspaces containing Search conversations, Computer tasks, files, instructions, connected tools, skills, credentials, and project memory. Owners can assign view or edit roles and restricted, organization-wide, or public-link scopes, with Enterprise controls for external and public sharing."
  - id: 4
    text: "Evidence checked 2026-08-28: Replit projects can be shared with teammates who run separate Agent threads against the same project, see a shared task board, review completed work, and apply it to the main version. Team Workspaces extend access across projects, and owners can revoke project or workspace membership."
resources:
  - id: spacexai-grok-business-sharing-policy
    title: "SpaceXAI Docs — Manage Licenses and Users"
    href: https://docs.x.ai/grok/management
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Sharing policy; resource types; policy levels; policy propagation"
  - id: anthropic-claude-project-sharing
    title: Anthropic — Manage project visibility and sharing
    href: https://support.claude.com/en/articles/9519189-manage-project-visibility-and-sharing
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Team and Enterprise availability; project visibility; member roles; project knowledge and instructions
  - id: openwork-v01839-share-workspace
    title: "OpenWork v0.18.39 — Desktop workspace sharing"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/react-app/domains/workspace/share-workspace-access-panel.tsx#L113-L147"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "live-access warning, remote-access controls, connection URL, and collaborator credentials at lines 113–269"
  - id: openwork-v01839-hosted-shared-workspace
    title: "OpenWork v0.18.39 — OpenWork Web shared workspace"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/packages/docs/cloud/run-in-the-cloud/shared-workspace.mdx#L19-L37"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Open in Desktop and multi-person workspace notes, lines 19–37"
  - id: openai-chatgpt-web-shared-projects
    title: "OpenAI — Projects in ChatGPT"
    href: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Share a Project; Getting started with sharing; Inviting by a shared link; FAQ — Shared projects"
  - id: amp-2026-08-shared-projects
    title: "Amp — Projects"
    href: https://ampcode.com/docs/projects
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Project ownership, repository, settings, secrets, and threads"
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — Projects in ChatGPT
    href: https://help.openai.com/en/articles/10169521-chatgpt-projects
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - title: Anthropic — Projects in Claude
    href: https://support.anthropic.com/en/articles/9517075-what-are-projects
    kind: docs
    publisher: Anthropic
    reviewedAt: 2026-08-28
  - title: OpenAI — Projects in ChatGPT
    href: https://help.openai.com/en/articles/10169521-projects-in-chatgpt
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - id: anthropic-claude-projects
    title: Anthropic Help Center — What are projects?
    href: https://support.claude.com/en/articles/9517075-what-are-projects
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Project knowledge; collaboration and sharing
  - id: perplexity-projects
    title: Perplexity Help Center — What are Projects?
    href: https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Collaboration and sharing; Project files; settings
  - id: replit-project-collaboration
    title: Replit Docs — Invite teammates
    href: https://docs.replit.com/build/invite-teammates
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Inviting teammates; shared task board; availability
  - id: replit-team-workspace
    title: Replit Docs — Create a team workspace
    href: https://docs.replit.com/build/create-a-team-workspace
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Workspace access; member management
  - id: microsoft-copilot-notebook-sharing-2026-06
    title: "Share a Microsoft Copilot Notebook"
    href: "https://support.microsoft.com/en-us/microsoft-365-copilot/share-a-microsoft-365-copilot-notebook"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Availability notes immediately before the sharing steps"
  - id: microsoft-copilot-notebooks-get-started-2026-04
    title: "Get started with Microsoft Copilot Notebooks"
    href: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/get-started-with-microsoft-365-copilot-notebooks"
    kind: docs
    publisher: "Microsoft"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Introduction; Why use Copilot Notebooks?"
  - id: google-gemini-web-shared-gems
    title: "Google Gemini Apps Help — Share a Gem from Gemini Apps"
    href: "https://support.google.com/gemini/answer/16504957?co=GENIE.Platform%3DDesktop&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Share a Gem; Share access to files uploaded to the shared Gem; Transfer ownership; Gem access levels; Work or school users"
support:
  - harness: grok-web
    versions:
      - track: current
        status: partial
        noteIds: [85]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Grok Business sharing-policy documentation observation
          observedAt: 2026-09-01
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: Grok Business or Enterprise team workspace on grok.com
          - type: policy
            value: administrators set Project sharing ceilings of Private, Team, or Organization; a member may choose a narrower audience and tightening applies immediately to wider existing shares
          - type: format
            value: the reviewed policy does not identify shared Project files, instructions, conversations, roles, ownership, or export behavior
        evidence:
          - resourceId: spacexai-grok-business-sharing-policy
            type: documented
            observedAt: 2026-09-01
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [84]
        target:
          kind: dated-documentation
          revision: current official Claude project-sharing documentation reviewed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: project collaboration is limited to Team and Enterprise plans
          - type: policy
            value: projects can be private or organization-visible with invited members assigned view or edit access
          - type: runtime
            value: the shared workspace is a Claude Project with project knowledge and instructions, not a live local Cowork folder
        evidence:
          - resourceId: anthropic-claude-project-sharing
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [83]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini web shared-Gem documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "the owner must be signed in; depending on account policy, public or anyone-with-link access can allow recipients without sign-in"
          - type: policy
            value: "Viewer and Editor roles, optional access expiry, and ownership transfer are documented; work or school sharing follows Drive sharing policy and can be disabled by a Workspace administrator"
          - type: format
            value: "shared Gems with uploads support device files or Google Drive files; NotebookLM notebooks cannot be sources for shared Gems"
          - type: runtime
            value: "shared context includes Gem instructions and uploaded files and is distinct from a public chat link"
        evidence:
          - resourceId: google-gemini-web-shared-gems
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: copilot-web
    versions:
      - track: current
        status: no
        noteIds: [82]
        target:
          kind: dated-documentation
          revision: "Microsoft Copilot Notebook sharing documentation, last updated June 2026"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Microsoft 365 Personal, Family, and Premium consumer subscribers"
          - type: auth
            value: "personal Microsoft account"
          - type: runtime
            value: "Copilot Notebook workspace sharing; individual Copilot Page and conversation-link sharing are separate capabilities"
        evidence:
          - resourceId: microsoft-copilot-notebook-sharing-2026-06
            type: documented
            observedAt: 2026-08-29
          - resourceId: microsoft-copilot-notebooks-get-started-2026-04
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
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
          - type: policy
            value: "local remote access is off by default and must be enabled explicitly"
          - type: auth
            value: "owner and collaborator credentials carry different authority; sharing them grants live workspace access"
          - type: transport
            value: "local sharing needs a reachable worker or network endpoint; hosted sharing uses an OpenWork Web connection URL and token"
        evidence:
          - resourceId: openwork-v01839-share-workspace
            type: documented
            observedAt: 2026-08-29
          - resourceId: openwork-v01839-hosted-shared-workspace
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
            value: "project sharing is available globally on web for Free, Go, Plus, Pro, Business, Enterprise, and Edu users; collaborator and file limits depend on the owner's plan"
          - type: policy
            value: "owners control invite-only or link visibility and member permissions; invitees receive chat or edit access"
        evidence:
          - resourceId: openai-chatgpt-web-shared-projects
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
            value: "workspace project permissions and administrators govern shared configuration"
        evidence:
          - resourceId: amp-2026-08-shared-projects
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude projects documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: projects contain their own chat histories, knowledge files, and project instructions; paid plans can automatically use RAG as knowledge approaches context limits
          - type: plan
            value: project creation is available on all plans, with a five-project limit on Free; member and organization sharing is limited to Team and Enterprise
          - type: policy
            value: shared projects support view and edit roles, individual or bulk invitations, organization-wide visibility, membership removal, and an owner control that can disable organization-wide projects
        evidence:
          - resourceId: anthropic-claude-projects
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity Projects documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: a Project persists Search conversations, Computer tasks, files, custom instructions, connected tools, skills, project credentials, and project-level memory
          - type: policy
            value: roles are Owner, Can edit, and Can view; access can be restricted, organization-wide, or anyone-with-link where policy permits
          - type: plan
            value: non-Enterprise projects support up to five contributors; Enterprise-owned projects support up to 9,999 and add organization edit plus public and external-sharing controls
        evidence:
          - resourceId: perplexity-projects
            type: documented
            observedAt: 2026-08-28
  - harness: replit-agent
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Replit project-collaboration documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: collaborators share a project while using separate Agent planning threads, isolated task copies, and a shared Kanban board; completed changes can be reviewed and applied to the main version
          - type: plan
            value: Core supports five collaboration seats and one active background task; Pro supports fifteen seats and ten active background tasks
          - type: policy
            value: projects can be invited individually or placed in a Team Workspace whose members receive access across every contained project; owners can revoke access
        evidence:
          - resourceId: replit-project-collaboration
            type: documented
            observedAt: 2026-08-28
          - resourceId: replit-team-workspace
            type: documented
            observedAt: 2026-08-28
---

This row requires a durable collaboration boundary that can hold more than an isolated shared chat. A project may include members and roles, instructions, knowledge files, memory, connectors, saved agents, conversations, artifacts, budgets, and policy.

Evidence should record which objects are shared, ownership and transfer, invitation and removal, inherited connector permissions, model and tool policy, version history, data isolation between projects, export and deletion, and how personal context is prevented from leaking into team work.
