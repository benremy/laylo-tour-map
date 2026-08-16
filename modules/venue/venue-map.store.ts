import { create } from 'zustand';
import type { LatLng, MapViewport } from './venue-map.types';
import { DEFAULT_VIEWPORT } from './venue.service';

interface MapStore {
  viewport: MapViewport;
  setViewport: (viewport: MapViewport) => void;
  pendingPan: LatLng | null;
  panTo: (center: LatLng) => void;
  clearPendingPan: () => void;
}

export const useMapStore = create<MapStore>((set) => ({
  viewport: DEFAULT_VIEWPORT,
  setViewport: (viewport) => set({ viewport }),
  pendingPan: null,
  panTo: (center) => set({ pendingPan: center }),
  clearPendingPan: () => set({ pendingPan: null }),
}));
