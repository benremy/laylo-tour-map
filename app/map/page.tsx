'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TourMap } from '@/modules/map/components/tour-map/tour-map.component';
import MapHeader from '@/modules/map/components/map-header/map-header.component';
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
      <MapHeader/>
      <TourMap />
    </main>
  );
}
