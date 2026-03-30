# Incident: Map Not Rendering

**Date:** 2026-03-30
**Status:** Resolved

## Problem

The `/map` page displayed a black screen with no map tiles visible.

Three compounding issues were identified:

### 1. Broken flex height chain
`MapCanvas` used `height: 100%` on `.mapContainer`, and the parent `.wrapper` (in `tour-map.module.scss`) also used `height: 100%`. Inside a flex column, `height: 100%` on a flex child resolves to `0` when the parent has no explicit pixel height — only `flex: 1`. This caused the Leaflet container to render at 0px height.

### 2. Leaflet CSS imported in wrong place
`leaflet/dist/leaflet.css` was moved from the client component to `globals.css` via `@import "leaflet/dist/leaflet.css"`. Tailwind 4's CSS engine does not resolve bare node_modules specifiers in `@import`, so the stylesheet never loaded. Without it, Leaflet's tile layer and container styles are absent.

### 3. `height: 100%` instead of `flex: 1` on the map container
Even after fixing the wrapper, `.mapContainer` still used `height: 100%`. When a flex item's height is determined by the flex algorithm (not an explicit value), `height: 100%` on a child is unreliable across browsers. The container needs to participate in the flex layout directly.

## Fix

**`modules/map/components/tour-map/tour-map.module.scss`**
Changed `.wrapper` from `height: 100%` to `flex: 1; min-height: 0; display: flex; flex-direction: column` so it grows to fill remaining space and passes flex context to its child.

**`modules/map/components/map-canvas/map-canvas.module.scss`**
Changed `.mapContainer` from `height: 100%` to `flex: 1; min-height: 0` so Leaflet's container participates in the flex column and receives a real computed height.

**`modules/map/components/map-canvas/map-canvas.component.tsx`**
Kept `import 'leaflet/dist/leaflet.css'` directly in the client component. This is the correct location for Next.js + Turbopack — do not move it to `globals.css`.

## Rule

For Leaflet (and any library requiring an explicit container height) inside a flex layout:
- Every ancestor in the chain must use `flex: 1; min-height: 0` and `display: flex; flex-direction: column`, not `height: 100%`.
- Leaflet's CSS must be imported in the client component file, not in a global CSS file processed by Tailwind's engine.
