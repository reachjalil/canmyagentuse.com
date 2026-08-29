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
specLabel: Common product term
aliases: [image input, image attachment, image upload, paste image, vision input]
parent: file-inputs
related: [screenshots, video-input, upload-limits]
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents image uploads and image understanding in Grok Web chats."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot messages accept pasted images and local file attachments; its files guide lists images as supported input and documents desktop attachment limits."
  - id: 3
    text: "Evidence checked 2026-08-28: OpenAI documents image attachment, paste, or drag-and-drop in ChatGPT Work on the web; Shift-drag image input in the ChatGPT desktop app; and pasted images or repeated -i/--image paths in Codex CLI."
  - id: 4
    text: "Evidence checked 2026-08-28: Anthropic documents JPEG, PNG, GIF, and WebP uploads in Claude on the web and Claude Desktop, including drag-and-drop and clipboard paste."
  - id: 5
    text: "Evidence checked 2026-08-28: Google documents photo and image uploads among Gemini Apps file inputs on the web, subject to the shared per-prompt and per-file upload limits."
  - id: 6
    text: "Evidence checked 2026-08-28: Cursor Agent can read PNG, JPEG, GIF, WebP, and SVG files and place them in conversation context for a vision-capable model."
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
  - id: openai-image-inputs
    title: OpenAI — Image inputs
    href: https://learn.chatgpt.com/docs/image-inputs
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-upload-files
    title: Anthropic — Upload files to Claude
    href: https://support.claude.com/en/articles/8241126-upload-files-to-claude
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-upload-files
    title: Google — Upload and analyze files in Gemini Apps
    href: https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: cursor-agent-overview
    title: Cursor — Agent overview
    href: https://cursor.com/docs/agent/overview
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: images can be attached, pasted, or dragged into the web composer
        evidence:
          - resourceId: openai-image-inputs
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: Shift-drag supplies an image for inspection in the desktop app
        evidence:
          - resourceId: openai-image-inputs
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: accepts pasted images and one or more paths through -i/--image; OpenAI names common formats including PNG and JPEG
        evidence:
          - resourceId: openai-image-inputs
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: supports JPEG, PNG, GIF, and WebP through file selection, drag-and-drop, or clipboard paste
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supports JPEG, PNG, GIF, and WebP through the shared Claude chat attachment workflow
        evidence:
          - resourceId: anthropic-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: photos and images share Gemini Apps' documented file-count and size limits
        evidence:
          - resourceId: google-gemini-upload-files
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current Cursor Agent documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: PNG, JPEG, GIF, WebP, and SVG files enter conversation context when the selected model is vision-capable
        evidence:
          - resourceId: cursor-agent-overview
            type: documented
            observedAt: 2026-08-28
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
