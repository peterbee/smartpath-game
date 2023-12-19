import '../css/dndZone.css';

import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ html, id, index, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { current: index },
  });

  return (
    <div ref={setNodeRef} className={`dropContainer ${isOver ? `over` : null}`}>
      <h1 className='title' dangerouslySetInnerHTML={{ __html: html }} />
      {children}
    </div>
  );
}
