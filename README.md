# AI Product Starter

> Turn your idea into a real plan — **before anyone writes a line of code.**

Got an idea for an app, a product, a tool, a startup? This gives your AI assistant
(Claude, Cursor, Copilot, ChatGPT/Codex, Gemini…) the good habit of **stopping to
plan it with you first** instead of jumping straight into code.

It asks you simple questions — one at a time, in plain language — and turns your
answers into a clear, written plan you (or a developer, or an AI) can actually
build from. **You don't need to be technical.** It works out what your project
needs and writes only that — no jargon-filled documents nobody reads.

## What you get

A plan, in plain files you can read and share:

- **A roadmap** — what to build, and in what order, broken into phases.
- **A feature list and spec** — what the first version does, as plain "a user
  can…" stories.
- **A timeline and a rough budget** — phases with rough durations, the tools and
  services you'll need, and what it costs to run (it suggests these; you adjust).
- **A money plan** — pricing, revenue, and an investor pitch deck — *only if*
  you're selling or raising. Skipped otherwise.
- **A short hand-off brief** — so a developer or an AI can pick it up and build
  without you re-explaining everything.

It adapts: a quick weekend experiment gets a tiny plan; a real startup gets the
full set. Anything that doesn't fit your project is simply left out.

## Who it's for

- **Founders, product managers, makers, non-coders** — get a solid plan you can
  act on or hand to a builder. It stops at the docs; no coding required.
- **Developers** — keep going past the plan into a ready-to-code repo (see
  [For developers](#for-developers)).

## Install

Add it to your AI assistant once, then just talk about your idea.

**Any tool — install once, then run `init`** (Cursor, Copilot, Gemini, Codex,
Claude, …). Either run it one-off with `npx`, or install the CLI globally first:

```bash
# one-off, no install:
npx github:bosznrt/ai-product-starter init    # straight from GitHub (works today)
npx ai-product-starter init                   # once it's published to npm

# or install the command globally, then run it inside any project:
npm install -g github:bosznrt/ai-product-starter   # or: npm i -g ai-product-starter (after npm publish)
ai-product-starter init
```

`init` drops the skill into your project and wires the entry files your assistant
reads, so it works whatever tool you use. Add `--tool cursor|copilot|gemini|claude`
to wire just one. Then tell your assistant to plan your project (see
[Try it](#try-it)).

**Claude Code (plugin)**

```bash
/plugin marketplace add bosznrt/ai-product-starter
/plugin install ai-product-starter@ai-product-starter
```

**Manual** — clone the repo and tell your assistant: *"Read
`skills/ai-product-starter/SKILL.md` and use it to plan my new project."*

## Updating

Update it the same way you update any plugin for your assistant.

**Claude Code**

```bash
/plugin marketplace update ai-product-starter
/plugin install ai-product-starter@ai-product-starter
```

**Installed via `npx` or globally** — re-run the installer; it's safe to run again:

```bash
npx ai-product-starter@latest init                 # or: npx github:bosznrt/ai-product-starter init
# if you installed it globally:
npm install -g ai-product-starter@latest && ai-product-starter init
```

**Manual clone** — `git pull`, and your assistant picks up the new skill and
templates on the next run.

## Try it

Once it's installed, just say what you're dreaming up:

> "I want to make an app that helps people find and book a barber nearby — can you
> help me plan it?"

It interviews you, proposes features, a timeline, and a budget, then writes your
plan. You stay in control — it checks the file list with you before writing
anything, and never builds or ships on its own.

## For developers

Building it now? It doesn't stop at docs — it also sets up:

- **Technical docs** — architecture, data model, and an AI strategy (when relevant).
- **An operating model** — you're the Product Owner; the AI orchestrates and
  reviews but **doesn't merge or release** — humans do.
- **A real git workflow** — feature → staging → production, semver, **test-first**,
  and **independent AI code review with no self-review** (Claude, Copilot, or
  Codex — your call).
- **A bootstrapped repo** — first commit, `main`/`staging` branches, PR template.

It's **tool-agnostic**: generated repos use an `AGENTS.md` as the source of truth
(most AI coding tools read it) and keep the review/workflow vendor-neutral, so you
can use any assistant — or several.

## Docs

[`docs/`](./docs/) has the full guides:

- [Getting started](./docs/getting-started.md) — install and your first run.
- [How it works](./docs/how-it-works.md) — the interview, the two finish lines, and
  how it chooses files.
- [Customizing](./docs/customizing.md) — tailor the templates and the workflow.
- [FAQ](./docs/faq.md).

## Contributing

Issues and PRs welcome — improve the skill, the templates, the docs, or add support
for another AI tool. See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

MIT — see [`LICENSE`](./LICENSE). Built by BoSz Narathip.
