<!-- TEMPLATE: README.md — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. -->

# {{PROJECT_NAME}}

> **{{ONE_LINER}}**

**Status:** 🚧 {{STATUS}} <!-- guidance: e.g. "Pre-scaffold — planning docs only" → update as the project progresses. -->

## What is {{PROJECT_NAME}}?

<!-- guidance: 2-4 sentences for a human reader. The problem, the wedge, the rough plan. -->

{{PRODUCT_DESCRIPTION}}

## Working model

- **AI assistants** = implementers + orchestrator/QA (see [`AGENTS.md`](./AGENTS.md))
- **User** = Product Owner (direction / review / approval)

## Tech stack

{{STACK}} <!-- guidance: one line — languages, frameworks, data store, hosting. Mark "(planned)" until scaffolded. -->

## Documentation

<!-- guidance: keep only the rows you have. AGENTS.md is the AI spine; the docs below are the deeper references. -->

| File | Contents |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | **source of truth for AI assistants** — product summary, roles, domain rules, conventions, doc map, commands |
| [`docs/WORKFLOW.md`](./docs/WORKFLOW.md) | engineering process — roles, TDD, dispatch, git / PR / review / merge / release gates |
| [`docs/BACKLOG.md`](./docs/BACKLOG.md) | execution backlog — ticket tables per phase + status / PR / release tracking |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | stack, module boundaries, data flow, conventions |
| [`docs/SPEC.md`](./docs/SPEC.md) | product contract — user stories + acceptance criteria |
| {{EXTRA_DOC}} | {{EXTRA_DOC_CONTENTS}} |

> [`CLAUDE.md`](./CLAUDE.md) is a thin pointer to [`AGENTS.md`](./AGENTS.md) for Claude Code.

**Where to start:** PO → `docs/SPEC.md` · AI assistant / dev → `AGENTS.md` → `docs/ARCHITECTURE.md`

## Getting started

<!-- guidance: fill in once scaffolded — install, env setup, run dev server, run tests. Use {{PACKAGE_MANAGER}}. -->

```bash
{{PACKAGE_MANAGER}} install
{{PACKAGE_MANAGER}} {{DEV_CMD}}
```

_Setup details to be added after the project is scaffolded._
