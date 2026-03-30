import type { DivIcon } from 'leaflet';
import type { MapViewport } from './map.types';

export const DEFAULT_VIEWPORT: MapViewport = {
  center: [39.5, -98.35],
  zoom: 4,
};

export function fixLeafletIcons(): void {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet') as typeof import('leaflet');
  delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

export function createPinIcon(active = false): DivIcon {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet') as typeof import('leaflet');
  const fill = active ? '#ffffff' : '#e84040';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32" width="24" height="32">
    <path d="M12 2C7.03 2 3 6.03 3 11c0 6.63 9 19 9 19s9-12.37 9-19c0-4.97-4.03-9-9-9z" fill="${fill}"/>
    <circle cx="12" cy="11" r="3.5" fill="rgba(255,255,255,0.35)"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [24, 32],
    iconAnchor: [12, 32],
    popupAnchor: [0, -34],
  });
}

export function formatShowDate(isoDate: string): string {
  return new Date(isoDate + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
