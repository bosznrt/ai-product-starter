# AGENTS.md — AI Product Starter

This repository is a **plugin** that gives your AI coding assistant one skill:
**kick off a new product repository with a complete planning foundation before
any code gets written.**

## For the AI assistant reading this

When the user signals they are **starting something new** — a new app, product,
MVP, side-project, prototype, startup, or "let's set up this repo properly" —
load and follow the skill at:

```
skills/ai-product-starter/SKILL.md
```

It walks you through interviewing the user about the product, then generating a
coherent set of planning docs, an operating model, a TDD git/PR/AI-review/release
workflow, and a phased execution backlog. Do not jump straight to scaffolding
code — the whole point is to agree on the plan first.

The skill is **tool-agnostic**: the repos it produces use an `AGENTS.md` as their
source of truth (not a Claude-specific file), and frame code review around "any
independent AI reviewer" rather than one vendor. Keep that spirit.

## For humans

See [`README.md`](./README.md) for installation across coding agents and how to
use it. The skill itself lives in [`skills/ai-product-starter/`](./skills/ai-product-starter/).
