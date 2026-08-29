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
specLabel: Common product term
aliases: [video input, video attachment, video upload, video understanding]
parent: file-inputs
related: [image-input, audio-file-input, upload-limits]
highlight: true
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents direct video uploads in Grok chats and describes transcription and interpretation of audio and video, but the reviewed FAQ does not specify frame sampling, temporal reasoning, or audio-visual alignment."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot lists video among common supported inputs and documents a 200 MB per-video limit, but it does not describe which frames, audio, transcript, timing, or metadata reach the model."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini Apps accept video uploads up to 2 GB and document total video-duration limits of 5 minutes without a Google AI plan or 1 hour with Google AI Pro or Ultra. The reviewed page does not define frame sampling, timecode, or audio-visual alignment semantics."
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
  - id: google-gemini-upload-files
    title: Google Gemini Apps Help — Upload and analyze files
    href: https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Upload and analyze files; upload limits
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
            value: transcription and interpretation are documented, but frame sampling, temporal reasoning, timecodes, and audio-visual alignment are not
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
            value: video is accepted up to 200 MB, but frame, audio, transcript, timing, metadata, and sampling semantics are not documented on the reviewed page
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: partial
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: direct video upload and analysis are documented, with a 2 GB per-video limit
          - type: plan
            value: total video is limited to 5 minutes without a Google AI plan and 1 hour with Google AI Pro or Ultra
          - type: runtime
            value: frame sampling, temporal precision, timecodes, and audio-visual alignment are not established by the reviewed page
        evidence:
          - resourceId: google-gemini-upload-files
            type: documented
            observedAt: 2026-08-28
---

This row asks whether an uploaded or selected video contributes content to the model. Evidence must say what “video understanding” means for that harness: sampled frames, native temporal input, extracted audio, generated transcript, metadata, or some combination.

Record accepted containers and codecs, maximum bytes and duration, frame or sampling policy, audio handling, timecode awareness, resolution changes, model and plan restrictions, processing latency, and whether links are supported in addition to local uploads. A harness that accepts a video only for storage, sharing, or an unrelated editing tool remains unsupported for this row.

Testing should include questions that require temporal order, scene changes, audio-visual alignment, small on-screen text, and time-specific citations; a good transcript answer alone does not prove visual or temporal understanding.
