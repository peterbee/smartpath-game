import '../css/video.css';

import { useCallback, useRef, useState } from 'react';

export default ({ onFinished, ...props }) => {
  const videoRef = useRef();
  const [showPlayButton, setShowPlayButton] = useState();

  const showPlayButtonTrue = useCallback(() => setShowPlayButton(p => p !== false), []);
  const hidePlayButton = useCallback(() => setShowPlayButton(false), []);

  return (
    <div id="video-container" className="video-container">
      <video autoPlay controls={true} width="100%" ref={videoRef}
        onCanPlayThrough={showPlayButtonTrue}
        onPlaying={hidePlayButton}
        onEnded={onFinished}>
        <source type={"video/mp4"} {...props} />
      </video>
      {!!showPlayButton
        && <div className="video-overlay">
          <button className="video-play" onClick={() => videoRef.current?.play()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" viewBox="0 0 15 16">
              <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
            </svg>
          </button>
        </div>}
    </div>
  );
}
