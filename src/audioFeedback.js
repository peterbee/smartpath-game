import Ding from './audio/ding.mp3';
import Buzzer from './audio/buzzer.mp3';

const sounds = {
  true: new Audio(Ding),
  false: new Audio(Buzzer),
  "ding": new Audio(Ding),
  "try-again": new Audio(Buzzer),
}

export default {
  play: (sound) => sounds[sound] ? sounds[sound].play() : sounds[false].play(),
};
