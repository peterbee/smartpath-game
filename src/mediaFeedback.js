import Ding from './audio/ding.mp3';
import Buzzer from './audio/buzzer.mp3';

let playing = Promise.resolve();

const sounds = {
  true: Ding,
  false: Buzzer,
}

const playVideo = (source, onFinished) => {
  const videoNode = document.createElement("video");
  videoNode.style = "height: 100vh; width: 100vw; position: absolute; left: 0; right: 0; top: 0; bottom: 0;";
  videoNode.src = source;
  videoNode.autoplay = true;
  videoNode.onended = async () => {
    document.getElementById("root").removeChild(videoNode);
    onFinished();
  };
  document.getElementById("root").appendChild(videoNode);
}

export default {
  isFinished: async () => await playing,
  play: (sound) =>
    sound?.type === "video"
      ? playing = new Promise(r => playVideo(sound.src, r))
      : sound?.src
        ? new Audio(sound?.src).play()
        : new Audio(sounds[sound || false]).play(),
};
