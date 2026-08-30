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

## Cycle 2 discoveries — 2026-08-29

These roots supported the second documentation-only cycle. Mutable repository
evidence is pinned to the reviewed commit in each feature resource.

### Agent Skills clients and implementations

- https://github.com/agentskills/agentskills/blob/69ef37e9424c0a7ea9dd2293b559e43ec8176379/docs/snippets/clients.jsx
- https://github.com/agentskills/agentskills/blob/69ef37e9424c0a7ea9dd2293b559e43ec8176379/CONTRIBUTING.md
- https://opencode.ai/docs/skills/
- https://github.com/aaif-goose/goose/blob/8ae4e4ba02836529790f47109b8785e8b42843a7/documentation/docs/guides/context-engineering/using-skills.md
- https://docs.github.com/en/copilot/concepts/agents/about-agent-skills
- https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills
- https://support.claude.com/en/articles/12512180-use-skills-in-claude
- https://support.claude.com/en/articles/12512198-create-custom-skills
- https://learn.chatgpt.com/docs/build-skills

### Goose MCP implementation

- https://github.com/aaif-goose/goose/releases/tag/v1.48.0
- https://github.com/aaif-goose/goose/tree/25021517f12cab87c94bed0874fe7d28168dc264/crates/goose-mcp
- https://github.com/aaif-goose/goose/tree/25021517f12cab87c94bed0874fe7d28168dc264/documentation/docs/mcp
- https://modelcontextprotocol.io/specification/2026-07-28
- https://modelcontextprotocol.io/extensions/tasks/overview
- https://modelcontextprotocol.io/extensions/apps/overview

### MCP Apps hosts

- https://github.com/modelcontextprotocol/ext-apps/blob/298e884ec3f02daba085acdb02042d73bd00b355/specification/2026-01-26/apps.mdx
- https://github.com/modelcontextprotocol/modelcontextprotocol/blob/e1f93af48a6b5bd57df9922f5f1f62117541c7ac/docs/extensions/client-matrix.mdx
- https://cursor.com/docs/mcp
- https://cursor.com/changelog/2-6
- https://github.com/different-ai/openwork/releases/tag/v0.18.39
- https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/features/mcp-apps-host/README.md
- https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/features/remote-mcp-apps/README.md

### OpenAI surface identity

- https://learn.chatgpt.com/docs/llms.txt
- https://developers.openai.com/codex/cli/

The current OpenAI index maps terminal documentation to Codex CLI. It did not
establish a distinct ChatGPT CLI surface, so the ambiguous catalog column
remains unsourced and is parked for identity review rather than inheriting
Codex evidence.

## Cycle 3 discoveries — 2026-08-29

### JetBrains AI Assistant 2026.2

- https://www.jetbrains.com/help/ai-assistant/configure-project-rules.html
- https://www.jetbrains.com/help/ai-assistant/agents.html
- https://www.jetbrains.com/help/ai-assistant/agent-skills.html
- https://www.jetbrains.com/help/ai-assistant/chat-mode.html
- https://www.jetbrains.com/help/ai-assistant/supported-llms.html
- https://www.jetbrains.com/help/ai-assistant/use-custom-models.html
- https://www.jetbrains.com/help/ai-assistant/mcp.html
- https://youtrack.jetbrains.com/projects/JUNIE/articles/SUPPORT-A-4167/Export-AI-Assistant-chat-history-to-Markdown
- https://sales.jetbrains.com/hc/en-gb/articles/14753675807506-Enable-or-disable-JetBrains-AI-for-all-users-in-your-organization
- https://www.jetbrains.com/legal/docs/terms/product_data_collection/

### OpenCode v1.18.25

- https://github.com/anomalyco/opencode/releases/tag/v1.18.25
- https://github.com/anomalyco/opencode/tree/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/web/src/content/docs
- https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/index.ts
- https://github.com/anomalyco/opencode/blob/cb7d8b2f5e44876ef98b661dc10590c915af3a9f/packages/opencode/src/mcp/catalog.ts
- https://github.com/modelcontextprotocol/typescript-sdk/tree/e12cbd7078db388152f6e839abdbe09ba01f3f32

### Warp desktop Agent

- https://docs.warp.dev/agents/capabilities/rules/
- https://docs.warp.dev/agents/capabilities/mcp/
- https://docs.warp.dev/agents/inference/model-choice/
- https://docs.warp.dev/agents/local-agents/agent-context/images-as-context/
- https://docs.warp.dev/agents/local-agents/interacting-with-agents/
- https://docs.warp.dev/platform/orchestration/
- https://docs.warp.dev/enterprise/team-management/admin-panel
- https://docs.warp.dev/enterprise/security-and-compliance/security-overview
- https://docs.warp.dev/changelog/2026/

### Devin hosted web

- https://docs.devin.ai/onboard-devin/agents-md
- https://docs.devin.ai/product-guides/knowledge
- https://docs.devin.ai/product-guides/scheduled-sessions
- https://docs.devin.ai/work-with-devin/advanced-capabilities
- https://docs.devin.ai/work-with-devin/dynamic-workflows
- https://docs.devin.ai/product-guides/security-profiles
- https://docs.devin.ai/admin/billing/usage
- https://docs.devin.ai/enterprise/security-access/custom-roles
- https://docs.devin.ai/api-reference/v3/audit-logs/enterprise-audit-logs
- https://docs.devin.ai/enterprise/security-access/security/customer-managed-keys
- https://docs.devin.ai/admin/security
- https://docs.devin.ai/admin/billing/self-serve
- https://docs.devin.ai/release-notes/overview

## Cycle 4 exact source additions — 2026-08-29

These are the exact first-party roots and immutable snapshots newly used in
Cycle 4. Product-level source ladders above remain authoritative for future
discovery; pinned repository paths below preserve the reviewed release state.

### Microsoft Copilot consumer web

- https://support.microsoft.com/en-us/microsoft-copilot
- https://support.microsoft.com/en-us/microsoft-copilot/using-copilot-tasks
- https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-privacy-controls
- https://support.microsoft.com/en-us/microsoft-copilot/conversation-history-in-microsoft-copilot

### Grok consumer web

- https://x.ai/legal/faq
- https://x.ai/news/grok-automations

### Gemini consumer web

- https://support.google.com/gemini/
- https://support.google.com/gemini/answer/16598469
- https://support.google.com/gemini/answer/16598625

### Perplexity hosted web and Computer

- https://www.perplexity.ai/help-center/
- https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer
- https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills

### Continue v2.0.0

- https://github.com/continuedev/continue/releases/tag/v2.0.0
- https://github.com/continuedev/continue/tree/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/docs
- https://github.com/continuedev/continue/tree/03b05ef60c378ff06f9e39ada2e22c95fe9ef6ad/core

### Amp CLI rolling documentation

- https://ampcode.com/docs/cli
- https://ampcode.com/docs/tools
- https://ampcode.com/docs/models-and-subagents
- https://ampcode.com/docs/orbs
- https://ampcode.com/docs/orbs/automations
- https://ampcode.com/security

### Cline v4.1.16

- https://github.com/cline/cline/releases/tag/v4.1.16
- https://github.com/cline/cline/tree/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs
- https://github.com/cline/cline/tree/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode
- https://github.com/modelcontextprotocol/typescript-sdk/tree/2d889f2b329e46680ec9bdd565de4616c497825a

### Replit Agent hosted web

- https://docs.replit.com/features/agent/skills
- https://docs.replit.com/core-concepts/agent/task-system
- https://docs.replit.com/features/agent/model-selector
- https://docs.replit.com/chat/routines
- https://docs.replit.com/build/connect-via-mcp
- https://replit.com/privacy-policy

### Zed v1.17.2 native desktop Agent

- https://github.com/zed-industries/zed/releases/tag/v1.17.2
- https://github.com/zed-industries/zed/tree/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/docs/src/ai
- https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs
- https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/protocol.rs
- https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/client.rs
- https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs

## Cycle 5 exact source additions — 2026-08-29

### OpenAI ChatGPT web and Desktop

- https://help.openai.com/en/articles/8096356-chat-preferences-for-chatgpt
- https://help.openai.com/en/articles/7260999-how-do-i-export-my-chatgpt-history-and-data.csv
- https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq
- https://help.openai.com/en/articles/10169521-projects-in-chatgpt
- https://help.openai.com/en/articles/8555545-file-uploads-faq
- https://help.openai.com/en/articles/8983675-what-types-of-files-are-supported
- https://help.openai.com/en/articles/10291617-what-is-agent-mode
- https://help.openai.com/en/articles/20001275
- https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt
- https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt
- https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt
- https://help.openai.com/en/articles/11750701-rbac/
- https://help.openai.com/en/articles/9237897-chatgpt-search
- https://help.openai.com/en/articles/20001274

### Anthropic Claude web and Desktop

- https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac
- https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork
- https://support.claude.com/en/articles/10684626-enable-and-use-web-search
- https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork
- https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork

### OpenWork Desktop v0.18.39

- https://github.com/different-ai/openwork/releases/tag/v0.18.39
- https://github.com/different-ai/openwork/tree/63625a4be566256370eebb84ad91b020a0f6cf06
- https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/features/local-managed-mcp-oauth/README.md
- https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/mcp-ui-control-profile.md
- https://github.com/different-ai/openwork/blob/63625a4be566256370eebb84ad91b020a0f6cf06/docs/desktop-app-policies.md

### Aider v0.86.0

- https://github.com/Aider-AI/aider/releases/tag/v0.86.0
- https://github.com/Aider-AI/aider/tree/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider
- https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/args.py
- https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/commands.py
- https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/config/options.md
- https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/usage/caching.md
- https://github.com/Aider-AI/aider/blob/a4be6ccd87ebaa59b361f3f028d116ce1761b626/aider/website/docs/legal/privacy.md

## Cycle 6 exact source additions — 2026-08-29

These sources were returned by the completed Copilot web, Gemini web, and
Claude Desktop briefs and independently reconciled into the catalog. Adjacent
surface sources remain boundary evidence rather than support for the named
harness.

### Microsoft Copilot consumer web

- https://support.microsoft.com/en-us/microsoft-365-copilot/learning/changes-microsoft-copilot-app
- https://support.microsoft.com/en-us/privacy/microsoft-copilot/transparency-note
- https://support.microsoft.com/en-us/privacy/microsoft-copilot/privacy-controls
- https://support.microsoft.com/en-us/privacy/microsoft-copilot/activity-history
- https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-cowork
- https://support.microsoft.com/en-US/Microsoft-365-Copilot/ai-credits-and-limits-for-microsoft-365-subscriptions
- https://support.microsoft.com/en-us/Microsoft-365-Copilot/provide-custom-instructions-for-your-microsoft-365-copilot-notebook
- https://support.microsoft.com/en-us/Microsoft-365-Copilot/add-references-to-your-microsoft-365-copilot-notebook
- https://support.microsoft.com/en-us/microsoft-365-copilot/get-answers-and-insights-about-your-microsoft-365-copilot-notebook
- https://support.microsoft.com/en-us/microsoft-365-copilot/share-a-microsoft-365-copilot-notebook
- https://support.microsoft.com/en-US/Microsoft-365-Copilot/get-started-with-microsoft-365-copilot-notebooks
- https://support.microsoft.com/en-US/microsoft-copilot/microsoft-copilot-privacy-controls — superseded for current web after the 2026-08-18 app migration
- https://support.microsoft.com/en-us/Microsoft-Copilot/privacy-faq-for-microsoft-copilot — superseded for current web after the 2026-08-18 app migration

### Gemini consumer and Workspace web

- https://support.google.com/gemini/answer/17094507?co=GENIE.Platform%3DDesktop&hl=en
- https://support.google.com/gemini/answer/14903178?co=GENIE.Platform%3DDesktop&hl=en
- https://support.google.com/gemini/answer/15719111?co=GENIE.Platform%3DDesktop&hl=en
- https://support.google.com/gemini/answer/16275805?hl=en
- https://support.google.com/gemini/answer/15274899?co=GENIE.Platform%3DAndroid&hl=en
- https://support.google.com/gemini/answer/17094296?co=GENIE.Platform%3DDesktop&hl=en
- https://support.google.com/gemini/answer/17102773?hl=en
- https://support.google.com/gemini/answer/16504957?co=GENIE.Platform%3DDesktop&hl=en
- https://support.google.com/gemini/answer/14517446?co=GENIE.Platform%3DDesktop&hl=en
- https://knowledge.workspace.google.com/admin/compliance/data-covered-by-data-regions?hl=en
- https://support.google.com/gemini/answer/16363185?hl=en — adjacent Gemini-in-Chrome boundary only

### Anthropic Claude Desktop

- https://support.claude.com/en/articles/8241126-upload-files-to-claude
- https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
- https://support.claude.com/en/articles/13364135-use-claude-cowork-safely
- https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
- https://support.claude.com/en/articles/12702546-deploying-enterprise-grade-mcp-servers-with-desktop-extensions
- https://support.claude.com/en/articles/10065433-install-claude-desktop
- https://support.claude.com/en/articles/10593882-share-and-unshare-chats
- https://support.claude.com/en/articles/9519189-manage-project-visibility-and-sharing
- https://support.claude.com/en/articles/12260368-use-incognito-chats
- https://support.claude.com/en/articles/12512180-use-skills-in-claude
- https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
