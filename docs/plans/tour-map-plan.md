# Laylo Tour Map — Implementation Plan

## Overview

Interactive tour map experience built on Next.js 16 (App Router). Shows artist tour venues on a Leaflet map with a synced sidebar list, show detail panel, and date filters. Stack: React 19 RC · react-leaflet 5 RC · Zustand 5 · SWR 2 · Tailwind CSS 4 · Sass.

---

## Feature Build Order

Features are built sequentially — each later feature depends on the one before it.

---

### F0 — Foundation
_Prerequisite for everything else._

- Replace stock `app/page.tsx` with the split-pane shell (map region + sidebar region)
- Define `tour.types.ts` — `Tour`, `Show`, `Venue` interfaces
- Scaffold empty `tour.store.ts` (Zustand)
- Create `mock-shows.ts` with 5–10 seed shows
- Verify `pnpm dev` runs clean

---

### F1 — Map Canvas
_Render a Leaflet map in the map region._

- `tour-map.component.tsx` — `dynamic()` wrapper with `{ ssr: false }` (Server Component shell)
- `map-canvas.component.tsx` — `'use client'`, renders `MapContainer` + `TileLayer` (OpenStreetMap)
- Leaflet CSS imported inside the client component
- Map fills its layout region

---

### F2 — Venue Markers
_A pin on the map for every show._

- `venue-marker.component.tsx` — `'use client'`, renders Leaflet `Marker` + `Popup` per show
- Custom SVG pin icon
- Clicking a marker sets `selectedShow` in `tour.store.ts`

---

### F3 — Show Detail
_Full detail view when a show is selected._

- `show-detail.component.tsx` — panel/drawer that appears when `selectedShow` is set
- Content: artist, venue name, city, date, ticket link CTA
- Closing the panel clears `selectedShow`

---

### F4 — Tour List Sidebar
_Scrollable list of all shows, synced with the map._

- `tour-sidebar.component.tsx` — renders a `ShowCard` per show
- `show-card.component.tsx` — single row (date, venue, city)
- Clicking a card sets `selectedShow` and pans the map to that venue
- Active show is highlighted in both the list and on the map

---

### F5 — Ticket Page
_Dedicated free-ticket claim page with localStorage persistence._

- Route: `/ticket/[show-id]`
- `app/ticket/[show-id]/page.tsx` — Server Component shell, passes `showId` to client component
- `modules/ticket/components/ticket-page/` — component + hook + SCSS module
- Hook reads `localStorage['laylo-tickets']` on mount; `handleClaim` writes an entry on click
- Two render states: **claim view** (unclaimed) and **confirmed view** (already claimed)
- Show detail CTA updated: `<Link href={/ticket/${show.id}}>` instead of external `ticketUrl`
- Spec: `docs/specs/f5-ticket-page.md`

---

### F6 — Date Filtering
_Filter the visible shows._

- `date-filter.component.tsx` — toggle: All / Upcoming / Past
- Filter state lives in `tour.store.ts`; both the map markers and sidebar list react
- Optional stretch: date range picker

---

### F7 — Data Fetching (SWR)
_Replace mock data with a real API._

- `shows.query.ts` — SWR fetcher + cache key
- `app/api/shows/route.ts` — Next.js Route Handler returning show data
- Loading and error states reflected in sidebar and map
- Mock data stays as fallback for development

---

## Verification Checklist

- [ ] `pnpm dev` — no SSR errors (Leaflet window guard)
- [ ] Map renders on `/`, markers visible for all shows
- [ ] Clicking a marker → detail panel opens
- [ ] Clicking a sidebar card → map pans to venue, card highlights
- [ ] Filter toggle → markers and list update reactively
- [ ] SWR fetch resolves, mock data removed from UI path
