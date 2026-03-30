# F2 — Venue Markers

> Render a pin on the map for every show. Clicking a pin sets `selectedShow` in the tour store.

---

## Depends on

- F1 complete — `MapCanvas` renders inside `MapContainer` with `TileLayer`
- `map.store.ts` — `MapViewport` and `useMapStore` already exist

---

## Files to create

```
data/
  mock-shows.data.ts          seed data — 8 US shows

modules/map/
  tour.types.ts               Show, Venue interfaces
  tour.store.ts               Zustand — selectedShow, shows list
  components/
    venue-marker/
      venue-marker.component.tsx   single Marker + Popup
      venue-marker.module.scss     popup styles
    venue-markers/
      venue-markers.component.tsx  renders all markers from store
```

## Files to modify

```
modules/map/components/map-canvas/map-canvas.component.tsx
  — render <VenueMarkers /> inside <MapContainer>
```

---

## Types — `modules/map/tour.types.ts`

```ts
export interface Venue {
  id: string;
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
}

export interface Show {
  id: string;
  venue: Venue;
  date: string;          // ISO 8601 — "2025-08-14"
  ticketUrl: string;
}
```

No `Tour` wrapper needed yet — F4 sidebar and F6 data fetching will introduce it.

---

## Mock data — `data/mock-shows.data.ts`

8 shows spread across the US, covering different time zones. Fields must satisfy `Show`.

```ts
import type { Show } from '@/modules/map/tour.types';

export const mockShows: Show[] = [ /* 8 entries */ ];
```

Seed cities (one show each): Los Angeles CA, Seattle WA, Denver CO, Austin TX,
Chicago IL, Nashville TN, New York NY, Atlanta GA.
Dates: spread across Aug–Oct 2025.

---

## Store — `modules/map/tour.store.ts`

```ts
import { create } from 'zustand';
import type { Show } from './tour.types';
import { mockShows } from '@/data/mock-shows.data';

interface TourStore {
  shows: Show[];
  selectedShow: Show | null;
  setSelectedShow: (show: Show | null) => void;
}

export const useTourStore = create<TourStore>((set) => ({
  shows: mockShows,
  selectedShow: null,
  setSelectedShow: (show) => set({ selectedShow: show }),
}));
```

Keep separate from `map.store.ts` — tour data and viewport are independent concerns.

---

## Marker icon

Use Leaflet `divIcon` with an inline SVG circle-pin. Do **not** use `L.Icon` with a PNG URL — it requires extra asset wiring and `fixLeafletIcons` doesn't apply.

Create the icon factory in `map.service.ts`:

```ts
export function createPinIcon(active = false): L.DivIcon {
  const color = active ? '#ffffff' : '#e84040';
  const svg = `<svg xmlns="..." viewBox="0 0 24 32" width="24" height="32">
    <!-- teardrop pin shape, filled with ${color} -->
  </svg>`;
  return L.divIcon({
    html: svg,
    className: '',          // clear Leaflet's default white box class
    iconSize: [24, 32],
    iconAnchor: [12, 32],   // tip of pin at lat/lng
    popupAnchor: [0, -34],
  });
}
```

The `active` variant (white) is for F3 — include the parameter now so the icon factory doesn't need to change later.

---

## VenueMarker component — `venue-marker.component.tsx`

```tsx
'use client';

// Props: show: Show
// - renders a react-leaflet <Marker> at [show.venue.lat, show.venue.lng]
// - icon: createPinIcon() from map.service
// - onClick: calls useTourStore setSelectedShow(show)
// - renders a <Popup> with: venue name, city/state, date (formatted), ticket link
```

Popup content layout (use SCSS module for styles, not Tailwind classes):
```
[venue name]       ← bold
[City, ST · Date]  ← muted line
[Tickets →]        ← anchor, opens in new tab
```

---

## VenueMarkers component — `venue-markers.component.tsx`

```tsx
'use client';

// - reads shows from useTourStore
// - renders a <VenueMarker> for each show
// - no wrapper DOM element (React fragment)
```

---

## MapCanvas integration

Inside the existing `<MapContainer>` JSX, add after `<MapEventHandler />`:

```tsx
<VenueMarkers />
```

`VenueMarkers` must be a child of `MapContainer` so react-leaflet's map context is available.

---

## Acceptance criteria

- [ ] 8 pins visible on the map at the correct coordinates
- [ ] Clicking a pin opens its Popup with venue, date, and ticket link
- [ ] Clicking a pin sets `selectedShow` in `useTourStore` (verify via React DevTools)
- [ ] No SSR errors — all marker code runs client-side only (inside the `dynamic()` boundary already set in `tour-map.component.tsx`)
- [ ] No Tailwind utility classes in TSX/JSX — all styles in `.module.scss`
