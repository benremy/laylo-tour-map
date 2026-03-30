'use client';

import { formatShowDate } from '@/modules/map/map.service';
import { useShowDetail } from './show-detail.hook';
import styles from './show-detail.module.scss';

export function ShowDetail() {
  const { selectedShow, handleClose } = useShowDetail();

  return (
    <div className={`${styles.panel} ${selectedShow ? styles.visible : ''}`}>
      <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
        ×
      </button>
      {selectedShow && (
        <>
          <p className={styles.venueName}>{selectedShow.venue.name}</p>
          <p className={styles.location}>
            {selectedShow.venue.city}, {selectedShow.venue.state}
          </p>
          <p className={styles.date}>{formatShowDate(selectedShow.date)}</p>
          <a
            href={selectedShow.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ticketLink}
          >
            Get Tickets →
          </a>
        </>
      )}
    </div>
  );
}
