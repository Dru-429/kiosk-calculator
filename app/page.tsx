'use client';

import { useState } from 'react';
import KioskCalculator from '@/components/kiosk-calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <KioskCalculator />
    </main>
  );
}
