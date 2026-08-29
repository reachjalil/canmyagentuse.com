---
title: File and media inputs
description: Group document, image, audio, video, and file-upload questions.
slug: file-inputs
locale: en
seoTitle: File and media input capability coverage — Can My Agent Use
socialTitle: Which files and media can my agent use?
socialDescription: Compare document, image, audio, video, and file-upload support.
llmSummary: File and media inputs is an internal catalog grouping for image, PDF, office-document, audio, video, and upload-limit questions.
audience: Engineers comparing multimodal and document workflows.
contentKind: feature
status: published
tags: [perception, files, uploads, multimodal]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Group common file type, media input, and upload-limit questions.
specLabel: Catalog grouping
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

A paperclip or file picker proves very little by itself. The harness may store a file without sending its content to the model, extract only text, sample part of a document or recording, route some formats through a tool, or impose limits that change by plan and model.

The child rows distinguish formats and record useful operational detail such as extensions, MIME types, per-file and aggregate size, file count, page or duration caps, transcription, retention, and whether the content reaches the model or tools.

Workspace file access is separate because a coding harness may read repository files without supporting interactive uploads, while a web chat may accept attachments without exposing a filesystem.
