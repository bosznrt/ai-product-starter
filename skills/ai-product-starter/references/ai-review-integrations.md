# AI review integrations

The workflow requires an **independent AI review** of every PR — independent
meaning a different actor than the one who wrote the code, and **no self-review**.
This is deliberately **reviewer-agnostic**: wire up whichever assistant your team
uses. Keep the docs generic ("tag your AI reviewer") so the repo isn't locked to
one vendor.

The key mechanic, whatever you pick: the review request is a **separate comment on
the open PR** (e.g. `@claude review`, `@codex review`), not text in the PR
description — comment-triggered bots don't fire on the PR body. And the result
should land as a **visible PR comment** the team can read, not buried in CI logs.

## Claude (Claude Code GitHub App)

Default example shipped in `assets/templates/.github/workflows/claude.yml`.

- Install the Claude GitHub App on the repo (e.g. `/install-github-app` in Claude
  Code, or from the GitHub Marketplace). It sets a `CLAUDE_CODE_OAUTH_TOKEN`
  secret.
- The workflow triggers on comments containing **`@claude`**. To review a PR,
  comment **`@claude review`**.
- It runs on the repo's installed App + secret, so **any collaborator with write
  access can trigger it without their own Claude account** — usage bills to the
  account that installed the App.
- Prefer **manual `@claude review`** over an always-on auto-review workflow: it's
  controlled, and the result is a visible comment. (An auto-on-every-push review
  can run silently and clutter; if you use one, make sure it posts a PR comment.)

## GitHub Copilot

- GitHub-native — no workflow file needed. Requires a Copilot subscription with
  code review enabled for the repo/org.
- Request it by adding **"Copilot" as a reviewer** on the PR, or enable automatic
  Copilot review via a repository ruleset.
- Billed to the Copilot license, not a shared token.

## Codex (OpenAI)

- Install the OpenAI Codex GitHub app and connect the repo (needs an OpenAI/Codex
  account).
- Trigger with a **`@codex review`** comment, similar to the Claude flow.

## What matters for the gate

The gate doesn't care *which* AI reviewed — only that:

1. an **independent** AI (not the author) reviewed,
2. there was **no self-review / self-approval**, and
3. a **human** merges.

Pick one as your default to avoid noisy, conflicting reviews; add a second only
when you specifically want a stronger second opinion.
