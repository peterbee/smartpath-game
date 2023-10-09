import { useDroppable } from '@dnd-kit/core';

export default function DropZone({ title }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const hoverStyle =
    'outline-[5px] outline-dashed outline-blue outline-offset-8';

  return (
    <div
      ref={setNodeRef}
      className={`border-[5px] border-black grow h-[477px] mx-[50px] my-8 ${
        isOver ?? hoverStyle
      }`}
    >
      <h1 className='text-center text-5xl tracking-wide font-bold mt-4'>
        {title}
      </h1>
    </div>
  );
}
