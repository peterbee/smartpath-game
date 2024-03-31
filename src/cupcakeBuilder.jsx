'use client';
import './css/cupcakeBuilder.css';

import { useCallback, useEffect, useState } from 'react';
import feedback from './mediaFeedback';

export default function CupcakeBuilder({ advanceStep, config }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const totalPrice = Object.values(selectedItems).filter(Boolean).map(({ price }) => price).reduce((a, n) => a + n, 0);

  const toggleItem = useCallback(item => {
    setSelectedItems(items => {
      if (items.includes(item)) {
        return items.filter(i => i !== item);
      } else {
        const newTotal = totalPrice + item.price;
        const totalItems = items.length + 1;
        const activityComplete = newTotal === config.budget && totalItems === config.maxItems;
        if ((newTotal < config.budget && totalItems < config.maxItems) || activityComplete) {
          feedback.play(config.feedback?.correct || true);
          if (activityComplete) advanceStep();
          return [...items, item];
        }
        else {
          feedback.play(config.feedback?.incorrect);
          return items;
        }
      }
    });
  }, [totalPrice]);

  return (
    <article className="cupcakeBuilderPage" style={{ backgroundImage: `url(${config.backgroundImage || ''})` }}>
      {!!config.html && <div dangerouslySetInnerHTML={{ __html: config.html }} />}
      <div className="flex-row">
        <div className="budget">
          {Array(config.budget).fill().map((_, i) =>
            <img key={i}
              style={{ maxHeight: (40 / config.budget) + "rem" }}
              {...config.currency?.image}
              className={totalPrice > i ? "unavailable" : ""} />)}
        </div>
        <div className="tokens">
          {config.tokens?.map((item, i) => {
            const { image, name, price } = item;
            return (
              <button key={i}
                className={selectedItems.includes(item) ? "selected" : ""}
                onClick={() => toggleItem(item)}>
                <img style={{ maxHeight: (40 / Math.ceil(config.tokens.length / 2)) + "rem" }} {...image} />
                <div>{name} ${price}</div>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
