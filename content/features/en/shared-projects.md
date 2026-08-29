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
updated: 2026-08-28
published: 2026-08-28
category: collaboration
summary: Share a product-defined project workspace with other people.
specLabel: Common product term
aliases: [team workspace, shared workspace, project context]
parent: collaboration-and-portability
related: [role-based-access, long-term-memory, instructions]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Claude projects are self-contained workspaces with chat history, a knowledge base, and project instructions. Team and Enterprise users can share a project with individual members or the organization, assign view or edit access, manage membership, and collaboratively add documents and chats."
  - id: 3
    text: "Evidence checked 2026-08-28: Perplexity Projects are persistent shared workspaces containing Search conversations, Computer tasks, files, instructions, connected tools, skills, credentials, and project memory. Owners can assign view or edit roles and restricted, organization-wide, or public-link scopes, with Enterprise controls for external and public sharing."
  - id: 4
    text: "Evidence checked 2026-08-28: Replit projects can be shared with teammates who run separate Agent threads against the same project, see a shared task board, review completed work, and apply it to the main version. Team Workspaces extend access across projects, and owners can revoke project or workspace membership."
resources:
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
support:
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
