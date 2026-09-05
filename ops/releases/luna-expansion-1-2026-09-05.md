# Luna expansion batch 1 — validated, publication blocked

Reviewed: 2026-09-05 (America/Los_Angeles).
Final content commit: `0bf59a22f77f230e1cd7d192432b02a4cf528a54`.
Initial content commit: `66bf73f5ba5766fd034ca8ebf67fce4f50a49224`.
Mobile example revision: `f92c10c2dd3873df7ef44194b7702409c437a0de`.
Branch: `codex/luna-catalog-expansion-20260905`.
Worktree: `/Users/jalillaaraichi/canmyagentuse-luna-release`.
Release base: `a66ee9ee04567eb0ba1de7bab9398a6547737a47` from `origin/main`.
Publication state: **not pushed to main; not deployed**.

## Prepared scope

Three GPT-5.6 Luna sub-agents researched and authored Airtable, Asana, and
Google Calendar. Luna also authored review 02, version 1, “Can my agent plan
my week?”. The supervising agent reviewed the sources, corrected editorial
claims, checked product labels, and ran the release checks. Luna writers
independently cross-reviewed Airtable and Google Calendar.

The local catalog has **19 product guides and 176 dated product-source
entries**, compared with the live baseline of 16 guides and 116 source entries.
The three new guides have 60 unique source URLs (Airtable 16, Asana 15,
Google Calendar 29). The weekly-planning review reuses seven of these sources.
These counts describe the prepared release, not production.

All new content is portable Markdown under `content/`. Existing product,
harness, feature, specification, evidence, and report files remain unchanged.
No provider assets, logo mappings, schemas, page templates, or UI code changed.
Existing reviewed provider identity/fallback rendering is retained. No provider
account, integration installation, purchase, invitation, or live task mutation
was performed. Product conclusions are documentation-based.

## Important evidence decisions

- Airtable has documented provider-maintained MCP, API and experimental CLI
  routes. PAT scopes and selected base/workspace resources are independent
  boundaries. The MCP tool reference describes an interactive kanban or levels
  widget, but its MCP Apps extension contract and supported rendering clients
  remain unverified. Editable local files also remain unverified. Paid plan
  prices specify per-collaborator monthly units and the billing interval. The CLI
  source is pinned at `6847f24e318e366a2afac4967f72b1b976ea9654`.
- Asana V2 MCP is generally available. Its current tool reference scopes each
  session to the selected workspace but authorizes available tools, including
  writes. A read-only request does not make that credential read-only.
  Interactive previews are documented for Claude and ChatGPT; the MCP Apps
  claim is restricted to those hosts. Premium-only `search_tasks` is separated
  from the non-Premium `get_tasks` fallback. Community CLI provenance is pinned
  at `9beea21458b82d9e78278619382b81707401686c`. File I/O is not labeled a live
  local-file workspace.
- Google Calendar's remote MCP requires Developer Preview enrollment and
  OAuth setup. Its starter scopes are read-only; separate tool references
  establish `calendar` or `calendar.events` for create/update/delete. API
  requests and MCP query-cost accounting are separated. Standard Calendar API
  use currently has no additional cost; later-2026 overage billing is described
  as planned, with advance notice. The `googleworkspace/cli` disclaimer is
  preserved and its source pinned at
  `a3768d0e82ad83cca2da97724e46bea4ff0e6dbd`.
- Review 02's finish line is an inspectable proposed schedule, not published
  tasks or events. Fictional examples are labeled. Missing estimates,
  permissions, and human scheduling decisions remain explicit. OpenWork is
  disclosed as the founding sponsor without any claimed performed task.

## Verification completed

- Narrow catalog TypeScript check and catalog/representation validation passed.
- Biome passed with no fixes. `git diff --check` passed.
- Uncached `pnpm check --force` passed: zero Astro errors, warnings, or hints.
- Uncached `pnpm test --force` passed: 129 tests (78 catalog, 51 web).
- Uncached production build passed. Full Astro validation caught an unquoted
  colon in the new review's YAML, which was fixed before the successful run.
- All 60 new source URLs returned HTTP 200 using an honest descriptive
  `CanMyAgentUse-SourceCheck/1.0` User-Agent. These transport checks complement
  the writers' source reading; HTTP 200 alone is not evidence for a claim.
- The compiled Worker was previewed with Wrangler on port 8791. All 19 product
  HTML pages, Markdown twins, detailed/index JSON records, body/action/interface
  and source parity, JSON-LD, social PNGs, search discovery, category values,
  llms indexes, sitemap, OpenAPI, and both reviews' verdict/history parity passed.
- The original 16 product JSON records matched the production baseline exactly.
  Sponsor, press, submission, public skill/prompt, and historical compatibility
  routes returned successfully. No submission was created.
- Browser interaction verified Asana under MCP Apps plus official-only filters;
  requiring unverified local-files correctly produced no match. The scheduling
  category returned Google Calendar. Desktop and 390px mobile guide rendering
  were inspected; mobile document width equaled 390px with no horizontal
  overflow. Temporary viewport overrides were reset.
- The weekly-planning review's example table overflowed on a 390px screen;
  reducing it to two columns resolved the issue. The rebuilt review measured
  390px document width and 358px table width at that viewport.
- All three new product social cards and the review card were inspected.
  Overlong Calendar/review sharing descriptions were shortened and rebuilt.

## Exact publication blocker

Another user task, “Build CanMyAgentUse MCP plugin”, deployed the plugin and
then the App usage section from uncommitted changes in the main checkout.
Production `/plugin` returns HTTP 200 and `/news` includes that newer work,
while the latest fetched `origin/main` remains `a66ee9e` without those changes.

Wrangler read back the newer active Worker version
`d2abcd92-f5ce-428c-b7be-dfa75dd4c3ee` at 100%, deployed
`2026-09-05T17:41:50.750Z`. That deployment belongs to the other task; it is not
proof of this batch's publication. Cloudflare authentication is available.

Deploying this isolated older base would remove the newer live plugin and
App usage changes. The publishing instructions prohibit deploying an older
checkout, committing unrelated work, or interfering with another agent's
release. Therefore this batch was not pushed to main or deployed. The main
checkout, including unrelated Evernote/Joplin drafts, was left untouched.

The user has been asked whether this task may coordinate with the other task
to have its own validated work committed and pushed. No coordination message
was sent while that decision was pending.

## Resume

1. Have the owning task commit and push its validated plugin/App usage release,
   excluding unrelated Evernote/Joplin drafts, or obtain explicit alternative
   integration instructions from the user. Do not blindly stage that checkout.
2. Fetch and inspect `origin/main`; integrate the latest release into this clean
   content worktree without overwriting either task's work. Run frozen-lockfile
   install if the release changes dependencies.
3. Revalidate the integrated tree, including plugin MCP smoke checks, all new
   content surfaces and prior live routes. Rebuild and confirm the remote has
   not advanced before a fast-forward push and Cloudflare deployment.
4. Cache-bust production readback using an honest descriptive User-Agent,
   compare product HTML/Markdown/JSON and new review/index output, verify the
   plugin and App usage routes remain, and read back the active Worker version.
5. Update this report/STATE/LOG with exact pushed commit and deployment IDs.
   Only after publication begin the next 2–4-entry batch. High-value missing
   records include Google Drive, Dropbox and Box; separately resolve ownership
   of existing notes drafts before working on them. Keep the existing
   publishing automation; no new automation was created.
