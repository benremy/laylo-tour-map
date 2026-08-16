'use client';

import { useVenueStore } from '@/modules/venue/venue.store';

export function useVenueSidebar() {
  const venues = useVenueStore((s) => s.venues);
  const selectedVenue = useVenueStore((s) => s.selectedVenue);
  const sorted = [...venues].sort((a, b) => a.name.localeCompare(b.name));
  return { venues: sorted, selectedVenue };
}
