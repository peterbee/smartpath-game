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

import feedback from './mediaFeedback';
import DropItem from './components/dropItem';
import DropZone from './components/dropZone';

export default function DndPage({ advanceStep, config }) {
  const tokens = config.tokens.map((t, i) => ({ id: i + "", ...t }));

  const [zones, setZones] = useState([
    { itemIds: tokens.map(({ id }) => id) },
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
    setActiveId(active.id.split("-")[1]);
  }

  function handleDragEnd(event) {
    const { over } = event;
    // if item is dropped outside of a drop zone
    if (!over) return;

    const dropZone = zones.find(z => z.id === over.id);
    const token = tokens[activeId];
    // if the drop zone already has the maximum number of allowed items
    if (dropZone.maxItems === 0 || (dropZone.itemIds?.length >= (dropZone.maxItems || config.maxItems))) return;
    // if drop zone is incorrect
    if (![token.answer].flat().includes(over.id)) return feedback.play(token.feedback?.incorrect || false);


    setZones((zones) => {
      return zones.map((zone, zoneIndex) => {
        const remainingItems = (!!config.infiniteTokens && !zoneIndex)
          ? zone.itemIds.map((id) => id.split(".")[0] == activeId ? activeId + "." + Date.now() : id)
          : zone.itemIds.filter((id) => id != activeId);
        if (zone.id === over.id) remainingItems.push(activeId);
        return { ...zone, itemIds: remainingItems };
      });
    });
    feedback.play(token.feedback?.correct || true);
    return setActiveId(null);
  }

  useEffect(() => {
    if (config.infiniteTokens) {
      if (zones?.slice(1).every(z => (z.itemIds?.length || 0) === (z.maxItems ?? 1)))
        advanceStep();
    } else if (!zones[0]?.itemIds?.length) {
      advanceStep();
    }
  }, [advanceStep, zones]);

  return (
    <article className='dndBox' style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToWindowEdges]}
      >
        <div className={['dndLayout', config.layout].flat().join(" ")}>
          {!!config.html && <div className='question' dangerouslySetInnerHTML={{ __html: config.html }} />}
          <div className='dropZone'>
            {zones.slice(1).map((zone, i) => {
              return zone.maxItems === 0
                ? <div className="dropContainer disabled">{zone.html}</div>
                : (
                  <DropZone
                    index={i}
                    key={i}
                    {...zone}
                  >
                    {zone.itemIds?.map((id) => {
                      const item = tokens[id];
                      return <DropItem key={id} id={i + "-" + id} item={item} />;
                    })}
                  </DropZone>
                );
            })}
          </div>
        </div>
        <div className='footer'>
          {zones[0]?.itemIds?.map((id) => {
            const item = tokens[id.split(".")[0]];
            console.log("id", id);
            return <DropItem key={id} id={"footer-" + item.id} item={item} />;
          })}
          {/* {correct === 2 && <p className='reply correct'>Correct!</p>} */}
        </div>
      </DndContext>
    </article>
  );
}
