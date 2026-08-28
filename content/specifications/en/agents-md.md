---
title: AGENTS.md
description: Community Markdown convention for repository-scoped instructions consumed with host-specific discovery and precedence rules.
slug: agents-md
locale: en
seoTitle: AGENTS.md compatibility reference — Can My Agent Use
socialTitle: AGENTS.md compatibility
socialDescription: Discovery, nesting, precedence, and host interpretation for AGENTS.md.
llmSummary: AGENTS.md is a repository instruction convention. Filename recognition, nested discovery, precedence, scope, and merge behavior can differ by harness.
audience: Engineers comparing workspace instruction behavior.
contentKind: specification
status: published
tags: [instructions, repositories, agents-md]
updated: 2026-08-28
published: 2026-08-28
authority: Community convention
revision: living
maturity: convention
structure: Markdown instruction file with host-specific discovery and precedence
sourceId: S-072
canonicalUrl: https://agents.md/
summary: Provide repository-scoped instructions to compatible coding agents.
roles: [repository-author, consuming-agent]
aliases: [AGENTS.md, repository instructions]
---

AGENTS.md is an instruction-file convention, not a runtime protocol. Hosts can differ in where they search, whether nested files override or merge, which filenames coexist, and how instructions interact with user or system rules.

The catalog therefore treats root discovery, nested discovery, precedence, and scope as separate capabilities. Recognizing the same filename does not establish identical semantics.
