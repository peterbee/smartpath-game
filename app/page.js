'use client';
import './css/page.css';

import { useRef, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import DndPage from './dndPage';
import MultiChoicePage from './multiChoicePage';

export default function Home() {
  const [change, setChange] = useState(false);
  const nodeRef = useRef(null);

  let answered;
  function changeComponent() {
    if (!!answered) setChange(!change);
  }
  console.log(change);
  return (
    <main>
      <TransitionGroup component={null}>
        <CSSTransition
          nodeRef={nodeRef}
          in={change}
          appear
          timeout={500}
          unmountOnExit
          classNames='transition'
          onEntered={changeComponent}
          onExit={changeComponent}
        >
          <DndPage answered={answered} />
        </CSSTransition>
        <CSSTransition
          nodeRef={nodeRef}
          in={change}
          timeout={500}
          unmountOnExit
          classNames='transition'
          onEntered={changeComponent}
          onExit={changeComponent}
        >
          <MultiChoicePage />
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
