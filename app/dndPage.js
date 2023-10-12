'use client';

import { useState } from 'react';

import Image from 'next/image';

import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';

import Chocolate from '../public/images/chocolate.png';
import Joel from '../public/images/Joel_cartwheel.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function DndPage() {
  const [containers, setContainers] = useState([
    { title: 'Good', id: 'good', item: {} },
    { title: 'Service', id: 'service', item: {} },
  ]);

  const [items, setItems] = useState([
    { src: Joel, id: 1, alt: 'drawing of a boy doing a cartwheel' },
    { src: Chocolate, id: 2, alt: 'drawing of a chocolate bar' },
  ]);

  const [activeId, setActiveId] = useState(null);

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragOver({ active, over }) {
    console.log('IDs', active, over);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

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
      setContainers((containers) => {
        return arrayMove(
          containers,
          containers.indexOf(addedContainer.id),
          containers.indexOf(removedContainer.id)
        );
      });
    }

    setContainers((containers) => {
      const newArray = [...containers];
      const addedIndex = containers.indexOf(newContainer);
      newArray.splice(addedIndex, 1, addedContainer);
      return newArray;
    });

    setItems((items) => items.filter((item) => item.id !== activeId));
    setActiveId(null);
  }

  return (
    <article className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={containers}>
          <div className='z-10 w-full items-center justify-around text-sm lg:flex'>
            {containers.map((container) => {
              return (
                <DropZone
                  key={container.id}
                  id={container.id}
                  title={container.title}
                >
                  {container.item?.src && (
                    <DropItem
                      key={container.item.id}
                      id={container.item.id}
                      alt={container.item.alt}
                    >
                      <Image
                        src={container.item.src}
                        alt={container.item.alt}
                      />
                    </DropItem>
                  )}
                </DropZone>
              );
            })}
          </div>
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
        </SortableContext>
      </DndContext>
    </article>
  );
}
