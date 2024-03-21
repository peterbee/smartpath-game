'use client';
import './css/calculator.css';

import { useCallback, useEffect, useState } from 'react';
import feedback from './mediaFeedback';

const actions = {
  "+": (a, b) => a + b,
  "−": (a, b) => a - b,
  "×": (a, b) => a * b,
  "÷": (a, b) => a / b,
};


export default function CalculatorPage({ advanceStep, config }) {
  const [nextAction, setNextActionRaw] = useState();
  const [numericInput, setNumericInput] = useState("0");
  const [total, setTotal] = useState(0);

  const clearAll = useCallback(() => {
    setNextAction();
    setNumericInput("0");
    setTotal(0);
  }, []);

  useEffect(() => {
    if (nextAction !== "=") return;

    if (total === config.answer) {
      feedback.play(config.feedback?.correct || true);
      advanceStep();
    } else {
      feedback.play(config.feedback?.incorrect);
      clearAll();
    }

    setNextAction();
  }, [advanceStep, nextAction, total]);

  const setNextAction = (action) => {
    if (numericInput) {
      setTotal(total => Math.round(1000 * actions[nextAction || "+"](total, parseFloat(numericInput))) / 1000);
      setNumericInput("");
    }
    setNextActionRaw(action);
  }

  return (
    <article className="calculatorPage" style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      {!!config.html && <div dangerouslySetInnerHTML={{ __html: config.html }} />}
      <div className="flex-row">
        <div>
          <div className="calculator">
            <input readOnly value={((nextAction || total) ? total : "") + (nextAction || "") + numericInput} />
            <div className="calculator_numbers">
              <button onClick={clearAll}>Clear</button>
              {Array(10).fill().map((_, i) => i).slice(1).reverse().map((num) =>
                <button key={num} onClick={() => setNumericInput(n => parseFloat("" + n + num) + "")}>{num}</button>)}
              <button onClick={() => setNumericInput(n => !n ? "0." : n.includes(".") ? n : n + ".")}>.</button>
              <button onClick={() => setNumericInput(n => parseFloat("" + n + 0) + "")}>0</button>
            </div>
            <div className="calculator_actions">
              {Object.keys(actions).reverse().map((action) =>
                <button key={action} onClick={() => setNextAction(action)}>{action}</button>)}
              <button onClick={() => setNextAction("=")}>=</button>
            </div>
          </div>
        </div>
        <div>{!!config.image && <img src={config.image} />}</div>
      </div>
    </article>
  );
}
