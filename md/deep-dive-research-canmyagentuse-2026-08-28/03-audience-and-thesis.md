---
title: Audience and Thesis
file: 03-audience-and-thesis.md
audience: Builder / Architect; secondary Evaluator / Skeptic
last_updated_utc: 2026-08-28T19:30Z
confidence: high
sources_count: 4
---

# Audience and Thesis

## Reader Promise
Understand the product thesis from the viewpoint of the people who must implement or trust the compatibility data.

## Summary (≤120 words)
The winning abstraction is not “Can I Use for AI brands.” It is “Can I Use for versioned agent capabilities.” The site should let a builder start from either a feature or a harness, but both routes converge on the same atomic assertion model. Evidence, qualifiers and role direction are first-class because emerging agent protocols are asymmetric and rapidly changing.

## What We Found
### Thesis

**Feature-first UX, evidence-first data.** The familiar grid is the skim layer. Every cell is only a projection of a richer assertion record.

### Pain points to solve heavily

- Brand pages use broad words such as “MCP support” when only selected primitives/transports are implemented.
- Hosted agents change without browser-like public version strings.
- “Plugin,” “skill,” “agent,” “extension,” and “tool” overlap across vendors but are not structurally equivalent.
- A protocol can have client and server/agent roles; support direction matters.
- Plan, admin policy, auth method and preview flags can change compatibility without changing product version.
- Standards-project compatibility lists are useful but should not be silently promoted to first-party conformance.

### What to extract heavily

Normative revisions, capability negotiation, transports, auth, package manifests, file discovery rules, extension points, release/changelog evidence, product surface identity, and conditional support.

### What to defer

Model-quality benchmarks, subjective coding quality, token pricing comparisons, generic agent rankings and “best IDE” opinions are adjacent products, not compatibility facts.

## Confidence Notes
High.

## Open Threads
See `21-open-questions.md` for unresolved governance, versioning, evidence, and test-safety questions.

## Sources Used
- [S-022] MCP lifecycle and capability negotiation — https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
- [S-043] Agent Skills specification — https://agentskills.io/specification
- [S-049] Agent Plugins 1.0 specification — https://agent-plugins.org/specification/1.0
- [S-057] Agent Client Protocol architecture — https://agentclientprotocol.com/overview/architecture
