export interface ReleaseNote {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

export const releaseNotes: ReleaseNote[] = [
  {
    version: '0.5.0',
    date: '2026-08-16',
    title: 'Pivot: Local Venue Directory',
    changes: [
      'Repurposed from a fan-demand tour map into a curated local-venue directory for artists booking their own shows',
      'Removed the password gate, auth session, and ticket-claim flow entirely — the directory is open, no login required',
      'Replaced the Show/Venue model with a single curated Venue record: booking contact, pay structure, capacity, genre fit, equipment, recurring open-mic/live-music offerings, and curator call notes',
      'Map, sidebar, and detail panel now center on a single configurable city (constants/city.constants.ts) instead of a multi-city tour',
      'Venue detail panel surfaces a call/email "Contact venue" CTA in place of the old ticket-purchase link',
      'data/venues.data.ts replaces data/mock-shows.data.ts — hand-edited by a curator after verifying each venue by phone, no live API',
      'Planned next: filtering the venue list by offering type or pay structure once real curated data volume justifies it',
    ],
  },
  {
    version: '0.4.0',
    date: '2026-03-31',
    title: 'Ticket Page',
    changes: [
      'Dedicated /ticket/[show-id] page for claiming free tickets',
      'Claimed tickets persisted to localStorage — confirmed state survives page refresh',
      'Show detail CTA now navigates in-app instead of opening an external link',
    ],
  },
  {
    version: '0.3.0',
    date: '2026-03-30',
    title: 'Interactive Map',
    changes: [
      'Leaflet map now renders on the /map page centered on the US',
      'Viewport state (center + zoom) persisted in Zustand store',
      'Logout button clears session and redirects to home',
    ],
  },
  {
    version: '0.2.0',
    date: '2026-03-30',
    title: 'Auth & UI Foundation',
    changes: [
      'Password gate with session storage — authenticated users skip the gate',
      'GlassCard component for frosted-glass UI surfaces',
      'shadcn/ui and tw-animate-css integrated',
    ],
  },
  {
    version: '0.1.0',
    date: '2026-03-30',
    title: 'Project Bootstrap',
    changes: [
      'Next.js 16 App Router scaffold with Tailwind CSS 4',
      'Feature-based module structure established',
      'Core dependencies added: Leaflet, Zustand, SWR',
    ],
  },
];
