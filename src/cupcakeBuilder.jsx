'use client';
import './css/cupcakeBuilder.css';

import { useCallback, useEffect, useState } from 'react';
import feedback from './mediaFeedback';

export default function CupcakeBuilder({ advanceStep, config }) {
  const [selectedItems, setSelectedItems] = useState([]);
  console.log("selectedItems", selectedItems);

  const totalPrice = Object.values(selectedItems).filter(Boolean).map(({ price }) => price).reduce((a, n) => a + n, 0);

  const toggleItem = useCallback(item => {
    setSelectedItems(items => {
      if (items.includes(item)) {
        return items.filter(i => i !== item);
      } else {
        if (totalPrice + item.price > config.budget) {
          feedback.play(config.feedback?.incorrect);
          return items;
        } else {
          feedback.play(config.feedback?.correct || true);
          return [...items, item];
        }
      }
    });
  }, [totalPrice]);

  // const clearAll = useCallback(() => {
  //   setNextAction();
  //   setNumericInput("0");
  //   setTotal(0);
  // }, []);

  // useEffect(() => {
  //   if (nextAction !== "=") return;

  //   if (total === config.answer) {
  //     feedback.play(config.feedback?.correct || true);
  //     advanceStep();
  //   } else {
  //     feedback.play(config.feedback?.incorrect);
  //     clearAll();
  //   }

  //   setNextAction();
  // }, [advanceStep, nextAction, total]);

  // const setNextAction = (action) => {
  //   if (numericInput) {
  //     setTotal(total => Math.round(1000 * actions[nextAction || "+"](total, parseFloat(numericInput))) / 1000);
  //     setNumericInput("");
  //   }
  //   setNextActionRaw(action);
  // }

  return (
    <article className="calculatorPage" style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      {!!config.html && <div dangerouslySetInnerHTML={{ __html: config.html }} />}
      <div className="flex-row">
        <div className="budget">
          {Array(config.budget).fill().map((_, i) =>
            <img key={i}
              style={{ height: (40 / config.budget) + "rem" }}
              {...config.currency?.image}
              className={totalPrice > i && "unavailable"} />)}
        </div>
        <div className="tokens">
          {config.tokens?.map((item, i) => {
            const { image, name, price } = item;
            return (
              <button key={i}
                className={selectedItems.includes(item) && "selected"}
                onClick={() => toggleItem(item)}>
                <img {...image} />
                {name} ${price}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
