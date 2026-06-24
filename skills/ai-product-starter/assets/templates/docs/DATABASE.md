<!-- TEMPLATE: DATABASE — adapt for {{PROJECT_NAME}}; replace placeholders + guidance, keep structure. Delete sections that don't fit. -->

# DATABASE — Data Model

<!-- guidance: state that this is the INTENT of the model; finalize when you scaffold the real schema. -->
Note: the model below is the MVP intent — finalize it when you scaffold the real schema/migrations.

## Core entities
<!-- guidance: define your entities in whatever schema language you use (Prisma/SQL/etc.). Keep the example shape; replace fields with YOUR domain. Mark money fields, enums, and ownership (the field every query scopes by). -->

```
// pseudo-schema (not the real schema yet)

model {{OWNER_ENTITY}} {        // e.g. User / Account / Org
  id        ID @id
  createdAt DateTime
  // ...relations to the entities below
}

model {{PRIMARY_ENTITY}} {      // your central record
  id        ID @id
  ownerId   ID                  // every query scopes by this
  amount    Int                 // money in integer minor units — never float
  type      {{ENUM_TYPE}}       // see enum below; controls what counts
  occurredAt DateTime
  // ...domain fields
  aiConfidence Float?           // 0–1; null = not AI-derived (keep for measuring AI accuracy)
  source    {{ENUM_SOURCE}}     // how the record was created
  createdAt DateTime
}

enum {{ENUM_TYPE}}   { /* e.g. the record types that distinguish what counts */ }
enum {{ENUM_SOURCE}} { /* e.g. MANUAL | IMPORT | ... */ }
```

## Principles
<!-- guidance: the rules that keep the data correct. Keep the generic precision + ownership rules; add yours. -->
- **Money is integer minor units** (avoid float everywhere) — or a Decimal type; pick one and stick to it.
- **Hard owner isolation:** every query is scoped by `{{ownerId}}` — sensitive data must not leak across owners.
- **Type controls counting:** aggregations filter by record `type`; never sum a type that should not count toward a total.
- **Future-proofing:** keep fields like `aiConfidence` / `source` so you can measure and improve AI accuracy without a schema rewrite.

## Indexes to add (when building for real)
<!-- guidance: list the indexes your hot queries need (the feed/aggregate paths + owner-scoped lookups). -->
- `{{PRIMARY_ENTITY}} (ownerId, occurredAt)` — feed / periodic aggregation
- `{{PRIMARY_ENTITY}} ({{groupingId}}, occurredAt)` — per-group rollups
- owner-scoped lookups on each related entity

## Default reference data (draft — finalize at implementation)
<!-- guidance: if your app ships seed/lookup data (categories, statuses, tiers), list the draft set here. Delete this section if not applicable. -->
{{e.g. seed categories / statuses / tiers}}
