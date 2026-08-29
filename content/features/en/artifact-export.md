---
title: Artifact export
description: Download generated files and other artifacts from an agent product.
slug: artifact-export
locale: en
seoTitle: Artifact export compatibility — Can My Agent Use
socialTitle: Artifact export
socialDescription: Compare downloading generated files and other agent artifacts.
llmSummary: Artifact export means a product lets the user download generated files or other documented outputs beyond the visible chat text.
audience: Teams moving agent output into durable systems and downstream workflows.
contentKind: feature
status: published
tags: [collaboration, portability, artifacts, export]
updated: 2026-08-28
published: 2026-08-28
category: collaboration
summary: Download generated files and other documented outputs.
specLabel: Common product term
aliases: [download artifacts, generated files, file export]
parent: collaboration-and-portability
related: [conversation-export, git-pull-requests, subagent-result-handoff]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: Grok Bot can return documents, spreadsheets, slide decks, folders, screenshots, logs, and other generated files as conversation cards that the operator can preview and save; the reviewed page does not establish full workspace archive or provenance export."
  - id: 2
    text: "Evidence checked 2026-08-28: ChatGPT Work can create documents, presentations, spreadsheets, and PDFs in a task; the web surface supports review and download, while the desktop app provides artifact previews and local file access. Neither reviewed page establishes a complete workspace archive with checksums and provenance."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude can create and download XLSX, PPTX, DOCX, and PDF files on its web and desktop surfaces, subject to a 30 MB file limit. The reviewed page does not establish complete run-provenance or workspace-archive export."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-files
    title: xAI — Grok Bot files and results
    href: https://docs.x.ai/grok-bot/files-and-results
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Preview generated work
  - id: openai-artifacts-viewer
    title: OpenAI — Artifacts and previews in ChatGPT Work
    href: https://learn.chatgpt.com/docs/artifacts-viewer
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Create files; review and download; preview capabilities
  - id: anthropic-create-edit-files
    title: Anthropic Help Center — Create and edit files with Claude
    href: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file types; download files
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: supported generated files can be previewed and saved from conversation cards; a complete workspace archive or repository transfer is not documented
          - type: policy
            value: citations, action logs, and source links must be requested or produced by the workflow and are not guaranteed metadata on every artifact
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: generated documents, presentations, spreadsheets, and PDFs can be reviewed and downloaded from the web artifact viewer
          - type: policy
            value: a complete task or workspace archive with checksums, stable provenance, and re-import is not established by the reviewed page
        evidence:
          - resourceId: openai-artifacts-viewer
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the desktop app previews generated documents, presentations, spreadsheets, PDFs, and HTML, with artifacts available as local task files
          - type: policy
            value: a complete task or workspace archive with checksums, stable provenance, and re-import is not established by the reviewed page
        evidence:
          - resourceId: openai-artifacts-viewer
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Claude can create and download XLSX, PPTX, DOCX, and PDF files, with a 30 MB per-file limit
          - type: policy
            value: complete workspace transfer, checksums, and source or subagent provenance are not established by the reviewed page
        evidence:
          - resourceId: anthropic-create-edit-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Claude can create and download XLSX, PPTX, DOCX, and PDF files, with a 30 MB per-file limit
          - type: policy
            value: complete workspace transfer, checksums, and source or subagent provenance are not established by the reviewed page
        evidence:
          - resourceId: anthropic-create-edit-files
            type: documented
            observedAt: 2026-08-28
---

This row covers outputs that exist beyond rendered chat: files, patches, commits, repositories, notebooks, documents, slides, spreadsheets, archives, images, audio, video, and structured result bundles. A screenshot or copied code block is only partial when the original artifact has richer structure.

Evidence should record download and API paths, git or cloud-storage transfer, archive structure, original versus converted formats, metadata and citations, checksums, size limits, expiry, access control, provenance from sub-agents, and whether an export remains usable without the originating harness.
