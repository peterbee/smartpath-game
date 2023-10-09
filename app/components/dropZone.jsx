import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ title }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const hoverStyle = 'border-dashed border-blue p-4';

  return (
    <div
      ref={setNodeRef}
      className='border-[5px] border-black grow h-[477px] mx-[50px] my-8'
    >
      <h1 className='text-center text-5xl tracking-wide font-bold mt-4'>
        {title}
      </h1>
    </div>
  );
}
