'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';

import Joel from '../public/images/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function Home() {
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event) {
    console.log('EVENT', event, event.over);
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
  console.log('is dropped', isDropped);
  const draggable = (
    <DropItem>
      <Image src={Joel} alt='drawing of a boy doing a cartwheel' />
    </DropItem>
  );

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='z-10 w-full items-center justify-around font-mono text-sm lg:flex'>
          <DropZone title='Good'>{isDropped ? draggable : null}</DropZone>
          {/* <DropZone title='Service'>{isDropped ? draggable : null}</DropZone> */}
        </div>
        {!isDropped ? draggable : null}
      </DndContext>
    </main>
  );
}
