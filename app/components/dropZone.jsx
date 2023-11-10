import '../css/dndZone.css';

import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ title, id, index, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { current: index },
  });

  const hoverStyle =
    'outline-[5px] outline-dashed outline-blue outline-offset-8';

  return (
    <div ref={setNodeRef} className='dropContainer'>
      <h1 className='title'>{title}</h1>
      {children}
    </div>
  );
}
