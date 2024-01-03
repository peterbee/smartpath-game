import './css/video.css';

import { useCallback, useEffect, useRef, useState } from 'react';

export default ({ advanceStep, config: { video } }) => {
  const videoRef = useRef();
  const [showControls, setShowControls] = useState(true);

  const hideControls = useCallback(() => setShowControls(false), []);
  const nextSlide = useCallback(() => advanceStep(), []);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.removeEventListener('playing', hideControls);
    videoRef.current.addEventListener('playing', hideControls);
    videoRef.current.removeEventListener('ended', nextSlide);
    videoRef.current.addEventListener('ended', nextSlide);
  }, []);

  return (
    <article style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh" }}>
      <video autoPlay controls={false} width="100%" ref={videoRef}>
        <source type={"video/mp4"} {...video} />
      </video>
      {!!showControls && <button className="video-play"
        onClick={() => videoRef.current?.play()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" viewBox="0 0 15 16">
          <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
        </svg>
      </button>}
    </article>
  )
}
