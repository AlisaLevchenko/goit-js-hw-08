import { throttle } from 'lodash';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});

const previousTime = Number(localStorage.getItem('videoplayer-current-time'));

if (previousTime) {
  player.setCurrentTime(previousTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
