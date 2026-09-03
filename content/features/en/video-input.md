---
title: Video input
description: Upload or select a video for use as model input.
slug: video-input
locale: en
seoTitle: Video input compatibility — Can My Agent Use
socialTitle: Video input
socialDescription: Compare direct video upload, supported formats, duration limits, and what parts of a video reach the model.
llmSummary: Video input means an uploaded video contributes model context. Frame, audio, transcript, timing, and format behavior are recorded as qualifiers only when documented.
audience: Engineers comparing multimodal video workflows.
contentKind: feature
status: published
tags: [perception, video, uploads, multimodal]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload or select a video for use as model input.
specLabel: Common product term
aliases: [video input, video attachment, video upload, video understanding]
parent: file-inputs
related: [image-input, audio-file-input, upload-limits]
highlight: true
notes:
  - id: 89
    text: "Evidence checked 2026-09-02: Anthropic's file upload documentation explicitly restricts supported conversation uploads to document and image formats; recorded video uploads are not accepted on Claude web or desktop."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents direct video uploads in Grok chats and describes transcription and interpretation of audio and video, but the reviewed FAQ does not specify frame sampling, temporal reasoning, or audio-visual alignment."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot lists video among common supported inputs and documents a 200 MB per-video limit, but it does not describe which frames, audio, transcript, timing, or metadata reach the model."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini Apps accept video uploads up to 2 GB and document total video-duration limits of 5 minutes without a Google AI plan or 1 hour with Google AI Pro or Ultra. The reviewed page does not define frame sampling, timecode, or audio-visual alignment semantics."
  - id: 4
    text: "Evidence checked 2026-08-28: Perplexity web accepts common video containers and automatically transcribes spoken content, but its documentation explicitly says visual scenes in video are not indexed or searchable. This is transcript-oriented input rather than documented visual-video understanding."
  - id: 5
    text: "Evidence checked 2026-08-28: Gemini CLI custom commands encode a supported video path referenced with @{...} and inject it as multimodal input. The reviewed page does not enumerate containers, codecs, duration, frame sampling, timecodes, or audio-visual alignment."
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
  - id: perplexity-file-uploads
    title: Perplexity Help Center — File uploads
    href: https://www.perplexity.ai/help-center/en/articles/10354807-file-uploads
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Video files; supported file types
  - id: gemini-cli-custom-commands
    title: Gemini CLI — Custom commands
    href: https://geminicli.com/docs/cli/custom-commands/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Injecting file content with @{...}; multimodal support
  - id: anthropic-claude-upload-file-types
    title: "Anthropic Help Center — What kinds of documents can I upload to Claude?"
    href: "https://support.claude.com/en/articles/8241126-what-kinds-of-documents-can-i-upload-to-claude"
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Supported file formats; document and image types"
support:
  - harness: claude-web
    versions:
      - track: current
        status: "no"
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Anthropic document upload documentation observation"
          observedAt: 2026-09-02
          url: "https://support.claude.com/en/articles/8241126-what-kinds-of-documents-can-i-upload-to-claude"
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "video files not accepted; uploads restricted to documents and images"
        evidence:
          - resourceId: anthropic-claude-upload-file-types
            type: documented
            observedAt: 2026-09-02
  - harness: claude-desktop
    versions:
      - track: current
        status: "no"
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Anthropic document upload documentation observation"
          observedAt: 2026-09-02
          url: "https://support.claude.com/en/articles/8241126-what-kinds-of-documents-can-i-upload-to-claude"
        environmentProfile: hosted-default
        qualifiers:
          - type: format
            value: "video files not accepted; uploads restricted to documents and images"
        evidence:
          - resourceId: anthropic-claude-upload-file-types
            type: documented
            observedAt: 2026-09-02
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
            value: transcription and interpretation are documented, but frame sampling, temporal reasoning, timecodes, and audio-visual alignment are not
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
            value: video is accepted up to 200 MB, but frame, audio, transcript, timing, metadata, and sampling semantics are not documented on the reviewed page
        evidence:
          - resourceId: xai-grok-bot-files
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
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
  - harness: perplexity-web
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: MP4, MPEG, MOV, AVI, FLV, MPG, WebM, WMV, and 3GPP uploads are accepted and spoken content is automatically transcribed
          - type: runtime
            value: visual scenes in video are explicitly not indexed or searchable, so this does not establish frame-based or temporal visual understanding
          - type: runtime
            value: the general file-upload page documents a 40 MB per-file limit
        evidence:
          - resourceId: perplexity-file-uploads
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Gemini CLI custom-command documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supported video files referenced with @{...} inside a custom command are encoded and injected as multimodal input
          - type: runtime
            value: accepted containers, codecs, limits, frame sampling, timecodes, temporal reasoning, audio handling, and ordinary-prompt attachment methods are not established by the reviewed page
        evidence:
          - resourceId: gemini-cli-custom-commands
            type: documented
            observedAt: 2026-08-28
---

This row asks whether an uploaded or selected video contributes content to the model. Evidence should record whether the product uses sampled frames, native temporal input, extracted audio, a generated transcript, metadata, or some combination when that behavior is documented.

Record accepted containers and codecs, maximum bytes and duration, frame or sampling policy, audio handling, timecode awareness, resolution changes, model and plan restrictions, processing latency, and whether links are supported in addition to local uploads. A harness that accepts a video only for storage, sharing, or an unrelated editing tool remains unsupported for this row.
