---
name: ai-product-starter
description: >-
  Use at the very START of a new software product or project — when someone has an
  idea and wants to set it up properly BEFORE writing code. It interviews them step
  by step, then generates a tailored planning foundation and creates only the files
  the project needs: roadmap, product/MVP spec, architecture & data model, design
  system, AI strategy, monetization + pitch deck (for commercial/fundraising), an
  operating model, a TDD git/PR/AI-review/release workflow, and a phased backlog.
  STRONGLY prefer this skill whenever someone says they're starting or kicking off
  a new app, product, MVP, startup, side-project, tool, library, or prototype;
  wants to "set up a repo/project properly", "plan before coding", or "get
  organized"; or asks you to draft a roadmap, product spec, architecture, or
  backlog for a NEW idea — even if they never say "skill", name this template, or
  are vague about what to set up. It's for PRODUCT people as much as engineers:
  founders, PMs, and non-coders use it to produce a plan (it stops at the docs for
  them), while developers continue into a working repo. Tool-agnostic — output uses
  an AGENTS.md spine and a reviewer-agnostic workflow, so it fits Claude Code,
  Cursor, Copilot, Codex, Gemini, or any AI assistant. Do NOT use it for routine
  work inside an existing, already-planned codebase (a single feature, a bug fix, a
  refactor) — only for kicking off or planning a project.
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
It also knows when to stop: a planning hand-off ends at the docs, while a
build-it-now project continues into the repo, workflow, and tests.

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
    SPEC.md            # MVP contract — user stories + acceptance criteria
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
2. **Who is it for, and what problem does it solve?** *(feeds ROADMAP + SPEC)*
3. **What's the edge** — why this wins where alternatives don't? Push past "better
   UX" to a concrete, defensible reason. *(feeds ROADMAP)*
4. **Will it make money / is it a business?** And are you **actively raising
   funding now?** *(makes money → MONETIZATION · raising now → PITCH-DECK · "might
   raise later" → defer the deck, just note the trigger)*
5. **Does it have a UI** — screens people look at and tap — or does it run headless
   (CLI, API, automation, library)? *(UI → DESIGN-SYSTEM)*
6. **Does it store data or have user accounts?** *(yes → DATABASE)*
7. **Any AI / LLM features?** — does the *product itself* use AI/LLM at runtime?
   *(yes → AI · note: building it **with** an AI assistant does NOT count as an AI
   feature — don't create `AI.md` for that, and don't leave a dangling link to it)*
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
| **Always** | `AGENTS.md` (plan-brief on the plan path, full on the build path) · `README.md` · `docs/ROADMAP` · `docs/SPEC` · `docs/BACKLOG` |
| **Building it now** (not just planning) | + `docs/WORKFLOW` (git/TDD/review) · `docs/ARCHITECTURE` · `.github/` PR template + AI-review · repo bootstrap |
| Has a UI | + `docs/DESIGN-SYSTEM` |
| Stores data / has accounts | plan path → name the key data/entities inside `SPEC` (plain language) · build path → a full `docs/DATABASE` |
| Has AI features | + `docs/AI` |
| Makes money | + `docs/MONETIZATION` |
| Raising funding **now** | + `docs/PITCH-DECK` *(only if actively raising; "maybe later" → skip, note the trigger)* |
| Quick experiment | trim to the lean spine: `AGENTS` + `BACKLOG` (+ `ROADMAP`/`SPEC`); add the build path only if you want git/test gates |

**Then confirm before writing anything.** Show the proposed file list with a
one-line reason for each and ask: "this is what I'll create — add or drop any?"
Creating files nobody needs is the main failure mode; this checkpoint prevents it.

**Persona note — tailor depth to who's building:**
- *Product owner / founder / non-coder:* lead with ROADMAP, SPEC, and (if
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

### 2 — Scope the idea: features, timeline, tools, budget

This is where the docs get their substance — and where you add the most value.
Don't just collect answers; **propose and estimate.** Founders often don't know
their feature list, timeline, or costs, so lead with a concrete suggestion drawn
from what they've told you, then let them adjust. Always label numbers as rough.

Work through four things — for each, offer a draft first, then refine:

- **Features.** Draft the v1 feature set from the problem, split into *must-have
  for v1* vs *later*. "Based on this, a lean v1 is X, Y, Z; A and B can wait —
  right?" → feeds ROADMAP's feature list, SPEC's user stories, and the first
  BACKLOG tickets. Apply YAGNI hard: a shorter v1 ships.
- **Timeline.** Get a target (a weekend? a few weeks? months?), then translate it
  into **phases with rough durations** (e.g. "P1 core ~3 wks → P2 polish ~2 wks").
  If they have no number, propose a realistic phasing and sanity-check it against
  the feature list. → ROADMAP phases.
- **Tools & services.** List what it takes to build *and run*: hosting, database,
  auth, payments, AI/LLM APIs, email/SMS, analytics, domain. Propose a concrete
  set fit to the project (and the chosen stack, if any). → ARCHITECTURE + AI.
- **Budget.** From the tools list, estimate **recurring** (monthly infra + API +
  subscriptions) and **one-time** costs as ranges, with the assumptions behind them
  (expected scale). Flag where **AI usage is the swing cost** and how to keep it
  down. For commercial projects extend to unit economics / COGS / a rough runway →
  MONETIZATION (the running-cost table lives there). For non-commercial, capture a
  short **"Tools & running costs"** note in ROADMAP — people underestimate it. Keep
  it in **one** place; don't duplicate the cost table across docs.

Summarize it back compactly — *features → phases/timeline → tools → monthly +
one-time cost range* — and get a thumbs-up. This summary becomes the backbone of
ROADMAP and the budget content, so the docs come out specific, not generic.

### 3 — Generate the docs

For each relevant doc, read the matching template in
`assets/templates/docs/<NAME>.md`, then fill it for THIS product. Templates are
skeletons with `{{PLACEHOLDERS}}` and inline `<!-- guidance -->` — replace the
guidance, keep the structure. Do not paste a template verbatim; it must describe
*this* product. Order: ROADMAP → SPEC → ARCHITECTURE → DATABASE → AI →
(DESIGN-SYSTEM if UI) → (MONETIZATION/PITCH-DECK if commercial) → WORKFLOW →
BACKLOG. WORKFLOW and BACKLOG come last because they reference everything above.

**Keep only what fits — strip the rest.** Templates ship lines for features many
projects won't have: a "money is integer minor units" rule, a "UI uses design
tokens" DoD item, an "AI service module" section, PR/release columns, links to docs
like `WORKFLOW`. When a feature is absent or a doc was skipped, **delete those
lines and sections outright** — don't fill them with "N/A", and don't leave links
pointing at docs you didn't create. A clean doc with five true lines beats a
template carrying twenty stale ones. (This is the most common way a careless run
leaks irrelevant content — actively prune.)

---

**Two finish lines** — what's next depends on who's building (Step 0, Q9):

- **Planning only / handing it to a developer or AI later** (typical for a product
  owner or founder): you're essentially **done at the docs.** Don't impose coding
  machinery on someone who isn't coding — skip the git/TDD/release workflow and the
  repo bootstrap. See *Finish — plan path* just below.
- **Building it now** (you with an AI, or a developer/team): continue through Steps
  4–7 to set up the operating model, workflow, and repo.

### Finish — plan path (planning only)

The deliverable *is* the docs — a coherent plan someone can act on. Make them hang
together (README ties them; ROADMAP and BACKLOG agree on what ships when), and add
one bridge artifact so the build can start later without you in the room:

- a short **`AGENTS.md`** build brief — use the
  **`assets/templates/AGENTS.plan-brief.md`** template (NOT the full `AGENTS.md`,
  which carries the dev workflow): one paragraph on the product plus the operating
  model in miniature (PO + builder + human go-live gate), so whoever builds it
  inherits how the work should run;
- the **BACKLOG** as a feature/milestone plan — the PR/release-tracking columns
  stay blank until building starts;
- **strip the dev-only cross-links** the templates carry — references to
  `WORKFLOW`, branches, and PR columns belong to the build path; remove them so the
  plan reads clean and points only at docs you created.

Then stop and offer the next move: *"When you're ready to build, come back and I'll
set up the repo, the dev workflow, and the first tickets — or hand `AGENTS.md` +
`BACKLOG.md` to your developer or AI builder."* Where the docs live is their call
(a repo, a folder, Notion/Drive); only `git init` if they want version control.

**Build path (Steps 4–7) — only when building now.**

### 4 — Operating model + AGENTS.md

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

### 5 — Git, review & release workflow

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

### 6 — Execution backlog + TDD

Write BACKLOG.md from the template: one table per phase that doubles as release
tracking (status · ID · ticket detail · dependencies · PR · prod version). This
single artifact is what a fresh session reads to know what to do next — so keep
it current as the source of truth, and add a "▶ next up" pointer.

Make **test-first** the default in WORKFLOW.md, with intensity tiers (critical
modules — money, billing, aggregation, anything irreversible — get exhaustive
edge coverage; UI gets lighter coverage). Explain *why* (reliability), so the AI
treats it as a principle rather than a checkbox.

### 7 — Bootstrap the repository

Initialize and make the planning the first commit, so the project's history
starts from an agreed plan:

```bash
git init -b main
# write all docs + AGENTS.md + CLAUDE.md + README + .github/ + a .gitignore
# (start from assets/templates/gitignore; tailor it to the stack)
git add -A && git commit -m "chore: planning foundation (docs + workflow + operating model)"
git branch staging        # integration branch; main = production
git checkout staging      # work on staging day-to-day
```

Always include a **`.gitignore`** (start from `assets/templates/gitignore`, tailor
to the stack) — the build path assumes one exists. Then, with the human's go-ahead,
create the remote and push both branches. **"Default branch" is a host setting**,
so set it *after* the remote exists — e.g. `gh repo edit --default-branch staging`
— so PRs target `staging` and `main` only advances on releases (before a remote
exists, just keep `staging` checked out locally). If the repo holds sensitive
commercial numbers (MONETIZATION/PITCH-DECK), make it **private**.

## Adapt to the project

Full suite by default, but prune what does not fit — a smaller, honest set beats
ceremonial docs nobody reads:

- **Internal tool / OSS library:** drop MONETIZATION + PITCH-DECK.
- **No UI (CLI, service, library):** drop DESIGN-SYSTEM; SPEC becomes a plain
  capability spec.
- **Tiny / weekend / throwaway:** the lean spine is enough — `AGENTS.md`
  (plan-brief) + `BACKLOG` (+ a short `ROADMAP`/`SPEC`); `README` can fold into
  `AGENTS`. Add `ARCHITECTURE`/`WORKFLOW` only if you genuinely want build gates.
  Skip the rest until the project earns them.
- **Some code already exists** (you're putting a plan around an early or partial
  project): don't overwrite — reconcile the templates with what's there and fill
  the gaps. This skill is for *planning / kicking off*, not for routine changes to
  a mature, already-planned codebase.

Say what you are including and why, so the scope is a choice, not an accident.

## References (read when you reach that step)

- `references/operating-model.md` — roles, dispatch mapping, why the gates exist.
- `references/git-workflow.md` — branch/PR/review/merge/release in detail, semver.
- `references/ai-review-integrations.md` — wiring Claude / Copilot / Codex review,
  and keeping the workflow reviewer-agnostic.

Templates live under `assets/templates/`. Each is a skeleton to adapt, never to
ship as-is.
