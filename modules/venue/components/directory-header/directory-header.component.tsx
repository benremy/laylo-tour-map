import Link from 'next/link';
import styles from './directory-header.module.scss';
import { strings } from '@/constants/strings.constants';

export default function DirectoryHeader() {
  return (
    <div className={styles.container}>
      <span className={styles.appName}>{strings.appName}</span>
      <Link href="/release-notes" className={styles.releaseNotesLink}>
        {strings.releaseNotesLinkText}
      </Link>
    </div>
  );
}
