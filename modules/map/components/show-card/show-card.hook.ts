'use client';

import { useTourStore } from '@/modules/map/tour.store';
import { useMapStore } from '@/modules/map/map.store';
import type { Show } from '@/modules/map/tour.types';

export function useShowCard(show: Show) {
  const setSelectedShow = useTourStore((s) => s.setSelectedShow);
  const panTo = useMapStore((s) => s.panTo);

  function handleClick() {
    setSelectedShow(show);
    panTo([show.venue.lat, show.venue.lng]);
  }

  return { handleClick };
}
