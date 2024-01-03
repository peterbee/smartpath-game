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
        onClick={() => videoRef.current?.play()}>Play</button>}
    </article>
  )
}
