# Provider UI and IP Boundary

Last reviewed: 2026-08-23. This is a U.S.-baseline product policy, not a legal
opinion. Re-check law and provider policies for material launches.

## Working position

Do not base the core product on the proposition that copying a provider UI is
fair use. Instead, intentionally preserve enough of the provider's experiential
grammar—color family, density, hierarchy, shapes, and interaction metaphors—to
make the source intuitive, then recompose it through an original implementation
and a materially more focused workflow.

Copyright does not protect ideas, procedures, systems, processes, or methods of
operation. General formats and functional layouts also receive limited or no
copyright protection, although original screen artwork, text, graphics, code,
and a sufficiently creative selection and arrangement may be protected.

Trademark law separately examines likely confusion about source, affiliation,
sponsorship, or approval. A truthful plain-text reference can identify the
actual provider, but the provider's mark should not become the source identity
of this product. Functional product features cannot be monopolized as trade
dress merely because they are recognizable; distinctive nonfunctional overall
appearance can still create risk.

## Risk classification

### Green: preferred

- Original task-focused flow and implementation, with recognizable provider
  family resemblance.
- Familiar functional patterns such as lists, readers, threads, filters,
  timelines, calendars, approval steps, and receipts.
- Plain-text secondary labels such as `Source: Gmail`.
- Independently drawn icons and original microcopy.
- A few provider-adjacent color tokens plus selected familiar shapes, density,
  layout conventions, or interaction patterns, paired with a clear source name.
- Fictional data or authorized, minimized provider data.
- A link to open the authoritative record in the actual provider.
- An independent/non-affiliation notice that supports an already distinct
  design.

### Yellow: permission or review required

- A provider name in a prominent feature title.
- Exact official palettes or distinctive color combinations, especially when
  combined with enough provider-specific geometry and chrome to approach a
  complete replica.
- Logos, product icons, screenshots, badges, fonts, or media-kit assets.
- Compatibility claims in marketing or paid advertising.
- Editorial comparisons that reproduce provider screens.
- Marketplace publication or promotion under provider developer terms.
- A design that reproduces a broad provider workspace instead of selectively
  using familiarity to improve a task-specific independent flow.

### Red: avoid without express authorization and review

- Pixel-level replicas or copied application shells.
- Copied HTML, CSS, SVG paths, illustrations, sounds, animations, or microcopy.
- Provider marks incorporated into the product name, logo, domain, or handle.
- False `official`, `certified`, `approved`, `partner`, or endorsement claims.
- Provider screenshots used as the operative interactive product.
- Fake sign-in, account, or provider chrome that appears official or connected.
- Using a substantially complete copied visual identity so the screen can
  plausibly pass as the provider's own product.

## Naming and attribution

Prefer:

- `Reply triage` / `Source: Gmail`
- `Refund review` / `Zendesk ticket + Stripe payment evidence`
- `Access request` / `Slack request + Drive permission`
- `Find a meeting` / `Gmail context + Calendar availability`

Review carefully:

- `Gmail Reply Triage`
- `Stripe Refund Console`
- `Slack Access App`

Avoid:

- `HelloMCP Gmail`
- `Official Gmail MCP App`
- `Stripe-certified refund experience`

## Familiarity through experiential grammar

Users should be able to distinguish sources quickly. The product should
therefore preserve a controlled **family resemblance**. Agents should not
flatten every experience into one neutral house style; they should deliberately
study and reinterpret the source product's useful experiential grammar.

The target is: **close enough to orient, different enough to be an original
focused product**.

Use this pattern:

1. Put the task first: `Catch up on the launch incident`.
2. Identify the source explicitly in text: `Slack source`.
3. Select a few provider-adjacent color tokens. They may influence meaningful
   surfaces—not only a tiny badge—when doing so improves recognition.
4. Reinterpret characteristic shapes, density, hierarchy, spatial patterns,
   and interaction metaphors through independently authored components.
5. Use independently designed source/category icons. Familiar metaphors are
   useful, but do not trace a logo or proprietary icon.
6. Remove general-purpose chrome and reorganize the experience around the one
   current user goal. The focused flow is the primary differentiator.
7. Preserve visible HelloMCP/product provenance and make the source equally
   clear in monochrome and to assistive technology.

Example cue families, not fixed trademark palettes:

- Slack-sourced conversation: an aubergine-led palette, compact channel/thread
  hierarchy, familiar conversational density, and `Slack source` can make the
  origin obvious. Recompose them into the current task instead of rebuilding a
  complete Slack workspace; do not use the multicolor hash or copied assets.
- Microsoft Teams-sourced conversation: muted indigo-blue accent +
  `Microsoft Teams source`, card/tab geometry, and familiar meeting/chat
  grouping can distinguish it from Slack. Do not use the Teams tile/person
  silhouette or recreate the complete meeting shell.
- Gmail-sourced mail: warm red plus pale blue-gray surfaces, a familiar compact
  message-list/reader relationship, mail chips, and `Gmail source` can orient
  the user immediately. Omit the multicolor M envelope, account/settings chrome,
  and the rest of the general inbox application.
- Stripe-sourced payment evidence: violet-led accents, crisp data tables,
  receipt cards, compact status treatments, monospace identifiers, and
  `Stripe source` can carry familiar payment grammar. Reorganize it around the
  exact review rather than reproducing Stripe Dashboard.
- Zendesk-sourced support evidence: green/teal accents, recognizable ticket
  status patterns, compact event history, and `Zendesk source` can signal the
  domain. Avoid the Zendesk Z and the complete agent workspace shell.

Color tokens may be close to familiar provider colors, but should be authored
as part of this product's system rather than mechanically sampled from assets.
When several providers participate in one flow, their visual grammars may shape
their respective evidence sections while the cross-provider workflow and
action controls provide the unifying original composition.

This is a risk-reduction rule, not a safe harbor. Some colors and combinations
can acquire trademark or trade-dress significance, and official brand policies
may prohibit imitation more broadly than copyright law. Recognition alone is
not the problem. Escalate when the combination becomes a passable provider
screen, incorporates protected assets, or creates affiliation ambiguity.

Suggested compact notice:

> Independent product experience · Source: Gmail · Not affiliated with Google

Suggested legal notice:

> This product is independent and is not affiliated with, endorsed by, or
> sponsored by the referenced providers. Provider names are used only to
> identify compatible services or the source of user-authorized data. All
> trademarks are the property of their respective owners.

Use the actual product name in published notices. Do not assume the notice cures
an otherwise confusing screen.

## Screenshots and editorial use

For criticism, comparison, teaching, or documentation, use only the portion of
a provider screen reasonably needed for the explanation. Add substantive
annotation or analysis, attribute the source, avoid decorative use, and follow
the provider's current screenshot policy. Prefer an original schematic where a
provider screenshot is not necessary.

Do not carry that editorial rationale into the runtime UI. An operative
commercial product screen serving the same purpose as the provider's interface
has a materially weaker fair-use posture than a limited critical excerpt.

## Data and contract boundary

For each real connector, record:

- applicable API/developer/marketplace agreement and version;
- authorization and OAuth scopes;
- permitted display, storage, retention, and deletion;
- whether records may be sent to a model or other subprocessors;
- brand attribution and marketing requirements;
- security, incident, and marketplace-review obligations.

Trademark or copyright fair use does not supply permission to access, retain,
redistribute, or train on provider/customer data.

## Primary sources

- Copyright subject matter and idea/system exclusion: 17 U.S.C. § 102,
  https://www.law.cornell.edu/uscode/text/17/102
- Copyright fair use factors: 17 U.S.C. § 107,
  https://www.law.cornell.edu/uscode/text/17/107
- Works and layouts not protected: U.S. Copyright Office Circular 33,
  https://www.copyright.gov/circs/circ33.pdf
- Screen-display copyright practice: U.S. Copyright Office Compendium,
  https://www.copyright.gov/comp3/docs/compendium.pdf
- Commercial-purpose fair-use analysis: Andy Warhol Foundation v. Goldsmith,
  https://www.supremecourt.gov/opinions/22pdf/21-869_87ad.pdf
- False association, sponsorship, and dilution: 15 U.S.C. § 1125,
  https://www.law.cornell.edu/uscode/text/15/1125
- Statutory descriptive fair-use defense: 15 U.S.C. § 1115,
  https://www.law.cornell.edu/uscode/text/15/1115
- Trademark-as-source risk: Jack Daniel's Properties v. VIP Products,
  https://www.supremecourt.gov/opinions/22pdf/22-148_3e04.pdf
- Nominative reference and sponsorship confusion: Toyota Motor Sales v. Tabari,
  https://cdn.ca9.uscourts.gov/datastore/opinions/2010/07/08/07-55344.pdf
- Trade-dress functionality: TrafFix Devices v. Marketing Displays,
  https://www.supremecourt.gov/opinions/boundvolumes/532bv.pdf
- Google Brand Resource Center,
  https://about.google/brand-resource-center/guidance/
- Slack Media Kit and Brand Center entry point,
  https://join.slack.com/media-kit
- Stripe Mark Usage Terms,
  https://stripe.com/legal/marks
- Zendesk Trademark Guidelines,
  https://www.zendesk.com/company/trademark-property/trademarks/
- Zendesk Developer Terms,
  https://www.zendesk.com/company/agreements-and-terms/zendesk-developer-terms/
