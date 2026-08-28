---
title: File upload limits and quota visibility
description: Document and expose per-file, per-message, per-project, duration, page, and rolling upload limits.
slug: upload-limits
locale: en
seoTitle: File upload limits comparison — Can My Agent Use
socialTitle: File upload limits and quota visibility
socialDescription: Compare file size, count, duration, page, project, and rolling upload limits by exact harness and plan.
llmSummary: Upload-limit records capture numeric size, count, page, duration, frequency, and storage quotas with their scope; accepting one test file does not establish the full operational envelope.
audience: Engineers sizing document and multimodal workloads.
contentKind: feature
status: published
tags: [perception, uploads, limits, quota]
updated: 2026-08-28
published: 2026-08-28
category: perception
summary: Record numeric attachment size, count, page, duration, storage, and rolling quotas.
specLabel: Measured product capability
aliases: [attachment limit, max file size, upload quota, file count limit]
parent: file-inputs
related: [context-window, usage-metering, rate-limit-disclosure]
resources:
  - title: Methodology
    href: /methodology
    kind: note
support: []
---

File support is not operationally useful without its limits. This row records per-file bytes, files per message or run, pages per document, audio or video duration, image dimensions, project storage, rolling daily or hourly quotas, and any separate organization cap.

Every number needs a scope: format, plan, model, client, workspace, region, and review date. Evidence should also describe the failure mode—preflight rejection, asynchronous processing failure, truncation, sampling, or silent omission—and whether the harness shows remaining quota before an upload.
