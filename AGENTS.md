# AGENTS.md — jarmos.dev

## Quick start

```bash
task setup          # install pre-commit hooks + pnpm deps
task dev            # dev server (requires GITHUB_TOKEN in .env)
task qa             # pnpm lint --fix + pnpm format
task test           # vitest (unit + nuxt projects)
task build          # production build (requires GITHUB_TOKEN)
task preview        # build + nuxt preview
```

All source code is in `website/` — repo root only has config (Taskfile, Vercel, pre-commit, EditorConfig).

## Required env: GITHUB_TOKEN

Blog content is fetched at build/dev time from the remote repo `Jarmos-san/blogposts` via GitHub API (`content.config.ts:89-92`). Without `GITHUB_TOKEN`, `task dev` and `task build` will fail. Create a `.env` file at repo root with `GITHUB_TOKEN=ghp_...` (Taskfile.yml:4 loads `.env`).

In test mode (`NODE_ENV=test`), remote fetch is skipped (`content.config.ts:86-87`).

## Commands

- `pnpm lint` = `nuxt typecheck && eslint .` (typecheck before lint). Use `task qa` to also format.
- `pnpm format` = `prettier . --write` (CI checks with `pnpm format --check`).
- `pnpm test` runs vitest across two projects: `unit` (`tests/unittests/`) and `nuxt` (`tests/nuxt/`). Only `nuxt` tests exist currently.
- `pnpm test:e2e` exists in package.json but has no Playwright config — not wired up.
- Postinstall runs `nuxt prepare`, which generates `.nuxt/tsconfig.json` types. Re-run after pulling new deps or if `.nuxt/` is stale.

## Framework & structure

- **Nuxt 4** (`nuxt ^4.4.2`) using Nuxt 3-style directory conventions (pages/, components/, composables/). Compatibility date: `2025-09-29`.
- `app.vue` is the root layout — sets `<html lang="en">`, title template `"%s | jarmos.dev"`, favicon, imports `~/assets/styles/main.scss`.
- **File-based routing**: top-level pages like `about-me.vue`, `projects.vue`; nested under `blogs/index.vue` (listing) and `blogs/[slug].vue` (dynamic post).
- **Components** auto-imported by Nuxt with subdirectory prefix: `CommonNavBar`, `HomepageHeader`, `ContentProsePre`. Convention: PascalCase in `components/{common,content,homepage}/`.
- **Composables** auto-imported from `composables/`: `useIsMobile` (screen width < 768px), `useToggle` (boolean toggle).
- **Types** in `types/components/` (prop interfaces) and `types/models/` (domain models: Project, NavLink, LegalDoc).
- **SCSS** in `assets/styles/`: `main.scss` imports `_resets.scss` + `_theme.scss`.
- **Server routes**: only `server/routes/rss.xml.ts` — builds RSS 2.0 feed from content collection.
- **Content**: blog posts defined in `content.config.ts` via `@nuxt/content`. Fetched from `Jarmos-san/blogposts` remote GitHub repo, cached locally in `.data/content/` (SQLite + cloned git repo). Uses Zod schema for validation.

## Configuration files

- `nuxt.config.ts` — modules: `@nuxt/content`, `@nuxt/eslint`, `@nuxt/test-utils/module`, `@nuxt/scripts`, `@nuxtjs/robots`, `@nuxtjs/sitemap`, `nuxt-site-config`, `nuxt-llms`. Production-only: Cloudflare Web Analytics. RSS route cached 86400s via Nitro route rules.
- `eslint.config.mjs` — Nuxt ESLint flat config with `nuxt/prefer-import-meta` rule. Ignores `.nuxt/` and `node_modules/`.
- `vitest.config.ts` — two projects (`unit` + `nuxt`). Coverage excludes configs, `app.vue`, types, pages, layouts. CI: retry 3x, bail at 3 failures.
- `vercel.json` at repo root — Nuxt framework, `pnpm install --frozen-lockfile`, output `.output/`.
- Prettier config inline in `package.json`: trailingComma all, tabWidth 2, singleQuote false, `prettier-plugin-organize-imports`.

## CI / pre-commit

- **pre-commit** hooks: trailing-whitespace, end-of-file-fixer, check-yaml, check-added-large-files, crisp (commit message linter).
- **CI**: `code-qa.yml` (ESLint + Prettier check) and `test-suite.yml` (vitest) — both run on PRs touching `website/**`.
- **pnpm** pinned via `packageManager` field to `10.33.2`. CI uses pnpm 10.

## EditorConfig

- LF endings, UTF-8, 2-space indent for `*.{ts,vue,mjs,json,yml}`.

## Generated & cached directories (gitignored)

- `.nuxt/` — Nuxt generated types/artifacts (recreated by `nuxt prepare` on postinstall).
- `.output/` — production build output.
- `.data/` — Nuxt Content cache (SQLite + cloned blogposts repo).
- `coverage/` — vitest coverage output.
