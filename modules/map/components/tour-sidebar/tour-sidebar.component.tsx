'use client';

import { ShowCard } from '../show-card/show-card.component';
import { useTourSidebar } from './tour-sidebar.hook';
import styles from './tour-sidebar.module.scss';

export function TourSidebar() {
  const { shows, selectedShow } = useTourSidebar();

  return (
    <aside className={styles.sidebar}>
      <p className={styles.heading}>Tour Dates</p>
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
          isActive={show.id === selectedShow?.id}
        />
      ))}
    </aside>
  );
}
