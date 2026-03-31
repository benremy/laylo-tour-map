'use client';

import { strings } from '@/constants/strings.constants';
import styles from './ticket-not-found.module.scss';

export function TicketNotFound() {
  return <p className={styles.notFound}>{strings.ticketNotFound}</p>;
}
