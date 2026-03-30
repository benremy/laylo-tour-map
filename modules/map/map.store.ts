import { create } from 'zustand';
import type { MapViewport } from './map.types';
import { DEFAULT_VIEWPORT } from './map.service';

interface MapStore {
  viewport: MapViewport;
  setViewport: (viewport: MapViewport) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  viewport: DEFAULT_VIEWPORT,
  setViewport: (viewport) => set({ viewport }),
}));
