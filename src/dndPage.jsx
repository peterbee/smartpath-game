'use client';
import './css/dnd.css';

import { useEffect, useState } from 'react';

import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

import audio from './audioFeedback';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function DndPage({ advanceStep, config }) {
  const tokens = config.tokens.map((t, i) => ({ id: i + "", ...t }));

  const [zones, setZones] = useState([
    { itemIds: Array(tokens.length).fill().map((_, i) => i) },
    ...config.zones.map(zone => ({ ...zone, itemIds: [] })),
  ]);
  const [activeId, setActiveId] = useState(null);

  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, keyboardSensor, touchSensor);

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { over } = event;
    // if item is dropped outside of a drop zone
    if (!over) return;

    const dropZone = zones.find(z => z.id === over.id);
    // if the drop zone already has the maximum number of allowed items
    if (dropZone.maxItems === 0 || (dropZone.itemIds?.length >= (dropZone.maxItems || config.maxItems))) return;
    // if drop zone is incorrect
    if (![tokens[activeId].answer].flat().includes(over.id)) return audio.play(false);


    setZones((zones) => {
      return zones.map((zone) => {
        const remainingItems = zone.itemIds.filter((id) => id != activeId);
        if (zone.id === over.id) remainingItems.push(activeId);
        return { ...zone, itemIds: remainingItems };
      });
    });
    audio.play(true);
    return setActiveId(null);
  }

  useEffect(() => {
    if (!zones[0]?.itemIds?.length) {
      setTimeout(advanceStep, 1000);
    }
  }, [advanceStep, zones]);

  return (
    <article className='dndBox' style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      {!!config.html && <h1 className='question' dangerouslySetInnerHTML={{ __html: config.html }} />}
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToWindowEdges]}
      >
        <div className='dropZone'>
          {zones.slice(1).map((zone, i) => {
            return (
              <DropZone
                index={i}
                key={i}
                {...zone}
              >
                {zone.itemIds?.map((id) => {
                  const item = tokens[id];
                  return <DropItem key={id} item={item} />;
                })}
              </DropZone>
            );
          })}
        </div>
        <div className='footer'>
          {zones[0]?.itemIds?.map((id) => {
            const item = tokens[id];
            return <DropItem key={id} item={item} />;
          })}
          {/* {correct === 2 && <p className='reply correct'>Correct!</p>} */}
        </div>
      </DndContext>
    </article>
  );
}
