'use client';
import './css/page.css';

import { createRef, useCallback, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import DndPage from './dndPage';
import MultiChoicePage from './multiChoicePage';
import VideoPage from './videoPage';
import Celebration from './celebration';

const getComponentForType = (type) => {
  switch (type) {
    case "matching": return DndPage;
    case "multiple-choice": return MultiChoicePage;
    case "video": return VideoPage;
    default: return ({ advanceStep }) => <div><p>Missing component for type `{type}`</p><button onClick={() => advanceStep()}>Next &gt;</button></div>;
  }
}

export default function Home({ config, onSequenceFinished }) {
  const { sequence } = config || {};
  const [stepNumber, setStepNumber] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const refs = useRef(sequence.map(() => createRef()));
  const nodeRef = refs.current[stepNumber];

  const advanceStep = useCallback((inc = 1) => {
    if (stepNumber + inc >= sequence.length) {
      setShowCelebration(true);
      setTimeout(() => {
        onSequenceFinished?.() || console.log("Sequence finished");
      }, 5000);
    } else {
      setTimeout(() => {
        setStepNumber(stepNumber + 1);
      }, 1000);
    }
  }, [stepNumber]);

  const StepComponent = getComponentForType(sequence?.[stepNumber]?.type);

  return (
    <main>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={stepNumber}
          nodeRef={nodeRef}
          timeout={500}
          classNames='transition'
          addEndListener={(done) => {
            nodeRef.current.addEventListener('transitionend', done, false);
          }}
        >
          <div ref={nodeRef}>
            <StepComponent config={sequence?.[stepNumber]} advanceStep={advanceStep} />
            {!!showCelebration && <Celebration />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}
