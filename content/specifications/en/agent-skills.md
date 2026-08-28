---
title: Agent Skills
description: Open directory convention for reusable agent instructions, references, assets, and optional scripts centered on SKILL.md.
slug: agent-skills
locale: en
seoTitle: Agent Skills compatibility reference — Can My Agent Use
socialTitle: Agent Skills compatibility
socialDescription: Discovery, progressive loading, resources, and script boundaries for Agent Skills.
llmSummary: Agent Skills are portable directories centered on SKILL.md. Discovery, progressive loading, resource use, script execution, and install scopes are distinct compatibility features.
audience: Architects and engineers evaluating agent capability packaging.
contentKind: specification
status: published
tags: [skills, instructions, packaging]
updated: 2026-08-28
published: 2026-08-28
authority: Agent Skills maintainers
revision: living
maturity: open standard
structure: SKILL.md with YAML frontmatter and directory conventions
sourceId: S-043
canonicalUrl: https://agentskills.io/specification
summary: Package reusable instructions with optional references, assets, and scripts.
roles: [skill-author, consuming-agent, host]
aliases: [SKILL.md, skills]
---

An Agent Skill is a directory whose `SKILL.md` provides metadata and instructions. Optional references, assets, and scripts can extend the package.

The catalog separates discovery from progressive loading, resource resolution, script execution, and scope precedence. Recognizing a skill directory does not establish identical lifecycle or trust behavior across hosts.
