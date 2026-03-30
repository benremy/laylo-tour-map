# F1 — Map Canvas

**Depends on:** F0 (split-pane shell layout in `app/page.tsx` exists)
**Delivers:** A Leaflet map rendering OpenStreetMap tiles inside the map region of the layout.

---

## Goal

Mount a fully functional Leaflet map that fills the map region. No markers yet — just a pannable, zoomable tile map with a controlled initial viewport.

---

## Files

### New

| Path | Role |
|---|---|
| `modules/map/map.types.ts` | TypeScript types for the map module |
| `modules/map/map.store.ts` | Zustand store — viewport state |
| `modules/map/map.service.ts` | Default config, Leaflet icon fix |
| `modules/map/components/map-canvas/map-canvas.component.tsx` | `'use client'` — actual Leaflet map |
| `modules/map/components/map-canvas/map-canvas.style.scss` | Height/width styles for the map container |
| `modules/map/components/tour-map/tour-map.component.tsx` | `dynamic()` shell — SSR-safe entry point |
| `modules/map/components/tour-map/tour-map.style.scss` | Wrapper layout styles |

### Modified

| Path | Change |
|---|---|
| `app/page.tsx` | Render `TourMap` in the map region (replacing placeholder) |

---

## Types — `map.types.ts`

```ts
export type LatLng = [number, number];

export interface MapViewport {
  center: LatLng;
  zoom: number;
}
```

---

## Store — `map.store.ts`

State shape:

| Field | Type | Purpose |
|---|---|---|
| `viewport` | `MapViewport` | Current map center and zoom |

Actions:

| Action | Signature | Purpose |
|---|---|---|
| `setViewport` | `(viewport: MapViewport) => void` | Update center + zoom (called on map move/zoom end) |

Initial state: use `DEFAULT_VIEWPORT` from `map.service.ts`.

---

## Service — `map.service.ts`

**`DEFAULT_VIEWPORT: MapViewport`**
Initial center and zoom for the map on first load. Center on the contiguous US as a reasonable default for a US tour map.

```ts
export const DEFAULT_VIEWPORT: MapViewport = {
  center: [39.5, -98.35],
  zoom: 4,
};
```

**Leaflet default icon fix**
Leaflet's default marker icons break under webpack/Next.js because the image URLs are resolved incorrectly. Export a `fixLeafletIcons()` function that overrides `L.Icon.Default`'s `imagePath`. Call this once inside `map-canvas.component.tsx` on mount (not at module load time — it must run client-side only).

> Note: react-leaflet 5 RC may handle this differently than 4.x. Verify against its changelog before implementing.

---

## Component — `tour-map.component.tsx`

**Role:** SSR-safe shell. This is what the rest of the app imports.

- Lives at `modules/map/components/tour-map/`
- Is a Server Component (no `'use client'`)
- Uses `next/dynamic` to load `MapCanvas` with `{ ssr: false }`
- Renders a styled wrapper `<div>` that defines the map's dimensions/layout
- Passes `className` down to the dynamic component if needed for layout sizing

**Props:** none for F1.

```
TourMap
  └─ dynamic(MapCanvas, { ssr: false })   ← loaded only in browser
```

---

## Component — `map-canvas.component.tsx`

**Role:** The actual Leaflet map. Browser-only.

- `'use client'` directive at top
- Imports `leaflet/dist/leaflet.css` (required; not auto-injected)
- Calls `fixLeafletIcons()` from `map.service.ts` on mount
- Reads `viewport` from `useMapStore`
- Calls `setViewport` on Leaflet's `moveend` / `zoomend` events to keep store in sync
- Renders `MapContainer` with `center` and `zoom` from the store
- Renders one `TileLayer` using OpenStreetMap tiles

**OpenStreetMap tile URL:**
```
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```
Attribution: `© OpenStreetMap contributors`

**Sizing:** The `MapContainer` must have an explicit height. Do not rely on `height: 100%` alone — Leaflet requires a concrete height on its container. Set this via the SCSS module (e.g. `height: 100vh` or `height: 100%` on a parent that has a concrete height).

---

## Styles

### `map-canvas.style.scss`

```scss
.mapContainer {
  width: 100%;
  height: 100%;
}
```

The parent layout (from F0's shell) must give this region a concrete height.

### `tour-map.style.scss`

```scss
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
```

---

## Implementation Notes

1. **Read Next.js 16 docs first.** `next/dynamic` behavior may differ from v14/v15. Check `node_modules/next/dist/docs/` before writing the shell component.

2. **Read react-leaflet 5 RC changelog.** `MapContainer`, `TileLayer`, and event hooks may have updated APIs. Do not assume v4 patterns work.

3. **CSS import inside client component.** Leaflet CSS must be imported inside a `'use client'` file. Importing it in a Server Component or `globals.css` may cause issues or not work at all.

4. **`MapContainer` `key` prop.** If `MapContainer` needs to re-mount (e.g., due to viewport prop changes), it requires a `key`. For F1, the initial viewport is static so this isn't needed yet — but be aware for future features.

5. **`useMap` hook scope.** react-leaflet's `useMap()` hook only works inside a child of `MapContainer`. The store-sync logic (listening to `moveend`) must be in a child component of `MapContainer`, not in `map-canvas` itself. Create a small `MapEventHandler` component rendered as a child of `MapContainer` for this.

---

## Acceptance Criteria

- [ ] `pnpm dev` starts with no SSR errors or `window is not defined` errors
- [ ] Navigating to `/` renders the split-pane layout with a map visible in the map region
- [ ] The map is interactive — draggable and zoomable
- [ ] OpenStreetMap tiles load and display correctly
- [ ] Initial viewport centers on the US at zoom 4
- [ ] Map fills its layout region with no overflow or collapsed height
- [ ] `useMapStore().viewport` updates in the store when the map is panned or zoomed
