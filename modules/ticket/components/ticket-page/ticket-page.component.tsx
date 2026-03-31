'use client';

import { useTicketPage } from './ticket-page.hook';
import { BackButton } from '../back-button/back-button.component';
import { TicketNotFound } from '../ticket-not-found/ticket-not-found.component';
import { TicketDetails } from '../ticket-details/ticket-details.component';
import { TicketAction } from '../ticket-action/ticket-action.component';
import styles from './ticket-page.module.scss';

interface Props {
  showId: string;
}

export function TicketPage({ showId }: Props) {
  const { show, isClaimed, handleClaim } = useTicketPage(showId);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <BackButton />

        {!show ? (
          <TicketNotFound />
        ) : (
          <>
            <TicketDetails show={show} isClaimed={isClaimed} />
            <TicketAction isClaimed={isClaimed} onClaim={handleClaim} />
          </>
        )}
      </div>
    </div>
  );
}
