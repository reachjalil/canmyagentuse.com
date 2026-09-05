# Authoring template — do not publish this file directly

Start with a copy of a complete published news entry so all required SEO, sharing and agent metadata remain present. Give it a stable task-oriented slug and a unique Field Notes number. Add this review object to its frontmatter, replacing every placeholder with reviewed evidence:

```yaml
review:
  number: 2
  version: 1
  reviewedAt: "YYYY-MM-DD"
  verdict: unverified
  headline: "A short, task-specific verdict."
  summary: "One or two sentences answering the request."
  evidence: documentation
  sources:
    - https://provider.example/exact-reviewed-page
  works: "The useful supported outcome."
  catch: "The access constraint or remaining uncertainty."
  nextCheck: "The observation that could change our verdict."
  history:
    - version: 1
      date: "YYYY-MM-DD"
      change: "Initial exploration. Describe the evidence basis."
```

Suggested narrative, adapted to the story rather than repeated mechanically:

> A plausible everyday request, clearly illustrative.

Name the real finish line. Make the reader care.

## How far can your agent get?

Compare outcomes and human handoffs. Avoid duplicating the entire verdict card.

## We followed the request

Explain the two or three most revealing findings. Link exact first-party sources where each claim appears. Cover account creation, authorization, paid requirements, route availability, region/plan limits and useful actions when relevant. Separate provider-native assistants, MCP tools, MCP Apps, API, CLI and local files.

## What this means for choosing a service

Help the reader make a decision based on their task, agent and access. Link the relevant product guides.

## Try the next useful step

A safe, concrete task or prompt. Link catalog discovery and submission when useful. Clearly label proposed versus performed tests.

Retain a proportionate sponsorship disclosure. The verdict, evidence and update history render automatically from frontmatter; do not hand-maintain a second copy in the body.
