@AGENTS.md

## Strict Requirements

- **No Tailwind utility classes in TSX/JSX.** All styles — including layout and spacing — must be written in SCSS modules (`.module.scss`). Tailwind is imported only as a token/reset layer in `app/globals.css`. Violations must be fixed before considering any task complete.
- **SCSS module files must use the `.module.scss` extension.** Next.js only exports a class-name object for files ending in `.module.scss`. A plain `.scss` import injects CSS but `styles` will be `undefined` at runtime.
- **Components are strictly presentational.** No hooks (`useState`, `useEffect`, `useRouter`, etc.) inside `.component.tsx` files. All stateful logic lives in `[module].hook.ts`. Violations must be fixed before considering any task complete.
- **Never import SCSS modules in Server Components.** `app/layout.tsx` and any Server Component page in the `app/` directory must not import `.scss` files as modules — the JS object is `undefined` at runtime even though the CSS is injected. Two alternatives: (1) element-level or shared structural styles go in `globals.css` as element selectors or plain global classes (reference them as plain strings, e.g. `className="page-centered"`); (2) if a page file genuinely needs scoped styles, add `'use client'` so the module resolves correctly.
- Place any data / mock.data  especially any needed data within ./data

