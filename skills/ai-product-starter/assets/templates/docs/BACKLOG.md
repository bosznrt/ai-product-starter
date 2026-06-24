<!-- TEMPLATE: BACKLOG.md — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. -->

# BACKLOG — Execution backlog

> Ticket table per phase (release tracking built in) · **process / rules / roles / DoD / git gates → [`WORKFLOW.md`](./WORKFLOW.md)**
> **Status legend:** `☐` todo · `◐` doing · `🔬` PR / in review · `🟢` merged → `{{STAGING_BRANCH}}` · `🚀` released → `{{PRODUCTION_BRANCH}}` · `🔴` = critical-test ticket · update the table every time a ticket moves.
> **Read before picking up a ticket:** [`WORKFLOW.md`](./WORKFLOW.md) (roles / TDD / gates) + the relevant design docs.
> **▶ next up:** **T0.3** → T0.4 → T0.5 <!-- guidance: keep this "next up" pointer current — it tells the AI assistant where to start. List the next 1-3 ticket IDs in order, with a one-line reason if the order is non-obvious. -->

<!-- guidance: Organize tickets into PHASES, each phase = one planned release with a target version. Within a phase, one row per ticket. Keep the column order: status · ID · ticket (with inline acceptance) · deps · PR · prod. The two rows below are WORKED EXAMPLES with placeholder tickets — replace them with your real backlog, but keep the format. -->

---

## P1.0 — {{PHASE_NAME}}  ·  target release **v0.1.0**

> **Groups:** {{MILESTONE_GROUPS}} <!-- guidance: optional one-line index of the milestone clusters inside this phase. -->

| Status | ID | Ticket — detail (specific acceptance) | Deps | PR | prod |
|---|---|---|---|---|---|
| 🟢 | T0.1 | Init repo + `.gitignore` + commit docs on `{{PRODUCTION_BRANCH}}` + create `{{STAGING_BRANCH}}` | — | bootstrap | — |
| 🔬 | T0.2 | Scaffold project skeleton ({{STACK}}) · app builds + runs locally | T0.1 | #1 | — |
| ☐ | T0.3 | Tooling: linter / formatter / strict config / scripts / `.env.example` + env validation | T0.2 | — | — |
| ☐ | T0.4 | Test setup: {{TEST_FRAMEWORK}} + one example test · test command green | T0.2 | — | — |
| ☐ | T0.5 | App shell + layout + design tokens / theme | T0.2 | — | — |
| 🔴 | T1.1 | {{CRITICAL_TICKET_EXAMPLE}} — **cover edge cases** | T0.4 | — | — |
| ☐ | T1.2 | {{TICKET_EXAMPLE}} | T1.1 | — | — |

<!-- guidance: 🔴 marks a critical-test ticket (see WORKFLOW test-intensity tiers). Add as many rows as the phase needs; keep deps pointing at prerequisite ticket IDs. -->

---

## P1.1 — {{NEXT_PHASE_NAME}}  ·  target release **v0.2.0**

> **Groups:** {{NEXT_MILESTONE_GROUPS}}

| Status | ID | Ticket — detail (specific acceptance) | Deps | PR | prod |
|---|---|---|---|---|---|
| ☐ | T10.1 | {{TICKET_EXAMPLE}} | T1.2 | — | — |
| 🔴 | T10.2 | {{CRITICAL_TICKET_EXAMPLE}} — **cover edge cases** | T10.1 | — | — |

> ### 🚩 End of P1.1 — {{PHASE_EXIT_CRITERIA}} <!-- guidance: one line stating what "done" means for this phase. -->

---

## 📌 Parked / future (break into ticket tables as they near — see ROADMAP)

<!-- guidance: keep coarse-grained future scope here so it isn't lost, without cluttering the active tables. -->

- **Next phase:** {{FUTURE_SCOPE}}
- {{FUTURE_ITEM}}

## ❓ Open decisions (don't block P1.0 — decide when the ticket arrives)

<!-- guidance: track undecided questions so they surface at the right ticket instead of stalling planning now. -->

- {{OPEN_QUESTION}} → decide at {{TICKET_ID}}
