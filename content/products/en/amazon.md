---
{
  "title": "Amazon",
  "slug": "amazon",
  "vendor": "Amazon",
  "order": 13,
  "category": "Shopping & retail",
  "categorySlug": "shopping",
  "homepage": "https://www.amazon.com/",
  "aliases": [
    "shopping",
    "Rufus",
    "Alexa for Shopping",
    "Buy for Me"
  ],
  "summary": "Amazon documents shopping actions in its own Alexa for Shopping experience. General third-party agent checkout remains unverified in this guide.",
  "scope": "Amazon’s documented consumer assistant, including eligible Buy for Me purchases. This is not an assessment of seller APIs or blanket authorization for external agents.",
  "bestFor": "Using Amazon’s own shopping assistant; external-agent access needs separate evidence.",
  "actions": [
    {
      "id": "sign-up",
      "status": "unknown",
      "summary": "Autonomous Amazon signup is not verified.",
      "detail": "This guide reviews the documented shopping assistant, not customer account creation.",
      "sourceIds": []
    },
    {
      "id": "connect-account",
      "status": "unknown",
      "summary": "General external-agent delegation is unverified.",
      "detail": "An Amazon account used in Amazon’s own assistant is not proof of an OAuth or MCP connection for another agent.",
      "sourceIds": []
    },
    {
      "id": "buy-subscribe",
      "status": "conditional",
      "summary": "Some purchases use Amazon’s own assistant.",
      "detail": "Amazon describes eligible Buy for Me purchases and other shopping actions. Some scheduled actions prepare a cart for the user to review and check out.",
      "sourceIds": [
        "assistant"
      ]
    },
    {
      "id": "use-product",
      "status": "conditional",
      "summary": "Research and cart actions are documented.",
      "detail": "Alexa for Shopping supports product comparison and shopping assistance in Amazon’s experience. Do not generalize this to every third-party agent.",
      "sourceIds": [
        "assistant"
      ]
    }
  ],
  "routes": [
    {
      "name": "Amazon’s native shopping assistant",
      "description": "Use the documented Amazon Shopping app or website experience. This route is not a verified external-agent integration.",
      "feature": "browser-automation",
      "sourceIds": [
        "assistant"
      ]
    }
  ],
  "setup": [
    {
      "title": "Identify which agent is acting",
      "actor": "You",
      "detail": "Distinguish Amazon’s own assistant from an external browser or MCP agent."
    },
    {
      "title": "Check the action offered",
      "actor": "You + agent",
      "detail": "Determine whether it researches, prepares a cart, or completes an eligible purchase."
    },
    {
      "title": "Review the order details",
      "actor": "You",
      "detail": "Check the merchant, item, total, address, and payment choice."
    },
    {
      "title": "Verify the result",
      "actor": "You + agent",
      "detail": "Confirm an actual order; a recommendation or filled cart is not a completed purchase."
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
      "status": "unknown",
      "detail": "No reviewed evidence establishes this interface for this product.",
      "sourceIds": []
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
      "id": "assistant",
      "title": "Alexa for Shopping announcement",
      "href": "https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant",
      "publisher": "Amazon",
      "reviewedAt": "2026-09-04"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Amazon? Shopping, access and checkout",
  "socialTitle": "Can my agent use Amazon?",
  "socialDescription": "Amazon documents shopping actions in its own Alexa for Shopping experience. General third-party agent checkout remains unverified in this guide.",
  "description": "Amazon documents shopping actions in its own Alexa for Shopping experience. General third-party agent checkout remains unverified in this guide.",
  "llmSummary": "Amazon documents shopping actions in its own Alexa for Shopping experience. General third-party agent checkout remains unverified in this guide.",
  "audience": "People and developers evaluating agent-assisted purchases.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "amazon",
    "shopping",
    "agent-commerce"
  ],
  "updated": "2026-09-04",
  "published": "2026-09-04",
  "canonicalPath": "/products/amazon",
  "previewImageAlt": "Can My Agent Use guide to Amazon: discovery, account access, and checkout."
}
---

## Keep the subject of the claim clear

Amazon’s native assistant and an independent agent are different actors. A native shopping feature can be real while a generic third-party checkout route remains unverified. This guide leaves those interface claims open until exact documentation or a reproducible authorized test supports them.
