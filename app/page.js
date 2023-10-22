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

/*  let initialItems;
  const [items, setItems] = useState({
    A: `A${0 + 1}`,
    B: `B${1 + 1}`,
    C: `C${2 + 1}`,
    D: `D${3 + 1}`,
  });

  const [containers, setContainers] = useState(Object.keys(items));
  const containerId = containers[1];
  console.log('WTF', items, containers, items[containerId]);
  */
