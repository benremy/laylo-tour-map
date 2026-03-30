# F3 — Show Detail

> A slide-up panel inside the map region that appears when `selectedShow` is set and disappears when cleared.

---

## Depends on

- F2 complete — `selectedShow` / `setSelectedShow` in `useTourStore`, `createPinIcon(active?)` in `map.service`
- `tour-map.component.tsx` — the wrapper that owns the `position: relative` region the panel is anchored to

---

## Files to create

```
modules/map/components/show-detail/
  show-detail.component.tsx   panel UI — presentational
  show-detail.hook.ts         reads selectedShow, provides handleClose
  show-detail.module.scss     panel layout + slide-up transition
```

## Files to modify

```
modules/map/components/tour-map/tour-map.component.tsx
  — render <ShowDetail> as a sibling to the dynamic MapCanvas

modules/map/components/venue-marker/venue-marker.hook.ts
  — read selectedShow to expose isActive flag

modules/map/components/venue-marker/venue-marker.component.tsx
  — pass isActive to createPinIcon so the selected pin turns white
```

---

## Panel placement

The panel renders **inside** `tour-map.component.tsx`, as a sibling to the `dynamic(MapCanvas)` inside `.wrapper`. The wrapper already has `position: relative` — the panel uses `position: absolute` anchored to the bottom of that region.

```
TourMap (.wrapper — position: relative, flex column)
  ├─ dynamic(MapCanvas, { ssr: false })    ← fills flex: 1
  └─ ShowDetail                            ← position: absolute, bottom: 0
```

`ShowDetail` is a Client Component (`'use client'`). A Server Component (`TourMap`) can import it — Next.js App Router handles the boundary correctly.

---

## Hook — `show-detail.hook.ts`

```ts
'use client';

export function useShowDetail() {
  const selectedShow    = useTourStore((s) => s.selectedShow);
  const setSelectedShow = useTourStore((s) => s.setSelectedShow);

  function handleClose() {
    setSelectedShow(null);
  }

  return { selectedShow, handleClose };
}
```

---

## Component — `show-detail.component.tsx`

```tsx
'use client';

// Props: none — reads from hook
// - if selectedShow is null, render nothing (null)
// - otherwise render the panel
```

Panel content:

```
┌─────────────────────────────────────────┐
│  [×]                                    │  ← close button, top-right
│                                         │
│  Madison Square Garden                  │  ← venue.name  (large)
│  New York, NY                           │  ← venue.city, venue.state (muted)
│                                         │
│  Oct 3, 2025                            │  ← formatShowDate(show.date)
│                                         │
│  [ Get Tickets → ]                      │  ← CTA button, opens ticketUrl in new tab
│                                         │
└─────────────────────────────────────────┘
```

Use `formatShowDate` from `map.service.ts` for the date (already exists from F2).

---

## Styles — `show-detail.module.scss`

The panel slides up into view using a CSS transform transition — no JS animation libraries.

```scss
.panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;           // above Leaflet tiles (z-index ~400) and controls (~800)
  background: /* dark surface */;
  border-top: 1px solid var(--color-border);
  border-radius: 1rem 1rem 0 0;
  padding: 1.5rem;

  transform: translateY(100%);
  transition: transform 0.25s ease;

  &.visible {
    transform: translateY(0);
  }
}
```

Apply `.visible` when `selectedShow` is not null. Use conditional class in JSX:
```tsx
className={`${styles.panel} ${selectedShow ? styles.visible : ''}`}
```

Always render the panel DOM element (never `return null`) so the CSS transition plays on both enter and exit. Return `null` only after the panel has fully exited — or simply always render it and let `translateY(100%)` hide it off-screen.

> **Always-render approach (preferred):** keep the panel in the DOM, hidden via transform. No need to track exit animation timing.

---

## Active pin — `venue-marker.hook.ts` + `venue-marker.component.tsx`

When `selectedShow` matches this marker's show, the pin should use `createPinIcon(true)` (white fill).

### Hook change

```ts
export function useVenueMarker(show: Show) {
  const setSelectedShow = useTourStore((s) => s.setSelectedShow);
  const selectedShow    = useTourStore((s) => s.selectedShow);

  const isActive = selectedShow?.id === show.id;

  function handleClick() {
    setSelectedShow(show);
  }

  return { handleClick, isActive };
}
```

### Component change

Pass `isActive` into `createPinIcon`:

```tsx
icon={createPinIcon(isActive)}
```

---

## Acceptance criteria

- [ ] Clicking a map pin opens the detail panel with venue name, city/state, date, and ticket link
- [ ] The panel slides up with a smooth CSS transition (no jump)
- [ ] The close button (×) slides the panel back down and clears `selectedShow`
- [ ] Clicking the map background (not a pin) does **not** close the panel — only the × button does
- [ ] The selected pin turns white; all other pins remain red
- [ ] Clicking a different pin while the panel is open swaps the content immediately
- [ ] Panel renders inside the map region (not full-page overlay)
- [ ] No Tailwind utility classes in TSX/JSX
