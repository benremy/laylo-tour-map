'use client';

import { useVenueStore } from '@/modules/venue/venue.store';

export function useVenueDetail() {
  const selectedVenue = useVenueStore((s) => s.selectedVenue);
  const setSelectedVenue = useVenueStore((s) => s.setSelectedVenue);

  function handleClose() {
    setSelectedVenue(null);
  }

  return { selectedVenue, handleClose };
}
