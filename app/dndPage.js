'use client';

import { useState } from 'react';

import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';

import Chocolate from '../public/assets/Chocolate_narrow.png';
import Joel from '../public/assets/Joel_narrow.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

const items = {
  1: { src: Joel, id: 1, alt: 'drawing of a boy doing a cartwheel' },
  2: { src: Chocolate, id: 2, alt: 'drawing of a chocolate bar' },
};

export default function DndPage() {
  const [containers, setContainers] = useState([
    { id: 'hold', title: '', items: Object.keys(items) },
    { id: 'good', title: 'Good', items: [] },
    { id: 'service', title: 'Service', items: [] },
  ]);

  const [activeId, setActiveId] = useState(null);

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { over } = event;
    if (!over) return;

    setContainers((containers) => {
      return containers.map((container) => {
        const remainingItems = container.items.filter((id) => id != activeId);
        if (container.id === over.id) remainingItems.push(activeId);
        return { ...container, items: remainingItems };
      });
    });
    return setActiveId(null);
  }

  return (
    <article className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={containers}>
          <div className='z-10 w-full items-center justify-around text-sm lg:flex'>
            {containers.slice(1).map((container, i) => {
              return (
                <DropZone
                  key={container.id}
                  id={container.id}
                  title={container.title}
                  index={i}
                >
                  {container.items?.map((id) => {
                    const item = items[id];
                    return <DropItem key={item.id} item={item} />;
                  })}
                </DropZone>
              );
            })}
          </div>
          <div className='flex'>
            {containers[0]?.items?.map((id) => {
              const item = items[id];
              return <DropItem key={item.id} item={item} />;
            })}
          </div>
        </SortableContext>
      </DndContext>
    </article>
  );
}
