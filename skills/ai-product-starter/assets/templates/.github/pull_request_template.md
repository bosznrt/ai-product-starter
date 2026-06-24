<!-- base: {{STAGING_BRANCH}} · no self-review (tag an independent AI reviewer) · merge = humans only -->

## 🎫 Ticket
T<id> — <title>  ·  phase: <P1.0 / P1.1>

## ✨ What & why
<what / which problem it solves — 1-3 lines>

## 🛠 How
<short approach · main modules/files touched · what you reused>

## 🧪 Tests (TDD)
- [ ] RED first (failing test) → GREEN
- [ ] Covers the ticket's acceptance + edge cases (🔴 critical = cover every branch)
- run result: tests green

## ✅ DoD
- [ ] typecheck + lint pass · all tests green
- [ ] data queries scoped (e.g. by user/tenant, if applicable)
- [ ] domain invariants respected (if applicable) <!-- guidance: e.g. money as integer minor units -->
- [ ] AI degrades gracefully, never blocks the user (if AI involved)
- [ ] UI uses design tokens/components — no hardcoded styles (if UI)
- [ ] reuse-first — no duplicated logic
- [ ] affected docs updated

## 🖼 Screenshots (UI tickets)
<before / after>

## 🔗 Deps / breaking
- pre-req tickets: <...> · breaking changes: none

## 🔎 Review
review = **tag your independent AI reviewer** (`@claude review` / Copilot / `@codex review`) · **no self-review** · **humans merge** · once merged → tell the AI assistant to update the backlog

---
> 🤖 **Don't forget to request the AI review** — after opening the PR, post the review request (`@claude review` / `@codex review` / Copilot) as a **separate comment**, not in this description (review workflows trigger on comments, not the PR body) · **never review or merge your own PR**.
