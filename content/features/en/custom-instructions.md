---
title: Custom instructions
description: Persist project or user instruction files, with current OpenWork Desktop evidence.
slug: custom-instructions
locale: en
seoTitle: "Custom instructions — Can My Agent Use"
socialTitle: Custom instructions
socialDescription: Custom-instruction support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop exposes persistent OpenCode-backed workspace configuration, skills, agents, commands, and instruction files. Exact precedence follows the embedded OpenCode runtime.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: Persist project or user instruction files.
specLabel: Product capability
parent: instructions
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork's server owns workspace .opencode configuration, including skills, agents, commands, and other persistent OpenCode instruction primitives."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-instructions
    title: OpenWork — Architecture
    href: https://github.com/different-ai/openwork/blob/dev/ARCHITECTURE.md
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: precedence and file discovery are supplied by the embedded OpenCode runtime
        evidence:
          - resourceId: openwork-instructions
            type: documented
            observedAt: 2026-08-28
---

Persist project or user instruction files. OpenWork's sourced cell covers its server-owned OpenCode workspace configuration; it does not claim that every instruction format or precedence rule is unique to OpenWork.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
