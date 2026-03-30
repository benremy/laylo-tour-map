'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormSubmitEvent } from './password-gate.types';

export interface UsePasswordGateReturn {
  password: string;
  error: boolean;
  setPassword: (value: string) => void;
  handleSubmit: (e: FormSubmitEvent) => void;
}

export function usePasswordGate(): UsePasswordGateReturn {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_GATE_PASSWORD) {
      sessionStorage.setItem('laylo-auth', '1');
      router.push('/map');
    } else {
      setError(true);
      setPassword('');
    }
  }

  function handleSetPassword(value: string) {
    setPassword(value);
    setError(false);
  }

  return { password, error, setPassword: handleSetPassword, handleSubmit };
}
