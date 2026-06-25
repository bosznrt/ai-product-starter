# FAQ

Common questions about AI Product Starter. New here? Start with
[Getting started](./getting-started.md).

### Do I need to be a developer?

No. It's built as much for founders, product managers, and non-coders as for
engineers. It asks plain-language questions, drops the jargon when you're not
technical, and for non-coders it produces the strategy, product, and spec docs
while stopping short of any coding machinery. You get a plan you can act on or
hand to a builder.

### Does it write code?

Not on the plan path — there, the deliverable *is* the documents. On the build
path (when you say you're a developer building now), it sets up a repo, a git
workflow, a PR template, and test-first conventions, but it doesn't implement
your features for you in this skill — it lays the foundation so building can
start cleanly. And it never merges or releases on its own; humans do that.

### What if I only want one doc?

That's fine. If you already have a project and just want, say, a roadmap or an
architecture doc, you can use the matching template directly without running the
whole interview. The full flow is for kicking off something new; a single
template is a perfectly valid use.

### How does it decide which files to create?

Every file is earned by an answer in the interview. "Has a UI?" pulls in a
design system; "stores data?" pulls in a data model; "makes money?" pulls in a
monetization doc; "raising funding now?" pulls in a pitch deck; and so on. A
small fixed set is always created (a build brief, README, roadmap, spec, and
backlog). Then it shows you the proposed list and asks you to add or drop any
before writing anything. The full mapping is in
[How it works → How it decides which files to create](./how-it-works.md#how-it-decides-which-files-to-create).

### Is it locked to Claude?

No — it's tool-agnostic. The output uses an `AGENTS.md` as its source of truth,
which most AI coding tools read, plus a thin `CLAUDE.md` pointer for Claude Code.
The review/release workflow is reviewer-agnostic too: you can wire up Claude,
Copilot, or Codex (see
[swap the AI reviewer](./customizing.md#swap-the-ai-reviewer)). You can run the
skill itself from Claude Code, Cursor, Codex, Gemini, or any assistant — see the
README's [Install](../README.md#install) section.

### Can I use it on an existing project?

No — it's for **kicking off and planning new projects**, not for routine work
inside an already-planned codebase (a single feature, a bug fix, a refactor).
That's its whole purpose: stopping to plan *before* code exists. (If you have
some pre-existing code but the project still isn't really planned, the skill can
reconcile its templates with what's there rather than overwrite it — but it's
not a tool for evolving a mature codebase.) If you just want one document for an
existing project, see "What if I only want one doc?" above.

### Where do the generated docs live?

That's your call. On the build path they land in your repo (`AGENTS.md`,
`CLAUDE.md`, `README.md`, and a `docs/` folder), and the planning becomes the
first commit. On the plan path there's no repo by default — the docs can live
anywhere you like: a folder, a repo, Notion, Google Drive. It only runs
`git init` if you want version control.

### How do I update the plugin?

See the README's updating instructions —
[**Updating**](../README.md#updating). In short, you update it the same way you
update any plugin for your AI assistant.

### How do I change the templates or the questions?

Edit the files under `skills/ai-product-starter/` — the templates, the process
(`SKILL.md`), or the workflow defaults. See
[Customizing](./customizing.md) for a full walkthrough.

### What are the "two finish lines"?

The skill ends one of two ways depending on who's building. The **plan path**
stops at the documents (for founders and non-coders handing off later). The
**build path** keeps going into a repo, a git/review/release workflow, and
test-first conventions (for developers building now). Details and a side-by-side
comparison are in
[How it works → The two finish lines](./how-it-works.md#the-two-finish-lines).
