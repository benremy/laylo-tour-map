'use client';

import { useVenueStore } from '@/modules/venue/venue.store';
import type { Venue } from '@/modules/venue/venue.types';

export function useVenueMarker(venue: Venue) {
  const setSelectedVenue = useVenueStore((s) => s.setSelectedVenue);
  const selectedVenue = useVenueStore((s) => s.selectedVenue);

  const isActive = selectedVenue?.id === venue.id;

  function handleClick() {
    setSelectedVenue(venue);
  }

  return { handleClick, isActive };
}
