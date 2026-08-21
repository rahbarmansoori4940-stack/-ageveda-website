# AGEVEDA

AGEVEDA is an India-first preventive health intelligence experience, being built as a premium and globally credible product platform.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ageveda/src/App.tsx` — application entry, provider setup, and route map
- `artifacts/ageveda/src/components/ageveda-shell.tsx` — reusable responsive shell, navigation, and accessible global affordances
- `artifacts/ageveda/src/pages/` — route-level surfaces and branded fallback states
- `artifacts/ageveda/src/index.css` — source of truth for AGEVEDA visual tokens, typography, motion, and responsive foundations
- `lib/api-spec/openapi.yaml` — shared API contract when product data capabilities are introduced
- `lib/db/src/schema/` — shared database schema when persistence is introduced

## Architecture decisions

- The first build is intentionally a foundation, not a complete product surface; future features should be added from the user-provided AGEVEDA specification.
- The frontend uses a mobile-first React/Vite structure with Wouter routes so the shell can grow without coupling page content to global navigation.
- Demo copy is synthetic and explicitly avoids medical claims, patient data, and implied live intelligence until those capabilities are specified and implemented.
- The design system uses CSS custom properties for semantic tokens, with explicit reduced-motion and light/dark foundations.

## Product

The current product surface establishes AGEVEDA's identity and extension-ready application shell. Complete user-facing capabilities will be defined by the forthcoming AGEVEDA specification.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Keep the root route and `BASE_PATH`-aware router intact so the app works in both preview and published environments.
- When backend capabilities are added, define them in `lib/api-spec/openapi.yaml` first and regenerate client types before wiring frontend data flows.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
