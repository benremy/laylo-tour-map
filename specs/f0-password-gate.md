# F0 — Password Gate

**Depends on:** nothing
**Delivers:** A Laylo-branded gate page. Correct password stores a flag in `sessionStorage` and redirects to `/map`.

---

## Files

### New

| Path | Role |
|---|---|
| `modules/auth/components/password-gate/password-gate.component.tsx` | `'use client'` — form + logic |
| `modules/auth/components/password-gate/password-gate.module.scss` | Page styles |

### Modified

| Path | Change |
|---|---|
| `app/layout.tsx` | Load Bricolage Grotesque via `next/font/google`, expose as `--font-bricolage` CSS variable |
| `app/globals.css` | Register `--font-display` token, set dark background |
| `app/page.tsx` | Render `PasswordGate` |
| `app/map/page.tsx` | Create as empty placeholder; on mount check `sessionStorage` for auth flag, redirect to `/` if absent |

### Environment (not committed)

```
NEXT_PUBLIC_GATE_PASSWORD=laylo2026
```

---

## Component — `password-gate.component.tsx`

**`'use client'`**

State: `password: string`, `error: boolean`

On submit:
- Compare input against `process.env.NEXT_PUBLIC_GATE_PASSWORD`
- Match → `sessionStorage.setItem('laylo-auth', '1')`, `router.push('/map')`
- No match → `error = true`, clear input

---

## Design

Dark page, centered content, max ~320px wide.

```
        laylo           ← Bricolage Grotesque 800, ~3rem, letter-spacing -0.125rem

  [ Enter password ]    ← password input
  [   Continue     ]    ← submit button

  Incorrect password    ← error, hidden by default
```

**Font loading (`app/layout.tsx`):**
```ts
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-bricolage',
});
```
Add `bricolage.variable` to `<html>` className.

**Globals tokens:**
```css
@theme inline {
  --font-display: var(--font-bricolage);
  --color-background: #0a0a0a;
  --color-surface: #141414;
  --color-border: #2a2a2a;
  --color-text: #f0f0f0;
  --color-error: #ff4444;
}
```

---

## Acceptance Criteria

- [ ] `/` renders the gate with Laylo wordmark in Bricolage Grotesque 800
- [ ] Wrong password shows error, clears input
- [ ] Correct password redirects to `/map`
- [ ] Visiting `/map` without the sessionStorage flag redirects to `/`
