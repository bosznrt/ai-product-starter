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
  "skill" or name this template. You do NOT need to be a developer: product
  managers, founders, and non-coders use it too — it asks step by step what the
  project is and creates only the docs it actually needs. Tool-agnostic: the
  output works with Claude Code, Cursor, GitHub Copilot, Codex, Gemini, or any AI
  coding assistant.
---

# AI Product Starter

Bootstrap a new product repository the way a disciplined team would: **decide and
write down the plan before writing code.** This skill produces a coherent set of
planning documents, an operating model, and a git/review/release workflow so that
an AI assistant (and the humans steering it) can execute ticket-by-ticket with
high reliability.

**You don't have to be a developer to use this.** It's as much for product owners
and founders as for engineers. It asks plain-language questions, and for
non-coders it still produces the strategy/product/spec docs while scaffolding the
technical ones as clearly-marked placeholders for a developer or AI to fill later.

The guiding belief: **documents are the source of truth, not the chat history.**
A teammate — or a fresh AI session, or a different AI tool entirely — should be
able to open the repo, read a handful of files, and know exactly what is being
built, how the work is run, and what to do next. Everything this skill creates
serves that goal.

## When this applies

Any "I'm starting something new" moment — and the user can be **anyone**: a
founder with a business idea, a product manager shaping a spec, a designer, or an
engineer. Consumer app, SaaS, internal tool, CLI, library, hackathon project. The
intake below figures out which docs fit, so a non-technical founder gets a strong
product/roadmap/spec set without being dragged through engineering minutiae, while
a developer can go deep on architecture. Scale to the project — a weekend CLI does
not need a pitch deck — but the *spine* (operating model + workflow + backlog) is
worth it almost every time, because that is what makes AI-driven execution
repeatable.

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

Two phases: **interview to decide what's needed**, then **generate only that.**
Ask questions ONE AT A TIME, conversationally — never dump a questionnaire. Read
who you're talking to: if they're not technical, drop the jargon ("does it have
screens people tap, or does it run in the background?"). Pull answers from the
conversation first; only ask what's missing.

### 0 — Interview, then choose the files

The goal of this step is to end with an agreed **list of files to create — no more,
no less.** Walk through these one question at a time, skipping any you can already
answer:

1. **What are you building?** One sentence; the single job of v1. *(always)*
2. **Who is it for, and what problem does it solve?** *(feeds ROADMAP + DESIGN)*
3. **What's the edge** — why this wins where alternatives don't? Push past "better
   UX" to a concrete, defensible reason. *(feeds ROADMAP)*
4. **Will it make money / is it a business?** If so, **raising funding?**
   *(makes money → MONETIZATION · funding → PITCH-DECK)*
5. **Does it have a UI** — screens people look at and tap — or does it run headless
   (CLI, API, automation, library)? *(UI → DESIGN-SYSTEM)*
6. **Does it store data or have user accounts?** *(yes → DATABASE)*
7. **Any AI / LLM features?** *(yes → AI)*
8. **How big is this** — a quick experiment, or something you'll build over weeks
   or months? *(small → trim to the lean spine)*
9. **Who's going to build it** — you with an AI assistant, a developer, a team?
   *(sets how deep the technical docs go — see the persona note below)*

Don't ask about stack, frameworks, or databases-by-name unless the person is
technical and wants to decide now. Also surface any **domain landmines** — rules
easy to get wrong (money precision, timezones, billing cycles, compliance) — which
become a loud section in ARCHITECTURE/DATABASE, because that's where AI-written
code fails.

**Map answers to files:**

| If… | Create |
|---|---|
| **Always** | `AGENTS.md` · `README.md` · `docs/ROADMAP` · `docs/DESIGN` · `docs/WORKFLOW` · `docs/BACKLOG` |
| There will be code | + `docs/ARCHITECTURE` |
| Has a UI | + `docs/DESIGN-SYSTEM` |
| Stores data / has accounts | + `docs/DATABASE` |
| Has AI features | + `docs/AI` |
| Makes money | + `docs/MONETIZATION` |
| Raising funding | + `docs/PITCH-DECK` |
| Quick experiment | trim to the lean spine: `AGENTS` + `WORKFLOW` + `BACKLOG` (+ `ROADMAP`/`DESIGN` if useful) |

**Then confirm before writing anything.** Show the proposed file list with a
one-line reason for each and ask: "this is what I'll create — add or drop any?"
Creating files nobody needs is the main failure mode; this checkpoint prevents it.

**Persona note — tailor depth to who's building:**
- *Product owner / founder / non-coder:* lead with ROADMAP, DESIGN, and (if
  commercial) MONETIZATION / PITCH-DECK. Still create ARCHITECTURE / DATABASE / AI
  if relevant, but as **plain-language scaffolds with `TBD — for your developer/AI`
  placeholders**, not deep technical decisions. Never block them on a stack choice.
- *Engineer / solo builder:* go deeper — lock the stack and technical docs now
  (Step 1).

### 1 — Lock the foundational decisions

These propagate everywhere, so decide them once and record them in WORKFLOW.md
under "Locked decisions". **With a non-technical owner, don't interrogate them —
propose sensible defaults, mark them provisional, and leave genuinely open ones as
`TBD` for whoever builds it.** Decide:

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
