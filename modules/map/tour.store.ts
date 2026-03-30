import { create } from 'zustand';
import type { Show } from './tour.types';
import { mockShows } from '@/data/mock-shows.data';

interface TourStore {
  shows: Show[];
  selectedShow: Show | null;
  setSelectedShow: (show: Show | null) => void;
}

export const useTourStore = create<TourStore>((set) => ({
  shows: mockShows,
  selectedShow: null,
  setSelectedShow: (show) => set({ selectedShow: show }),
}));
