'use client';

import { formatShowDate } from '@/modules/map/map.service';
import { strings } from '@/constants/strings.constants';
import type { Show } from '@/modules/map/tour.types';
import styles from './ticket-details.module.scss';

interface Props {
  show: Show;
  isClaimed: boolean;
}

export function TicketDetails({ show, isClaimed }: Props) {
  return (
    <>
      <p className={styles.heading}>
        {isClaimed ? strings.ticketConfirmedHeading : strings.ticketClaimHeading}
      </p>
      <p className={styles.venue}>{show.venue.name}</p>
      <p className={styles.meta}>
        {show.venue.city}, {show.venue.state}
      </p>
      <p className={styles.meta}>{formatShowDate(show.date)}</p>
    </>
  );
}
