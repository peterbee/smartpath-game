'use client';
import { useState } from 'react';

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
        {/* <p className='h-3/4 w-3/4'>shopping list image</p> */}
        <h1 className='text-6xl text-left leading-relaxed'>{question}</h1>
        {selected === true && (
          <p className='transition-opacity h-3/4 w-3/4 mt-5 text-4xl text-center text-green-600'>
            Correct!
          </p>
        )}
        {selected === false && (
          <p className='transition-opacity h-3/4 w-3/4 mt-5 text-4xl text-center text-red-600'>
            Nope, try again!
          </p>
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
