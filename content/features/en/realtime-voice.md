---
title: Realtime voice
description: Speak and listen over a live audio session.
slug: realtime-voice
locale: en
seoTitle: "Realtime voice — Can My Agent Use"
socialTitle: Realtime voice
socialDescription: Compare live speech input and audio response support.
llmSummary: Realtime voice supports live spoken input and audio responses. Turn-taking, interruption, latency, models, and session limits are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - perception
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Speak and listen over a live audio session.
specLabel: Common product term
highlight: false
notes:
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; dictation or read-aloud alone does not qualify as a live two-way audio session.
  - id: 2
    text: "Evidence checked 2026-08-28: Microsoft documents Copilot Voice on copilot.com as listening continuously, speaking responses aloud, allowing interruption and follow-up speech, and producing a transcript when the live session ends."
  - id: 3
    text: "Evidence checked 2026-08-28: Anthropic documents beta voice mode on Claude web and Claude Desktop as a complete two-way spoken conversation with hands-free and push-to-talk operation."
  - id: 4
    text: "Evidence checked 2026-08-28: Mistral's Vibe Work voice mode is available in the web app on all plans, but it is documented as speech-to-text input that produces an editable transcript and optionally sends it. The reviewed page does not document spoken responses or a continuous two-way audio session, so this is narrower than realtime voice."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — Realtime API reference
    href: https://platform.openai.com/docs/api-reference/realtime
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - id: microsoft-copilot-voice
    title: Microsoft — Using Copilot Voice
    href: https://support.microsoft.com/en-us/Microsoft-Copilot/using-copilot-voice-with-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: How to use Copilot Voice
  - id: anthropic-claude-voice-mode
    title: Anthropic — Use voice mode
    href: https://support.claude.com/en/articles/11101966-use-voice-mode
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Web and Claude Desktop; hands-free and push-to-talk modes
  - id: mistral-vibe-voice-mode
    title: Mistral Docs — Use Voice mode
    href: https://docs.mistral.ai/vibe/work/voice-mode
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Web availability; transcription; Autosend behavior
support:
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Microsoft Copilot Voice support documentation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: requires microphone permission; conversations can be time-limited and subscriber priority applies when capacity is constrained
        evidence:
          - resourceId: microsoft-copilot-voice
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        stage: preview
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web voice-mode documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: preview
            value: voice mode is beta, counts toward normal plan usage, and can be disabled by an Enterprise owner through support
        evidence:
          - resourceId: anthropic-claude-voice-mode
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        stage: preview
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Desktop voice-mode documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: preview
            value: voice mode is beta and uses hosted Claude models; this is a desktop client capability, not local audio-model execution
        evidence:
          - resourceId: anthropic-claude-voice-mode
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: partial
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe web voice-mode documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Vibe Work voice input is available in the web app on all plans
          - type: runtime
            value: microphone audio is transcribed to editable text and can be sent automatically or manually
          - type: runtime
            value: the reviewed documentation does not establish spoken audio responses, interruption of a speaking model, or a continuous two-way voice session
        evidence:
          - resourceId: mistral-vibe-voice-mode
            type: documented
            observedAt: 2026-08-28
---

Speak and listen over a live audio session.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
