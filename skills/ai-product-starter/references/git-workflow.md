# Git, review & release workflow

The branch/PR/review/release model to encode in `docs/WORKFLOW.md` and the PR
template. Adjust names to taste, but keep the gates.

## Branch model

```
feature branch  →  PR  →  staging  →  release  →  production
```

- **`production`** (often `main`) = what's live. Advances **only on releases**,
  tagged with semver (`vX.Y.Z`).
- **`staging`** = integration branch. Day-to-day PRs target this. Set it as the
  repo's **default branch** so PRs open against it by default.
- **`feature`** = `feat/<ticket-id>-<slug>` (or `fix/`, `refactor/`, `chore/`,
  `docs/`, `test/`). One PR = one ticket, small enough to review easily.

## Per-ticket flow

1. **Dispatch** the ticket to the right specialist (see `operating-model.md`).
2. **Branch** from `staging`.
3. **RED → GREEN → REFACTOR** — write a failing test that captures the acceptance
   criteria, make it pass with the simplest code, then clean up while green.
   Typecheck + lint + tests must pass.
4. **Open a PR into `staging`**, filled from the PR template, and **request an
   independent AI review** by posting the review trigger as a *comment* (see
   `ai-review-integrations.md`). Mark the ticket "in review" in the backlog.
5. **Independent AI review — no self-review.** The author addresses feedback until
   it's clean. The author / orchestrator never approves its own PR.
6. **A human merges** into `staging` (not the AI), then tells the AI.
7. The AI **updates the backlog**: status → merged, record the PR number.
8. **Release** (human-approved): when a phase/milestone is done, promote `staging`
   → `production`, tag `vX.Y.Z`. The AI updates the backlog with the prod version.

## Semver, simply

- Each shipped phase/milestone bumps the **minor** (`v0.1.0` → `v0.2.0`).
- Patch (`vX.Y.Z+1`) for fixes to a released phase.
- Stay on `0.x` until you call it production-grade, then `1.0.0`.

## Commit & PR conventions

- **Conventional Commits:** `type(scope): summary` — e.g. `feat(T3.1): card API`.
- **One PR = one ticket.** CI green before requesting review.
- PR body uses the template (Ticket / What & why / How / Tests / DoD / Deps /
  Review). Keep summaries in plain language a non-coding owner can follow.
- If your team credits the assisting AI as co-author, add a `Co-Authored-By:`
  trailer — but make sure the commit **author** is a real human identity (set
  `git config user.name` / `user.email` to an address tied to the git host, so
  commits link to a profile).

## Test intensity tiers

- 🔴 **critical** (money, billing, aggregation, auth, payments, anything
  irreversible): cover edge/branch cases exhaustively.
- 🟠 **medium** (API + validation, data-access scoping): cover the contract.
- 🟡 **light** (UI): render + key interactions.

No logic code ships without a test. If something is hard to test, that's a signal
to split it until it's testable.
