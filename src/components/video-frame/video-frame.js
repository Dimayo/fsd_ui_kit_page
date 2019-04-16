// get elements

const player = document.querySelector('.video-frame');
const video = player.querySelector('.video-frame__viewer');
const progress = player.querySelector('.video-frame__progress');
const progressBar = player.querySelector('.video-frame__filled');
const toggle = player.querySelector('.video-frame__toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullscreen = player.querySelector('.video-frame__fullscreen');
let playImageDisplay = document.querySelector('.video-frame__play-image');
let pauseImageDisplay = document.querySelector('.video-frame__pause-image');

// build functions

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    if (video.paused) {
        playImageDisplay.style.display = 'block';
        pauseImageDisplay.style.display = 'none';
    } else {
        playImageDisplay.style.display = 'none';
        pauseImageDisplay.style.display = 'block';
    }
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// fullscreen function
function toggleFullscreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.msRequestFullscreen) {
            player.msRequestFullscreen();
        } else if (player.mozRequestFullScreen) {
            player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
            player.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

// hook up the eventlisteners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// fullscreen button
fullscreen.addEventListener('click', toggleFullscreen);
