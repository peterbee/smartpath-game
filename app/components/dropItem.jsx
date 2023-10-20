import { useDraggable } from '@dnd-kit/core';

export default function DropItem(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    attributes: { roleDescription: props.alt },
    data: { title: props.children },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className='rounded-lg border-blue border-[5px] mx-5'
    >
      {props.children}
    </button>
  );
}
