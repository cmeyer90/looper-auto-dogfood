# 0001 Add a truncate() helper to the string utils

Status: ready
Branch: loopdog/implement/2
Issue: #2

## Goal

Add a `truncate(input, maxLen)` helper to the string utils library.

## Background

It would be useful to have a `truncate` function in the library. The function
shortens a string to a maximum length and appends a single ellipsis character
(`…`) when it had to cut. If the string is already within the limit it is
returned unchanged.

Assumption: `maxLen` refers to the total length of the returned string,
including the ellipsis when appended. Example: `truncate('hello world', 8)`
→ `'hello w…'` (7 chars + 1 ellipsis = 8 total). This matches the example in
the issue.

Assumption: `maxLen <= 0` edge case — return an empty string (no ellipsis
possible). Not stated in the issue; recording this assumption here.

## Scope

<!-- loopdog:scope -->
In scope: src/index.ts (add + export `truncate`), test/index.test.ts (add `describe('truncate', …)`)
Out of scope: package.json, tsconfig.json, .loopdog/**, .github/**, changes to slugify or capitalize
<!-- /loopdog:scope -->

## Out Of Scope

- Changes to `slugify`, `capitalize`, or any other existing function
- Package configuration (`package.json`, `tsconfig.json`)
- Locale-aware or Unicode-grapheme-cluster truncation
- Custom ellipsis character support

## Acceptance Criteria

<!-- loopdog:acceptance-criteria -->
- [ ] `truncate('hello world', 8)` returns `'hello w…'` (test: test/index.test.ts)
- [ ] `truncate('hi', 8)` returns `'hi'` — no truncation when string fits (test: test/index.test.ts)
- [ ] `truncate('abc', 3)` returns `'abc'` — exact length, no ellipsis (test: test/index.test.ts)
- [ ] `truncate('abcd', 3)` returns `'ab…'` — truncation at limit (test: test/index.test.ts)
- [ ] `truncate('', 5)` returns `''` — empty string unchanged (test: test/index.test.ts)
- [ ] `truncate` is exported from `src/index.ts` and importable by consumers (test: test/index.test.ts)
- [ ] All existing `slugify` and `capitalize` tests continue to pass (test: test/index.test.ts)
<!-- /loopdog:acceptance-criteria -->

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

Each acceptance criterion above is tagged `test: test/index.test.ts` and will
be verified by running `npm test` (vitest). CI must be green with no regressions
before the PR is merged.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-14: groom: in-progress (run `run-groom-2-a2-d23cff67`).
- 2026-06-14: groom: complete — criteria written, scope declared, plan posted.

## Decisions

- Ellipsis character is the single Unicode character `…` (U+2026), not three dots `...`.
- `maxLen` counts characters in the final output string (including the ellipsis).
- When `maxLen <= 0`, return `''`.

## Risks / Rollback

Low risk. Additive change only. Rollback: revert the two-file addition. No
migrations, no config changes, no external dependencies.

## Final Summary

Fill this in before marking verified.
