'use client';

import { useState } from 'react';

import DndPage from './dndPage';
import MultiChoicePage from './multiChoicePage';

export default function Home() {
  const [interactive, setInteractive] = useState('dnd');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {interactive == 'dnd' && <DndPage setInteractive={setInteractive} />}
      {interactive == 'multichoice' && <MultiChoicePage />}
    </main>
  );
}
