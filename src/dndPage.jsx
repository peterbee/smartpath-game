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
  const [correct, setCorrect] = useState(0);
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
    if (!over) return;
    if (over.id !== tokens[activeId].answer) return audio.play(false);

    setZones((zones) => {
      return zones.map((zone) => {
        const remainingItems = zone.itemIds.filter((id) => id != activeId);
        if (zone.id === over.id) remainingItems.push(activeId);
        return { ...zone, itemIds: remainingItems };
      });
    });
    setCorrect((prev) => prev + 1);
    audio.play(true);
    return setActiveId(null);
  }

  useEffect(() => {
    if (correct === 2) {
      setTimeout(advanceStep, 1000);
    }
  }, [advanceStep, correct]);

  return (
    <article className='dndBox'>
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
        <div className='itemContainer'>
          {zones[0]?.itemIds?.map((id) => {
            const item = tokens[id];
            return <DropItem key={id} item={item} />;
          })}
          {correct === 2 && <p className='reply correct'>Correct!</p>}
        </div>
      </DndContext>
    </article>
  );
}
