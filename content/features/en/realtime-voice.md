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
  - id: 80
    text: "Evidence checked 2026-08-29: Google's current Gemini Live help explicitly states that Gemini Live is not available in the Gemini web app."
  - id: 79
    text: "Evidence checked 2026-08-29: ChatGPT Desktop Chat supports spoken input and audible responses; Live can listen and speak concurrently and allows natural interruption."
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT Voice on desktop web accepts spoken input and returns spoken responses; Live supports simultaneous listening and speaking with natural interruption."
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
  - id: openai-chatgpt-desktop-voice
    title: "OpenAI — ChatGPT Voice"
    href: https://help.openai.com/en/articles/20001274
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Voice options; Desktop Chat availability; interruption FAQ"
  - id: openai-chatgpt-web-voice
    title: "OpenAI — ChatGPT Voice"
    href: https://help.openai.com/en/articles/20001274
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Overview; Voice options; Start a Voice conversation — On web; interruption FAQ"
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
  - id: google-gemini-live-web-exclusion
    title: "Google Gemini Apps Help — Talk naturally with Gemini Live"
    href: "https://support.google.com/gemini/answer/15274899?co=GENIE.Platform%3DAndroid&hl=en"
    kind: docs
    publisher: "Google"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "What you need"
support:
  - harness: gemini-web
    versions:
      - track: current
        status: no
        noteIds: [80]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Live web-availability documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "the exclusion applies to the Gemini web app at gemini.google.com; Gemini mobile Live and Gemini in Chrome Live are adjacent surfaces and do not transfer"
        evidence:
          - resourceId: google-gemini-live-web-exclusion
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [79]
        target:
          kind: dated-documentation
          revision: "ChatGPT Desktop documentation reviewed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Voice in Chat is available in ChatGPT Desktop Chat; Voice in Work and Codex is separately available in the desktop app on macOS and Windows for eligible accounts"
          - type: plan
            value: "voice option, model, limits, and availability depend on plan, workspace settings, region, client version, and parental controls"
          - type: format
            value: "Live supports simultaneous listening and speaking with interruption; Standard uses turn-by-turn transcription"
        evidence:
          - resourceId: openai-chatgpt-desktop-voice
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "available in supported ChatGPT web experiences at ChatGPT.com and requires browser microphone permission"
          - type: plan
            value: "Voice option, model, limits, and availability depend on plan, workspace settings, region, app version, and parental controls"
          - type: format
            value: "Live can listen and speak at the same time and supports interruption; Standard is turn-by-turn speech transcription and response"
        evidence:
          - resourceId: openai-chatgpt-web-voice
            type: documented
            observedAt: 2026-08-29
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
