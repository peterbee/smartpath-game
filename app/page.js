'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';

import Chocolate from '../public/images/chocolate.png';
import Joel from '../public/images/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function Home() {
  const [containers, setContainers] = useState([
    { title: 'Good', id: 'good', item: {} },
    { title: 'Service', id: 'service', item: {} },
  ]);

  const [items, setItems] = useState([
    { src: Joel, id: 1, alt: 'drawing of a boy doing a cartwheel' },
    { src: Chocolate, id: 2, alt: 'drawing of a chocolate bar' },
  ]);

  const [parent, setParent] = useState();
  const [activeId, setActiveId] = useState(null);

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { over } = event;
    const newContainer = containers.find(
      (container) => container.id === over.id
    );

    const oldContainer = containers.find(
      (container) => container.item.id === activeId
    );

    const newItem = oldContainer
      ? oldContainer.item
      : items.find((image) => image.id === activeId);

    const addedContainer = { ...newContainer, item: newItem };

    if (!!oldContainer) {
      const removedContainer = { ...oldContainer, item: {} };
      setContainers(() => [addedContainer, removedContainer]);
      return;
    }

    setContainers((containers) => [
      ...containers.filter((contain) => contain.id !== addedContainer.id),
      addedContainer,
    ]);
    setItems((items) => items.filter((item) => item.id !== activeId));
    setActiveId(null);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className='z-10 w-full items-center justify-around font-mono text-sm lg:flex'>
          {containers.map((contain) => {
            return (
              <DropZone key={contain.id} id={contain.id} title={contain.title}>
                {contain.item?.src && (
                  <DropItem
                    key={contain.item.id}
                    id={contain.item.id}
                    alt={contain.item.alt}
                  >
                    <Image src={contain.item.src} alt={contain.item.alt} />
                  </DropItem>
                )}
              </DropZone>
            );
          })}
        </div>
        {/* {parent === null ? draggable : null} */}
        <div className='flex justify-between'>
          {items &&
            items.map((img) => {
              return (
                <DropItem key={img.id} id={img.id} alt={img.alt}>
                  <Image src={img.src} alt={img.alt} />
                </DropItem>
              );
            })}
        </div>
      </DndContext>
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
