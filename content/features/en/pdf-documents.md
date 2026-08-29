---
title: PDF input
description: Upload a PDF for use as model input.
slug: pdf-documents
locale: en
seoTitle: "PDF input — Can My Agent Use"
socialTitle: PDF input
socialDescription: Compare PDF text, visual analysis, attachment counts, file-size limits, page boundaries, and unsupported cases.
llmSummary: PDF input makes an uploaded PDF available as model input. Text extraction, visual page analysis, file limits, and attachment limits are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload a PDF for use as model input.
specLabel: Common product term
aliases: [PDF upload, PDF input, document attachment]
parent: file-inputs
related: [office-document-input, upload-limits]
highlight: false
notes:
  - id: 11
    text: "Evidence checked 2026-08-29: Aider v0.86.0 embeds application/pdf files as model input when the selected model's metadata advertises PDF-input support."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok FAQ lists PDF among the document types accepted directly in Grok Web chats and describes summarization, extraction, comparison, and analysis of uploaded files."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot's desktop composer accepts PDF and plain-text documents. It accepts up to six attachments per message, with documents limited to 25 MB each; encrypted, damaged, unusually formatted, or very large files may not be readable."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude accepts PDFs in chats on its web and desktop surfaces. Its help documentation describes visual analysis for PDFs under 100 pages, a 500 MB per-file chat limit, and a separate 30 MB project-file limit; larger or nonvisual handling has narrower fidelity."
  - id: 5
    text: "Evidence checked 2026-08-28: Perplexity web accepts PDFs as file attachments and uses their content as session context. Short files are analyzed in full while longer files may be reduced to extracted important parts; visual-PDF fidelity is not established by the reviewed page."
  - id: 6
    text: "Evidence checked 2026-08-28: Microsoft Copilot web accepts PDF uploads up to 50 MB and documents analysis, extraction, summarization, and follow-up questions about uploaded files."
  - id: 7
    text: "Evidence checked 2026-08-28: Mistral's current Vibe Work documentation, which supersedes Le Chat at chat.mistral.ai, accepts PDFs and answers from their uploaded content. Mistral separately describes image and scanned-page interpretation, but complete PDF visual fidelity is not guaranteed."
  - id: 8
    text: "Evidence checked 2026-08-28: VS Code Copilot Chat accepts PDF attachments when the selected model supports image input; GitHub documents PDF attachments as available on all Copilot plans."
  - id: 9
    text: "Evidence checked 2026-08-28: Claude Code accepts attached PDFs and documents a maximum of 100 pages and 32 MB, with password-protected and invalid PDFs rejected."
  - id: 10
    text: "Evidence checked 2026-08-28: Gemini CLI custom commands encode supported PDF paths referenced with @{...} and inject them as multimodal input."
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
  - id: perplexity-file-uploads
    title: Perplexity Help Center — File uploads
    href: https://www.perplexity.ai/help-center/en/articles/10354807-file-uploads
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Upload files; file processing
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
    locator: Supported formats; querying text documents
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat is now Vibe; product entry point
  - id: github-copilot-images
    title: GitHub Docs — Asking GitHub Copilot questions in your IDE
    href: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/chat-with-copilot/chat-in-ide?tool=vscode
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Using images in Copilot Chat
  - id: anthropic-claude-code-errors
    title: Claude Code Docs — Error reference
    href: https://code.claude.com/docs/en/errors
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: PDF errors
  - id: gemini-cli-custom-commands
    title: Gemini CLI — Custom commands
    href: https://geminicli.com/docs/cli/custom-commands/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Injecting file content with @{...}; multimodal support
  - id: aider-pdf-v0-86
    title: Aider source — PDF input at v0.86.0
    href: https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/coders/base_coder.py
    kind: docs
    publisher: Aider AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "get_images_message PDF capability checks and application/pdf message construction"
support:
  - harness: aider
    versions:
      - track: current
        status: partial
        noteIds: [11]
        target:
          kind: release
          revision: Aider v0.86.0 commit a4be6ccd87ebaa59b361f3f028d116ce1761b626
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "PDF input requires Aider to recognize supports_pdf_input or max_pdf_size_mb metadata for the selected model"
          - type: runtime
            value: "the reviewed source does not establish a general Aider file-size or page-count limit"
        evidence:
          - resourceId: aider-pdf-v0-86
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
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: PDF files can be attached to a web session and their content enters the session context; short files are analyzed in full while long files may be reduced to extracted important parts
          - type: runtime
            value: complete page-image, scanned-page, form, annotation, and embedded-media fidelity is not established by the reviewed page
        evidence:
          - resourceId: perplexity-file-uploads
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Microsoft Copilot web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: PDF is a supported document upload; Copilot can analyze, extract, summarize, answer questions, and continue with follow-up questions about uploaded files
          - type: runtime
            value: each file is limited to 50 MB and up to 20 files can be attached in one conversation
          - type: runtime
            value: scanned-page OCR, complete visual-page fidelity, forms, annotations, and embedded media are not established by the reviewed page
        evidence:
          - resourceId: microsoft-copilot-file-upload
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Mistral Vibe web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: PDFs can be uploaded and queried directly; answers are documented as coming from uploaded content
          - type: policy
            value: Le Chat is now Vibe at the same chat.mistral.ai entry point; this claim is scoped to the Work upload path
          - type: runtime
            value: Mistral documents image and scanned-page interpretation separately, but does not guarantee complete fidelity for every PDF form, annotation, or embedded object
        evidence:
          - resourceId: mistral-vibe-files
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot Chat documentation for VS Code
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: PDF attachments can be pasted, dragged, or added from the VS Code Explorer when the selected model supports image input
          - type: plan
            value: PDF and image attachments are documented as available on all Copilot plans and enabled by default
          - type: runtime
            value: page, size, OCR, and complex-layout limits are not listed on the reviewed page
        evidence:
          - resourceId: github-copilot-images
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [9]
        target:
          kind: dated-documentation
          revision: current Claude Code error documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: attached PDFs are supported up to 100 pages and 32 MB
          - type: policy
            value: password-protected and invalid PDFs are rejected; complete OCR, form, annotation, and embedded-media fidelity is not established
        evidence:
          - resourceId: anthropic-claude-code-errors
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [10]
        target:
          kind: dated-documentation
          revision: current Gemini CLI custom-command documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supported PDF files referenced with @{...} inside a custom command are encoded and injected as multimodal input
          - type: runtime
            value: this evidence establishes custom-command file injection; PDF limits, OCR behavior, and ordinary-prompt attachment methods are not established by the reviewed page
        evidence:
          - resourceId: gemini-cli-custom-commands
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the exact harness can accept a PDF and expose useful document content to the model. Evidence should distinguish text extraction from page-image understanding, tables and forms from plain text, scanned PDFs from born-digital files, and password-protected files from ordinary documents.

Record page, file-size, file-count, plan, and model limits as qualifiers. A generic file picker or workspace file reader does not by itself prove PDF parsing.

The reviewed surfaces remain separate because limits and fidelity differ by product. These cells establish PDF input, not reliable OCR for every scan, support for encrypted files, or identical handling of forms, annotations, and embedded media.

Unlisted harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
