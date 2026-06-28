# PesaFlow — Session Log & Build Progress

## Project Identity
- **Product:** PesaFlow — Personal Finance PWA for Kenya
- **Developer:** Anria (Mwangi Moses Kuria) — `kuriamyg` on GitHub
- **Email:** kuriam177@gmail.com
- **Repo:** https://github.com/kuriamyg/pesaflow
- **Live URL:** (Vercel — pending deployment)
- **Supabase Project:** aisoniqjfzffqoxejwgs.supabase.co
- **Region:** eu-west-1 (West EU / Ireland)
- **Started:** 28 June 2026

---

## Tech Stack (Final — Do Not Change Without Discussion)
| Layer | Choice |
|---|---|
| Frontend | Next.js 14 + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui (Radix + Nova preset) |
| Backend | Next.js API Routes |
| Database | Supabase PostgreSQL |
| ORM | Prisma 7 |
| Auth | Supabase Auth |
| AI | Claude API (claude-sonnet-4-6) |
| PWA | next-pwa |
| State | Zustand + TanStack React Query |
| HTTP | Axios |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | Sonner |
| Error Monitoring | Sentry (pending) |
| Analytics | PostHog (pending) |
| CI/CD | GitHub Actions → Vercel |
| Hosting | Vercel Hobby |

---

## Brand Identity
- **Primary:** `#16a34a` (Pesa Green)
- **Primary Dark:** `#059669` (Flow Emerald)
- **Accent:** `#f59e0b` (Shilling Gold)
- **Background:** `#f8fafc` (Surface)
- **Text:** `#0f172a` (Midnight)
- **Font:** Inter 800 (wordmark) / Inter (UI)
- **Tagline:** TRACK · SAVE · GROW
- **Icon:** K (KES) + gold rising trend arrow
- **Files:** pesaflow-brand-identity.html, pesaflow-logo.svg, pesaflow-icon.svg

---

## Environment Variables (keys stored locally in .env.local — NEVER push to GitHub)
```
NEXT_PUBLIC_SUPABASE_URL=https://aisoniqjfzffqoxejwgs.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=***
SUPABASE_SECRET_KEY=***
DATABASE_URL=*** (pooled, port 6543)
DIRECT_URL=*** (direct, port 5432)
ANTHROPIC_API_KEY=*** (pending)
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=PesaFlow
```

---

## Folder Architecture
```
pesaflow/
├── prisma/
│   ├── schema.prisma         ← full DB schema (9 models)
│   ├── migrations/           ← 20260628104733_init applied ✅
│   └── migration_lock.toml
├── prisma.config.ts          ← Prisma 7 config (dotenv + adapter-pg)
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/        ← page pending
│   │   │   └── register/     ← page pending
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/    ← page pending
│   │   │   ├── transactions/ ← page pending
│   │   │   ├── budgets/      ← page pending
│   │   │   ├── savings/      ← page pending
│   │   │   ├── ai-coach/     ← page pending
│   │   │   └── settings/     ← page pending
│   │   ├── api/
│   │   │   ├── auth/         ← pending
│   │   │   ├── transactions/ ← pending
│   │   │   ├── budgets/      ← pending
│   │   │   ├── savings/      ← pending
│   │   │   ├── ai/           ← pending
│   │   │   └── sms-parse/    ← pending
│   │   ├── globals.css       ← PesaFlow brand tokens ✅
│   │   ├── layout.tsx        ← default (needs update)
│   │   └── page.tsx          ← placeholder landing ✅
│   ├── components/
│   │   ├── ui/               ← 17 shadcn components ✅
│   │   ├── layout/           ← navbar, sidebar pending
│   │   ├── dashboard/        ← widgets pending
│   │   ├── transactions/     ← forms pending
│   │   ├── budgets/          ← pending
│   │   ├── savings/          ← pending
│   │   ├── ai/               ← chat UI pending
│   │   └── auth/             ← login/register forms pending
│   ├── lib/
│   │   ├── supabase/         ← client + server pending
│   │   ├── prisma/           ← prisma client pending
│   │   ├── ai/               ← claude integration pending
│   │   ├── sms-parser/       ← SMS regex engine pending
│   │   └── validators/       ← zod schemas pending
│   ├── hooks/                ← custom hooks pending
│   ├── types/                ← TypeScript types pending
│   └── store/                ← Zustand stores pending
├── public/                   ← logo assets pending
├── .env.local                ← secrets (gitignored) ✅
├── .gitignore                ← .env* excluded ✅
└── components.json           ← shadcn config ✅
```

---

## Database Schema (Prisma 7 — PostgreSQL via Supabase)
### Models (all created and migrated ✅)
| Model | Purpose |
|---|---|
| `User` | Profile extending Supabase Auth |
| `Transaction` | Core income/expense records |
| `Budget` | Monthly category limits |
| `SavingsPot` | Named savings goals (envelopes) |
| `SavingsEntry` | Individual pot contributions |
| `Debt` | Loan tracking (Fuliza, Tala, Branch etc.) |
| `ChamaGroup` | Group savings tracking |
| `AiChat` | AI coach conversation history |
| `SmsImport` | Raw SMS data for parsing |

### Enums
- `TransactionType`: INCOME, EXPENSE
- `TransactionSource`: MANUAL, MPESA, AIRTEL_MONEY, TKASH, EQUITEL, BANK, VOICE
- `Category`: 20+ categories covering student + business life
- `PotStatus`: ACTIVE, COMPLETED, PAUSED
- `DebtStatus`: ACTIVE, PAID, OVERDUE
- `ChatRole`: USER, ASSISTANT

---

## Build Progress
```
Phase 0 — Brand Identity          ████████████ DONE ✅
Phase 1 — Project Scaffold        ████████████ DONE ✅
Phase 2 — Database Schema         ████████████ DONE ✅
Phase 3 — Auth Setup              ░░░░░░░░░░░░ UP NEXT 🔜
Phase 4 — Core UI                 ░░░░░░░░░░░░ PENDING
Phase 5 — AI Integration          ░░░░░░░░░░░░ PENDING
Phase 6 — PWA Config              ░░░░░░░░░░░░ PENDING
Phase 7 — Deploy to Vercel        ░░░░░░░░░░░░ PENDING
```

---

## Git History (key commits)
```
a22b372  Initial commit from Create Next App
c45989f  feat: initial project scaffold with brand identity, shadcn/ui, and folder architecture
[next]   feat: database schema + prisma migration init
```

---

## Phase 3 — Auth (NEXT SESSION STARTS HERE)
**Goal:** Wire up Supabase Auth with Next.js App Router

### Todo:
1. Create `src/lib/supabase/client.ts` — browser Supabase client
2. Create `src/lib/supabase/server.ts` — server Supabase client (SSR)
3. Create `src/lib/supabase/middleware.ts` — session refresh
4. Create `src/middleware.ts` — route protection
5. Create `src/lib/prisma/client.ts` — Prisma client singleton
6. Create `src/types/index.ts` — global TypeScript types
7. Build `src/app/(auth)/login/page.tsx` — login UI
8. Build `src/app/(auth)/register/page.tsx` — register UI
9. Build `src/app/(auth)/layout.tsx` — auth layout
10. Build `src/app/api/auth/callback/route.ts` — OAuth callback
11. Test full auth flow end to end

### Key decisions already made:
- Auth via Supabase Auth (email + Google OAuth)
- Sessions managed via `@supabase/ssr` cookies
- Middleware protects all `(dashboard)/*` routes
- On first login → check `user.onboarded` → redirect to onboarding or dashboard

---

## Prisma 7 Notes (Important — breaking changes from v5/v6)
- `url` and `directUrl` NO LONGER go in `schema.prisma`
- Connection URLs now live in `prisma.config.ts` under `datasource.url`
- `migrate` adapter uses `@prisma/adapter-pg` + `pg` package
- `.env.local` loaded via `dotenv` with `dotenv.config({ path: '.env.local' })`
- Schema datasource block only needs `provider = "postgresql"`

---

## Known Issues / Warnings (Non-blocking)
- Hydration mismatch warning in dev — caused by browser extensions (QuickBooks etc.), not our code
- LF/CRLF warnings on Windows git — normal, not an error
- `prisma.config.ts` TS2353 warning on `migrate` property — type definitions lag behind Prisma 7, runtime works fine
- 10 npm vulnerabilities (5 moderate, 5 high) — all in dev/build tools, not production code

---

## Resume Prompt (use this to start next session)
> "Continue PesaFlow build. Phases 0-2 complete (brand, scaffold, database).
> Next is Phase 3 — Supabase Auth setup.
> Stack: Next.js 14, TypeScript, Supabase, Prisma 7, shadcn/ui (Radix + Nova), Tailwind v4.
> Repo: kuriamyg/pesaflow.
> Check SESSION_LOG.md for full context."

---

*Last updated: Session 1 — 28 June 2026*
