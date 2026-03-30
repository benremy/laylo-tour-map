'use client';

import { Marker, Popup } from 'react-leaflet';
import { createPinIcon, formatShowDate } from '@/modules/map/map.service';
import type { Show } from '@/modules/map/tour.types';
import { useVenueMarker } from './venue-marker.hook';
import styles from './venue-marker.module.scss';

interface VenueMarkerProps {
  show: Show;
}

export function VenueMarker({ show }: VenueMarkerProps) {
  const { handleClick, isActive } = useVenueMarker(show);

  return (
    <Marker
      position={[show.venue.lat, show.venue.lng]}
      icon={createPinIcon(isActive)}
      eventHandlers={{ click: handleClick }}
    >
      <Popup>
        <div className={styles.popup}>
          <p className={styles.venueName}>{show.venue.name}</p>
          <p className={styles.meta}>
            {show.venue.city}, {show.venue.state} · {formatShowDate(show.date)}
          </p>
          <a
            href={show.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ticketLink}
          >
            Tickets →
          </a>
        </div>
      </Popup>
    </Marker>
  );
}
