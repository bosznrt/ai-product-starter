---
name: ai-product-starter
description: >-
  Use when kicking off or bootstrapping a NEW software product or repository —
  especially AI-assisted projects — to lay the full planning foundation BEFORE
  any code: product/roadmap/monetization docs, architecture & data model, a
  design system, an AI strategy, an operating model (roles + gates), a TDD-first
  git/PR/AI-review/release workflow, and a phased execution backlog. Trigger this
  whenever someone says they are starting a new app, product, MVP, side-project,
  prototype, or startup; wants to "set up a repo properly" or "kick things off";
  asks for planning docs, a roadmap, an architecture doc, or a backlog; or wants
  a repeatable AI-driven development workflow — even if they never say the word
  "skill" or name this template. Tool-agnostic: the output works with Claude
  Code, Cursor, GitHub Copilot, Codex, Gemini, or any AI coding assistant.
---

# AI Product Starter

Bootstrap a new product repository the way a disciplined team would: **decide and
write down the plan before writing code.** This skill produces a coherent set of
planning documents, an operating model, and a git/review/release workflow so that
an AI assistant (and the humans steering it) can execute ticket-by-ticket with
high reliability.

The guiding belief: **documents are the source of truth, not the chat history.**
A teammate — or a fresh AI session, or a different AI tool entirely — should be
able to open the repo, read a handful of files, and know exactly what is being
built, how the work is run, and what to do next. Everything this skill creates
serves that goal.

## When this applies

Any "I'm starting something new" moment: a consumer app, a SaaS, an internal
tool, a CLI, a library, a hackathon project. Scale the output to the project (see
**Adapt to the project** below) — a weekend CLI does not need a pitch deck — but
the *spine* (operating model + architecture + workflow + backlog) is worth it
almost every time, because that is what makes AI-driven execution repeatable.

If the user is mid-project and just wants one doc, you can still use the matching
template here; you do not have to run the whole flow.

## The shape of what you produce

```
<repo>/
  AGENTS.md            # core driving file — read by most AI tools (THE source of truth)
  CLAUDE.md            # thin pointer to AGENTS.md (for Claude Code)
  README.md            # human landing page: vision, roles, doc map, getting started
  .github/
    pull_request_template.md
    workflows/         # optional AI-review workflow (e.g. claude.yml) — see ai-review-integrations.md
  docs/
    ROADMAP.md         # phases, feature master list, per-phase success metrics
    DESIGN.md          # MVP contract — user stories + acceptance criteria
    DESIGN-SYSTEM.md   # UI contract — tokens, components, wireframes (UI projects)
    ARCHITECTURE.md    # stack, module boundaries, data flow, conventions
    DATABASE.md        # data model, entities, enums, money/precision rules
    AI.md              # AI strategy, behavior specs, model choices, cost control
    WORKFLOW.md        # the engineering process — roles, gates, TDD, branch model
    BACKLOG.md         # phased ticket tables WITH per-ticket status/PR/release tracking
    MONETIZATION.md    # (commercial products) revenue model, pricing, unit economics
    PITCH-DECK.md      # (fundraising) investor deck
```

`AGENTS.md` is deliberately the spine. Most AI coding tools read an `AGENTS.md`
at the repo root; Claude Code reads `CLAUDE.md`. So generate `AGENTS.md` as the
real content and make `CLAUDE.md` a one-line pointer to it. This keeps the repo
**AI-agnostic** — no lock-in to a single assistant.

## Process

Work through these in order. Ask questions one at a time; do not dump a
questionnaire. Confirm each major doc's direction before writing the next — a
wrong roadmap makes every downstream doc wrong.

### 0 — Understand the product

Before anything, pin down the essentials. Pull what you can from the conversation;
ask only for what is missing:

- **What** is it, in one sentence? What is the single job of the v1?
- **Who** is it for, and what painful problem does it solve for them?
- **The wedge** — why this will win where alternatives do not (the defensible,
  specific thing). Vague "better UX" is not a wedge; name the concrete edge.
- **Platform** — web, mobile, CLI, service? What ships first?
- **Commercial?** Is there a business model (→ include MONETIZATION/PITCH-DECK),
  or is it internal/OSS (→ skip them)?
- **Domain landmines** — the rules that are easy to get wrong (money precision,
  timezones, billing cycles, compliance). These become a loud section in
  ARCHITECTURE.md and DATABASE.md, because they are where AI-written code fails.

State your understanding back in a few sentences and get a nod before proceeding.

### 1 — Lock the foundational decisions

These propagate everywhere, so decide them once, explicitly, and record them in
WORKFLOW.md under "Locked decisions":

- **Stack** (language, framework, DB) and **package manager**.
- **Repo structure** — single package or **monorepo**? Decide deliberately: if a
  second surface (mobile, a second service, a shared design system) is on the
  roadmap, a monorepo with shared packages pays off and is cheapest to adopt at
  the very start. If it is genuinely one app forever, keep it single. (This is a
  real fork — surface the trade-off and let the human choose.)
- **Money/precision rules** if money is involved — store integer minor units,
  never floats; pick one currency model. Put this in DATABASE.md.
- **Auth, testing tools, deployment target.**
- **AI usage** — which model(s), where AI runs, how failures degrade. → AI.md.

### 2 — Generate the docs

For each relevant doc, read the matching template in
`assets/templates/docs/<NAME>.md`, then fill it for THIS product. Templates are
skeletons with `{{PLACEHOLDERS}}` and inline `<!-- guidance -->` — replace the
guidance, keep the structure. Do not paste a template verbatim; it must describe
*this* product. Order: ROADMAP → DESIGN → ARCHITECTURE → DATABASE → AI →
(DESIGN-SYSTEM if UI) → (MONETIZATION/PITCH-DECK if commercial) → WORKFLOW →
BACKLOG. WORKFLOW and BACKLOG come last because they reference everything above.

### 3 — Operating model + AGENTS.md

Write `AGENTS.md` (the spine) from `assets/templates/AGENTS.md`, then `CLAUDE.md`
from `assets/templates/CLAUDE.md` (a pointer). The operating model — detailed in
`references/operating-model.md` — is the heart:

- **Human = Product Owner.** Sets direction, prioritizes, reviews, approves.
- **AI assistant = orchestrator + QA / tech lead.** Refines tickets, dispatches
  each to the right specialist, reviews for correctness/tests/reuse, updates the
  backlog. Crucially: **does not merge PRs and does not release** — those are
  human gates.
- **Specialist agents = implementers** (one ticket each, test-first).

Why split it this way: it keeps a non-coding owner in control, forces every
change through independent review, and makes the AI's role legible. Even a solo
builder benefits — the "orchestrator vs implementer" separation produces smaller,
reviewable changes.

### 4 — Git, review & release workflow

Write WORKFLOW.md from the template and set up `.github/pull_request_template.md`.
The model (detail in `references/git-workflow.md`):

`feature branch → PR → staging → release → production`, semver tags.

The non-negotiable gates:

- **No self-review.** Every PR is reviewed by an *independent* AI reviewer — and
  it must be a different actor than the one who wrote the code. This is
  reviewer-agnostic: Claude, Copilot, and Codex all qualify. Set up whichever the
  team uses (see `references/ai-review-integrations.md` for wiring each, and
  `assets/templates/.github/workflows/` for a ready Claude example). Frame the
  docs generically — "tag your AI reviewer" — so the repo is not locked to one.
- **Humans merge and release.** The AI never merges its own (or any) PR, never
  releases to production. After a human merges, they tell the AI, which updates
  the backlog status.

### 5 — Execution backlog + TDD

Write BACKLOG.md from the template: one table per phase that doubles as release
tracking (status · ID · ticket detail · dependencies · PR · prod version). This
single artifact is what a fresh session reads to know what to do next — so keep
it current as the source of truth, and add a "▶ next up" pointer.

Make **test-first** the default in WORKFLOW.md, with intensity tiers (critical
modules — money, billing, aggregation, anything irreversible — get exhaustive
edge coverage; UI gets lighter coverage). Explain *why* (reliability), so the AI
treats it as a principle rather than a checkbox.

### 6 — Bootstrap the repository

Initialize and make the planning the first commit, so the project's history
starts from an agreed plan:

```bash
git init
# write all docs + AGENTS.md + CLAUDE.md + README + .github/
git add -A && git commit -m "chore: planning foundation (docs + workflow + operating model)"
git branch staging        # integration branch; main = production
```

Then (with the human's go-ahead) create the remote and push both branches. Set
the default branch to `staging` so day-to-day PRs target it and `main` only
advances on releases. If the repo holds sensitive commercial numbers
(MONETIZATION/PITCH-DECK), make it **private**.

## Adapt to the project

Full suite by default, but prune what does not fit — a smaller, honest set beats
ceremonial docs nobody reads:

- **Internal tool / OSS library:** drop MONETIZATION + PITCH-DECK.
- **No UI (CLI, service, library):** drop DESIGN-SYSTEM; DESIGN becomes a plain
  capability spec.
- **Tiny / weekend project:** the lean spine is enough — AGENTS.md + ARCHITECTURE
  + WORKFLOW + BACKLOG. Skip the rest until the project earns them.
- **Pre-existing code:** don't overwrite; reconcile the templates with what's
  there and fill the gaps.

Say what you are including and why, so the scope is a choice, not an accident.

## References (read when you reach that step)

- `references/operating-model.md` — roles, dispatch mapping, why the gates exist.
- `references/git-workflow.md` — branch/PR/review/merge/release in detail, semver.
- `references/ai-review-integrations.md` — wiring Claude / Copilot / Codex review,
  and keeping the workflow reviewer-agnostic.

Templates live under `assets/templates/`. Each is a skeleton to adapt, never to
ship as-is.
