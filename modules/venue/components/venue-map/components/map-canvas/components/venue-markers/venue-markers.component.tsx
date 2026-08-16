'use client';

import { VenueMarker } from './components/venue-marker/venue-marker.component';
import { useVenueMarkers } from './venue-markers.hook';

export function VenueMarkers() {
  const { venues } = useVenueMarkers();

  return (
    <>
      {venues.map((venue) => (
        <VenueMarker key={venue.id} venue={venue} />
      ))}
    </>
  );
}
