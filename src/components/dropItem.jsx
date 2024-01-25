import '../css/dndItem.css';

import { useDraggable } from '@dnd-kit/core';

export default function DropItem(props) {
  const { id, alt, image, html } = props.item;
  const { active, attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: id,
      attributes: { roleDescription: alt },
    });

  const contentProp = html
    ? { dangerouslySetInnerHTML: !!html && { __html: html } }
    : { children: <img className='image' {...image} style={{ pointerEvents: "none" }} /> };

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
      {...contentProp}
    >
    </button>
  );
}
