'use client';

import { useState, useEffect } from 'react';
import { mockShows } from '@/data/mock-shows.data';
import type { Show } from '@/modules/map/tour.types';

interface StoredTickets {
  [showId: string]: { showId: string; claimedAt: string };
}

const STORAGE_KEY = 'laylo-tickets';

export function useTicketPage(showId: string) {
  const show: Show | null = mockShows.find((s) => s.id === showId) ?? null;
  const [isClaimed, setIsClaimed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const tickets: StoredTickets = JSON.parse(stored);
    if (tickets[showId]) setIsClaimed(true);
  }, [showId]);

  function handleClaim() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const tickets: StoredTickets = stored ? JSON.parse(stored) : {};
    tickets[showId] = { showId, claimedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    setIsClaimed(true);
  }

  return { show, isClaimed, handleClaim };
}
