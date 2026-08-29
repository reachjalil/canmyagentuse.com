---
title: File upload limits
description: Document file size, count, duration, page, project, or rolling upload limits.
slug: upload-limits
locale: en
seoTitle: File upload limits comparison — Can My Agent Use
socialTitle: File upload limits
socialDescription: Compare file size, count, duration, page, project, and rolling upload limits by exact harness and plan.
llmSummary: File upload limits record documented size, count, page, duration, frequency, and storage limits with their scope. Accepting one test file does not establish every limit.
audience: Engineers sizing document and multimodal workloads.
contentKind: feature
status: published
tags: [perception, uploads, limits, quota]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Record numeric attachment size, count, page, duration, storage, and rolling quotas.
specLabel: Measured product property
aliases: [attachment limit, max file size, upload quota, file count limit]
parent: file-inputs
related: [context-window, usage-metering, rate-limit-disclosure]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok FAQ reports approximately 100 files per message on the web but does not publish the complete size, storage, page, duration, or rolling quota envelope on that page."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot's desktop composer accepts up to six attachments at once; documents, images, and audio can be up to 25 MB each, and video can be up to 200 MB. The reviewed page does not expose every storage, duration, page, or rolling quota."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude chats accept up to 20 files with a 500 MB per-file limit, images must be no larger than 8,000 by 8,000 pixels, and project files have a separate 30 MB limit. The reviewed documentation does not expose a complete rolling upload or storage quota."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini Apps accept up to 10 files in one prompt; videos can be up to 2 GB and other supported files up to 100 MB. Total video and audio duration varies by plan, and code folders or repositories have separate file-count and size limits."
  - id: 6
    text: "Evidence checked 2026-08-28: Perplexity's general web file-upload page documents a 40 MB per-file limit. Enterprise session, repository, and project documentation instead lists 50 MB per file, with plan-specific file-count, weekly-upload, and total persistent-file quotas."
  - id: 7
    text: "Evidence checked 2026-08-28: Microsoft Copilot web allows up to 20 files in one conversation and limits each uploaded file to 50 MB."
  - id: 8
    text: "Evidence checked 2026-08-28: Mistral's current Vibe documentation, which supersedes Le Chat at the same chat.mistral.ai entry point, documents Library uploads of up to 100 files at once and 100 MB per file. Ordinary chat file usage remains plan-limited without a public numeric allowance on the reviewed page."
  - id: 9
    text: "Evidence checked 2026-08-28: Claude Code documents a 30 MB maximum request-size failure, a PDF attachment boundary of 100 pages and 32 MB, and image dimension limits of 8,000 pixels for one image or 2,000 pixels when many images are in context. These are request and media boundaries, not a complete rolling or project quota."
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
    locator: File size and quantity limits
  - id: google-gemini-upload-files
    title: Google Gemini Apps Help — Upload and analyze files
    href: https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: File upload limits
  - id: perplexity-file-uploads
    title: Perplexity Help Center — File uploads
    href: https://www.perplexity.ai/help-center/en/articles/10354807-file-uploads
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: File size
  - id: perplexity-enterprise-file-limits
    title: Perplexity Help Center — Enterprise file limits
    href: https://www.perplexity.ai/help-center/en/articles/12009761-enterprise-file-limits
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Enterprise file limits by session, repository, project, and plan
  - id: microsoft-copilot-file-upload
    title: Microsoft Support — File upload in Microsoft Copilot
    href: https://support.microsoft.com/en-US/microsoft-copilot/file-upload-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Supported file formats; file count and size
  - id: mistral-vibe-libraries
    title: Mistral Docs — Add context with Libraries
    href: https://docs.mistral.ai/vibe/work/libraries
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Uploading documents; limits and processing
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat is now Vibe; product entry point
  - id: anthropic-claude-code-errors
    title: Claude Code Docs — Error reference
    href: https://code.claude.com/docs/en/errors
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Request too large; image was too large; PDF errors
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
            value: web documentation reports approximately 100 files per message but does not provide the complete per-file, page, duration, storage, or rolling quota envelope
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
            value: six attachments per desktop message; 25 MB each for documents, images, and audio; 200 MB each for video
          - type: policy
            value: page, duration, project storage, rolling quota, and remaining-quota visibility are not established by the reviewed page
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
            value: up to 20 files per chat, 500 MB per file, images no larger than 8,000 by 8,000 pixels, and project files limited to 30 MB
          - type: policy
            value: plan and usage limits may apply; the complete rolling upload, project-storage, and remaining-quota envelope is not documented on the reviewed page
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
            value: Claude chat limits are up to 20 files, 500 MB per file, images no larger than 8,000 by 8,000 pixels, and project files limited to 30 MB
          - type: policy
            value: plan and usage limits may apply; the complete rolling upload, project-storage, and remaining-quota envelope is not documented on the reviewed page
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
            value: up to 10 files per prompt; video up to 2 GB and other supported files up to 100 MB; one code folder or repository up to 5,000 files and 100 MB
          - type: plan
            value: total video is up to 5 minutes without a Google AI plan or 1 hour with Google AI Pro or Ultra; total audio is up to 10 minutes without a plan or 3 hours with Pro or Ultra
          - type: policy
            value: rolling account quota, project storage, and remaining-quota visibility are not fully documented on the reviewed page
        evidence:
          - resourceId: google-gemini-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: general file uploads are limited to 40 MB per file; Enterprise documentation lists 50 MB per file and up to 30 files in a session
          - type: plan
            value: Enterprise Pro and Max publish separate weekly, repository, project, personal-repository, and total persistent-file quotas
          - type: policy
            value: the generic and Enterprise pages publish different per-file limits, so deployments should apply the exact account and surface limit rather than assuming one universal maximum
        evidence:
          - resourceId: perplexity-file-uploads
            type: documented
            observedAt: 2026-08-28
          - resourceId: perplexity-enterprise-file-limits
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
            value: up to 20 files per conversation and 50 MB per uploaded file
          - type: policy
            value: rolling, storage, page, duration, and remaining-quota limits are not established by the reviewed page
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
            value: Libraries allow up to 100 files in one upload and 100 MB per file
          - type: plan
            value: ordinary chat files are available on all plans but plan-based usage limits are not numerically published on the reviewed page
          - type: policy
            value: Le Chat is now Vibe at the same chat.mistral.ai entry point; the numeric limits in this cell are specifically for the Library path
        evidence:
          - resourceId: mistral-vibe-libraries
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-overview
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
            value: 30 MB maximum request-size boundary; attached PDFs are limited to 100 pages and 32 MB
          - type: runtime
            value: one image can be up to 8,000 pixels on its longest edge, or 2,000 pixels when many images are in context
          - type: policy
            value: rolling usage, project storage, and remaining quota are not documented by the reviewed page
        evidence:
          - resourceId: anthropic-claude-code-errors
            type: documented
            observedAt: 2026-08-28
---

File support is not operationally useful without its limits. This row records per-file bytes, files per message or run, pages per document, audio or video duration, image dimensions, project storage, rolling daily or hourly quotas, and any separate organization cap.

Every number needs a scope: format, plan, model, client, workspace, region, and review date. Evidence should also describe the failure mode—preflight rejection, asynchronous processing failure, truncation, sampling, or silent omission—and whether the harness shows remaining quota before an upload.
