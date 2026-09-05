# SaaS expansion batch 1 — production verification

Date: 2026-09-04 (America/Los_Angeles).
Content commit: `f4af4687742c25af13ab7c31d483e2350639c659`.
Production: <https://canmyagentuse.com/>.
Cloudflare Worker version: `1f934530-d30a-4cae-bf56-8472871ab30b`.
CI: [33945826623, successful](https://github.com/reachjalil/canmyagentuse.com/actions/runs/33945826623).

## Published scope

- Added [Vercel](https://canmyagentuse.com/products/vercel), [Supabase](https://canmyagentuse.com/products/supabase), and [Sentry](https://canmyagentuse.com/products/sentry).
- Expanded [Salesforce](https://canmyagentuse.com/products/salesforce), including eligible Dev Hub setup, expiring scratch orgs, External Client App registration, read-only SObject tools, permissions, quotas, and revocation.
- Product corpus: **16 guides, 116 dated source entries**; +3 guides and +47 source entries. This batch's records hold 15 Salesforce, 12 Vercel, 10 Supabase, and 17 Sentry source entries.
- Added three exact-product local logos from pinned Simple Icons 16.28.0. The generator now validates 59 marks across the whole site. Public brand references and the review ledger include provenance and provider-policy limits; Vercel's attribution is included in both HTML and Markdown.
- Compact commercial cards and the Submit your app route remain the main discovery experience. Full setup and source details remain available inside guides. OpenWork remains the separately labeled confirmed founding sponsor.

## Research review

Independent source cross-review corrected three misleading boundaries before release:
Vercel's preview/claim route does not establish autonomous signup; Developer
Edition registration is not required if an eligible Salesforce Dev Hub already
exists; Sentry's read-named scopes can still update specific project settings.
Sentry Seer Agent's open beta and Open Team Membership requirement were added.

Evidence is **documentation review only**. No provider accounts, researched
software installations, messages, purchases, database changes, Salesforce org
creation, or live issue mutations were performed. No new app-submission record
was created during this batch.

## Local validation

- `pnpm --filter @canmyagentuse/catalog check` and catalog tests passed.
- Catalog/representation validation passed for 16 guides and all historical collections.
- Biome and `git diff --check` passed.
- Uncached `pnpm check --force`: 175 Astro files, zero errors/warnings/hints.
- Uncached `pnpm test --force`: 124 tests, 73 catalog plus 51 web.
- Final uncached production build passed after the final Sentry content corrections.
- Preview ran the compiled Worker and assets via Wrangler on port 8787.
- HTML/Markdown/JSON parity checked every product's four actions, five interfaces, full body, source URLs, sponsor disclosure, and social PNG.
- New category values, new app search results, corrected signup/purchase statuses and brand attribution were explicitly checked.
- OpenAPI, llms indexes, sitemap, press/sponsor routes, canonical prompt, public skill, movie article, submit-app and preserved research routes passed.

## Browser and image verification

CUA verified the desktop Vercel card, search and reset; database and monitoring
category selection returned Supabase and Sentry. At a 390px viewport, Supabase's
card and Sentry's detail layout were visually inspected. Sentry's logo loaded;
the document measured 390px wide with no horizontal overflow. Clicking the
17-source link opened its evidence disclosure. Temporary viewport override was
reset. All three new generated social PNGs were visually inspected.

After deployment, the existing production homepage tab was refreshed and visibly
showed the compact directory, 16 app entries, local logos, the labeled OpenWork
placement and Submit your app. The old cached page in that tab was replaced.

## Production readback

The full release checker passed against the public custom domain with an honest
descriptive User-Agent and cache-busting query. All 16 HTML/Markdown/JSON records,
116 source entries, 16 social cards, three new logos, new product search results,
indexes and retained routes were verified. Updated claims and Vercel attribution
were present in production. The checker also confirmed the existing submission
entry; it did not create a new submission.

Wrangler separately reported the new version at **100%**, created
`2026-09-05T04:59:55.933Z`, with deployment created
`2026-09-05T04:59:57.027Z`. Asset upload completed successfully in 276 seconds.
CI for the exact content commit completed successfully.

The prior default-Python User-Agent Cloudflare 1010 follow-up remains. No zone
security changes were made. Generated files, test logs and preview runtime state
are local/ignored artifacts; the product content and mark sources are committed.
