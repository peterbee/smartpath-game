'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';

import Chocolate from '../public/assets/chocolate.png';
import Joel from '../public/assets/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';
import DndPage from './dndPage';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <DndPage />
      <div>placeholder</div>
    </main>
  );
}
