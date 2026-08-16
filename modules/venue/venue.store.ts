import { create } from 'zustand';
import type { Venue } from './venue.types';
import { venues } from '@/data/venues.data';

interface VenueStore {
  venues: Venue[];
  selectedVenue: Venue | null;
  setSelectedVenue: (venue: Venue | null) => void;
}

export const useVenueStore = create<VenueStore>((set) => ({
  venues,
  selectedVenue: null,
  setSelectedVenue: (venue) => set({ selectedVenue: venue }),
}));
