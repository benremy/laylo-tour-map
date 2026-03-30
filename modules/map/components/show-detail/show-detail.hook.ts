'use client';

import { useTourStore } from '@/modules/map/tour.store';

export function useShowDetail() {
  const selectedShow = useTourStore((s) => s.selectedShow);
  const setSelectedShow = useTourStore((s) => s.setSelectedShow);

  function handleClose() {
    setSelectedShow(null);
  }

  return { selectedShow, handleClose };
}
