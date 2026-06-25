# Changelog

Notable changes to this project. The format loosely follows
[Keep a Changelog](https://keepachangelog.com/); versions follow
[SemVer](https://semver.org/).

## [0.1.0] — 2026-06-25

Initial release.

### Added

- The **`ai-product-starter`** skill: a step-by-step interview that turns an idea
  into a tailored plan, creating only the docs a project actually needs.
- **Two finish lines** — a *plan path* (stops at the docs plus a short hand-off
  brief) for product people and non-coders, and a *build path* (operating model,
  git/PR/review/release workflow, test-first, repo bootstrap) for developers.
- A **"Scope the idea"** step that proposes and estimates features, a phased
  timeline, the tools/services needed, and a rough budget.
- Doc templates: `ROADMAP`, `DESIGN`, `ARCHITECTURE`, `DATABASE`, `AI`,
  `DESIGN-SYSTEM`, `MONETIZATION`, `PITCH-DECK`, `WORKFLOW`, `BACKLOG`, plus
  `AGENTS.md` (full + plan-brief), `CLAUDE.md`, a README, a PR template, a
  `.gitignore`, and an example AI-review workflow.
- **Multi-tool plugin packaging** (Claude Code, Cursor, Codex) with an `AGENTS.md`
  spine and a reviewer-agnostic workflow, so it isn't locked to one AI assistant.
- User docs under [`docs/`](./docs/) and a [`CONTRIBUTING`](./CONTRIBUTING.md) guide.
