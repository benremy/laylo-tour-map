# F5 — Ticket Page

> A dedicated full-page ticket claim experience. Tickets are free. Claiming stores a record in `localStorage` — no backend, no payment. If the user has already claimed, the page opens directly in the confirmed state.

---

## Depends on

- F3 complete — `Show` type, `formatShowDate` in `map.service.ts`, show detail panel with CTA
- Mock show data in `data/mock-shows.ts`

---

## Route

```
/ticket/[show-id]
```

Dynamic segment: `show-id` (matches `show.id` from mock data).

---

## Happy path

1. User clicks **"Get Tickets →"** in the F3 show detail panel → navigates to `/ticket/[show-id]`
2. Page loads, hook checks `localStorage['laylo-tickets']` for this show ID
3. **Not yet claimed:** render the claim view — show info + **"Claim Free Ticket"** button
4. User clicks the button → hook writes to `localStorage`, transitions to confirmed view
5. **Confirmed view:** ticket confirmation with show details and a back link to `/map`

If the user lands on the page after already claiming, step 2 finds an existing entry and skips straight to the confirmed view.

---

## localStorage schema

Key: `laylo-tickets`

Value: a JSON object keyed by `showId`:

```ts
type StoredTickets = Record<string, { showId: string; claimedAt: string }>;
// claimedAt: ISO 8601 string, e.g. "2026-03-31T14:22:00.000Z"
```

---

## Files to create

```
app/ticket/[show-id]/
  page.tsx                            Server Component shell — passes showId to TicketPage

modules/ticket/components/ticket-page/
  ticket-page.component.tsx           'use client' — presentational, two states
  ticket-page.hook.ts                 'use client' — localStorage read/write, show lookup
  ticket-page.module.scss             page layout + claim/confirmed states
```

---

## Files to modify

```
modules/map/components/show-detail/show-detail.component.tsx
  — change the CTA from an <a href={ticketUrl}> to a Next.js <Link href={`/ticket/${show.id}`}>
    so navigation stays in-app
```

---

## Page shell — `app/ticket/[show-id]/page.tsx`

Server Component. Reads the dynamic param and hands it to the client component.

```tsx
import TicketPage from '@/modules/ticket/components/ticket-page/ticket-page.component';

interface Props {
  params: Promise<{ 'show-id': string }>;
}

export default async function TicketRoute({ params }: Props) {
  const { 'show-id': showId } = await params;
  return <TicketPage showId={showId} />;
}
```

---

## Hook — `ticket-page.hook.ts`

```ts
'use client';

// Props: showId: string
//
// Responsibilities:
//   1. Look up show from imported mock-shows data by showId
//   2. On mount (useEffect), read localStorage['laylo-tickets']
//      — if entry exists for showId, set isClaimed = true
//   3. handleClaim(): write entry to localStorage, set isClaimed = true
//
// Returns: { show: Show | null, isClaimed: boolean, handleClaim: () => void }
```

Implementation notes:
- Read and write localStorage inside effects / handlers only — never during render (avoids hydration mismatch)
- Initialise `isClaimed` as `false`; reconcile with localStorage in a `useEffect`

```ts
const STORAGE_KEY = 'laylo-tickets';

export function useTicketPage(showId: string) {
  const show = mockShows.find((s) => s.id === showId) ?? null;
  const [isClaimed, setIsClaimed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const tickets: StoredTickets = JSON.parse(stored);
    if (tickets[showId]) setIsClaimed(true);
  }, [showId]);

  function handleClaim() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const tickets: StoredTickets = stored ? JSON.parse(stored) : {};
    tickets[showId] = { showId, claimedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    setIsClaimed(true);
  }

  return { show, isClaimed, handleClaim };
}
```

---

## Component — `ticket-page.component.tsx`

```tsx
'use client';

// Props: showId: string
// Calls useTicketPage(showId) — renders one of two views based on isClaimed
```

### Claim view (isClaimed = false)

```
┌─────────────────────────────────────────┐
│  ← Back to map                          │  ← Link href="/map", top-left
│                                         │
│  Claim your ticket                      │  ← heading
│                                         │
│  Madison Square Garden                  │  ← show.venue.name
│  New York, NY                           │  ← show.venue.city, show.venue.state
│  Oct 3, 2025                            │  ← formatShowDate(show.date)
│                                         │
│  Free                                   │  ← price label, muted
│                                         │
│  [ Claim Free Ticket ]                  │  ← primary CTA, calls handleClaim
│                                         │
└─────────────────────────────────────────┘
```

### Confirmed view (isClaimed = true)

```
┌─────────────────────────────────────────┐
│  ← Back to map                          │
│                                         │
│  You're in!                             │  ← heading
│                                         │
│  Madison Square Garden                  │
│  New York, NY                           │
│  Oct 3, 2025                            │
│                                         │
│  Ticket confirmed                       │  ← confirmed badge/label
│                                         │
└─────────────────────────────────────────┘
```

If `show` is `null` (unrecognised show ID), render a simple "Show not found" message with a back link.

---

## Styles — `ticket-page.module.scss`

Centered card layout on a dark background, consistent with the rest of the app's design tokens.

```scss
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  padding: 2rem;
}

.card {
  width: 100%;
  max-width: 420px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.back {
  align-self: flex-start;
  color: var(--color-text);
  opacity: 0.5;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover { opacity: 1; }
}

.heading {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.venue {
  font-size: 1rem;
  font-weight: 600;
}

.meta {
  font-size: 0.875rem;
  opacity: 0.5;
}

.free {
  font-size: 0.875rem;
  opacity: 0.4;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.claimBtn {
  margin-top: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--color-text);
  color: var(--color-background);
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover { opacity: 0.85; }
}

.confirmed {
  font-size: 0.875rem;
  opacity: 0.6;
  letter-spacing: 0.04em;
}
```

---

## Acceptance criteria

- [ ] Navigating to `/ticket/[show-id]` renders the claim view for an unclaimed show
- [ ] Clicking "Claim Free Ticket" transitions to the confirmed view without a page reload
- [ ] Refreshing the page after claiming opens directly in the confirmed view (localStorage persists)
- [ ] The confirmed view shows the same show details as the claim view
- [ ] "← Back to map" link returns to `/map` from both views
- [ ] Unrecognised show IDs render a "Show not found" fallback with a back link
- [ ] No Tailwind utility classes in TSX/JSX
- [ ] No hooks or localStorage access in Server Components
