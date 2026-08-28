---
title: Video upload and understanding
description: Upload or select a video whose frames, audio, timing, or transcript become available to the model.
slug: video-input
locale: en
seoTitle: Video upload and understanding compatibility — Can My Agent Use
socialTitle: Video upload and understanding
socialDescription: Compare direct video upload, supported formats, duration limits, and what parts of a video reach the model.
llmSummary: Video input means an uploaded video contributes model context through frames, audio, transcript, timing, or a documented combination; file storage or link fetching alone is insufficient.
audience: Engineers comparing multimodal video workflows.
contentKind: feature
status: published
tags: [perception, video, uploads, multimodal]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload a video and expose documented visual, audio, transcript, and timing information to the model.
specLabel: Product capability
aliases: [video input, video attachment, video upload, video understanding]
parent: file-inputs
related: [image-input, audio-file-input, video-processing-disclosure, upload-limits]
highlight: true
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

This row asks whether an uploaded or selected video contributes content to the model. Evidence must say what “video understanding” means for that harness: sampled frames, native temporal input, extracted audio, generated transcript, metadata, or some combination.

Record accepted containers and codecs, maximum bytes and duration, frame or sampling policy, audio handling, timecode awareness, resolution changes, model and plan restrictions, processing latency, and whether links are supported in addition to local uploads. A harness that accepts a video only for storage, sharing, or an unrelated editing tool remains unsupported for this row.

Testing should include questions that require temporal order, scene changes, audio-visual alignment, small on-screen text, and time-specific citations; a good transcript answer alone does not prove visual or temporal understanding.
