<!-- TEMPLATE: AI — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit. -->

# AI

## Principle
<!-- guidance: state the single highest-value job AI does in your app. A common strong first job: turn messy input → clean structured data, because clean data fuels every later AI feature. Replace with yours. -->
> {{e.g. The best first job for AI here is turning messy input into clean, structured data — clean data is the fuel for every AI feature that follows.}}

## AI ladder
<!-- guidance: order AI capabilities from foundational (ship first) to advanced. Each rung should build on the data the previous one produced. -->
1. **{{FOUNDATIONAL_CAPABILITY}}** — the root (e.g. extract/normalize input into structured records)
2. {{e.g. summarize / generate insight in natural language}}
3. {{e.g. Q&A / chat over the user's own data}}
4. {{e.g. prediction / proactive alerts}}

## AI behavior spec (MVP)
<!-- guidance: this contract applies to EVERY AI call — keep it. -->
Every AI call:
- forces **structured output** (tool use / response schema / JSON mode)
- **validates** the result before use
- **degrades gracefully** — on failure or low confidence, never block the user (fall back to a safe default / manual form)
- lives inside a **single AI service module** — no AI calls scattered across the codebase

<!-- guidance: define each AI function as in → out with a confidence field. Add one block per function. Example below. -->
### `{{aiFunctionName}}`
- **in:** {{inputs}}
- **out:** `{ {{fields}}, confidence: 0–1 }`
- below a confidence threshold → fall back to {{safe default / user edit}}

> Functions like these are one family: **input → validated structured output.** Build one extract-and-validate core and reuse it across every input channel.

## Model choice
<!-- guidance: pick your model(s); record IDs + pricing. Read your AI provider's current docs for model IDs and prices — do not hardcode from memory; they change. -->
| Use case | Model | Notes |
|---|---|---|
| {{high-volume classify/parse}} | `{{MODEL_ID}}` | cheaper/faster tier; check provider docs for current ID + price |
| {{vision / image input}} | `{{MODEL_ID}}` | images cost more tokens than text |
| {{reasoning / long-form / chat}} | `{{MODEL_ID}}` | stronger tier, only when needed |

API key via env (`{{AI_API_KEY_ENV}}`) — never hardcode.
> Prices and IDs change — verify against your AI provider's current docs before writing code.

## Cost & cost control (COGS)
<!-- guidance: every AI feature is a per-user cost; design controls in from the start. Keep these broadly-useful levers. -->
- **Cache / dedup** *(usually the biggest lever):* cache results for repeated inputs; call the model only for genuinely new inputs.
- **Rules-first, AI-fallback:** try cheap rules/lookups first; call the model only when needed.
- **Cheapest model that works:** small model for high-volume tasks; large model only for the hard ones.
- **Prompt caching:** cache static system prompts / reference lists (re-read at a fraction of input price).
- **Batch:** group bulk operations (e.g. import) into batched calls.
- **Quotas:** cap AI usage per tier to keep margins predictable.

## Before writing AI code
<!-- guidance: tool-agnostic reminder. -->
Read your AI provider's current docs (model IDs, structured-output format, SDK patterns) before writing code — do not rely on memory.

## Capture data to improve
<!-- guidance: log both the AI guess and the user's correction so you can measure accuracy and refine prompts/few-shot over time. -->
Store both the AI-predicted value and the user-corrected value (e.g. via a `confidence` field + the user's final choice) to measure accuracy and improve prompts.
