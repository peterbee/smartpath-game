'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';

import Joel from '../public/images/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function Home() {
  const [parent, setParent] = useState(null);
  const containers = [
    { title: 'Good', id: 'good' },
    { title: 'Service', id: 'service' },
  ];

  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
  }

  const draggable = (
    <DropItem>
      <Image src={Joel} alt='drawing of a boy doing a cartwheel' />
    </DropItem>
  );

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='z-10 w-full items-center justify-around font-mono text-sm lg:flex'>
          {containers.map((contain) => {
            return (
              <DropZone key={contain.id} id={contain.id} title={contain.title}>
                {parent === contain.id ? draggable : null}
              </DropZone>
            );
          })}
        </div>
        {parent === null ? draggable : null}
      </DndContext>
    </main>
  );
}
