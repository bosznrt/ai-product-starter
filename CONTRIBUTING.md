# Contributing

Thanks for wanting to make **AI Product Starter** better. It's a small, focused
plugin, so changes are easy to reason about — you don't need to learn a big
codebase.

## Ways to help

- **Sharpen the skill** — improve the interview, the file-selection logic, or the
  guidance in [`skills/ai-product-starter/SKILL.md`](./skills/ai-product-starter/SKILL.md).
- **Improve the templates** — the docs it generates live in
  [`skills/ai-product-starter/assets/templates/`](./skills/ai-product-starter/assets/templates/).
  Keep them generic (`{{PLACEHOLDERS}}` + `<!-- guidance -->`) and tool-agnostic.
- **Write docs** — the guides in [`docs/`](./docs/).
- **Add support for another AI tool** — drop in a per-tool plugin manifest
  (see `.claude-plugin/`, `.cursor-plugin/`, `.codex-plugin/`) and a root entry
  file if the tool needs one.
- **Report a problem** — open an issue with what you asked, what it produced, and
  what you expected instead.

## Repo layout

```
.claude-plugin/  .cursor-plugin/  .codex-plugin/   per-tool plugin manifests
AGENTS.md  CLAUDE.md  GEMINI.md                     entry files (point at the skill)
README.md  docs/                                    human-facing docs
skills/ai-product-starter/
  SKILL.md            the process the skill follows
  references/         operating model · git workflow · AI-review integrations
  assets/templates/   the files it generates (docs/, AGENTS, PR template, …)
```

## Principles (please keep these)

- **Tool-agnostic.** Generated repos use `AGENTS.md` as the spine and a
  reviewer-agnostic workflow — don't hard-wire one vendor. "Claude" should appear
  only as one example alongside Copilot / Codex.
- **Plan vs build.** Don't push coding machinery (git / TDD / CI) onto the plan
  path — that's for people who aren't building yet.
- **Create only what's needed.** Prune; strip template lines for features a project
  doesn't have; never leave links to docs that weren't created.
- **Keep `SKILL.md` lean** (ideally under ~500 lines) and explain the *why*, not
  just the rules.

## Testing a change

There's no build step. To sanity-check the skill, run it on a few personas and
confirm it behaves:

- a **non-technical founder** with a commercial idea → interviews, picks the
  product docs, **stops at the docs** (plan path), no git/TDD;
- a **developer building now** → continues into the **build path** (operating
  model, workflow, repo bootstrap);
- an **internal tool / CLI / throwaway** → prunes monetization / UI / heavy docs.

Then check the generated output has **no dangling links** and no leftover
`{{PLACEHOLDER}}` tokens.

## Pull requests

Fork → branch → make the change → open a PR describing **what** you changed and
**why**. Small, focused PRs are easiest to review. Be kind and assume good intent.

## Releasing (maintainers)

- Bump `version` in `package.json` and the four plugin manifests
  (`.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`,
  `.cursor-plugin/plugin.json`, `.codex-plugin/plugin.json`), and add a
  `CHANGELOG.md` entry.
- Tag `vX.Y.Z` and push.
- Publish to npm with `npm publish` (the package ships `bin/` + `skills/`). Until
  it's published, `npx github:bosznrt/ai-product-starter init` runs straight from
  the repo.
