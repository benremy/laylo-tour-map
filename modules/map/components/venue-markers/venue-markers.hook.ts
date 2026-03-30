'use client';

import { useTourStore } from '@/modules/map/tour.store';

export function useVenueMarkers() {
  const shows = useTourStore((s) => s.shows);
  return { shows };
}
