'use client';
import './css/page.css';

import { useRef, useState } from 'react';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import DndPage from './dndPage';
import MultiChoicePage from './multiChoicePage';

export default function Home() {
  const [change, setChange] = useState(false);
  const dndRef = useRef(null);
  const multiRef = useRef(null);
  const nodeRef = change ? multiRef : dndRef;

  return (
    <main>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={change}
          nodeRef={nodeRef}
          timeout={500}
          classNames='transition'
          addEndListener={(done) => {
            nodeRef.current.addEventListener('transitionend', done, false);
          }}
        >
          <div ref={nodeRef}>
            {change ? (
              <MultiChoicePage setChange={setChange} />
            ) : (
              <DndPage setChange={setChange} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}
