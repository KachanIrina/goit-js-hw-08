console.log(`hello world`)
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle ((function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }), 1000));

player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
     seconds = evt.currentTarget.value;
     
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

localStorage.removeItem("videoplayer-current-time")