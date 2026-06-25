<!-- TEMPLATE: AGENTS.md (plan-path "build brief") — use this on the PLAN PATH, where the docs are a hand-off and no code is being written yet. Short on purpose. When the project actually starts building, replace it with the full AGENTS.md template (assets/templates/AGENTS.md), which adds the git/review/TDD workflow. -->

# AGENTS.md — {{PROJECT_NAME}} (build brief)

This is the short brief for whoever ends up building {{PROJECT_NAME}} — a developer
or an AI assistant. The full plan lives in [`docs/`](./docs/); start with
`ROADMAP.md` (what ships, in what order) and `BACKLOG.md` (the feature list).

## What we're building
{{ONE_PARAGRAPH}}
<!-- guidance: the product, who it's for, and the one defensible edge. Plain language. -->

## How the work should run
- **{{OWNER_NAME}} = Product Owner** — decides direction and priorities, reviews,
  and gives the go-ahead. Not writing the code.
- **Builder (a developer or an AI assistant) = implementer** — builds one item from
  `docs/BACKLOG.md` at a time, simplest version first, and shows it for review.
- **Human go-live gate** — the PO (or someone they trust) reviews before anything
  goes to real users; the builder doesn't ship on its own.

## Where to start
1. Read `docs/ROADMAP.md` and `docs/SPEC.md` (the features as plain user stories).
2. Pick the top item in `docs/BACKLOG.md` and keep that file updated as the
   source of truth for "what's next."
3. When building begins for real, set up the full dev workflow (branches, reviews,
   test-first) — ask your AI assistant to, or re-run the `ai-product-starter` build
   path.

<!-- guidance: keep this short. Deeper engineering conventions belong in the full AGENTS.md once building starts — don't add them here, or you'll re-impose dev machinery on a plan that isn't being built yet. -->
