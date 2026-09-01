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
updated: 2026-09-01
published: 2026-08-28
category: security-privacy
summary: Control or document model-training and service-improvement use of product content.
specLabel: Common product term
aliases: [training opt-out, data use, improve models, human review]
parent: data-security-controls
related: [data-retention-controls, admin-policy-controls]
notes:
  - id: 84
    text: "Evidence checked 2026-09-01: Vibe users can opt out of use of their inputs and outputs for model training in Vibe settings, while Vibe Enterprise is opted out by default and manages an opt-in at the administrator level. This setting is distinct from the Mistral Studio/API control."
  - id: 83
    text: "Evidence checked 2026-08-29: Claude Incognito chats are excluded from model training and memory. This is partial support because the control applies to the Incognito path rather than establishing every ordinary-consumer training preference; chats are retained for 30 days or longer under Enterprise retention policy."
  - id: 82
    text: "Evidence checked 2026-08-29: Aider v0.86.0 says its analytics never collect code, prompts, chats, keys, or personal information and lets operators disable analytics, while model-provider data use remains outside this Aider control."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp and its subprocessors do not train on customer data unless the user opts in; workspaces require administrator approval and Enterprise workspaces can never enable training."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity consumer accounts default AI Data Retention on but let users opt future data out of AI training, while Enterprise data is never used for model training."
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
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant detailed code-data collection and JetBrains model training are controlled by opt-in or opt-out settings and organization policy that vary by license; third-party model policies remain separate."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp users and paid-team administrators can disable user-content collection for service improvement, with documented Zero Data Retention provider treatment for supported models."
  - id: 53
    text: "Evidence checked 2026-08-29: Paid Devin plans can opt out of model training and enable provider Zero Data Retention; Teams require an administrator, while Enterprise training requires express prior written consent."
  - id: 60
    text: "Evidence checked 2026-08-29: the updated signed-in Microsoft Copilot app for individuals says prompts, responses, and uploaded-file contents are not used to train foundation models; optional feedback is handled separately."
  - id: 61
    text: "Evidence checked 2026-08-29: Signed-in Grok.com users can disable Improve the Model for future conversations, while Private Chat content is excluded from model training."
issues: []
resources:
  - id: mistral-vibe-training-opt-out
    title: "Mistral Help Center — Can I opt out of my input or output data being used for training?"
    href: https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-01
    locator: "Opt out of Vibe data training; Vibe and API opt-out toggles are separate"
  - id: anthropic-claude-incognito-data-controls
    title: Anthropic — Use incognito chats
    href: https://support.claude.com/en/articles/12260368-use-incognito-chats
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: What are incognito chats?; training, memory, and retention boundaries
  - id: aider-v0860-analytics
    title: "Aider v0.86.0 — Analytics"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/more/analytics.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "data collected; Disabling analytics; logging and inspection"
  - id: aider-v0860-privacy
    title: "Aider v0.86.0 — Privacy policy"
    href: "https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/legal/privacy.md"
    kind: docs
    publisher: Aider-AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Analytics Information; Your Choices; International Visitors"
  - id: amp-2026-08-training
    title: "Amp — Security Reference"
    href: https://ampcode.com/security
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Model Training"
  - id: perplexity-data-collection
    title: "Perplexity — Data Collection at Perplexity"
    href: https://www.perplexity.ai/help-center/en/articles/11564572-data-collection-at-perplexity
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Opt out of AI training data collection; Enterprise users"
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
  - id: jetbrains-ai-product-data
    title: JetBrains — Product Data Collection and Usage Notice
    href: https://www.jetbrains.com/legal/docs/terms/product_data_collection/
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Version 1.5; detailed code-related data; AI training and settings
  - id: warp-security-overview
    title: "Warp — Security overview"
    href: https://docs.warp.dev/enterprise/security-and-compliance/security-overview
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Zero Data Retention; Disabling telemetry"
  - id: warp-admin-privacy-controls
    title: "Warp — Admin Panel for teams"
    href: https://docs.warp.dev/enterprise/team-management/admin-panel
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Privacy settings — user-generated content collection"
  - id: cognition-devin-security
    title: "Cognition — Security at Cognition"
    href: https://docs.devin.ai/admin/security
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "How data is used to improve Devin"
  - id: microsoft-copilot-privacy-controls
    title: "Microsoft Copilot for individuals — activity history"
    href: https://support.microsoft.com/en-us/privacy/microsoft-copilot/activity-history
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Important; Manage your activity history; foundation-model training policy"
  - id: spacexai-grok-consumer-faq
    title: "SpaceXAI — Consumer FAQs"
    href: https://x.ai/legal/faq
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Model training; Grok.com Data Controls; Private Chat"
support:
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [84]
        target:
          kind: hosted-observation
          revision: 2026-09-01 Vibe training-control documentation observation
          observedAt: 2026-09-01
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: Vibe users are not opted out by default but can opt out in settings; Vibe Enterprise customers are opted out by default and administrators manage an opt-in
          - type: policy
            value: uploaded or attached Vibe documents count as input data; the Vibe control is separate from Mistral Studio and API controls
        evidence:
          - resourceId: mistral-vibe-training-opt-out
            type: documented
            observedAt: 2026-09-01
  - harness: claude-desktop
    versions:
      - track: current
        status: partial
        noteIds: [83]
        target:
          kind: dated-documentation
          revision: current official Claude Incognito documentation reviewed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: Incognito chats are not used to train models and do not enter memory
          - type: plan
            value: Incognito is available across Claude plans; ordinary chat controls and commercial terms remain separate
          - type: format
            value: Incognito chats are retained for 30 days or longer when an Enterprise retention policy requires it
        evidence:
          - resourceId: anthropic-claude-incognito-data-controls
            type: documented
            observedAt: 2026-08-29
        assessmentBasis: official-documentation
        confidence: high
        assessedAt: 2026-08-29
        humanVerificationDesired: false
  - harness: aider
    versions:
      - track: current
        status: partial
        noteIds: [82]
        target:
          kind: release
          revision: "Aider v0.86.0, tag commit a4be6ccd87ebaa59b361f3f028d116ce1761b626"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "--no-analytics disables analytics for one session and --analytics-disable disables them persistently"
          - type: policy
            value: "Aider analytics cover model names, token counts, edit formats, feature and command use, exceptions, and errors"
          - type: runtime
            value: "prompts, files, and outputs still go to the selected model endpoint unless a local model is used; provider training and retention policies are separate"
        evidence:
          - resourceId: aider-v0860-analytics
            type: documented
            observedAt: 2026-08-29
          - resourceId: aider-v0860-privacy
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "users can disable training; enabling it in a workspace needs admin approval and Enterprise forbids it"
          - type: auth
            value: "linked personal model subscriptions retain separate provider controls"
        evidence:
          - resourceId: amp-2026-08-training
            type: documented
            observedAt: 2026-08-29
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [70]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Perplexity web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "consumer opt-out applies to future collected data and does not remove data collected previously"
          - type: plan
            value: "Enterprise query information is not used for Perplexity model training and is covered by separate provider agreements"
        evidence:
          - resourceId: perplexity-data-collection
            type: documented
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [61]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Grok.com consumer web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "Grok.com Settings > Data > Improve the Model; unauthenticated opt-out availability varies by region"
          - type: policy
            value: "future conversations are excluded after opt-out; voluntarily submitted feedback may still be used for training"
        evidence:
          - resourceId: spacexai-grok-consumer-faq
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 consumer Microsoft Copilot web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "the current policy applies to individuals signed in with a personal Microsoft account"
          - type: policy
            value: "prompts, responses, and uploaded-file contents are excluded from foundation-model training; voluntarily submitted feedback is treated separately"
        evidence:
          - resourceId: microsoft-copilot-privacy-controls
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: partial
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "paid self-serve opt-out; Teams administrator control; Enterprise requires express prior written consent"
          - type: policy
            value: "opting out also enables Zero Data Retention with model providers"
        evidence:
          - resourceId: cognition-devin-security
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "individual users can disable collection; paid-team admins can enforce it"
          - type: plan
            value: "Business and Enterprise default disabled while other paid teams default enabled"
          - type: policy
            value: "provider-retained model exceptions are disabled by default for Enterprise until enabled"
        evidence:
          - resourceId: warp-security-overview
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-admin-privacy-controls
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: partial
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains Product Data Collection and Usage Notice version 1.5, 2026-06-01
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: detailed code-related collection and JetBrains model training choices vary by commercial license and organization policy; third-party provider processing is governed separately
        evidence:
          - resourceId: jetbrains-ai-product-data
            type: documented
            observedAt: 2026-08-29
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
