'use client';
import './css/multiChoice.css';

import { useEffect, useState } from 'react';

import feedback from './mediaFeedback';
import MultiAnswer from './components/MultiAnswer';
// import AnswerModal from './components/AnswerModal';

export default function MultiChoicePage({ advanceStep, config }) {
  const answers = config.options;

  function selectAnswer(answer) {
    feedback.play(answer.feedback || answer.correct);
    if (answer.correct) {
      advanceStep(answer.goto);
    }
  }

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
