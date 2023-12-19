'use client';
import './css/multiChoice.css';

import { useEffect, useState } from 'react';

import Ding from './audio/ding.mp3';
import TryAgain from './audio/try-again.mp3';
import MultiAnswer from './components/MultiAnswer';
import AnswerModal from './components/AnswerModal';

export default function MultiChoicePage({ advanceStep, config }) {
  const answers = config.options;
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  let correctSound = new Audio(Ding);
  let incorrectSound = new Audio(TryAgain);

  function playResponse(response) {
    if (response === true) {
      correctSound.play();
    } else {
      incorrectSound.play();
    }
  }

  function selectAnswer(answer) {
    setSelected(answer.correct);
    setIsOpen(true);
    playResponse(answer.correct);
  }

  useEffect(() => {
    if (!!selected) {
      setTimeout(advanceStep, 1000);
    }
  }, [advanceStep, selected]);

  return (
    <article className='container'>
      <h1 className='question' dangerouslySetInnerHTML={{ __html: config.html }} />
      <div className='questionContainer'>
        <img {...config.image} />
        {isOpen && <AnswerModal answer={selected} setIsOpen={setIsOpen} />}
      </div>
      <div className='answerContainer'>
        {answers.map((answer, index) => (
          <MultiAnswer
            key={index}
            answer={answer}
            inputSelection={selectAnswer}
          />
        ))}
      </div>
    </article>
  );
}
