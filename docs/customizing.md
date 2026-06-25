# Customizing

AI Product Starter is built to be tailored. The documents it generates, the
questions it asks, and the defaults it bakes in all live in plain files you can
edit. This page shows where each lives and how to change it without breaking the
skill.

Everything lives under
[`skills/ai-product-starter/`](../skills/ai-product-starter/):

- `SKILL.md` — the process (the interview, the file-selection logic, the steps).
- `assets/templates/` — the documents it fills in and writes out.
- `references/` — the operating-model, git-workflow, and AI-review defaults.

**One golden rule:** keep your changes **tool-agnostic** and your templates
**generic**. Templates are skeletons, not finished documents — use
`{{PLACEHOLDERS}}` for things the AI fills per-project and `<!-- guidance -->`
comments to tell it *how* to fill them. Never hardcode a specific product, a
single AI vendor, or a particular stack into a template; that's the AI's job to
decide per run.

## Edit the document templates

The templates in
[`skills/ai-product-starter/assets/templates/docs/`](../skills/ai-product-starter/assets/templates/docs/)
are what the AI reads and fills in. Want every roadmap to include a section you
care about, or your architecture doc to always call out a particular rule? Edit
the template, not the output.

When you edit a template:

- Keep the `{{PLACEHOLDER}}` style for anything the AI should fill in per
  project (e.g. `{{PROJECT_NAME}}`, `{{FEATURE}}`).
- Use `<!-- guidance: … -->` comments to explain what a section is for and how
  to fill it. The AI replaces the guidance with real content and keeps the
  structure.
- Keep it generic. The first line of most templates is a `<!-- TEMPLATE: … -->`
  note reminding the AI it's a skeleton to adapt, never to ship as-is — keep
  that intent.
- Remember the AI **prunes** anything that doesn't fit a given project, so it's
  fine for a template to carry optional sections; they'll be deleted when
  irrelevant.

## Edit the process (`SKILL.md`)

[`SKILL.md`](../skills/ai-product-starter/SKILL.md) is the brain — the interview
questions, the answer-to-file mapping table, the step order, and the two finish
lines. Edit it to:

- **Change the questions** — add, remove, or reword the interview prompts in
  *Step 0*.
- **Change which answers create which docs** — edit the "Map answers to files"
  table. If you add a new doc type (below), wire its trigger in here too.
- **Change the step flow or finish lines** — e.g. adjust what the plan path
  hands off, or what the build path bootstraps.

Keep `SKILL.md` consistent with itself: if you add a doc to the mapping table,
make sure there's a template for it and that it's referenced in the generation
order in *Step 3*.

## Add your own doc template

To make the skill produce a brand-new document type:

1. **Add the template** under `assets/templates/docs/<NAME>.md`. Write it as a
   skeleton — `{{PLACEHOLDERS}}` + `<!-- guidance -->` — like the existing ones.
2. **Add its trigger** to the "Map answers to files" table in `SKILL.md` so the
   AI knows *when* to create it (which interview answer pulls it in).
3. **Slot it into the generation order** in *Step 3* of `SKILL.md`, so it's
   written at a sensible point relative to the other docs.
4. If other docs should link to it, add those links — and remember the pruning
   rule: the AI removes links to docs that weren't created on a given run, so a
   conditional doc won't leave dangling links behind.

## Change the operating-model / workflow defaults

The defaults the build path bakes in live in
[`skills/ai-product-starter/references/`](../skills/ai-product-starter/references/):

- [`operating-model.md`](../skills/ai-product-starter/references/operating-model.md)
  — the roles (Product Owner / orchestrator / specialist implementers), the
  dispatch mapping, and *why the gates exist*. Edit this to change how work is
  divided, or which specialist handles which kind of ticket.
- [`git-workflow.md`](../skills/ai-product-starter/references/git-workflow.md) —
  the branch model (`feature → PR → staging → release → production`), semver
  rules, commit conventions, and test-intensity tiers. Edit this to use
  different branch names, a different release cadence, or different test tiers.

These references feed the generated `docs/WORKFLOW.md` and `AGENTS.md`. Change
them here and every future project inherits the change. The corresponding
templates — `assets/templates/AGENTS.md`, `assets/templates/docs/WORKFLOW.md`,
and the `.github/` PR template — are where the wording lands, so keep the two in
sync if you change one.

## Swap the AI reviewer

The workflow requires an **independent AI review** of every PR, but it's
deliberately **reviewer-agnostic** — it isn't locked to Claude. To wire up (or
swap to) a different reviewer, see
[`references/ai-review-integrations.md`](../skills/ai-product-starter/references/ai-review-integrations.md),
which covers Claude, GitHub Copilot, and Codex.

The key mechanic stays the same whichever you pick: the review request is a
**comment on the open PR** (e.g. `@claude review`, `@codex review`), and the
result lands as a **visible PR comment**. A ready Claude example ships in
[`assets/templates/.github/workflows/claude.yml`](../skills/ai-product-starter/assets/templates/.github/workflows/);
to default to a different reviewer, swap that workflow (or remove it for a
GitHub-native option like Copilot, which needs no workflow file). Keep the
generated docs generic — "tag your AI reviewer" — so the repos you produce stay
vendor-neutral.

The gate only cares that: (1) an **independent** AI reviewed (not the author),
(2) there was **no self-review**, and (3) a **human** merges. Any reviewer that
satisfies that is valid.

## Where to go next

- Understand the process you're editing: [How it works](./how-it-works.md).
- Try a run first: [Getting started](./getting-started.md).
- Quick questions: [FAQ](./faq.md).
