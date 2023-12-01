// content.js

function changeSpeed(video, speed) {
  if (video.playbackRate !== speed) {
    video.playbackRate = speed;
    console.log(`Velocidade alterada para ${speed}x`);
  }
}

document.addEventListener('keydown', function(event) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    if (event.key === 'd') {
      changeSpeed(video, video.playbackRate === 2 ? 2 : video.playbackRate + 0.5);
    } else if (event.key === 'r') {
      changeSpeed(video, video.playbackRate === 0.5 ? 0.5 : video.playbackRate - 0.5);
    }
  });
});
