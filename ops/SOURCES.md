# First-party source map

This is the append-only discovery map for continuous catalog research. It was
seeded on 2026-08-29 from HTTPS resources already cited by the catalog, then
checked against current official documentation roots. A URL here is a place to
research, not proof of a compatibility cell.

Append newly found first-party roots in the same cycle that discovers them.
Never silently replace or delete an old root: append the successor with a date
and mark the old root superseded or unavailable. Status pages and changelogs
are discovery signals; the exact product documentation still has to support the
row definition.

## Cataloged harnesses

### `aider` — Aider

- Vendor: Aider
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://aider.chat/docs/
  2. Releases: https://github.com/Aider-AI/aider/releases
  3. First-party repository: https://github.com/Aider-AI/aider
  4. Status: no stable first-party status root located

### `amp-cli` — Amp

- Vendor: Sourcegraph
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://ampcode.com/docs/
  2. Releases/changelog: use the first-party navigation under
     https://ampcode.com/ and append a stable changelog root when located
  3. First-party repository: no product implementation repository located
  4. Status: https://sourcegraphstatus.com/ (discovery only; verify Amp scope)

### `chatgpt-cli` — ChatGPT CLI

- Vendor: OpenAI
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://learn.chatgpt.com/docs/ and
     https://developers.openai.com/codex/cli/
  2. Release notes: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
  3. First-party repository: none mapped to this exact ChatGPT CLI surface;
     do not substitute API SDKs or Codex CLI without exact product evidence
  4. Status: https://status.openai.com/

### `chatgpt-desktop` — ChatGPT desktop

- Vendor: OpenAI
- Surface: Desktop
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://learn.chatgpt.com/docs/ and https://help.openai.com/en/collections/3742473-chatgpt
  2. Release notes: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
  3. First-party repository: none for the product; do not use model/API repos
  4. Status: https://status.openai.com/

### `chatgpt-web` — ChatGPT web

- Vendor: OpenAI
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://learn.chatgpt.com/docs/ and https://help.openai.com/en/collections/3742473-chatgpt
  2. Release notes: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
  3. First-party repository: none for the product; do not use model/API repos
  4. Status: https://status.openai.com/

### `chrome-webmcp-preview` — Chrome WebMCP origin trial

- Vendor: Google
- Surface: Desktop browser preview
- Defaults: `preview-enabled`; target `release`
- Source ladder:
  1. Docs: https://developer.chrome.com/docs/ai/webmcp/ and
     https://developer.chrome.com/docs/ai/agents
  2. Release/platform status: https://chromestatus.com/features
  3. First-party source: https://chromium.googlesource.com/chromium/src/
  4. Status: https://chromestatus.com/ and https://status.chromium.org/

### `claude-cli` — Claude CLI

- Vendor: Anthropic
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://code.claude.com/docs/en/ and
     https://docs.anthropic.com/en/docs/claude-code/
  2. Releases: https://github.com/anthropics/claude-code/releases
  3. First-party repository: https://github.com/anthropics/claude-code
  4. Status: https://status.anthropic.com/

### `claude-desktop` — Claude desktop

- Vendor: Anthropic
- Surface: Desktop
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://support.claude.com/ and https://privacy.claude.com/
  2. Release notes: https://support.claude.com/en/articles/12138966-release-notes
  3. First-party repository: none for the desktop product; relevant open
     protocol repositories must still be tied to desktop product docs
  4. Status: https://status.anthropic.com/

### `claude-web` — Claude web

- Vendor: Anthropic
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://support.claude.com/ and https://privacy.claude.com/
  2. Release notes: https://support.claude.com/en/articles/12138966-release-notes
  3. First-party repository: none for the web product
  4. Status: https://status.anthropic.com/

### `cline` — Cline

- Vendor: Cline
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://docs.cline.bot/
  2. Releases: https://github.com/cline/cline/releases
  3. First-party repository: https://github.com/cline/cline
  4. Status: no stable first-party status root located

### `codex-cli` — Codex CLI

- Vendor: OpenAI
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://developers.openai.com/codex/cli/ and
     https://learn.chatgpt.com/docs/codex/cli
  2. Releases: https://github.com/openai/codex/releases
  3. First-party repository: https://github.com/openai/codex
  4. Status: https://status.openai.com/

### `continue` — Continue

- Vendor: Continue
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://docs.continue.dev/
  2. Releases: https://github.com/continuedev/continue/releases
  3. First-party repository: https://github.com/continuedev/continue
  4. Status: no stable first-party status root located

### `copilot-cli` — GitHub Copilot CLI

- Vendor: Microsoft / GitHub
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://docs.github.com/en/copilot/how-tos/copilot-cli
  2. Changelog: https://github.blog/changelog/label/copilot/
  3. First-party repository: use only a repository explicitly linked by GitHub
     Docs for this product; do not infer from unrelated Copilot extensions
  4. Status: https://www.githubstatus.com/

### `copilot-web` — Microsoft Copilot web

- Vendor: Microsoft
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://support.microsoft.com/en-us/microsoft-copilot and, for the
     exact GitHub cloud-agent surface, https://docs.github.com/en/copilot/
  2. Changelog: https://www.microsoft.com/en-us/microsoft-copilot/blog/ and
     https://github.blog/changelog/label/copilot/
  3. First-party repository: none for the consumer web product
  4. Status: https://status.cloud.microsoft/ and https://www.githubstatus.com/

### `cursor` — Cursor

- Vendor: Anysphere
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://cursor.com/docs/ and https://docs.cursor.com/
  2. Changelog: https://cursor.com/changelog
  3. First-party repository: no public product implementation repository
     located; use only repositories directly linked from Cursor docs
  4. Status: https://status.cursor.com/

### `devin-web` — Devin

- Vendor: Cognition
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://docs.devin.ai/
  2. Release notes: https://docs.devin.ai/release-notes/overview
  3. First-party repository: no public product implementation repository
     located
  4. Status: https://status.devin.ai/

### `gemini-cli` — Gemini CLI

- Vendor: Google
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://geminicli.com/docs/
  2. Changelog: https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/index.md
  3. First-party repository: https://github.com/google-gemini/gemini-cli
  4. Status: https://status.cloud.google.com/ (discovery only; verify service
     and CLI scope)

### `gemini-web` — Gemini web

- Vendor: Google
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://support.google.com/gemini/ and
     https://support.google.com/a/topic/13886119
  2. Updates: https://gemini.google.com/updates
  3. First-party repository: none for the web product
  4. Status: https://www.google.com/appsstatus/dashboard/

### `goose` — Goose

- Vendor: Block / Agentic AI Foundation
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://block.github.io/goose/ and
     https://block-goose.mintlify.app/
  2. Releases: https://github.com/aaif-goose/goose/releases
  3. First-party repository: https://github.com/aaif-goose/goose
  4. Status: no hosted product status root required or located

### `grok-bot-desktop` — Grok Bot

- Vendor: xAI
- Surface: Desktop
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://docs.x.ai/grok-bot/overview
  2. Release notes: use first-party xAI/Grok Bot documentation navigation and
     append a stable product changelog root when located
  3. First-party repository: none for the hosted product
  4. Status: https://status.x.ai/

### `grok-web` — Grok web

- Vendor: xAI
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://docs.x.ai/grok/
  2. Release notes: use first-party xAI/Grok documentation navigation and
     append a stable product changelog root when located
  3. First-party repository: none for the hosted product
  4. Status: https://status.x.ai/

### `jetbrains-ai` — JetBrains AI Assistant

- Vendor: JetBrains
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://www.jetbrains.com/help/ai-assistant/
  2. What's new: https://www.jetbrains.com/help/ai-assistant/whats-new.html
  3. First-party repository: use JetBrains repositories only when the exact AI
     Assistant behavior is publicly implemented and revision-pinned
  4. Status: https://status.jetbrains.ai/

### `le-chat` — Le Chat

- Vendor: Mistral AI
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://docs.mistral.ai/vibe/ and https://help.mistral.ai/
  2. Changelog/news: https://mistral.ai/news/
  3. First-party repository: none for the hosted product
  4. Status: https://status.mistral.ai/

### `opencode` — OpenCode

- Vendor: OpenCode
- Surface: CLI
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://opencode.ai/docs/
  2. Releases: https://github.com/anomalyco/opencode/releases
  3. First-party repository: https://github.com/anomalyco/opencode
  4. Status: no stable first-party status root located

### `openwork-desktop` — OpenWork Desktop

- Vendor: OpenWork
- Surface: Desktop
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://openworklabs.com/docs/
  2. Releases: https://github.com/different-ai/openwork/releases
  3. First-party repository: https://github.com/different-ai/openwork
  4. Status: no stable first-party status root located

### `perplexity-web` — Perplexity

- Vendor: Perplexity
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://www.perplexity.ai/help-center/
  2. Changelog: https://www.perplexity.ai/changelog
  3. First-party repository: none for the hosted product
  4. Status: https://status.perplexity.com/

### `replit-agent` — Replit Agent

- Vendor: Replit
- Surface: Web
- Defaults: `hosted-default`; target `hosted-observation`
- Source ladder:
  1. Docs: https://docs.replit.com/
  2. Changelog/blog: https://replit.com/blog
  3. First-party repository: use only repositories directly linked by Replit
     docs for an exact open component
  4. Status: https://status.replit.com/

### `vscode-copilot` — Copilot Chat in VS Code

- Vendor: Microsoft / GitHub
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://code.visualstudio.com/docs/agents/overview and
     https://code.visualstudio.com/docs/agent-customization/overview
  2. Release notes: https://code.visualstudio.com/updates/
  3. First-party repository: https://github.com/microsoft/vscode
  4. Status: https://www.githubstatus.com/

### `warp` — Warp

- Vendor: Warp
- Surface: Desktop
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://docs.warp.dev/
  2. Changelog: https://www.warp.dev/changelog
  3. First-party repository/issue tracker: https://github.com/warpdotdev/Warp
  4. Status: https://status.warp.dev/

### `windsurf` — Windsurf

- Vendor: Codeium / Cognition
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://docs.windsurf.com/ and, for post-acquisition desktop
     integration pages, https://docs.devin.ai/desktop/
  2. Changelog: https://windsurf.com/changelog
  3. First-party repository: use only repositories linked by current Windsurf
     or Cognition docs for the exact behavior
  4. Status: https://status.windsurf.com/

### `zed-agent` — Zed Agent

- Vendor: Zed Industries
- Surface: Desktop editor
- Defaults: `local-default`; target `release`
- Source ladder:
  1. Docs: https://zed.dev/docs/ai/
  2. Releases: https://github.com/zed-industries/zed/releases
  3. First-party repository: https://github.com/zed-industries/zed
  4. Status: no stable first-party status root located

## Specifications

Specification pages establish terminology and protocol requirements. Product
support still needs exact product evidence; a specification alone does not
prove that a harness implements it.

### `a2a` — Agent2Agent Protocol

- Authority: Linux Foundation project
- Canonical specification: https://a2a-protocol.org/latest/specification/
- Revisions/source: https://github.com/a2aproject/A2A/releases and
  https://github.com/a2aproject/A2A

### `a2ui` — A2UI

- Authority: A2UI project
- Canonical specification: https://a2ui.org/specification/v0.9-a2ui/
- Revisions/source: https://github.com/google/A2UI/releases and
  https://github.com/google/A2UI

### `acp` — Agent Client Protocol

- Authority: ACP / Zed ecosystem
- Canonical docs: https://agentclientprotocol.com/protocol/v1/overview
- Revisions/source: https://github.com/agentclientprotocol/agent-client-protocol/releases
  and https://github.com/agentclientprotocol/agent-client-protocol

### `ag-ui` — AG-UI

- Authority: AG-UI community
- Canonical docs: https://docs.ag-ui.com/
- Revisions/source: https://github.com/ag-ui-protocol/ag-ui/releases and
  https://github.com/ag-ui-protocol/ag-ui

### `agent-plugins` — Agent Plugins

- Authority: cross-vendor technical steering committee
- Canonical specification: https://agent-plugins.org/specification/1.0
- Compatibility/revisions: https://agent-plugins.org/compatible-clients and
  links published by the specification site

### `agent-skills` — Agent Skills

- Authority: Agent Skills maintainers
- Canonical specification: https://agentskills.io/specification
- Source/discovery: https://agentskills.io/ and first-party repositories linked
  from that site

### `agents-md` — AGENTS.md

- Authority: community convention
- Canonical convention: https://agents.md/
- Source/discovery: first-party repositories and adopters linked from the
  convention site; exact product support still requires product documentation

### `ahp` — Agent Host Protocol

- Authority: Microsoft
- Terminology/current architecture source:
  https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture
- Revisions/source: https://code.visualstudio.com/updates/ and
  https://github.com/microsoft/vscode

### `mcp-apps` — MCP Apps

- Authority: MCP project
- Canonical specification:
  https://modelcontextprotocol.io/extensions/apps/specification
- Revisions/source: https://github.com/modelcontextprotocol/ext-apps/releases
  and https://github.com/modelcontextprotocol/ext-apps

### `mcp` — Model Context Protocol

- Authority: MCP project / AAIF ecosystem
- Canonical specification:
  https://modelcontextprotocol.io/specification/2026-07-28
- Revisions/source: https://github.com/modelcontextprotocol/modelcontextprotocol/releases
  and https://github.com/modelcontextprotocol/modelcontextprotocol

### `nlweb` — NLWeb

- Authority: NLWeb community
- Canonical source: https://github.com/nlweb-ai/nlweb-typespec
- Revisions: https://github.com/nlweb-ai/nlweb-typespec/releases

### `webmcp` — WebMCP

- Authority: W3C Web Machine Learning Community Group
- Canonical draft: https://webmachinelearning.github.io/webmcp/
- Revisions/source: follow the revision history and repository links published
  by the canonical draft; browser implementation status belongs under the
  Chrome harness, not the specification

## Wide candidates

Ranked for future Phase-E admission by first-party documentation depth and
surface clarity. Admission still requires a typed harness file, exact surface,
unknown-by-default cells, and monogram fallback.

1. **Kiro** — https://kiro.dev/docs/ — split IDE, CLI, web, mobile, and Crew
   surfaces instead of creating one ambiguous column.
2. **Qwen Code** — https://qwenlm.github.io/qwen-code-docs/en/ — begin with the
   terminal surface; the docs separately describe IDE and programmatic modes.
3. **Junie** — https://junie.jetbrains.com/docs/ — distinguish CLI/headless
   from the JetBrains IDE agent.
4. **Amazon Q Developer** —
   https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/ — distinguish CLI,
   IDE, and hosted development-agent surfaces.
5. **Augment** — https://docs.augmentcode.com/ — distinguish editor Agent from
   Auggie CLI and any hosted/background surface.
6. **OpenHands** — https://docs.openhands.dev/ — distinguish the local app,
   cloud service, CLI, and SDK; SDK features do not prove app support.
7. **Roo Code** — https://roocodeinc.github.io/Roo-Code/ — editor extension;
   releases and source are under https://github.com/RooCodeInc/Roo-Code.
8. **Kilo Code** — https://kilo.ai/docs/ — distinguish editor extension and
   CLI surfaces; use links from current docs to resolve authoritative repos.
9. **Trae** — https://docs.trae.ai/ — establish international/CN and IDE/web
   surface identity before admission; https://docs.trae.cn/ is a separate
   first-party locale/product documentation root.

## Cycle 1 discoveries — 2026-08-29

These exact first-party pages were added to the research ladder during Cycle 1.
They remain leads until an individual feature cell cites and scopes them.

### Amp

- https://ampcode.com/docs/customize/agents-md
- https://ampcode.com/docs/customize/skills
- https://ampcode.com/news/mcp-in-orbs
- https://ampcode.com/docs/threads

### Aider

- https://aider.chat/docs/troubleshooting/models-and-keys.html
- https://aider.chat/docs/usage/images-urls.html
- https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626

### Goose

- https://github.com/aaif-goose/goose/tree/25021517f12cab87c94bed0874fe7d28168dc264/documentation
- https://github.com/aaif-goose/goose/releases/tag/v1.48.0

### JetBrains AI Assistant

- https://www.jetbrains.com/help/ai-assistant/chat-mode.html
- https://www.jetbrains.com/help/ai-assistant/ai-in-vcs-integration.html
- https://www.jetbrains.com/guide/ai/tips/refactor-code/

### Windsurf / Devin Desktop transition

- https://docs.devin.ai/desktop/getting-started
- https://docs.devin.ai/desktop/cascade/agents-md
- https://docs.devin.ai/desktop/cascade/memories
- https://docs.devin.ai/desktop/cascade/skills
- https://docs.devin.ai/desktop/cascade/mcp
- https://docs.devin.ai/cli/extensibility/rules
- https://docs.devin.ai/cli/extensibility/skills/overview
- https://docs.devin.ai/cli/extensibility/mcp/overview
- https://docs.devin.ai/cli/extensibility/mcp/configuration

### Devin hosted sessions

- https://docs.devin.ai/work-with-devin/interactive-planning
- https://docs.devin.ai/use-cases/gallery/figma-design-implementation
- https://docs.devin.ai/integrations/gh
- https://docs.devin.ai/get-started/devin-intro
- https://docs.devin.ai/work-with-devin/computer-use

### Warp

- https://docs.warp.dev/agents/capabilities/codebase-context/
- https://docs.warp.dev/agents/capabilities/agent-profiles-permissions/
- https://docs.warp.dev/agents/capabilities/full-terminal-use/
- https://docs.warp.dev/code/overview
- https://docs.warp.dev/code/code-review
- https://docs.warp.dev/guides/agent-workflows/how-to-review-prs-like-a-senior-dev/
- https://docs.warp.dev/agents/local-agents/agent-context/urls-as-context/
- https://docs.warp.dev/agents/capabilities/computer-use/
- https://docs.warp.dev/agents/capabilities/computer-use/browser-use/

### Replit Agent

- https://docs.replit.com/learn/foundations/introduction-to-ai
- https://docs.replit.com/features/agent/general-agent
- https://docs.replit.com/features/agent/task-board
- https://docs.replit.com/features/agent/web-search
- https://docs.replit.com/features/agent/app-testing
- https://docs.replit.com/features/workspace-tools/git-interface
- https://docs.replit.com/chat/connectors

### Maintained standards matrices

- https://agent-plugins.org/compatible-clients
- https://agentskills.io/clients
- https://modelcontextprotocol.io/extensions/client-matrix
