'use client';

import Link from 'next/link';
import { strings } from '@/constants/strings.constants';
import styles from './back-button.module.scss';

export function BackButton() {
  return (
    <Link href="/map" className={styles.back}>
      {strings.ticketBackLink}
    </Link>
  );
}
