---
{
  "title": "AMC Theatres",
  "slug": "amc-theatres",
  "vendor": "AMC",
  "order": 11,
  "category": "Movies & tickets",
  "categorySlug": "movie-tickets",
  "homepage": "https://www.amctheatres.com/",
  "aliases": [
    "cinema",
    "movie theater",
    "movie theatre",
    "tickets"
  ],
  "summary": "AMC documents ticket-ordering APIs, but ecommerce and seating access are restricted and need a separate agreement.",
  "scope": "AMC developer documentation. Catalog access is separate from ecommerce and seating permission.",
  "bestFor": "An approved ticketing partner; ordinary users should verify a supported checkout provider.",
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous consumer signup is not verified.",
      "detail": "The reviewed developer flow requests catalog API access; it is not a consumer account-creation assessment.",
      "sourceIds": []
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "Request the appropriate API permission.",
      "detail": "AMC’s access page separates catalog credentials from restricted commerce and seating. It says commerce requests are not currently accepted through that form.",
      "sourceIds": [
        "access"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "conditional",
      "summary": "Purchasing needs approved commerce access.",
      "detail": "Payment and fulfillment have documented flows. Their existence does not grant a new agent the ability or permission to use them.",
      "sourceIds": [
        "payment",
        "fulfillment",
        "access"
      ]
    },
    {
      "id": "use-product",
      "status": "conditional",
      "summary": "Catalog discovery is a separate capability.",
      "detail": "The general-admission guide covers showing lookup and order creation. Its sample dates and prices are examples, not current availability.",
      "sourceIds": [
        "ordering"
      ]
    }
  ],
  "routes": [
    {
      "name": "AMC partner APIs",
      "description": "Use only the catalog, commerce, and seating permissions granted to the integration.",
      "feature": "connectors",
      "sourceIds": [
        "access",
        "ordering"
      ]
    }
  ],
  "setup": [
    {
      "title": "Confirm access",
      "actor": "You + agent",
      "detail": "Check the partner’s approved API permissions before selecting an implementation."
    },
    {
      "title": "Resolve the showing",
      "actor": "Agent",
      "detail": "Retrieve current theater, movie, date, and seat options."
    },
    {
      "title": "Authorize the final purchase",
      "actor": "You",
      "detail": "Confirm the total, seats, and payment method."
    },
    {
      "title": "Read back fulfillment",
      "actor": "Agent",
      "detail": "Confirm the final order status and ticket delivery."
    }
  ],
  "integrations": [
    {
      "kind": "mcp",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "AMC documents catalog and restricted commerce APIs.",
      "sourceIds": [
        "access",
        "ordering"
      ]
    },
    {
      "kind": "cli",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
    }
  ],
  "sources": [
    {
      "id": "access",
      "title": "API access request and restrictions",
      "href": "https://developers.amctheatres.com/GettingStarted/NewVendorRequest",
      "publisher": "AMC",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "ordering",
      "title": "General-admission ordering",
      "href": "https://developers.amctheatres.com/GettingStarted/PurchasingGATickets",
      "publisher": "AMC",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "payment",
      "title": "Credit card payment",
      "href": "https://developers.amctheatres.com/GettingStarted/PayingWithACreditCard",
      "publisher": "AMC",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "fulfillment",
      "title": "Order fulfillment",
      "href": "https://developers.amctheatres.com/GettingStarted/SubmittingOrderForFulfillment",
      "publisher": "AMC",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use AMC Theatres? Shopping, access and checkout",
  "socialTitle": "Can my agent use AMC Theatres?",
  "socialDescription": "AMC documents ticket-ordering APIs, but ecommerce and seating access are restricted and need a separate agreement.",
  "description": "AMC documents ticket-ordering APIs, but ecommerce and seating access are restricted and need a separate agreement.",
  "llmSummary": "AMC documents ticket-ordering APIs, but ecommerce and seating access are restricted and need a separate agreement.",
  "audience": "People and developers evaluating agent-assisted purchases.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "amc-theatres",
    "movie-tickets",
    "agent-commerce"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/amc-theatres",
  "previewImageAlt": "Can My Agent Use guide to AMC Theatres: discovery, account access, and checkout."
}
---

## Read the restriction before building

A public reference is not the same as publicly obtainable transaction access. Ask an existing approved ticketing partner about the practical route for your agent.

See the [movie-ticket article](/news/can-an-ai-agent-buy-my-movie-ticket) and [Atom Tickets guide](/products/atom-tickets).
