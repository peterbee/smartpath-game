'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';

import Chocolate from '../public/assets/chocolate.png';
import Joel from '../public/assets/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';
import DndPage from './dndPage';
import MultiChoicePage from './multiChoicePage';

export default function Home() {
  const [interactive, setInteractive] = useState('dnd');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {interactive == 'dnd' && <DndPage />}
      <MultiChoicePage />
    </main>
  );
}
