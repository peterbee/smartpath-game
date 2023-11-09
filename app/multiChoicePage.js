'use client';
import { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import MultiAnswer from './components/MultiAnswer';

export default function MultiChoicePage() {
  const answers = [
    { id: 1, text: 'Yes', correct: true },
    { id: 2, text: 'No', correct: false },
  ];
  const question = "Does Maynard have enough money for the ship's repairs?";

  const [selected, setSelected] = useState(null);

  function selectAnswer(answer) {
    setSelected(answer.correct);
  }

  return (
    <div className='w-4/5'>
      <div className='m-7'>
        <h1 className='text-6xl text-left leading-relaxed'>{question}</h1>
        {selected === true && (
          <CSSTransition classNames='transition' in={selected} timeout={500}>
            <p className='h-3/4 w-3/4 mt-5 text-4xl text-center text-green-600'>
              Correct!
            </p>
          </CSSTransition>
        )}
        {selected === false && (
          <CSSTransition classNames='transition' in={selected} timeout={500}>
            <p className='h-3/4 w-3/4 mt-5 text-4xl text-center text-red-600'>
              Nope, try again!
            </p>
          </CSSTransition>
        )}
      </div>
      <div className='flex justify-around'>
        {answers.map((answer) => (
          <MultiAnswer
            key={answer.id}
            answer={answer}
            inputSelection={selectAnswer}
          />
        ))}
      </div>
    </div>
  );
}
