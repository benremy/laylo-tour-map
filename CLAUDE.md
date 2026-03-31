## Strict Requirements

- **Simplicity over everything.** For ALL implementations, always choose the most hyper-simplistic solution that gets the job done. Do not over-engineer. Avoid premature abstractions and complex design patterns when a simple, direct approach works. 
- **No Tailwind utility classes in TSX/JSX.** All styles — including layout and spacing — must be written in SCSS modules (`.module.scss`). Tailwind is imported only as a token/reset layer in `app/globals.css`. Violations must be fixed before considering any task complete.
- **SCSS module files must use the `.module.scss` extension.** Next.js only exports a class-name object for files ending in `.module.scss`. A plain `.scss` import injects CSS but `styles` will be `undefined` at runtime.
- **Components are strictly presentational.** No hooks (`useState`, `useEffect`, `useRouter`, etc.) inside `.component.tsx` files. All stateful logic lives in `[module].hook.ts`. Violations must be fixed before considering any task complete.
- **Never import SCSS modules in Server Components.** `app/layout.tsx` and any Server Component page in the `app/` directory must not import `.scss` files as modules — the JS object is `undefined` at runtime even though the CSS is injected. Two alternatives: (1) element-level or shared structural styles go in `globals.css` as element selectors or plain global classes (reference them as plain strings, e.g. `className="page-centered"`); (2) if a page file genuinely needs scoped styles, add `'use client'` so the module resolves correctly.
- **Centralize data.** Place any data or mock data (especially any needed data for UI population) strictly within `./data`.
- **Maintain release notes.** For each new notable update to the codebase that warrants a release note update, you must update `app/release-notes`.
- **Do not reactively subscribe to store values that are only passed as uncontrolled (initial-only) props.** Third-party components like `MapContainer` accept `center`/`zoom` only at mount — they ignore prop changes after that. Subscribing via `useStore((s) => s.value)` and passing the result to such a prop causes the parent to re-render on every state update, which re-mounts or re-registers children (e.g. `useMapEvents` handlers), producing cascading re-renders or infinite loops. Read the initial value once with `useRef(useStore.getState().value).current` or a direct import — do not use a reactive selector.

## Common Gotchas & Pitfalls (Do Not Make These Mistakes)

- **The Git Case-Sensitivity Trap (Kebab-Case Renames):** Mac and Windows file systems are case-insensitive, but Linux (Vercel/CI) is strict. If you rename an existing file from `UserProfile.tsx` to `user-profile.component.tsx`, Git might not register the case change, causing the build to fail in production. **Fix:** Always use `git mv` when renaming files to enforce the kebab-case rule on existing files, or ensure the file is completely deleted and recreated in Git's eyes.
- **The Stale Closure Bug (Zustand & Refs):** You are required to use `useRef(useStore.getState().value).current` for initial-only props (like Map center/zoom) to prevent infinite re-renders. However, if you use that same `useRef` inside a callback or event handler, you will get **stale data**. **Fix:** If an event handler needs the *latest* store value without triggering a re-render, call `useStore.getState().value` directly *inside* the callback function. 
- **Imperative Updates on "Uncontrolled" Third-Party Components:** If you pass initial-only props to a component (like `MapContainer`), and the application later needs to change the map's view based on a user action outside the map, do not try to make the prop reactive. **Fix:** Use the library's imperative API. For example, grab the map instance via a ref or a hook (e.g., `useMap()`) and call `map.flyTo()` inside a `useEffect` that listens to the specific state change in your hook file.
- **Undefined ClassName Concatenation:** Because you cannot use SCSS modules in Server Components, AI agents sometimes accidentally leave `className={`${styles.wrapper} some-global-class`}` in a Server Component. Since `styles` is undefined, this outputs `class="undefined some-global-class"` in the DOM, which can cause hydration errors or CSS specificity leaks. **Fix:** Strictly audit Server Components to ensure absolutely no `styles.xyz` references exist.
- **Tailwind `@apply` Bloat in SCSS:** Because Tailwind is only being used as a token/reset layer in `globals.css`, do not use Tailwind's `@apply` directive inside your `.module.scss` files. Doing so defeats the purpose of separating the styling concerns and can lead to massive CSS bundle bloat as Tailwind duplicates the utility classes into every module. **Fix:** Write pure SCSS. Use SCSS variables, mixins, or CSS custom properties (variables) for shared design tokens instead of `@apply`.
- **"Hydration Mismatch" from Client-Only Data:** When centralizing data in `./data`, if that data involves browser-specific APIs (like `window.innerWidth`, `localStorage`, or dates generated via `new Date()`), rendering it directly in a Server Component or on the first pass of a Client Component will cause a Next.js hydration error. **Fix:** Abstract browser-dependent data fetching into an effect inside your `[module].hook.ts` or ensure the mock data in `./data` is strictly static JSON/JS primitives.
- **Localization** No strings should ever be hardcoded always dynamically referenced from @constants/strings
- **Maximize component abstraction with recursive colocation.** Extract every logical UI section into its own named component until no further meaningful extraction is possible. A "meaningful extraction" is any element or group of elements with a distinct responsibility, a clear name, or potential for reuse. Stop extracting only when a component would be a single, non-decomposable HTML element with no variants or logic. Each extracted component lives in its own directory with a `.component.tsx` and a `.module.scss`. **Colocation rule:** components used exclusively by a parent must live inside that parent's own `components/` subfolder — not as siblings at the parent's level. This nesting is recursive: `modules/<feature>/components/<parent>/components/<child>/`. The container component (e.g. `*-page.component.tsx`) should contain only layout wrappers and data wiring — no raw JSX elements beyond those.
- Ensure all designs all mobile responsive

# Developer Guidelines

### **Standardized Naming Conventions**
To ensure our code remains readable, understandable, and maintainable, we apply specific casing conventions based on the context and the programming language being used. Please adhere to the following rules:

* **Variables, Functions, and Methods (`camelCase` & `snake_case`)**
    * **camelCase:** Use for variables, functions, and methods in **JavaScript, TypeScript, and Java**. The first word is lowercase, and subsequent words are capitalized. 
        * *Example:* `numberOfDonuts`, `calculateTotal()`
    * **snake_case:** Use for variables and methods in **Python**. All words are lowercase and separated by underscores.
        * *Example:* `number_of_donuts`, `calculate_total()`

* **Classes (`PascalCase`)**
    * **PascalCase:** Use for naming classes across most programming languages. Every word, including the first, starts with a capital letter.
        * *Example:* `DonutShop`, `UserProfile`

* **Constants (`SCREAMING_SNAKE_CASE`)**
    * **Upper Snake Case:** Use for declaring constants (data items whose values do not change) in most languages. All letters are capitalized and separated by underscores.
        * *Example:* `MAX_DONUTS_ALLOWED = 12`, `API_BASE_URL`

* **Files, Databases, and URLs (`snake_case` & `kebab-case`)**
    * **snake_case:** Use for general file names and database table/column names to keep them highly readable.
        * *Example:* `user_data.csv`, `first_name`
    * **kebab-case:** Use strictly for URLs (and URL routing). All words are lowercase and separated by dashes.
        * *Example:* `mywebsite.com/about-us`, `user-profile`