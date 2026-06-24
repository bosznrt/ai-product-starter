<!-- TEMPLATE: ARCHITECTURE — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit. -->

# ARCHITECTURE

## Working model
<!-- guidance: who decides, who implements, who reviews/merges. Keep it 1-2 lines or point at AGENTS.md to avoid duplication. -->
See `AGENTS.md` for the authoritative roles + workflow. Keep changes small, well-scoped, and reviewable.

## Repo structure
<!-- guidance: show the directory tree your AI assistant should navigate. Mono-repo or single app — either is fine. Mark where shared/domain logic lives so it is not duplicated. -->

```
/                      # repo root
  AGENTS.md            # roles, workflow, conventions for your AI assistant
  {{APP_DIR}}/         # e.g. app/ or apps/web — the application
  {{SHARED_DIR}}/      # e.g. packages/core or src/lib — shared domain logic
  docs/                # project documentation
```

**Key rule:** shared domain logic ({{e.g. money, date/cycle math, validation schemas, AI client}}) lives in one place ({{SHARED_DIR}}) and is imported, never duplicated.

## Tech stack
<!-- guidance: list the ACTIVE stack only — framework, language, styling, data layer, AI provider, deploy target. -->
- **{{STACK}}** — e.g. framework + language
- **{{STYLING}}** — e.g. CSS/styling approach
- **{{DATA_LAYER}}** — e.g. ORM + database
- **{{AI_PROVIDER}}** — AI features (see `AI.md`)
- Deploy: {{DEPLOY_TARGET}}

## Module boundaries
<!-- guidance: keep logic that is "large and must be exact" in separate, independently testable modules with no I/O. List yours. -->
- **AI service module** — the only place that talks to your AI provider; structured output + validation + graceful degradation (see `AI.md`)
- **{{DOMAIN_MODULE}}** — pure functions for your core domain math (no I/O, fully unit-tested)
- **data layer** — data-access/repository helpers; aggregations live here
- **UI / app** — presentation; the main screen is {{PRIMARY_SCREEN}}

## Data flow
<!-- guidance: sketch how data enters, gets processed (AI/parsing/validation), persisted, and aggregated for display. Replace the example. -->
```
[input sources: {{e.g. manual / natural language / file import / image}}]
      │
      └─→ AI/parse → draft → user confirms
              └─→ data layer → database
                      └─→ aggregate → {{PRIMARY_SCREEN}}
```

## Domain landmines (read before writing aggregations)
<!-- guidance: list the rules that are EASY TO GET WRONG in YOUR domain. Generic examples below — keep what applies, replace the rest. -->
- **Money is integer minor units, never float** — e.g. store cents (or your currency's smallest unit) as integers, or use a Decimal type; pick one and use it system-wide.
- **Timezones & precision** — e.g. compute "this period" in an explicit timezone; watch day-of-month edge cases (day 31 in a 30-day month) and rounding.
- **Record-type semantics** — e.g. only count the record types that should count; never aggregate the wrong type into a total.
- **{{YOUR_LANDMINE}}** — the domain-specific rule a new contributor would get wrong.

## Conventions
<!-- guidance: keep your real conventions. Examples below. -->
- {{LANGUAGE}} strict; avoid untyped escape hatches.
- Keep files focused — a growing file usually means it does too much; split by responsibility.
- Secrets via env only — never hardcode.

## Commands
<!-- guidance: list the commands your AI assistant runs most. -->
```bash
{{DEV_CMD}}        # run the app locally
{{BUILD_CMD}}      # build
{{LINT_CMD}}       # lint
{{TEST_CMD}}       # test
```
