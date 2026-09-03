---
title: Model selection
description: Choose the model or documented model class used for a run instead of accepting only opaque automatic routing.
slug: model-selection
locale: en
seoTitle: Model selection compatibility — Can My Agent Use
socialTitle: Model selection
socialDescription: Compare explicit model choice and routing visibility across exact agent harnesses.
llmSummary: Model selection means the harness exposes a meaningful model choice for the run; a generic speed or quality label is partial unless it maps to documented behavior.
audience: Engineers comparing model access and routing control.
contentKind: feature
status: published
tags: [models, routing, control]
updated: 2026-08-31
published: 2026-08-28
category: models-context
summary: Choose the model or documented model class used for a run.
specLabel: Common product term
aliases: [model picker, model choice, model routing]
parent: models-and-context
related: [local-models, reasoning-effort-controls, model-fallback]
notes:
  - id: 88
    text: "Evidence checked 2026-09-02: Goose CLI supports explicit provider and model configuration via the interactive 'goose configure' setup wizard, the --provider and --model command-line flags, and GOOSE_PROVIDER/GOOSE_MODEL environment variables."
  - id: 89
    text: "Evidence checked 2026-09-02: Mistral Vibe web chat automatically selects models based on the selected mode or task, offering no direct model picker in standard chat conversations; custom models require creating an agent in Mistral Studio."
  - id: 83
    text: "Evidence checked 2026-09-02: Grok web interface provides a model picker enabling users to choose between Grok 2, Grok 3, and Grok 4 model families."
  - id: 82
    text: "Evidence checked 2026-08-31: Devin Desktop exposes an explicit model picker for agent work; the named roster and availability can change by runtime, plan, and provider availability."
  - id: 81
    text: "Evidence checked 2026-08-29: OpenWork Desktop exposes a searchable per-session model picker and applies the selected provider, model, and optional behavior variant; organization policy can hide blocked choices."
  - id: 76
    text: "Evidence checked 2026-08-29: Zed v1.17.2 provides a model selector in the Agent Panel, distinguishes the same model offered through different providers, and supports favorites and keyboard cycling."
  - id: 75
    text: "Evidence checked 2026-08-29: Replit Agent's Model selector lets eligible builders choose an exact named primary model for the next message in Power or Max Mode instead of relying on Auto routing."
  - id: 74
    text: "Evidence checked 2026-08-29: Cline v4.1.16's VS Code setup exposes API Provider and Model selectors and supports hosted-provider and local-model choices."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp's CLI Dial lets the operator choose low, medium, high, or ultra, each mapping to a documented bundle of model, reasoning effort, prompt, tools, and oracle; underlying model names can change."
  - id: 72
    text: "Evidence checked 2026-08-29: Continue v2.0.0 exposes dropdown selection for the active model in each role, and Agent mode uses the selected Chat model when that model can operate with tools."
  - id: 70
    text: "Evidence checked 2026-08-29: Perplexity web lets eligible users select Search models and a separate Computer orchestrator model, subject to plan, mode, rollout, and organization policy."
  - id: 62
    text: "Evidence checked 2026-08-29: Signed-in Gemini Apps users can open the model menu in the web composer and select among documented Gemini Flash-Lite, Flash, and Pro model classes, subject to current availability and plan limits."
  - id: 8
    text: "Evidence checked 2026-08-29: Aider lets the operator select the main model with --model and switch it during a chat with /model; editor and weak models are separately selectable."
  - id: 1
    text: "Evidence checked 2026-08-28: xAI's Grok Bot team documentation says the product has no model picker and does not plan to let users or administrators choose its models; requests use a product-managed fixed model set with automatic failover."
  - id: 2
    text: "Evidence checked 2026-08-28: OpenAI documents model controls in ChatGPT Work on the web and ChatGPT desktop, plus /model and --model/-m selection in Codex CLI."
  - id: 3
    text: "Evidence checked 2026-08-28: Anthropic documents model selectors in Claude web and desktop and /model, --model, environment, and settings-based selection in Claude Code."
  - id: 4
    text: "Evidence checked 2026-08-28: Gemini CLI exposes Auto, Pro, Flash, Flash-Lite, and manual model selection through /model and --model."
  - id: 5
    text: "Evidence checked 2026-08-28: GitHub Copilot CLI exposes per-session, repository, global, command-line, and automatic model selection with documented precedence."
  - id: 6
    text: "Evidence checked 2026-08-28: VS Code exposes a language-model picker, automatic routing, and BYOK or local-model configuration for supported agent sessions."
  - id: 7
    text: "Evidence checked 2026-08-28: Cursor documents a model picker and curated selectable models with task, cost, speed, and context tradeoffs."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 exposes exact model selection in AI Chat and supports JetBrains-hosted, third-party, local, and Auto choices subject to configuration."
  - id: 51
    text: "Evidence checked 2026-08-29: OpenCode v1.18.25 selects an exact configured provider/model through /models, the --model flag, or persistent opencode.json configuration."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp exposes a model picker with named models, Auto routing, custom routers, and persistent per-profile defaults."
  - id: 53
    text: "Evidence checked 2026-08-29: Devin's hosted model picker selects capability, Fusion, speed, and operating modes and remembers the chosen default across page reloads."
  - id: 60
    text: "Evidence checked 2026-08-29: Consumer Microsoft Copilot on the web exposes selectable conversation modes, including Smart explicitly powered by GPT-5, plus Quick response, Think Deeper, Study and learn, and Search."
issues: []
resources:
  - id: xai-grok-web-models
    title: "xAI — Models"
    href: https://docs.x.ai/developers/models
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Grok models and capabilities"
  - id: cognition-devin-desktop-models
    title: "Cognition — Models"
    href: https://docs.devin.ai/desktop/models
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-31
    locator: "Model picker; available models"
  - id: openwork-v01839-model-picker
    title: "OpenWork v0.18.39 — desktop model picker"
    href: "https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/apps/app/src/react-app/domains/session/modals/model-picker-modal.tsx#L34-L53"
    kind: docs
    publisher: OpenWork
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "ModelPickerModalProps, selection handler, and selectable model rows at lines 34–53, 242–245, and 478–503"
  - id: zed-v1-17-2-agent-panel
    title: "Zed v1.17.2 — Agent Panel"
    href: "https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai/agent-panel.md#L161-L172"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Changing Models and Favoriting Models, lines 161–172"
  - id: replit-agent-model-selector-current
    title: "Replit — Model selector"
    href: "https://docs.replit.com/features/agent/model-selector"
    kind: docs
    publisher: Replit
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Choose a model manually; Models by mode; Model selection in Build and Design"
  - id: cline-v4-1-16-model-selection
    title: "Cline v4.1.16 — Authorizing with Cline"
    href: "https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/getting-started/authorizing-with-cline.mdx#L17-L37"
    kind: docs
    publisher: "Cline Bot Inc."
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "IDE Setup, API Provider and Model dropdown instructions"
  - id: amp-2026-08-model-selection
    title: "Amp — Modes and Models"
    href: https://ampcode.com/docs/models-and-subagents
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Modes; current model routing"
  - id: continue-v2-model-role-selection
    title: "Continue v2.0.0 — model-role selection"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/customize/model-roles/00-intro.mdx#L24-L28
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Selecting model roles"
  - id: continue-v2-agent-model-setup
    title: "Continue v2.0.0 — Agent model setup"
    href: https://github.com/continuedev/continue/blob/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs/ide-extensions/agent/model-setup.mdx
    kind: docs
    publisher: "Continue"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Chat model use in Agent mode, lines 7–27"
  - id: perplexity-web-models
    title: "Perplexity — Advanced AI models included in subscriptions"
    href: https://www.perplexity.ai/help-center/en/articles/10354919-what-advanced-ai-models-are-included-in-my-subscription
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Modes in Perplexity; models available in Search and Computer"
  - id: google-gemini-web-model-selection
    title: "Google — Use Gemini Apps"
    href: https://support.google.com/gemini/answer/13275745?co=GENIE.Platform%3DDesktop&hl=en
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Choose the model you want to use"
  - title: Methodology
    href: /methodology
    kind: note
  - id: xai-grok-bot-team-models
    title: xAI — Grok Bot for teams and enterprises
    href: https://docs.x.ai/grok-bot/teams-and-enterprises
    kind: docs
    publisher: xAI
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Models and providers
  - id: openai-models
    title: OpenAI — Models in ChatGPT Work and Codex
    href: https://learn.chatgpt.com/docs/models
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-change-model
    title: Anthropic — Change model, effort, and thinking settings
    href: https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: anthropic-code-model-config
    title: Anthropic — Claude Code model configuration
    href: https://code.claude.com/docs/en/model-config
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: google-gemini-cli-model
    title: Google — Gemini CLI model selection
    href: https://geminicli.com/docs/cli/model/
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
  - id: github-copilot-cli-model-selection
    title: GitHub — Copilot CLI command reference
    href: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference
    kind: docs
    publisher: GitHub
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: /model and --model
  - id: microsoft-vscode-language-models
    title: Microsoft — AI language models in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/language-models
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Model picker, automatic selection, and BYOK
  - id: cursor-model-selection-guide
    title: Cursor — Selecting models
    href: https://docs.cursor.com/guides/selecting-models
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Model selection guidance
  - id: aider-model-selection
    title: Aider — Models and API keys
    href: https://aider.chat/docs/troubleshooting/models-and-keys.html
    kind: docs
    publisher: Aider AI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Defaults; Specifying model and key"
  - id: jetbrains-ai-chat-mode
    title: JetBrains AI Assistant — Configure chat mode
    href: https://www.jetbrains.com/help/ai-assistant/chat-mode.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Select a model
  - id: opencode-v1-18-25-models
    title: "OpenCode v1.18.25 — Models"
    href: https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs/models.mdx#L18-L24
    kind: docs
    publisher: "OpenCode"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Select a model; Loading models and precedence"
  - id: warp-model-choice
    title: "Warp — Agent model choice"
    href: https://docs.warp.dev/agents/inference/model-choice/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Available models; How to change models; Agent Profiles"
  - id: cognition-devin-release-notes-model-picker
    title: "Cognition — Recent Updates"
    href: https://docs.devin.ai/release-notes/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "2026-07-24 Redesigned Model Picker; 2026-07-01 Persist Model Selection"
  - id: microsoft-copilot-conversation-modes
    title: "Microsoft — Conversation modes in Microsoft Copilot"
    href: https://support.microsoft.com/en-US/microsoft-copilot/conversation-modes-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Supported modes; how to select a mode; Smart"
  - id: goose-configure-models
    title: "Goose — Configure provider and model"
    href: "https://goose-docs.ai"
    kind: docs
    publisher: "Agentic AI Foundation"
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "goose configure wizard; --provider and --model flags"
  - id: mistral-vibe-model-selection
    title: "Mistral Help Center — Model selection in Vibe"
    href: "https://help.mistral.ai"
    kind: docs
    publisher: Mistral AI
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Model management and custom agents"
support:
  - harness: goose
    versions:
      - track: current
        status: yes
        noteIds: [88]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Goose documentation observation"
          observedAt: 2026-09-02
          url: "https://goose-docs.ai"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "model configured via goose configure, --model flag, or GOOSE_MODEL environment variable"
        evidence:
          - resourceId: goose-configure-models
            type: documented
            observedAt: 2026-09-02
  - harness: le-chat
    versions:
      - track: current
        status: "no"
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Mistral Vibe documentation observation"
          observedAt: 2026-09-02
          url: "https://help.mistral.ai"
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "automatic model routing by task/mode; no user-facing model picker in standard chat"
        evidence:
          - resourceId: mistral-vibe-model-selection
            type: documented
            observedAt: 2026-09-02
  - harness: windsurf
    versions:
      - track: current
        status: yes
        noteIds: [82]
        target:
          kind: dated-documentation
          revision: current Devin Desktop documentation for the product formerly named Windsurf
          observedAt: 2026-08-31
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: the explicit picker's model roster varies by product runtime, plan, and current provider availability
        evidence:
          - resourceId: cognition-devin-desktop-models
            type: documented
            observedAt: 2026-08-31
  - harness: openwork-desktop
    versions:
      - track: current
        status: yes
        noteIds: [81]
        target:
          kind: release
          revision: "OpenWork Desktop v0.18.39, commit 63625a4be566256370eebb84ad91b020a0f6cf06"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "organization Desktop policy can restrict available providers and models"
          - type: format
            value: "selection is provider ID plus model ID; optional model-behavior variant is separate"
        evidence:
          - resourceId: openwork-v01839-model-picker
            type: documented
            observedAt: 2026-08-29
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [76]
        target:
          kind: release
          revision: "Zed v1.17.2, tag commit c8e44cfa7bda9b2e22c8d6934d78969352e7f61a"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: "available choices depend on configured Zed-hosted, API-key, subscription, gateway, or local-model providers"
          - type: runtime
            value: "model and provider are selected explicitly; tool support still varies by selected model"
        evidence:
          - resourceId: zed-v1-17-2-agent-panel
            type: documented
            observedAt: 2026-08-29
  - harness: replit-agent
    versions:
      - track: current
        status: partial
        noteIds: [75]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Replit Agent Model selector documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: "manual model choice is documented for Core and Pro in Power or Max Mode; Free Mode always uses intelligent routing"
          - type: runtime
            value: "the selector is rolling out and Primary model may be absent; Build and Design retain separate choices"
          - type: policy
            value: "available models vary with organization settings and authorization"
        evidence:
          - resourceId: replit-agent-model-selector-current
            type: documented
            observedAt: 2026-08-29
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [74]
        target:
          kind: release
          revision: "Cline VS Code extension v4.1.16, tag commit ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: "available providers and models depend on configured provider credentials or a local runtime"
        evidence:
          - resourceId: cline-v4-1-16-model-selection
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: partial
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "the operator selects a stable mode class rather than pinning an immutable provider model name"
          - type: policy
            value: "current routing can change with model availability and workspace restrictions"
        evidence:
          - resourceId: amp-2026-08-model-selection
            type: documented
            observedAt: 2026-08-29
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [72]
        target:
          kind: release
          revision: "Continue VS Code v2.0.0, tag commit 03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "Agent mode uses the active Chat-role model; eligibility depends on model and provider tool support or Continue's adaptation path"
        evidence:
          - resourceId: continue-v2-model-role-selection
            type: documented
            observedAt: 2026-08-29
          - resourceId: continue-v2-agent-model-setup
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
          - type: runtime
            value: "Computer's selected model is the orchestrator; helper-agent work can use other models"
          - type: plan
            value: "Free uses automatic Best while eligible paid plans expose selectors"
          - type: policy
            value: "Enterprise administrators can restrict providers and preview models"
        evidence:
          - resourceId: perplexity-web-models
            type: documented
            observedAt: 2026-08-29
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [62]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Gemini Apps documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "model switching requires sign-in"
          - type: plan
            value: "model names, versions, availability, and usable capacity can change and are plan-dependent"
        evidence:
          - resourceId: google-gemini-web-model-selection
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
          - type: runtime
            value: "selected mode remains active until disabled; some modes require sign-in"
          - type: format
            value: "Smart maps explicitly to GPT-5 while other choices are documented model classes or behaviors"
        evidence:
          - resourceId: microsoft-copilot-conversation-modes
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "hosted picker exposes capabilities and modes; underlying provider model names are not enumerated on the reviewed page"
        evidence:
          - resourceId: cognition-devin-release-notes-model-picker
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
            value: "availability can depend on plan, Zero Data Retention policy, and team-admin enablement"
          - type: runtime
            value: "selection persists and can be configured per Agent Profile"
        evidence:
          - resourceId: warp-model-choice
            type: documented
            observedAt: 2026-08-29
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [51]
        target:
          kind: release
          revision: "OpenCode v1.18.25, tag commit cb7d8b2f5e44876ef98b661dc10590c915af3a9f"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: auth
            value: "selected provider must be configured"
          - type: format
            value: "model identifiers use provider_id/model_id"
        evidence:
          - resourceId: opencode-v1-18-25-models
            type: documented
            observedAt: 2026-08-29
  - harness: jetbrains-ai
    versions:
      - track: current
        status: yes
        noteIds: [50]
        target:
          kind: dated-documentation
          revision: JetBrains AI Assistant 2026.2 Help observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: available choices depend on configured providers, locally installed models, and plan
        evidence:
          - resourceId: jetbrains-ai-chat-mode
            type: documented
            observedAt: 2026-08-29
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [8]
        target:
          kind: dated-documentation
          revision: current Aider models documentation observed 2026-08-29
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "model availability and credentials depend on the configured provider; Aider can select a model automatically only when the operator omits an explicit choice"
        evidence:
          - resourceId: aider-model-selection
            type: documented
            observedAt: 2026-08-29
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 ChatGPT Work web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: available choices depend on account eligibility, plan, and supported model
        evidence:
          - resourceId: openai-models
            type: documented
            observedAt: 2026-08-28
  - harness: chatgpt-desktop
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current ChatGPT desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: available choices depend on account eligibility, plan, and supported model
        evidence:
          - resourceId: openai-models
            type: documented
            observedAt: 2026-08-28
  - harness: codex-cli
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current Codex CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /model changes an interactive session; --model or -m selects a model for interactive and non-interactive runs
        evidence:
          - resourceId: openai-models
            type: documented
            observedAt: 2026-08-28
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude web documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: the selector shows models available to the account and can be restricted by an Enterprise role
        evidence:
          - resourceId: anthropic-change-model
            type: documented
            observedAt: 2026-08-28
  - harness: claude-desktop
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Desktop documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: the selector shows models available to the account and can be restricted by an Enterprise role
        evidence:
          - resourceId: anthropic-change-model
            type: documented
            observedAt: 2026-08-28
  - harness: claude-cli
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Claude Code documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: supports /model, --model, ANTHROPIC_MODEL, and persistent model settings with documented precedence
        evidence:
          - resourceId: anthropic-code-model-config
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-cli
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current Gemini CLI documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /model and --model expose automatic model classes and manual model selection; this setting does not override models used by subagents
        evidence:
          - resourceId: google-gemini-cli-model
            type: documented
            observedAt: 2026-08-28
  - harness: grok-bot-desktop
    versions:
      - track: current
        status: no
        noteIds: [1]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Grok Bot desktop documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: model choice is fully managed by the product; neither members nor administrators receive a model picker
        evidence:
          - resourceId: xai-grok-bot-team-models
            type: documented
            observedAt: 2026-08-28
  - harness: copilot-cli
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current GitHub Copilot CLI command reference
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: /model selects for the current session or persists at repository or global scope; --model selects at startup and auto enables product routing
        evidence:
          - resourceId: github-copilot-cli-model-selection
            type: documented
            observedAt: 2026-08-28
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current VS Code language-model documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: available models depend on provider access, Copilot plan, organization policy, configured BYOK providers, and agent-harness compatibility
        evidence:
          - resourceId: microsoft-vscode-language-models
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: yes
        noteIds: [7]
        target:
          kind: dated-documentation
          revision: current Cursor model-selection documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: plan
            value: selectable model inventory, pricing, and Max Mode availability depend on the current Cursor plan and provider availability
        evidence:
          - resourceId: cursor-model-selection-guide
            type: documented
            observedAt: 2026-08-28
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [83]
        target:
          kind: hosted-observation
          revision: 2026-09-02 Grok web model selection observation
          observedAt: 2026-09-02
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: model picker in Grok web interface allows switching between supported Grok model versions
        evidence:
          - resourceId: xai-grok-web-models
            type: documented
            observedAt: 2026-09-02
---

This row asks whether the operator can select a specific model or a clearly documented model class for the exact harness and task. An opaque automatic router is not explicit selection; a “fast” or “deep” mode may be partial if its underlying model can change without notice.

Evidence should record eligible plans, model aliases and revisions, per-workspace restrictions, whether tools and media inputs narrow the choices, and whether the selection persists for a conversation, agent, project, or single run.
