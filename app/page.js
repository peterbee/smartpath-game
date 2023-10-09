'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';

import Chocolate from '../public/images/chocolate.png';
import Joel from '../public/images/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function Home() {
  const [parent, setParent] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const containers = [
    { title: 'Good', id: 'good' },
    { title: 'Service', id: 'service' },
  ];
  const images = [
    { src: Joel, id: 1 },
    { src: Chocolate, id: 2 },
  ];

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);
    setActiveId(null);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className='z-10 w-full items-center justify-around font-mono text-sm lg:flex'>
          {containers.map((contain) => {
            return (
              <DropZone key={contain.id} id={contain.id} title={contain.title}>
                {parent === contain.id ? draggable : null}
              </DropZone>
            );
          })}
        </div>
        {/* {parent === null ? draggable : null} */}
        <div className='flex justify-between'>
          {images.map((img) => {
            return (
              <DropItem key={img.id} id={img.id}>
                <Image src={img.src} alt='drawing of a boy doing a cartwheel' />
              </DropItem>
            );
          })}
        </div>
      </DndContext>
    </main>
  );
}
