<!-- TEMPLATE: MONETIZATION — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit your project. -->
<!-- Include only for commercial/fundraising products; skip for internal tools or OSS. -->

# MONETIZATION — {{PROJECT_NAME}} (investor-facing)

<!-- guidance: This doc explains HOW the product makes money and WHY the unit economics work. Keep numbers honest and sourced; mark every assumption you haven't validated yet. -->

## 1. Executive summary
<!-- guidance: 3-5 sentences. The market in one line (sized, sourced), how you acquire users (the free hook), and the 1-2 revenue streams that turn them into money. End with why acquisition and monetization don't conflict. -->

- **Market:** {{ONE_LINE_SIZED_MARKET — with source}}
- **Hook:** {{the free value that pulls users in}}
- **Revenue:** {{stream 1 — recurring/subscription}} + {{stream 2 — e.g. affiliate/referral}}
- **Why it holds:** {{the feature that retains users ≠ the feature that earns — interests align}}

## 2. Strategic logic — why free → paid works
<!-- guidance: 2-3 sentences. Why does giving the core away and charging for the upgrade make the whole thing stronger (retention, data, trust) rather than cannibalize revenue? -->

{{ARGUMENT}}

## 3. Revenue streams
<!-- guidance: One subsection per stream. Mark each: 🟢 core / 🔵 optional / 🟣 long-term, and the phase it opens. Spell out the free vs paid split for the primary stream. -->

### 3.1 {{PRIMARY_STREAM, e.g. Freemium subscription}} 🟢 *(core, opens {{phase}})*
<!-- guidance: Define the free tier and the paid tier(s). What's gated and why someone upgrades. Price + billing period (avoid lifetime if you carry per-user ongoing cost — e.g. AI/API spend never stops). -->

| Capability | Free | {{Pro}} |
|---|---|---|
| {{capability}} | ✓ | ✓ |
| {{capability}} | — | ✓ |

- **Price:** {{amount}} / {{month or year}}

### 3.2 {{SECONDARY_STREAM, e.g. affiliate / referral}} 🟢 *(opens {{phase}})*
<!-- guidance: How it pays, what triggers payout, and why it doesn't erode trust (recommend on the user's actual benefit, not the highest commission). -->

{{DESCRIPTION}}

### 3.3 {{ADD_ON_OR_ONE_TIME}} 🔵 *(optional)*
{{DESCRIPTION — delete if N/A}}

### 3.4 {{LONG_TERM_STREAM, e.g. B2B aggregated insight}} 🟣 *(Y1+)*
<!-- guidance: Optionality only — gate behind privacy/regulatory compliance and never at the cost of user trust. -->
{{DESCRIPTION — delete if N/A}}

### Deliberately avoided early
<!-- guidance: Name the monetization you're NOT doing yet and why (e.g. intrusive ads that hurt the trust the wedge depends on). -->
- {{thing avoided}} — {{why}}

## 4. Revenue timeline
<!-- guidance: Map each stream to the ROADMAP phase where it switches on. -->

| Phase | Stream(s) live | Note |
|---|---|---|
| P1 | {{stream}} | {{…}} |
| P4 | {{stream}} | {{…}} |

## 5. Unit economics (framework — fill with real data once validated)
<!-- guidance: State assumptions explicitly; every one must be replaced with measured data before you pitch on it. -->

- **ARPU:** {{target — measure for real in P3–P4}}
- **Free→paid conversion:** {{target %}}
- **CAC:** {{by channel — organic/referral lowest; target payback < {{N}} months}}
- **LTV:** {{(ARPU × avg lifetime) + other streams}}; target **LTV/CAC ≥ 3**

### 5.1 COGS & margin
<!-- guidance: If your product has real per-user cost (e.g. AI/API calls, infra), estimate it and show the margin. Name your biggest cost lever (e.g. cache/dedup so you only pay per NEW item, not every event). Money/cost note as a generic example: track costs in the smallest unit and avoid floating-point money math. -->

- **Per-unit cost drivers:** {{e.g. per-request inference, per-image OCR}}
- **Biggest cost lever:** {{e.g. cache/dedup repeated work}}
- **Gross margin:** {{target %}} *if {{fair-use cap}} is enforced*

### 5.2 Burn & runway
<!-- guidance: Monthly burn (team is usually ~70-80%), then runway → ask. Keep it a framework with placeholders, not invented numbers. -->

| Item | {{/month}} |
|---|---|
| Team | {{…}} |
| Product/infra | {{…}} |
| Other (tools/legal/buffer) | {{…}} |
| **Total** | **{{…}}** |

- **Ask:** {{amount}} for ~{{N}} months runway — *valuation/equity negotiated separately*
- **Use of funds:** team ~{{%}} · product ~{{%}} · ops/legal/buffer ~{{%}}

## 6. Market sizing (TAM / SAM / SOM)
<!-- guidance: Sourced, dated numbers (cite in §8). TAM = whole market; SAM = your reachable segment; SOM = realistic 12-24mo capture. Add a "pain signal" data point that proves the problem is real and large. -->

- **TAM:** {{…}}
- **SAM:** {{your reachable segment}}
- **SOM:** {{12–24mo target — anchor to a comparable's real traction}}
- **Pain signal:** {{a hard number proving the problem is acute}}

### 6.1 Competitive landscape
| Product | Type | Model / price | Gap we win |
|---|---|---|---|
| {{competitor}} | {{…}} | {{…}} | {{your edge}} |

## 7. Metrics investors care about
<!-- guidance: Pick a North Star that captures real value delivered, then the growth/retention/revenue metrics under it. -->

- **North Star:** {{the count of users getting the core value}}
- **Growth:** MAU, % organic, referral coefficient
- **Retention:** DAU/MAU, W1/W4/M3 retention
- **Revenue:** MRR, free→paid, churn, ARPU, LTV/CAC

## 8. Sources
<!-- guidance: Cite every market number above with source + date. Unsourced numbers get cut by investors. -->
- {{source — figure, publisher, date, URL}}
