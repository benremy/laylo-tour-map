'use client';

import { useTourStore } from '@/modules/map/tour.store';
import type { Show } from '@/modules/map/tour.types';

export function useVenueMarker(show: Show) {
  const setSelectedShow = useTourStore((s) => s.setSelectedShow);

  function handleClick() {
    setSelectedShow(show);
  }

  return { handleClick };
}
