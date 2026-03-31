'use client';

import { strings } from '@/constants/strings.constants';
import styles from './ticket-action.module.scss';

interface Props {
  isClaimed: boolean;
  onClaim: () => void;
}

export function TicketAction({ isClaimed, onClaim }: Props) {
  if (isClaimed) {
    return <p className={styles.confirmed}>{strings.ticketConfirmedLabel}</p>;
  }

  return (
    <>
      <p className={styles.free}>{strings.ticketFreeLabel}</p>
      <button className={styles.claimBtn} onClick={onClaim}>
        {strings.ticketClaimCta}
      </button>
    </>
  );
}
