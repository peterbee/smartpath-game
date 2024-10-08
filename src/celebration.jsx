import './css/celebration.css';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const StarIcon = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    className="star" viewBox="0 0 600 475" xmlSpace="preserve">
    <g>
      <path style={{ fillRule: "evenodd", clipRule: "evenodd", stroke: "black", strokeWidth: "0.5rem", fill: "yellow" }} d="M331.9,56.7l32.6,79.8c2.5,6.2,8,10.1,14.6,10.6l86,6.4c14.2,1,25.7,10.1,30.1,23.6
		c4.4,13.5,0.4,27.6-10.5,36.8l-65.9,55.7c-5.1,4.3-7.2,10.7-5.6,17.2l20.5,83.8c3.4,13.8-1.6,27.6-13.2,35.9
		c-11.5,8.4-26.1,8.9-38.2,1.4l-82.4-51l-82.4,51c-12.1,7.5-26.7,7-38.2-1.4c-11.5-8.4-16.5-22.1-13.2-35.9l20.5-83.8
		c1.6-6.5-0.5-12.9-5.6-17.2l-65.9-55.7c-10.9-9.2-14.9-23.3-10.5-36.8c4.4-13.5,15.9-22.6,30.1-23.6l86-6.4
		c6.7-0.5,12.1-4.4,14.6-10.6l32.6-79.8c5.4-13.2,17.5-21.3,31.8-21.3C314.4,35.3,326.5,43.5,331.9,56.7L331.9,56.7z"/>
    </g>
  </svg>
);

export default () => {
  useEffect(() => {
    confetti({ gravity: 0.25, origin: { x: 0, y: 0.75 }, angle: 60 });
    confetti({ gravity: 0.25, origin: { x: 1, y: 0.75 }, angle: 120 });
  }, []);

  return (
    <div className="celebration">
      <StarIcon />
      <h1>{document?.documentElement?.lang?.toLowerCase().startsWith("es") ? "¡Buen Trabajo!" : "Great Job!"}</h1>
    </div>
  )
}
