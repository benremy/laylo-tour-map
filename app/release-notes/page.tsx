'use client';

import Link from 'next/link';
import styles from './release-notes.module.scss';
import { releaseNotes } from '@/data/release-notes.data';
import { strings } from '@/constants/strings.constants';

export default function ReleaseNotesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>← Back</Link>
        <h1 className={styles.title}>{strings.releaseNotesLinkText}</h1>
        <p className={styles.subtitle}>{strings.releaseNotesSubtitle}</p>
      </header>

      <ol className={styles.list}>
        {releaseNotes.map((entry) => (
          <li key={entry.version} className={styles.entry}>
            <div className={styles.entryHeader}>
              <span className={styles.version}>{entry.version}</span>
              <span className={styles.entryTitle}>{entry.title}</span>
              <span className={styles.date}>{entry.date}</span>
            </div>
            <ul className={styles.changes}>
              {entry.changes.map((change, i) => (
                <li key={i} className={styles.change}>{change}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </main>
  );
}
