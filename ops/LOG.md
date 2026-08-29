# Continuous research cycle log

Append only. Do not rewrite completed cycle blocks or delete attempts. Keep
credentials, private output, and raw secret-bearing diffs out of this file.

## Record grammars

One searched-but-uncitable pair per line:

```text
ATTEMPT feature=<slug> harness=<slug> date=YYYY-MM-DD outcome=not-found note="<where and what was searched>"
```

One source conflict per line:

```text
CONTRADICTION feature=<slug> harness=<slug> date=YYYY-MM-DD src1=<https-url> src2=<https-url> note="<exact conflict>"
```

Use the date as the 30-day attempt cooldown anchor. A first-party changelog hit
may reopen a pair early; append a new attempt rather than editing the old one.

## Cycle block template

```text
## Cycle <k> — YYYY-MM-DD
- Phase: <A|B|C|D|E>
- Briefs: <count>; <compact scopes>
- Cells written: <count>
- Feature files changed: <slugs or none>
- Commit: <hash or pending reconciliation>
- Pushed: <yes|no>; <detail>
- Deployed: <yes|no|not-applicable>; <detail>
- Coverage: <sourced>/<total> (<percent>); delta <signed cells>
- Preview: <sourced>/<total> (<percent>); delta <signed cells>
- News counter: <n>/approximately 150; entry <slug or none>
- Incidents: <typed blockers or none>
```

Because a Git commit cannot contain its own final hash, the next cycle may
reconcile a `pending reconciliation` entry with the prior `HEAD` in the next
append-only block. Never amend a pushed commit merely to backfill its hash.

## Cycle 0 — 2026-08-29

- Phase: A
- Briefs: 0; operations pack initialization only
- Cells written: 0
- Feature files changed: none
- Commit: not a research cycle; pack ship is reported by the installing task
- Pushed: not part of this ledger entry
- Deployed: not part of this ledger entry
- Coverage: 621/3,534 (17.6%); delta +0
- Preview: 0/3,192 (0.0%); delta +0
- News counter: 0/approximately 150; entry none
- Incidents: none; unrelated pre-existing user work was present and preserved

ATTEMPT feature=native-rules harness=amp-cli date=2026-08-29 outcome=not-found note="Searched Amp AGENTS.md, CLI configuration, prompting, plugins, global plugins, skills, and first-party site results; no separate Amp-owned native project-rule format was located."
ATTEMPT feature=multi-file-edit harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched JetBrains AI Assistant Chat, Agents, and next-edit documentation; multi-file modification was documented only for separate Junie, Claude Agent, Codex, Copilot, or ACP agents."
ATTEMPT feature=web-fetch harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched JetBrains AI Assistant Chat and Agents documentation; /web establishes search, not retrieval of an exact URL or API."
ATTEMPT feature=browser-automation harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched official AI Assistant help for browser navigation, clicks, forms, Playwright, and page control; no built-in AI Assistant browser-control surface was located."
ATTEMPT feature=computer-use harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched official AI Assistant help for screenshot-informed clicking, typing, navigation, and desktop control; image attachment did not establish GUI action support."
ATTEMPT feature=diffs-and-patches harness=goose date=2026-08-29 outcome=not-found note="Searched Goose v1.48.0 CLI, Developer extension, PR recipes, and pinned editing implementation; review of existing Git diffs did not establish proposing or applying changes as a diff or patch."
ATTEMPT feature=subagent-delegation harness=aider date=2026-08-29 outcome=not-found note="Searched Aider modes, commands, docs, and v0.86.0 architect source; the two-model architect/editor pipeline did not establish a product-native child-agent boundary."
ATTEMPT feature=scheduled-runs harness=aider date=2026-08-29 outcome=not-found note="Searched Aider scripting, options, watch mode, and docs for schedules, cron, timers, and recurring triggers; no product-native time scheduler was found."
ATTEMPT feature=background-agents harness=aider date=2026-08-29 outcome=not-found note="Searched Aider notifications, scripting, options, and usage for detached or session-independent execution; notifications cover a still-running local process."
ATTEMPT feature=context-window harness=aider date=2026-08-29 outcome=not-found note="Searched Aider model settings, options, and warnings; provider metadata and a soft summarization threshold did not establish one exact Aider product/model/mode context-window limit."
ATTEMPT feature=audit-logs harness=aider date=2026-08-29 outcome=not-found note="Searched Aider analytics, privacy, and options for administrative security-event logging; anonymous analytics JSONL does not meet the catalog audit-log definition."
ATTEMPT feature=data-retention-controls harness=aider date=2026-08-29 outcome=not-found note="Searched Aider analytics, privacy, and options for retention, deletion, expiry, backups, and history controls; future analytics opt-out did not establish covered-data retention or deletion."
ATTEMPT feature=mcp-apps harness=windsurf date=2026-08-29 outcome=not-found note="Searched current Devin Desktop Cascade and Devin Local MCP documentation and indexes; tools, resources, and prompts were documented but no MCP Apps rendering behavior was located."
ATTEMPT feature=conversation-export harness=windsurf date=2026-08-29 outcome=not-found note="Searched current Devin Desktop and legacy Windsurf documentation; the only export statement was explicitly scoped to IDE plugins rather than the standalone desktop workbench."
CONTRADICTION feature=human-approval harness=aider date=2026-08-29 src1=https://aider.chat/docs/scripting.html src2=https://aider.chat/docs/config/options.html note="The Scripting page names --yes/AIDER_YES while the current Options reference names --yes-always/AIDER_YES_ALWAYS; the conflict concerns option spelling, not the existence of approval prompts."
CONTRADICTION feature=native-rules harness=windsurf date=2026-08-29 src1=https://windsurf.com src2=https://docs.devin.ai/desktop/getting-started note="The active marketing site presents Windsurf 2.0 while current installation documentation calls the application Devin Desktop and describes Windsurf as pre-rebrand or transitional naming; identity migration is parked for deliberate review."
ATTEMPT feature=workspace-search harness=replit-agent date=2026-08-29 outcome=not-found note="Searched current Replit Agent, General Agent, Project Editor, Plan versus Build Mode, and build documentation; project inspection and web search did not establish filename, workspace-text, or symbol search."
ATTEMPT feature=multi-file-edit harness=replit-agent date=2026-08-29 outcome=not-found note="Searched current Replit Agent, General Agent, Task board, task lifecycle, checkpoints, and build documentation; explicit multi-file editing was located only for deprecated Replit Assistant."
CONTRADICTION feature=browser-automation harness=replit-agent date=2026-08-29 src1=https://docs.replit.com/features/agent/app-testing src2=https://docs.replit.com/features/agent/overview note="App Testing names Economy, Power, and Lite modes while the current Agent overview names Free, Power, and Max; the exact mode qualifier was removed rather than choosing one page."
CONTRADICTION feature=computer-use harness=replit-agent date=2026-08-29 src1=https://docs.replit.com/features/agent/app-testing src2=https://docs.replit.com/features/agent/overview note="The browser-only partial result remains supported, but App Testing and the current Agent overview conflict on exact mode names."

## Cycle 1 — 2026-08-29

- Phase: A
- Briefs: 8; Agent Plugins, Amp, JetBrains AI Assistant, Goose, Windsurf/Devin Desktop, Aider, Devin, Warp, and Replit evidence sweeps
- Cells written: 136
- Feature files changed: agent-plugin-core, agent-plugin-mcp, agent-plugin-skills, agents-md, browser-automation, code-execution, computer-use, connectors, conversation-export, custom-instructions, diffs-and-patches, git-pull-requests, human-approval, image-input, mcp-apps, mcp-prompts, mcp-resources, mcp-tools, model-selection, multi-file-edit, pdf-documents, skills, terminal, web-fetch, workspace-files, workspace-search
- Commit: pending reconciliation
- Pushed: no; green ship checks pending
- Deployed: no; Cycle 1 pending
- Coverage: 757/3,534 (21.4%); delta +136
- Preview: 0/3,192 (0.0%); delta +0
- News counter: 136/approximately 150; entry none
- Incidents: duplicate note IDs were caught and fixed before validation; product-identity and mode-name conflicts were parked above

## Cycle 2 — 2026-08-29

- Phase: A
- Briefs: 3; Agent Skills cross-client probe, Goose v1.48.0 atomic MCP sweep, and MCP Apps exact-surface probe
- Cells written: 70
- Feature files changed: mcp-apps, mcp-cancellation, mcp-client-role, mcp-elicitation, mcp-legacy-sse, mcp-list-changed, mcp-logging, mcp-oauth, mcp-progress, mcp-prompts-list-changed, mcp-prompts, mcp-registry, mcp-resource-subscriptions, mcp-resources, mcp-revision, mcp-roots, mcp-sampling, mcp-server-instructions, mcp-server-role, mcp-stdio, mcp-streamable-http, mcp-task-listing, mcp-tasks, mcp-tools, skill-manual-invocation, skill-progressive-loading, skill-project-scope, skill-references-assets, skill-scripts, skill-user-scope, skills
- Commit: pending reconciliation; prior Cycle 1 commit `c199f60f342af368318ddd4656fb14627da7d8fc`
- Pushed: no; Cycle 2 green ship checks pending
- Deployed: no; Cycle 2 pending; prior live Cycle 1 coverage verified at 757/3,534
- Coverage: 827/3,534 (23.4%); delta +70
- Preview: 0/3,192 (0.0%); delta +0
- News counter: 0/approximately 150; entry documentation-coverage-23-percent
- Incidents: none; exact ChatGPT CLI product identity remains unestablished and was parked rather than inheriting Codex CLI evidence

ATTEMPT feature=skill-manual-invocation harness=amp-cli date=2026-08-29 outcome=not-found note="Searched Amp Skills format, viewing, listing, and reload documentation; model-selected loading is documented, but no direct named user invocation or explicit activation control was located."
ATTEMPT feature=skill-scripts harness=opencode date=2026-08-29 outcome=not-found note="Searched the complete OpenCode Skills page, including project paths, frontmatter, and tool description; no bundled-script discovery or execution behavior was documented."
ATTEMPT feature=skill-references-assets harness=opencode date=2026-08-29 outcome=not-found note="Searched the complete OpenCode Skills page; it documents loading SKILL.md content but not supporting references, templates, or assets."
ATTEMPT feature=skill-project-scope harness=claude-web date=2026-08-29 outcome=not-found note="Searched Claude Skills availability, cross-surface, and sharing-scope documentation; individual and organization scopes are established, but current Claude Project discovery or restriction is not."
ATTEMPT feature=skill-project-scope harness=chatgpt-web date=2026-08-29 outcome=not-found note="Searched OpenAI Build Skills availability, local discovery, and plugin distribution; repository discovery is documented for Codex, not the ChatGPT web surface."
ATTEMPT feature=skill-user-scope harness=chatgpt-web date=2026-08-29 outcome=not-found note="Searched OpenAI Build Skills availability, sidebar, and plugin distribution; plugin-bundled web skills are documented, but no personal or global discovery scope for ChatGPT web was established."
ATTEMPT feature=skill-project-scope harness=chatgpt-desktop date=2026-08-29 outcome=not-found note="Searched ChatGPT desktop Skills, Codex local-discovery, and plugin-distribution documentation; no exact repository or workspace-scoped desktop skill discovery was established."
ATTEMPT feature=mcp-apps harness=aider date=2026-08-29 outcome=not-found note="Searched Aider documentation, releases, maintained repository, and the MCP extension matrix for standard MCP Apps rendering; no exact Aider host evidence was located."
ATTEMPT feature=mcp-apps harness=chatgpt-cli date=2026-08-29 outcome=not-found note="Searched official OpenAI ChatGPT, Codex, plugin, Apps SDK, and developer-mode documentation plus the MCP extension matrix; evidence did not establish an exact ChatGPT CLI surface or renderer."
ATTEMPT feature=mcp-apps harness=chatgpt-desktop date=2026-08-29 outcome=not-found note="Searched official ChatGPT desktop, plugin, Apps SDK, developer-mode, and app-availability documentation; full MCP Apps documentation is scoped to web and does not establish desktop inline rendering."
ATTEMPT feature=mcp-apps harness=chrome-webmcp-preview date=2026-08-29 outcome=not-found note="Searched Chrome WebMCP origin-trial documentation, Chromium sources, Chrome agent guidance, and the MCP extension matrix; WebMCP is distinct and no exact MCP Apps renderer was located."
ATTEMPT feature=mcp-apps harness=claude-cli date=2026-08-29 outcome=not-found note="Searched Claude Code documentation, releases, maintained repository, and the MCP extension matrix; positive entries name Claude web and Desktop, not Claude CLI."
ATTEMPT feature=mcp-apps harness=cline date=2026-08-29 outcome=not-found note="Searched Cline documentation and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, ui resources, and interactive MCP views; ordinary MCP support did not establish Apps rendering."
ATTEMPT feature=mcp-apps harness=codex-cli date=2026-08-29 outcome=not-found note="Searched official Codex CLI documentation and maintained source for MCP Apps host support; app references did not establish an exact Codex CLI inline renderer."
ATTEMPT feature=mcp-apps harness=continue date=2026-08-29 outcome=not-found note="Searched Continue documentation and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, ui resources, and iframe rendering; no exact host evidence was located."
ATTEMPT feature=mcp-apps harness=copilot-cli date=2026-08-29 outcome=not-found note="Searched GitHub Copilot CLI documentation, changelog material, and the MCP extension matrix; the positive VS Code Copilot entry does not establish the CLI surface."
ATTEMPT feature=mcp-apps harness=copilot-web date=2026-08-29 outcome=not-found note="Searched Microsoft Copilot web documentation and the MCP extension matrix; Microsoft 365 Copilot is not the catalog's consumer Copilot web surface."
ATTEMPT feature=mcp-apps harness=devin-web date=2026-08-29 outcome=not-found note="Searched current hosted Devin documentation, MCP configuration, marketplace pages, release notes, and site indexes; ordinary MCP tools did not establish the standard Apps extension."
ATTEMPT feature=mcp-apps harness=gemini-cli date=2026-08-29 outcome=not-found note="Searched Gemini CLI documentation and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, and ui rendering; ordinary MCP tool support did not establish an Apps host."
ATTEMPT feature=mcp-apps harness=gemini-web date=2026-08-29 outcome=not-found note="Searched official Gemini app help, product announcements, and MCP material; no exact consumer-web MCP Apps renderer was documented."
ATTEMPT feature=mcp-apps harness=grok-bot-desktop date=2026-08-29 outcome=not-found note="Searched Grok Bot documentation and xAI launch material for MCP Apps, ui resources, and interactive MCP rendering; no exact evidence was located."
ATTEMPT feature=mcp-apps harness=grok-web date=2026-08-29 outcome=not-found note="Searched official Grok web, xAI product, and MCP documentation; API-level remote MCP support was not mapped to the consumer Grok web surface."
ATTEMPT feature=mcp-apps harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Searched JetBrains AI Assistant help, release material, blog, and first-party GitHub for MCP Apps; no exact AI Assistant inline renderer was documented."
ATTEMPT feature=mcp-apps harness=le-chat date=2026-08-29 outcome=not-found note="Searched Mistral and Le Chat help, product documentation, and first-party news for MCP Apps and interactive MCP tool UI; no exact host evidence was located."
ATTEMPT feature=mcp-apps harness=opencode date=2026-08-29 outcome=not-found note="Searched OpenCode documentation, releases, changelog, and maintained GitHub for MCP Apps, io.modelcontextprotocol/ui, and iframe rendering; ordinary MCP tools did not establish Apps rendering."
ATTEMPT feature=mcp-apps harness=perplexity-web date=2026-08-29 outcome=not-found note="Searched Perplexity Help Center, developer documentation, and changelog for MCP Apps and inline MCP tool views; no exact web host evidence was located."
ATTEMPT feature=mcp-apps harness=replit-agent date=2026-08-29 outcome=not-found note="Searched Replit Agent MCP, connector, integration, Canvas, changelog, and blog documentation; Replit artifacts and ordinary MCP calls did not establish the standard Apps extension."
ATTEMPT feature=mcp-apps harness=warp date=2026-08-29 outcome=not-found note="Searched Warp documentation, changelog, and maintained repository for MCP Apps, ui resources, and interactive MCP views; no exact Warp renderer was documented."
ATTEMPT feature=mcp-apps harness=zed-agent date=2026-08-29 outcome=not-found note="Searched Zed Agent documentation, releases, and maintained repository for MCP Apps, ui resources, and iframe rendering; no exact Zed host evidence was located."
ATTEMPT feature=workspace-files harness=chatgpt-cli date=2026-08-29 outcome=not-found note="Searched OpenAI's current ChatGPT documentation index and CLI documentation; the terminal product is identified as Codex CLI, not a distinct exact ChatGPT CLI surface matching this catalog column."
ATTEMPT feature=mcp-apps harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the v1.18.25 MCP client capabilities, tool and resource rendering paths, MCP documentation, and extension matrix; no exact iframe, AppBridge, or io.modelcontextprotocol/ui host behavior was established."
ATTEMPT feature=multi-file-edit harness=opencode date=2026-08-29 outcome=not-found note="Reviewed v1.18.25 Intro, Tools, Agents, and GitHub documentation; edit, write, and patch primitives did not explicitly establish modifying multiple files during one local task."
ATTEMPT feature=browser-automation harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the exhaustive built-in tools, webfetch and websearch descriptions, local web interface, MCP extension paths, and release source; web retrieval does not establish browser navigation, clicks, or form control."
ATTEMPT feature=computer-use harness=opencode date=2026-08-29 outcome=not-found note="Reviewed v1.18.25 built-in tools, permissions, plugins, and CLI documentation; no first-party evidence established general operating-system visual control."
ATTEMPT feature=background-agents harness=opencode date=2026-08-29 outcome=not-found note="The CLI environment reference names experimental background subagent tasks, but the reviewed documentation does not establish a run continuing after the operator leaves the OpenCode session."
ATTEMPT feature=context-window harness=opencode date=2026-08-29 outcome=not-found note="Reviewed Models, Providers, CLI model metadata, configuration schema, and release source; no exact numeric OpenCode product-level context window was documented."
ATTEMPT feature=pdf-documents harness=opencode date=2026-08-29 outcome=not-found note="The CLI supports generic file attachments, but reviewed documentation did not establish PDF extraction, page-image understanding, OCR, page limits, or useful PDF exposure to the model."
ATTEMPT feature=audit-logs harness=opencode date=2026-08-29 outcome=not-found note="Reviewed enterprise, server, sharing, session, stats, GitHub, and observability documentation; no administrative security-event audit-log surface was established."
ATTEMPT feature=mcp-prompts-list-changed harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the complete v1.18.25 MCP watch and prompt-catalog implementation; tools/list_changed is handled, but no prompt-list notification handler was established."
ATTEMPT feature=mcp-registry harness=opencode date=2026-08-29 outcome=not-found note="Reviewed MCP configuration, add and list commands, organization defaults, examples, and implementation; no official MCP Registry discovery or registry-metadata consumption was documented."
ATTEMPT feature=mcp-resource-subscriptions harness=opencode date=2026-08-29 outcome=not-found note="Reviewed the complete v1.18.25 resource implementation; it lists and reads resources, but no resources/subscribe or resource-update handling was established."
ATTEMPT feature=mcp-server-role harness=opencode date=2026-08-29 outcome=not-found note="Reviewed all v1.18.25 CLI commands and MCP and server documentation; opencode serve exposes an OpenCode HTTP API, while no MCP server role was established."
ATTEMPT feature=mcp-prompts harness=warp date=2026-08-29 outcome=not-found note="Reviewed current local MCP documentation and 2026 changelog; tools, resources, transports, OAuth, and server configuration are documented, but MCP prompts/list or prompts/get are not."
ATTEMPT feature=context-window harness=warp date=2026-08-29 outcome=not-found note="Reviewed local-agent context management, model choice, and credit documentation; Warp says the window depends on the model but publishes no exact product/model/mode numeric limit."
ATTEMPT feature=pdf-documents harness=warp date=2026-08-29 outcome=not-found note="Reviewed local image attachment, interaction, and changelog documentation; general context references and cloud attachments do not establish local PDF input or understanding."
ATTEMPT feature=output-token-limit harness=warp date=2026-08-29 outcome=not-found note="Reviewed model choice, local interaction, and billing documentation; no product-level maximum response or artifact-generation budget was located."
ATTEMPT feature=structured-output harness=warp date=2026-08-29 outcome=not-found note="Reviewed the CLI, API and SDK quickstart, and 2026 changelog; JSON-returning resource commands do not establish schema-constrained local Agent responses."
ATTEMPT feature=subagent-mcp-access harness=warp date=2026-08-29 outcome=not-found note="Reviewed orchestration, MCP, and changelog documentation; no exact local child-agent MCP inheritance or child-specific MCP configuration was established."
ATTEMPT feature=subagent-write-access harness=warp date=2026-08-29 outcome=not-found note="Reviewed orchestration, Agent Profiles, and changelog documentation; examples imply file-sharded work but do not explicitly establish local child write grants."
ATTEMPT feature=mcp-logging harness=warp date=2026-08-29 outcome=not-found note="Warp stores local MCP process logs, but current sources do not identify support for the protocol's structured logging/message notification capability."
ATTEMPT feature=mcp-revision harness=warp date=2026-08-29 outcome=not-found note="Current Warp MCP sources establish transports and primitives but do not name the negotiated MCP specification revision."
ATTEMPT feature=mcp-resources harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted MCP Marketplace, custom-server configuration, releases, and terminology; tools are documented but resources/list, resources/read, templates, and subscriptions are not."
ATTEMPT feature=mcp-prompts harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted MCP Marketplace, releases, documentation index, and protocol terms; Devin documents MCP tool discovery and invocation but not prompts/list or prompts/get."
ATTEMPT feature=conversation-export harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted session tools, releases, sharing, and the Cloud API; JSON session-message APIs were not transferred to a web export cell without a documented web download."
ATTEMPT feature=context-window harness=devin-web date=2026-08-29 outcome=not-found note="Searched session, Usage, Knowledge, insights, model-picker, and hosted index documentation; no exact current Devin web model or mode context window was published."
ATTEMPT feature=image-input harness=devin-web date=2026-08-29 outcome=not-found note="Searched attachment docs, releases, first-session guidance, Computer Use, and the hosted index; image UI and Devin-captured screenshots did not establish operator-supplied image input."
ATTEMPT feature=nested-agents-md harness=devin-web date=2026-08-29 outcome=not-found note="Searched Devin AGENTS.md and Review instruction documentation; project placement and directory-scoped REVIEW.md do not establish general nested AGENTS.md precedence."
ATTEMPT feature=subagent-approval-boundaries harness=devin-web date=2026-08-29 outcome=not-found note="Searched Managed Devins, Dynamic Workflows, Security Profiles, releases, and session schemas; children inherit policy, but no child-specific grants plus approval-request policy was documented."
ATTEMPT feature=subagent-model-selection harness=devin-web date=2026-08-29 outcome=not-found note="Searched Managed Devins, Dynamic Workflows, model picker, schedules, and session fields; child prompts, tags, limits, and placement are documented but per-child model choice is not."
ATTEMPT feature=automatic-context-compaction harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted session tools, Usage, insights, model picker, Knowledge, and the index; no maintained statement says long sessions automatically summarize or prune context."
ATTEMPT feature=context-compaction-controls harness=devin-web date=2026-08-29 outcome=not-found note="Searched hosted session tools, Usage, insights, model picker, and the index; no user-facing compaction command or setting was documented."
ATTEMPT feature=context-usage-visibility harness=devin-web date=2026-08-29 outcome=not-found note="Searched Session Insights, Usage, session tools, and releases; ACU use and Context Growth are not the current model's context-budget use or remaining token capacity."
ATTEMPT feature=output-token-limit harness=devin-web date=2026-08-29 outcome=not-found note="Searched first-session, model-picker, structured-output, attachment, Usage, and billing documentation; no hosted-model response-token or generated-artifact output budget was published."
ATTEMPT feature=pdf-documents harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed current AI Chat attachment and chat-mode documentation; files, folders, images, database objects, and IDE references are documented, but no exact PDF understanding workflow was established."
ATTEMPT feature=mcp-resources harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; tools and transports are documented, but MCP resources/list and resources/read are not."
ATTEMPT feature=mcp-prompts harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; no prompts/list or prompts/get behavior was documented."
ATTEMPT feature=mcp-oauth harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; server URLs and transport configuration are documented, but no MCP OAuth flow was established."
ATTEMPT feature=mcp-revision harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the complete JetBrains AI Assistant 2026.2 MCP page; it links MCP generally but does not name a negotiated specification revision."
ATTEMPT feature=mcp-logging harness=jetbrains-ai date=2026-08-29 outcome=not-found note="Reviewed the current MCP page; local server process logs are available, but the protocol's structured logging notification capability is not established."
CONTRADICTION feature=data-retention-controls harness=jetbrains-ai date=2026-08-29 src1=https://youtrack.jetbrains.com/projects/JUNIE/articles/SUPPORT-A-659/AI-Assistant-data-privacy-storage-and-transmission-what-information-is-sent-to-the-cloud-and-how-it-is-stored src2=https://www.jetbrains.com/legal/docs/terms/product_data_collection/ note="The current support article says opted-in detailed data is stored for no more than 30 days, while the June 2026 Product Data Collection and Usage Notice states one-year retention for detailed code-related data."

## Cycle 3 — 2026-08-29

- Phase: A
- Briefs: 4; JetBrains AI Assistant 2026.2, OpenCode v1.18.25, Warp local desktop Agent, and hosted Devin web
- Cells written: 119; 118 current-track and 1 preview-track
- Feature files changed: 72; instructions, inputs, context, runtime, subagents, MCP, governance, security, collaboration, reliability, and pricing rows
- Commit: pending reconciliation; prior Cycle 2 commit `d073d8843138613d53a27c53829a8c3b475edad9`
- Pushed: no; Cycle 3 green ship checks pending; Cycle 2 is live on `origin/main`
- Deployed: no; Cycle 3 pending; prior Cloudflare version `7d0953e3-e511-4f3d-9734-b458eb18d49c`
- Coverage: 945/3,534 (26.7%); delta +118
- Preview: 1/3,192 (0.0%); delta +1
- News counter: 118/approximately 150; entry none
- Incidents: JetBrains retention sources conflict on 30 days versus one year and were parked; no retention cell was authored for that pair

RECONCILE cycle=3 date=2026-08-29 commit=27f81a780d98161892f5b6b0c0eb36b851c54865 pushed=yes deployed=yes cloudflare_version=05353f29-f970-40cc-bbe8-49639cceefc1 live_coverage=945/3534 note="Cycle 3 passed CI and its cache-busted production coverage endpoint matched the committed 945-cell report."

ATTEMPT feature=git-pull-requests harness=cline date=2026-08-29 outcome=not-found note="Searched the pinned v4.1.16 README, changelog, docs, default-tool enumeration, and extension source; no dedicated Cline VS Code pull-request open or review workflow was established."
ATTEMPT feature=mcp-registry harness=cline date=2026-08-29 outcome=not-found note="Reviewed the pinned v4.1.16 MCP overview, McpHub, Marketplace implementation, and official-registry terminology; Cline's own Marketplace and community repositories do not establish official MCP Registry consumption."
ATTEMPT feature=mcp-server-role harness=cline date=2026-08-29 outcome=not-found note="Reviewed the pinned v4.1.16 MCP overview and extension source for server construction, listening transports, and exposed primitives; evidence establishes only Cline's host/client role."
ATTEMPT feature=agents-md harness=replit-agent date=2026-08-29 outcome=not-found note="Current Replit docs establish vendor-native replit.md and /.agents/skills behavior but do not document automatic AGENTS.md discovery; the similarly named .agents directory was not treated as proof."
ATTEMPT feature=conversation-export harness=replit-agent date=2026-08-29 outcome=not-found note="Reviewed Routines, Memories, and the privacy policy; run history and legal portability do not establish a built-in Agent conversation export or format contract."
ATTEMPT feature=context-window harness=replit-agent date=2026-08-29 outcome=not-found note="Replit explains context windows and says sizes vary but publishes no numeric hosted Agent limit by exact model, mode, or plan."
ATTEMPT feature=multi-file-edit harness=replit-agent date=2026-08-29 outcome=not-found note="A dated source assigns multi-file editing to deprecated Replit Assistant; current Agent docs establish file editing but not multiple files in one task, so the legacy guarantee was not carried forward."
ATTEMPT feature=upload-limits harness=replit-agent date=2026-08-29 outcome=not-found note="Current hosted upload pages state methods and input classes but no numeric byte, count, page, storage, or rolling quota."
ATTEMPT feature=skill-scripts harness=replit-agent date=2026-08-29 outcome=not-found note="Agent Skills docs establish SKILL.md and supporting-file resolution but not bundled-script execution or its approval/runtime policy."
ATTEMPT feature=automatic-context-compaction,context-compaction-controls,context-usage-visibility harness=replit-agent date=2026-08-29 outcome=not-found note="Current context guidance recommends a fresh thread when context becomes noisy but documents no automatic summary, compact control, or usage meter."
ATTEMPT feature=mcp-resources,mcp-prompts,mcp-apps,mcp-cancellation,mcp-elicitation,mcp-legacy-sse,mcp-list-changed,mcp-logging,mcp-progress,mcp-prompts-list-changed,mcp-registry,mcp-resource-subscriptions,mcp-revision,mcp-roots,mcp-sampling,mcp-server-instructions,mcp-stdio,mcp-streamable-http,mcp-task-listing,mcp-tasks harness=replit-agent date=2026-08-29 outcome=not-found note="Exact hosted Agent documentation establishes remote server connection, OAuth or custom-header auth, tool retrieval, selection, and confirmation only; it does not name the remaining atomic MCP primitives or a revision."
ATTEMPT feature=mcp-server-role,mcp-streamable-http harness=replit-agent date=2026-08-29 outcome=not-found note="The separate beta Replit MCP Server is an outward-facing integration product and was not projected onto the hosted Replit Agent client surface."
ATTEMPT feature=model-selection harness=continue date=2026-08-29 outcome=source-conflict note="Continue v2.0.0 quick-start says Agent is disabled when a model lacks native tool support, while model setup says any model can use system-message tools; the authored selector cell does not rely on resolving that eligibility conflict."
ATTEMPT feature=source-lifecycle harness=continue date=2026-08-29 outcome=parked note="Continue v2.0.0 is the current stable release, while mutable main contains later work; all new Cycle-4 cells use the exact v2.0.0 tag and older mutable-main cells remain queued for a freshness audit."
ATTEMPT feature=mcp-apps harness=perplexity-web date=2026-08-29 outcome=not-found note="Searched current Perplexity Help Center, developer documentation, and changelog for standard MCP Apps rendering; no exact hosted-web AppBridge or ui:// host was established."
ATTEMPT feature=local-only-mode harness=amp-cli date=2026-08-29 outcome=resolved-no note="Amp's first-party Security Reference explicitly describes the required service architecture and absence of self-hosting, supporting a bounded current no rather than an absence inference."

CONTRADICTION feature=conversation-export harness=cline date=2026-08-29 src1=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/core/controller/task/exportTaskWithId.ts#L5-L20 src2=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/proto/cline/task.proto#L27-L38 note="The same-tag wrapper comment says Markdown export while the protobuf contract and changelog describe opening the complete task directory; the cell records directory/JSON behavior at medium confidence."
CONTRADICTION feature=browser-automation harness=cline date=2026-08-29 src1=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/apps/vscode/src/services/browser/BrowserSession.ts#L155-L225 src2=https://github.com/cline/cline/blob/ebee8ca912a3fd6a4aa97ae615b88f60f8d8ef20/docs/tools-reference/all-cline-tools.mdx#L9-L32 note="The stable package retains legacy browser_action while the exhaustive ClineCore table omits it; support remains partial and runtime-qualified."
CONTRADICTION feature=custom-instructions harness=le-chat date=2026-08-29 src1=https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe src2=https://content.mistral.ai/le-chat/ note="Mistral says Le Chat became Vibe while retaining URL, account, and conversations; the catalog identity is parked until a deliberate migration defines the exact durable web surface."
CONTRADICTION feature=model-selection harness=replit-agent date=2026-08-29 src1=https://docs.replit.com/features/agent/agent-modes src2=https://docs.replit.com/features/agent/model-selector note="Live canonical docs use Free, Power, and Max modes, while a legacy redirect/search cache uses obsolete mode names; new cells use only the live canonical pages and the older computer-use qualifier remains queued for audit."

ATTEMPT feature=git-pull-requests harness=zed-agent date=2026-08-29 outcome=not-found note="Pinned Agent Panel, native Agent, Tools, MCP, and Git documentation did not establish a dedicated native Zed Agent pull-request open or review workflow."
ATTEMPT feature=browser-automation harness=zed-agent date=2026-08-29 outcome=not-found note="A separately installed Puppeteer MCP extension is listed, but stable native Agent docs and source do not enumerate the navigation, click, form, and page-reading contract required by this row."
ATTEMPT feature=computer-use harness=zed-agent date=2026-08-29 outcome=not-found note="The exhaustive native tool documentation covers files, terminal, fetch, web search, skills, diagnostics, and subagents but no screenshot-driven general visual-interface control."
ATTEMPT feature=scheduled-runs harness=zed-agent date=2026-08-29 outcome=not-found note="Agent Panel, Parallel Agents, settings, Tasks, release notes, and tool docs establish concurrent and backgrounded desktop work but no schedule-triggered native Agent run."
ATTEMPT feature=pdf-documents harness=zed-agent date=2026-08-29 outcome=not-found note="The Agent Panel explicitly documents image input, not native PDF attachment; PDF Skills and document MCP extensions are separate tool paths."
ATTEMPT feature=audit-logs harness=zed-agent date=2026-08-29 outcome=not-found note="Pinned AI privacy, Business privacy, admin-control, telemetry, and Agent Panel docs did not establish a security-relevant administrative audit log for native Agent activity."
ATTEMPT feature=mcp-registry harness=zed-agent date=2026-08-29 outcome=not-found note="Zed plans to replace MCP server extensions with the official registry, but stable v1.17.2 docs and source do not establish current registry discovery or metadata lookup."
ATTEMPT feature=mcp-server-role harness=zed-agent date=2026-08-29 outcome=not-found note="The generic context_server crate contains a Unix-socket McpServer helper, but pinned source has no production call site mapping it to the native Agent Panel as a user-facing server."
CONTRADICTION feature=mcp-cancellation harness=zed-agent date=2026-08-29 src1=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/client.rs#L374-L486 src2=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs#L374-L393 note="The reusable MCP client can emit notifications/cancelled when request_with receives cancel_rx, but the exact native Agent tool path uses request with cancel_rx=None and races UI cancellation outside the protocol client; the current cell is no for the product path."
CONTRADICTION feature=mcp-family harness=zed-agent date=2026-08-29 src1=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/context_server/src/types.rs src2=https://github.com/zed-industries/zed/blob/c8e44cfa7bda9b2e22c8d6934d78969352e7f61a/crates/agent/src/tools/context_server_registry.rs note="Generic protocol structs cover more primitives than the active native registry, which stores tools and prompts and subscribes only to tools/list_changed; atomic cells follow the active path."

## Cycle 4 — 2026-08-29

- Phase: A
- Briefs: 9; Microsoft Copilot web, Grok web, Gemini web, Perplexity web, Continue v2.0.0, Amp CLI, Cline v4.1.16, hosted Replit Agent, and Zed v1.17.2
- Cells written: 208; 200 current-track and 8 preview-track
- Feature files changed: 74; instructions, skills, inputs, tools, context, runtime, subagents, MCP, collaboration, governance, security, reliability, and pricing rows
- Commit: pending; prior live Cycle 3 commit `27f81a780d98161892f5b6b0c0eb36b851c54865`
- Pushed: no; Cycle 4 green ship checks pending; Cycle 3 is live on `origin/main`
- Deployed: no; Cycle 4 pending; prior Cloudflare version `05353f29-f970-40cc-bbe8-49639cceefc1`
- Coverage: 1,145/3,534 (32.4%); delta +200
- Preview: 9/3,192 (0.3%); delta +8
- News counter: 0/approximately 150; entry `documentation-coverage-32-percent`
- Incidents: Cline export and browser-runtime contradictions are preserved; Zed generic MCP structs were not mistaken for active product paths; Le Chat-to-Vibe identity migration is parked; Replit legacy mode-name cache was not used
