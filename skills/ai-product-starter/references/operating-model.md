# Operating model

The model that makes AI-driven execution reliable and keeps a non-coding owner in
control. Put a condensed version of this in the new repo's `AGENTS.md`, and the
full process in `docs/WORKFLOW.md`.

## Roles

| Who | Role |
|---|---|
| **Human = Product Owner (PO)** | Sets direction, prioritizes, reviews, approves. **Merges PRs and releases to production — these are human-only gates.** Does not write feature code. |
| **AI assistant (main) = Orchestrator + QA / tech lead** | Refines each ticket, **dispatches it to the right specialist**, reviews output for correctness / tests / efficiency / **reuse**, enforces the Definition of Done, updates the backlog. **Does not write the implementation, does not merge, does not release.** |
| **Specialist agents = implementers** | One ticket each, **test-first**. The orchestrator QA-reviews their work before the PR merges. |

Why separate "orchestrator" from "implementer" even for a solo builder: it forces
small, well-scoped changes, an explicit review step, and a legible AI role. The
orchestrator holds the plan and quality bar; implementers hold one task at a time.
This is what lets the AI run for long stretches without drifting.

## Dispatch — which specialist for which ticket

Adapt to your stack; the principle is "match the ticket to a focused role":

- API / schema / service / domain logic / payments → **backend specialist**
- UI components / screens → **frontend specialist**
- end-to-end / test hardening / verification suite → **QA / test specialist**
- auth / payments / compliance-sensitive work → add a **security review** pass
- quality / de-duplication pass → a **simplifier / refactor** pass

If your tool doesn't have named sub-agents, the same human-in-the-loop still
applies: implement test-first, then review with fresh eyes (ideally a different
AI) before merging.

## The gates (why they exist)

- **No self-review.** Code is reviewed by an *independent* reviewer — a different
  actor than the one who wrote it. AI reviewing its own output rubber-stamps its
  own blind spots. See `ai-review-integrations.md`.
- **Humans merge and release.** Merging to the integration branch and releasing to
  production are irreversible-ish, outward-facing actions. Keep them as human
  decisions. The AI prepares everything up to the gate, then stops.
- **The backlog is the source of truth.** After a human merges, they tell the AI,
  which updates the ticket's status. A fresh session reads the backlog to know
  what's done and what's next — not the chat history.

## Reuse-first (DRY)

Before implementing any ticket, search for existing utilities / modules /
components to reuse. Shared logic lives in one place. The QA review rejects
duplication. This compounds: every reused module is one less thing to test and
keep correct.
