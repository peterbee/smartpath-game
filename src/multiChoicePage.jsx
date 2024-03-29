'use client';
import './css/multiChoice.css';

import { useEffect, useState } from 'react';

import feedback from './mediaFeedback';
import MultiAnswer from './components/MultiAnswer';
// import AnswerModal from './components/AnswerModal';

export default function MultiChoicePage({ advanceStep, config }) {
  const answers = config.options;
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function selectAnswer(answer) {
    setSelected(answer.correct);
    setIsOpen(true);
    feedback.play(answer.feedback || answer.correct);
  }

  useEffect(() => {
    if (!!selected) {
      advanceStep();
    }
  }, [advanceStep, selected]);

  return (
    <article style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      <div className='question' dangerouslySetInnerHTML={{ __html: config.html }} />
      <div className='footer'>
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
