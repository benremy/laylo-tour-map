'use client';

import { Marker, Popup } from 'react-leaflet';
import { createPinIcon } from '@/modules/venue/venue.service';
import type { Venue } from '@/modules/venue/venue.types';
import { useVenueMarker } from './venue-marker.hook';
import styles from './venue-marker.module.scss';

interface VenueMarkerProps {
  venue: Venue;
}

export function VenueMarker({ venue }: VenueMarkerProps) {
  const { handleClick, isActive } = useVenueMarker(venue);
  const firstOffering = venue.offerings[0];

  return (
    <Marker
      position={[venue.lat, venue.lng]}
      icon={createPinIcon(isActive)}
      eventHandlers={{ click: handleClick }}
    >
      <Popup>
        <div className={styles.popup}>
          <p className={styles.venueName}>{venue.name}</p>
          <p className={styles.meta}>
            {venue.city}, {venue.state}
          </p>
          {firstOffering && (
            <p className={styles.offering}>
              {firstOffering.label} · {firstOffering.schedule}
            </p>
          )}
        </div>
      </Popup>
    </Marker>
  );
}
