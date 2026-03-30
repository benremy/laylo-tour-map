'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TourMap } from '@/modules/map/components/tour-map/tour-map.component';

export default function MapPage() {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('laylo-auth')) {
      router.replace('/');
    }
  }, [router]);

  return (
    <main className="page-map">
      <TourMap />
    </main>
  );
}
