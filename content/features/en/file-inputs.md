---
title: File and media inputs
description: Compare document, image, audio, and video attachment support together with upload and processing limits.
slug: file-inputs
locale: en
seoTitle: File and media input capability coverage — Can My Agent Use
socialTitle: Which files and media can my agent use?
socialDescription: Compare document, image, audio, and video inputs without reducing multimodal upload support to one checkbox.
llmSummary: File and media inputs is a family covering image, PDF, office-document, audio, and video uploads plus file-count, size, duration, and preprocessing limits.
audience: Engineers comparing multimodal and document workflows.
contentKind: feature
status: published
tags: [perception, files, uploads, multimodal]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Track accepted file types, model-visible content, preprocessing, and upload limits separately.
specLabel: Product capability family
aliases: [file upload, attachments, multimodal input, media upload]
capabilityKind: family
related: [workspace-files, screenshots, realtime-voice]
highlight: true
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

A paperclip or file picker proves very little by itself. The harness may store a file without sending its content to the model, extract only text, sample a subset of pages or frames, route some formats through a tool, or impose limits that change by plan and model.

The child rows distinguish formats and record the useful operational detail: extensions and MIME types, per-file and aggregate size, file count, page or duration caps, preprocessing, resolution, transcription, archive handling, retention, and whether the original or a derivative reaches tools and sub-agents.

Workspace file access is separate because a coding harness may read repository files without supporting interactive uploads, while a web chat may accept attachments without exposing a filesystem.
