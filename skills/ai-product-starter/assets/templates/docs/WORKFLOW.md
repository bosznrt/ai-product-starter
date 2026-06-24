<!-- TEMPLATE: WORKFLOW.md — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. -->

# WORKFLOW — engineering process

> The rules every ticket follows. The ticket tables + status/PR/release tracking live in [`BACKLOG.md`](./BACKLOG.md).

## Roles / operating model

<!-- guidance: PRESERVE this table. Three roles: non-coding PO, AI orchestrator (reviews, does not implement/merge/release), specialist implementers. Keep "the AI assistant" tool-agnostic. -->

| Who | Role |
|---|---|
| **User** | Product Owner — direction / prioritization / approval · **merging a PR + releasing to production = humans only** |
| **AI assistant (main)** | Orchestrator + QA / tech lead — refine tickets, dispatch to specialist agents, review quality / tests / reuse, enforce the DoD, update the backlog · **does NOT implement / merge / release** (does repo admin: branch, update backlog, prep release notes) |
| **Specialist agents** | Implement (TDD-first) according to the type of work |

**Dispatch — which ticket goes to which agent:**

<!-- guidance: Map ticket type → specialist agent for YOUR stack. Examples below; adjust to the agents/roles you actually use. The principle (right specialist per ticket) is what matters. -->

- API / schema / service / business logic → **{{BACKEND_AGENT}}**
- UI / frontend → **{{FRONTEND_AGENT}}**
- e2e / test hardening / verification suite → **{{QA_AGENT}}**
- auth / payment / security-sensitive → add a review by **{{SECURITY_AGENT}}**
- quality / reuse / simplification pass → **{{SIMPLIFIER_AGENT}}**

## Locked decisions (defaults — changeable, but change deliberately)

<!-- guidance: The stack/tooling decisions already made, so no one re-litigates them per ticket. Replace every line with YOUR locked choices. Keep the section — it prevents drift. -->

- **Stack:** {{STACK}}
- **Package manager:** {{PACKAGE_MANAGER}} (use only this — no others)
- **Tests:** {{TEST_FRAMEWORK}} (+ {{E2E_FRAMEWORK}} for e2e)
- **AI / external services:** {{AI_STACK}} <!-- guidance: SDK + model ids; "read the provider reference before writing AI code." Delete if no AI. -->
- **Data store:** {{DATA_STORE}}
- {{OTHER_LOCKED_DECISION}} <!-- guidance: auth, hosting, design-system source, money/precision rule, etc. -->

## Global DoD (every ticket)

<!-- guidance: PRESERVE. The Definition of Done that gates every PR. Keep TDD, typecheck/lint green, tests green, the data-scoping rule, and "update the backlog". Adjust domain-specific lines. -->

- **TDD mandatory:** write a failing test → make it pass → refactor · **all logic code is covered, no exceptions**
- typecheck + lint pass · all tests **green**
- {{DATA_SCOPING_RULE}} <!-- guidance: e.g. "every query scoped by `userId`" / tenant isolation. Delete if N/A. -->
- {{DOMAIN_DOD_RULE}} <!-- guidance: e.g. money as integer minor units; AI failure degrades, never blocks the user. -->
- {{UI_DOD_RULE}} <!-- guidance: e.g. "UI uses design tokens + components only — no hardcoded styles". Delete if no UI. -->
- atomic commits with clear messages · affected docs updated · **open PR into `{{STAGING_BRANCH}}` + update status/PR/prod in the backlog table**

## Reuse-first (DRY)

Before implementing any ticket — search for existing util / module / component to reuse first (shared utils, service modules, data-access helpers, schemas, UI components). **No duplicated logic.** QA review rejects duplication.

## Workflow per ticket (TDD + Git / PR / Review / Release)

<!-- guidance: PRESERVE these nine steps end-to-end. They encode the gates: independent AI review (no self-review), human merge, human release, backlog update. Only swap branch names and the review command. -->

1. **AI assistant dispatches** the ticket → the right specialist agent (by type).
2. **Branch** from `{{STAGING_BRANCH}}` → `feat/T<id>-<slug>`.
3. **RED** — write tests reflecting the acceptance criteria; they must fail first.
4. **GREEN** — minimal code to pass → **REFACTOR** clean, tests still green + typecheck/lint pass.
5. **Open PR → `{{STAGING_BRANCH}}`** (CI green) — the implementer opens it **and requests review by tagging the independent AI reviewer** · ticket status = `🔬`.
6. **Independent AI review — no self-review:** **tag your independent AI reviewer** (`@claude review` / Copilot / `@codex review` — any independent AI; the author/orchestrator must NOT review or approve their own PR) → author addresses feedback until it passes. *(Manual trigger, not auto-review — the result is visible in the PR.)*
7. **Merge = humans only** into `{{STAGING_BRANCH}}` (not an agent / the AI assistant) → the human tells the AI assistant it's merged.
8. **AI assistant updates the backlog:** `🟢` + PR#.
9. **Release → `{{PRODUCTION_BRANCH}}`** (human approves, tag `vX.Y.Z`) → AI assistant updates `🚀` + prod version.

> **Gates:** review = an independent AI (not the author) · **merge + release = humans only** · the AI assistant updates the backlog after a human reports the change.

## PR & commit conventions

<!-- guidance: Conventional-Commits flavored. Adjust the branch base names; keep "1 PR = 1 ticket" and the auto-loaded PR template. -->

- **Branch:** `<type>/T<id>-<slug>` — type: `feat` / `fix` / `refactor` / `test` / `chore` / `docs` (e.g. `feat/T3.1-card-api`)
- **Commit & PR title:** Conventional Commits → **`<type>(T<id>): <summary>`** (e.g. `feat(T3.1): card API + validation`)
- **Base branch:** PRs always open into **`{{STAGING_BRANCH}}`** (never `{{PRODUCTION_BRANCH}}`)
- **1 PR = 1 ticket** (small, easy to review) · CI must be green before requesting review
- **PR body:** use [`.github/pull_request_template.md`](../.github/pull_request_template.md) — GitHub loads it automatically (Ticket / What-why / How / Tests / DoD / Screenshots / Deps / Review)

## Test-intensity tiers

<!-- guidance: PRESERVE the three-tier idea. Put YOUR most failure-prone modules in the critical tier. The rule at the bottom is the spine: no untested logic. -->

- 🔴 **critical (cover every edge / branch):** {{CRITICAL_MODULES}} <!-- guidance: the modules where a bug is most costly — money, core domain calc, AI parsing, quota/payment. -->
- 🟠 **medium:** API + validation, data-access scoping
- 🟡 **light:** UI (render + main interactions)

> No logic code without tests — if something is hard to test, the design must be split so it can be tested first.

## Branch / release model

<!-- guidance: PRESERVE feature → staging → production with semver tags. Map the branch names to yours. -->

`feat/*` → PR → **`{{STAGING_BRANCH}}`** → release → **`{{PRODUCTION_BRANCH}}`** (tag `vX.Y.Z`, semver)

- Each milestone release bumps the version (e.g. first milestone → `v0.1.0`, next → `v0.2.0`) · *initial bootstrap (T0.1) sets up `{{PRODUCTION_BRANCH}}` + `{{STAGING_BRANCH}}`.*
