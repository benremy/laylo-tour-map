'use client';

import { useVenueStore } from '@/modules/venue/venue.store';

export function useVenueMarkers() {
  const venues = useVenueStore((s) => s.venues);
  return { venues };
}
