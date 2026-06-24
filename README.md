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

For your new repo:

- **`AGENTS.md`** — the source-of-truth driving file (read by most AI tools), plus
  a thin `CLAUDE.md` pointer. No lock-in to one assistant.
- **`docs/`** — `ROADMAP`, `DESIGN`, `ARCHITECTURE`, `DATABASE`, `AI`, `WORKFLOW`,
  `BACKLOG`, plus `DESIGN-SYSTEM` (UI projects) and `MONETIZATION` + `PITCH-DECK`
  (commercial/fundraising). Each is adapted to *your* product, not boilerplate.
- **An operating model** — Product Owner (you) + AI orchestrator/QA + specialist
  implementers, with clear gates: the AI doesn't merge or release; humans do.
- **A git/PR/review/release workflow** — feature → staging → production, semver,
  test-first, and **independent AI code review with no self-review** (works with
  Claude, Copilot, or Codex — your choice).
- **A phased execution backlog** — ticket tables that double as release tracking,
  so "what's next" is always written down.

It scales to the project: a weekend CLI gets the lean spine; a startup gets the
full suite. It prunes what doesn't fit.

## Install

This is packaged like [Superpowers](https://github.com/obra/superpowers) —
per-tool plugin manifests so it installs natively in several agents.

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
