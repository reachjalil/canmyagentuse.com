---
title: Training data controls
description: Control or document whether product content may be used for model training or service improvement.
slug: training-data-controls
locale: en
seoTitle: Training data controls — Can My Agent Use
socialTitle: Training data controls
socialDescription: Compare defaults and opt-out controls for training, service improvement, evaluation, and human review.
llmSummary: Training-data controls distinguish model training, service improvement, evaluation, safety review, and user feedback; consumer and business defaults may differ.
audience: Privacy, legal, security, and procurement teams.
contentKind: feature
status: published
tags: [security, privacy, training, data-use]
updated: 2026-08-28
published: 2026-08-28
category: security-privacy
summary: Control or document model-training and service-improvement use of product content.
specLabel: Common product term
aliases: [training opt-out, data use, improve models, human review]
parent: data-security-controls
related: [data-retention-controls, admin-policy-controls]
notes:
  - id: 1
    text: "Evidence checked 2026-08-28: xAI documents that Grok Bot training opt-out follows the applicable Cursor account and privacy settings, with organization privacy mode governing while a member is on a team. The reviewed page does not fully separate training, evaluation, safety review, feedback, or every subprocessor's use."
  - id: 2
    text: "Evidence checked 2026-08-28: OpenAI states that ChatGPT Business and Enterprise do not train on business data by default across ChatGPT Work and Codex surfaces. This plan-qualified statement does not establish the default or controls for personal Free, Go, Plus, or Pro accounts."
  - id: 3
    text: "Evidence checked 2026-08-28: Claude Code lets Free, Pro, and Max users choose whether data may improve future Claude models; Team, Enterprise, API, third-party platform, and government use is not used to train generative models under commercial terms unless the customer affirmatively provides data. Feedback and optional transcript sharing follow separate rules."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini Apps' Keep Activity setting controls whether future personal-account chats train Google's AI models. Turning it off stops training unless the user submits feedback, while service delivery and safety processing—including possible human review—continue."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor Privacy Mode prevents Customer Data from being used for Cursor training and uses zero-data-retention agreements with model providers. Safety classifiers and triggered abuse investigations are documented exceptions, and turning Privacy Mode off permits broader storage and training use."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-privacy
    title: xAI — Grok Bot approvals, security, and privacy
    href: https://docs.x.ai/grok-bot/approvals-security-and-privacy
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Cursor account and data settings
  - id: openai-work-pricing-data
    title: OpenAI — ChatGPT Work and Codex pricing
    href: https://learn.chatgpt.com/docs/pricing
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Business; Enterprise; plan comparison
  - id: anthropic-claude-code-data-usage
    title: Anthropic — Claude Code data usage
    href: https://code.claude.com/docs/en/data-usage
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Data training policy; feedback; session quality surveys
  - id: google-gemini-privacy-hub
    title: Google — Gemini Apps Privacy Hub
    href: https://support.google.com/gemini/answer/13594961
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Keep Activity; human review; feedback
  - id: cursor-data-use
    title: Cursor — Data Use and Privacy Overview
    href: https://cursor.com/data-use
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Privacy Mode
support:
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: partial
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: training opt-out follows Cursor account and privacy settings, and an organization's privacy mode governs team members
          - type: runtime
            value: the reviewed page does not fully distinguish foundation-model training, evaluation, safety review, feedback, human review, and third-party subprocessors
        evidence:
          - resourceId: xai-grok-bot-privacy
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-web
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: ChatGPT Business and Enterprise business data is not used for training by default
          - type: policy
            value: this cell does not establish the default, opt-out mechanics, feedback use, or human-review policy for personal plans
        evidence:
          - resourceId: openai-work-pricing-data
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: ChatGPT Business and Enterprise business data is not used for training by default
          - type: policy
            value: this cell does not establish the default, opt-out mechanics, feedback use, or human-review policy for personal plans
        evidence:
          - resourceId: openai-work-pricing-data
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: partial
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Codex pricing documentation observation
          observedAt: 2026-08-28
        environmentProfile: enterprise-managed
        qualifiers:
          - type: plan
            value: ChatGPT Business and Enterprise business data is not used for training by default when Codex is used through the workspace plan
          - type: auth
            value: API-key authentication follows API data controls and is not established by this ChatGPT-plan cell
        evidence:
          - resourceId: openai-work-pricing-data
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude Code documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: Free, Pro, and Max users can choose whether their data may improve future Claude models; Team, Enterprise, API, third-party platform, and government data is not used to train generative models under commercial terms unless affirmatively provided
          - type: policy
            value: /feedback, /bug, /share, optional transcript surveys, and customer opt-in programs have separate documented retention and improvement rules
        evidence:
          - resourceId: anthropic-claude-code-data-usage
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps privacy documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: this cell applies to signed-in personal accounts; work and school accounts follow administrator-controlled Workspace terms
          - type: policy
            value: with Keep Activity off, future chats do not train Google's AI models unless feedback is submitted; service delivery and safety processing can still involve human review
          - type: policy
            value: audio and Gemini Live video or screenshare improvement is controlled by a separate setting and is off by default
        evidence:
          - resourceId: google-gemini-privacy-hub
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor privacy documentation observation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: Privacy Mode prevents Customer Data from training Cursor models and uses ZDR agreements with model providers; non-ZDR models require designation or administrator opt-in
          - type: policy
            value: safety classifiers and triggered abuse investigations are exceptions; turning Privacy Mode off permits broader storage, improvement, and model-training use
        evidence:
          - resourceId: cursor-data-use
            type: documented
            observedAt: 2026-08-28
---

This row separates several uses that are often compressed into “not used for training”: foundation-model training, service improvement, evaluation, personalization, abuse prevention, safety review, human review, and content a user intentionally submits as feedback.

Evidence should identify defaults by account and plan, opt-in or opt-out mechanics, administrator enforcement, whether connectors and tool output follow the same rule, policy-change notice, and whether third-party model or tool providers receive content under different terms.
