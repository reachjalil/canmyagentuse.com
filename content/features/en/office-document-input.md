---
title: Text and office document input
description: Upload word-processing, presentation, spreadsheet, plain-text, or rich-text files as useful model context.
slug: office-document-input
locale: en
seoTitle: Office document input compatibility — Can My Agent Use
socialTitle: Text and office document input
socialDescription: Compare upload and parsing of word-processing, presentation, spreadsheet, and text files.
llmSummary: Office-document input asks whether uploaded text, word-processing, presentation, or spreadsheet content reaches the model with documented fidelity; filenames alone do not count.
audience: Engineers comparing document-heavy knowledge workflows.
contentKind: feature
status: published
tags: [perception, documents, uploads]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload common text, word-processing, presentation, and spreadsheet formats as model context.
specLabel: Common product term
aliases: [document upload, DOCX input, spreadsheet upload, presentation upload]
parent: file-inputs
related: [pdf-documents, upload-limits]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok FAQ lists DOCX, TXT, CSV, XLSX, PPTX, HTML, XML, JSON, and Markdown as direct Grok chat inputs and describes comparison, extraction, spreadsheet analysis, and document transformation."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot lists plain text, Word, Excel, PowerPoint, CSV, JSON, YAML, source code, HTML, email, and Jupyter notebooks as common desktop inputs, with six attachments per message and a 25 MB limit per document."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude accepts DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, and XLSX on its web and desktop surfaces; XLSX requires code execution. Non-PDF documents are handled as extracted text, so layout and embedded-image fidelity are not established."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini Apps document uploads for documents, spreadsheets, notebooks, and code folders or repositories, but the reviewed help page does not enumerate every office extension or promise formula, chart, presentation, comment, or embedded-object fidelity."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
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
    locator: Supported file types
  - id: google-gemini-upload-files
    title: Google Gemini Apps Help — Upload and analyze files
    href: https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Types of files you can upload
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
            value: accepted formats and fidelity can vary by platform; this claim is scoped to the web surface and does not establish macro, comment, hidden-sheet, or embedded-object fidelity
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
            value: large, encrypted, damaged, or unusual files may not be readable; exact office-feature fidelity is not documented
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
            value: documented inputs include DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, and XLSX; spreadsheet uploads require code execution
          - type: runtime
            value: non-PDF documents are processed as extracted text, so layout, charts, embedded images, tracked changes, and other office-specific structure are not established
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
            value: documented inputs include DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, and XLSX; spreadsheet uploads require code execution
          - type: runtime
            value: non-PDF documents are processed as extracted text, so layout, charts, embedded images, tracked changes, and other office-specific structure are not established
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: documents, spreadsheets, notebooks, and code folders or repositories are documented upload classes
          - type: runtime
            value: the reviewed page does not enumerate every office extension or establish formula, chart, slide, comment, macro, or embedded-object fidelity
        evidence:
          - resourceId: google-gemini-upload-files
            type: documented
            observedAt: 2026-08-28
---

This row covers common document attachments such as plain text, rich text, word-processing files, presentations, and spreadsheets. Evidence should list exact formats and distinguish plain-text extraction from retained tables, formulas, notes, comments, charts, images, layout, and workbook or slide structure.

Macros, external links, encrypted files, tracked changes, hidden sheets, and embedded objects are separate risk and fidelity boundaries. When a connector opens a cloud document by reference, record that path separately from a direct upload.
