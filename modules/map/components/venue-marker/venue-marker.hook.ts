'use client';

import { useTourStore } from '@/modules/map/tour.store';
import type { Show } from '@/modules/map/tour.types';

export function useVenueMarker(show: Show) {
  const setSelectedShow = useTourStore((s) => s.setSelectedShow);
  const selectedShow = useTourStore((s) => s.selectedShow);

  const isActive = selectedShow?.id === show.id;

  function handleClick() {
    setSelectedShow(show);
  }

  return { handleClick, isActive };
}
