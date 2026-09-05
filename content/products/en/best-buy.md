---
{
  "title": "Best Buy",
  "slug": "best-buy",
  "vendor": "Best Buy",
  "order": 12,
  "category": "Shopping & retail",
  "categorySlug": "shopping",
  "homepage": "https://www.bestbuy.com/",
  "aliases": [
    "electronics",
    "shopping",
    "buy a laptop"
  ],
  "summary": "Product discovery is documented through public developer APIs. The Commerce API is invite only.",
  "scope": "Best Buy developer APIs. Product data access does not establish access to a customer account or checkout.",
  "bestFor": "Researching electronics; purchasing integrations must establish Commerce API access.",
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Agent-created shopping accounts are unverified.",
      "detail": "Developer registration and consumer account creation are different flows; autonomous consumer signup is not assessed.",
      "sourceIds": []
    },
    {
      "id": "connect-account",
      "status": "unknown",
      "summary": "A catalog key is not customer account access.",
      "detail": "The reviewed API overview does not establish delegated access to an individual customer’s shopping account.",
      "sourceIds": [
        "apis"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "conditional",
      "summary": "Commerce access is invite only.",
      "detail": "Best Buy describes purchasing and fulfillment for partner ecommerce sites through its invite-only Commerce API.",
      "sourceIds": [
        "apis"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Research products and store availability.",
      "detail": "The Products and Stores APIs expose catalog and store information. That is a discovery capability, not an order confirmation.",
      "sourceIds": [
        "apis"
      ]
    }
  ],
  "routes": [
    {
      "name": "Product and store APIs",
      "description": "Research the catalog through a configured API integration.",
      "feature": "connectors",
      "sourceIds": [
        "apis"
      ]
    },
    {
      "name": "Invited commerce integration",
      "description": "Complete partner onboarding before treating checkout as available.",
      "feature": "connectors",
      "sourceIds": [
        "apis",
        "docs"
      ]
    }
  ],
  "setup": [
    {
      "title": "Define the purchase",
      "actor": "You",
      "detail": "Specify product requirements, budget, shipping or pickup, and location."
    },
    {
      "title": "Check the integration’s access",
      "actor": "You + agent",
      "detail": "Distinguish product discovery credentials from invited commerce access."
    },
    {
      "title": "Compare current options",
      "actor": "Agent",
      "detail": "Verify the selected item, availability, and fulfillment choice."
    },
    {
      "title": "Confirm checkout capability",
      "actor": "You + agent",
      "detail": "Use an approved commerce route or complete checkout yourself; read back the resulting order."
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
      "detail": "Catalog APIs are documented; Commerce API is invite only.",
      "sourceIds": [
        "apis"
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
      "id": "apis",
      "title": "Best Buy API catalog",
      "href": "https://developers.bestbuy.com/apis",
      "publisher": "Best Buy",
      "reviewedAt": "2026-09-04"
    },
    {
      "id": "docs",
      "title": "Best Buy API documentation",
      "href": "https://bestbuyapis.github.io/api-documentation/",
      "publisher": "Best Buy",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Best Buy? Shopping, access and checkout",
  "socialTitle": "Can my agent use Best Buy?",
  "socialDescription": "Product discovery is documented through public developer APIs. The Commerce API is invite only.",
  "description": "Product discovery is documented through public developer APIs. The Commerce API is invite only.",
  "llmSummary": "Product discovery is documented through public developer APIs. The Commerce API is invite only.",
  "audience": "People and developers evaluating agent-assisted purchases.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "best-buy",
    "shopping",
    "agent-commerce"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/best-buy",
  "previewImageAlt": "Can My Agent Use guide to Best Buy: discovery, account access, and checkout."
}
---

## Discovery is useful on its own

A tool can help compare electronics even if it cannot submit an order. The product guide therefore treats catalog research and payment as separate answers. No live checkout was performed for this review.
