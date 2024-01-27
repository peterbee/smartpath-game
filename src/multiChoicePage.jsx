'use client';
import './css/multiChoice.css';

import { useEffect, useState } from 'react';

import audio from './audioFeedback';
import MultiAnswer from './components/MultiAnswer';
// import AnswerModal from './components/AnswerModal';

export default function MultiChoicePage({ advanceStep, config }) {
  const answers = config.options;
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function selectAnswer(answer) {
    setSelected(answer.correct);
    setIsOpen(true);
    audio.play(answer.feedback || answer.correct);
  }

  useEffect(() => {
    if (!!selected) {
      advanceStep();
    }
  }, [advanceStep, selected]);

  return (
    <article style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      <h1 className='question' dangerouslySetInnerHTML={{ __html: config.html }} />
      <div className='questionContainer'>
        <img {...config.image} />
        {/* {isOpen && <AnswerModal answer={selected} setIsOpen={setIsOpen} />} */}
      </div>
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
