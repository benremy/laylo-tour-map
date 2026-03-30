'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TourMap } from '@/modules/map/components/tour-map/tour-map.component';
import { LogoutBtn } from '@/modules/auth/components/logoutBtn/logout-btn.component';
import styles from "./map.module.scss"

export default function MapPage() {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('laylo-auth')) {
      router.replace('/');
    }
  }, [router]);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <LogoutBtn />
      </div>
      <TourMap />
    </main>
  );
}
