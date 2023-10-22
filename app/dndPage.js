'use client';

import { useState } from 'react';

import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';

import Chocolate from '../public/assets/Chocolate_narrow.png';
import Joel from '../public/assets/Joel_narrow.png';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function DndPage() {
  const [containers, setContainers] = useState([
    { id: 'good', title: 'Good', item: {} },
    { id: 'service', title: 'Service', item: {} },
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
      const updatedOld = { ...oldContainer, item: {} };
      const dupContainers = [...containers];
      dupContainers.splice(dupContainers.indexOf(oldContainer), 1, updatedOld);
      dupContainers.splice(
        dupContainers.indexOf(newContainer),
        1,
        addedContainer
      );
      return setContainers(dupContainers);
    }

    setContainers((containers) => {
      const newArray = [...containers];
      const addedIndex = containers.indexOf(newContainer);
      newArray.splice(addedIndex, 1, addedContainer);
      return newArray;
    });
    setItems((items) => items.filter((item) => item.id !== activeId));
    return setActiveId(null);
  }

  return (
    <article className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={containers}>
          <div className='z-10 w-full items-center justify-around text-sm lg:flex'>
            {containers.map((container, i) => {
              return (
                <DropZone
                  key={container.id}
                  id={container.id}
                  title={container.title}
                  index={i}
                >
                  {container.item?.src && (
                    <DropItem
                      key={container.item.id}
                      id={container.item.id}
                      alt={container.item.alt}
                    />
                  )}
                </DropZone>
              );
            })}
          </div>
          <div className='flex'>
            {items &&
              items.map((img) => {
                return <DropItem key={img.id} img={img} />;
              })}
          </div>
        </SortableContext>
      </DndContext>
    </article>
  );
}

{
  /* <Image
                        src={container.item.src}
                        alt={container.item.alt}
                      />
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        class='bi bi-arrows-move'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z'
                        />
                      </svg>
                    </DropItem> */
}
