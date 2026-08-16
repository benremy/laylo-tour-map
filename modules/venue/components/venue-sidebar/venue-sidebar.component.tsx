'use client';

import { VenueCard } from './components/venue-card/venue-card.component';
import { useVenueSidebar } from './venue-sidebar.hook';
import { strings } from '@/constants/strings.constants';
import styles from './venue-sidebar.module.scss';

export function VenueSidebar() {
  const { venues, selectedVenue } = useVenueSidebar();

  return (
    <aside className={styles.sidebar}>
      <p className={styles.heading}>{strings.sidebarHeading}</p>
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={venue}
          isActive={venue.id === selectedVenue?.id}
        />
      ))}
    </aside>
  );
}
