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
updated: 2026-08-28
published: 2026-08-28
category: collaboration
summary: Assign and enforce permissions through documented roles.
specLabel: Common product term
aliases: [RBAC, team roles, collaborator permissions]
parent: collaboration-and-portability
related: [admin-policy-controls, audit-logs, conversation-sharing]
resources:
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
support: []
---

This row asks whether collaboration rights are enforced by role rather than inferred from possession of a link. Useful permission boundaries separate viewing prompts and files, editing context, starting runs, using billable models, invoking tools, approving actions, managing connectors or secrets, sharing externally, exporting, deleting, and administering policy.

Evidence should record built-in and custom roles, project and organization scope, group mapping, temporary access, inheritance and exceptions, removal behavior for active runs, service identities, and audit attribution.
