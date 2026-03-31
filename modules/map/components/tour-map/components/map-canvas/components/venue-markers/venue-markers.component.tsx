'use client';

import { VenueMarker } from './components/venue-marker/venue-marker.component';
import { useVenueMarkers } from './venue-markers.hook';

export function VenueMarkers() {
  const { shows } = useVenueMarkers();

  return (
    <>
      {shows.map((show) => (
        <VenueMarker key={show.id} show={show} />
      ))}
    </>
  );
}
