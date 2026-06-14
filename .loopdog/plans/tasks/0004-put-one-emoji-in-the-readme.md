# 0004 put one emoji in the readme

Status: planned
Branch: loopdog/implement/11
Issue: #11

## Goal

put one emoji in the readme

## Background

add a single emoji of your choice

**Assumption:** "single emoji" means exactly one emoji character total added to the README (not one per section). Proceeding on this basis.

## Scope

- `README.md` — add exactly one emoji character anywhere in the file

## Out Of Scope

- Any changes to source code (`src/`)
- Changes to existing tests beyond the new verification test
- Multiple emoji additions; structural or formatting changes to README beyond the single emoji

## Acceptance Criteria

- [ ] `README.md` contains at least one emoji character (test: test/readme-emoji.test.ts)

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

A new test file `test/readme-emoji.test.ts` will read `README.md` and assert it contains at least one emoji character using a Unicode emoji regex pattern. Runs as part of `npm test`.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-14: triage: needs-grooming (run `run-triage-11-a1-54083f91`).
- 2026-06-14: status ready -> planned (mirrored from issue label; label is authoritative).
- 2026-06-14: groom: in-progress (run `run-groom-11-a2-54083f91`).
- 2026-06-14: groom: complete — criteria + scope written; verdict ready (run `run-groom-11-a2-54083f91`).

## Decisions

- Assumption: "single emoji" = exactly one emoji character added total. If author meant something else, re-groom.

## Risks / Rollback

- Low risk: README-only change. Rollback = revert the README commit.

## Final Summary

Fill this in before marking verified.
