import { DndContext } from '@dnd-kit/core';

import DropZone from './components/dropZone';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full items-center justify-around font-mono text-sm lg:flex'>
        <DndContext>
          <DropZone title='Good' />
          <DropZone title='Service' />
        </DndContext>
      </div>
    </main>
  );
}
