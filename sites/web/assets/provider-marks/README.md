# Provider downloads

These are unmodified product-identification assets downloaded from provider-controlled
sites on 2026-09-04. They are locally vendored for deterministic generation, privacy,
and reliable image delivery. They are **not licensed under this repository's MIT
license**; copyright and trademark rights remain with their respective owners.

The typed manifest in `packages/catalog/src/provider.ts` contains every original URL,
provider policy URL, exact product mapping, date, and SHA-256 checksum. The generator
checks those fingerprints before copying assets to `public/provider-marks`. It never
fetches the network at build time. PNG/WebP bytes and SVG artwork remain unchanged.

See `ops/PROVIDER-MARK-REVIEW-2026-09-04.md` for policy restrictions and review limits.
A recorded source and checksum do not imply permission or legal clearance. Lobe and
Simple Icons package assets continue to be sourced from pinned installed releases;
they are not duplicated in this directory.
