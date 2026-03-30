'use client';

import type { Show } from '@/modules/map/tour.types';
import { formatShowDate } from '@/modules/map/map.service';
import { useShowCard } from './show-card.hook';
import styles from './show-card.module.scss';

interface ShowCardProps {
  show: Show;
  isActive: boolean;
}

export function ShowCard({ show, isActive }: ShowCardProps) {
  const { handleClick } = useShowCard(show);

  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <p className={styles.date}>{formatShowDate(show.date)}</p>
      <p className={styles.venueName}>{show.venue.name}</p>
      <p className={styles.location}>{show.venue.city}, {show.venue.state}</p>
    </div>
  );
}
