# AI Product Starter

> Give your agent the discipline to **plan before it codes** — for product folks
> and developers alike.

A small, tool-agnostic plugin with one skill: when you're starting a new product,
your AI assistant steps back, **interviews you one question at a time**, and lays
down a planning foundation **before** writing any code — so AI-driven execution is
repeatable and a fresh session (or a teammate, or a different AI tool) can pick up
where you left off just by reading the repo.

**You don't need to be a developer.** The intake adapts to who you are and what
you're building, and **only creates the files your project actually needs** — a
non-technical founder gets product, roadmap, and spec docs (and a pitch deck if
they're raising); an engineer can go deep on architecture and data model. No
ceremonial docs nobody reads.

It also **stops where it makes sense**: a planning hand-off ends at the docs (plus
a short build brief you can hand to a developer or AI later), while a build-it-now
project continues into a working repo, a git/PR/review workflow, and test-first
execution.

It's the generalized, reusable version of the setup behind a real product build —
not a toy template.

## What it generates

It adapts to who you are. **A product person gets a plan; a developer also gets a
working repo** — you're not forced through engineering machinery if you're not
coding.

**For anyone — the plan (product, founders, PMs):**

- **`docs/`** product docs — `ROADMAP`, `DESIGN`, plus `MONETIZATION` + `PITCH-DECK`
  for commercial/fundraising and `DESIGN-SYSTEM` for products with a UI. Each
  adapted to *your* product, not boilerplate.
- **A phased backlog** (`BACKLOG`) — what to build, in what order; doubles as a
  feature/milestone plan.
- **A short build brief** (`AGENTS.md`) you can hand to a developer or an AI later.

**When you're building it — the repo (developers):** it also lays down the
technical docs (`ARCHITECTURE`, `DATABASE`, `AI`), an **operating model** (Product
Owner + AI orchestrator/QA + implementers; the AI doesn't merge or release —
humans do), a **git/PR/review/release workflow** (feature → staging → production,
semver, test-first, independent AI review with no self-review — Claude, Copilot,
or Codex), and bootstraps the repo.

It scales and prunes: a non-technical founder stops at a clean plan, a weekend CLI
gets the lean spine, a startup building now gets the full suite.

## Install

Per-tool plugin manifests, so it installs natively in several coding agents.

### Claude Code

```bash
/plugin marketplace add bosznrt/ai-product-starter
/plugin install ai-product-starter@ai-product-starter
```

### Cursor / Codex / Kimi / others

These read a plugin manifest from the repo (`.cursor-plugin/`, `.codex-plugin/`)
and the `skills/` directory. Add the repo through your agent's plugin/skill
mechanism, pointing at this repository.

### Any AI tool (manual)

Clone the repo and tell your assistant:

> Read `skills/ai-product-starter/SKILL.md` and use it to kick off my new project.

Or copy `skills/ai-product-starter/` into wherever your tool loads skills from.

## Use it

Once installed, just tell your agent what you're building:

> "I've got an idea for a budgeting app for freelancers — help me set up the repo."

The skill triggers on its own, interviews you, and produces the foundation. You
stay in control: it confirms each major doc with you before moving on, and never
merges or releases on its own.

## Why "tool-agnostic"

The repos it produces use `AGENTS.md` as the spine (most coding agents read it),
and the review/workflow docs say "tag your independent AI reviewer" rather than
naming one vendor. Use whichever assistant you like — or several.

## License

MIT — see [`LICENSE`](./LICENSE). Built by BoSz Narathip.
