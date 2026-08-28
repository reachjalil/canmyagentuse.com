---
title: PDF documents
description: Read PDF files as model context, with current Grok Web and Grok Bot attachment limits preserved in the evidence.
slug: pdf-documents
locale: en
seoTitle: "PDF documents — Can My Agent Use"
socialTitle: PDF documents
socialDescription: Current PDF-input support for Grok Web and Grok Bot, including surface-specific attachment limits.
llmSummary: Grok Web and Grok Bot can analyze attached PDF documents. Grok Bot's desktop composer accepts at most six attachments per message and documents a 25 MB per-document limit; other harness cells remain unknown until reviewed.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload a PDF and make its text, layout, and supported visual content available as context.
specLabel: Product capability
aliases: [PDF upload, PDF input, document attachment]
parent: file-inputs
related: [office-document-input, upload-limits]
highlight: false
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok FAQ lists PDF among the document types accepted directly in Grok Web chats and describes summarization, extraction, comparison, and analysis of uploaded files."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot's desktop composer accepts PDF and plain-text documents. It accepts up to six attachments per message, with documents limited to 25 MB each; encrypted, damaged, unusually formatted, or very large files may not be readable."
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
---

This row asks whether the exact harness can accept a PDF and expose useful document content to the model. Evidence should distinguish text extraction from page-image understanding, tables and forms from plain text, scanned PDFs from born-digital files, and password-protected files from ordinary documents.

Record page, file-size, file-count, plan, and model limits as qualifiers. A generic file picker or workspace file reader does not by itself prove PDF parsing.

The Grok surfaces remain separate: Grok Web has a broader documented attachment count, while Grok Bot's desktop composer accepts up to six attachments and limits each document to 25 MB. These cells establish PDF input, not reliable OCR for every scan, support for encrypted files, or identical handling of embedded media.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
