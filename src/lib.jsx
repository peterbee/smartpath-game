import './css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './page';

export default {
  Init: (rootElement, config, gameFinishedFunction) => {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <Game config={config} onSequenceFinished={gameFinishedFunction} />
      </React.StrictMode>
    );
  }
}
