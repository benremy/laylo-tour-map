'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { fixLeafletIcons } from '../../../../map.service';
import { useMapStore } from '../../../../map.store';
import { VenueMarkers } from './components/venue-markers/venue-markers.component';
import styles from './map-canvas.module.scss';

function MapEventHandler() {
  const setViewport = useMapStore((s) => s.setViewport);
  const pendingPan = useMapStore((s) => s.pendingPan);
  const clearPendingPan = useMapStore((s) => s.clearPendingPan);

  const map = useMapEvents({
    moveend(e) {
      const m = e.target;
      const center = m.getCenter();
      setViewport({ center: [center.lat, center.lng], zoom: m.getZoom() });
    },
    zoomend(e) {
      const m = e.target;
      const center = m.getCenter();
      setViewport({ center: [center.lat, center.lng], zoom: m.getZoom() });
    },
  });

  useEffect(() => {
    if (!pendingPan) return;
    map.flyTo(pendingPan, map.getZoom(), { duration: 0.6 });
    clearPendingPan();
  }, [pendingPan]);

  return null;
}

export function MapCanvas() {
  // const viewport = useMapStore((s) => s.viewport); <-- THIS IS THE BASTARD. See? this is why you have to babysit claude
  const viewport = useMapStore.getState().viewport;

  useEffect(() => {
    fixLeafletIcons();
  }, []);

  return (
    <MapContainer
      center={viewport.center}
      zoom={viewport.zoom}
      className={styles.mapContainer}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <MapEventHandler />
      <VenueMarkers />
    </MapContainer>
  );
}