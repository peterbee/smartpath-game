'use client';
import './css/multiChoice.css';

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
    <article className='container'>
      <div className='questionContainer'>
        <h1 className='question'>{question}</h1>
        {selected === true && (
          <CSSTransition classNames='transition' in={selected} timeout={500}>
            <p className='reply correct'>Correct!</p>
          </CSSTransition>
        )}
        {selected === false && (
          <CSSTransition classNames='transition' in={selected} timeout={500}>
            <p className='reply incorrect'>Nope, try again!</p>
          </CSSTransition>
        )}
      </div>
      <div className='answerContainer'>
        {answers.map((answer) => (
          <MultiAnswer
            key={answer.id}
            answer={answer}
            inputSelection={selectAnswer}
          />
        ))}
      </div>
    </article>
  );
}
