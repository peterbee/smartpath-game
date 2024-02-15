import Ding from './audio/ding.mp3';
import Buzzer from './audio/buzzer.mp3';

let playing = Promise.resolve();

const sounds = {
  true: Ding,
  false: Buzzer,
}

const playVideo = (source, onFinished, parentNode) => {
  let videoHasStartedPlaying = false;

  const videoContainer = document.createElement("div");
  videoContainer.className = "video-container";
  videoContainer.style = "position: absolute; top: 0; left: 0; right: 0; bottom: 0;";

  const videoNode = document.createElement("video");
  videoNode.src = source;
  videoNode.autoplay = videoNode.controls = true;

  const playButton = document.createElement("button");
  playButton.className = "video-play";
  playButton.onclick = () => videoNode.play();
  playButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" viewBox="0 0 15 16">
      <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
    </svg>
  `;

  videoNode.oncanplaythrough = () => !videoHasStartedPlaying && videoContainer.appendChild(playButton);
  videoNode.onplaying = () => {
    videoHasStartedPlaying = true;
    try { videoContainer.removeChild(playButton) } catch (e) { };
  }
  videoNode.onended = () => {
    parentNode.removeChild(videoContainer);
    onFinished();
  };

  videoContainer.appendChild(videoNode);
  parentNode.appendChild(videoContainer);
}

const playAudio = (source, onFinished, _parentNode) => {
  const audio = new Audio(source);
  audio.onended = onFinished;
  audio.play();
}

export default {
  isFinished: async () => await playing,
  play: (media) => {
    const playFn = media?.type === "video" ? playVideo : playAudio;
    const source = media?.src || sounds[media || false];
    playing = new Promise(r => playFn(source, r, document.getElementById("root")));
  }
};
