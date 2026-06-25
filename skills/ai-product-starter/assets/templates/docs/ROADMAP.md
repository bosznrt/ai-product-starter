<!-- TEMPLATE: ROADMAP — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit your project. -->

# ROADMAP — {{PROJECT_NAME}} ({{HORIZON, e.g. 12-month plan}})

<!-- guidance: The roadmap sequences WHAT you build and WHEN. Keep it outcome-driven (each phase ships a coherent slice of value + a metric to judge it), not a feature dump. Link out to the deeper docs instead of duplicating them. -->

## Contents
1. [Strategic thesis](#1-strategic-thesis)
2. [Platform strategy](#2-platform-strategy)
3. [Feature master list](#3-feature-master-list)
4. [Phase overview](#4-phase-overview)
5. [Per-phase detail](#5-per-phase-detail)
6. [Beyond Year 1](#6-beyond-year-1)
7. [Risks & dependencies](#7-risks--dependencies)

> Revenue plan: [`MONETIZATION.md`](./MONETIZATION.md) · MVP spec: [`SPEC.md`](./SPEC.md)

---

## 1. Strategic thesis
<!-- guidance: 2-4 sentences. What is the defensible wedge — the one thing you do that competitors don't, and why it compounds? State the bet, not the feature list. e.g. "lead with a free, high-frequency utility, then convert to paid via a separate value-add." -->

- **Wedge:** {{WEDGE}}
- **Why it compounds:** {{MOAT_OR_FLYWHEEL}}

## 2. Platform strategy
<!-- guidance: If you ship across multiple platforms/surfaces, order them by strategic role and say why each comes when it does. Delete this section for a single-surface product. -->

| Order | Platform / surface | Strategic role |
|---|---|---|
| 1 | {{PLATFORM_1, e.g. Web/PWA}} | {{role — validate fast, no app-store friction}} |
| 2 | {{PLATFORM_2}} | {{role — unlocks capability X}} |

## 3. Feature master list
<!-- guidance: List features in build order (simplest → final differentiator). Number them so phases can reference them by #. Tag each with the phase it lands in and whether it's free or paid (if relevant). -->

| # | Feature | Phase | Tier (free/paid) | Notes |
|---|---|---|---|---|
| 1 | {{FEATURE}} | P1 | free | {{note}} |
| 2 | {{FEATURE}} | P1 | paid | {{note}} |
| … | … | … | … | … |

## 4. Phase overview
<!-- guidance: One row per phase. Keep it skimmable — the detail lives in §5. -->

| Phase | Theme | Window | Surface(s) | Ships features |
|---|---|---|---|---|
| P1 | {{THEME}} | {{months 1–N}} | {{surface}} | #1–#N |
| P2 | {{THEME}} | {{months …}} | {{surface}} | #… |
| P3 | {{THEME}} | {{months …}} | {{surface}} | #… |
| P4 | {{THEME}} | {{months …}} | {{surface}} | #… |

## 5. Per-phase detail
<!-- guidance: Repeat this block per phase. "Ships" = what users get. "Goal" = the outcome. "Metric" = how you'll judge it. "Exit" = the bar to advance. Keep AI/dependency lines only if relevant. -->

### P1 — {{THEME}} ({{window}}) · {{surface}}
- **Ships:** {{features #1–#N — short value description}}
- **Goal:** {{the outcome this phase must produce}}
- **Metric:** {{e.g. activation, W4 retention, free→paid conversion}}
- **Exit criteria:** {{what must be true to move on}}
- **AI:** {{AI capability level this phase, if any — else delete}}

### P2 — {{THEME}} ({{window}}) · {{surface}}
- **Ships:** {{…}}
- **Goal:** {{…}}
- **Metric:** {{…}}
- **Exit criteria:** {{…}}

<!-- guidance: add P3, P4 … following the same shape. -->

## 6. Beyond Year 1
<!-- guidance: The long-term vision — features/markets you're NOT doing now but the architecture should not preclude. One line of vision framing. -->

- {{later features / markets}}
> Vision: {{from "{{NARROW_PRODUCT}}" to "{{EXPANSIVE_PRODUCT}}"}}

## 7. Risks & dependencies
<!-- guidance: The things that can sink the plan and what each depends on. Be honest — investors and your future self will both read this. -->

| Risk / dependency | Impact | Mitigation |
|---|---|---|
| {{RISK}} | {{high/med/low}} | {{plan}} |
| {{external dependency, e.g. platform policy / API}} | {{…}} | {{…}} |
