'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MapPage() {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem('laylo-auth')) {
      router.replace('/');
    }
  }, [router]);

  return null;
}
