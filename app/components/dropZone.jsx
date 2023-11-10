import '../css/dndZone.css';

import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ title, id, index, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { current: index },
  });

  return (
    <div ref={setNodeRef} className='dropContainer'>
      <h1 className='title'>{title}</h1>
      {children}
    </div>
  );
}
