# 0006 include project description in readme

Status: ready
Branch: loopdog/implement/9
Issue: #9

## Goal

include project description in readme

## Background

looper dogfood is for testing loopdog

## Scope

**In scope:**
- README.md — adding or expanding the introductory description paragraph

**Out of scope:**
- Source code, tests, config, or any file other than README.md
- Restructuring or reformatting sections unrelated to the description

## Out Of Scope

- (none recorded yet)

## Acceptance Criteria

<!-- loopdog:acceptance-criteria -->
- [ ] README.md contains a project-description sentence near the top that includes the phrase "testing loopdog" or equivalent (test: grep -q "testing loopdog" README.md)
- [ ] The description appears before the "Development" section (manual)
<!-- /loopdog:acceptance-criteria -->

## Implementation Checklist

- [ ] (filled in by the implementation work cell)

## Test Plan

See acceptance criteria `test:` tags.

## Verification Log

Add dated entries here as work proceeds.
- 2026-06-14: triage: needs-grooming (run `run-triage-9-a1-cb3cf462`).
- 2026-06-14: status ready -> planned (mirrored from issue label; label is authoritative).
- 2026-06-14: groom: in-progress (run `run-groom-9-a1-cb3cf462`).

## Decisions

Record implementation decisions here, not only in chat.

## Risks / Rollback

Record risks and the rollback path before acting.

## Final Summary

Fill this in before marking verified.
