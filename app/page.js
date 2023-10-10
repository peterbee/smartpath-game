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
    { title: 'Good', id: 'good' },
    { title: 'Service', id: 'service' },
  ]);
  const [items, setItems] = useState([]);
  const [parent, setParent] = useState();
  const [activeId, setActiveId] = useState(null);

  // const containers = [
  //   { title: 'Good', id: 'good' },
  //   { title: 'Service', id: 'service' },
  // ];

  const images = [
    { src: Joel, id: 1, alt: 'drawing of a boy doing a cartwheel' },
    { src: Chocolate, id: 2, alt: 'drawing of a chocolate bar' },
  ];

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
    const newItem = active.data.current?.title;
    const list = [...items];
    list.push(newItem);
    setItems(list);
  }

  function handleDragEnd(event) {
    const { over } = event;

    // console.log('OVER', event, over);
    const toAdd = containers.find((container) => container.id === over.id);
    console.log('ADD', toAdd);
    const newItem = images.find((image) => image.id === activeId);
    const updated = { ...toAdd, item: newItem };
    setContainers((containers) => [...containers, updated]);
    // setParent(over ? over.id : null);
    // setItems(null);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className='z-10 w-full items-center justify-around font-mono text-sm lg:flex'>
          {containers.map((contain) => {
            console.log('IN CONTAINERS', contain);
            return (
              <DropZone key={contain.id} id={contain.id} title={contain.title}>
                {contain.item?.src && (
                  <Image src={contain.item.src} alt={contain.item.alt} />
                )}
              </DropZone>
            );
          })}
        </div>
        {/* {parent === null ? draggable : null} */}
        <div className='flex justify-between'>
          {images.map((img) => {
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
