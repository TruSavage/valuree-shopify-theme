# Proposed Supabase Data Model

All primary keys use UUIDs. All tables include `created_at` and `updated_at`; sensitive state changes also produce immutable audit events. Human-facing invitation codes are random, non-sequential, hashed at rest, single-use, and expiring.

## Identity and entitlement

| Table | Purpose | Important fields |
|---|---|---|
| `profiles` | Application profile mapped to an authenticated identity | `id`, `auth_user_id`, `shopify_customer_id`, display preferences, deletion state |
| `subscription_entitlements` | Server-maintained access projection | `profile_id`, provider, contract ID, status, period end, grace end, last verified timestamp |
| `subscription_events` | Idempotent webhook processing ledger | provider event ID, topic, payload hash, processed state, attempt count |
| `consent_records` | Versioned privacy/terms consent | profile ID, document type/version, timestamp, source |

## Couples and invitations

| Table | Purpose | Important fields |
|---|---|---|
| `couples` | Private couple space | `id`, status, created by, disconnected timestamp |
| `couple_members` | Membership of a couple | couple ID, profile ID, role, joined/left timestamps |
| `partner_invitations` | Expiring single-use invitation | couple ID, token hash, inviter, expires/revoked/accepted timestamps, accepted by |
| `couple_events` | Security-relevant couple lifecycle audit | actor, action, couple ID, minimal metadata |

Constraints: a profile belongs to at most one active couple at launch; a couple has at most two active members; invitation acceptance is transactional and locks the invitation row.

## Private matching

| Table | Purpose | Visibility |
|---|---|---|
| `generator_sessions` | One matching/check-in round | Shared status, not private answers |
| `preference_submissions` | Canonical private answers per partner | Owner and trusted server only |
| `recommendations` | Derived ranked results | Both active couple members |
| `recommendation_reasons` | Non-revealing fit explanation and relaxation disclosure | Both active couple members |
| `recommendation_actions` | Save, hide, remix, choose, schedule | Both members as permitted |

Canonical values are represented by constrained enums or lookup tables. Location values are exactly `Stay In`, `Go Out`, or `Either` at the domain boundary; database storage may use stable slugs such as `stay_in`, `go_out`, and `either` with explicit display mapping.

Hard restrictions—accessibility, dietary constraints, safety constraints, and explicit exclusions—are stored separately from soft preferences so fallback logic cannot relax them accidentally.

## Date content

| Table | Purpose |
|---|---|
| `date_ideas` | Versioned core date metadata and active state |
| `date_idea_tags` | Mood, atmosphere, energy, season, category, indoor/outdoor and preparation tags |
| `date_itinerary_steps` | Ordered steps |
| `date_alternatives` | Lower-cost, shorter, weather, indoor and accessibility variants |
| `date_requirements` | Materials, reservations, travel, accessibility and dietary metadata |

Seed content begins small and reviewed. Development sample data is labeled and cannot be represented as live venue availability.

## History and premium features

| Table | Privacy notes |
|---|---|
| `saved_dates` | Couple-shared state |
| `scheduled_dates` | Couple-shared schedule; calendar tokens remain server protected |
| `completed_dates` | Couple-shared completion record |
| `private_ratings` | Each partner can read only their own rating; aggregates may be derived |
| `shared_notes` | Visible to both partners |
| `private_notes` | Visible only to author |
| `memories` | Shared only after explicit upload/consent rules |
| `passport_progress` | Derived from eligible completed dates |
| `bucket_list_entries` | Private until a mutual-interest match or explicit reveal |
| `challenges` / `couple_challenges` | Optional participation |
| `notification_preferences` | Per-profile consent and channel settings |

## Deletion and retention

- Account deletion is a server-side workflow with identity re-verification.
- Private user-authored data is deleted or anonymized according to the approved policy.
- Couple disconnection immediately revokes shared access and invitation tokens.
- The owner must approve rules for shared records before implementation: delete, duplicate to each member, or retain an immutable minimal history.
- Webhook and security logs minimize personal data and use documented retention periods.

## Indexes and concurrency

- Unique partial indexes enforce active couple membership and active entitlement invariants.
- Composite indexes cover couple history pagination, session readiness, active invitations, and entitlement lookup.
- Recommendation generation uses transaction-safe session state and an idempotency key.
- Invitation acceptance and subscription event processing use database transactions and conflict-safe upserts.
