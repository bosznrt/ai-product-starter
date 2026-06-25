<!-- TEMPLATE: SPEC — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit your project. -->

# SPEC — {{PROJECT_NAME}} product design + MVP spec

<!-- guidance: This is the MVP contract — the WHAT, as user stories with acceptance criteria your AI assistant (Claude / Copilot / Codex) and reviewers can verify against. Keep it testable: every story needs an AC that's pass/fail. -->

## 1. Context & goals
<!-- guidance: Who is this for, what job are they hiring it to do, and what does success look like for the MVP? 2-4 sentences. -->

- **Target user:** {{TARGET_USER}}
- **Core job:** {{the job-to-be-done}}
- **MVP success:** {{the outcome that proves the wedge}}

## 2. Scope
<!-- guidance: What's IN the MVP. Bullet the capabilities; the detail goes in §3 as stories. -->

- {{capability}}
- {{capability}}

## 3. User stories + acceptance criteria
<!-- guidance: Group by feature area. Each story = one user-facing capability. Each AC = a verifiable condition (the reviewer/test checks it). Write AC as pass/fail, not vibes. Encode domain landmines here so they get tested. -->

### 3.1 {{Auth / accounts}}
{{As a user, I can sign up / log in with {{method}}.}}
- **AC:** {{each user's data is fully isolated — they see only their own records}}

### 3.2 {{Core entity management}}
{{As a user, I can create/edit/delete {{ENTITY}}.}}
- **AC:** {{validation rule}}
- **AC:** {{domain rule — e.g. a derived field handles month-end / boundary edge cases correctly}}

### 3.3 {{Input / data-entry layer}}
<!-- guidance: If "getting data in" is your hardest UX, design it as a layered system (manual → assisted → automated) and spec each path. Mark which paths are free vs paid if relevant. -->
{{As a user, I can add data via {{manual / import / AI-assisted / automatic}}.}}
- **AC:** {{each input path produces a correct, reviewable record}}

### 3.4 {{AI-assisted feature}}
<!-- guidance: Spec the AI behavior AND its failure mode. AI must degrade gracefully — an AI failure must never block the user's core action (e.g. saving). Force structured output and validate it. -->
{{As a user, {{AI does X automatically}}.}}
- **AC:** {{output is validated; on AI failure the user can still {{complete the core action}} and correct manually}}

### 3.5 {{Hero view / dashboard}}
<!-- guidance: The "wow" surface — the one screen that delivers the wedge. Spec exactly what it aggregates and the correctness rule for the totals. -->
{{As a user, I see {{the aggregated view}}.}}
- **AC:** {{aggregations exclude the right record types; displayed totals equal the sum of the filtered underlying records}}

### 3.6 {{Domain-specific view}}
{{As a user, I can {{secondary key capability}}.}}
- **AC:** {{rule}}

## 4. UX notes
<!-- guidance: Cross-cutting UX principles (empty states, loading, error recovery, mobile-first, accessibility). Reference your design-system doc rather than restating tokens. -->

- {{principle}}

## 5. Non-goals
<!-- guidance: Explicitly out of scope for the MVP. Saying no here prevents scope creep and review confusion. -->

- {{not doing X yet}}

## 6. Open questions
<!-- guidance: Decisions deferred to implementation planning. List them so they don't get silently assumed. -->

- {{question to resolve before / during build}}
