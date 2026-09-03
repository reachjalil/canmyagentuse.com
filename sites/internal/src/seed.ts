import type { TrackerState } from "./types.ts";

function task(id: string, title: string, detail?: string) {
  return { id, title, detail, done: false, note: "" };
}

export const SEED_STATE: TrackerState = {
  version: 1,
  updatedAt: "2026-08-29T00:00:00.000Z",
  phases: [
    {
      id: "ship",
      num: "0",
      window: "Day 0",
      title: "Ship and verify",
      summary:
        "Nothing else can start until the press kit and prompts are live on the production domain.",
      tasks: [
        task(
          "ship-commit",
          "Commit and deploy",
          "git commit → pnpm deploy → spot-check /press, /prompt, /prompt.txt on canmyagentuse.com"
        ),
        task(
          "ship-cards",
          "Verify social cards",
          "Paste /press and /prompt into a link-preview checker; both should show their 1200×630 cards"
        ),
        task(
          "ship-gsc",
          "Google Search Console verified",
          "Domain property + submit sitemap.xml"
        ),
        task(
          "ship-bing",
          "Bing Webmaster Tools + IndexNow",
          "Bing feeds ChatGPT search and DuckDuckGo"
        ),
        task(
          "ship-email",
          "press@canmyagentuse.com live",
          "Cloudflare Email Routing, ~10 minutes; then replace the “no press inbox yet” line in press.ts"
        ),
        task(
          "ship-handles",
          "Claim social handles",
          "X, LinkedIn company page, Bluesky, GitHub org — same mark, same boilerplate"
        ),
        task(
          "ship-sameas",
          "Ship sameAs + logo in Organization JSON-LD",
          "Feeds Google's Knowledge Graph once profiles exist"
        ),
      ],
    },
    {
      id: "owned",
      num: "1",
      window: "Day 0–1",
      title: "Owned surfaces",
      summary:
        "The site reports its own changes as dated news — use that machinery for the launch itself.",
      tasks: [
        task(
          "owned-news",
          "Launch post in content/news/en/",
          "Flows into RSS, JSON Feed, and llms.txt automatically"
        ),
        task(
          "owned-founder",
          "Founder posts on X and LinkedIn",
          "Founder voice outperforms brand voice at this stage"
        ),
        task(
          "owned-wikidata",
          "Create Wikidata item",
          "Independent compatibility catalog, inception 2026-08-28"
        ),
        task("owned-crunchbase", "Free Crunchbase profile"),
        task(
          "owned-editor",
          "Named editor on /about and news posts",
          "E-E-A-T: anonymous research catalogs rank and pitch worse"
        ),
      ],
    },
    {
      id: "community",
      num: "2",
      window: "Week 1",
      title: "Communities — free, highest expected value",
      summary:
        "One channel at a time, written natively for each. Answer questions; don't broadcast.",
      tasks: [
        task(
          "comm-hn",
          "Show HN",
          "Tue–Thu 8–10am ET. Draft title is in the copy bank. Stay in the thread all day."
        ),
        task(
          "comm-ph",
          "Product Hunt launch",
          "12:01am PT, a few days after HN; PH pages rank for years"
        ),
        task("comm-lobsters", "Lobsters", "The day after HN if it lands well"),
        task(
          "comm-reddit",
          "Reddit posts, spaced days apart",
          "r/LocalLLaMA, r/ClaudeAI, r/ChatGPTCoding, r/SideProject"
        ),
        task(
          "comm-newsletters",
          "Newsletter pitches",
          "Ben's Bites, TLDR AI, The Rundown, Latent Space — one stat + link to /press"
        ),
        task(
          "comm-discord",
          "MCP / Cursor / Claude / OpenAI dev Discords",
          "Share where capability questions get asked, as an answer not an ad"
        ),
      ],
    },
    {
      id: "paid",
      num: "3",
      window: "Week 1–2",
      title: "Paid press release — one, budget tier",
      summary:
        "A wire buys legitimacy and a Google News footprint, not ranking links. Cap spend until metrics argue otherwise.",
      tasks: [
        task(
          "paid-pick",
          "Pick the wire",
          "EIN Presswire ~$149 or eReleases ~$399; skip PR Newswire / Business Wire at this stage"
        ),
        task(
          "paid-draft",
          "Finalize release from the copy bank",
          "Recheck the numbers against /press before sending — they refresh at build"
        ),
        task("paid-send", "Send timed to the HN/PH week"),
        task(
          "paid-pitches",
          "10 direct journalist pitches",
          "Named AI/dev-tools reporters, using /press — one real story beats 400 syndications"
        ),
      ],
    },
    {
      id: "directories",
      num: "4",
      window: "Week 2–4",
      title: "Directories and listings",
      summary:
        "Quality few, not mass submission. Skip bulk services — link farms hurt.",
      tasks: [
        task(
          "dir-ai",
          "AI directories",
          "There's An AI For That, Toolify.ai, TopAI.tools free paths first"
        ),
        task(
          "dir-dev",
          "Dev directories",
          "AlternativeTo, SaaSHub, StackShare, LibHunt, Uneed, Peerlist Launchpad"
        ),
        task(
          "dir-llmstxt",
          "llms.txt directories",
          "llmstxthub.com, llmstxt-site GitHub PR, llms-text.com — unusually on-brand"
        ),
        task(
          "dir-awesome",
          "3–5 awesome-list PRs",
          "awesome-ai-agents, awesome-mcp ecosystems, awesome-claude/chatgpt resources"
        ),
      ],
    },
    {
      id: "engine",
      num: "5",
      window: "Ongoing",
      title: "Durable ranking engine",
      summary:
        "The 125 × 31 capability matrix is programmatic SEO that already exists. Feed it.",
      tasks: [
        task(
          "eng-badges",
          "Build embeddable README badges",
          "“MCP tools: yes — canmyagentuse.com” — every embed is a natural backlink"
        ),
        task(
          "eng-report",
          "Quarterly “State of Agent Capabilities” report",
          "The classic linkable asset for newsletters and journalists"
        ),
        task(
          "eng-changes",
          "Weekly changes cadence",
          "Freshness signals plus a reason to re-cover"
        ),
        task(
          "eng-sourcereq",
          "Answer journalist source requests",
          "Qwoted and HARO successors, as an independent AI-agent compatibility researcher"
        ),
        task(
          "eng-gsc",
          "Weekly Search Console review",
          "Write capability pages toward queries showing impressions without clicks"
        ),
      ],
    },
  ],
  log: [
    {
      id: "log-seed-1",
      date: "2026-08-28",
      text: "Catalog foundation, Evidence Atlas v1, harness columns, and unknown-by-default policy published.",
    },
    {
      id: "log-seed-2",
      date: "2026-08-29",
      text: "Press kit (/press) and canonical prompts (/prompt, /prompt.txt) built with full machine-surface wiring, 10 brand guardrail tests, and social cards. Verified locally; not yet deployed.",
    },
  ],
};
