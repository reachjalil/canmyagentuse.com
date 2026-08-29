---
title: Audio file upload and understanding
description: Upload recorded audio for transcription, analysis, or other documented model context.
slug: audio-file-input
locale: en
seoTitle: Audio file input compatibility — Can My Agent Use
socialTitle: Audio file upload and understanding
socialDescription: Compare recorded-audio upload, transcription, speaker, timing, and duration support.
llmSummary: Audio-file input covers recorded uploads and is separate from realtime voice; evidence should distinguish transcript-only processing from timing, speaker, acoustic, or native audio understanding.
audience: Engineers comparing recorded-audio and meeting workflows.
contentKind: feature
status: published
tags: [perception, audio, uploads, transcription]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Upload recorded audio and expose its supported speech, timing, speaker, or acoustic content.
specLabel: Common product term
aliases: [audio input, audio upload, recording attachment, speech transcription]
parent: file-inputs
related: [video-input, realtime-voice, upload-limits]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents direct audio uploads in Grok chats and describes transcription and interpretation of audio and video inputs; detailed formats, timing, diarization, and duration limits are not stated on the reviewed FAQ page."
  - id: 2
    text: "Evidence checked 2026-08-28: Grok Bot lists audio among common supported inputs and documents a 25 MB per-audio-file limit, but the reviewed page does not specify transcript, speaker, timing, or acoustic fidelity."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini Apps accept audio uploads and document total audio-duration limits of 10 minutes without a Google AI plan or 3 hours with Google AI Pro or Ultra. The reviewed page does not define diarization, timestamp, transcript, or acoustic-understanding fidelity."
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
        status: yes
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: transcription and interpretation are documented, but accepted formats, diarization, timestamp, and native-audio fidelity are not specified on the reviewed page
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
            value: audio is a supported attachment up to 25 MB, but transcript, speaker, timing, and acoustic semantics are not documented on the reviewed page
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
            value: direct audio upload and analysis are documented
          - type: plan
            value: total audio is limited to 10 minutes without a Google AI plan and 3 hours with Google AI Pro or Ultra
          - type: runtime
            value: accepted audio formats, diarization, timestamps, transcript fidelity, and native acoustic semantics are not established by the reviewed page
        evidence:
          - resourceId: google-gemini-upload-files
            type: documented
            observedAt: 2026-08-28
---

This row covers recorded audio supplied as a file, not a live duplex voice session. Evidence should distinguish speech transcription from speaker diarization, timestamps, language identification, non-speech sound analysis, emotion or prosody claims, and native audio-model input.

Record formats, channels, maximum bytes and duration, language limits, transcript editability, retention, model and plan requirements, and whether tools or sub-agents receive the original recording or only a derivative transcript.
