---
title: Code execution
description: Run generated code in a sandbox, with qualified OpenWork Desktop evidence.
slug: code-execution
locale: en
seoTitle: "Code execution — Can My Agent Use"
socialTitle: Code execution
socialDescription: Code-execution support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop runs an OpenCode-backed host stack against the selected local workspace and exposes permission-controlled shell execution. The current docs do not establish default sandbox isolation, so the cell is partial.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - tools
updated: 2026-08-28
published: 2026-08-28
category: tools
summary: Run generated code in a sandbox.
specLabel: Product capability
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop runs OpenCode and the OpenWork server against a selected workspace and documents shell execution as a permission-sensitive primitive; default sandbox isolation is not established."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-code-execution
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
        status: partial
        noteIds: [1]
        target:
          kind: dated-documentation
          revision: current OpenWork architecture documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local workspace execution is documented; default sandbox isolation is not
          - type: policy
            value: execution is constrained by workspace and approval configuration
        evidence:
          - resourceId: openwork-code-execution
            type: documented
            observedAt: 2026-08-28
---

Run generated code in a sandbox or constrained project environment. OpenWork's cell stays partial because the reviewed source establishes local execution and approval boundaries, not a default isolation guarantee.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
