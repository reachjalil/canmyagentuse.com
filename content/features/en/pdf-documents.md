---
title: PDF documents
description: Read PDF files as model context with documented text, page-image, size, page, and attachment-count boundaries.
slug: pdf-documents
locale: en
seoTitle: "PDF documents — Can My Agent Use"
socialTitle: PDF documents
socialDescription: Compare PDF text, visual analysis, attachment counts, file-size limits, page boundaries, and unsupported cases.
llmSummary: PDF support distinguishes plain-text extraction from visual page analysis and records page, file-size, file-count, plan, and client boundaries for each reviewed harness.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload a PDF and make its text, layout, and supported visual content available as context.
specLabel: Common product term
aliases: [PDF upload, PDF input, document attachment]
parent: file-inputs
related: [office-document-input, upload-limits]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok FAQ lists PDF among the document types accepted directly in Grok Web chats and describes summarization, extraction, comparison, and analysis of uploaded files."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot's desktop composer accepts PDF and plain-text documents. It accepts up to six attachments per message, with documents limited to 25 MB each; encrypted, damaged, unusually formatted, or very large files may not be readable."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude accepts PDFs in chats on its web and desktop surfaces. Its help documentation describes visual analysis for PDFs under 100 pages, a 500 MB per-file chat limit, and a separate 30 MB project-file limit; larger or nonvisual handling has narrower fidelity."
issues: []
resources:
  - id: xai-grok-files-faq
    title: xAI — Grok files and data FAQ
    href: https://docs.x.ai/grok/faq
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Files & Data
  - id: xai-grok-bot-files
    title: xAI — Grok Bot files and results
    href: https://docs.x.ai/grok-bot/files-and-results
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Attach files
  - id: anthropic-upload-files
    title: Anthropic Help Center — Uploading files to Claude
    href: https://support.claude.com/en/articles/8241126-upload-files-to-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file types; PDF support
support:
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: web documentation reports a limit of approximately 100 attached files per message
          - type: policy
            value: extremely large documents may need to be split into smaller files
        evidence:
          - resourceId: xai-grok-files-faq
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: desktop composer accepts up to six attachments per message and documents a 25 MB limit per document
          - type: policy
            value: encrypted, damaged, unusually formatted, or very large files may not be readable
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: PDF upload is supported; visual elements are analyzed for PDFs under 100 pages, with narrower text-oriented handling outside that boundary
          - type: runtime
            value: chat uploads are limited to 500 MB per file and 20 files per chat; project files have a separate 30 MB limit
          - type: policy
            value: encrypted PDFs, OCR quality, and complete fidelity for forms, annotations, and embedded media are not established by the reviewed page
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: PDF upload is supported; visual elements are analyzed for PDFs under 100 pages, with narrower text-oriented handling outside that boundary
          - type: runtime
            value: chat uploads are limited to 500 MB per file and 20 files per chat; project files have a separate 30 MB limit
          - type: policy
            value: encrypted PDFs, OCR quality, and complete fidelity for forms, annotations, and embedded media are not established by the reviewed page
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the exact harness can accept a PDF and expose useful document content to the model. Evidence should distinguish text extraction from page-image understanding, tables and forms from plain text, scanned PDFs from born-digital files, and password-protected files from ordinary documents.

Record page, file-size, file-count, plan, and model limits as qualifiers. A generic file picker or workspace file reader does not by itself prove PDF parsing.

The reviewed surfaces remain separate because limits and fidelity differ by product. These cells establish PDF input, not reliable OCR for every scan, support for encrypted files, or identical handling of forms, annotations, and embedded media.

Unlisted harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
