'use client';

import { useVenueStore } from '@/modules/venue/venue.store';
import { useMapStore } from '@/modules/venue/venue-map.store';
import type { Venue } from '@/modules/venue/venue.types';

export function useVenueCard(venue: Venue) {
  const setSelectedVenue = useVenueStore((s) => s.setSelectedVenue);
  const panTo = useMapStore((s) => s.panTo);

  function handleClick() {
    setSelectedVenue(venue);
    panTo([venue.lat, venue.lng]);
  }

  return { handleClick };
}
