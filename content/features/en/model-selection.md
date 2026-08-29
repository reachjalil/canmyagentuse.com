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
updated: 2026-08-28
published: 2026-08-28
category: models-context
summary: Choose the model or documented model class used for a run.
specLabel: Common product term
aliases: [model picker, model choice, model routing]
parent: models-and-context
related: [local-models, reasoning-effort-controls, model-fallback]
notes:
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
issues: []
resources:
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
support:
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
---

This row asks whether the operator can select a specific model or a clearly documented model class for the exact harness and task. An opaque automatic router is not explicit selection; a “fast” or “deep” mode may be partial if its underlying model can change without notice.

Evidence should record eligible plans, model aliases and revisions, per-workspace restrictions, whether tools and media inputs narrow the choices, and whether the selection persists for a conversation, agent, project, or single run.
