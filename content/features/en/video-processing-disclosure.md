---
title: Video preprocessing disclosure
description: Explain how an uploaded video is sampled, transcribed, resized, truncated, and charged against context or quotas.
slug: video-processing-disclosure
locale: en
seoTitle: Video preprocessing disclosure — Can My Agent Use
socialTitle: Video preprocessing disclosure
socialDescription: Compare visibility into frame sampling, audio extraction, transcripts, truncation, and context cost.
llmSummary: Video preprocessing disclosure means the harness documents which video information reaches the model and how sampling, transcription, resizing, truncation, and token or quota accounting work.
audience: Engineers who need reproducible and explainable video analysis.
contentKind: feature
status: published
tags: [perception, video, preprocessing, transparency]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Explain frame, audio, transcript, resizing, truncation, and context-accounting behavior.
specLabel: Product capability
aliases: [frame sampling, video tokenization, video preprocessing]
parent: file-inputs
related: [video-input, context-usage-visibility, upload-limits]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

Two harnesses may both accept the same video while presenting very different information to the model. This row asks whether the product explains frame sampling, keyframe selection, scene detection, audio extraction, transcription, resizing, duration truncation, and context or quota accounting.

The claim is about disclosure, not visual quality. A partial status is appropriate when only some transformations or limits are documented. Runtime testing should compare the documented pipeline with time-specific and audio-visual questions.
