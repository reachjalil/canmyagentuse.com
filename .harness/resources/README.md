# Shared Harness Resources

Portable skills and wrappers used by this repository's generated harness
surfaces. Edit sources here, then run:

```sh
pnpm harness:validate
pnpm harness:preview
pnpm harness:activate
```

`.harness/resources/.harnessIgnore` controls which catalog skills are projected.
Keep unused skills in the catalog unless they should be removed entirely.

## Conversation work

`cmau-find-conversations`, `cmau-discussion-to-site` and `cmau-compose-replies`
share the repository workflow at `ops/conversations/README.md`. Use its task
files to assign independent researchers, site editors and reply writers.
