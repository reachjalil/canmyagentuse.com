---
{
  "title": "Google Calendar",
  "slug": "google-calendar",
  "vendor": "Google",
  "category": "Calendar & scheduling",
  "categorySlug": "calendar-scheduling",
  "order": 19,
  "homepage": "https://calendar.google.com/",
  "aliases": [
    "Calendar",
    "Google Workspace Calendar",
    "scheduling",
    "meetings",
    "events"
  ],
  "summary": "Read and manage an authorized calendar through Google’s Calendar API or its first-party remote MCP server in Developer Preview.",
  "scope": "Existing Google accounts with Calendar enabled, the Google Calendar API, and Google’s remote Calendar MCP Developer Preview. OAuth consent, calendar sharing roles, Workspace administrator policy, preview enrollment, and the selected MCP host govern access. This is a documentation review, not a live account or event test.",
  "bestFor": "Checking availability and managing authorized calendar events.",
  "actions": [
    {
      "id": "sign-up",
      "status": "human-step",
      "summary": "Create or select the Google account first.",
      "detail": "Google’s account and Calendar help pages document an interactive browser sign-up and sign-in flow. The Calendar API quickstart assumes a Google account with Calendar enabled, so autonomous account creation is not verified here.",
      "sourceIds": [
        "account",
        "calendar-start",
        "quickstart"
      ]
    },
    {
      "id": "connect-account",
      "status": "human-step",
      "summary": "A person must select the account and approve OAuth access.",
      "detail": "The API route needs a Cloud project, enabled Calendar API, OAuth client, consent configuration, and user authorization. The remote MCP route also needs the Calendar MCP API enabled and an OAuth-capable MCP host. A Workspace administrator can restrict or trust third-party OAuth clients, and calendar ACL roles can still limit what the authorized user can read or edit.",
      "sourceIds": [
        "quickstart",
        "oauth",
        "admin-controls",
        "sharing",
        "mcp"
      ]
    },
    {
      "id": "buy-subscribe",
      "status": "unknown",
      "summary": "Agent checkout for Google Workspace or premium Calendar features is not verified.",
      "detail": "Basic Calendar API use is documented as available at no additional cost today. Google’s pricing page documents paid Workspace plans and trials priced per user/month, while Calendar Help identifies some appointment-schedule features as requiring an eligible Workspace or Google One subscription. No reviewed page establishes that an external agent can complete billing, add users, or upgrade a plan; treat subscription decisions as human-owned.",
      "sourceIds": [
        "pricing",
        "appointment-schedule",
        "quota"
      ]
    },
    {
      "id": "use-product",
      "status": "agent-ready",
      "summary": "Read availability or manage events when the token and calendar role allow it.",
      "detail": "The Calendar API documents event listing, retrieval, creation, full replacement updates, and deletion. The first-party Calendar MCP preview lists read, availability, create, update, delete, RSVP, and time-suggestion tools. Its create and update references require either https://www.googleapis.com/auth/calendar or https://www.googleapis.com/auth/calendar.events; tool existence does not grant write authority. This is documented capability, not a completed live agent run.",
      "sourceIds": [
        "events-list",
        "events-get",
        "events-insert",
        "events-update",
        "events-delete",
        "freebusy",
        "mcp",
        "mcp-tools",
        "mcp-update",
        "mcp-delete"
      ]
    }
  ],
  "routes": [
    {
      "name": "Google Calendar API with user OAuth",
      "description": "Build a Google Cloud project and OAuth client, request the smallest Calendar scope, and call the REST API for the selected calendar. A read-only first task can list events or query free/busy before any write scope is requested.",
      "feature": "connectors",
      "sourceIds": [
        "quickstart",
        "scopes",
        "events-list",
        "freebusy"
      ]
    },
    {
      "name": "Google remote Calendar MCP — Developer Preview",
      "description": "Enable both Google Calendar API and Calendar MCP API in a Cloud project, configure the documented read-only starter scopes, then connect an OAuth-capable MCP host to https://calendarmcp.googleapis.com/mcp/v1 over HTTP. Google documents this route as Developer Preview and lists its tools separately.",
      "feature": "mcp-tools",
      "sourceIds": [
        "mcp",
        "mcp-tools",
        "mcp-update",
        "mcp-delete",
        "release-notes",
        "preview"
      ]
    },
    {
      "name": "Google Workspace CLI (gws)",
      "description": "The community-maintained gws repository dynamically exposes Google Discovery APIs and documents Calendar helpers such as +agenda and +insert. It requires a local install and Google OAuth setup; its own README says it is not an officially supported Google product.",
      "feature": "terminal",
      "sourceIds": [
        "gws-cli",
        "gws-context",
        "gws-calendar-recipe"
      ]
    }
  ],
  "setup": [
    {
      "title": "Choose the calendar and task boundary",
      "actor": "You",
      "detail": "Name the intended Google account, calendar ID (usually primary), time zone, and read-only goal. For the first task, ask for the next three events or a bounded free/busy window. Do not include attendees or a write request yet."
    },
    {
      "title": "Prepare the selected route",
      "actor": "You + agent",
      "detail": "For the API, create or select a Cloud project, enable Google Calendar API, configure the OAuth consent screen, and create a client of the right application type. For Google’s MCP preview, also enable Calendar MCP API, add the documented starter scopes (calendar.calendarlist.readonly, calendar.events.freebusy, calendar.events.readonly), and use a host that supports remote HTTP MCP and OAuth."
    },
    {
      "title": "Enroll the Developer Preview",
      "actor": "You",
      "detail": "The MCP route requires agreeing to the Preview Program terms, submitting an application with Google Workspace account and Cloud project details, and allowing your email to be added to the program’s Google Group. Google verifies the Workspace account and registers the Cloud project before sending confirmation; Pre-GA terms can restrict sharing an integration outside your domain or company."
    },
    {
      "title": "Check organization policy and calendar role",
      "actor": "Admin",
      "detail": "A Workspace security administrator may need to mark a client Trusted, Limited, Specific Google data, or Blocked. Separately check the user’s calendar ACL role: freeBusyReader exposes availability, reader hides private-event details, writerWithoutPrivateAccess can change non-private events, and writer can edit event details."
    },
    {
      "title": "Review and grant the OAuth scopes",
      "actor": "You",
      "detail": "Select the intended account and inspect the consent screen. For a read-only owned-calendar API task, consider calendar.events.owned.readonly; use calendar.freebusy for availability-only queries. Google’s MCP setup lists calendar.calendarlist.readonly, calendar.events.freebusy, and calendar.events.readonly as starter scopes. The MCP create_event and update_event references require either https://www.googleapis.com/auth/calendar or https://www.googleapis.com/auth/calendar.events; request those only for an approved write and check the host’s effective grant."
    },
    {
      "title": "Read one useful agenda",
      "actor": "Agent",
      "detail": "List a small, time-bounded set of events on primary, or query free/busy for a named interval. Respect pagination and the calendar’s time zone, report the source calendar and event IDs, and stop before create, update, delete, RSVP, or attendee operations. This is the proposed first task, not a live test."
    },
    {
      "title": "Review any write or invitation",
      "actor": "You + agent",
      "detail": "Before creating, updating, deleting, or responding to an event, show the exact calendar, event ID, times, time zone, changed fields, and notification setting. Creating an event with attendees can send invitations; update and delete can also notify guests. Obtain an explicit human decision before the host executes the change, then fetch the event again to verify the result."
    },
    {
      "title": "Revoke unused access",
      "actor": "You + agent",
      "detail": "Remove the linked app from Google Account settings or revoke the OAuth grant/token. In a Workspace domain, an administrator can revoke or block app access; blocking a restricted service can revoke existing tokens. Revocation prevents further access, but it does not by itself prove that a third-party service deleted data it already copied."
    }
  ],
  "sources": [
    {
      "id": "account",
      "title": "Create a Google Account",
      "href": "https://support.google.com/accounts/answer/27441?hl=en",
      "publisher": "Google Account Help",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "calendar-start",
      "title": "Get started with Google Calendar",
      "href": "https://support.google.com/calendar/answer/2465776?hl=en",
      "publisher": "Google Calendar Help",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "quickstart",
      "title": "Python quickstart",
      "href": "https://developers.google.com/workspace/calendar/api/quickstart/python",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "scopes",
      "title": "Choose Google Calendar API scopes",
      "href": "https://developers.google.com/workspace/calendar/api/auth",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth",
      "title": "Using OAuth 2.0 to Access Google APIs",
      "href": "https://developers.google.com/identity/protocols/oauth2",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "oauth-user-authz",
      "title": "How user authorization works",
      "href": "https://developers.google.com/identity/oauth2/web/guides/how-user-authz-works",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "preview",
      "title": "Google Workspace Developer Preview Program",
      "href": "https://developers.google.com/workspace/preview",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "audience",
      "title": "Manage App Audience",
      "href": "https://support.google.com/cloud/answer/15549945?hl=en",
      "publisher": "Google Cloud Platform Help",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "admin-controls",
      "title": "Control which apps access Google Workspace data",
      "href": "https://support.google.com/a/answer/7281227?hl=en",
      "publisher": "Google Workspace Admin Help",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "sharing",
      "title": "Calendar sharing",
      "href": "https://developers.google.com/workspace/calendar/api/concepts/sharing",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp",
      "title": "Configure the Calendar MCP server",
      "href": "https://developers.google.com/workspace/calendar/api/guides/configure-mcp-server",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-tools",
      "title": "MCP Tools Reference: calendarmcp.googleapis.com",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/create_event",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-update",
      "title": "MCP Tools Reference: calendarmcp.googleapis.com — update_event",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/update_event",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "mcp-delete",
      "title": "MCP Tools Reference: calendarmcp.googleapis.com — delete_event",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/delete_event",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "release-notes",
      "title": "Google Calendar API release notes",
      "href": "https://developers.google.com/workspace/calendar/release-notes",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events-list",
      "title": "Events: list",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/events/list",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events-get",
      "title": "Events: get",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/events/get",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events-insert",
      "title": "Create events",
      "href": "https://developers.google.com/workspace/calendar/api/guides/create-events",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events-update",
      "title": "Events: update",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/events/update",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "events-delete",
      "title": "Events: delete",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/events/delete",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "freebusy",
      "title": "Freebusy: query",
      "href": "https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "attendees",
      "title": "Invite users to an event",
      "href": "https://developers.google.com/workspace/calendar/api/concepts/inviting-attendees-to-events",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "quota",
      "title": "Usage limits",
      "href": "https://developers.google.com/workspace/calendar/api/guides/quota",
      "publisher": "Google for Developers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "revoke",
      "title": "Manage links between your Google Account & apps from other developers",
      "href": "https://support.google.com/accounts/answer/13533235?hl=en",
      "publisher": "Google Account Help",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "pricing",
      "title": "Compare Flexible Pricing Plan Options",
      "href": "https://workspace.google.com/pricing?hl=en",
      "publisher": "Google Workspace",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "appointment-schedule",
      "title": "Create an appointment schedule",
      "href": "https://support.google.com/calendar/answer/10729749?hl=en",
      "publisher": "Google Calendar Help",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "gws-cli",
      "title": "Google Workspace CLI",
      "href": "https://github.com/googleworkspace/cli/tree/a3768d0e82ad83cca2da97724e46bea4ff0e6dbd",
      "publisher": "googleworkspace/cli maintainers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "gws-context",
      "title": "Google Workspace CLI Context",
      "href": "https://github.com/googleworkspace/cli/blob/a3768d0e82ad83cca2da97724e46bea4ff0e6dbd/CONTEXT.md",
      "publisher": "googleworkspace/cli maintainers",
      "reviewedAt": "2026-09-05"
    },
    {
      "id": "gws-calendar-recipe",
      "title": "Find Free Time Across Calendars",
      "href": "https://github.com/googleworkspace/cli/blob/a3768d0e82ad83cca2da97724e46bea4ff0e6dbd/skills/recipe-find-free-time/SKILL.md",
      "publisher": "googleworkspace/cli maintainers",
      "reviewedAt": "2026-09-05"
    }
  ],
  "locale": "en",
  "seoTitle": "Can my agent use Google Calendar? Setup, OAuth and events",
  "socialTitle": "Can my agent use Google Calendar?",
  "socialDescription": "Check availability and manage calendar events through Google’s API or MCP preview, after account authorization.",
  "description": "Read availability and manage authorized calendar events through Google’s API or first-party MCP preview, with human approval for writes and invitations.",
  "llmSummary": "Google Calendar has a documented REST API and a first-party remote Calendar MCP server in Developer Preview. A user must authorize OAuth access, and Workspace administrators and calendar ACLs can restrict it. The API supports list, get, create, update and delete; the MCP preview additionally lists availability, RSVP and time-suggestion tools. Google Workspace CLI (gws) is a separate community implementation and explicitly not an officially supported Google product. MCP Apps and local-file workflows are not established by the reviewed sources.",
  "audience": "People and agents evaluating calendar setup, authorization, scheduling, and event changes.",
  "contentKind": "product",
  "status": "published",
  "tags": [
    "google-calendar",
    "calendar",
    "scheduling",
    "products",
    "account-setup",
    "agent-access",
    "oauth"
  ],
  "updated": "2026-09-05",
  "published": "2026-09-05",
  "canonicalPath": "/products/google-calendar",
  "previewImageAlt": "Can My Agent Use product guide for Google Calendar: OAuth, availability and event actions.",
  "integrations": [
    {
      "kind": "mcp",
      "status": "official",
      "detail": "Google documents a remote Calendar MCP server at calendarmcp.googleapis.com/mcp/v1 in Developer Preview. The host, OAuth client, preview eligibility, and Workspace policy still matter; see the tool references for action-specific access.",
      "sourceIds": [
        "mcp",
        "release-notes",
        "preview"
      ]
    },
    {
      "kind": "mcp-apps",
      "status": "unknown",
      "detail": "The reviewed Google pages establish remote MCP tools and compatible hosts, but do not establish an interactive MCP Apps interface or a Google Calendar app-rendering contract. Do not infer MCP Apps support from MCP support.",
      "sourceIds": []
    },
    {
      "kind": "api",
      "status": "official",
      "detail": "Google’s Calendar API v3 provides documented REST methods for listing and retrieving events, querying free/busy, and creating, updating, or deleting events. OAuth scopes and the authenticated user’s calendar role determine the effective boundary.",
      "sourceIds": [
        "scopes",
        "events-list",
        "events-get",
        "events-insert",
        "events-update",
        "events-delete",
        "freebusy",
        "sharing"
      ]
    },
    {
      "kind": "cli",
      "status": "community",
      "detail": "The googleworkspace/cli repository documents a dynamically generated gws CLI for Google Workspace APIs, including Calendar helpers and agent skills. Its README explicitly says it is not an officially supported Google product; its OAuth credentials and local execution remain the operator’s responsibility.",
      "sourceIds": [
        "gws-cli",
        "gws-context",
        "gws-calendar-recipe"
      ]
    },
    {
      "kind": "local-files",
      "status": "unknown",
      "detail": "No reviewed first-party Google source establishes a local-file workspace for operating Calendar data. A CLI’s local credential file or local installation is not evidence that an agent can use arbitrary calendar files offline.",
      "sourceIds": []
    }
  ]
}
---

Google Calendar is a good fit for a bounded scheduling task after a person has connected an existing account. The useful first handoff is simple: ask for the next three events on `primary`, or ask whether a named interval is free. The agent can report event IDs, start and end times, and the calendar time zone without creating an invitation or changing data. This guide records documented routes, not a live test.

## Account to first useful task

Google’s browser help describes signing in to Calendar with a Google Account, and its Calendar API quickstart requires a Google Cloud project plus a Google account with Calendar enabled. That is an account prerequisite, not proof that an agent can create an account. Treat signup, email or phone verification, recovery setup, and any Workspace domain purchase as human work. [Create a Google Account](https://support.google.com/accounts/answer/27441?hl=en); [Get started with Google Calendar](https://support.google.com/calendar/answer/2465776?hl=en); [Python quickstart](https://developers.google.com/workspace/calendar/api/quickstart/python).

For an API integration, enable the Calendar API in a Cloud project, configure the OAuth consent screen, create a client, and send the person through Google’s authorization screen. Google’s quickstart calls its simplified flow appropriate for testing and recommends the full authorization guidance for production. OAuth provides the access token and, when the application asks for offline access, a refresh token; the person chooses the account and accepts the requested scopes. [Python quickstart](https://developers.google.com/workspace/calendar/api/quickstart/python); [Using OAuth 2.0](https://developers.google.com/identity/protocols/oauth2).

The scope is the real data boundary. For a read-only task on calendars the user owns, `https://www.googleapis.com/auth/calendar.events.owned.readonly` is narrower than the broad Calendar scope. `https://www.googleapis.com/auth/calendar.freebusy` is suitable for availability-only queries. `calendar.events.readonly` reads events across accessible calendars, while `calendar.events.owned` permits creating, changing, and deleting events on calendars the user owns. The broad `calendar` scope includes sharing and permanent deletion across accessible calendars. [Choose Google Calendar API scopes](https://developers.google.com/workspace/calendar/api/auth).

The prompt supplies another boundary, but it is an application rule. Asking an agent to “look at one meeting” does not turn a mailbox-wide or calendar-wide OAuth grant into a one-event token. A host should enforce the smaller task in its tool arguments and display the actual granted scopes. A person can review or remove a linked app from Google Account settings; removal stops future access, while data already copied by the app may require a separate deletion request. [Manage links between your Google Account & apps from other developers](https://support.google.com/accounts/answer/13533235?hl=en); [How user authorization works](https://developers.google.com/identity/oauth2/web/guides/how-user-authz-works).

## Google’s first-party Calendar MCP preview

Google documents a remote Calendar MCP server at `https://calendarmcp.googleapis.com/mcp/v1`, using HTTP and OAuth 2.0. The setup requires a Cloud project, Google Calendar API, Calendar MCP API, and an MCP host. Its documented starter scopes are `calendar.calendarlist.readonly`, `calendar.events.freebusy`, and `calendar.events.readonly`; those are read-only scopes. Access also requires enrolling in the Developer Preview: agree to its terms, submit Google Workspace account and Cloud project details, and allow your email to be added to the program’s Google Group so Google can verify the account and register the project. [Configure the Calendar MCP server](https://developers.google.com/workspace/calendar/api/guides/configure-mcp-server); [Developer Preview Program](https://developers.google.com/workspace/preview).

The documented tool list is unusually concrete: `list_calendars`, `list_events`, `get_event`, `suggest_time`, `create_event`, `update_event`, `delete_event`, and `respond_to_event`. The create and update references require either `https://www.googleapis.com/auth/calendar` or `https://www.googleapis.com/auth/calendar.events`; the delete reference documents the same two scopes. The setup scopes do not by themselves establish write authority. The release notes date the MCP preview announcement to April 22, 2026. The reviewed sources establish MCP tools, not an interactive MCP Apps surface. [create_event](https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/create_event); [update_event](https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/update_event); [delete_event](https://developers.google.com/workspace/calendar/api/v3/reference/mcp/tools_list/delete_event); [Google Calendar API release notes](https://developers.google.com/workspace/calendar/release-notes).

Google warns that event data can contain indirect prompt injection. The setup guidance recommends trusted tools, caution with untrusted event content, screening prompts and responses, and reviewing every action. For this reason, the first task should read a bounded agenda or free/busy window. A write-capable tool should show the exact proposed mutation and wait for a human decision. [Configure the Calendar MCP server](https://developers.google.com/workspace/calendar/api/guides/configure-mcp-server).

## API actions and human handoffs

The REST API’s `events.list` returns events for a specified calendar, supports time bounds, free-text search, pagination, and the calendar’s time zone. `events.get` retrieves one event by Calendar event ID. For a first task, use `calendarId=primary`, a short `timeMin`/`timeMax` window, `singleEvents=true` when recurring instances need expansion, and a small `maxResults`; treat a non-empty `nextPageToken` as evidence that the page is incomplete. [Events: list](https://developers.google.com/workspace/calendar/api/v3/reference/events/list); [Events: get](https://developers.google.com/workspace/calendar/api/v3/reference/events/get).

`freebusy.query` returns busy ranges for requested calendars and groups. It is useful when the person asks “when are we both free?” without exposing event details, but it still requires the relevant availability authorization and can fail when a calendar is missing or a group exceeds the documented expansion limits. The pinned community `gws` recipe follows this pattern, querying free/busy before proposing a slot. [Freebusy: query](https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query); [Find Free Time Across Calendars](https://github.com/googleworkspace/cli/blob/a3768d0e82ad83cca2da97724e46bea4ff0e6dbd/skills/recipe-find-free-time/SKILL.md).

Creating an event uses `events.insert` on a calendar where the authenticated user has write access. Start and end are required. Adding attendee email addresses makes the event appear on attendees’ primary calendars according to their invitation settings, and `sendUpdates=all` or `externalOnly` can send notifications. This is why the first task avoids external invitations. [Create events](https://developers.google.com/workspace/calendar/api/guides/create-events); [Invite users to an event](https://developers.google.com/workspace/calendar/api/concepts/inviting-attendees-to-events).

Updating is a full resource replacement, so a safe client should `get` the event, preserve fields it did not intend to change, and use an ETag-aware update. The update can notify guests about changes. Deleting requires a write scope and can also notify guests through `sendUpdates`; an apparently successful empty response means the API accepted the deletion, so a client should fetch or list again where the route permits to verify the resulting state. [Events: update](https://developers.google.com/workspace/calendar/api/v3/reference/events/update); [Events: delete](https://developers.google.com/workspace/calendar/api/v3/reference/events/delete).

Calendar ACLs add a second boundary after OAuth. `freeBusyReader` exposes free/busy only; `reader` hides private event details; `writerWithoutPrivateAccess` can read and write non-private events while private events remain busy blocks; `writer` can read and write event details and ACLs. A token with a write-capable scope cannot bypass a calendar role or a Workspace policy. [Calendar sharing](https://developers.google.com/workspace/calendar/api/concepts/sharing).

## OAuth, admin, and operational limits

An OAuth app in Testing is limited to up to 100 listed test users. Test-user authorizations expire seven days after consent, and an offline refresh token received by that client also expires; the basic identity-only exception does not cover Calendar data scopes. In Production, sensitive-scope verification may still be required, and Workspace administrators or account protections can block access. [Manage App Audience](https://support.google.com/cloud/answer/15549945?hl=en); [Choose Google Calendar API scopes](https://developers.google.com/workspace/calendar/api/auth).

Workspace administrators can inspect an app’s client ID, requested scopes, ownership, and verification status, then set access to Trusted, Limited, Specific Google data, or Blocked. Restricting a service can stop untrusted apps and revoke existing tokens. The admin action requires the relevant security privilege, so an agent cannot infer approval from a user’s successful OAuth screen. [Control which apps access Google Workspace data](https://support.google.com/a/answer/7281227?hl=en).

As of the current Calendar quota documentation, new projects created on or after May 1, 2026 are subject to the updated API model, while projects that used the API between November 2025 and April 2026 retain their previous quotas. The API page lists 10,000 requests per minute per project and 600 requests per minute per user per project, plus a one-million-request daily billing threshold. Standard Calendar API use is currently available at no additional cost; overage billing is planned later in 2026 with at least 90 days’ notice. The MCP service uses a separate query-cost metric: `delete_event` costs 10 units and the other listed Calendar MCP tools cost 1 each, so raw API request counts should not be applied unchanged to MCP calls. Shared-service and burst write limits still apply, and Google recommends truncated exponential backoff. [Usage limits](https://developers.google.com/workspace/calendar/api/guides/quota).

## CLI and local-file boundaries

The `gws` repository at reviewed commit `a3768d0e82ad83cca2da97724e46bea4ff0e6dbd` documents a dynamic Google Workspace CLI that reads Google Discovery documents at runtime, returns structured JSON, and includes Calendar helpers such as `+agenda` and `+insert`. Its own README also says, “This is not an officially supported Google product.” Attribute this route to the `googleworkspace/cli` maintainers, not to Google Calendar as an official CLI. The repository’s agent guidance recommends schema discovery, field masks, and dry-run validation for mutations. [Google Workspace CLI](https://github.com/googleworkspace/cli/tree/a3768d0e82ad83cca2da97724e46bea4ff0e6dbd); [Google Workspace CLI Context](https://github.com/googleworkspace/cli/blob/a3768d0e82ad83cca2da97724e46bea4ff0e6dbd/CONTEXT.md).

The CLI can be a useful terminal route for an operator who installs it, configures a Cloud project, and completes OAuth. That local installation and its credential file do not make Calendar a local-file product: no reviewed Google source describes reading or editing an offline calendar file as an agent workflow. Keep the CLI row separate from MCP and keep local-files unverified.

Google Workspace pricing and Calendar’s appointment-schedule documentation show that paid plans and premium features exist, including trial or subscription paths. They do not document an external agent completing checkout, adding Workspace users, or changing billing. Record “not verified” for subscribe/billing until a source establishes that exact route and a separate authorized test covers it. [Compare Flexible Pricing Plan Options](https://workspace.google.com/pricing?hl=en); [Create an appointment schedule](https://support.google.com/calendar/answer/10729749?hl=en).

## Sources

Every source in the structured record was opened or read on 2026-09-05. The dates below are editorial review dates; they are not claims that every page was published on that date.
