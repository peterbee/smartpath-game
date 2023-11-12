'use client';
import './css/multiChoice.css';

import { useState } from 'react';

import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

import HotDogStand from '../public/assets/hot-dog-cart.png';
import MultiAnswer from './components/MultiAnswer';

export default function MultiChoicePage({ setChange }) {
  const answers = [
    { id: 1, text: 'Cash', correct: true },
    { id: 2, text: 'Card', correct: false },
  ];
  const question = "What's the best type of payment?";

  const [selected, setSelected] = useState(null);

  function selectAnswer(answer) {
    setSelected(answer.correct);
  }

  if (!!selected) return setChange(false);

  return (
    <article className='container'>
      <div className='questionContainer'>
        <h1 className='question'>{question}</h1>
        {selected === true && <p className='reply correct'>Correct!</p>}
        {selected === false && (
          <CSSTransition classNames='transition' in={!selected} timeout={500}>
            <p className='reply incorrect'>Nope, try again!</p>
          </CSSTransition>
        )}
      </div>
      <Image src={HotDogStand} alt='drawing of hot dog stand' />
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
