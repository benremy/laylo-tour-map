'use client';

import { strings } from '@/constants/strings.constants';
import { useLogoutBtn } from './logout-btn.hook';
import { Button } from '@/components/ui/button';

export function LogoutBtn() {
  const { handleLogout } = useLogoutBtn();

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout}>
      {strings.logoutButtonText}
    </Button>
  );
}
