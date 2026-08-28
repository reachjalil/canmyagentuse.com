---
title: Image upload and paste
description: Attach, paste, or select an image and make its visual content available to the model, with current Grok Web and Grok Bot evidence.
slug: image-input
locale: en
seoTitle: "Image upload and paste compatibility — Can My Agent Use"
socialTitle: Image upload and paste
socialDescription: Current image-input support for Grok Web and Grok Bot, including surface-specific attachment limits.
llmSummary: Grok Web and Grok Bot accept images as message context. Grok Bot allows pasting or attaching images and documents a six-attachment, 25 MB-per-image desktop boundary; other cells remain unknown until reviewed.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
  - image
  - uploads
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Attach, paste, or select an image whose visual content reaches the model.
specLabel: Product capability
aliases: [image input, image attachment, image upload, paste image, vision input]
parent: file-inputs
related: [screenshots, video-input, upload-limits]
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents image uploads and image understanding in Grok Web chats."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot messages accept pasted images and local file attachments; its files guide lists images as supported input and documents desktop attachment limits."
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
            value: file support and limits can vary by platform; this cell is scoped to the web surface
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
            value: desktop composer accepts up to six attachments per message and documents a 25 MB limit per image
          - type: policy
            value: damaged or unusually formatted files may not be readable
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
---

This row asks whether an image selected, dragged, or pasted into the exact harness is interpreted as visual model context. Merely uploading the file to storage, extracting only its filename, or making it available to an unrelated tool does not establish image input.

Evidence should record accepted formats, per-file and per-message limits, animation handling, resolution or detail controls, whether metadata is stripped, and whether availability changes by model, plan, or client. Screenshot capture is a separate capability because it concerns acquiring the current interface rather than supplying an existing image.

The Grok Web and Grok Bot desktop claims are scoped independently because their attachment limits and runtime behavior differ. Image input does not by itself establish screenshot capture, computer use, image generation, or reliable interpretation of every image format.

All other harness cells remain **unknown** until a dated note and public source support a more specific status. Use the Markdown and JSON twins if you are an agent reading this site.
