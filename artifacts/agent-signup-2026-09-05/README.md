# Agent signup publication kit

Prepared September 5, 2026. The X article and tweet drafts are not posted or
published as site articles. `/agent-signup` is the factual evidence companion.

- `x-article.md`: approximately 880-word article with links, ready to edit in X.
- `x-article.txt`: plain-text copy with explicit reference URLs.
- `tweets.md`: three tweet options; 248, 240 and 244 URL-weighted characters.
- `agent-signup.png`: 2400 × 1350 static rendered data graphic.
- `agent-signup.svg`: editable vector original.
- `catalog-snapshot.json`: complete pinned classifications, source links and hashes.
- `signup-classifications.csv`: 22-row source table for independent checking.
- `build-study.py`: regenerates the data, CSV, table and vector from Git commit
  `309cd23b4cb51ca80a983e62cf61dc5c26ba1b7c` without changing the live corpus.

The page also uses a 1200 × 630 version of this graphic for link previews.

The graphic is generated with code from the data, not an invented illustrative
chart. Its colors and typography are original site-style presentation, with no
provider marks or screenshots. The attached AgentMail screenshot was an editorial
lead, not evidence that agents can register with every service.

Reproduce from this repository checkout:

```sh
python3 artifacts/agent-signup-2026-09-05/build-study.py
pnpm exec biome format --write artifacts/agent-signup-2026-09-05/catalog-snapshot.json
pnpm --filter @canmyagentuse/web exec node --input-type=module -e 'import sharp from "sharp"; await sharp("../../artifacts/agent-signup-2026-09-05/agent-signup.svg").png().toFile("../../artifacts/agent-signup-2026-09-05/agent-signup.png");'
pnpm --filter @canmyagentuse/web exec node --input-type=module -e 'import sharp from "sharp"; await sharp("../../artifacts/agent-signup-2026-09-05/agent-signup.svg").resize(1200,630,{fit:"contain",background:"#f4f1e9"}).png().toFile("public/research/agent-signup-2026-09-05-social.png");'
```

Alt text for X:

> Can My Agent Use catalog snapshot, September 5, 2026, covering 22 product
> guides. Useful work after setup is marked Agent can do it in 17 guides;
> signup/account creation is marked that way in zero. Signup classifications
> are five Human step, four With conditions and thirteen Not verified.
> Conditional routes include temporary previews, existing-account provisioning
> and local files. Unknown does not mean impossible. This is a small
> documentation sample, not a market survey or live signup benchmark.

Editorial boundaries: 22 guides are not 22 independent account systems; Gmail
and Google Calendar share one. Conditional signup records describe different
kinds of initiation. The thirteen unknowns are an evidence gap, not thirteen
confirmed failures. The related Neon example is outside the sample. The proposed
business advantage is a hypothesis, not measured conversion uplift. The catalog
MCP retrieves research and does not inspect the user's installed connections.
