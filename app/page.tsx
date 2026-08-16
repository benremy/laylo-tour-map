'use client';

import { VenueMap } from '@/modules/venue/components/venue-map/venue-map.component';
import { VenueSidebar } from '@/modules/venue/components/venue-sidebar/venue-sidebar.component';
import DirectoryHeader from '@/modules/venue/components/directory-header/directory-header.component';
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <DirectoryHeader />
      <div className={styles.body}>
        <VenueSidebar />
        <VenueMap />
      </div>
    </main>
  );
}
