'use client';

import { useTourStore } from '@/modules/map/tour.store';

export function useTourSidebar() {
  const shows = useTourStore((s) => s.shows);
  const selectedShow = useTourStore((s) => s.selectedShow);
  const sorted = [...shows].sort((a, b) => a.date.localeCompare(b.date));
  return { shows: sorted, selectedShow };
}
