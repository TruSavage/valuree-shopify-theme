# Phase-by-Phase Implementation and Testing Plan

Each phase uses `feature/valuree-membership-platform`, ends with a reviewable commit, reports files/tests/open issues, and stops for owner approval. No phase is merged or published automatically.

## Phase 0 — Inspection and architecture

Deliverables: current-state assessment, architecture, data model, security and entitlement plan, implementation plan, owner decisions. No provider integration or production data.

Exit criteria: branch safety verified; documents reviewed; provider-independent architecture approved.

## Phase 1 — Public foundation

- Complete portable Shopify theme structure including snippets and locales.
- Announcement bar, premium navigation, couple-led hero, How It Works, matching explanation, product preview, benefits, example results, advanced features, privacy/trust, pricing, FAQ, final CTA and footer.
- Public page templates: How It Works, Membership, About, FAQ, Contact and owner-review policy drafts.
- Member-access and account-entry presentation without falsely claiming the backend is active.
- Responsive, keyboard, focus, contrast, reduced-motion and semantic baseline.

Tests: Theme Check, schema/JSON validation, JavaScript lint/format, mobile breakpoints, keyboard smoke test, automated basic accessibility scan where available.

## Phase 2 — Authentication and membership

- Stop first for subscription-provider approval.
- Create subscription product/selling plan through the approved provider.
- Implement trusted account mapping, verified webhooks, entitlement projection, protected routes, billing status and management link.
- Add `.env.example`, setup documentation and deny-by-default membership status states.

Tests: active/expired/cancelled/refunded/unknown states; replayed webhook; invalid signature; wrong customer; stale cache; reconciliation recovery.

## Phase 3 — Couple connection

- Migrations and RLS for profiles, couples, membership and invitations.
- Create, preview, accept, revoke, regenerate and expire invitations.
- Confirm join, enforce two-member limit, leave/disconnect workflow and empty/error states.

Tests: token guessing/rate limits, expiry, reuse, wrong account, concurrent acceptance, unauthorized couple reads, disconnection revocation.

## Phase 4 — Private date generator

- Accessible save-and-resume multi-step check-in with canonical values.
- Server-private submissions and readiness states.
- Separate deterministic matching package, curated seed library, compatibility scoring, hard exclusions, progressive soft fallback and compromise logic.
- Results, explanations, itineraries, alternatives and safe fallback disclosures.

Tests: canonical location values; scoring stability; partner privacy; hard exclusions never relaxed; fallback order; compromise eligibility; no-result safety; unauthorized session access.

## Phase 5 — Saved dates and history

- Save/unsave, schedule, complete, private rate, shared/private notes, history pagination and similar/repeat actions.
- Feedback signals designed for later recommendation weighting.

Tests: ownership, rating privacy, state transitions, duplicate actions, pagination, deleted/disconnected couple behavior.

## Phase 6 — Premium features

- Surprise mode, remix, passport, private-match bucket list, optional challenges, recreational insights and memory timeline.
- Notification and local-discovery boundaries remain disabled until providers and consent are configured.

Tests: surprise information boundaries, private bucket entries, opt-out, remix invariants, passport eligibility and non-deceptive progress.

## Phase 7 — Production hardening

- Threat review, RLS audit, dependency/secret scanning, webhook failure drills, data deletion, backup/recovery and incident procedures.
- WCAG 2.2 AA review, performance budgets, device/browser matrix, load/rate-limit tests and privacy review.
- Deployment, rollback, monitoring and launch checklist.

## Continuous quality gates

- No secrets or customer data in commits.
- Migration review and rollback notes.
- Unit tests for domain/matching logic; integration tests for RLS and API; end-to-end tests for critical journey.
- Formatting, lint, build, Theme Check, secret scan and dependency audit in CI.
- Development-only sample data clearly labeled.
- No fabricated venue, weather, pricing, availability, statistics or testimonials.
