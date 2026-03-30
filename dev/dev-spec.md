# Development Specification & Guidelines

## Module Structure

All feature code lives under `modules/[module]/`. Each module is self-contained.

```
modules/
  [module]/
    [module].hook.ts
    [module].service.ts
    [module].store.ts
    [module].types.ts
    components/
      [component-name]/
        [component-name].component.tsx
        [component-name].style.scss
    queries/
      [query-name].query.ts
```

**Rules:**
- Sub-pieces that can have multiple files (components, types, stores, queries) go in their own subdirectory.
- Single-file concerns (hook, service) live directly at the module root.
- Shared utilities or data that span modules live in `modules/shared/`.

---

## File Naming

All files follow the pattern: `[name].[role].ts(x)`

| Role | Extension | Purpose |
|---|---|---|
| `component` | `.tsx` | React component |
| `style` | `.module.scss` | SCSS module for the component |
| `hook` | `.ts` | Custom React hook |
| `service` | `.ts` | Business logic, data transforms |
| `store` | `.ts` | Zustand store slice |
| `types` | `.ts` | TypeScript interfaces/types |
| `query` | `.ts` | SWR fetcher + cache key |

---

## Component Conventions

- **Directory name:** kebab-case (`venue-marker/`)
- **File name:** kebab-case with role suffix (`venue-marker.component.tsx`)
- **Component name in JSX:** PascalCase (`VenueMarker`)
- Each component directory contains exactly its `.component.tsx` and `.module.scss`
- Styles are SCSS modules — file must use the `.module.scss` extension (not `.scss`) so Next.js exports the class-name object. Import as `import styles from './[name].module.scss'` and use `styles.className`.
- **Components are strictly presentational.** No `useState`, `useEffect`, `useRouter`, or any other hook calls inside a `.component.tsx` file. All logic lives in a `[module].hook.ts` file at the module root; the component receives values and handlers as props or via the hook's return value.

---

## Stack-Specific Rules

### Next.js 16 (App Router)
- Default to Server Components. Add `'use client'` only when the component uses browser APIs, hooks, or event handlers.
- Before writing any Next.js code, read `node_modules/next/dist/docs/` — this version has breaking changes.

### Leaflet / react-leaflet 5 RC
- Leaflet requires `window`. Never render map components on the server.
- The `tour-map` shell component uses `next/dynamic` with `{ ssr: false }` to load the actual map client component.
- Import Leaflet CSS manually inside the client map component (not in globals).
- react-leaflet 5 RC has API changes vs 4.x — verify against its changelog before use.

### Tailwind CSS 4
- No `tailwind.config.js`. All theme customization uses `@theme` blocks in `app/globals.css`.
- **No Tailwind utility classes anywhere in TSX/JSX.** Tailwind is used solely as the token/reset layer via `@import "tailwindcss"` in `globals.css`. All layout, spacing, and component styles must be written in SCSS modules.

### Zustand 5
- Use the `create` function directly without legacy middleware wrappers unless explicitly needed.
- Store files live in `modules/[module]/stores/[module].store.ts`.
- One store per module; cross-module reads are fine, cross-module writes should be avoided.

### SWR 2
- Fetcher and cache key defined together in `queries/[name].query.ts`.
- Hooks that call SWR live in `[module].hook.ts`.
- API routes live in `app/api/[resource]/route.ts`.

### TypeScript
- All interfaces and type aliases live in `modules/[module]/types/[module].types.ts`.
- Prefer `interface` for object shapes, `type` for unions and utility types.
- No `any`. Use `unknown` + narrowing where the type is genuinely unknown.

---

## SCSS Modules

- File: `[component-name].module.scss` inside the component directory
- Import: `import styles from './[component-name].module.scss'`
- Class names: camelCase in SCSS (`.showCard`, `.activeState`)
- Global overrides for third-party libraries (e.g. Leaflet popup styles) go in `app/globals.css`, not in modules

---

## Directory Reference

```
app/                  # Next.js App Router (pages, layouts, API routes)
modules/              # All feature modules
  map/                # Leaflet map, viewport, markers
  tour/               # Shows, sidebar, filters, detail
  shared/             # Cross-module data and utilities
docs/                 # Implementation plans and feature specs
dev/                  # Development guidelines (this file)
specs/                # Per-feature specs (one file per feature)
public/               # Static assets
```
