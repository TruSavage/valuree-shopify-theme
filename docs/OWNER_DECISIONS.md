# Owner Decision Log

Phase 0 does not make the following provider, legal or data-lifecycle decisions.

## Required before Phase 1

1. **Repository topology** — Approve a separate private application repository for the trusted API, Supabase migrations and tests (recommended), while this repository remains theme-only.
2. **Public policy drafts** — Confirm that Phase 1 may create clearly labeled Privacy, Terms, Subscription and Cancellation drafts for later legal review.
3. **Brand image rights** — Confirm whether generated couple photography may be used at launch or should be replaced with licensed/commissioned photography.

## Required before Phase 2

4. **Subscription provider** — Evaluate and select Shopify's first-party subscription option or an approved third-party provider. Confirm current price, digital-membership eligibility, customer portal, dunning, cancellation, webhook and API behavior. No paid provider will be installed without approval.
5. **Customer account strategy** — Select Shopify's current customer accounts with a trusted identity bridge (recommended) or a separate application authentication experience.
6. **Trusted runtime** — Select hosting for the server/API boundary. Supabase Edge Functions may cover many operations; Shopify-specific session/app-proxy requirements may justify a dedicated runtime.
7. **Billing rules** — Decide trial (default none), grace period (default disabled), cancellation effective date, refund effect, failed-payment behavior and reactivation behavior.

## Required before Phase 3

8. **Couple disconnection retention** — Decide what happens to shared saved dates, notes, memories and history when partners disconnect.
9. **Invitation expiry** — Approve a default lifetime (recommendation: 24 hours) and regeneration behavior.
10. **One active couple rule** — Approve limiting each profile to one active couple at launch.

## Required before Phase 5/6

11. **Private-data retention** — Approve retention periods for drafts, raw preference submissions, logs, deleted accounts and webhook records.
12. **Photo storage** — Decide whether memory uploads ship initially and approve storage quotas, moderation/reporting and deletion behavior.
13. **Notifications** — Choose channels/provider and consent rules; default is no reminders until configured.
14. **Calendar integration** — Choose download-only ICS or third-party account integrations.
15. **Local discovery and weather** — Select providers and budget before live venue or weather data is shown.

## Recommended Phase 0 approvals

- Approve the separate private application repository.
- Approve policy drafts with conspicuous owner/legal-review labels.
- Use generated photography only for development; decide launch licensing before publication.
- Evaluate Shopify's first-party subscription option first.
- Use no trial and no grace period until explicitly approved.
- Use one active couple per profile and 24-hour single-use invitations for the initial design.
