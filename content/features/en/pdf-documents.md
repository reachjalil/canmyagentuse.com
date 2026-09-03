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
updated: 2026-08-29
published: 2026-08-28
category: perception
summary: Upload a PDF for use as model input.
specLabel: Common product term
aliases: [PDF upload, PDF input, document attachment]
parent: file-inputs
related: [office-document-input, upload-limits]
highlight: false
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: Google Gemini Apps on the web accept PDF uploads up to 100 MB each (up to 10 files per prompt), providing document analysis, summarization, and question answering from document content."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop recognizes PDF attachments by extension and MIME and passes application/pdf through as a model-facing file part for the current session."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop Work accepts files as task context, and ChatGPT's current upload contract explicitly includes PDF synthesis and extraction with documented size, token, and visual-retrieval boundaries."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT web accepts uploaded PDFs for document synthesis, transformation, and extraction, including finding passages in an uploaded PDF."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit's hosted Conversation composer accepts file uploads and explicitly documents asking Replit questions about a PDF."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's VS Code attachment workflow explicitly accepts PDF documents from the file system alongside text, image, CSV, and Excel files."
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
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin sessions accept PDF attachments for prompt use, and current web release notes document inline PDF rendering."
issues: []
resources:
  - id: openwork-v01839-pdf-attachments
    title: "OpenWork v0.18.39 — PDF attachment conversion"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/react-app/domains/session/sync/attachment-file-part.ts#L57-L67"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "PDF extension and MIME mapping plus model-facing file-part conversion at lines 57–67, 106–125, 164–182, and 408–418"
  - id: openai-chatgpt-desktop-work-file-context
    title: "OpenAI — ChatGPT Work and Codex"
    href: https://help.openai.com/en/articles/20001275
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Start on desktop — add files and constraints"
  - id: openai-chatgpt-desktop-pdf-uploads
    title: "OpenAI — File Uploads FAQ"
    href: https://help.openai.com/en/articles/8555545-file-uploads-faq
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "PDF examples; file restrictions; embedded images"
  - id: openai-chatgpt-web-file-uploads
    title: "OpenAI — File Uploads FAQ"
    href: https://help.openai.com/en/articles/8555545-file-uploads-faq
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "About file uploads; How the capability works; file size restrictions; embedded images"
  - id: replit-upload-use-files-current
    title: "Replit — Upload and use files"
    href: "https://docs.replit.com/chat/upload-and-use-files"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Upload and use files; How to upload a file; Ask questions about a PDF"
  - id: cline-v4-1-16-pdf-documents
    title: "Cline v4.1.16 — Working with Files"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/core-workflows/working-with-files.mdx#L42-L58"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Adding files, supported file examples"
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
  - id: cognition-devin-attachments
    title: "Cognition — Upload an attachment"
    href: https://docs.devin.ai/api-reference/v1/attachments/upload-files-for-devin-to-work-with
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Upload an attachment; How to Use Uploaded Files"
  - id: cognition-devin-pdf-preview
    title: "Cognition — Recent Updates"
    href: https://docs.devin.ai/release-notes/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "2026-03-27 Inline File Previews"
  - id: google-gemini-web-pdf-upload
    title: "Google Gemini Apps Help — Upload and analyze files in Gemini Apps"
    href: "https://support.google.com/gemini/answer/14903178"
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Upload and analyze files; PDF document limits"
support:
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Google Gemini Apps documentation observation"
          observedAt: 2026-09-02
          url: "https://support.google.com/gemini/answer/14903178"
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "accepts PDF uploads up to 100 MB per file, up to 10 files per prompt"
        evidence:
          - resourceId: google-gemini-web-pdf-upload
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
            value: "PDF extension and application/pdf MIME are recognized"
          - type: runtime
            value: "provider-side rejection or upload limits surface upstream; the reviewed Desktop path does not impose its own PDF size cap"
        evidence:
          - resourceId: openwork-v01839-pdf-attachments
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
            value: "Desktop Work requires an eligible plan; file uploads remain subject to ChatGPT plan and account settings"
          - type: format
            value: "PDF files are limited to 512 MB and two million tokens; Enterprise supports visual PDF retrieval while other plans use extracted digital text and discard embedded images"
        evidence:
          - resourceId: openai-chatgpt-desktop-work-file-context
            type: documented
            observedAt: 2026-08-29
          - resourceId: openai-chatgpt-desktop-pdf-uploads
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
          - type: plan
            value: "file uploads are available on Free and paid ChatGPT web plans subject to account settings and plan limits"
          - type: format
            value: "PDF files are capped at 512 MB and two million tokens; only Enterprise documents visual PDF content, while other plans use text retrieval and discard embedded images"
        evidence:
          - resourceId: openai-chatgpt-web-file-uploads
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
            value: "the explicit PDF statement is on hosted Conversations and is not separately guaranteed in every Project Editor Agent thread"
          - type: format
            value: "the page states PDF question answering but no page, byte-size, visual-page, OCR, encrypted-file, or attachment-count boundary"
        evidence:
          - resourceId: replit-upload-use-files-current
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: format
            value: "PDF attachment through browse or drag-and-drop; page-count, size, OCR, and layout-preservation limits are not stated"
        evidence:
          - resourceId: cline-v4-1-16-pdf-documents
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "PDF session attachment with inline web preview; no public page-count limit was located"
        evidence:
          - resourceId: cognition-devin-attachments
            type: documented
            observedAt: 2026-08-29
          - resourceId: cognition-devin-pdf-preview
            type: documented
            observedAt: 2026-08-29
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
