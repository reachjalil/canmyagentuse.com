# Submission flow and provider guide — published

Released on 2026-09-05 from the isolated worktree
`/Users/jalillaaraichi/canmyagentuse-submission-guide`, branch
`codex/submission-guide-20260905`.

Content commit: `1b34edc1469b3b39a57b110b61a2a6c30c11d774`.
Worker version: `4c78d92f-4c66-4e99-9e01-4d922d2f9b73`, read back at 100%.
Deployment created: `2026-09-05T19:10:25.661Z`.

## Delivered

- [Submission form](https://canmyagentuse.com/submit-app): clearer four-field
  starting point, optional existing `reproductionSteps` field for links and
  context, visible review-guide link, and more precise receipt expectations.
- [Help agents discover and use your app](https://canmyagentuse.com/news/how-to-submit-your-app):
  full guide to submission, agent-assisted documentation research, editorial
  assessment, four user actions, five distinct interfaces, evidence, limitations,
  optional documentation improvements, llms.txt, corrections, and receipt tracking.
- Generated Markdown twins, discovery indexes, Open Graph/Twitter metadata and
  1200×630 social cards. The share headline is “Your next user might be an agent.”

The form continues to use the existing private review queue. No database,
authorization, moderation, anti-spam, or receipt API changes were made. Submission
does not trigger an instant automated scan, guarantee publication or a deadline,
or authorize a live test. Providers can submit without MCP or llms.txt; those are
not eligibility gates. Findings remain evidence-based and separate from payment.

The llms.txt explanation was checked against https://llmstxt.org/ on 2026-09-05.
Other criteria describe this catalog's editorial process and documentation advice,
with internal methodology and privacy links. No provider marks were added.

## Verification

- Narrow catalog/representation validation, Biome and `git diff --check` passed.
- Uncached check, all 136 tests, and build passed. After shortening one social
  description to remove preview truncation, the final build and its embedded
  content validation passed again.
- Browser inspection confirmed all four required form fields validate, the new
  optional context field works, and the submit button enables. A direct call to
  the existing validator confirmed optional context retention, private publication
  preference, and initial unknown status. No submission was sent to production.
- Form and article fit a 390px viewport without page overflow. The temporary
  viewport override was reset. Social cards were visually inspected.
- Compiled local Worker and production checks passed for both HTML/Markdown
  pages, metadata, social PNGs, internal links, App usage discovery, llms indexes,
  and sitemap. The live product index remained identical to the 22-guide baseline;
  plugin pages and ZIP integrity and the three email guides were preserved.
- GitHub CI: https://github.com/reachjalil/canmyagentuse.com/actions/runs/33986279928
  completed successfully for the exact content commit.

The original checkout and its unrelated Evernote/Joplin drafts were untouched.
An occupied preview port was left alone; this task used a separate local port.
Only this task's three implementation/content files were committed and published.

## Reply draft for Benjamin

Yes—submit OW with its docs and one useful task. Our agents research what it
supports, how to connect, and what still needs a person. I wrote up the process
and how to make your docs easier for agents to use:
https://canmyagentuse.com/news/how-to-submit-your-app

232 characters with a 23-character X URL. Draft only; no social reply was posted.
