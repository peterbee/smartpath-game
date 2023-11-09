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
    transition: 'opacity 200ms',
  },
  transitionExit: {
    opacity: 1,
  },
  transitionExitActive: {
    opacity: 0,
    transition: 'opacity 200ms',
  },
};

export default function Home() {
  const [interactive, setInteractive] = useState('dnd');
  const nodeRef = useRef(null);

  function changeComponent(text) {
    setInteractive(text);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <TransitionGroup component={null}>
        <CSSTransition
          nodeRef={nodeRef}
          in={interactive == 'dnd'}
          appear
          timeout={500}
          unmountOnExit
          classNames='transition'
          onExit={() => changeComponent('multichoice')}
          styles={{ ...styles }}
        >
          <DndPage setInteractive={setInteractive} />
        </CSSTransition>
        <CSSTransition
          nodeRef={nodeRef}
          in={interactive == 'multichoice'}
          timeout={500}
          unmountOnExit
          classNames='transition'
          onExit={() => changeComponent('dnd')}
          styles={{ ...styles }}
        >
          <MultiChoicePage />
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
