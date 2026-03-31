'use client';

import Link from 'next/link';
import { formatShowDate } from '@/modules/map/map.service';
import { strings } from '@/constants/strings.constants';
import { useTicketPage } from './ticket-page.hook';
import styles from './ticket-page.module.scss';

interface Props {
  showId: string;
}

export function TicketPage({ showId }: Props) {
  const { show, isClaimed, handleClaim } = useTicketPage(showId);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Link href="/map" className={styles.back}>
          {strings.ticketBackLink}
        </Link>

        {!show ? (
          <p className={styles.notFound}>{strings.ticketNotFound}</p>
        ) : (
          <>
            <p className={styles.heading}>
              {isClaimed ? strings.ticketConfirmedHeading : strings.ticketClaimHeading}
            </p>

            <p className={styles.venue}>{show.venue.name}</p>
            <p className={styles.meta}>
              {show.venue.city}, {show.venue.state}
            </p>
            <p className={styles.meta}>{formatShowDate(show.date)}</p>

            {isClaimed ? (
              <p className={styles.confirmed}>{strings.ticketConfirmedLabel}</p>
            ) : (
              <>
                <p className={styles.free}>{strings.ticketFreeLabel}</p>
                <button className={styles.claimBtn} onClick={handleClaim}>
                  {strings.ticketClaimCta}
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
