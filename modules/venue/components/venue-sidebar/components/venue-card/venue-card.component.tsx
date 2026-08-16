'use client';

import type { Venue } from '@/modules/venue/venue.types';
import { useVenueCard } from './venue-card.hook';
import styles from './venue-card.module.scss';

interface VenueCardProps {
  venue: Venue;
  isActive: boolean;
}

export function VenueCard({ venue, isActive }: VenueCardProps) {
  const { handleClick } = useVenueCard(venue);
  const firstOffering = venue.offerings[0];

  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <p className={styles.venueName}>{venue.name}</p>
      <p className={styles.location}>{venue.city}, {venue.state}</p>
      {firstOffering && <p className={styles.offering}>{firstOffering.label}</p>}
    </div>
  );
}
