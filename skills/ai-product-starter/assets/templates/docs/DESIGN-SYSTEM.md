<!-- TEMPLATE: DESIGN-SYSTEM — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit. -->
<!-- Include only for projects with a UI; skip for CLI/service/library. -->

# DESIGN-SYSTEM — design contract (every UI ticket follows this)

> **Reference look:** {{describe the visual direction in one line — e.g. light cards, large radii, soft shadows, one brand accent}}
> **Rule:** every UI ticket uses **tokens + components from this file only — never hardcode colors / spacing / radius / shadow.** QA rejects work that doesn't.
> **Theme:** {{light-first / dark-first / both}}.
> **Locked decisions:** {{font, accent system, theme priority — record what is settled}}

## 1. Color tokens
<!-- guidance: define SEMANTIC tokens (reference these names in UI, never raw hex). Fill the values for your palette. -->
| Token | Value | Role |
|---|---|---|
| `--bg` | `{{#hex}}` | app background |
| `--surface` | `{{#hex}}` | cards / panels |
| `--ink` | `{{#hex}}` | primary text / numbers |
| `--muted` | `{{#hex}}` | labels / captions |
| `--border` | `{{#hex}}` | hairline borders |
| `--brand` | `{{#hex}}` | brand / charts / primary highlight |
| `--action` | `{{#hex}}` | primary buttons / active tabs |
| `--positive` | `{{#hex}}` | success / positive amounts |
| `--warning` | `{{#hex}}` | warning state |
| `--danger` | `{{#hex}}` | error / over-limit |
| `--focus` | `{{#hex}}` | focus ring |

<!-- guidance: if you support dark mode, provide overrides under [data-theme="dark"]. Define a small data-viz palette for charts. -->
**Dark mode (if applicable):** override the vars above under `[data-theme="dark"]`.
**Data-viz palette:** {{ordered list of chart colors}}

## 2. Typography
<!-- guidance: one font family, a scale, and a rule for numbers (tabular-nums matters for finance/data apps). -->
- **Family:** `--font-sans: {{"YourFont", system-ui, sans-serif}}`
- **Numbers:** `font-variant-numeric: tabular-nums`, weight 600–700 (aligned digits)

| Level | size | weight | use |
|---|---|---|---|
| display | {{34}} | 700 | hero number / heading |
| h2 | {{22}} | 600 | panel headings |
| body | {{15}} | 400 | content |
| label | {{13}} | 500 | labels / eyebrows |
| micro | {{12}} | 500 | timestamps / captions |

## 3. Spacing · Radius · Shadow · Motion
<!-- guidance: fill the scales. Keep motion respectful of prefers-reduced-motion. -->
- **Spacing (base 4):** `{{4·8·12·16·24·32·48·64}}`
- **Radius:** `--r-panel:{{}}` · `--r-card:{{}}` · `--r-input:{{}}` · `--r-pill:999`
- **Shadow:** `--sh-1: {{}}` · `--sh-panel: {{}}` (soft, low-opacity)
- **Motion:** 150–200ms ease-out; respect `prefers-reduced-motion`; avoid gratuitous animation.

## 4. Signature element
<!-- guidance: the ONE custom visual that makes the product recognizable (a hero card, a distinctive chart, etc.). Delete if you don't have one. -->
{{Describe your signature UI element and how it appears on the main screen.}}

## 5. Component inventory (primitives — build once, reuse everywhere)
<!-- guidance: list the reusable primitives. Build on a primitive library (e.g. shadcn/ui) restyled to YOUR tokens; build domain components on top. -->
| Component | Spec |
|---|---|
| `Button` | primary / secondary / ghost; sizes sm/md/lg |
| `Panel` | surface card, panel radius + shadow |
| `StatCard` | label + large number (tabular) + icon |
| `Badge` | status: success / warning / error |
| `Input` / `Select` | input radius, `--border`, focus ring `--focus` |
| `{{DOMAIN_COMPONENT}}` | your signature/domain component |
| `EmptyState` | icon + actionable copy (active voice) |

## 6. Hero wireframes (low-fi — layout only)
<!-- guidance: sketch the 1-2 most important screens as ASCII layout. Detail comes at ticket time. -->
```
{{ASCII wireframe of your main screen — panels, KPIs, primary chart, lists}}
```

## 7. Quality floor (every UI ticket)
<!-- guidance: the non-negotiable a11y/UX baseline. Keep these. -->
- responsive down to mobile (panels stack); touch targets ≥ 44px
- contrast ≥ WCAG AA; visible focus ring (`--focus`); keyboard operable
- respect `prefers-reduced-motion`; numbers use tabular-nums
- copy: active voice, sentence case, buttons name the outcome; empty/error states give direction

## 8. Implementation notes
<!-- guidance: how tokens reach the code. -->
- Define tokens as **CSS custom properties** at `:root`, map into your styling system; use only token-referencing utilities.
- Dark mode = override CSS vars under `[data-theme="dark"]`.
- Use a primitive library restyled to these tokens; build **domain components** on top and reuse (DRY) — never re-assemble styles inline.
