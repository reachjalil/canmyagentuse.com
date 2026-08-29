---
title: File upload limits and quota visibility
description: Document and expose per-file, per-message, per-project, duration, page, and rolling upload limits.
slug: upload-limits
locale: en
seoTitle: File upload limits comparison — Can My Agent Use
socialTitle: File upload limits and quota visibility
socialDescription: Compare file size, count, duration, page, project, and rolling upload limits by exact harness and plan.
llmSummary: Upload-limit records capture numeric size, count, page, duration, frequency, and storage quotas with their scope; accepting one test file does not establish the full operational envelope.
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
support:
  - harness: grok-web
    versions:
      - track: current
        status: partial
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
        status: partial
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
        status: partial
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
        status: partial
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
        status: partial
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
---

File support is not operationally useful without its limits. This row records per-file bytes, files per message or run, pages per document, audio or video duration, image dimensions, project storage, rolling daily or hourly quotas, and any separate organization cap.

Every number needs a scope: format, plan, model, client, workspace, region, and review date. Evidence should also describe the failure mode—preflight rejection, asynchronous processing failure, truncation, sampling, or silent omission—and whether the harness shows remaining quota before an upload.
