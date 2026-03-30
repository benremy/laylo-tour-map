# F4 — Tour List Sidebar

> A scrollable list of all shows, permanently visible alongside the map. Clicking a card selects the show, pans the map to that venue, and opens the F3 detail panel.

---

## Depends on

- F3 complete — `selectedShow` / `setSelectedShow` in `useTourStore`, `ShowDetail` panel functional
- `map.store.ts` — `useMapStore` with `setViewport` exists
- `map.service.ts` — `formatShowDate` exists

---

## Layout change

F4 introduces a split-pane layout. The `/map` page currently stacks `MapHeader` + `TourMap` vertically. After F4, the area below the header splits into two horizontal columns:

```
┌──────────────────────────────────────────────────────┐
│  MapHeader                                           │  ← unchanged
├────────────────────┬─────────────────────────────────┤
│                    │                                 │
│   TourSidebar      │        TourMap                  │
│   (fixed width)    │   (fills remaining width)       │
│                    │                                 │
└────────────────────┴─────────────────────────────────┘
```

Implement this split in `app/map/map.module.scss` — add a `.body` class that wraps the sidebar + map in a flex row. Update `app/map/page.tsx` to add the `.body` wrapper.

---

## Files to create

```
modules/map/components/tour-sidebar/
  tour-sidebar.component.tsx    scrollable show list — presentational
  tour-sidebar.hook.ts          reads shows + selectedShow from store
  tour-sidebar.module.scss      sidebar layout + scroll

modules/map/components/show-card/
  show-card.component.tsx       single show row — presentational
  show-card.hook.ts             handles click: setSelectedShow + pan map
  show-card.module.scss         card styles + active state
```

## Files to modify

```
app/map/page.tsx
  — wrap TourSidebar + TourMap in a .body flex-row container

app/map/map.module.scss
  — add .body (flex row, flex: 1, min-height: 0)

modules/map/map.store.ts
  — expose panTo action: accepts LatLng, updates viewport center
    (zoom stays unchanged so the user's zoom level is preserved)
```

---

## Store change — `map.store.ts`

Add `panTo` to the existing `MapStore`:

```ts
panTo: (center: LatLng) => void;
```

Implementation:
```ts
panTo: (center) =>
  set((state) => ({
    viewport: { ...state.viewport, center },
  })),
```

`panTo` updates the Zustand viewport. `MapCanvas` already reads `viewport` from the store and passes it to `MapContainer`. However, `MapContainer`'s `center` prop is only used on initial mount — to imperatively pan after mount, use Leaflet's `map.flyTo` / `map.panTo`.

To bridge this, extend `MapEventHandler` in `map-canvas.component.tsx` to subscribe to a `pendingPan` field in the store and call `map.flyTo` when it changes, then clear it.

### Revised store shape

```ts
interface MapStore {
  viewport: MapViewport;
  setViewport: (viewport: MapViewport) => void;
  pendingPan: LatLng | null;
  panTo: (center: LatLng) => void;
  clearPendingPan: () => void;
}
```

`MapEventHandler` (inside `MapCanvas`) subscribes to `pendingPan`:
```ts
const pendingPan    = useMapStore((s) => s.pendingPan);
const clearPending  = useMapStore((s) => s.clearPendingPan);
const map           = useMap();

useEffect(() => {
  if (!pendingPan) return;
  map.flyTo(pendingPan, map.getZoom(), { duration: 0.6 });
  clearPending();
}, [pendingPan]);
```

---

## Hook — `tour-sidebar.hook.ts`

```ts
'use client';

export function useTourSidebar() {
  const shows        = useTourStore((s) => s.shows);
  const selectedShow = useTourStore((s) => s.selectedShow);
  return { shows, selectedShow };
}
```

---

## Component — `tour-sidebar.component.tsx`

```tsx
'use client';

// - renders a scrollable list of <ShowCard> for each show
// - passes isActive={show.id === selectedShow?.id} to each card
// - no wrapper padding beyond what the sidebar container provides
```

---

## Hook — `show-card.hook.ts`

```ts
'use client';

// Props: show: Show
// - setSelectedShow from useTourStore
// - panTo from useMapStore
// - handleClick: setSelectedShow(show) then panTo([show.venue.lat, show.venue.lng])
```

---

## Component — `show-card.component.tsx`

```tsx
'use client';

// Props: show: Show, isActive: boolean
// Card layout:
//
//  ┌─────────────────────────────────┐
//  │  Aug 7       ← date, muted      │
//  │  Crypto.com Arena               │  ← venue.name, bold
//  │  Los Angeles, CA                │  ← city, state — muted
//  └─────────────────────────────────┘
//
// Active state: left border accent or highlighted background
// onClick: calls handleClick from useShowCard(show)
```

---

## Styles

### `tour-sidebar.module.scss`

```scss
.sidebar {
  width: 300px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-right: 1px solid var(--color-border);
  background: var(--color-surface);
}
```

### `show-card.module.scss`

```scss
.card {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: color-mix(in srgb, var(--color-text) 5%, transparent);
  }

  &.active {
    border-left: 3px solid var(--color-text);
    padding-left: calc(1.25rem - 3px);   // compensate for border width
  }
}
```

### `map.module.scss` addition

```scss
.body {
  flex: 1;
  display: flex;
  flex-direction: row;
  min-height: 0;
}
```

---

## `app/map/page.tsx` change

```tsx
<main className={styles.main}>
  <MapHeader />
  <div className={styles.body}>
    <TourSidebar />
    <TourMap />
  </div>
</main>
```

---

## Acceptance criteria

- [ ] Sidebar is permanently visible to the left of the map
- [ ] All 8 shows are listed in chronological order
- [ ] Clicking a card sets `selectedShow`, pans the map to that venue, and opens the detail panel
- [ ] The active card is visually highlighted
- [ ] Selecting a pin on the map also highlights the corresponding card in the sidebar
- [ ] Sidebar scrolls independently when show count overflows its height
- [ ] Map still fills the remaining horizontal space after the sidebar
- [ ] `ShowDetail` panel (F3) continues to work — slides up over the map region only, not over the sidebar
