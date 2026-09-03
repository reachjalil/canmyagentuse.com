import { PRESS_BOILERPLATES } from "@canmyagentuse/catalog";

export interface CopyItem {
  id: string;
  label: string;
  hint: string;
  text: string;
}

const standardBoilerplate =
  PRESS_BOILERPLATES.find((entry) => entry.id === "standard")?.text ?? "";

export const ANNOUNCEMENT_COPY: readonly CopyItem[] = [
  {
    id: "outreach-scout-agent",
    label: "Social outreach scout prompt",
    hint: "Paste into a repo agent session. It finds live threads and drafts replies — you post them yourself.",
    text: `Find live social conversations that Can My Agent Use can genuinely answer, and draft replies for me to post myself. Research and drafting only — you never post anything.

Preconditions
- Verify https://canmyagentuse.com/llms.txt resolves. If it does not, stop and tell me to deploy the site first.
- Use web search and the in-app browser for public pages (Reddit, Hacker News via hn.algolia.com, Bluesky, Lobsters). Use my logged-in Chrome only if X requires a session — and in Chrome, read only: never post, reply, like, follow, vote, or DM from my accounts.

Where to look (freshest and most answerable, not volume)
- Reddit: r/LocalLLaMA, r/ClaudeAI, r/ChatGPTCoding, r/cursor, r/OpenAI, r/AI_Agents, r/mcp, r/SideProject
- X and Bluesky: capability-question searches
- Hacker News: hn.algolia.com, last 30 days
- Anywhere else people ask what agent products actually support

What counts as an opportunity
- Someone is asking a question the catalog has a sourced answer for: "does <product> support MCP / skills / plugins / local models / computer use", "X vs Y" capability comparisons, "which CLI agent can …".
- Derive search queries from the catalog's own capability list: read content/features/en/ in this repo (or dist/client/api/v1/features.json) and use the feature names and aliases.
- Freshness: prefer threads from the last 14 days; skip anything older than 30 days unless it is a high-traffic evergreen thread that still gets replies.
- Skip: flamewars, vendor-bashing threads, anything where a link would read as spam, and subreddits whose rules ban link replies (check each subreddit's rules first; where links are banned, draft a no-link answer or skip).

Verify before you draft
For every draft, open the relevant catalog page's Markdown twin (append .md to the URL) and confirm the exact status, qualifiers, and verification date. Quote only what the catalog actually says. If the cell is unknown, either skip the thread or draft an honest "this is not publicly sourced yet" reply — never claim support the evidence does not show.

Drafting rules
- Answer first, link second: the reply must be useful even if the reader never clicks.
- Native tone per platform, in my voice: builder, factual, no marketing speak. No superlatives, never certified/official/partnered, coverage is never market share.
- Disclose that I run the site every time, e.g. "I maintain canmyagentuse.com".
- Link the exact record (for example /features/mcp-tools), not the homepage, and state the status plus its verified date.
- Length: 2–6 sentences for Reddit and HN; a single short post for X and Bluesky.

Deliverable
- 10–20 ranked opportunities, best first, at most 5 per platform.
- For each: platform, direct link, one-line summary of the ask, thread age and activity, the exact catalog page you verified, and the ready-to-paste draft reply.
- Write the whole queue to sites/internal/data/outreach/queue-<today>.md in this repo and also give it to me in chat.
- End with three search queries that came up dry but look promising to re-run next week.`,
  },
  {
    id: "crunchbase-agent",
    label: "Crunchbase agent prompt",
    hint: "Paste into a repo agent session with the Chrome extension connected and Crunchbase logged in.",
    text: `Populate Crunchbase with the Can My Agent Use organization profile, using my connected Chrome browser (the Claude in Chrome tools). I am already logged into Crunchbase in that browser.

Ground rules
- Use my real Chrome (mcp__claude-in-chrome__* tools). If the extension is not connected, stop and tell me instead of using another browser.
- Never enter credentials or payment details. If Crunchbase asks to log in, verify by email, or buy anything (including Crunchbase Pro upsells), pause and hand it to me.
- Before every form submission, show me exactly what you are about to submit and wait for my confirmation.
- Voice rules: never describe the catalog as certified, official, approved, partnered, or vendor-affiliated; no superlatives; catalog coverage is research progress, never market share.

Flow
1. Search Crunchbase for an existing "Can My Agent Use" or "canmyagentuse" profile. If one exists, edit or claim it — do not create a duplicate.
2. Otherwise create a new organization profile through Crunchbase's contributor "Add new" flow.
3. Fill only the fields listed below. Leave anything not listed blank rather than guessing, and if Crunchbase requires a field I have not covered, list it and ask me.
4. When the profile is live, give me the URL. Then, in this repo, mark the task with id "owned-crunchbase" as done in sites/internal/data/tracker.json and append a dated log entry there recording the URL.

Enter as-is
- Organization name: Can My Agent Use
- Website: https://canmyagentuse.com
- Short description: Independent compatibility catalog for AI agents — evidence-cited answers on what exact web, desktop, and CLI agent products support.
- Full description: ${standardBoilerplate}
- Founded date: August 28, 2026
- Operating status: Active
- Industries (pick the closest Crunchbase offers): Artificial Intelligence, Developer Tools, Information Services, Database, Software
- GitHub: https://github.com/reachjalil/canmyagentuse-data
- Logo: upload sites/web/public/brand-mark-512.png from this repo (512 × 512 PNG of the evidence-aperture mark)
- If there is a field for additional links or details, add: Hugging Face dataset https://huggingface.co/datasets/reachjalil/canmyagentuse and press kit https://canmyagentuse.com/press

Ask me before entering
- Headquarters location (I have not decided what to publish)
- Contact email (use press@canmyagentuse.com only if I confirm it is live)
- Founders and team members (whether to list my name publicly)
- Company type (for-profit or other) and LinkedIn/X profiles (only if I confirm those handles exist)`,
  },
  {
    id: "hn-title",
    label: "Show HN title",
    hint: "78 characters. Factual, names the familiar mental model, no superlatives.",
    text: "Show HN: Can My Agent Use – caniuse-style compatibility catalog for AI agents, with cited evidence",
  },
  {
    id: "pr-release",
    label: "Press release headline + lede",
    hint: "Numbers refresh at build — recheck against /press before sending.",
    text: `Can My Agent Use Launches Independent Compatibility Catalog for AI Agents

canmyagentuse.com, an independent research catalog, today published compatibility records covering 125 capabilities across 31 exact web, desktop, and CLI AI agent products, with 4,557 research cells and 183 dated public sources. Every published answer links to its evidence; cells without a reviewed source stay marked unknown. The catalog is free to read and publishes machine-readable copies for AI agents.`,
  },
  {
    id: "social-post",
    label: "One-line social post",
    hint: "Founder voice. Works on X, LinkedIn, Bluesky.",
    text: "Does your AI agent actually support MCP? Skills? Local models? I built an independent, evidence-cited compatibility catalog to answer exactly that — and unknown stays unknown until there's a source. canmyagentuse.com",
  },
  {
    id: "newsletter-pitch",
    label: "Newsletter pitch email",
    hint: "Short enough to read on a phone. One stat, one link.",
    text: `Subject: Independent compatibility catalog for AI agents (caniuse, but for agents)

Hi {name} — I just launched Can My Agent Use, an independent catalog that answers whether exact AI agent products (web, desktop, CLI) support a capability, with every answer linked to dated public evidence. 4,557 research cells across 31 product columns at launch; unknown stays unknown until sourced.

Press kit with fact sheet and assets: https://canmyagentuse.com/press
Happy to share data or a custom cut for your readers.`,
  },
] as const;

export const PRESS_BOILERPLATE_COPY: readonly CopyItem[] =
  PRESS_BOILERPLATES.map((boilerplate) => ({
    id: `boilerplate-${boilerplate.id}`,
    label: `Boilerplate — ${boilerplate.label}`,
    hint: `${boilerplate.words} words · imported live from @canmyagentuse/catalog`,
    text: boilerplate.text,
  }));

export interface QuickLink {
  label: string;
  href: string;
}

export const QUICK_LINKS: readonly QuickLink[] = [
  { label: "Press kit", href: "https://canmyagentuse.com/press" },
  { label: "Canonical prompts", href: "https://canmyagentuse.com/prompt" },
  { label: "Plain-text prompt", href: "https://canmyagentuse.com/prompt.txt" },
  {
    label: "Private repo",
    href: "https://github.com/reachjalil/canmyagentuse.com",
  },
  {
    label: "Open data (GitHub)",
    href: "https://github.com/reachjalil/canmyagentuse-data",
  },
  {
    label: "Open data (Hugging Face)",
    href: "https://huggingface.co/datasets/reachjalil/canmyagentuse",
  },
  {
    label: "HF Space landing",
    href: "https://huggingface.co/spaces/reachjalil/canmyagentuse",
  },
  { label: "Search Console", href: "https://search.google.com/search-console" },
  { label: "Bing Webmaster", href: "https://www.bing.com/webmasters" },
  { label: "Show HN submit", href: "https://news.ycombinator.com/submit" },
  { label: "Product Hunt", href: "https://www.producthunt.com/" },
  { label: "llms.txt hub", href: "https://llmstxthub.com/" },
] as const;
