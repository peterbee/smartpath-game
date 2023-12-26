import Ding from './audio/ding.mp3';
import TryAgain from './audio/try-again.mp3';

const sounds = {
  true: new Audio(Ding),
  false: new Audio(TryAgain),
  "ding": new Audio(Ding),
  "try-again": new Audio(TryAgain),
}

export default {
  play: (sound) => sounds[sound] ? sounds[sound].play() : sounds[false].play(),
};
