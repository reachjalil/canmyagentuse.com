# Email services — published and verified

Reviewed and released: 2026-09-05 (America/Los_Angeles).
Content commit: `8f4bc465c614d883011e87f841c2f7c1444195e1`.
Branch: `codex/email-services-20260905`.
Worktree: `/Users/jalillaaraichi/canmyagentuse-email-release`.
Worker version: `a1c58a86-d2db-4a4c-9175-1c2ee9c84144` at 100%.
Deployment created: `2026-09-05T18:37:53.716Z`.
CI: [33984639560](https://github.com/reachjalil/canmyagentuse.com/actions/runs/33984639560), successful for the content commit above.

## Scope and outcomes

The user requested Resend and similar services, a tweet responding to the supplied
dashboard/MCP discussion, and a redeploy. Three GPT-5.6 Luna researchers authored
Resend, AgentMail and Postmark. The supervisor reviewed their claims, inspected
primary sources, resolved disagreements, and ran the releases. Luna also performed
an independent AgentMail cross-audit. Tweet drafts are saved in
`ops/tweet-drafts-email-2026-09-05.md`; no social post or reply was submitted.

Published:

- [Resend](https://canmyagentuse.com/products/resend): 22 dated sources.
- [AgentMail](https://canmyagentuse.com/products/agentmail): 26 dated sources.
- [Postmark](https://canmyagentuse.com/products/postmark): 23 dated sources.
- [Email & messaging category](https://canmyagentuse.com/products?category=email-delivery),
  with useful comparison links among the three guides.

Production now has **22 product guides / 247 dated product-source entries**.
This batch adds three guides and 71 unique source URLs to the verified 19-guide,
176-source baseline. Every body source link is present in the structured source
record, with exact publisher, title and review date. The earlier Airtable, Asana,
Calendar and weekly-review release was published first; see
`luna-expansion-1-2026-09-05.md` for its separate deployment proof.

## Evidence decisions and corrections

- Resend has official hosted MCP with OAuth, REST and CLI access. Send-only
  credentials cannot list domains or retrieve delivery records; reads require
  separately authorized broader access or a human dashboard check. Free accounts
  have production access without an approval process, while sender DNS and test
  recipient rules remain separate prerequisites. The guide distinguishes request
  acceptance from receiving-server delivery and inbox placement.
- Resend's pinned CLI README documents dry-run support for email sends and
  broadcast creation. The website and pinned README differ on stored-credential
  implementation; the guide records that difference and recommends verifying the
  installed storage backend before saving a key. Local templates and attachments
  are CLI inputs and do not earn a separate local-files support label.
- AgentMail's first-time agent signup is conditional on a human OTP and is
  distinct from inbox provisioning. API-key whitelist permissions intersect with
  organization/pod/inbox scope. Its MCP catalog has inbox/thread/message/draft/
  attachment tools, while webhook management uses API/CLI. REST has direct
  message retrieval; MCP has list/search/thread retrieval. Review drafts omit
  REST `send_at` or MCP `sendAt`; explicit send actions remain separate.
- The initial Postmark research missed official MCP. Independent supervisor
  search found the provider's MCP page and ActiveCampaign repository, so the
  unpublished draft was corrected to official MCP with Postmark Labs provenance.
  The current package is local stdio on Node.js 20+, with 24 tools and server-token
  authority. Read-only annotations do not narrow credentials. The guide explains
  automatic open/click tracking, exact scoped-package identity, sender/account
  approval, server and stream credentials, Sandbox Servers and `POSTMARK_API_TEST`.
- MCP Apps remain unverified for all three. Postmark's separate CLI is unverified;
  starting a stdio MCP server with `npx` does not establish a product CLI.

Pinned provider repositories:

- Resend MCP: `59d2380516e44f27ec07a9d2b6c148d2b98c62b6`.
- Resend CLI: `d32d2f906334eee71b8cf3079976f5a6137d2bb9`.
- AgentMail MCP: `8bed271a024abfe75baaf34fd0509a8389ba0443`.
- AgentMail CLI: `cbd1d7f160a55f70371500997dc148b788138503`.
- Postmark MCP: `63ef055861820b12b748697339488d564d754a5c`.

## Validation and production proof

- Narrow catalog TypeScript and content/representation validation passed.
- Biome and `git diff --check` passed. JSON has no duplicate keys, source IDs or
  URLs, and all four actions and five interfaces are present.
- Uncached `pnpm check --force`, `pnpm test --force`, and `pnpm build --force`
  passed after the final change: 136 tests (78 catalog, 58 web), zero Astro errors,
  warnings or hints. GitHub CI independently passed on the exact content commit.
- All 71 source URLs returned HTTP 200. Four Postmark URLs initially returned
  HTTP 429 during concurrent link checking; a later slower sequential retry
  succeeded. No access controls were bypassed. Link reachability complements
  source reading and is not proof of a material claim by itself.
- Local compiled Worker preview and cache-busted production checks passed for
  all 22 product HTML pages, Markdown twins, index/detail JSON, action/interface/
  source/body parity, search, category discovery, social PNGs, JSON-LD, llms
  indexes, sitemap, OpenAPI, both reviews and edition histories, sponsor and
  historical routes. All 19 baseline product JSON records remained identical.
- Public MCP `search_catalog` and `get_record` found each email service. Full
  records' sources, actions, interfaces and body matched the product JSON API.
- `/plugin`, `/plugin.md`, the App usage index and both plugin/app-choice articles
  returned HTTP 200. The plugin ZIP remained available and passed ZIP integrity
  validation. The earlier plugin release is preserved.
- Browser interaction showed three email products with official MCP, two when
  CLI was also required, and zero when unverified MCP Apps were also required.
  Desktop and 390px mobile guide/category checks had no horizontal overflow.
- Browser review found white fallback initials on light product tiles. One CSS
  color declaration now gives the existing monograms dark text; no provider
  mark, mapping, logo or other provider asset was added. Verified on the three
  guides and category, including the live Resend page. Viewport override reset.
- The three generated social cards were inspected and remain readable. Product
  sponsorship and non-affiliation disclosures are preserved.
- Fetched again before publishing; pushed a validated fast-forward to main and
  deployed using the existing Cloudflare Worker configuration. Wrangler read
  back the exact version above at 100% after production verification.

Research was documentation-only. No provider account, credential, integration
installation, DNS record, email send, webhook registration or billing change was
performed. Catalog MCP checks queried this site's published research only.

## Next useful work

The requested email batch and tweet drafts are complete. Mailgun and SendGrid are
additional email research leads, not support claims. Google Drive, Dropbox and Box
remain useful coverage gaps. Reconcile ownership of the existing Evernote/Joplin
drafts before editing them. No duplicate automation was created; retain the
existing publishing workflow and quiet unchanged cycles.
