'use client';

import { useRouter } from 'next/navigation';
import { logout } from './logout-btn.service';

export function useLogoutBtn() {
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push('/');
  }

  return { handleLogout };
}
