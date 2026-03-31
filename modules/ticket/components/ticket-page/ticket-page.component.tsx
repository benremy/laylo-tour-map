'use client';

import { useTicketPage } from './ticket-page.hook';
import { BackButton } from './components/back-button/back-button.component';
import { TicketNotFound } from './components/ticket-not-found/ticket-not-found.component';
import { TicketDetails } from './components/ticket-details/ticket-details.component';
import { TicketAction } from './components/ticket-action/ticket-action.component';
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
