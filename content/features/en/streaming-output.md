---
title: Streaming output
description: Show tokens and tool events as they arrive, with current OpenWork Desktop evidence.
slug: streaming-output
locale: en
seoTitle: "Streaming output — Can My Agent Use"
socialTitle: Streaming output
socialDescription: Streaming-output support by exact harness surface, with dated public evidence.
llmSummary: OpenWork Desktop subscribes to the OpenCode event stream over SSE and renders live session progress, tool activity, todos, and permission requests.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - interfaces
updated: 2026-08-28
published: 2026-08-28
category: interfaces
summary: Show tokens and tool events as they arrive.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: OpenWork Desktop's documented host mode subscribes to OpenCode SSE events for live session updates."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: openwork-streaming
    title: OpenWork — Publisher repository
    href: https://github.com/different-ai/openwork
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
          revision: current OpenWork repository documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers: []
        evidence:
          - resourceId: openwork-streaming
            type: documented
            observedAt: 2026-08-28
---

Show tokens and tool events as they arrive.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
