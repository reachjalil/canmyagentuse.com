---
title: Local models
description: Run against a model hosted on the operator's machine.
slug: local-models
locale: en
seoTitle: "Local models — Can My Agent Use"
socialTitle: Local models
socialDescription: Compare connections to locally hosted models.
llmSummary: Local model support lets a product use a model hosted on the operator's machine. Model servers, formats, authentication, and feature limitations are qualifiers.
audience: Engineers comparing chat, desktop, and CLI agent harnesses.
contentKind: feature
status: published
tags:
  - runtime
updated: 2026-08-29
published: 2026-08-28
category: models-context
summary: Run against a model hosted on the operator's machine.
specLabel: Common product term
aliases: [self-hosted model, local inference, on-device model]
parent: models-and-context
related: [model-selection]
highlight: false
notes:
  - id: 88
    text: "Evidence checked 2026-09-02: Goose CLI supports locally hosted models via Ollama (defaulting to http://localhost:11434) and built-in local inference using llama.cpp to download and run GGUF models on-device."
  - id: 89
    text: "Evidence checked 2026-09-02: Zed Agent supports local model inference through Ollama, allowing developers to configure localhost endpoints for assistant chat and inline transformations."
  - id: 1
    text: Product cells without reviewed public evidence remain unknown; a configurable remote API endpoint alone is not treated as proof of on-device inference.
  - id: 2
    text: "Evidence checked 2026-08-28: VS Code documents BYOK support for fully offline local models such as Ollama and an experimental setting that enables BYOK models in Agent Host sessions."
  - id: 3
    text: "Evidence checked 2026-08-28: Continue documents local Ollama configuration, automatic discovery of installed models, offline operation, and model-role limitations."
  - id: 4
    text: "Evidence checked 2026-08-28: aider documents connecting directly to a local Ollama endpoint and selecting local models from the CLI."
  - id: 5
    text: "Evidence checked 2026-08-28: Cline documents fully offline local-model operation with either Ollama or LM Studio and calls out hardware and tool-use constraints."
  - id: 6
    text: "Evidence checked 2026-08-28: OpenCode documents local Ollama discovery and explicit configuration for Ollama, vLLM, and other locally hosted OpenAI-compatible servers."
  - id: 50
    text: "Evidence checked 2026-08-29: JetBrains AI Assistant 2026.2 connects to local models through Ollama, LM Studio, and OpenAI-compatible endpoints and permits assigning them to supported AI features."
issues: []
resources:
  - title: Methodology
    href: /methodology
    kind: note
  - title: Ollama — Quickstart
    href: https://docs.ollama.com/quickstart
    kind: docs
    publisher: Ollama
    reviewedAt: 2026-08-28
  - id: microsoft-vscode-local-language-models
    title: Microsoft — AI language models in VS Code
    href: https://code.visualstudio.com/docs/agent-customization/language-models
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Bring your own language model key and local Ollama models
  - id: continue-local-ollama-models
    title: Continue — Using Ollama with Continue
    href: https://docs.continue.dev/guides/ollama-guide
    kind: docs
    publisher: Continue
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Configure Ollama with Continue and model capabilities
  - id: aider-local-ollama-models
    title: aider — Ollama
    href: https://aider.chat/docs/llms/ollama.html
    kind: docs
    publisher: aider
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Local Ollama endpoint and model selection
  - id: cline-local-models
    title: Cline — Local models overview
    href: https://docs.cline.bot/running-models-locally/overview
    kind: docs
    publisher: Cline
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Running models locally with Cline
  - id: opencode-local-models
    title: OpenCode — Models
    href: https://opencode.ai/v2/docs/models
    kind: docs
    publisher: OpenCode
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Local models
  - id: jetbrains-ai-custom-models
    title: JetBrains AI Assistant — Use third-party and local models
    href: https://www.jetbrains.com/help/ai-assistant/use-custom-models.html
    kind: docs
    publisher: JetBrains
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: Connect a third-party or local provider; assign models to features
  - id: goose-ollama-docs
    title: "Goose — Ollama provider configuration"
    href: "https://goose-docs.ai"
    kind: docs
    publisher: "Agentic AI Foundation"
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Configure Provider — Ollama; local llama.cpp inference"
  - id: zed-ollama-docs
    title: "Zed Docs — Assistant configuration: Ollama"
    href: "https://zed.dev/docs/assistant/configuration#ollama"
    kind: docs
    publisher: "Zed Industries"
    evidenceType: documented
    reviewedAt: 2026-09-02
    locator: "Ollama configuration"
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
            value: "local Ollama endpoint on localhost:11434 or built-in llama.cpp runtime"
        evidence:
          - resourceId: goose-ollama-docs
            type: documented
            observedAt: 2026-09-02
  - harness: zed-agent
    versions:
      - track: current
        status: yes
        noteIds: [89]
        target:
          kind: dated-documentation
          revision: "2026-09-02 Zed assistant documentation observation"
          observedAt: 2026-09-02
          url: "https://zed.dev/docs/assistant/configuration#ollama"
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: "local Ollama endpoint configured in assistant settings"
        evidence:
          - resourceId: zed-ollama-docs
            type: documented
            observedAt: 2026-09-02
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
            value: local provider and model must be installed, running, and assigned to a supported AI feature
        evidence:
          - resourceId: jetbrains-ai-custom-models
            type: documented
            observedAt: 2026-08-29
  - harness: vscode-copilot
    versions:
      - track: current
        status: yes
        stage: experimental
        noteIds: [2]
        target:
          kind: dated-documentation
          revision: current VS Code language-model documentation
          observedAt: 2026-08-28
        environmentProfile: preview-enabled
        qualifiers:
          - type: experimental
            value: using BYOK models in Agent Host sessions requires chat.agentHost.byokModels.enabled and an Agent Host restart
          - type: runtime
            value: local Ollama use now requires the official Ollama extension; some VS Code features such as semantic search and embeddings can still require a GitHub account or external service
        evidence:
          - resourceId: microsoft-vscode-local-language-models
            type: documented
            observedAt: 2026-08-28
  - harness: continue
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: dated-documentation
          revision: current Continue Ollama guide
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: local model quality and advertised tool calling determine whether Agent mode, edit, apply, embeddings, and other roles work reliably
        evidence:
          - resourceId: continue-local-ollama-models
            type: documented
            observedAt: 2026-08-28
  - harness: aider
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: dated-documentation
          revision: current aider Ollama documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: weaker local models may fail aider's code-edit protocol; the documented default endpoint is the operator's local Ollama server
        evidence:
          - resourceId: aider-local-ollama-models
            type: documented
            observedAt: 2026-08-28
  - harness: cline
    versions:
      - track: current
        status: yes
        noteIds: [5]
        target:
          kind: dated-documentation
          revision: current Cline local-model guide
          observedAt: 2026-08-28
        environmentProfile: air-gapped
        qualifiers:
          - type: runtime
            value: requires a locally running Ollama or LM Studio endpoint and sufficient hardware; feature completeness depends on the model's tool-use behavior and context capacity
        evidence:
          - resourceId: cline-local-models
            type: documented
            observedAt: 2026-08-28
  - harness: opencode
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: dated-documentation
          revision: current OpenCode local-model documentation
          observedAt: 2026-08-28
        environmentProfile: local-default
        qualifiers:
          - type: runtime
            value: OpenCode can discover local Ollama models and configure local Ollama, vLLM, or OpenAI-compatible servers; declared capabilities and limits must match the actual model
        evidence:
          - resourceId: opencode-local-models
            type: documented
            observedAt: 2026-08-28
---

This row asks whether the exact harness can send model requests to an operator-controlled local inference runtime. A cloud model with a desktop client is not a local model, and a configurable remote API base URL does not prove on-device execution.

Evidence should identify the supported runtimes or protocols, model-discovery behavior, tool-calling and multimodal constraints, authentication, and whether any prompts, telemetry, or embeddings still leave the device.

The matrix below lists published **web**, **desktop**, and **CLI** surfaces. Unreviewed cells remain **unknown** until a dated note and public source support a more specific status.

Use the Markdown and JSON twins if you are an agent reading this site.
