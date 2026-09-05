# Commercial directory release — 2026-09-04

- App commit: `5352deda7f315c0dbc565ff6265cf0d1eb2aaf65`
- Worker version: `8017f328-a42e-48ea-be28-fe3129b51688`, independently read back at 100% traffic
- Production: https://canmyagentuse.com/
- Submission: https://canmyagentuse.com/submit-app
- CI: https://github.com/reachjalil/canmyagentuse.com/actions/runs/33941666410 — succeeded

## Change

Minimal app discovery with real logos, short descriptions, one primary status
and compact connection badges. Shopping and ticketing cards use purchasing
access as their primary status. Full evidence, account journeys, comparison
tables, old compatibility content and machine routes remain available.

Four-field app submission enters the existing editorial queue with app
identity, evidence and optional private contact. No self-published listings.
Receipts track actual review state, and duplicate matching includes app identity.

OpenWork remains explicitly labeled as the confirmed founding sponsor.
Provider provenance and located brand restrictions are documented in
`ops/PROVIDER-MARK-REVIEW-2026-09-04.md`; no permission or legal clearance is claimed.

## Validation

- Biome clean, check clean (175 Astro files), 124 tests passed, production build passed.
- Desktop and 390px mobile: no horizontal overflow on homepage, guide and form.
- Search suggestions/navigation, combined filters, empty results and reset verified.
- All 13 card logos loaded; Salesforce guide mark rendered approximately 44px wide.
- Deep source links open the evidence disclosure.
- Four required form inputs; contact collapsed/optional; POST-only disabled fallback.
- Independent local verification: 61 HTTP checks, all passed.
- Production: 13 HTML/Markdown/JSON guides preserve all 39 evidence links and their
  action/interface/setup/route data; all 13 exact logo URLs and guide social cards return 200.
- Submit-app HTML, Markdown and social card; sitemap, llms indexes, OpenAPI,
  sponsor/press pages, product search, prompt/skill surfaces and previous research routes passed.
- Production form receipt `CMAU-286KMBTY6C` created through the browser. D1 confirmed
  missing-product, unknown proposed status, internal-only visibility, retained identity/evidence
  and no contact consent. Public receipt omitted email and submitted details.
- Only this test record was closed as declined with an explicit release-test history event.
  Receipt closure and continued privacy were read back. No app listing or email was created.

## Continuation

The existing hourly product-coverage automation remains active. Its strategy
now protects minimal discovery screens, evidence-led statuses, and independent
submission review. Continue the SaaS depth/expansion backlog in bounded batches.
