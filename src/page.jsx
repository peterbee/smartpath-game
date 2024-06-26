'use client';
import './css/page.css';

import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import DndPage from './dndPage';
import CalculatorPage from './calculatorPage';
import CupcakeBuilder from './cupcakeBuilder';
import MultiChoicePage from './multiChoicePage';
import VideoPage from './videoPage';
import Celebration from './celebration';
import feedback from './mediaFeedback';

const getComponentForType = (type) => {
  switch (type) {
    case "matching": return DndPage;
    case "multiple-choice": return MultiChoicePage;
    case "video": return VideoPage;
    case "calculator": return CalculatorPage;
    case "cupcake": return CupcakeBuilder;
    default: return ({ advanceStep }) => <div><p>Missing component for type `{type}`</p><button onClick={() => advanceStep()}>Next &gt;</button></div>;
  }
}

export default function Home({ config }) {
  const { sequence } = config || {};
  const [stepNumber, setStepNumber] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const refs = useRef(sequence.map(() => createRef()));
  const nodeRef = refs.current[stepNumber];

  const advanceStep = useCallback(async (explicitStep) => {
    await feedback.onFinished();

    const gotoStep = explicitStep ?? stepNumber + 1;

    if (!sequence?.[gotoStep]) {
      setShowCelebration(true);
      setTimeout(() => {
        window.parent.postMessage({ event: "nextSlide" }, "*");
      }, 6000);
    } else {
      setStepNumber(gotoStep);
    }
  }, [stepNumber]);

  useEffect(() => {
    const media = sequence?.[stepNumber]?.media;
    if (media) feedback.play(media);
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
            nodeRef.current?.addEventListener('transitionend', done, false);
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
