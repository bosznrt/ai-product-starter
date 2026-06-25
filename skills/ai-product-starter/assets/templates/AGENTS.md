<!-- TEMPLATE: AGENTS.md — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. -->

# AGENTS.md

**This is the source of truth for every AI assistant working in this repo.** Read it first, follow it exactly. Tool-specific entry files (e.g. `CLAUDE.md`) are thin pointers back to this file.

<!-- guidance: AGENTS.md is tool-agnostic on purpose — it works for Claude Code, Copilot, Codex, Cursor, or any AI assistant. Keep it the single spine; deeper detail lives in docs/ (see the map below). -->

## Product

**{{PROJECT_NAME}}** — {{ONE_LINER}}

<!-- guidance: 2-4 sentences. What the product is, who it's for, and the *defensible wedge* — the one thing that makes it different. Be concrete; an AI assistant uses this to make a hundred small judgment calls. -->

{{PRODUCT_SUMMARY}}

## Working model & roles

<!-- guidance: PRESERVE this three-role split. It is the heart of the operating model: a non-coding human PO, an AI orchestrator that reviews but does not implement, and specialist implementers. Replace "the AI assistant" with your tool's name only in the thin pointer file, NOT here. -->

- **User = Product Owner (PO).** Sets direction, prioritizes, reviews, approves. Does not write feature code.
- **AI assistant (main session) = Orchestrator + QA / tech lead.** Refines tickets, **dispatches each ticket to the right specialist agent**, reviews output for correctness / TDD / efficiency / **reuse**, enforces the DoD, and updates backlog tracking. Each PR must pass an **independent AI code review** (any independent AI — **no self-review**) before a human merges. **The AI assistant does NOT write implementation code, does NOT merge PRs, and does NOT release** — implementation is delegated to a specialist agent; **merging a PR and releasing to production are human-only gates.** After a human merges, they tell the AI assistant, and it updates the backlog status.
- **Specialist agents = implementers.** One ticket → the agent whose role fits (mapping in [`docs/WORKFLOW.md`](./docs/WORKFLOW.md) §Dispatch). They implement test-first; the orchestrator QA-reviews before the PR merges.

Keep changes reviewable by a non-coding PO: small, well-scoped commits with plain-language summaries; surface trade-offs rather than burying them in code.

## Critical domain rules (easy to get wrong)

<!-- guidance: List the 3-6 domain invariants that are easy to violate and expensive when violated. These are the rules a generic coding model would NOT know. Examples below are placeholders — replace with YOUR domain's traps. Delete this whole section only if your product genuinely has none (rare). -->

- {{DOMAIN_RULE_1}} <!-- guidance: e.g. a definition that's subtly different from the obvious one ("this period" ≠ "this calendar month") -->
- {{DOMAIN_RULE_2}} <!-- guidance: e.g. a filter that must always be applied to a class of records -->
- {{DOMAIN_RULE_3}} <!-- guidance: e.g. an edge case the implementation must handle (boundary/overflow/timezone) -->
- Keep the trickiest domain logic in a pure, **unit-tested** module so the rules above are enforced in one place.

## Conventions

<!-- guidance: The non-negotiables every ticket follows. Keep TDD, reuse-first, and the type/UI/data rules. Replace stack-specific lines with yours. -->

- **TDD is mandatory.** Write a failing test → implement → refactor; **all logic code must be covered.** Critical modules need edge-case coverage. Test intensity tiers are defined in [`docs/WORKFLOW.md`](./docs/WORKFLOW.md).
- **Reuse-first (DRY).** Before implementing any ticket, search for existing utilities / modules / components to reuse. No duplicated logic — extract shared modules. QA review rejects duplication.
- **Per-ticket workflow** (dispatch → branch from `{{STAGING_BRANCH}}` → RED/GREEN/REFACTOR → PR → independent AI review → human merge → update backlog → human release) is defined in [`docs/WORKFLOW.md`](./docs/WORKFLOW.md). Tickets + status tracking live in [`docs/BACKLOG.md`](./docs/BACKLOG.md). Update the backlog when a ticket moves.
- {{LANGUAGE_CONVENTION}} <!-- guidance: e.g. "TypeScript strict; avoid `any`." or "Type hints required; mypy clean." -->
- {{UI_CONVENTION}} <!-- guidance: e.g. "UI follows docs/DESIGN-SYSTEM.md — use tokens + shared components only; never hardcode colors/spacing/radius." Delete if no UI. -->
- {{DATA_CONVENTION}} <!-- guidance: e.g. a data-handling invariant — money stored as integer minor units, dates always UTC, etc. -->
- Keep files focused — a large file usually means it's doing too much; split by responsibility.

## AI / external-service conventions

<!-- guidance: Keep this section only if the product calls an LLM or other AI/ML service. Otherwise delete it. The principle generalizes: one service module, validated structured output, graceful degradation. -->

- All AI/LLM access goes through **one** AI service module; force structured output, validate it, and **degrade gracefully** — an AI failure must never block the core user action.
- Read the relevant provider/SDK reference for current model IDs and patterns **before** writing AI code — do not rely on memory. Keys via env vars; never hardcode. See [`docs/AI.md`](./docs/AI.md).

## Documentation map

<!-- guidance: Point to the deeper docs. Keep only the rows you actually have; delete the rest. WORKFLOW + BACKLOG are the two that this template ships. -->

| Doc | When to read |
|---|---|
| [`docs/WORKFLOW.md`](./docs/WORKFLOW.md) | engineering process — roles, locked decisions, TDD, dispatch, PR/review/merge/release gates |
| [`docs/BACKLOG.md`](./docs/BACKLOG.md) | execution backlog — ticket tables per phase + status/PR/release tracking |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | stack, module boundaries, data flow, conventions |
| [`docs/SPEC.md`](./docs/SPEC.md) | product contract — user stories + acceptance criteria |
| [`docs/AI.md`](./docs/AI.md) | AI strategy, behavior specs, model choices |
| {{EXTRA_DOC}} | {{EXTRA_DOC_WHEN}} |

## Commands

<!-- guidance: REQUIRED placeholder section. Fill with the real commands once the repo is scaffolded — run/dev, build, lint, typecheck, test. Package manager: {{PACKAGE_MANAGER}}. Keep them copy-pasteable from repo root. -->

```bash
{{PACKAGE_MANAGER}} {{DEV_CMD}}        # run the app locally
{{PACKAGE_MANAGER}} {{BUILD_CMD}}      # build
{{PACKAGE_MANAGER}} {{LINT_CMD}}       # lint
{{PACKAGE_MANAGER}} {{TYPECHECK_CMD}}  # typecheck
{{PACKAGE_MANAGER}} {{TEST_CMD}}       # run tests
```

<!-- guidance: Add the repo layout (directory tree) here once scaffolded, so an AI assistant knows where things live. -->
