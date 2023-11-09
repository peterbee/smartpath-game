'use client';

import { useRef, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import DndPage from './dndPage';
import MultiChoicePage from './multiChoicePage';

const styles = {
  transitionEnter: {
    opacity: 0,
  },
  transitionEnterActive: {
    opacity: 1,
    transition: 'opacity 400ms',
  },
  transitionExit: {
    opacity: 1,
  },
  transitionExitActive: {
    opacity: 0,
    transition: 'opacity 400ms',
  },
};

export default function Home() {
  const [change, setChange] = useState(false);
  const nodeRef = useRef(null);

  let answered;
  function changeComponent() {
    if (!!answered) setChange(!change);
  }
  console.log(change);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
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
          styles={{ ...styles }}
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
          styles={{ ...styles }}
        >
          <MultiChoicePage />
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
