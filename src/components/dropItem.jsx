import '../css/dndItem.css';

import { useDraggable } from '@dnd-kit/core';

export default function DropItem(props) {
  const { id, alt, image } = props.item;
  const { active, attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: id,
      attributes: { roleDescription: alt },
    });

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : 'none',
        transition: isDragging ? "none" : "transform 0.3s",
      }}
      {...listeners}
      {...attributes}
      aria-describedby={alt}
      className='itemButton'
    >
      <img className='image' {...image} style={{ pointerEvents: "none" }} />
      <div className='arrows'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          className='bi bi-arrows-move'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z'
          />
        </svg>
      </div>
    </button>
  );
}
