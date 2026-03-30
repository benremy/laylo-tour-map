'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { fixLeafletIcons } from '../../map.service';
import { useMapStore } from '../../map.store';
import styles from './map-canvas.module.scss';

function MapEventHandler() {
  const setViewport = useMapStore((s) => s.setViewport);

  useMapEvents({
    moveend(e) {
      const map = e.target;
      const center = map.getCenter();
      setViewport({ center: [center.lat, center.lng], zoom: map.getZoom() });
    },
    zoomend(e) {
      const map = e.target;
      const center = map.getCenter();
      setViewport({ center: [center.lat, center.lng], zoom: map.getZoom() });
    },
  });

  return null;
}

export function MapCanvas() {
  const viewport = useMapStore((s) => s.viewport);

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
    </MapContainer>
  );
}
