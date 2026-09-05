# Product logo provenance and reference review

Reviewed: 2026-09-04. Scope: the 16 independently researched product records,
product discovery cards, comparison rows, and product search. The user requested
real logos. OpenWork's confirmed sponsorship is a separate labeled placement;
none of the marks below denotes sponsorship, approval, or a tested integration.

This is a record of asset provenance and provider-policy review, not a legal
opinion or a record of permission from every trademark owner. The repository's
`ProviderMarkAuthorization` type name is historical: its presence means the
asset has a mapped, reviewed source, not that a provider has authorized the
publication. Collection copyright licenses do not grant trademark rights.

## Implementation boundary

- Can My Agent Use retains its own name, identity, typography, navigation, colors,
  and editorial voice. Compact marks identify the adjacent product name.
- Exact product slugs take precedence over parent-company aliases: Gmail is the
  Gmail icon, OneNote is the OneNote icon, and Amazon is not the AWS mark.
- Provider assets are unchanged and locally served. No logo API, browser request
  to provider image hosts, tracking pixel, or build-time download is involved.
- `packages/catalog/src/provider.ts` records each source, exact asset, date, and
  policy URL. Its source URL function returns an exact pinned-package asset or
  a provider-controlled download. The public `/provider-marks` and Markdown twin
  publish these references and source licenses or terms.
- `sites/web/assets/provider-marks/` preserves eight provider downloads. Each
  original file has a SHA-256 fingerprint checked on every generation. PNG,
  WebP, and passive SVG formats are accepted; scripts, event handlers, external
  SVG references, foreign objects, entities, and doctypes are rejected.
- Eight products use existing pinned packages: `@lobehub/icons-static-svg@1.94.0`
  (MIT, revision `fbd2d56e3f734e889f1373e71c8368cc4e60e0d7`) or
  `simple-icons@16.28.0` (CC0-1.0, revision
  `c956d67dfa7c37ae65206fc0775b0c02d1e695c2`). Package copyright licenses apply
  to the source assets, not to associated trademark rights.
- An original deterministic monogram remains available for missing or unreviewed
  future records. The existing exact-product API is unchanged.

## Product mappings and findings

| Record | Exact asset | Current provider resource and finding |
| --- | --- | --- |
| Cloudflare | Lobe `cloudflare-color.svg` | [Trademark guidelines](https://www.cloudflare.com/trademark/) distinguish permitted text references from logo use, which requires written permission. This review does not establish that permission. Mark is confined to the editorial product reference. |
| Gmail | Google's 2026 Gmail icon, WebP | [Google guidance](https://about.google/brand-resource-center/guidance/) permits informational text and educational materials, prohibits endorsement implications, and points business product-icon uses to specific icon guidance. The current icon was obtained from [Google's product index](https://about.google/products/); it is not a Google-company substitute or recolored Simple Icon. No Google sponsorship or blanket icon license is asserted. |
| Salesforce | Provider's current blue cloud and white wordmark, SVG | [Usage guidelines](https://www.salesforce.com/company/legal/intellectual/tmcusageguidelines/) distinguish text, integration diagrams, software screenshots, and licensed uses. The catalog is not a Salesforce partner claim. [Brand Central](https://help.salesforce.com/s/articleView?id=001115548&language=en_US&type=1) specifies 40 px minimum for the cloud containing the name and clear space; narrower uses need the symbol-only asset, not a shrunken wordmark. No Salesforce permission is inferred. |
| Notion | Lobe `notion.svg` | [Notion Brand Guidelines](https://notion.notion.site/Notion-Brand-Guidelines-db8fda2d1f0048bba1f4e547dfc48830) provide resources for community and partner use; the [media kit](https://notion.notion.site/Media-kit-4bd09326fb6a45b680aac5e639757372) links usage guidance. Full trademark terms were not retrievable in this review, so no blanket approval is asserted. |
| Obsidian | Lobe `obsidian-color.svg` | [Obsidian brand guidelines](https://obsidian.md/brand) prohibit changing the logo and ask users to contact Obsidian for commercial asset use. This review does not establish commercial permission. The unmodified symbol identifies an independent guide. |
| OneNote | Microsoft November 2025 CDN release, PNG | [Microsoft trademark guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks) require an express license for logos and product icons; this review found no OneNote-specific editorial exception and does not establish a license. The current product icon is sourced from [OneNote](https://www.onenote.com/), separately from Microsoft's corporate mark. |
| GitHub | Simple Icons `github.svg` | [GitHub's logo toolkit](https://brand.github.com/foundations/logo) lists use in blog posts and news about GitHub, and secondary placement; it also preserves trademark rights and bars modification/affiliation implications. The existing unaltered Invertocat identifies this editorial guide. |
| Slack | Provider media-kit-linked colored symbol, SVG | [Slack media kit](https://slack.com/media-kit) supplies logo resources with stated guidelines without separate legal negotiations for covered uses. The mark remains unchanged with visible Slack text; it is not the Slackbot icon or a Salesforce partnership badge. |
| Linear | Simple Icons `linear.svg` | [Linear brand guidelines](https://linear.app/brand) expressly describe the logomark for tight layouts or logo-only grids. Preserve surrounding space, monochrome appearance, and independence; do not combine it into our own mark. |
| Atom Tickets | Provider's 196 px Atom symbol, PNG | [Atom's trademark notice](https://www.atomtickets.com/help/entry/copyright-and-trademark-legal-line) identifies the circular symbol as its trademark. [Terms of use](https://www.atomtickets.com/tos) reserve intellectual-property rights. The provider's icon identifies Atom Tickets, not the unrelated Atom editor. No partnership or unrestricted asset license is inferred. |
| AMC Theatres | Provider investor-site AMC Theatres wordmark, PNG | [AMC's investor site](https://investor.amctheatres.com/) supplies this asset and identifies AMC Theatres. A standalone media-logo license was not located; the public terms endpoint was not retrievable during review. This is not the unrelated AMC television brand. No provider permission is inferred. |
| Best Buy | Current black wordmark with yellow tag, PNG | [Best Buy media FAQ](https://corporate.bestbuy.com/media-faq/) directs logo requests to its press team. The unchanged asset is from the provider's corporate site; no request has been sent and no press permission is asserted. This catalog placement is separate from paid advertising. |
| Amazon | Provider's current white smile on navy square, PNG | Asset is served by [Amazon's corporate site](https://www.aboutamazon.com/). [Amazon Brand Usage Guidelines](https://images-na.ssl-images-amazon.com/images/G/01/AdvertisingSite/pdfs/AmazonBrandUsageGuidelines.pdf) describe advertiser branding conditions; they are not evidence that this site is an Amazon affiliate or has advertising approval. The reference is to Amazon retail, not AWS or Alexa. |

## SaaS expansion review

The Vercel, Supabase, and Sentry guide marks use unchanged SVGs from the existing
`simple-icons@16.28.0` package, CC0-1.0, revision
`c956d67dfa7c37ae65206fc0775b0c02d1e695c2`. They are local editorial references
beside their exact product names, with the same fallback and non-affiliation
boundary. No additional dependency, provider API request, or sponsored provider
placement was added.

| Record | Exact pinned asset | Provider-policy review |
| --- | --- | --- |
| Vercel | [vercel.svg](https://github.com/simple-icons/simple-icons/blob/c956d67dfa7c37ae65206fc0775b0c02d1e695c2/icons/vercel.svg) | [Brand guidelines](https://vercel.com/geist/brands) permit truthful descriptions and the symbol in compact or multi-brand layouts; prohibit modification, endorsement implications, and use as our own commercial branding. The requested trademark attribution is stored in the typed manifest and displayed beside Vercel in the public brand-reference index and Markdown twin, reached by the site-wide footer link. This is an independent product guide, not Vercel-sponsored marketing or a statement of commercial-logo clearance. |
| Supabase | [supabase.svg](https://github.com/simple-icons/simple-icons/blob/c956d67dfa7c37ae65206fc0775b0c02d1e695c2/icons/supabase.svg) | [Official assets](https://supabase.com/brand-assets) require marks to represent Supabase and prohibit modification. The unmodified monochrome symbol identifies the Supabase product only. No invented recoloring, integration button, partner status, or account-connection implication. |
| Sentry | [sentry.svg](https://github.com/simple-icons/simple-icons/blob/c956d67dfa7c37ae65206fc0775b0c02d1e695c2/icons/sentry.svg) | [Official logo resources](https://sentry.io/branding/) offer glyph and wordmark variants and link to a [brand guide](https://live.standards.site/sentry). The linked guide's text was not retrievable in this review; no blanket trademark permission is inferred from the download page or package copyright license. The glyph remains a secondary editorial reference, not the site's identity or a paid Sentry placement. |

## Review outcome and limits

Provenance, exact-product mapping, local delivery, plain-text pairing, and
independent presentation are established. The policy differences above remain
visible: several providers state permission conditions that this repository
does not independently resolve. Do not describe any of these records as legally
cleared, provider-approved, certified, or sponsored based on this manifest.

The scoped use is secondary identification within independent researched product
records under the repository's reference-mark policy. Before reusing these marks
in a provider's advertisement, co-branded campaign, the site's own identity, a
merchandise item, or a claimed partnership, obtain the applicable provider
permission or qualified review. OpenWork confirmation applies only to OpenWork.

Asset replacement must preserve provenance: locate the provider-controlled
source, review its current terms, download the unmodified file, record its new
fingerprint and review date, regenerate, and inspect the rendered image. Do not
silently replace a missing product mark with a parent brand.
