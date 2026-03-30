# Laylo Tour Map

**Where should I tour next?** — a visual demand intelligence tool built as a concept extension for Laylo's Tour Suite.

Laylo already knows where an artist's fans are. This makes it visible.

The platform collects RSVPs, story mentions, and fan locations across every campaign — but none of that data has ever been surfaced on a map. This project answers the question artists and their teams actually ask: *which cities have real demand and no date announced?*

---

## What It Does

An authenticated map experience where an artist can see their tour at a glance:

- **Fan density by city** — every show plotted as a pin with demand data behind it
- **Show detail panel** — venue, date, and ticket CTA surface on click
- **Tour list sidebar** — full chronological list synced with the map; clicking a card pans and selects
- **Untapped demand layer** *(coming in F5–F6)* — cities with high RSVP concentration and no booked date ranked by opportunity, with an AI-generated recommendation: *"You should add Austin — 847 fans, no date announced, nearest show is 300 miles away"*

---

## Why This Fits Laylo

Laylo's Tour Suite today is RSVPs and notifications — reactive. This adds a proactive, visual layer on top of data Laylo already owns. It extends two features they've already shipped (Analytics + Laylo AI) into a single decision-making tool, and it's a natural paid upsell on their Pro plan.

The integration path is low-friction: swap the mock show data for a real `/api/shows` route that reads from Laylo's fan database, and the whole thing is live.

---

## Feature Build Order

| Feature | Status | Description |
|---------|--------|-------------|
| F0 — Auth Gate | ✅ Done | Password-protected entry with session storage |
| F1 — Map Canvas | ✅ Done | Leaflet map with OSM tiles, viewport state in Zustand |
| F2 — Venue Markers | ✅ Done | SVG pins for each show, click sets selected show |
| F3 — Show Detail | ✅ Done | Slide-up panel with venue, date, and ticket CTA |
| F4 — Tour Sidebar | 🔲 Next | Scrollable show list, synced selection, map panning |
| F5 — Date Filtering | 🔲 Planned | Toggle: All / Upcoming / Past |
| F6 — Live Data | 🔲 Planned | SWR fetch from real API route, replace mock data |

---

# Dependencies
- [ sass ](https://sass-lang.com/)
- [ leaflet for mapping ](https://react-leaflet.js.org/docs/start-installation/)
- [ zustand for state managment ](https://zustand.docs.pmnd.rs/learn/getting-started/introduction)
- [ swr for data fetching ](https://swr.vercel.app/)