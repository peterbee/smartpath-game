import Ding from './audio/ding.mp3';
import Buzzer from './audio/buzzer.mp3';

const sounds = {
  true: Ding,
  false: Buzzer,
}

export default {
  play: (sound) => sound?.src
    ? new Audio(sound?.src).play()
    : new Audio(sounds[sound || false]).play(),
};
