---
title: Document input
description: Upload text, word-processing, presentation, or spreadsheet files for use as model input.
slug: office-document-input
locale: en
seoTitle: Office document input compatibility — Can My Agent Use
socialTitle: Document input
socialDescription: Compare upload and parsing of word-processing, presentation, spreadsheet, and text files.
llmSummary: Document input means uploaded text, word-processing, presentation, or spreadsheet content is available as model input. Supported formats and extraction fidelity are qualifiers.
audience: Engineers comparing document-heavy knowledge workflows.
contentKind: feature
status: published
tags: [perception, documents, uploads]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload common document formats for use as model input.
specLabel: Common product term
aliases: [document upload, DOCX input, spreadsheet upload, presentation upload]
parent: file-inputs
related: [pdf-documents, upload-limits]
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: Cline's attachment picker in VS Code accepts CSV and Excel (XLSX) spreadsheets alongside text documents and images as prompt context."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop accepts DOCX, PPTX, and XLSX attachments and its bundled Office transform extracts bounded text before sending the model request."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop Work accepts file context, and ChatGPT's maintained input-format list includes XLSX, XLS, CSV, TSV, DOCX, and PPTX."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT web explicitly supports common spreadsheet, presentation, and document inputs including XLSX, XLS, CSV, TSV, DOCX, and PPTX."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit's hosted Conversation composer accepts documents and spreadsheets as request context and explicitly supports spreadsheet analysis."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok FAQ lists DOCX, TXT, CSV, XLSX, PPTX, HTML, XML, JSON, and Markdown as direct Grok chat inputs and describes comparison, extraction, spreadsheet analysis, and document transformation."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot lists plain text, Word, Excel, PowerPoint, CSV, JSON, YAML, source code, HTML, email, and Jupyter notebooks as common desktop inputs, with six attachments per message and a 25 MB limit per document."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude accepts DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, and XLSX on its web and desktop surfaces; XLSX requires code execution. Non-PDF documents are handled as extracted text, so layout and embedded-image fidelity are not established."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini Apps document uploads for documents, spreadsheets, notebooks, and code folders or repositories, but the reviewed help page does not enumerate every office extension or promise formula, chart, presentation, comment, or embedded-object fidelity."
  - id: 6
    text: "Evidence checked 2026-08-28: Perplexity Enterprise file connectors support Google Docs, Slides, and Sheets plus DOCX, XLSX, PPTX, XLS, CSV, RTF, ODT, Markdown, JSON, and TXT. The reviewed direct-upload page describes textual-file uploads without enumerating those office extensions, so this cell is limited to the connector path."
  - id: 7
    text: "Evidence checked 2026-08-28: Microsoft Copilot web accepts DOCX, XLSX, PPTX, CSV, TXT, JSON, and Markdown uploads and can analyze and extract information from them."
  - id: 8
    text: "Evidence checked 2026-08-28: Mistral's current Vibe Work documentation, which supersedes Le Chat at chat.mistral.ai, accepts Word, PowerPoint, Excel, CSV, ODT, RTF, ODS, Numbers, and other document formats and reads their content as task context."
issues: []
resources:
  - id: openwork-v01839-office-routing
    title: "OpenWork v0.18.39 — Office attachment routing"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/react-app/domains/session/sync/attachment-file-part.ts#L17-L20"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Office MIME constants and routing at lines 17–20 and 164–182"
  - id: openwork-v01839-office-transform
    title: "OpenWork v0.18.39 — Office attachment text transform"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/server/src/opencode-plugins/openwork-office-attachments.ts#L7-L28"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "formats and safety limits plus extraction and message transform at lines 7–28 and 640–725"
  - id: openai-chatgpt-desktop-work-documents
    title: "OpenAI — ChatGPT Work and Codex"
    href: https://help.openai.com/en/articles/20001275
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Start on desktop — add files and context"
  - id: openai-chatgpt-desktop-supported-files
    title: "OpenAI — What types of files are supported?"
    href: https://help.openai.com/en/articles/8983675-what-types-of-files-are-supported
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "supported file-extension list and Google Docs exception"
  - id: openai-chatgpt-web-supported-files
    title: "OpenAI — What types of files are supported?"
    href: https://help.openai.com/en/articles/8983675-what-types-of-files-are-supported
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "supported file-extension list and Google Docs exception"
  - id: replit-upload-use-files-current
    title: "Replit — Upload and use files"
    href: "https://docs.replit.com/chat/upload-and-use-files"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Upload and use files; How to upload a file; Analyze a spreadsheet"
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
  - id: perplexity-file-connectors
    title: Perplexity Help Center — Introduction to File Connectors
    href: https://www.perplexity.ai/help-center/en/articles/10672063-introduction-to-file-connectors-for-enterprise-organizations
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file formats
  - id: microsoft-copilot-file-upload
    title: Microsoft Support — File upload in Microsoft Copilot
    href: https://support.microsoft.com/en-US/microsoft-copilot/file-upload-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file formats; file analysis
  - id: mistral-vibe-files
    title: Mistral Docs — Work with Files and Canvas
    href: https://docs.mistral.ai/vibe/work/files-and-canvas
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported formats; querying text documents; analyzing spreadsheets
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat is now Vibe; product entry point
  - id: cline-file-attachments
    title: "Cline Docs — File and Context Attachments"
    href: "https://docs.cline.bot"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "VS Code attachment picker and spreadsheet support"
support:
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Cline documentation observation"
          observedAt: 2026-09-02
          url: "https://docs.cline.bot"
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "accepts CSV and Excel spreadsheet files via attachment picker"
        evidence:
          - resourceId: cline-file-attachments
            type: documented
            observedAt: 2026-09-02
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "DOCX, PPTX, and XLSX; encrypted ZIP entries and unsupported compression are rejected"
          - type: runtime
            value: "12 MiB compressed input, 10 MiB total uncompressed, 128 ZIP-entry, and 24,000 extracted-character caps; XLSX has additional sheet, cell, and shared-string bounds"
        evidence:
          - resourceId: openwork-v01839-office-routing
            type: documented
            observedAt: 2026-08-29
          - resourceId: openwork-v01839-office-transform
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "Desktop Work and uploads remain subject to plan, workspace, and account eligibility"
          - type: format
            value: "XLSX, XLS, CSV, TSV, DOCX, PPTX, PDF, and TXT are listed; native .gdoc files are explicitly unsupported"
        evidence:
          - resourceId: openai-chatgpt-desktop-work-documents
            type: documented
            observedAt: 2026-08-29
          - resourceId: openai-chatgpt-desktop-supported-files
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "supported examples include XLSX, XLS, CSV, TSV, DOCX, PPTX, PDF, and TXT; native .gdoc files are not supported"
          - type: runtime
            value: "uploaded-file input on the hosted ChatGPT surface"
        evidence:
          - resourceId: openai-chatgpt-web-supported-files
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit hosted Conversation documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the explicit document-input flow is documented for hosted Conversations and not separately guaranteed for every Project Editor Agent thread"
          - type: format
            value: "documents and spreadsheets are named generically without exact DOCX, XLSX, PPTX, CSV, fidelity, or formula guarantees"
        evidence:
          - resourceId: replit-upload-use-files-current
            type: documented
            observedAt: 2026-08-29
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
        status: yes
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
  - harness: perplexity-web
    versions:
      - track: current
        status: partial
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: Enterprise file connectors support Google Docs, Slides, and Sheets plus DOCX, XLSX, PPTX, XLS, CSV, RTF, ODT, Markdown, JSON, and TXT
          - type: plan
            value: this documented path is scoped to File Connectors for Enterprise organizations; the reviewed direct-upload page does not enumerate local Office extensions
          - type: runtime
            value: formula, macro, slide-layout, comment, and embedded-object fidelity is not established
        evidence:
          - resourceId: perplexity-file-connectors
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Microsoft Copilot web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: documented web uploads include DOCX, XLSX, PPTX, CSV, TXT, JSON, and Markdown and can be analyzed, extracted, summarized, and queried with follow-up prompts
          - type: runtime
            value: each file is limited to 50 MB and up to 20 files can be attached in one conversation
          - type: runtime
            value: macro, formula, chart, slide-layout, comment, and embedded-object fidelity is not established
        evidence:
          - resourceId: microsoft-copilot-file-upload
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Mistral Vibe web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: supported uploads include DOCX, DOC, PPTX, PPT, XLSX, XLS, CSV, ODT, RTF, ODS, and Numbers; Word files, presentations, and spreadsheets can be queried from their uploaded content
          - type: policy
            value: Le Chat is now Vibe at the same chat.mistral.ai entry point; this claim is scoped to the Work upload path
          - type: runtime
            value: complete formula, macro, chart, comment, tracked-change, layout, and embedded-object fidelity is not established
        evidence:
          - resourceId: mistral-vibe-files
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
---

This row covers common document attachments such as plain text, rich text, word-processing files, presentations, and spreadsheets. Evidence should list exact formats and distinguish plain-text extraction from retained tables, formulas, notes, comments, charts, images, layout, and workbook or slide structure.

Macros, external links, encrypted files, tracked changes, hidden sheets, and embedded objects are separate risk and fidelity boundaries. When a connector opens a cloud document by reference, record that path separately from a direct upload.
