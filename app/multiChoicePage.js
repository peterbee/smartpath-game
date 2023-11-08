'use client';
import { useState } from 'react';

import MultiAnswer from './components/MultiAnswer';

export default function MultiChoicePage() {
  const answers = [
    { id: 1, text: 'Yes', correct: true },
    { id: 2, text: 'No', correct: false },
  ];

  const question = "Does Maynard have enough money for the ship's repairs?";

  return (
    <div>
      <div className='flex m-7'>
        <p className='h-3/4 w-3/4'>shopping list image</p>
        <h1 className='text-7xl text-left leading-relaxed'>{question}</h1>
      </div>
      <div className='flex justify-around'>
        {answers.map((answer) => (
          <MultiAnswer key={answer.id} answer={answer} />
        ))}
      </div>
    </div>
  );
}
