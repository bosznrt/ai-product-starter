# How it works

AI Product Starter runs in two phases: **interview to decide what's needed**,
then **generate only that**. The whole thing is driven by one skill —
[`skills/ai-product-starter/SKILL.md`](../skills/ai-product-starter/SKILL.md) —
which the AI reads and follows. This page explains the step flow, the two finish
lines, and how it decides which files to create.

The guiding belief behind all of it: **documents are the source of truth, not
the chat history.** A teammate, a fresh AI session, or a different AI tool
should be able to open the result, read a handful of files, and know exactly
what's being built and what to do next.

## The step flow

### Step 0 — Interview, then choose the files

Questions come **one at a time**, conversationally — never a dumped
questionnaire. The AI reads who it's talking to and drops the jargon for
non-technical people. It pulls answers from what you've already said and only
asks what's missing. The questions it works through:

- What are you building? (the single job of v1)
- Who is it for, and what problem does it solve?
- What's the edge — why does this win where alternatives don't?
- Will it make money? Are you raising funding *now*?
- Does it have a UI (screens people tap) or run headless?
- Does it store data or have user accounts?
- Any AI/LLM features in the *product itself*?
- How big is this — a quick experiment, or weeks/months of work?
- Who's going to build it — you with an AI, a developer, a team?

The goal of this step is to end with an agreed **list of files — no more, no
less**. The AI shows the proposed list with a one-line reason for each and asks
you to add or drop any **before writing anything**. Creating files nobody needs
is the main failure mode, so this checkpoint exists to prevent it.

### Step 1 — Lock the foundational decisions (build path)

Decisions that propagate everywhere get settled once: stack, package manager,
single-package vs monorepo, money/precision rules, auth, testing tools,
deployment target, and AI usage. With a non-technical owner the AI doesn't
interrogate — it proposes sensible defaults, marks them provisional, and leaves
genuinely open ones as `TBD` for whoever builds it.

### Step 2 — Scope the idea: features, timeline, tools, budget

This is where the docs get their substance. The AI doesn't just collect answers
— it **proposes and estimates**, then lets you adjust:

- **Features** — a lean v1 set, split into *must-have now* vs *later*.
- **Timeline** — a target translated into phases with rough durations.
- **Tools & services** — what it takes to build *and run* (hosting, database,
  auth, payments, AI APIs, email/SMS, analytics, domain).
- **Budget** — rough recurring (monthly) and one-time costs, with assumptions,
  flagging where AI usage is the swing cost.

It summarizes everything back compactly and gets a thumbs-up. That summary
becomes the backbone of the roadmap and budget, so the docs come out specific
rather than generic.

### Step 3 — Generate the docs

For each file on the agreed list, the AI reads the matching template in
[`skills/ai-product-starter/assets/templates/`](../skills/ai-product-starter/assets/templates/),
then fills it in **for your product** — replacing the `{{PLACEHOLDERS}}` and
`<!-- guidance -->` notes, keeping the structure. It never pastes a template
verbatim. Crucially, it **prunes**: lines and sections for features your project
doesn't have (a money-precision rule, a UI design-token item, an AI service
section, dangling links to docs that weren't created) are deleted outright — not
filled with "N/A". A clean doc with five true lines beats a template carrying
twenty stale ones.

### Finish — one of two paths

What happens after the docs depends on who's building. See the two finish lines
below.

## The two finish lines

This is the part that makes the skill behave so differently for different
people. After the docs are generated, it follows **one of two paths** — chosen
from your answer to "who's going to build it?"

| | **Plan path** | **Build path** |
|---|---|---|
| **Who it's for** | Founders, PMs, makers, non-coders — anyone planning now and building (or handing off) later | Developers, solo builders, teams building right now |
| **Where it stops** | At the documents | Continues into repo + workflow + tests |
| **Coding machinery** | None — no git, no TDD, no release workflow | Full operating model, git/PR/review/release workflow, test-first |
| **Hand-off artifact** | A short `AGENTS.md` build brief (from the plan-brief template) | The full `AGENTS.md` spine + `CLAUDE.md` pointer |
| **Backlog** | A feature/milestone plan; PR/release columns stay blank | A live ticket tracker with PR/release columns |
| **Repo** | Optional — `git init` only if you want version control | Bootstrapped: first commit, `main`/`staging` branches, PR template, `.gitignore` |

### Plan path (planning only)

The deliverable *is* the docs — a coherent plan someone can act on. The AI makes
them hang together (the README ties them; the roadmap and backlog agree on what
ships when), strips the dev-only cross-links the templates carry (references to
the workflow doc, branches, PR columns), and adds one bridge artifact: a short
`AGENTS.md` build brief so the build can start later without you in the room.
Then it stops and offers to set up the repo whenever you're ready.

### Build path (Steps 4–7, building now)

The AI continues past the docs to set up:

- **Step 4 — Operating model + `AGENTS.md`.** You = Product Owner; the AI =
  orchestrator + QA/tech lead that **doesn't merge or release**; specialist
  agents = implementers (one ticket each, test-first). Detail in
  [`references/operating-model.md`](../skills/ai-product-starter/references/operating-model.md).
- **Step 5 — Git, review & release workflow.** `feature branch → PR → staging →
  release → production`, semver tags. Two non-negotiable gates: **no
  self-review** (an *independent* AI reviews every PR) and **humans merge and
  release**. Detail in
  [`references/git-workflow.md`](../skills/ai-product-starter/references/git-workflow.md)
  and
  [`references/ai-review-integrations.md`](../skills/ai-product-starter/references/ai-review-integrations.md).
- **Step 6 — Execution backlog + TDD.** One table per phase that doubles as
  release tracking, plus a "▶ next up" pointer. Test-first is the default, with
  intensity tiers (money/billing/auth get exhaustive coverage; UI gets lighter).
- **Step 7 — Bootstrap the repo.** `git init`, the planning becomes the first
  commit, `main`/`staging` branches, a `.gitignore`, and (with your go-ahead) a
  remote with `staging` set as the default branch.

## How it decides which files to create

Every file is earned by an answer in the interview. The skill maps answers to
files like this:

| If… | It creates |
|---|---|
| **Always** | `AGENTS.md` (build brief) · `README.md` · `docs/ROADMAP` · `docs/DESIGN` · `docs/BACKLOG` |
| **Building it now** (not just planning) | + `docs/WORKFLOW` (git/TDD/review) · `docs/ARCHITECTURE` · `.github/` PR template + AI-review · repo bootstrap |
| Has a **UI** | + `docs/DESIGN-SYSTEM` |
| **Stores data / has accounts** | + `docs/DATABASE` *(plan path: a short plain-language list of what's stored, not a full schema)* |
| Has **AI features** (the product uses AI at runtime) | + `docs/AI` |
| **Makes money** | + `docs/MONETIZATION` |
| **Raising funding now** | + `docs/PITCH-DECK` *(only if actively raising; "maybe later" → skip, note the trigger)* |
| **Quick experiment** | trim to the lean spine: `AGENTS` + `BACKLOG` (+ `ROADMAP`/`DESIGN`); add the build path only if you want git/test gates |

A few things worth knowing about the logic:

- **Building *with* an AI assistant does not count as an AI feature.** `docs/AI`
  is only created when the *product itself* uses AI/LLM at runtime — so it won't
  leave a dangling `AI.md` link just because you used Claude to plan.
- **"Maybe later" defers the pitch deck.** `PITCH-DECK` is created only when you
  say you're *actively* raising; otherwise it's skipped with a note on the
  trigger that would bring it back.
- **Scale to the project.** A weekend CLI doesn't get a pitch deck or a design
  system; an internal tool or OSS library drops the monetization docs; a no-UI
  project (CLI, service, library) drops the design system and the spec becomes a
  plain capability spec.
- **What gets pruned.** Inside each doc that *is* created, lines for absent
  features are deleted, not filled with "N/A", and links to docs that weren't
  created are removed. The result only points at files that actually exist.

## Where to go next

- See it in action: [Getting started](./getting-started.md).
- Tailor the templates or the process: [Customizing](./customizing.md).
- Quick questions: [FAQ](./faq.md).
