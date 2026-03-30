import type { ReactNode } from 'react';
import styles from './glass-card.module.scss';

interface GlassCardProps {
  children: ReactNode;
}

export function GlassCard({ children }: GlassCardProps) {
  return <div className={styles.card}>{children}</div>;
}
