# Agent signup study — published

Released September 5, 2026 from isolated worktree
`/Users/jalillaaraichi/canmyagentuse-signup-study`, branch
`codex/agent-signup-study-20260905`.

Content commit: `5c1c95f8cfdcb77d9c5eee43155713d92b2c5439`.
Worker version: `6513aa42-c01d-477f-8bd1-087406a44850`, read back at 100%.
Deployment created: `2026-09-05T20:08:35.896Z`.

## Delivered

- [Evidence companion](https://canmyagentuse.com/agent-signup), its generated
  Markdown twin, discovery-index entries and methodology cross-link.
- A dated, reproducible snapshot of the 22 product guides at baseline commit
  `309cd23b4cb51ca80a983e62cf61dc5c26ba1b7c`, including CSV and source hashes.
- A static 2400 × 1350 data graphic and a matching 1200 × 630 social preview.
- An approximately 880-word X article, plain-text copy, and three tweet drafts
  under `artifacts/agent-signup-2026-09-05/`. These were not published as site
  articles or posted to X. The supplied screenshot was inspiration, not proof.

## Evidence and interpretation

Useful work: 17 agent-ready, 5 conditional. Signup: 0 agent-ready, 5 human-step,
4 conditional, 13 unknown. The unknowns are evidence gaps, not failures. This is
22 guides, not 22 independent account systems or a representative market survey.
No live registrations were performed.

The conditional signup rows represent different things: AgentMail registration
initiation with human-email OTP, Cloudflare temporary previews with required
policy acceptance and account claim, Salesforce scratch-org provisioning after
Dev Hub authorization, and Obsidian local-file work. Related Vercel and Neon
claimable-resource documentation was checked. Neon remains outside the sample.

The article proposes owner-bound agent onboarding as a business opportunity.
It does not claim measured conversion uplift, a universal existing signup
standard, or that the catalog MCP can inspect users' installed connections.
Provider documentation is linked from the evidence companion. No marks or
third-party screenshots were added.

## Validation

- Catalog/representation validation, Biome, and staged diff whitespace checks passed.
- Uncached workspace checks, all 136 tests, and production build passed.
- Final page/layout checks and build passed after the mobile table and custom
  social-preview refinements. CSV line endings were normalized afterward;
  live source-file parity was verified.
- Browser inspection at desktop and 390px mobile widths confirmed the chart
  loads and the mobile document has no horizontal overflow. Tables scroll
  within the page. Both rendered data image sizes were visually inspected.
- Production returned HTTP 200 for the evidence HTML and Markdown, methodology,
  both PNGs, CSV, llms indexes, sitemap, product API, plugin page, submission
  form and the existing submission guide.
- Live graphic/CSV bytes exactly match the source artifacts. The live product
  API items exactly match the compiled 22-guide corpus; no product was reclassified.
- Canonical URL and graph-based social preview metadata were verified live.
- Exact-commit CI completed successfully: https://github.com/reachjalil/canmyagentuse.com/actions/runs/33989194186

The original checkout and other worktrees were not edited. An occupied preview
port was left alone; this task used its own port. Only task-owned files were
committed. The publication kit README includes image alt text and reproduction
commands.
