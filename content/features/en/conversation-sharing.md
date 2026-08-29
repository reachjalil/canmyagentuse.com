---
title: Conversation sharing
description: Share a conversation using a documented link or invitation feature.
slug: conversation-sharing
locale: en
seoTitle: Conversation sharing compatibility — Can My Agent Use
socialTitle: Conversation sharing
socialDescription: Compare documented conversation links, invitations, permissions, and revocation.
llmSummary: Conversation sharing means a product provides a documented link or invitation for another person to view or use a conversation; permissions and revocation are qualifiers.
audience: Teams sharing agent findings and work history.
contentKind: feature
status: published
tags: [collaboration, sharing, permissions]
updated: 2026-08-29
published: 2026-08-28
category: collaboration
summary: Share a conversation through a documented link or invitation.
specLabel: Common product term
aliases: [share chat, conversation link, run sharing]
parent: collaboration-and-portability
related: [role-based-access, conversation-export, shared-projects]
notes:
  - id: 77
    text: "Evidence checked 2026-08-29: ChatGPT web creates manageable shared links for conversations and eligible scheduled tasks, with personal links open to anyone holding the URL and managed-workspace links restricted to members."
  - id: 73
    text: "Evidence checked 2026-08-29: Amp CLI threads expose configurable Private, Workspace, Group, and Unlisted visibility and can be shared by URL."
  - id: 2
    text: "Evidence checked 2026-08-28: Claude can create a revocable link to a chat snapshot. Free, Pro, and Max links can be public, while Team and Enterprise links are organization-only; later messages, attached files, and raw MCP tool results are excluded unless a new snapshot is made."
  - id: 3
    text: "Evidence checked 2026-08-28: Gemini Apps can create a public link to a whole conversation, optionally including Gem instructions. Anyone with the link can read and reshare it, eligible recipients can continue it as their own chat, and the creator can delete the public link."
  - id: 4
    text: "Evidence checked 2026-08-28: Perplexity sessions support Private, anyone-with-link, and Enterprise organization-only link visibility. A viewer's follow-up creates a separate session, and the author can revoke public access by returning the session to Private."
  - id: 5
    text: "Evidence checked 2026-08-28: Cursor documents shareable links for web and mobile Background Agent runs so teammates can review diffs and provide feedback. The reviewed page does not specify recipient roles, expiration, revocation, or whether the complete execution transcript is exposed."
  - id: 6
    text: "Evidence checked 2026-08-28: Mistral's Vibe web product, formerly Le Chat at the same chat.mistral.ai entry point, can create a unique conversation link. Anyone with the link can view and reshare the snapshot; the link omits later additions, other conversations, and the author's username unless the author included it in the conversation."
  - id: 52
    text: "Evidence checked 2026-08-29: Warp shares local agent conversations and live sessions by generated link with team, invitee, or public-link access controls."
  - id: 53
    text: "Evidence checked 2026-08-29: Hosted Devin exposes a Share session action and a shareable permalink for every individual session message."
  - id: 60
    text: "Evidence checked 2026-08-29: Consumer Microsoft Copilot on copilot.com generates anyone-with-link snapshots for a full conversation or a single response, with a preview before publishing."
  - id: 61
    text: "Evidence checked 2026-08-29: Grok.com generates public conversation share links and provides a dedicated page where signed-in users can revoke individual or all shared links."
resources:
  - id: openai-chatgpt-web-shared-links
    title: "OpenAI — ChatGPT shared links"
    href: https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq
    kind: docs
    publisher: OpenAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Understand shared link types; Create and update shared links; Manage and delete shared links; FAQ"
  - id: amp-2026-08-thread-sharing
    title: "Amp — Threads"
    href: https://ampcode.com/docs/threads
    kind: docs
    publisher: Amp
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Share a Thread"
  - title: Methodology
    href: /methodology
    kind: note
  - title: OpenAI — ChatGPT shared links
    href: https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq
    kind: docs
    publisher: OpenAI
    reviewedAt: 2026-08-28
  - id: anthropic-chat-sharing
    title: Anthropic Help Center — Share and unshare chats
    href: https://support.claude.com/en/articles/10593882-share-and-unshare-chats
    kind: docs
    publisher: Anthropic
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Share chats; files and MCP integrations; unshare chats
  - id: google-gemini-chat-sharing
    title: Google Gemini Apps Help — Share your chats from Gemini Apps
    href: https://support.google.com/gemini/answer/13743730?hl=en-GB
    kind: docs
    publisher: Google
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Share a chat; continue a chat; delete a public link
  - id: perplexity-session-sharing
    title: Perplexity Help Center — What is a Session?
    href: https://www.perplexity.ai/help-center/en/articles/10354769-what-is-a-thread
    kind: docs
    publisher: Perplexity
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Sharing your Sessions and more actions
  - id: cursor-background-agent-sharing
    title: Cursor Docs — Web and mobile agents
    href: https://docs.cursor.com/en/background-agent/web-and-mobile
    kind: docs
    publisher: Cursor
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Team collaboration
  - id: mistral-vibe-overview
    title: Mistral Docs — Vibe overview
    href: https://docs.mistral.ai/vibe
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Le Chat rename; chat.mistral.ai entry point; web availability
  - id: mistral-vibe-conversation-sharing
    title: Mistral Help Center — Can other people view my conversations?
    href: https://help.mistral.ai/en/articles/347632-can-other-people-view-my-conversations
    kind: docs
    publisher: Mistral
    evidenceType: documented
    reviewedAt: 2026-08-28
    locator: Shared conversations; link contents
  - id: warp-session-sharing
    title: "Warp — Agent Session Sharing"
    href: https://docs.warp.dev/agents/local-agents/session-sharing/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Key capabilities; how it works; access"
  - id: warp-cloud-conversation-sharing
    title: "Warp — Cloud-synced conversations"
    href: https://docs.warp.dev/agents/local-agents/cloud-conversations/
    kind: docs
    publisher: "Warp"
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Sharing conversations; creating a share link"
  - id: cognition-devin-release-notes-sharing
    title: "Cognition — Recent Updates"
    href: https://docs.devin.ai/release-notes/overview
    kind: docs
    publisher: Cognition
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "2026-05-13 Share Session; 2026-04-08 Session Message Permalinks"
  - id: microsoft-copilot-conversation-history
    title: "Microsoft — Conversation history in Microsoft Copilot"
    href: https://support.microsoft.com/en-us/microsoft-copilot/conversation-history-in-microsoft-copilot
    kind: docs
    publisher: Microsoft
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Sharing a conversation"
  - id: spacexai-grok-consumer-faq
    title: "SpaceXAI — Consumer FAQs"
    href: https://x.ai/legal/faq
    kind: docs
    publisher: SpaceXAI
    evidenceType: documented
    reviewedAt: 2026-08-29
    locator: "Can I share my Grok conversations?; revoke shared links"
support:
  - harness: chatgpt-web
    versions:
      - track: current
        status: yes
        noteIds: [77]
        target:
          kind: hosted-observation
          revision: "ChatGPT web documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: "personal links have no recipient-by-recipient access control or configurable expiration; managed-workspace links remain inside the originating workspace"
          - type: format
            value: "conversation links can include history, a response, supported images, or uploaded files; personal links are snapshots until explicitly updated"
        evidence:
          - resourceId: openai-chatgpt-web-shared-links
            type: documented
            observedAt: 2026-08-29
  - harness: amp-cli
    versions:
      - track: current
        status: yes
        noteIds: [73]
        target:
          kind: dated-documentation
          revision: "Amp rolling CLI documentation observed 2026-08-29"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: policy
            value: "admins can change defaults and external sharing; Unlisted is available to anyone with the link"
        evidence:
          - resourceId: amp-2026-08-thread-sharing
            type: documented
            observedAt: 2026-08-29
  - harness: grok-web
    versions:
      - track: current
        status: yes
        noteIds: [61]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Grok.com consumer web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "anyone with a public link can access it and search engines may index publicly posted links"
          - type: policy
            value: "signed-in users can revoke individual or all Grok.com share links"
        evidence:
          - resourceId: spacexai-grok-consumer-faq
            type: documented
            observedAt: 2026-08-29
  - harness: copilot-web
    versions:
      - track: current
        status: yes
        noteIds: [60]
        target:
          kind: hosted-observation
          revision: "2026-08-29 consumer Microsoft Copilot web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: auth
            value: "shared snapshots are accessible to anyone with the generated link"
          - type: runtime
            value: "the link captures content at generation time and does not update with later turns"
        evidence:
          - resourceId: microsoft-copilot-conversation-history
            type: documented
            observedAt: 2026-08-29
  - harness: devin-web
    versions:
      - track: current
        status: yes
        noteIds: [53]
        target:
          kind: hosted-observation
          revision: "2026-08-29 Devin hosted web documentation observation"
          observedAt: 2026-08-29
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: "session links and per-message permalinks"
        evidence:
          - resourceId: cognition-devin-release-notes-sharing
            type: documented
            observedAt: 2026-08-29
  - harness: warp
    versions:
      - track: current
        status: yes
        noteIds: [52]
        target:
          kind: dated-documentation
          revision: "current Warp documentation, last updated through 2026-08-27"
          observedAt: 2026-08-29
        environmentProfile: local-default
        qualifiers:
          - type: transport
            value: "session content is uploaded to Warp servers and shared through a generated link"
          - type: auth
            value: "live viewers sign in; cloud-synced conversation links may allow anyone with the link"
          - type: policy
            value: "team administrators can disable invitations and link sharing"
        evidence:
          - resourceId: warp-session-sharing
            type: documented
            observedAt: 2026-08-29
          - resourceId: warp-cloud-conversation-sharing
            type: documented
            observedAt: 2026-08-29
  - harness: claude-web
    versions:
      - track: current
        status: yes
        noteIds: [2]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Claude shared-chat documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: plan
            value: Free, Pro, and Max users can create public snapshots; Team and Enterprise chat links are restricted to members of the same organization
          - type: runtime
            value: the snapshot contains messages and artifacts present when shared; later messages remain private until the chat is unshared and shared again
          - type: policy
            value: attached files and raw MCP tool-call data are excluded, and changing visibility to Private revokes the direct link
        evidence:
          - resourceId: anthropic-chat-sharing
            type: documented
            observedAt: 2026-08-28
  - harness: gemini-web
    versions:
      - track: current
        status: yes
        noteIds: [3]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Gemini Apps chat-sharing documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: sharing creates a public link that anyone with the URL can read and reshare; organization administrators can disable conversation sharing
          - type: runtime
            value: the link contains the entire conversation and can include uploaded images and optional Gem instructions; eligible recipients continue it as a separate chat
          - type: policy
            value: deleting the link stops future link access but does not delete recipient copies already continued into Gemini Apps activity
        evidence:
          - resourceId: google-gemini-chat-sharing
            type: documented
            observedAt: 2026-08-28
  - harness: perplexity-web
    versions:
      - track: current
        status: yes
        noteIds: [4]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Perplexity session-sharing documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: sessions support Private, anyone-with-link, and Enterprise organization-only visibility; public access can be revoked by returning the session to Private
          - type: runtime
            value: public viewers can ask follow-up questions, but those questions create a separate session rather than changing the author's session
        evidence:
          - resourceId: perplexity-session-sharing
            type: documented
            observedAt: 2026-08-28
  - harness: cursor
    versions:
      - track: current
        status: partial
        noteIds: [5]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Cursor Background Agent sharing documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: runtime
            value: web and mobile Background Agent runs can be shared by link for teammate diff review and feedback
          - type: policy
            value: recipient roles, account or team restrictions, expiration, revocation, and full transcript visibility are not established by the reviewed page
        evidence:
          - resourceId: cursor-background-agent-sharing
            type: documented
            observedAt: 2026-08-28
  - harness: le-chat
    versions:
      - track: current
        status: yes
        noteIds: [6]
        target:
          kind: hosted-observation
          revision: 2026-08-28 Vibe web conversation-link documentation observation
          observedAt: 2026-08-28
        environmentProfile: hosted-default
        qualifiers:
          - type: policy
            value: anyone with the unique conversation link can view it and can reshare the link
          - type: runtime
            value: the shared snapshot excludes later additions and every other conversation; it excludes the author's username unless the author placed it in the conversation
          - type: runtime
            value: Le Chat is now Vibe, while chat.mistral.ai remains the web entry point and existing history and settings are preserved
        evidence:
          - resourceId: mistral-vibe-overview
            type: documented
            observedAt: 2026-08-28
          - resourceId: mistral-vibe-conversation-sharing
            type: documented
            observedAt: 2026-08-28
---

This row asks whether a product documents conversation sharing. Public links, organization-only access, named invitations, snapshots, and live views are recorded separately.

Evidence should record recipient permissions, revocation, expiration, account requirements, attachment handling, later-message behavior, deletion, and organization controls. These details qualify the product's sharing feature rather than redefining the common term.
