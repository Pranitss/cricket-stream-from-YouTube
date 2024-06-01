// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace 'VIDEO_ID' with the YouTube video ID of the live stream.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '800',
        videoId: 'VIDEO_ID',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // Optional: Add event handling for player state changes if needed.
}
