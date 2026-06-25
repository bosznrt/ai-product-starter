# Getting started

This walks you through your **first run** of AI Product Starter — what the
interview feels like, and what comes out the other end. You don't need to be a
developer to follow along.

## Install

If you haven't added the plugin to your AI assistant yet, do that first. The
install steps (Claude Code, Cursor, Codex, and any other tool) live in the
README — see [**Install**](../README.md#install). It's a one-time setup; after
that you just talk about your idea.

## What a first run feels like

You don't fill in a form. You have a short conversation. Here's the shape of it:

1. **You say what you're dreaming up.** A sentence is enough to start —
   *"I want an app that helps people find and book a barber nearby."*
2. **It asks you questions, one at a time, in plain language.** Who's it for?
   What problem does it solve? What makes it better than what's out there? Does
   it make money? Does it have screens people tap, or does it run in the
   background? Is this a weekend experiment or something you'll build for months?
   Who's going to build it? It skips anything you've already told it, and it
   drops the jargon if you're not technical.
3. **It proposes the plan back to you** — a lean first version (features), a
   rough timeline broken into phases, the tools and services you'll need, and a
   rough monthly + one-time cost. These are *suggestions* drawn from your
   answers; you adjust them.
4. **It shows you the exact list of files it's about to create** — each with a
   one-line reason — and asks: *"this is what I'll create — add or drop any?"*
   Nothing gets written until you say go. This checkpoint is the whole point:
   you only get the documents your project actually needs, nothing ceremonial.
5. **It writes the plan.** A set of plain Markdown files you can read, share, or
   hand to a builder.

It never builds or ships anything on its own. You stay in control the whole way.

## Two example runs

The same skill behaves differently depending on **who's building**. There are
[two finish lines](./how-it-works.md#the-two-finish-lines): a **plan path** that
stops at the documents, and a **build path** that keeps going into a working
repo.

### Example 1 — a non-technical founder (plan path)

> **You:** "I want to make an app that helps people find and book a barber
> nearby. I'm not a developer — I want a plan I can show to a developer."

The interview stays in plain language. It never asks you to pick a database or a
framework. It works out the first version (search nearby, see availability,
book a slot), sketches a phased timeline, lists the services you'd need
(hosting, a database, maps, payments), and estimates a rough running cost.

Because you're **planning, not coding yet**, it stops at the documents. You get:

- a **roadmap**, a **feature list and spec** (plain "a user can…" stories),
- a **timeline and rough budget**,
- a **money plan and pitch deck** *only if* you said you're selling or raising,
- and a short **`AGENTS.md` hand-off brief** so a developer or an AI can pick it
  up later without you re-explaining everything.

Then it stops and offers: *"When you're ready to build, come back and I'll set
up the repo and the first tickets — or hand the brief and backlog to your
developer."* Where the docs live is your call — a folder, a repo, Notion, Drive.

### Example 2 — a developer building now (build path)

> **You:** "I'm a developer. I want to build this barber-booking app now — set
> me up properly with a repo and a real workflow."

The interview goes deeper. It locks the foundational decisions with you — the
stack, whether it's one package or a monorepo, money/precision rules if payments
are involved, auth, testing tools, deployment target.

Because you're **building now**, it doesn't stop at the docs. On top of the
planning set you also get:

- **technical docs** — architecture, data model, and an AI strategy when the
  product itself uses AI,
- an **operating model** — you're the Product Owner; the AI orchestrates and
  reviews, but **doesn't merge or release** — humans do that,
- a **git workflow** — feature branch → staging → production, semver,
  **test-first**, and **independent AI code review with no self-review**,
- a **bootstrapped repo** — first commit, `main`/`staging` branches, a PR
  template, and a `.gitignore`.

It's tool-agnostic: the repo uses an `AGENTS.md` as the source of truth (most AI
coding tools read it), so you can drive it with Claude, Cursor, Copilot, Codex,
Gemini — or several.

## Where to go next

- Curious how it decides what to create? See [How it works](./how-it-works.md).
- Want to tailor the templates or the process? See [Customizing](./customizing.md).
- Got a quick question? Check the [FAQ](./faq.md).
